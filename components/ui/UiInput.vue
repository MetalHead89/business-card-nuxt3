<template>
  <LayoutControlWrapper
    :label="label"
    :is-form-control="isFormControl"
  >
    <div :class="inputContainerClasses">
      <UiSvgIcon
        v-if="beforeTextIcon"
        :icon="beforeTextIcon"
        class="before-text-icon"
      />

      <input
        :value="modelValue"
        v-bind="$attrs"
        autocomplete="new-password"
        @input="handleInputInput"
        @focus="handleInputFocus"
        @blur="handleInputBlur"
      >
    </div>
    <UiError :errors="[errorMessage]" />
  </LayoutControlWrapper>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },

  isFormControl: {
    type: Boolean,
    default: true
  },

  label: {
    type: String,
    default: ''
  },

  beforeTextIcon: {
    type: String,
    default: ''
  },

  errorMessage: {
    type: String,
    default: ''
  }
})

const isFocus = ref(false)

const inputContainerClasses = computed(() => {
  const BASE_CLASS = 'ui-input'
  return [
    BASE_CLASS,
    isFocus.value && `${BASE_CLASS}_focused`,
    props.modelValue && `${BASE_CLASS}_has-content`,
    props.beforeTextIcon && `${BASE_CLASS}_has-before-icon`
  ]
})

const handleInputFocus = () => {
  isFocus.value = true
}

const handleInputBlur = () => {
  isFocus.value = false
}

const handleInputInput = ({ target: { value } }) => {
  emit('update:modelValue', value)
}
</script>

<style lang="scss">
$before-icon-size: 22px;

.ui-input {
  width: 100%;
  position: relative;

  input {
    box-sizing: border-box;
    width: 100%;
    padding: $input-padding;
    border: none;
    border-bottom: 2px solid $muted-gray;

    &:focus, &:active {
      outline: none;
    }

    &::placeholder {
      color: $light-gray;
    }
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    height: 2px;
    width: 0;
    background: $gray;
    left: 0;
    bottom: 0;
    transition: width 0.3s ease-out;
  }

  .before-text-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: $light-gray;
    width: $before-icon-size;
    height: $before-icon-size;
  }

  &_focused, &_has-content {
    &::before {
      width: 100%;
    }

    .before-text-icon {
      color: $purple;
    }
  }

  &_has-before-icon {
    input {
      padding-left: calc($before-icon-size + 20px);
    }
  }
}
</style>
