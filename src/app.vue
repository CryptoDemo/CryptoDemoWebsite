<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
      <Notivue v-slot="item">
        <Notification :item="item"
          :icons="outlinedIcons"
          :theme="pastelTheme"
        />
  </Notivue>
  </NuxtLayout>
  </v-app>
</template>
<script setup>
import { useStore } from '@/stores/index'
import { Notification ,push,  pastelTheme} from 'notivue';

</script>
<style>
  @import url('https://fonts.cdnfonts.com/css/poppins');
  @import url('https://fonts.googleapis.com/css2?family=Manrope&family=Poppins&display=swap');
  @import url('https://fonts.cdnfonts.com/css/sf-pro-display');
</style>