import { nextTick } from 'vue';

export default defineNuxtRouteMiddleware(() => {
  // Scroll to the top after the route navigation and rendering are complete
  nextTick(() => {
    document.body.scrollTo({
      top: 0,
      behavior: 'instant', // Use 'instant' for an immediate scroll, or 'smooth' for smooth scrolling
    });
  });
});




  