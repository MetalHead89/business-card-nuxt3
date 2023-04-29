<template>
  <button
    class="ui-button"
    :disabled="isLoading"
    @click="emit('click')"
  >
    <slot />

    <div
      v-if="isLoading"
      class="spinner-wrapper"
    >
      <UiSpinner />
    </div>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>

<styles lang="scss" scoped>
  .ui-button {
    position: relative;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    border-radius: 50px;
    width: 100%;
    background: $purple-blue-purple-gradient;
    background-position: 100% 0;
    background-size: 200%;
    padding: 15px 10px;
    color: $white;
    transition: all .4s;
    cursor: pointer;

    &:hover {
      background-position: 0 0;
    }

    &:disabled {
      color: transparent;
      pointer-events: none;
      opacity: 0.7;
    }

    .spinner-wrapper {
      position: absolute;
      width: 40px;
      height: 40px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
</styles>
