<template>
  <nav class="navigation">
    <SidebarLink
      v-for="(linkItem, index) in navigation"
      :key="index"
      v-bind="linkItem"
    />
  </nav>
</template>

<script setup lang="ts">
import SidebarLink from './SidebarLink.vue'

const navigation = [
  {
    icon: 'mdiAccountGroup',
    label: 'Пользователи',
    to: { name: 'cms' }
  },
  {
    icon: 'mdiAccountGroup',
    label: 'Пользователи2',
    to: { name: 'cms-login' }
  },
  {
    icon: 'mdiAccountGroup',
    label: 'Пользователи3',
    to: { name: 'cms-login' }
  },
  {
    icon: 'mdiAccountGroup',
    label: 'Пользователи4',
    to: { name: 'cms-login' }
  }
]
</script>

<style lang="scss">
  .navigation {
    list-style-type: none;
  }
</style>
