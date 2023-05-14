import cmsConfig from '@/config/cms_config'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('cmsConfig', cmsConfig)
})
