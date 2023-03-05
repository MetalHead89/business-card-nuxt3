<template>
  <component
    :is="wrapperTag"
    :class="wrapperClasses"
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
  },

  isFormControl: {
    type: Boolean,
    default: true
  }
})

const wrapperClasses = computed(() => {
  const BASE_CLASS = 'control-wrapper'
  return [BASE_CLASS, props.isFormControl && 'form-row']
})
</script>

<style lang="scss" scoped>
.control-wrapper {
  display: block;
  max-width: $base-control-width;
}
</style>
