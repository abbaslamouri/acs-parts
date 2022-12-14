import { hashPassword } from '~/server/controllers/v1/auth'
import { getSinedJwtToken, setAuthCookie } from '~/server/controllers/v1/auth'
import AppError from '~/server/utils/AppError'
import mongoClient from '~/server/utils/mongoClient'
import errorHandler from '~/server/utils/errorHandler'
import sendEmail from '~/server/utils/Email'

const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  try {
    const { name, email, password, verifyUrl, refreshToken } = await readBody(event)

    let user
    let userId
    if (refreshToken) {
      user = await mongoClient.db().collection('users').findOne({ email })
      userId = user?._id
    } else {
      user = await mongoClient
        .db()
        .collection('users')
        .insertOne({
          name,
          email,
          password: await hashPassword(password),
          accountNumber: (await mongoClient.db().collection('users').countDocuments()) + 101013,
          signupDate: new Date(Date.now()),
          role: 'customer',
          active: false,
          verified: false,
          passwordChangeDate: new Date(Date.now()),
        })
      userId = user.insertedId
    }
    if (!user || !userId) throw new AppError('Registration failed, please try again later', 404)
    const token = await getSinedJwtToken(userId, Number(config.jwtSignupTokenMaxAge) * 600)
    // // setAuthCookie(event, 'authToken', token, Number(config.jwtMaxAge) * 24 * 60 * 60)
    // // setAuthCookie(event, 'userName', user.name, Number(config.jwtMaxAge) * 24 * 60 * 60)
    const emailHtml = `
    <p>Thank you for creating an account with ACS.</p>
    <p>Please click the link below to verify your account.</p>
    <p><a href='${verifyUrl}?signupToken=${token}'>Click to confirm your email</a></p>
    <p>Can’t click the link? Copy and paste this link in your browser:</p>
    <p>${verifyUrl}?signupToken=${token}</p>
    <p>Sincerely,<br>
    The ACS Team.</p>
    <p>You’re receiving this email because you recently created a new account with ACS. If this wasn’t you, please ignore this email.</p>
    `
    const emailText = `
    Thank you for creating an account with ACS.

    Please copy and paste the link below in your browser to verify your email.

    ${verifyUrl}?signupToken=${token}

    Sincerely,
    The ACS Team.

    You’re receiving this email because you recently created a new account with ACS. If this wasn’t you, please ignore this email.`

    await new sendEmail({
      name,
      email,
      emailSubject: 'Please confirm your email address',
      emailText,
      emailHtml,
    }).sendRegisterationEmail()

    return true
  } catch (err) {
    return createError(errorHandler(event, err))
  }
})
