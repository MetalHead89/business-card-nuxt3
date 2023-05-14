import { app } from '@/server/models/firebase'
import { getAuth } from 'firebase-admin/auth'

const isProtectedUrl = (url: string | undefined ) => {
  return (
    url
    && url !== '/api/auth'
    && url !== '/api/auth/logout'
    && url.startsWith('/api/')
  )
}

export default defineEventHandler(event => {
  const { url } = event.node.req

  if (isProtectedUrl(url)) {
    const sessionCookie = getCookie(event, 'session') || ''

    return getAuth(app)
      .verifySessionCookie(sessionCookie, true)
      .then(() => {})
      .catch(() => {
        sendError(event, createError({ statusCode: 401, data: { errorMessage: 'Не авторизованный запрос' } }))
      })
  }
})
