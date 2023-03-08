import { mdiAccountOutline, mdiLockOutline } from '@mdi/js'

export default defineNuxtPlugin(nuxtApp => {

  nuxtApp.provide('mdiIcons', {
    mdiAccountOutline,
    mdiLockOutline
  })
})
