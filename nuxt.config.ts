// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    '~/components',
    { path: '~/components/layouts', prefix: 'Layout' },
    { path: '~/components/blocks', prefix: 'Block' },
    { path: '~/components/cards', prefix: 'Card' }
  ],

  css: ['@/assets/styles/global.scss'],

  // css: ['@/assets/styles/global.scss', '@fortawesome/fontawesome-svg-core/styles.css'],

  // build: {
  //   transpile: [
  //     '@fortawesome/fontawesome-svg-core',
  //     '@fortawesome/free-brands-svg-icons',
  //     '@fortawesome/free-regular-svg-icons',
  //     '@fortawesome/free-solid-svg-icons',
  //     '@fortawesome/vue-fontawesome'
  //   ]
  // },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variables.scss" as *;'
        }
      }
    }
  }
})
