<template>
    <div>
      <v-alert v-if="!isOnline" type="error" dismissible>
        You are offline. Please check your internet connection.
      </v-alert>
      <v-alert v-else-if="onlineStatusMessage" type="success" dismissible @click="clearMessage">
        {{ onlineStatusMessage }}
      </v-alert>
    </div>
    <!-- You can optionally add UI elements here to indicate network status -->
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, watch } from 'vue';
  const onlineStatusMessage = ref('');
  
  const isOnline = ref(navigator.onLine);
  
  const updateOnlineStatus = () => {
    isOnline.value = navigator.onLine;
    if (!isOnline.value) {
      notifyUser('You are offline. Check your internet connection.');
    } else {
      notifyUser('You are back online.');
    }
  };
  
  const clearMessage = () => {
    onlineStatusMessage.value = '';
  };
  
  onMounted(() => {
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
  });
  
  onUnmounted(() => {
    window.removeEventListener('online', updateOnlineStatus);
    window.removeEventListener('offline', updateOnlineStatus);
  });
  
  const notifyUser = (message) => {
    console.log(message);
    // Replace this with your notification logic (toast, modal, etc.)
    onlineStatusMessage.value = message;
    setTimeout(clearMessage, 3000); // Clear message after 3 seconds
  };
  
  watch(isOnline, (newStatus) => {
    if (newStatus) {
      onlineStatusMessage.value = 'You are back online.';
    } else {
      onlineStatusMessage.value = 'You are offline. Check your internet connection.';
    }
  });
  
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  </style>
  