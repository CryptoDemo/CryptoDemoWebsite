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
      titleTemplate: 'Betacrypto', 
      charset: "utf-8",
      viewport: 'width=device-width, initial-scale=1.0',
      link: [
        {rel: 'shortcut icon', href: "/img/logo1.jpg"},
      ],
    } 
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
