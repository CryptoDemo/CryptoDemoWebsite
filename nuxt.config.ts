// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify';
import { scrollBehaviour } from './src/scrollBehaviour'; // Use named import for scrollBehaviour

export default defineNuxtConfig ({
  ssr: false,
  devtools: { enabled: false },
  srcDir: "src",

  build: {
    transpile: ['vuetify'],
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
    async(options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        // @ts-expect-error
        // config.plugins.push(vuetify({ autoImport: true }))
        if(!config.plugins){
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

  vite: {ssr:{noExternal:['vuetify']} },
  compatibilityDate: '2024-07-08',

  // hooks: {
  //   'pages:extend'(router) {
  //     router.scrollBehavior = scrollBehaviour; // Set scroll behavior here
  //   }
  // }
  
})
