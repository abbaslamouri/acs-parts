import { getAuth } from '~/server/controllers/v1/auth'

export default defineEventHandler(async (event) => {
  const user = await getAuth(event)
  event.context.auth = user
})
