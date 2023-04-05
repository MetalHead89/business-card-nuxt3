import { mdiAccountOutline, mdiLockOutline, mdiCheck, mdiWindowClose } from '@mdi/js'

export default defineNuxtPlugin(nuxtApp => {

  nuxtApp.provide('mdiIcons', {
    mdiAccountOutline,
    mdiLockOutline,
    mdiCheck,
    mdiWindowClose
  })
})
