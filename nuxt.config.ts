// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    '~/components',
    { path: '~/components/layouts', prefix: 'Layout' },
    { path: '~/components/blocks', prefix: 'Block' },
    { path: '~/components/cards', prefix: 'Card' },

    //cms
    { path: '~/components/cms/layouts', prefix: 'Cms' }
  ],

  modules: [
    '@pinia/nuxt'
  ],

  runtimeConfig: {
    public: {
      firebase: {
        FB_API_KEY: process.env.FB_API_KEY,
        FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
        FB_DATABASE_URL: process.env.FB_DATABASE_URL,
        FB_PROJECT_ID: process.env.FB_PROJECT_ID,
        FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
        FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
        FB_APP_ID: process.env.FB_APP_ID,
        FB_MEASUREMENT_ID: process.env.FB_MEASUREMENT_ID
      }
    }
  },

  css: ['@/assets/styles/global.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/styles/variables.scss" as *;'
            + '@use "@/assets/styles/functions.scss" as *;'
        }
      }
    }
  }
})
