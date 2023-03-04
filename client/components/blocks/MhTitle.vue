<template>
  <div class="mh-title-block">
    This is Title Page
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp()
nuxtApp.$api.test.testMethod()
</script>

<style lang="scss" scoped>
  .mh-title-block {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $purple-blue-gradient;
    color: $white;
    font-weight: bold;
    font-size: 1.5rem;
  }
</style>
