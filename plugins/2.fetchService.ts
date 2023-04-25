const BASE_URL = 'http://localhost:3000'

const handleResponseError = ({ response, $eventBus  }: any) => {
  if (!response) {
    $eventBus.event('snackbar-add', { type: 'error', title: 'Упс', text: 'Похоже нет связи с сервером' })
    return Promise.reject()
  }

  let errorMessage = ''

  try {
    errorMessage = response.response._data.data.errorMessage
  } catch {
    errorMessage = 'Произошла непредвиденная ошибка'
  }

  $eventBus.event('snackbar-add', { type: 'error', title: 'Ошибка', text: errorMessage })
  return Promise.reject()
}

export default defineNuxtPlugin(nuxtApp => {
  const { $eventBus } = useNuxtApp()
  const fetch = $fetch.create({ onResponseError: response => handleResponseError({ response, $eventBus }) })

  const fetchService = {
    get: (path: string) => fetch(path, { method: 'get', baseURL: BASE_URL }),
    post: (path: string, body: Object) => fetch(path, { method: 'post', body, baseURL: BASE_URL })
  }

  nuxtApp.provide('fetchService', fetchService)
})
