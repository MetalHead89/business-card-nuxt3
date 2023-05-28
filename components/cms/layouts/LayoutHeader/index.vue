<template>
  <header :class="headerClasses">
    <HeaderMain />
    <HeaderLogout />
  </header>
</template>

<script setup lang="ts">
import HeaderMain from './HeaderMain.vue'
import HeaderLogout from './HeaderLogout.vue'
import { useCommonStore } from '@/stores/common'

const commonStore = useCommonStore()

const headerClasses = computed(() => {
  const BASE = 'header'

  return [
    BASE,
    !commonStore.isSidebarExpanded && `${BASE}_full-width`
  ]
})
</script>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  position: fixed;
  height: $header-height;
  background: $white;
  top: 0;
  right: 0;
  width: calc(100% - #{$sidebar-expanded-width});
  transition: width .3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  &_full-width {
    width: calc(100% - #{$sidebar-collapsed-width});
  }

  @media screen and (min-width: $size-xl) {
    height: get-vw($header-height);
    width: calc(100% - get-vw($sidebar-expanded-width));
    padding: 0 get-vw(10px);

    &_full-width {
      width: calc(100% - get-vw($sidebar-collapsed-width));
    }
  }
}
</style>
