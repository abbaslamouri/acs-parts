import { ObjectId } from 'mongodb'
import jwt from 'jsonwebtoken'
// import { CompatibilityEvent } from 'h3'
import AppError from '~/server/utils/AppError'
import mongoClient from '~/server/utils/mongoClient'
import { getSinedJwtToken } from '~/server/controllers/v1/auth'
import { setAuthCookie } from '~/server/controllers/v1/auth'
import errorHandler from '~/server/utils/errorHandler'

const config = useRuntimeConfig()

export default defineEventHandler(async (event: any) => {
  try {
    if (event.req.method !== 'POST') throw new AppError('invalid request', 401)
    const body = await readBody(event)
    const { email, signupToken } = body
    const decoded: any = jwt.verify(signupToken, config.jwtSecret)
    // console.log('DEC', decoded)
    const user = await mongoClient
      .db()
      .collection('users')
      .findOne({
        _id: new ObjectId(decoded.id),
      })
    if (!user) throw new AppError('Invalid token.', 404)
    if (user.email !== email)
      throw new AppError(
        'We were not able to vefify your email.  Please try a different email address or contact customer serveice at 555-555-5555',
        404
      )

    const verified = await mongoClient
      .db()
      .collection('users')
      .updateOne(
        {
          _id: new ObjectId(user._id),
        },
        { $set: { verified: true } }
      )

    // console.log('VVVVVV', verified)
    if (!verified)
      throw new AppError(
        'We were not able to update your records, please contact customer serveice at 555-555-5555',
        404
      )
    // const token = await getSinedJwtToken(user._id, Number(config.jwtMaxAge) * 24 * 60 * 60)
    // console.log(token)
    const userData = {
      name: user.name,
      email: user.email,
      token: await getSinedJwtToken(user._id, Number(config.jwtMaxAge) * 24 * 60 * 60),
      isAuthenticated: true,
    }
    setAuthCookie(event, 'userData', JSON.stringify(userData), Number(config.jwtMaxAge) * 24 * 60 * 60)
    // setAuthCookie(event, 'userName', user.name, Number(config.jwtMaxAge) * 24 * 60 * 60)
    return userData
  } catch (err) {
    return createError(errorHandler(event, err))
  }
})
