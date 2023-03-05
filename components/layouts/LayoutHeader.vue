<template>
  <header :class="headerClasses">
    <div class="content-container">
      <UiNavbar :is-dark="isSticked" />
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isSticked = ref(false)

const headerClasses = computed(() => {
  const BASE_CLASS = 'mh-header'
  return [BASE_CLASS, isSticked.value && BASE_CLASS + '_is_sticked']
})

// window

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

const onScroll = () => {
  isSticked.value = window.top.scrollY !== 0
}
</script>

<style lang="scss" scoped>
.mh-header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 25px 0;
  border-bottom: 1px solid transparentize($white, 0.85);
  box-shadow: 0 8px 25px 0 transparentize($black, 0.96);

  &_is_sticked {
    background: $white;
  }
}
</style>
