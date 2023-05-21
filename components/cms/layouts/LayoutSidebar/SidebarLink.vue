<template>
  <li class="sidebar-link-item">
    <NuxtLink
      class="link"
      :to="to"
    >
      <UiSvgIcon
        class="icon"
        :icon="icon"
      />
      <span v-if="isShowLabel">
        {{ label }}
      </span>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/common'

const commonStore = useCommonStore()

const isShowLabel = computed(() => {
  return commonStore.isSidebarExpanded
})

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  to: {
    type: [String, Object],
    default: ''
  },
  label: {
    type: String,
    default: ''
  }
})

</script>

<style lang="scss" scoped>
.link {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  margin: 2px 10px;
  padding: 10px;
  color: $lighten-black-30;
  transition: .3s ease;
  border-radius: 5px;

  .icon {
    transition: .3s ease;
  }

  &:hover {
    background: lighten($gray, 40);

    .icon {
      color: $blue;
    }
  }

  @media screen and (min-width: $size-xl) {
    margin: get-vw(2px) get-vw(10px);
    padding: get-vw(10px);
    gap: get-vw(10px);

    &:hover {
      border-radius: get-vw(5px);
    }

    .icon {
      width: 1.3vw;
      height: 1.3vw;
    }
  }
}
</style>
