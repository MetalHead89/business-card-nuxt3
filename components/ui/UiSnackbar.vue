<template>
  <div :class="snackbarClasses">
    <h2
      v-if="title"
      class="title"
    >
      {{ title }}
    </h2>

    <div
      v-if="text"
      class="content"
    >
      {{ text }}
    </div>

    <div class="icon">
      <UiSvgIcon :icon="icon" />
    </div>

    <UiSvgIcon
      icon="mdiWindowClose"
      class="close"
      @click="handleCloseClick"
    />
  </div>
</template>

<script setup lang="ts">
import { SnackbarIcons, SnackbarType } from '@/types/ui'

// Types

interface ISnackbar {
  id: string,
  type?: SnackbarType,
  title?: string,
  text?: string
}

// Common

const ICONS: SnackbarIcons = {
  success: 'mdiCheck',
  warning: 'mdiCheck'
}

const props = withDefaults(defineProps<ISnackbar>(), {
  type: 'success',
  title: '',
  text: ''
})

const emit = defineEmits(['click'])

// Snackbar

const snackbarClasses = computed(() => {
  const BASE_CLASS = 'snackbar'

  return [
    BASE_CLASS,
    `${BASE_CLASS}_${props.type}`
  ]
})

// Icon

const icon = computed(() => {
  return ICONS[props.type]
})

const handleCloseClick = () => {
  emit('click')
}
</script>

<style lang="scss" scoped>
$side-indent: 80px;
$icon-size: 40px;

.snackbar {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px $side-indent;
  border-radius: 20px;

  .title {
    margin: 0;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  .icon {
    width: $icon-size;
    height: $icon-size;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    left: calc(#{$side-indent} / 2);
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &_success {
    background: $success;
    color: $white;

    .icon {
      background: $white;
      color: $success;
    }
  }
}
</style>
