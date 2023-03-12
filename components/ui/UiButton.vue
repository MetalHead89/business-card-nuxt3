<template>
  <button
    class="ui-button"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
const emit = defineEmits(['click'])
</script>

<styles lang="scss" scoped>
  .ui-button {
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
  }
</styles>
