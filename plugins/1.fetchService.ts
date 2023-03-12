const BASE_URL = 'http://localhost:3000'

export default defineNuxtPlugin(nuxtApp => {
  const fetchService = {
    get: (path: string) => $fetch(path, { method: 'get', baseURL: BASE_URL }),
    post: (path: string, body: Object) => $fetch(path, { method: 'post', body, baseURL: BASE_URL })
  }

  nuxtApp.provide('fetchService', fetchService)
})
