// myStore.js
import { defineStore } from 'pinia';

import {persistedState} from "#imports"

 export const CryptoDemo = defineStore({
   id: 'Demo',
   state: () => ({
     isDarkTheme: true,
   }),
   actions: {
     changeTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      // TODO: set the current theme to the body element
    },
   },
   persist: {
    storage: persistedState.localStorage,
  },
 });

if (import.meta.hot){
  import.meta.hot.accept(acceptHMRUpdate(onCallStore,import.meta.hot))
}