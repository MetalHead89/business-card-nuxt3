<template>
  <button class="ui-button">
    <slot />
  </button>
</template>

<script setup>
</script>

<styles lang="scss" scoped>
  .ui-button {
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    border-radius: 50px;
    width: 100%;
    background: linear-gradient(90deg, #fc00ff 0%, #00dbde 50%, #fc00ff 100%);
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
