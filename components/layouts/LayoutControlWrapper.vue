<template>
  <component
    :is="wrapperTag"
    class="control-wrapper"
  >
    <slot name="label">
      <span v-if="label">{{ label }}</span>
    </slot>
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  wrapperTag: {
    type: String,
    default: 'label'
  },

  label: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.control-wrapper {
  display: block;
  max-width: $base-control-width;
}
</style>
