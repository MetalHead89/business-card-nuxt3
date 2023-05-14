
import { authDataType } from '@/server/types/auth'
import { app } from '@/server/models/firebase'
import { getAuth } from 'firebase-admin/auth'

export default ({ idToken }: authDataType) => {
  const expiresIn = 60 * 60 * 24 * 5 * 1000

  return getAuth(app).createSessionCookie(idToken, { expiresIn })
    .then(sessionCookie => {
      const cookies = {
        name: 'session',
        data: sessionCookie,
        options: { maxAge: expiresIn, httpOnly: true }
      }
      return Promise.resolve(cookies)
    })
    .catch(() => {
      return Promise.reject({
        statusCode: 401,
        data: {
          errorMessage: 'Неавторизованный запрос',
          errors: []
        }
      })
    })
}
