<template>
    <div>
    <img src="https://res.cloudinary.com/dfejrmsq5/image/upload/v1711619522/Background_pattern_cr8ghg.svg" class="position-absolute bg-vector" style="opacity: 0.4; left: 0; height: 90%;  right: 0; display: flex; margin: auto" v-if="theme.global.current.value.dark"/>
    <img src="https://res.cloudinary.com/dfejrmsq5/image/upload/v1711619522/Background_pattern_cr8ghg.svg" class="position-absolute bg-vector" style="opacity: 0.2; left: 0; height: 90%; right: 0; display: flex; margin: auto" v-else/>
    </div>
  
</template>

<script setup>
import { useTheme } from 'vuetify';

const theme = useTheme()
</script>