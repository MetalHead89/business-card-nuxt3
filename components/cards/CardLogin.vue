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
import useFirebase from '@/composables/firebase'

const isLoading = ref(false)
const router = useRouter()
const { fbAuth, signInWithEmailAndPassword, signOut } = useFirebase() || {}
const { $eventBus } = useNuxtApp()
const authErrorsCodes = [
  'auth/invalid-email',
  'auth/wrong-password',
  'auth/user-disabled',
  'auth/user-not-found'
]

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

  signInWithEmailAndPassword(fbAuth, formData.email, formData.password)
    .then(({ user }) => {
      auth(user)
    })
    .catch(({ code }) => {
      showErrorMessage(code)
    })
    .finally(() => { isLoading.value = false })
})

const showErrorMessage = code => {
  let errorMessage = 'Возникла ошибка во время авторизации. Попробуйте войти позже'

  if (code && authErrorsCodes.includes(code)) {
    errorMessage = 'Неверные email или пароль'
  }

  $eventBus.event('snackbar-add', { type: 'error', title: 'Ошибка', text: errorMessage })
}

const auth = user => {
  user.getIdToken()
    .then(idToken => {
      nuxtApp.$api.auth.auth({ idToken })
        .then(() => {
          signOut(fbAuth)
          router.push({ name: nuxtApp.$cmsConfig.startPage })
        })
    })
}
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
