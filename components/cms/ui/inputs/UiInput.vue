<template>
  <div class="input-control">
    <input
      v-bind="$attrs"
      :type="type"
      class="input"
    >
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'text'
  }
})
</script>

<style lang="scss" scoped>
.input-control {
  .input {
    width: 100%;
    padding: 7px 10px;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid $primary;
    outline-color: $accent;
    transition: border-color $base-transition;

    &:hover {
      border-color: $accent;
    }
  }
}
</style>
