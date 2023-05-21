import {
  mdiAccountOutline,
  mdiLockOutline,
  mdiCheck,
  mdiWindowClose,
  mdiClose,
  mdiMenu,
  mdiAccountGroup,
  mdiLogout
} from '@mdi/js'

export default defineNuxtPlugin(nuxtApp => {

  nuxtApp.provide('mdiIcons', {
    mdiAccountOutline,
    mdiLockOutline,
    mdiCheck,
    mdiWindowClose,
    mdiClose,
    mdiMenu,
    mdiAccountGroup,
    mdiLogout
  })
})
