<template>
  <div id="app">
    <CmsLayoutSidebar />
    <CmsLayoutHeader />
    <main>
      <slot />
    </main>
    <UiSnackbarList />
  </div>
</template>

<style lang="scss" scoped>
#app {
  display: flex;

  main {
    padding-top: $header-height;
    flex-grow: 1;
  }

  @media screen and (min-width: $size-xl) {
    main {
      padding-top: get-vw($header-height);
    }
  }
}
</style>
