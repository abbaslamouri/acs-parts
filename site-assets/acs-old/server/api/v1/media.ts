import { createMedia, deleteMedia } from '~/server/controllers/v1/media'
import { fetchAll } from '~/server/controllers/v1/factory'
import mongoClient from '~/server/utils/mongoClient'

export default defineEventHandler(async (event) => {
  const query: any = useQuery(event)
  console.log('Query', query)
  switch (event.req.method) {
    case 'GET':
      if (query.keyword) {
        const regex = new RegExp(query.keyword, 'i')
        const docs = await mongoClient
          .db()
          .collection('media')
          .find({ $or: [{ name: { $regex: regex } }, { mimetype: { $regex: regex } }] })
          .limit(20)
          .toArray()
        return {
          count: docs.length,
          docs: docs,
          totalCount: docs.length,
        }
      }

      return await fetchAll(event, query, 'media')
      break

    case 'POST':
      return await createMedia(event)
      break

    case 'DELETE':
      return await deleteMedia(event)
      break

    default:
      break
  }
})
