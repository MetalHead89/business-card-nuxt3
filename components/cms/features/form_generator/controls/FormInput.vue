<template>
  <FormBaseControl
    v-bind="$attrs"
    :component="UiInput"
  />
</template>

<script setup lang="ts">
import UiInput from '@/components/cms/ui/inputs/UiInput.vue'
import FormBaseControl from './FormBaseControl.vue'
</script>
