import { ObjectId } from 'mongodb'
import AppError from '~/server/utils/AppError'
import errorHandler from '~/server/utils/errorHandler'

import mongoClient from '~/server/utils/mongoClient'

const insertDoc = async (event: any, doc: any, collection: string) => {
  try {
    const response = await mongoClient.db().collection(collection).insertOne(doc)
    if (!response || !response.insertedId) throw new AppError('We were not able to insert document into database', 404)
    const insertedDoc = await mongoClient.db().collection(collection).findOne({ _id: response.insertedId })
    if (!insertedDoc) throw new AppError('We were not able to find the newly insertde document', 404)
    return insertedDoc
  } catch (err) {
    errorHandler(event, err)
  }
}

const updateDoc = async (event: any, body: any, collection: string) => {
  try {
    const _id = new ObjectId(body._id)
    delete body._id
    const response = await mongoClient
      .db()
      .collection(collection)
      .updateOne({ _id }, { $set: { ...body } })
    if (!response || !response.modifiedCount) throw new AppError('We were not able to update document', 404)
    const updatedDoc = await mongoClient.db().collection(collection).findOne({ _id })
    if (!updatedDoc) throw new AppError('We were not able to find the newly insertde document', 404)
    return updatedDoc
  } catch (err) {
    errorHandler(event, err)
  }
}

const deleteDoc = async (event: any, query: any, collection: string) => {
  try {
    const deletedDoc = await mongoClient
      .db()
      .collection(collection)
      .deleteOne({ _id: new ObjectId(query.id) })
    if (!deletedDoc || !deletedDoc.deletedCount) throw new AppError('We were not able to delete document', 404)
    return {
      deletedCount: deletedDoc.deletedCount,
    }
  } catch (err) {
    errorHandler(event, err)
  }
}

const createDoc = async (event: any, collection: string) => {
  try {
    const body = await useBody(event)
    console.log('Body', body)
    // const doc = { ...body, name: body.name.trim() }
    // doc.slug = slugify(oemName, { lower: true }
    // user.role = user.role || 'user'
    const savedDoc = await mongoClient.db().collection(collection).insertOne(body)
    if (!savedDoc || !savedDoc.insertedId) throw new AppError('We were not able to insert document into database', 404)
    const found = await mongoClient.db().collection(collection).findOne({ _id: savedDoc.insertedId })
    return {
      doc: found,
    }
  } catch (err) {
    errorHandler(event, err)
  }
}

const fetchAll = async (event: any, query: any, collection: string, lookupObj: any = null) => {
  let cursor: any
  let docs: []

  // console.log('Q', query)

  try {
    // const totalCount = await mongoClient.db().collection(collection).countDocuments()

    const pipeline: any = []

    // const regex = new RegExp(query.keyword, 'i')

    // pipeline.push({ $match: { $or: [{ name: { $regex: regex } }, { description: { $regex: regex } }] } })

    // Match stage
    // if (query.keyword || query.match) {
    //   let matchObj: any = {}

    // if (query.keyword) {
    //   matchObj = { $text: { $search: query.keyword } }
    // } else
    // if (query.match) {
    // 	let matchObj: any = {}
    // 	const queryStr = query.match.replace(/\b(eq|gte|gt|lte|lt)\b/g, (match: any) => `$${match}`)
    // 	const queryStrArr = queryStr.split(',')
    // 	// matchObj = {}
    // 	for (const prop in queryStrArr) {
    // 		const fieldParts = queryStrArr[prop].trim().split(']=')
    // 		const valueParts = fieldParts[0].split('[')
    // 		const field = valueParts[0]
    // 		const operator = valueParts[1]
    // 		let value = fieldParts[1]
    // 		const typeCheckObj = {}
    // 		typeCheckObj[field] = { $type: 'number' }
    // 		const found = await mongoClient.db().collection(collection).find(typeCheckObj).toArray()
    // 		if (found.length) value = value * 1
    // 		matchObj[field] = {}
    // 		if (field === '_id' || field === 'oem') matchObj[field][operator] = new ObjectId(value)
    // 		else matchObj[field][operator] = value
    // 	}
    // 	pipeline.push({ $match: matchObj })
    // } else {
    // 	// console.log('PPPPPPPPP')
    // 	// pipeline.push({ $match: { _id: { $exists: true } } })
    // }

    // console.log('KEY', JSON.stringify(matchObj))
    // }
    // const regex = new RegExp(query.keyword, 'i')

    // pipeline.push({ $search: { $regex:{ path: "name", query: regex } }})
    // pipeline.push({ $regexFindAll: { input: '$name', regex } })

    cursor = mongoClient.db().collection(collection).aggregate(pipeline)
    docs = await cursor.toArray()

    // console.log('DDDDDD', docs)
    if (!docs) throw new AppError(`We were not able to fetch ${collection}`, 400)
    const totalCount = docs.length

    // Lookup stage
    if (lookupObj) pipeline.push(...lookupObj)

    // if (query.lookup) {
    //   const lookupArr = query.lookup.split(',')
    //   for (const prop in lookupArr) {
    //     const lookupFrom = lookupArr[prop].trim().split('.')[lookupArr[prop].trim().split('.').length - 1]

    //     const lookupObj = {
    //       from: lookupFrom.endsWith('s') ? lookupFrom : `${lookupFrom}s`,
    //       localField: lookupArr[prop].trim(),
    //       foreignField: '_id',
    //       as: lookupArr[prop].trim(),
    //     }

    //     pipeline.push({
    //       $lookup: {
    //         from: lookupObj.from.toLowerCase(),
    //         localField: lookupObj.localField,
    //         foreignField: lookupObj.foreignField,
    //         as: lookupObj.as,
    //       },
    //     })
    //     if (!lookupFrom.endsWith('s'))
    //       pipeline.push({
    //         $unwind: `$${lookupObj.as}`,
    //       })
    //   }
    // }

    // Project stage
    if (query.project) {
      const projectObj = {}
      const projectArr = query.project.split(',')
      for (const prop in projectArr) {
        projectObj[projectArr[prop].trim()] = 1
      }
      pipeline.push({ $project: { ...projectObj } })
    }

    // Sort stage
    if (query.sort) {
      const sortArr = query.sort.split('-')
      const sortObj = {}
      if (sortArr.length === 1) sortObj[sortArr[0]] = 1
      else sortObj[sortArr[1]] = -1
      pipeline.push({ $sort: sortObj })
    }

    // Skip and limit
    const page = query.page && query.page * 1 >= 1 ? query.page * 1 : 1
    const limit = query.limit && query.limit * 1 > 0 ? query.limit * 1 : 100
    const skip = (page - 1) * limit
    pipeline.push({ $skip: skip })
    pipeline.push({ $limit: limit })

    console.log('Pipeline', pipeline)

    cursor = mongoClient.db().collection(collection).aggregate(pipeline)
    docs = await cursor.toArray()
    if (!docs) throw new AppError(`We were not able to fetch ${collection}`, 400)

    return {
      docs,
      totalCount,
      count: docs.length,
    }
  } catch (err) {
    errorHandler(event, err)
  }
}

export { fetchAll, insertDoc, updateDoc, createDoc, deleteDoc }
