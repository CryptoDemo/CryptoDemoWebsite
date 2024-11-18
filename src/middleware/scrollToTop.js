// export default defineNuxtRouteMiddleware(() => {
//   // Use requestAnimationFrame to ensure the DOM is ready
//   requestAnimationFrame(() => {
//     document.body.scrollTo({
//       top: 0,
//       behavior: 'smooth', // Enables smooth scrolling
//     });
//   });
// });

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




  