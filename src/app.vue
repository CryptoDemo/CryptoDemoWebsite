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
import { Notification ,push,  pastelTheme} from 'notivue';

// const theme: NotivueTheme = {
//   ...slateTheme,
//   '--nv-global-bg': '#1c1d20',
//   '--nv-global-border': '#313237',
//   '--nv-radius': '0.25rem',
//   '--nv-tip-width': '3px',
//   '--nv-icon-size': '1.15rem'
// }
</script>
<style>
  @import url('https://fonts.cdnfonts.com/css/poppins');
  @import url('https://fonts.googleapis.com/css2?family=Manrope&family=Poppins&display=swap');
  @import url('https://fonts.cdnfonts.com/css/sf-pro-display');
</style>