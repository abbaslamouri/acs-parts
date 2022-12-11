import { ObjectId } from 'mongodb'
import AppError from '~/server/utils/AppError'
import errorHandler from '~/server/utils/errorHandler'

import mongoClient from '~/server/utils/mongoClient'

const insertDoc = async (event: any, body: any, collection: string) => {
  try {
    const { name } = body
    const found = await mongoClient.db().collection(collection).findOne({ name })
    console.log('Found', found)
    if (found) return found
    const insertedDoc = await mongoClient.db().collection(collection).insertOne(body)
    console.log('INSERTED', insertedDoc)
    if (!insertedDoc || !insertedDoc.insertedId)
      throw new AppError('We were not able to insert document into database', 404)
    return {
      ...body,
      _id: insertedDoc.insertedId,
    }
  } catch (err) {
    errorHandler(event, err)
  }
}

export { insertDoc }
