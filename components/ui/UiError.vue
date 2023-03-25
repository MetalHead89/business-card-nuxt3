<template>
  <div
    v-if="errors.length > 0"
    class="error"
  >
    <div
      v-for="(error, index) in errors"
      :key="index"
      class="error-item"
    >
      {{ error }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  errors: {
    type: Array,
    default: () => []
  }
})
</script>
