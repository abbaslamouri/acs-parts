import slugify from 'slugify'
import { ObjectId } from 'mongodb'
import { MongoClient } from 'mongodb'

const mongoClient = new MongoClient(process.env.NUXT_DB_URL as string)

// import mongoClient from '~/server/utils/mongoClient'

// import { fetchAll, insertDoc, updateDoc } from '~/server/controllers/v1/factory'
// import { deleteProducts } from '~/server/controllers/v1/products'

export default defineEventHandler(async (event) => {
  // pipeline.push({ $search: { regex: { path: 'name', query: regex } } })

  //   const lookupObj = [{ $lookup: { from: 'media', localField: 'media', foreignField: '_id', as: 'media' } }]
  // return mongoClient.db().collection('products').find().toArray()
  //   return await fetchAll(event, query, 'products', lookupObj)

  let cursor: any
  let docs: []

  // console.log('Q', query)

  try {
    // const totalCount = await mongoClient.db().collection(collection).countDocuments()

    const pipeline: any = []

    cursor = mongoClient.db().collection('products').aggregate(pipeline)
    docs = await cursor.toArray()
    console.log('DDDDD', docs)
    return docs

    // // console.log('DDDDDD', docs)
    // if (!docs) throw new AppError(`We were not able to fetch ${'products'}`, 400)
    // const totalCount = docs.length

    // // Lookup stage
    // if (lookupObj) pipeline.push(...lookupObj)

    // // Project stage
    // if (query.project) {
    //   const projectObj = {}
    //   const projectArr = query.project.split(',')
    //   for (const prop in projectArr) {
    //     projectObj[projectArr[prop].trim()] = 1
    //   }
    //   pipeline.push({ $project: { ...projectObj } })
    // }

    // // Sort stage
    // if (query.sort) {
    //   const sortArr = query.sort.split('-')
    //   const sortObj = {}
    //   if (sortArr.length === 1) sortObj[sortArr[0]] = 1
    //   else sortObj[sortArr[1]] = -1
    //   pipeline.push({ $sort: sortObj })
    // }

    // // Skip and limit
    // const page = query.page && query.page * 1 >= 1 ? query.page * 1 : 1
    // const limit = query.limit && query.limit * 1 > 0 ? query.limit * 1 : 100
    // const skip = (page - 1) * limit
    // pipeline.push({ $skip: skip })
    // pipeline.push({ $limit: limit })

    // console.log('Pipeline', pipeline)

    // cursor = mongoClient.db().collection(collection).aggregate(pipeline)
    // docs = await cursor.toArray()
    // if (!docs) throw new AppError(`We were not able to fetch ${collection}`, 400)

    // return {
    //   docs,
    //   totalCount,
    //   count: docs.length,
    // }
  } catch (err) {
    // errorHandler(event, err)
    console.log('EEEEEERRRRR', err)
  }
})
