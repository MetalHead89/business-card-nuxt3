<template>
  <div @click="handleLogoutClick">
    logout
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp()
const router = useRouter()

const handleLogoutClick = () => {
  nuxtApp.$api.auth.logout()
    .then(() => {
      router.push({ name: 'cms-login' })
    })
}
</script>

