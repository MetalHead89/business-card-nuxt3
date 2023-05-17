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
      {{ label }}
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
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

  .icon {
    transition: .3s ease;
  }

  &:hover {
    background: lighten($gray, 40);
    border-radius: 5px;

    .icon {
      color: $blue;
    }
  }
}
</style>
