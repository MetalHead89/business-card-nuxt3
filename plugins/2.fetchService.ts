const BASE_URL = 'http://localhost:3000'

const handleResponseError = ({ response, $eventBus  }: any) => {
  if (!response) {
    $eventBus.event('snackbar-add', { type: 'error', title: 'Упс', text: 'Похоже нет связи с сервером' })
    return Promise.reject()
  }

  $eventBus.event('snackbar-add', { type: 'error', title: 'Ошибка', text: 'sdfd fdddd dfdf' })
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
