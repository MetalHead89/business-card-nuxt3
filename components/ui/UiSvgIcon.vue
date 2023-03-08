<template>
  <svg-icon
    type="mdi"
    :path="nuxtApp.$mdiIcons[icon]"
  />
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon'

const nuxtApp = useNuxtApp()

const props = defineProps({
  icon: {
    type: String,
    default: ''
  }
})
</script>
