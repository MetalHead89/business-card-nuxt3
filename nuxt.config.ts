// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    '~/components',
    { path: '~/components/blocks', prefix: 'Block' }
  ],

  css: ['@/assets/styles/global.scss']
})
