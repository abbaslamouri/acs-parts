import fs from 'fs'
import { S3, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3'

import slugify from 'slugify'
import { uploadFile, s3Client } from '~/server/controllers/v1/fileUpload'

import { ObjectId } from 'mongodb'
import errorHandler from '~/server/utils/errorHandler'
import AppError from '~/server/utils/AppError'

import mongoClient from '~/server/utils/mongoClient'

import { fetchAll, insertDoc, updateDoc } from '~/server/controllers/v1/factory'
import { deleteProducts } from '~/server/controllers/v1/products'

export default defineEventHandler(async (event) => {
  const query: any = useQuery(event)
  console.log('Query', query)
  let body: any

  switch (event.req.method) {
    case 'GET':
      try {
        // pipeline.push({ $search: { regex: { path: 'name', query: regex } } })
        const pipeline = [
          // { $match: { slug: query.slug } },
          { $lookup: { from: 'media', localField: 'media', foreignField: '_id', as: 'media' } },
          { $lookup: { from: 'oems', localField: 'oem', foreignField: '_id', as: 'oem' } },
          {
            $lookup: { from: 'oempartnumbers', localField: 'oemPartNumber', foreignField: '_id', as: 'oemPartNumber' },
          },
          { $unwind: { path: '$oem', preserveNullAndEmptyArrays: true } },
          { $unwind: { path: '$oemPartNumber', preserveNullAndEmptyArrays: true } },
          { $lookup: { from: 'oems', localField: 'oemPartNumber.oem', foreignField: '_id', as: 'oemPartNumber.oem' } },
          { $unwind: { path: '$oemPartNumber.oem', preserveNullAndEmptyArrays: true } },
          { $lookup: { from: 'eligibilities', localField: 'eligibilities', foreignField: '_id', as: 'eligibilities' } },
          {
            $lookup: {
              from: 'nexthigherassemblies',
              localField: 'nextHigherAssemblies',
              foreignField: '_id',
              as: 'nextHigherAssemblies',
            },
          },
        ]
        const docs = await mongoClient.db().collection('products').aggregate(pipeline).toArray()
        if (!docs) throw new AppError(`We were not able to fetch ${'products'}`, 400)
        const algoliaIndex = []
        for (const i in docs) {
          algoliaIndex[i] = { eligibilities: [], nextHigherAssemblies: [] }

          for (const j in docs[i].eligibilities) {
            algoliaIndex[i].eligibilities[j] = docs[i].eligibilities[j].name
          }
          for (const j in docs[i].nextHigherAssemblies) {
            algoliaIndex[i].nextHigherAssemblies[j] = docs[i].nextHigherAssemblies[j].name
          }
          // for (const j in docs[i].media) {
          //   docs[i].media[j] = { path: docs[i].media[j].filePath, name: docs[i].media[j].name }
          // }
          algoliaIndex[i].name = docs[i].name
          algoliaIndex[i]._id = docs[i]._id
          algoliaIndex[i].description = docs[i].description
          if (docs[i].media && docs[i].media.length) algoliaIndex[i].imageUrl = docs[i].media[0].url
          if (docs[i].oem) algoliaIndex[i].oem = docs[i].oem.name
          if (docs[i].oemPartNumber) algoliaIndex[i].oemPartNumber = docs[i].oemPartNumber.name
        }
        const xx = await s3Client.send(
          new PutObjectCommand({
            Bucket: process.env.NUXT_DO_SPACE_BUCKET,
            Key: 'algoliaIndex.json',
            Body: JSON.stringify(algoliaIndex),
            ACL: 'public-read',
          })
        )
        console.log('XX', xx)
        // await uploadFile('algoliaIndex.json', JSON.stringify(algoliaIndex))
        return algoliaIndex
      } catch (err) {
        errorHandler(event, err)
      }

      break

    case 'POST':
    case 'PATCH':
      body = await useBody(event)
      console.log('B', body)
      body.name = body.acsPartNumber
      body.slug = slugify(body.acsPartNumber, { lower: true })
      body.eligibilities = body.eligibilities.length ? body.eligibilities.map((el: any) => new ObjectId(el._id)) : []
      body.nextHigherAssemblies = body.nextHigherAssemblies.length
        ? body.nextHigherAssemblies.map((el: any) => el._id)
        : []
      body.media = body.media ? body.media.map((el: any) => el._id) : []
      if (Object.values(body.oem).length) body.oem = new ObjectId(body.oem._id)
      else delete body.oem
      if (Object.values(body.oemPartNumber).length) body.oem = new ObjectId(body.oemPartNumber._id)
      else delete body.oemPartNumber

      // body.oem = body.oem ? body.oem_id : undefined
      // body.oemPartNumber = body.oemPartNumber ? body.oemPartNumber._id : undefined
      body.dateCreated = new Date(Date.now())
      console.log('UUUUUUU', body)
      if (event.req.method === 'POST') return insertDoc(event, body, 'products')
      if (event.req.method === 'PATCH') return updateDoc(event, body, 'products')

      //   const updatedUser = await mongoClient
      //   .db()
      //   .collection('users')
      //   .replaceOne({ _id: new ObjectId(user._id) }, user)
      // console.log('US', updatedUser)
      // if (!updatedUser) throw new AppError('We cannot update document', 404)

      // return await createProduct(event)

      break

    case 'DELETE':
      body = await useBody(event)
      console.log('BBBBBB', body)
      return await deleteProducts(event, body)
      break

    default:
      break
  }
})
