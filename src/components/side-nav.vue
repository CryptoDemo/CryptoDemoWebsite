<template>
  <div class="sd-nav1">
   
    <div v-for="(item, i) in navigation" :key="i">
     <div style="display: flex; justify-content: space-between;">
     <v-btn class="nav-options1"> 
       <img :src="item.icon" width="24" class="me-3"/>
       {{ item.title }}

     </v-btn>
     </div>
   </div>
   </div>

   <div class="adv" style="margin-top: 32px;">
     <div style="display: flex; justify-content: space-betwee;">
       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none" class="me-3 mt-2">
         <path d="M17 6V16C17 20 16 21 12 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H12C16 1 17 2 17 6Z" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M11 4.5H7" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M9.00001 18.1C9.85605 18.1 10.55 17.406 10.55 16.55C10.55 15.694 9.85605 15 9.00001 15C8.14397 15 7.45001 15.694 7.45001 16.55C7.45001 17.406 8.14397 18.1 9.00001 18.1Z" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>
       <div>
         <span style="color: #D8D8D8; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 800!important; line-height: 28px;">Install our mobile app to <br> receive push <br>notifications on your <br> device.</span>
       </div>
     </div>
     <v-btn style="border-radius: 8px; background: #161D26; display: flex; padding: 6px 45px; letter-spacing: 0px; box-shadow: none; text-transform: unset; width: 100%; height: 40px!important;">Get app</v-btn>
   </div>


</template>
<script setup>

const navigation = [
     {icon:'/svg/profile1.svg', title: 'profile', link:'/profile', },
     {icon:'/svg/settings.svg', title: 'Security', link:'/settings',},
     {icon:'/svg/payment1.svg', title: 'payment methods', link:'/payment', },
     {icon:'/svg/connected.svg', title: 'Connected Apps and Websites', link:'/connected-apps',},
     {icon:'/svg/Item.svg', title: 'Security Questions ', link:'/Questions'},
     
   ];
</script>
<style scoped>

.sd-nav1{
border-radius: 24px;
background: var(--secondary-background, #12181F);
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
background: var(--secondary-background, #12181F)!important;
justify-content: flex-start!important;
align-items: center;
box-shadow: none !important;
color: var(--Gray-Medium-light, #969696)!important;
text-align: center;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-transform: capitalize !important;
letter-spacing: 0px !important;
}

.nav-options1:hover {
border-radius: 8px;
border-left: 2px solid var(--Primary-100, #2873FF);
background: var(--dark-bg, #10192D)!important;
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
background: var(--secondary-background, #12181F);
}
</style>