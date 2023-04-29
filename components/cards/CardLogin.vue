<template>
  <form
    class="login-card"
    @submit.prevent="onSubmit"
  >
    <h1 class="title">
      Войти
    </h1>

    <UiInput
      name="email"
      label="Email"
      before-text-icon="mdiAccountOutline"
      placeholder="Введите email"
    />

    <UiInput
      name="password"
      type="password"
      label="Пароль"
      before-text-icon="mdiLockOutline"
      placeholder="Введите пароль"
    />

    <div class="form-row">
      <UiButton
        type="submit"
        :is-loading="isLoading"
      >
        Войти
      </UiButton>
    </div>
  </form>
</template>

<script setup>
import { useForm } from 'vee-validate'

let isLoading = ref(false)

// validation
const validationSchema = {
  email(value) {
    if (!value) {
      return 'Не может быть пустым'
    }

    if (!(/.+@.+\..+/i).test(value)) {
      return 'Введён невалидный email'
    }

    return true
  },

  password(value) {
    return !!value || 'Не может быть пустым'
  }
}

const { handleSubmit } = useForm({
  validationSchema
})

// On submit

const nuxtApp = useNuxtApp()

const onSubmit = handleSubmit(formData => {
  isLoading.value = true

  nuxtApp.$api.auth.auth(formData)
    .then(data => {
      console.dir(data)
    })
    .finally(() => { isLoading.value = false })
})
</script>

<style lang="scss" scope>
.login-card {
  padding: $card-padding;
  background: $card-background;
  width: 400px;
  border-radius: $card-border-radius;

  .title {
    margin-top: 0;
    text-align: center;
  }
}
</style>
