<template>
 <slot/>
 
</template>

<script setup>
//     import {useStore}  from "@/stores/index";
//     const pinia = useStore();
//     const router = useRouter();

// const blackListedRoutesWhenLoggedIn = [
//   "/authentication/register",
//   "/authentication/login",
//   "/authentication/reset-Password",
//   "/authentication/reset-Password-otp",
//   "/authentication/create-new-Password"
// ];

    
// const handleRouting = () => {
//     const currentPath = router.path;
//   if (currentPath !== "/") {
//     if (currentPath.includes("/account") && !pinia.state.user?.token) {
//       router.push("/authentication/login");
//     } else if (pinia.state.user?.token && blackListedRoutesWhenLoggedIn.includes(currentPath)) {
//       router.push("/account/dashboard");
//     } else if (!pinia.state.user?.token && !blackListedRoutesWhenLoggedIn.includes(currentPath)) {
//       router.push("/authentication/login");
//     }
//   }
// };

// watch(()=>router.currentRoute.value.path,()=>{
//     handleRouting();
// });

// onBeforeMount(()=>handleRouting());


</script>
