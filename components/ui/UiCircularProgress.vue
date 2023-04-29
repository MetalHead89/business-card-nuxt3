<template>
  <svg
    class="progress-wrapper"
    viewBox="0 0 100 100"
  >
    <circle
      ref="circleRef"
      cx="50"
      cy="50"
      r="40"
    />
  </svg>
</template>

<script setup lang="ts">
const circleRef = ref<SVGCircleElement | null>(null)
let radius = 0
let circumference = 0

const props = defineProps({
  percent: {
    type: Number,
    default: 65
  }
})

watch(() => props.percent, () => {
  setProgress(props.percent)
})

onMounted(() => {
  if (!circleRef.value) {
    return
  }

  radius = circleRef.value.r.baseVal.value
  circumference = 2 * Math.PI * radius
  circleRef.value.style.strokeDasharray = circumference.toString()
  circleRef.value.style.strokeDashoffset = circumference.toString()

  setProgress(props.percent)
})

const setProgress = (percent: number) => {
  if (!circleRef.value) {
    return
  }

  const offset = circumference - percent / 100 * circumference
  circleRef.value.style.strokeDashoffset = offset.toString()
}
</script>

<style lang="scss" scoped>
svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg)
}

circle {
  fill: none;
  stroke: $white;
  stroke-width: 5px;
  stroke-dasharray: 450;
  stroke-linecap: round;
}
</style>
