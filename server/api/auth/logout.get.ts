export default defineEventHandler(event => {
  deleteCookie(event, 'session')
  event.node.res.end(JSON.stringify({ status: 'success' }))
})
