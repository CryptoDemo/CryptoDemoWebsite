<template>
  <div>    
    <v-row>
      <v-col cols="12" offset-sm="3" sm="6">
        <div height="200px">
            <v-menu transition="slide-y-transition"> 
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="nav-btn" :class="isDark ? 'nav-btn-dark':'nav-btn-light'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none" :class="isDark ? 'close-btn':'close-btn-light'">
                    <g clip-path="url(#clip0_10512_46774)">
                      <path d="M7.7616 12.457C7.1214 12.457 6.48748 12.3309 5.89601 12.0859C5.30455 11.841 4.76714 11.4819 4.31445 11.0292C3.86177 10.5765 3.50268 10.0391 3.25768 9.44761C3.01269 8.85615 2.8866 8.22222 2.8866 7.58203C2.8866 6.94184 3.01269 6.30791 3.25768 5.71645C3.50268 5.12499 3.86177 4.58757 4.31445 4.13489C4.76714 3.6822 5.30455 3.32311 5.89601 3.07812C6.48748 2.83313 7.1214 2.70703 7.7616 2.70703C9.05453 2.70703 10.2945 3.22065 11.2087 4.13489C12.123 5.04913 12.6366 6.2891 12.6366 7.58203C12.6366 8.87496 12.123 10.1149 11.2087 11.0292C10.2945 11.9434 9.05453 12.457 7.7616 12.457ZM8.30326 23.2904C7.01033 23.2904 5.77036 22.7767 4.85612 21.8625C3.94188 20.9483 3.42826 19.7083 3.42826 18.4154C3.42826 17.1224 3.94188 15.8825 4.85612 14.9682C5.77036 14.054 7.01033 13.5404 8.30326 13.5404C9.59619 13.5404 10.8362 14.054 11.7504 14.9682C12.6646 15.8825 13.1783 17.1224 13.1783 18.4154C13.1783 19.7083 12.6646 20.9483 11.7504 21.8625C10.8362 22.7767 9.59619 23.2904 8.30326 23.2904ZM19.1366 12.457C18.4964 12.457 17.8625 12.3309 17.271 12.0859C16.6796 11.841 16.1421 11.4819 15.6895 11.0292C15.2368 10.5765 14.8777 10.0391 14.6327 9.44761C14.3877 8.85615 14.2616 8.22222 14.2616 7.58203C14.2616 6.94184 14.3877 6.30791 14.6327 5.71645C14.8777 5.12499 15.2368 4.58757 15.6895 4.13489C16.1421 3.6822 16.6796 3.32311 17.271 3.07812C17.8625 2.83313 18.4964 2.70703 19.1366 2.70703C20.4295 2.70703 21.6695 3.22065 22.5837 4.13489C23.498 5.04913 24.0116 6.2891 24.0116 7.58203C24.0116 8.87496 23.498 10.1149 22.5837 11.0292C21.6695 11.9434 20.4295 12.457 19.1366 12.457ZM19.1366 23.2904C17.8437 23.2904 16.6037 22.7767 15.6895 21.8625C14.7752 20.9483 14.2616 19.7083 14.2616 18.4154C14.2616 17.1224 14.7752 15.8825 15.6895 14.9682C16.6037 14.054 17.8437 13.5404 19.1366 13.5404C20.4295 13.5404 21.6695 14.054 22.5837 14.9682C23.498 15.8825 24.0116 17.1224 24.0116 18.4154C24.0116 19.7083 23.498 20.9483 22.5837 21.8625C21.6695 22.7767 20.4295 23.2904 19.1366 23.2904ZM7.7616 10.2904C8.47989 10.2904 9.16877 10.005 9.67668 9.49711C10.1846 8.9892 10.4699 8.30033 10.4699 7.58203C10.4699 6.86374 10.1846 6.17486 9.67668 5.66695C9.16877 5.15904 8.47989 4.8737 7.7616 4.8737C7.0433 4.8737 6.35443 5.15904 5.84652 5.66695C5.3386 6.17486 5.05326 6.86374 5.05326 7.58203C5.05326 8.30033 5.3386 8.9892 5.84652 9.49711C6.35443 10.005 7.0433 10.2904 7.7616 10.2904ZM8.30326 21.1237C9.02156 21.1237 9.71043 20.8384 10.2183 20.3304C10.7263 19.8225 11.0116 19.1337 11.0116 18.4154C11.0116 17.6971 10.7263 17.0082 10.2183 16.5003C9.71043 15.9924 9.02156 15.707 8.30326 15.707C7.58497 15.707 6.89609 15.9924 6.38818 16.5003C5.88027 17.0082 5.59493 17.6971 5.59493 18.4154C5.59493 19.1337 5.88027 19.8225 6.38818 20.3304C6.89609 20.8384 7.58497 21.1237 8.30326 21.1237ZM19.1366 10.2904C19.8549 10.2904 20.5438 10.005 21.0517 9.49711C21.5596 8.9892 21.8449 8.30033 21.8449 7.58203C21.8449 6.86374 21.5596 6.17486 21.0517 5.66695C20.5438 5.15904 19.8549 4.8737 19.1366 4.8737C18.4183 4.8737 17.7294 5.15904 17.2215 5.66695C16.7136 6.17486 16.4283 6.86374 16.4283 7.58203C16.4283 8.30033 16.7136 8.9892 17.2215 9.49711C17.7294 10.005 18.4183 10.2904 19.1366 10.2904ZM19.1366 21.1237C19.8549 21.1237 20.5438 20.8384 21.0517 20.3304C21.5596 19.8225 21.8449 19.1337 21.8449 18.4154C21.8449 17.6971 21.5596 17.0082 21.0517 16.5003C20.5438 15.9924 19.8549 15.707 19.1366 15.707C18.4183 15.707 17.7294 15.9924 17.2215 16.5003C16.7136 17.0082 16.4283 17.6971 16.4283 18.4154C16.4283 19.1337 16.7136 19.8225 17.2215 20.3304C17.7294 20.8384 18.4183 21.1237 19.1366 21.1237Z" fill="currentColor"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_10512_46774">
                        <rect width="26" height="26" fill="white" transform="translate(0.719971)"/>
                      </clipPath>
                    </defs>
                  </svg>
                
                </v-btn>
              </template>

              <v-list style="backdrop-filter: blur(20px)!important; border-radius: 15px;" :class="isDark ? 'menu-bg-dark':'menu-bg-light'">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <div>
                    <v-btn  @click.prevent="navigateTo(item.link)" class="profile-btn" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
                    <img :src="item.icon" class="me-3" width="20"/>
                    {{ item.title }}
                    </v-btn>
                  </div>
                </v-list-item>
              </v-list>
            </v-menu>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { useTheme } from 'vuetify';


