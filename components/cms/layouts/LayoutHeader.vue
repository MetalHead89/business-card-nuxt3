<template>
  <header :class="headerClasses">
    <div class="content">
      <UiSvgIcon
        icon="mdiMenu"
        class="menu-icon"
        @click="handleMenuClick"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/common'

const commonStore = useCommonStore()

const headerClasses = computed(() => {
  const BASE = 'header'

  return [
    BASE,
    !commonStore.isSidebarExpanded && `${BASE}_full-width`
  ]
})

const handleMenuClick = () => {
  commonStore.changeSidebarState()
}
</script>

<style lang="scss" scoped>
  $icon-size: 30px;

  .header {
    height: $header-height;

    .content {
      position: fixed;
      display: flex;
      align-items: center;
      background: white;
      top: 0;
      right: 0;
      width: calc(100% - #{$sidebar-expanded-width});
      height: $header-height;
      transition: width .3s ease;
    }

    .menu-icon {
      margin: 0 10px;
      width: $icon-size;
      height: $icon-size;
      cursor: pointer;
    }

    &_full-width {
      .content {
        width: calc(100% - #{$sidebar-collapsed-width});
      }
    }
  }
</style>
