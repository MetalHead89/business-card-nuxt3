<template>
  <div class="header-main">
    <UiSvgIcon
      icon="mdiMenu"
      class="menu-icon"
      @click="handleMenuClick"
    />
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/common'

const commonStore = useCommonStore()

const handleMenuClick = () => {
  commonStore.changeSidebarState()
}
</script>

<style lang="scss" scoped>
$icon-size: 30px;

.header-main {
  .menu-icon {
    width: $icon-size;
    height: $icon-size;
    cursor: pointer;
  }

  @media screen and (min-width: $size-xl) {
    .menu-icon {
      width: get-vw($icon-size);
      height: get-vw($icon-size);
    }
  }
}
</style>
