<template>
  <div>
    <GoogleTranslateSelect
      default-language-code="en"
      default-page-language-code="en"
      :fetch-browser-language="false"
      
      trigger="click"
      @select="handleGoogleTranslateSelect"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import GoogleTranslateSelect from '@google-translate-select/vue3';

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();

const language = pinia.state.preferredLanguage.name
const handleGoogleTranslateSelect = async (language) => {
  try {
    pinia.setpreferredLanguage(language) // Update language in the store
  } catch (error) {
    console.error('Failed to set language:', error);
  }
};

</script>

<style scoped>
@media screen and (max-width: 600px) {
  .language-select{
  margin-right: 31px !important;
}
}
</style>
