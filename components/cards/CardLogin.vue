<template>
  <div class="login-card">
    <h1 class="title">
      Войти
    </h1>

    <UiInput
      v-model="email"
      :error-message="emailError"
      label="Email"
      before-text-icon="mdiAccountOutline"
      placeholder="Введите email"
    />

    <UiInput
      v-model="password"
      :error-message="passwordError"
      type="password"
      label="Пароль"
      before-text-icon="mdiLockOutline"
      placeholder="Введите пароль"
    />

    <div class="form-row">
      <UiButton @click="handleLoginButtonClick">
        Войти
      </UiButton>
    </div>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate'

const nuxtApp = useNuxtApp()

const handleLoginButtonClick = () => {
  nuxtApp.$api.auth.auth(form).then(data => {
    console.dir(data)
  })
}

// Validation

const requireValidation = value => {
  if (!value) {
    return 'Не может быть пустым'
  }

  return true
}

const { errorMessage: emailError, value: email } = useField('email', requireValidation)
const { errorMessage: passwordError, value: password } = useField('password', requireValidation)
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