const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const items = [
  {icon:'/svg/profile1.svg', title: 'My profile', link:'/account/profile'},
  {icon:'/svg/payment.svg', title: 'Payment Method', link:'#'},
  {icon:'/svg/transaction.svg', title: 'Security', link:'/account/security'},
  {icon:'/svg/settings.svg', title: 'Settings', link:'/account/settings'},
  {icon:'/svg/friend.svg', title: 'Dashboard', link:'/account/dashboard'},
  {icon:'/svg/market.svg', title: 'Market Place', link:'/account/marketplace/createOffer'},
  {icon:'/svg/logout.svg', title: 'Wallet', link:'/account/trade/wallet'},
  {icon:'/svg/logout.svg', title: 'Log Out', link:'/authentication/login'},
];
</script>
<style scoped>
.profile-btn{
display: flex;
width: 247px !important;
height: 48px !important;
justify-content: flex-start !important;
align-items: center;
flex-shrink: 0;
border-radius: 16px !important;
letter-spacing: 0px !important;
text-transform: unset !important;
font-family: Manrope !important;
font-size: 14px !important;
font-style: normal;
font-weight: 600 !important;
line-height: 28px !important; /* 200% */
box-shadow: none;
}     
.nav-btn{
border-radius: 20px !important; 
min-width: 52px!important;
height: 53.2px !important;
flex-shrink: 0;
box-shadow: none !important;
}
.nav-btn-dark{
background: #10192D !important; 
}
.nav-btn-light {
background: #F8FAFC !important; 
}
.close-btn{
fill: white;
}
.close-btn-dark{
fill: #10192D;
}

.menu-bg-dark{
background: #10192D !important;

}
.menu-bg-light{
background: #F8FAFC !important;
}

.menu-bg-dark{
background: #10192D !important;
color: #8E9BAE;
}
.profile-cards-light{
background: #F8FAFC !important;
color: #10192D !important;
}
@media screen and (max-width: 600px) {
.nav-btn{
background: inherit !important;
min-width: 0px!important;
height: 30px !important;
margin-top: -7px;
}
.nav-btn :deep(.v-btn__overlay, .v-btn__underlay) {
  width: 0% !important;
}
.v-btn:focus, 
.v-btn:active {
  background-color: transparent !important;
  box-shadow: none !important;
}

}
</style>