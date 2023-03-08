<template>
  <div class="login-card">
    <h1 class="title">
      Войти
    </h1>

    <UiInput
      v-model="form.name"
      label="Логин"
      before-text-icon="mdiAccountOutline"
      placeholder="Введите логин"
    />

    <UiInput
      v-model="form.password"
      type="password"
      label="Пароль"
      before-text-icon="mdiLockOutline"
      placeholder="Введите пароль"
    />

    <div class="form-row">
      <UiButton>
        Войти
      </UiButton>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  password: ''
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
