<template>
  <div class="error">
    <ClientOnly>
      <TransitionGroup name="error">
        <div
          v-if="error"
          class="message"
        >
          {{ error }}
        </div>
      </TransitionGroup>
    </ClientOnly>
  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
$size: 0.8rem;

.error {
  height: $size;
  margin: 5px 0;
  padding: 0;
  overflow: hidden;

  .message {
    font-size: $size;
    color: $error;
  }
}

.error-enter-active,
.error-leave-active {
  transition: all 0.3s cubic-bezier(.57,1.75,.61,.65);
}
.error-enter-from,
.error-leave-to {
  transform: translateY(calc(-#{$size} - 3px));
}
</style>
