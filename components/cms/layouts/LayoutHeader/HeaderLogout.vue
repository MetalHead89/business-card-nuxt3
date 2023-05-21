<template>
  <div class="logout">
    <UiSvgIcon
      icon="mdiLogout"
      class="icon"
      @click="handleLogoutClick"
    />
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp()
const router = useRouter()

const handleLogoutClick = () => {
  nuxtApp.$api.auth.logout()
    .then(() => {
      router.push({ name: 'cms-login' })
    })
}
</script>

<style lang="scss" scoped>
$icon-size: 24px;

.logout {
  .icon {
    width: $icon-size;
    height: $icon-size;
    transition: .3s ease;
    cursor: pointer;

    &:hover {
      color: $purple;
    }
  }

  @media screen and (min-width: $size-xl) {
    .icon {
      width: get-vw($icon-size);
      height: get-vw($icon-size);
    }
  }
}
</style>
