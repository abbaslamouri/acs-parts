import slugify from 'slugify'
import { ObjectId } from 'mongodb'

import { MongoClient } from 'mongodb'
// import { productSchema, nextHigherAssemblySchema, defaultSchema } from '~/server/utils/dbSchemas'
import productSchema from '~/server/schemas/product'
import defaultSchema from '~/server/schemas/default'

const mongoClient = new MongoClient(process.env.NUXT_DB_URL as string)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const pipeline = [
    {
      $search: {
        text: {
          query: body.searchText,
          path: [
            'name',
            'description',
            'price',
            'sku',
            'oem',
            'oemPartNumber',
            'eligibilities.name',
            'nextHigherAssemblies.name',
          ],
          fuzzy: {
            maxEdits: 2,
          },
        },
        highlight: {
          path: 'eligibilities.name',
        },
      },
    },
    {
      $limit: 20,
    },
    {
      $project: {
        name: 1,
        image: 1,
        description: 1,
        oem: 1,
        oemPartNumber: 1,
        eligibilities: 1,
        nextHigherAssemblies: 1,
        highlights: {
          $meta: 'searchHighlights',
        },
      },
    },
  ]
  const cursor = mongoClient.db().collection('products').aggregate(pipeline)
  const docs = await cursor.toArray()
  return docs
})
