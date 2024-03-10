
<template src="./index.html"></template>
<script setup>
import { useTheme } from 'vuetify';

const theme = useTheme();

 const changeTheme =(e) =>{
  theme.global.name.value = e.target.checked ? 'LightThemeConfig' : 'DarkThemeConfig';
  document.querySelectorAll(".switch__input").forEach((el)=>{
    el.checked = e.target.checked;
  });
  document.querySelector(".switch-hint").innerHTML = e.target.checked ? 'dark' : 'light';
 }


</script>
<style src="./style.css"></style>