<template>
    <div class="sd-nav3 flex-lg-and-up hidden-md-and-down" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
      <div style="display: flex; justify-content: center;">
          <img :src="pinia.state?.user?.profile_image || '/svg/Image-grad.svg'" width="70" alt="avatar"/>
      </div>
      <span class="mt-4" style="font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 600; display: flex; justify-content: center;">@{{ pinia.state.user?.username}}</span>
          <div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 32px;">
         
           
           <v-chip :model-value="true" class="ma-2" color="success">
              <template #append>
                <img width="20" height="20" class="ml-3" src="/svg/verification-badge.svg"/>
              </template>
    
              Verified
           </v-chip>
          </div>
          <div v-for="(nav, i) in navigation" :key="i">
            <v-btn class="nav-options2"> 
              <img :src="nav.icon" width="24" class="me-3 icon-bar" :class="{ 'selected-icon': isSelected }" @click="isSelected = !isSelected"/>
              {{ nav.title }}
            </v-btn>      
          </div>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore()
  const isSelected = ref(false);
  const navigation = [
      {icon:'/svg/dashboard1.svg', title: 'Dashboard', link:'/account/dahsboard', },
       {icon:'/svg/partners2.svg', title: 'Trade Partners', link:'/profile', },
       {icon:'/svg/grey-wallet.svg', title: 'my Offers', link:'/settings',},
      //  {icon:'/svg/thumbs.svg', title: 'favourite', link:'/settings',},
       {icon:'/svg/invite.svg', title: 'Security', link:'/connected-apps',},
       {icon:'/svg/settings.svg', title: 'Settings', link:'/settings'},     
     ];
  </script>
  
  <style scoped>
  .sd-nav3{
  width: 305px;
  border-radius: 24px;
  padding: 31px 53px;
  }
  .nav-options2{
  height: 59px !important;
  width: 100%;
  box-shadow: none;
  display: flex;
  justify-content: flex-start;
  letter-spacing: 0px;
  text-transform: capitalize;
  background: inherit;
  color: var(--Gray-Medium-light, #969696);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 30px;
  }
  .status1{
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  }
  .nav-options2:focus {
  background:#2873FF !important;  
  border-radius: 22px;
  width: 199px;
  color: var(--Gray-Light, #D8D8D8);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transform: translateX(6px);
  }
  
  </style>