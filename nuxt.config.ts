// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    '~/components',
    '~/components/layouts',
    { path: '~/components/blocks', prefix: 'Block' }
  ],

  css: ['@/assets/styles/global.scss'],

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
