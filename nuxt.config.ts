// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  srcDir: "src",

  build: {
    transpile: ['vuetify'],
  },

  app: {
    head: {
      title: "Spot Trading | Safe P2P Trading | Trade Bitcoin & Altcoin",
      titleTemplate: '%s - Betacrypto',
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "description", content: "Unlock trading's future with Betacrypto: Buy, sell, and trade crypto effortlessly using real-time data and advanced tools." },
        { name: "keywords", content: "crypto, cryptocurrency, bitcoin, blockchain, Betacrypto, Safe P2P Trading" },
        { name: "author", content: "Betacrypto" },
        { name: "publisher", content: "Betacrypto" },
        {name: "language", content: "eng"},
        { property: "og:title", content: "Betacrypto" },
        { property: "og:description", content: "Unlock trading's future with Betacrypto: Buy, sell, and trade crypto effortlessly using real-time data and advanced tools." },
        { property: "og:image", content: "/img/logo1.png" },
        { property: "og:url", content: "https://betacrypto.com" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: 'shortcut icon', href: "/img/logo1.png" },
        { rel: 'canonical', href: "https://betacrypto.com" },
      ],
    }
  },

  sitemap: {
    hostname: 'https://betacrypto.com', // Required for full URLs
    exclude: [
      '/account/**', // Exclude all admin routes
      '/authentication/**', // Exclude specific pages
    ],
  },

  css: [
    "@/assets/css/index.css",
    'notivue/notifications.css', // Only needed if using built-in notifications
    'notivue/animations.css',
    'notivue/notification-progress.css',

  ],


  components: {
    dirs: [
      { path: '~/components', pathPrefix: false, lazy: true },
    ],
  },


  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    'notivue/nuxt',
    '@nuxtjs/device',
    '@lambahq/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/seo',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        // @ts-expect-error
        // config.plugins.push(vuetify({ autoImport: true }))
        if (!config.plugins) {
          config.plugins = [];
        }
        config.plugins.push(vuetify(
          {
          }
        ))
      })
    },
    //...
  ],

  intercom: {
    // Required
    appId: "lwqnsoko"
  },

  notivue: {
    notifications: {
      global: {
        duration: 5000
      }
    }
  },

  vite: { ssr: { noExternal: ['vuetify'] } },
  compatibilityDate: '2024-07-08',

})
