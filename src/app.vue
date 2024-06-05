<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
      <Notivue v-slot="item">
        <Notification :item="item"
          :icons="outlinedIcons"
          :theme="pastelTheme"
        />
  </Notivue>
  </NuxtLayout>
  </v-app>
</template>
<script setup>
import { useStore } from '@/stores/index'
import { Notification ,push,  pastelTheme} from 'notivue';

// const theme: NotivueTheme = {
//   ...slateTheme,
//   '--nv-global-bg': '#1c1d20',
//   '--nv-global-border': '#313237',
//   '--nv-radius': '0.25rem',
//   '--nv-tip-width': '3px',
//   '--nv-icon-size': '1.15rem'
// }

    const pinia = useStore();
    const router = useRouter();
    const currentPath = ref(router.currentRoute);

    
    
    const handleRouting = () => {
    const blackListedRoutesWhenLoggedIn = [
      "/authentication/register",
      "/authentication/login",
      "/authentication/reset-Password",
      "/authentication/reset-Password-otp",
      "/authentication/create-new-Password"
    ];
    if (blackListedRoutesWhenLoggedIn.includes(currentPath)) {
      router.push("/account/dashboard");
    }
    
    if(!pinia.state.user.id){
      router.push("/authentication/login");

    }
  };

  console.log( currentPath.value ,currentPath.value === "/authentication/register")



onBeforeMount(()=>{
    handleRouting();

})
</script>
<style>
  @import url('https://fonts.cdnfonts.com/css/poppins');
  @import url('https://fonts.googleapis.com/css2?family=Manrope&family=Poppins&display=swap');
  @import url('https://fonts.cdnfonts.com/css/sf-pro-display');
</style>