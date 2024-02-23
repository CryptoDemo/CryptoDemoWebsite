// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig ({
  devtools: { enabled: false }, 
  srcDir: "src",
  build: {
    transpile: ['vuetify'],
  },
  css: [
      "@/assets/css/index.css",
  ],
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
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

  vite: {ssr:{noExternal:['vuetify']} },

})




