<template>
<v-btn class="image-button" :style="{ backgroundImage: `url(${imageSrc})` }"></v-btn>
<v-btn class="image-button" :style="{ backgroundImage: `url(${imageSrc1})` }"></v-btn>
<v-btn class="image-button" :style="{ backgroundImage: `url(${imageSrc2})` }"></v-btn>
</template>

<script setup>

const imageSrc=('/svg/applestore.svg')  // Replace with your image path
const imageSrc1=('/svg/playstore.svg')  // Replace with your image path
const imageSrc2=('/svg/BTN-two.svg')  // Replace with your image path
    
</script>

<style>
.image-button {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 115px;
}
</style>