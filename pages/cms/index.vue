<template>
  <NuxtLayout :name="layout">
    <div @click="handleLogoutClick">
      <CmsFeaturesFormGenerator :controls="controls" />
    </div>
  </NuxtLayout>
</template>

<script setup>
const layout = 'cms'

const controls = ref([
  {
    control: 'input',
    props: {
      label: 'E-mail'
    }
  },
  {
    control: 'password',
    props: {
      label: 'Пароль'
    }
  },
  {
    control: 'password',
    props: {
      label: 'Повтор пароля'
    }
  }
])

</script>

