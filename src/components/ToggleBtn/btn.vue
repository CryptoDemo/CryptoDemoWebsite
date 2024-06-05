
<template src="./index.html"></template>
<script setup>
  import { useTheme } from 'vuetify';

  const theme = useTheme();
  const currentTheme = ref(theme.global.name);

  const changeTheme =(e) =>{
    theme.global.name.value = e.target.checked ? 'LightThemeConfig' : 'DarkThemeConfig';
    document.querySelectorAll(".switch__input").forEach((el)=>{
      el.checked = e.target.checked;
    });
    currentTheme.value = theme.global.name.value;

  }
</script>
<style src="./style.css"></style>