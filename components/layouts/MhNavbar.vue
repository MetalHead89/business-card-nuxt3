<template>
  <nav :class="navbarClasses">
    <ul class="menu">
      <li>Главная</li>
      <li>Обо мне</li>
      <li>Контакты</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MhNavbar',

  props: {
    isDark: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    navbarClasses() {
      const BASE_CLASS = 'mh-navbar'

      return [BASE_CLASS, this.isDark && BASE_CLASS + '_theme_dark']
    }
  }
}
</script>

<style lang="scss" scoped>
.mh-navbar {
  .menu {
    display: flex;
    justify-content: center;
    gap: 30px;
    color: $white;
    font-weight: bold;
    list-style-type: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: all 0.35s ease-in-out;
  }

  &_theme_dark {
    .menu {
      color: $black;
    }
  }
}
</style>
