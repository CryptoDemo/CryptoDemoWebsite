<template>
  <div>    
    <v-row>
      <v-col cols="12" offset-sm="3" sm="6">
        <div height="200px">
            <v-spacer></v-spacer>
            <v-menu> <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="nav-btn" :class="isDark ? 'nav-btn-dark':'nav-btn-light'">
                  <img src="/svg/profile-icon.svg" v-if="theme.global.current.value.dark"/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" v-else>
                    <path d="M12.7803 2C10.1603 2 8.03027 4.13 8.03027 6.75C8.03027 9.32 10.0403 11.4 12.6603 11.49C12.7403 11.48 12.8203 11.48 12.8803 11.49C12.9003 11.49 12.9103 11.49 12.9303 11.49C12.9403 11.49 12.9403 11.49 12.9503 11.49C15.5103 11.4 17.5203 9.32 17.5303 6.75C17.5303 4.13 15.4003 2 12.7803 2Z" fill="#0D0D0D"/>
                    <path d="M17.8602 14.1499C15.0702 12.2899 10.5202 12.2899 7.71023 14.1499C6.44023 14.9999 5.74023 16.1499 5.74023 17.3799C5.74023 18.6099 6.44023 19.7499 7.70023 20.5899C9.10023 21.5299 10.9402 21.9999 12.7802 21.9999C14.6202 21.9999 16.4602 21.5299 17.8602 20.5899C19.1202 19.7399 19.8202 18.5999 19.8202 17.3599C19.8102 16.1299 19.1202 14.9899 17.8602 14.1499Z" fill="#0D0D0D"/>
                  </svg>
                </v-btn>
              </template>

              <v-list style="background: rgba(22, 29, 38, 0.60)!important; backdrop-filter: blur(20px)!important; border-radius: 15px;">
                <v-list-item v-for="(item, i) in items" :key="i">
                
                    <div>
                      <v-btn  @click.prevent="navigateTo(item.link)" class="profile-btn">
                      <img :src="item.icon" class="me-3"/>
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
       {icon:'/svg/profile1.svg', title: 'My profile', link:'/profile'},
       {icon:'/svg/payment.svg', title: 'Payment Method', link:'/payment'},
       {icon:'/svg/transaction.svg', title: 'Transactions', link:''},
       {icon:'/svg/history.svg', title: 'History', link:'/history'},
       {icon:'/svg/settings.svg', title: 'Settings', link:'/settings'},
       {icon:'/svg/friend.svg', title: 'Invite a Friend', link:'/trade/invite'},
       {icon:'/svg/logout.svg', title: 'Log Out', link:''},
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
background: #0F141A !important;
letter-spacing: 0px !important;
text-transform: unset !important;
color: var(--Gray-Medium-light, #969696) !important;
font-family: Manrope !important;
font-size: 14px !important;
font-style: normal;
font-weight: 600 !important;
line-height: 28px !important; /* 200% */
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
</style>