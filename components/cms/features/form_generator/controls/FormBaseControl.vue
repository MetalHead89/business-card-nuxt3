<template>
  <label class="form-control">
    <span
      v-if="label"
      class="label"
    >
      {{ label }}
    </span>

    <component :is="component" />
  </label>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: ''
  },

  component: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.form-control {
padding: 10px 0;
display: block;
width: 100%;

  .label {
    display: inline-block;
    margin-bottom: 5px;
  }

  @media screen and (min-width: $size-sm) {
    max-width: $size-sm;
  }

  @media screen and (min-width: $size-xl) {
    max-width: 33.2vw;
  }
}
</style>
