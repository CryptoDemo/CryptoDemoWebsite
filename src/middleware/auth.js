// src/middleware/auth.js

import { useStore } from '@/stores'; // Adjust the path to your store
import { computed } from 'vue';

export default defineNuxtRouteMiddleware((to, from) => {
  const pinia = useStore(); // Import Pinia store

  // Check if the user is authenticated
  const isAuthenticated = computed(() => !!pinia.state.isAuthenticated);

  // If the user is not logged in and trying to access restricted routes
  if (!isAuthenticated.value && !to.path.includes('/authentication')) {
    return navigateTo('/authentication/login'); // Redirect to login if not authenticated
  }

  // If the user is logged in and trying to access login/register pages, redirect them
  if (isAuthenticated.value && to.path.includes('/authentication')) {
    return navigateTo('/account/dashboard'); // Redirect to a protected page
  }
});


