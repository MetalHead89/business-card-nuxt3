<template>
  <aside :class="sidebarClasses">
    <div class="logo">
      logo
    </div>

    <SidebarNavigation />
  </aside>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/common'
import SidebarNavigation from './SidebarNavigation.vue'

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
  background: $white;
  box-shadow: 5px 0 25px 0 $cms-shadow;
  transition: width .3s ease;
  position: relative;
  z-index: 100;

  &_collapsed {
    width: $sidebar-collapsed-width;
  }

  .logo {
    height: $header-height;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: $size-xl) {
    width: get-vw($sidebar-expanded-width);
    box-shadow: get-vw(5px) 0 get-vw(25px) 0 $cms-shadow;

    .logo {
      height: get-vw($header-height);
    }

    &_collapsed {
      width: get-vw($sidebar-collapsed-width);
    }
  }
}
</style>
