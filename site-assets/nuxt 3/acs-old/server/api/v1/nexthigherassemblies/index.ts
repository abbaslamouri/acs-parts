import slugify from 'slugify'
import { fetchAll } from '~/server/controllers/v1/factory'
import { insertDoc } from '~/server/controllers/v1/eligibilities'

export default defineEventHandler(async (event) => {
  const query: any = useQuery(event)
  // console.log('Query', query)
  switch (event.req.method) {
    case 'GET':
      return await fetchAll(event, query, 'eligibilities')
      break

    case 'POST':
      const body = await useBody(event)
      console.log('BODY', body)
      console.log('BODY1', { ...body, slug: slugify(body.name, { lower: true }) })
      return await insertDoc(event, { ...body, slug: slugify(body.name, { lower: true }) }, 'eligibilities')
      break

    case 'DELETE':
      // return await deleteMedia(event)
      break

    default:
      break
  }
})
