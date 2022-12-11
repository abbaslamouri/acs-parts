import { importProducts } from '~/server/controllers/v1/products'

export default defineEventHandler(async (event) => {
  switch (event.req.method) {
    case 'GET':
      break

    case 'POST':
      return await importProducts(event)
      break

    case 'DELETE':
      break

    default:
      break
  }
})
