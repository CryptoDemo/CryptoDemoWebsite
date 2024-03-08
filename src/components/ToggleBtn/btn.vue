
<template src="./index.html"></template>
<script setup>
import { useTheme } from 'vuetify';

const theme = useTheme()

 const changeTheme =(e) =>{
   theme.global.name.value = e.target.checked ? 'LightThemeConfig' : 'DarkThemeConfig'
  console.log (e.target.checked)
 }


</script>
<style src="./style.css"></style>