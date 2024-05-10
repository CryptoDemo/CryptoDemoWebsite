<template>
  <div class="sd-nav1" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
    <div v-for="(item, i) in navigation" :key="i">
     <div style="display: flex; justify-content: space-between;">
      <nuxt-link :to="item.link">
        <v-btn class="nav-options1" :class="isDark ? 'nav-options1-dark':'nav-options1-light'"> 
          <img :src="item.icon" width="24" class="me-3" v-if="theme.global.current.value.dark"/>
          <img :src="item.icon1" width="24" class="me-3" v-else/>
          {{ item.title }}
        </v-btn>
    </nuxt-link>
     </div>
   </div>
   </div>

   <div class="adv" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="margin-top: 32px;">
     <div style="display: flex; justify-content: space-between;">
       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none" class="me-3 mt-2">
         <path d="M17 6V16C17 20 16 21 12 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H12C16 1 17 2 17 6Z" stroke="#969696" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M11 4.5H7" stroke="#969696" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M9.00001 18.1C9.85605 18.1 10.55 17.406 10.55 16.55C10.55 15.694 9.85605 15 9.00001 15C8.14397 15 7.45001 15.694 7.45001 16.55C7.45001 17.406 8.14397 18.1 9.00001 18.1Z" stroke="#969696" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>
       <div>
         <span :class="isDark ? 'text-dark':'text-light'" style="font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 800!important; line-height: 28px;">Download the Demo mobile app and dive into<br> the world  <br> of crypto trading!</span>
       </div>
     </div>
     <v-btn  style="border-radius: 8px; display: flex;  background: linear-gradient(360deg, #2873FF, #0B6B96); padding: 6px 45px; color: white; letter-spacing: 0px; box-shadow: none; text-transform: unset; width: 100%; height: 40px!important;">Get app</v-btn>
   </div>

   <v-dialog width="647px">
      <template v-slot:activator="{ props }"><v-btn v-bind="props" width="152px" class="primary-btn1" style="border-radius: 16px; background: #E33E38 !important;"> Delete Account</v-btn></template>

      <template v-slot:default="{ isActive }">
            <v-card style="background: #12181F;border-radius: 32px; border: 1px solid var(--border, #303A46)!important;  padding: 40px ">
              <v-card-text>
                <div style="margin-bottom: 20px;">
                  <img src="/svg/delete-icon.svg"/>
                </div>
              <span style="font-size: 20px;color: #D8D8D8; font-family: Manrope; font-weight: 600;line-height: normal;">Are you sure you want to Logout?</span>
              <div style="margin-top: 20px">
                  <span style="color:#969696; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">Click “Proceed” to Logout</span>
              </div>
              </v-card-text>

              <v-card-actions style="justify-content: space-around; margin-top: 35px;">

                  <v-btn @click="logout()" :loading="loading" style="border-radius: 16px; border: 1px solid #303A46; background:  #E2E8F0; display: flex;width: 230px; height: 63px; color:  #323232;text-align: center; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal; text-transform: unset; letter-spacing: 0px">
                      Proceed
                  </v-btn>

                <v-btn class="primarybtn" style="display: flex; width: 230px; height: 64px; font-weight: 600;"
                  text="Cancel"
                  @click="isActive.value = false"
                ></v-btn>
              </v-card-actions>
            </v-card>
      </template>
    </v-dialog>
</template>
<script setup>
import { useTheme } from 'vuetify';
const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();
const loading= ref(false);
const navigation = [
  {icon:'/svg/profile1.svg', icon1:'/svg/profile1-dark.svg', title: 'profile', link:'account/profile', },
  {icon:'/svg/settings.svg', icon1:'/svg/security-dark.svg', title: 'Security', link:'/account/settings',},
  {icon:'/svg/payment1.svg', icon1:'/svg/payment-dark.svg', title: 'payment methods', link:'/account/payment', },
  {icon:'/svg/Item.svg',     icon1:'/svg/security-dark.svg', title: 'Security Questions ', link:'/account/Questions'},
  {icon:'/svg/delete-icon.svg',icon1:'/svg/security-dark.svg', title: 'Logout'},
  
];

const logout =  () => {
  loading.value = true 
  pinia.state.isAuthenticated = false
  // pinia.state.logout()
  navigateTo('/authentication/login')
}  

</script>
<style scoped>
.sd-nav1{
border-radius: 24px;
display: inline-flex;
padding: 16px 12px;
flex-direction: column;
align-items: flex-start;
gap: 8px;
}  
.nav-options1{
display: flex;
width: 283px !important;
height: 56px!important;
flex-shrink: 0;
border-radius: 8px !important;
justify-content: flex-start!important;
align-items: center;
box-shadow: none !important;
text-align: center;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-transform: capitalize !important;
letter-spacing: 0px !important;
}
.nav-options1-dark{
  background: var(--secondary-background, #0c1428)!important;
  color: #8E9BAE !important;
}
.nav-options1-light{
  color: #646464 !important;
}
.nav-options1:hover {
border-radius: 8px;
border-left: 2px solid var(--Primary-100, #2873FF);
background: var(--dark-bg, #10192D)!important;
}
.nav-options1-light:hover {
border-radius: 8px;
border-left: 2px solid #4284FF !important;
background: #F8FAFC !important;
}
.adv{
display: flex;
width: 305px;
padding: var(--spacing-3xl, 24px);
align-items: center;
align-content: center;
gap: 23px 179px;
flex-wrap: wrap;
border-radius: 16px;
}
.profile-cards-dark{
background:  #10192D!important;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px !important;
}
.profile-cards-light{
background: #F8FAFC!important;
}
</style>