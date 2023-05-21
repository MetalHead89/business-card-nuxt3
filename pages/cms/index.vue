<template>
  <NuxtLayout :name="layout">
    <div @click="handleLogoutClick">
      content
    </div>
  </NuxtLayout>
</template>

<script setup>
const layout = 'cms'
</script>

