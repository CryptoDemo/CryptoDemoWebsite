// middleware/scrollToTop.js
export default defineNuxtRouteMiddleware(() => {
  // Smooth scroll to top on every route change
  document.body.scrollTo({
    top: 0,
  });
  console.log("Smooth scroll to top triggered...");
});


  