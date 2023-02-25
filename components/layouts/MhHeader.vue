<template>
  <header :class="headerClasses">
    <div class="mh-content-container">
      <MhNavbar :is-dark="isSticked" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'MhHeader',

  data() {
    return {
      isSticked: false
    }
  },

  computed: {
    headerClasses() {
      const BASE_CLASS = 'mh-header'

      return [BASE_CLASS, this.isSticked && BASE_CLASS + '_is_sticked']
    }
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll() {
      this.isSticked = window.top.scrollY !== 0
    }
  }
}
</script>

<style lang="scss" scoped>
.mh-header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 25px 0;
  border-bottom: 1px solid transparentize($white, 0.85);
  box-shadow: 0 8px 25px 0 transparentize($black, 0.96);

  &_is_sticked {
    background: $white;
  }
}
</style>
