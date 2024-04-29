<template>
  <v-app>
    <nuxt-layout>
      <NuxtPage />
        <Notivue v-slot="item">
          <Notification :item="item" />
        </Notivue>
  </nuxt-layout>
  </v-app>
</template>

<style>
  @import url('https://fonts.cdnfonts.com/css/poppins');
  @import url('https://fonts.googleapis.com/css2?family=Manrope&family=Poppins&display=swap');
  @import url('https://fonts.cdnfonts.com/css/sf-pro-display');
</style>