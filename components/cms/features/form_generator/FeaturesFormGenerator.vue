<template>
  <form class="form">
    <Component
      :is="supportedControls[control]"
      v-for="({ control, props }, index) in controls"
      :key="index"
      v-bind="props"
    />
  </form>
</template>

<script setup lang="ts">
import FormInput from './controls/FormInput.vue'
import FormPassword from './controls/FormPassword.vue'

interface Props {
  controls: [] | [
    {
      control: keyof typeof supportedControls
      props?: object
    }
  ]
}

const supportedControls = {
  input: FormInput,
  password: FormPassword
}

withDefaults(defineProps<Props>(), {
  controls: () => []
})

</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
