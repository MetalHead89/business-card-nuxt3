const BASE_URL = 'http://localhost:3001'

export default defineNuxtPlugin(nuxtApp => {
  const fetchService = {
    get: (path: string) => $fetch(path, { method: 'get', baseURL: BASE_URL })
  }

  nuxtApp.provide('fetchService', fetchService)
})
