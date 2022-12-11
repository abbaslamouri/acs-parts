import AppError from '~/server/utils/AppError'
import errorHandler from '~/server/utils/errorHandler'
import { getAuth } from '~/server/controllers/v1/auth'
import { setAuthCookie } from '~/server/controllers/v1/auth'

export default defineEventHandler(async (event) => {
  try {
    if (event.context.auth) {
      setAuthCookie(event, 'authToken', null, 1)
      setAuthCookie(event, 'userName', null, 1)
    }
    return true
  } catch (err) {
    errorHandler(event, err)
  }
})
