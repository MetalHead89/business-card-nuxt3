import { auth } from '@/server/db/controllers/auth'

export default defineEventHandler(async event => {
  const body = await readBody(event)
  const userCredential = await auth(body)

  if (!userCredential?.isValid) {
    return createError({ ...userCredential })
  }
  // throw createError({
  //   statusCode: userCredential?.statusCode
  // })
  // console.dir(userCredential)
  // setResponseStatus(userCredential?.errors, userCredential?.statusCode)
  // return userCredential
})
