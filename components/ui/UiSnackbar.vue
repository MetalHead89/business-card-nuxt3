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

    <div class="close-wrapper">
      <div class="close-content">
        <UiCircularProgress :percent="percent" />

        <UiSvgIcon
          icon="mdiWindowClose"
          class="close"
          @click="close"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SnackbarIcons, SnackbarType } from '@/types/ui'

// Types

interface ISnackbar {
  id: string,
  type?: SnackbarType,
  title?: string,
  text?: string,
  time?: number
}

// Common

const ICONS: SnackbarIcons = {
  success: 'mdiCheck',
  error : 'mdiClose'
}

const props = withDefaults(defineProps<ISnackbar>(), {
  type: 'success',
  title: '',
  text: '',
  time: 5000
})

const emit = defineEmits(['click'])

// Time

const percent = ref(0)
let timer: NodeJS.Timeout | null = null
let interval: NodeJS.Timeout | null = null
let timePassed = 0

onMounted(() => {
  const INTERVAL_TIME = 50

  if (props.time > 0 ) {
    percent.value = 0
    timePassed = 0
    timer = setTimeout(close, props.time)
    interval = setInterval(
      () => setPercent(INTERVAL_TIME),
      INTERVAL_TIME
    )
  }
})

onUnmounted(() => {
  clearTime()
})

const clearTime = () => {
  if (timer) {
    clearTimeout(timer)
  }

  if (interval) {
    clearInterval(interval)
  }
}

const setPercent = (interval: number) => {
  timePassed += interval
  percent.value = (timePassed * 100) / props.time
}

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

const close = () => {
  emit('click')
  clearTime()
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
  color: $white;

  .title {
    margin: 0;
  }

  .close-wrapper {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  .close-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
  }

  .progress-wrapper {
    position: absolute;
  }

  .close {
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
    background: $white;
  }

  &_success {
    $theme-color: $success;

    background: $theme-color;
    .icon {
      color: $theme-color;
    }
  }

  &_error {
    $theme-color: $error;

    background: $theme-color;
    .icon {
      color: $theme-color;
    }
  }
}
</style>
