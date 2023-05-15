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
      background: #ffd3d3;
      flex-grow: 1;
    }
  }
</style>
