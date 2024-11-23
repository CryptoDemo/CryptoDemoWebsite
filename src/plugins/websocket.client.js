import VueSimpleWebsocket from "vue-simple-websocket";

import { websocketUrl } from "@/composables/configs";

export default defineNuxtPlugin((nuxtApp) => {
    const initSocket = ()=>{
      nuxtApp.vueApp.use(VueSimpleWebsocket, websocketUrl(), {
        reconnectEnabled: true,
        reconnectInterval: 500,
      });
  
      return nuxtApp.vueApp.config.globalProperties.$socketClient;
    }
  
    return {
      provide: {
        initSocket,
      }
    }
  })

