<template>
  <aside :class="sidebarClasses">
    logo
  </aside>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/common'

const commonStore = useCommonStore()

const sidebarClasses = computed(() => {
  const BASE = 'sidebar'

  return [
    BASE,
    !commonStore.isSidebarExpanded && `${BASE}_collapsed`
  ]
})
</script>

<style lang="scss" scoped>
  .sidebar {
    width: $sidebar-expanded-width;
    background: #d3d1d1;
    transition: width .3s ease;

    &_collapsed {
      width: $sidebar-collapsed-width;
    }
  }
</style>
