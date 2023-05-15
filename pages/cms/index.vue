<template>
  <NuxtLayout :name="layout">
    <div @click="handleLogoutClick">
      logout
    </div>
  </NuxtLayout>
</template>

<script setup>
const nuxtApp = useNuxtApp()
const router = useRouter()
const layout = 'cms'

const handleLogoutClick = () => {
  nuxtApp.$api.auth.logout()
    .then(() => {
      router.push({ name: 'cms-login' })
    })
}
</script>

