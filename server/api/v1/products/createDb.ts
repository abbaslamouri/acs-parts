import slugify from 'slugify'
import { ObjectId } from 'mongodb'

import { MongoClient } from 'mongodb'
import { productSchema, nextHigherAssemblySchema, defaultSchema } from '~/server/utils/dbSchemas'

const mongoClient = new MongoClient(process.env.NUXT_DB_URL as string)

// import mongoClient from '~/server/utils/mongoClient'

// import { fetchAll, insertDoc, updateDoc } from '~/server/controllers/v1/factory'
// import { deleteProducts } from '~/server/controllers/v1/products'

export default defineEventHandler(async (event) => {
  // const body = await readBody(event)
  // console.log('BBBBB', body)
  const collections = await mongoClient.db().listCollections().toArray()
  // console.log('Collections', collections)

  // Create products colection and indexes
  const productCollection = collections.find((c) => c.name === 'products')
  if (productCollection) {
    await mongoClient.db().collection('products').deleteMany({})
  } else {
    await mongoClient.db().createCollection('products', productSchema)
    await mongoClient.db().collection('products').createIndex({ name: 1 }, { unique: true })
    await mongoClient
      .db()
      .collection('products')
      .createIndex(
        { name: 'text', oemPartNumber: 'text', description: 'text' },
        { weights: { name: 3, oemPartNumber: 2, decsription: 1 } }
      )
  }

  // Create eligibilities colection and indexes
  // const eligibilitiesCollection = collections.find((c) => c.name === 'products')
  if (collections.find((c) => c.name === 'eligibilities')) {
    await mongoClient.db().collection('eligibilities').deleteMany({})
  } else {
    await mongoClient.db().createCollection('eligibilities', defaultSchema)
    await mongoClient.db().collection('eligibilities').createIndex({ name: 1 }, { unique: true })
  }

  // Create nexthigherassemblies colection and indexes
  // const nexthigherassembliesCollection = collections.find((c) => c.name === 'products')
  if (collections.find((c) => c.name === 'nexthigherassemblies')) {
    await mongoClient.db().collection('nexthigherassemblies').deleteMany({})
  } else {
    await mongoClient.db().createCollection('nexthigherassemblies', nextHigherAssemblySchema)
    await mongoClient.db().collection('nexthigherassemblies').createIndex({ name: 1 }, { unique: true })
  }

  // Create oems colection and indexes
  // const oemsCollection = collections.find((c) => c.name === 'products')
  if (collections.find((c) => c.name === 'oems')) {
    await mongoClient.db().collection('oems').deleteMany({})
  } else {
    await mongoClient.db().createCollection('oems', defaultSchema)
    await mongoClient.db().collection('oems').createIndex({ name: 1 }, { unique: true })
  }

  // Create oempartnumbers colection and indexes
  // const oempartnumbersCollection = collections.find((c) => c.name === 'products')
  if (collections.find((c) => c.name === 'oempartnumbers')) {
    await mongoClient.db().collection('oempartnumbers').deleteMany({})
  } else {
    await mongoClient.db().createCollection('oempartnumbers', defaultSchema)
    await mongoClient.db().collection('oempartnumbers').createIndex({ name: 1 }, { unique: true })
  }

  // await Promise.all(
  //   newCollections.map(async (item: any) => {
  //     if (item === 'oems' || item === 'oempartnumbers' || item === 'eligibilities' || item === 'nexthigherassemblies')
  //       await mongoClient.db().createCollection(item, defaultSchema)
  //     await mongoClient.db().collection(item).createIndex({ name: 1 }, { unique: true })
  //   })
  // )

  // if (
  //   item.name === 'products' ||
  //   item.name === 'oems' ||
  //   item.name === 'oempartnumbers' ||
  //   item.name === 'eligibilities' ||
  //   item.name === 'nexthigherassemblies'
  // )

  return true

  const reqMethod = getMethod(event)
  // const query: any = useQuery(event)
  // console.log('Request Method', reqMethod)
  // let body: any

  switch (reqMethod) {
    case 'GET':
      // pipeline.push({ $search: { regex: { path: 'name', query: regex } } })
      // if (query.search) {
      //   const regex = new RegExp(query.keyword, 'i')
      //   const matchObj = { $match: { $or: [{ name: { $regex: regex } }, { description: { $regex: regex } }] } }
      // }

      // const lookupObj = [
      //   { $lookup: { from: 'media', localField: 'media', foreignField: '_id', as: 'media' } },

      // { $lookup: { from: 'oems', localField: 'oem', foreignField: '_id', as: 'oem' } },
      // { $lookup: { from: 'oempartnumbers', localField: 'oemPartNumber', foreignField: '_id', as: 'oemPartNumber' } },
      // { $unwind: { path: '$oem', preserveNullAndEmptyArrays: true } },
      // { $unwind: { path: '$oemPartNumber', preserveNullAndEmptyArrays: true } },
      // { $lookup: { from: 'oems', localField: 'oemPartNumber.oem', foreignField: '_id', as: 'oemPartNumber.oem' } },
      // { $unwind: { path: '$oemPartNumber.oem', preserveNullAndEmptyArrays: true } },
      // { $lookup: { from: 'eligibilities', localField: 'eligibilities', foreignField: '_id', as: 'eligibilities' } },
      // {
      // 	$lookup: {
      // 		from: 'nexthigherassemblies',
      // 		localField: 'nextHigherAssemblies',
      // 		foreignField: '_id',
      // 		as: 'nextHigherAssemblies',
      // 	},
      // },
      // ]
      // // return mongoClient.db().collection('products').find().toArray()
      // return await fetchAll(event, query, 'products', lookupObj)
      return 'Hello'
      break

    case 'POST':
    case 'PATCH':
      const body = await readBody(event)
      console.log('BBBBB', body)
      // console.log('Collections', collections)

      // if (
      //   item.name === 'products' ||
      //   item.name === 'oems' ||
      //   item.name === 'oempartnumbers' ||
      //   item.name === 'eligibilities' ||
      //   item.name === 'nexthigherassemblies'
      // )
      // await mongoClient.db().collection('products').drop()
      // body.name = body.acsPartNumber
      // if (body.price) body.price = body.price * 1
      // if (body.slaePrice) body.salePrice = body.salePrice * 1
      // body.slug = slugify(body.acsPartNumber, { lower: true })
      // body.eligibilities = body.eligibilities.length ? body.eligibilities.map((el: any) => new ObjectId(el._id)) : []

      // body.nextHigherAssemblies = body.nextHigherAssemblies.length
      //   ? body.nextHigherAssemblies.map((el: any) => new ObjectId(el._id))
      //   : []
      // body.media = body.media && body.media.length ? body.media.map((el: any) => new ObjectId(el._id)) : []
      // if (Object.values(body.oem).length) body.oem = new ObjectId(body.oem._id)
      // else delete body.oem
      // if (Object.values(body.oemPartNumber).length) body.oemPartNumber = new ObjectId(body.oemPartNumber._id)
      // else delete body.oemPartNumber

      // // body.oem = body.oem ? body.oem_id : undefined
      // // body.oemPartNumber = body.oemPartNumber ? body.oemPartNumber._id : undefined
      // body.dateCreated = new Date(Date.now())
      // console.log('UUUUUUU', body)
      // if (event.req.method === 'POST') return insertDoc(event, body, 'products')
      // if (event.req.method === 'PATCH') return updateDoc(event, body, 'products')

      //   const updatedUser = await mongoClient
      //   .db()
      //   .collection('users')
      //   .replaceOne({ _id: new ObjectId(user._id) }, user)
      // console.log('US', updatedUser)
      // if (!updatedUser) throw new AppError('We cannot update document', 404)

      // return await createProduct(event)

      return 'KKKKKKK'

      break

    case 'DELETE':
      // body = await useBody(event)
      // console.log('BBBBBB', body)
      // return await deleteProducts(event, body)
      break

    default:
      break
  }
})
