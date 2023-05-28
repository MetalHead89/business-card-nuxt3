<template>
  <FormBaseControl
    v-bind="$attrs"
    :component="UiPassword"
  />
</template>

<script setup lang="ts">
import UiPassword from '@/components/cms/ui/inputs/UiPassword.vue'
import FormBaseControl from './FormBaseControl.vue'
</script>
