import errorHandler from '~/server/utils/errorHandler'
import slugify from 'slugify'
import { ObjectId } from 'mongodb'
import { MongoClient } from 'mongodb'
// import { IProduct } from '~/server/utils/IProduct'
// import { productSchema, userSchema, gallerySchema, mediaSchema, countrySchema } from '~~/server/schemas/state'

const mongoClient = new MongoClient(process.env.NUXT_DB_URL as string)

// import mongoClient from '~/server/utils/mongoClient'

// import { fetchAll, insertDoc, updateDoc } from '~/server/controllers/v1/factory'
// import { deleteProducts } from '~/server/controllers/v1/products'

export default defineEventHandler(async (event) => {
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
      try {
        const body = await readBody(event)
        console.log(body)
        return true
        // let eligibilities = body.eligibility.split(',')
        const eligibilities = body.eligibility.split(',').map((e: string) => e.trim())
        const nextHigherAssemblies = body.nextHigherAssembly.split(',').map((e: string) => e.trim())
        // console.log('BBBBB', body)

        let product: any = {
          name: body.title,
          acsPartNumber: body.title,
          slug: slugify(body.title, { lower: true }),
          image: body.image,
          description: body.content,
          oem: '',
          oemPartNumber: '',
          qtySold: body.qtySold * 1,
          stockQty: 0,
          price: body.price * 1,
          salePrice: body.price * 1,
          sku: body.sku,
          eligibilities: [],
          nextHigherAssemblies: [],
          status: 'Published',
        }
        let found: any
        let createdAttribute: any
        let newObjectId: any

        for (const prop in eligibilities) {
          found = await mongoClient.db().collection('eligibilities').findOne({ name: eligibilities[prop] })
          if (found) {
            newObjectId = new ObjectId(found._id)
          } else {
            createdAttribute = await mongoClient
              .db()
              .collection('eligibilities')
              .insertOne({
                name: eligibilities[prop],
                slug: slugify(eligibilities[prop], { lower: true }),
                description: '',
                dateCreated: new Date(Date.now()),
                sortOrder: 0,
              })
            if (createdAttribute && createdAttribute.insertedId) newObjectId = new ObjectId(createdAttribute.insertedId)
          }
          product.eligibilities.push(newObjectId)
        }

        for (const prop in nextHigherAssemblies) {
          found = await mongoClient
            .db()
            .collection('nexthigherassemblies')
            .findOne({ name: nextHigherAssemblies[prop] })
          if (found) {
            newObjectId = new ObjectId(found._id)
          } else {
            createdAttribute = await mongoClient
              .db()
              .collection('nexthigherassemblies')
              .insertOne({
                name: nextHigherAssemblies[prop],
                slug: slugify(nextHigherAssemblies[prop], { lower: true }),
                description: '',
                dateCreated: new Date(Date.now()),
                sortOrder: 0,
              })
            if (createdAttribute && createdAttribute.insertedId) newObjectId = new ObjectId(createdAttribute.insertedId)
          }
          product.nextHigherAssemblies.push(newObjectId)
        }

        found = await mongoClient.db().collection('oems').findOne({ name: body.oem })
        if (found) {
          newObjectId = new ObjectId(found._id)
        } else {
          createdAttribute = await mongoClient
            .db()
            .collection('oems')
            .insertOne({
              name: body.oem,
              slug: slugify(body.oem, { lower: true }),
              description: '',
              dateCreated: new Date(Date.now()),
              sortOrder: 0,
            })
          if (createdAttribute && createdAttribute.insertedId) newObjectId = new ObjectId(createdAttribute.insertedId)
        }
        product.oem = newObjectId

        found = await mongoClient.db().collection('oempartnumbers').findOne({ name: body.oemPartNumber })
        if (found) {
          newObjectId = new ObjectId(found._id)
        } else {
          createdAttribute = await mongoClient
            .db()
            .collection('oempartnumbers')
            .insertOne({
              name: body.oemPartNumber,
              slug: slugify(body.oemPartNumber, { lower: true }),
              description: '',
              dateCreated: new Date(Date.now()),
              sortOrder: 0,
            })
          if (createdAttribute && createdAttribute.insertedId) newObjectId = new ObjectId(createdAttribute.insertedId)
        }
        product.oemPartNumber = newObjectId

        const newProduct = await mongoClient.db().collection('products').insertOne(product)
        // console.log('NEW', newProduct)
        return await mongoClient
          .db()
          .collection('products')
          .findOne({ _id: new ObjectId(newProduct.insertedId) })
        // return newProduct

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

        //   const updatedUser = await mongoClientreturn createError({
        //   statusCode: 404,
        //   statusMessage: 'message',
        //   data: err,
        // })
        //   .db()
        //   .collection('users')
        //   .replaceOne({ _id: new ObjectId(user._id) }, user)
        // console.log('US', updatedUser)
        // if (!updatedUser) throw new AppError('We cannot update document', 404)

        // return await createProduct(event)
      } catch (err) {
        //

        // console.log('ERR', err)
        return createError(errorHandler(event, err))
      }

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
