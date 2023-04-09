const BASE_URL = 'http://localhost:3000'

const handleResponseError = ({ response, $eventBus  }: any) => {
  if (response) {
    $eventBus.event('snackbar-add', { title: 'Kek!' })
    return Promise.reject()
  }

  $eventBus.event('snackbar-add')
  return Promise.reject()
}

export default defineNuxtPlugin(nuxtApp => {
  const { $eventBus } = useNuxtApp()
  const fetch = $fetch.create({ onResponseError: response => handleResponseError({ response, $eventBus }) })

  const fetchService = {
    get: (path: string) => fetch(path, { method: 'get', baseURL: BASE_URL }),
    // eslint-disable-next-line max-len
    post: (path: string, body: Object) => fetch(path, { method: 'post', body, baseURL: BASE_URL })
  }

  nuxtApp.provide('fetchService', fetchService)
})
