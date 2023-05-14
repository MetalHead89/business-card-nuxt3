import { auth } from '@/server/services/auth'
import { ValidatorErrorResponse } from '@/server/types/validators'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  return auth(body || {})
    .then(({ name, data, options }) => {
      setCookie(event, name, data, options )
      event.node.res.end(JSON.stringify({ status: 'success' }))
    })
    .catch((error: ValidatorErrorResponse) => {
      return createError({ ...error })
    })
})
