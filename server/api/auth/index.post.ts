import { auth } from '@/server/services/auth'
import { ValidatorErrorResponse } from '@/server/types/validators'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  return auth(body)
    .then(response => {})
    .catch((error: ValidatorErrorResponse) => {
      return createError({ ...error })
    })
})
