import errorHandler from '~/server/utils/errorHandler'
import { setAuthCookie } from '~/server/controllers/v1/auth'

export default defineEventHandler(async (event) => {
  try {
    if (event.context.auth) {
      setAuthCookie(event, 'userData', '', 1)
      return {
        name: '',
        email: '',
        token: '',
        isAuthenticated: true,
      }
    }
    return true
  } catch (err) {
    errorHandler(event, err)
  }
})
