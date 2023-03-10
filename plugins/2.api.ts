import auth from '@/api/auth.js'

export default defineNuxtPlugin(nuxtApp => {

  nuxtApp.provide('api', {
    auth: auth(nuxtApp)
  })
})

// type Api = {
//   [key: string]: object
// }

// export default defineNuxtPlugin(nuxtApp => {
//   const api: Api = {}
//   const modules = import.meta.glob('@/api/*/*.ts')

//   for (const path in modules) {
//     modules[path]().then(module => {
//       const key = path.split('/')[2]

//       api[key] = module.default(nuxtApp)
//     })
//   }

//   nuxtApp.provide('api', api)
// })
