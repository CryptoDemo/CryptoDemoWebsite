<template>
<v-app>
  <div>
    <NuxtPage />
    <!-- <v-btn @click="toggleTheme">toggle theme</v-btn> -->
  </div>
</v-app>
</template>
<script setup>
import { useTheme } from 'vuetify'

// const theme = useTheme()

// const toggleTheme = () =>{
//   theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
// }
// const myCustomLightTheme = {
//     dark: true,
//     colors: {
//       background: 'red',
//       surface: '#FFFFFF'
//     }
//     }
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/poppins');
@import url('https://fonts.googleapis.com/css2?family=Manrope&family=Poppins&display=swap');


</style>