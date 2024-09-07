<template>
    
<div ref="hCaptchaContainer" class="h-captcha" :data-sitekey="siteKey"></div>
  </template>
  
  <script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  siteKey: {
    type: String,
    required: true,
  },
});

const hCaptchaContainer = ref(null);

onMounted(() => {
  // Load hCaptcha script
  const script = document.createElement("script");
  script.src = "https://js.hcaptcha.com/1/api.js";
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);

  script.onload = () => {
    if (window.hcaptcha) {
      window.hcaptcha.render(hCaptchaContainer.value, {
        sitekey: props.siteKey,
      });
    }
  };
});
</script>