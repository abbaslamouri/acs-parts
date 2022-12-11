import slugify from 'slugify'
import { ObjectId } from 'mongodb'

import mongoClient from '~/server/utils/mongoClient'

import { fetchAll, insertDoc, updateDoc } from '~/server/controllers/v1/factory'
import { deleteProducts, fetchAttributesByName } from '~/server/controllers/v1/products'

export default defineEventHandler(async (event) => {
  const query: any = useQuery(event)
  console.log('Query', query)
  let body: any

  switch (event.req.method) {
    case 'GET':
      return await fetchAttributesByName(event, 'nexthigherassemblies')
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
