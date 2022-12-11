import slugify from 'slugify'
import { ObjectId } from 'mongodb'

import mongoClient from '~/server/utils/mongoClient'

import { fetchAll, insertDoc, updateDoc } from '~/server/controllers/v1/factory'
import { deleteProducts } from '~/server/controllers/v1/products'

export default defineEventHandler(async (event) => {
  const query: any = useQuery(event)
  console.log('Query', query)
  let body: any

  switch (event.req.method) {
    case 'GET':
      // pipeline.push({ $search: { regex: { path: 'name', query: regex } } })
      const lookupObj = [
        // { $lookup: { from: 'media', localField: 'media', foreignField: '_id', as: 'media' } },
        // { $lookup: { from: 'oems', localField: 'oem', foreignField: '_id', as: 'oem' } },
        // { $lookup: { from: 'oempartnumbers', localField: 'oemPartNumber', foreignField: '_id', as: 'oemPartNumber' } },
        // { $unwind: { path: '$oem', preserveNullAndEmptyArrays: true } },
        // { $unwind: { path: '$oemPartNumber', preserveNullAndEmptyArrays: true } },
        // { $lookup: { from: 'oems', localField: 'oemPartNumber.oem', foreignField: '_id', as: 'oemPartNumber.oem' } },
        // { $unwind: { path: '$oemPartNumber.oem', preserveNullAndEmptyArrays: true } },
        // { $lookup: { from: 'eligibilities', localField: 'eligibilities', foreignField: '_id', as: 'eligibilities' } },
        // {
        //   $lookup: {
        //     from: 'nexthigherassemblies',
        //     localField: 'nextHigherAssemblies',
        //     foreignField: '_id',
        //     as: 'nextHigherAssemblies',
        //   },
        // },
      ]
      // return mongoClient.db().collection('products').find().toArray()
      return await fetchAll(event, query, 'oems', lookupObj)
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
