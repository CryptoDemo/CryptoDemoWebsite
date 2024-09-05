<template>
  <div>    
    <v-menu transition="slide-y-transition"> 
      <template v-slot:activator="{ props }">
        <button v-bind="props" class="nav-btn" :class="isDark ? 'nav-btn-dark':'nav-btn-light'">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" :class="isDark ? 'close-btn':'close-btn-light'">
            <path d="M9.81001 5.38647H9.81V5.38988V7.31122C9.81 8.28985 9.5559 8.91334 9.17922 9.29426C8.80392 9.67377 8.19199 9.92864 7.23 9.92864H5.33C4.36801 9.92864 3.75608 9.67377 3.38078 9.29426C3.0041 8.91334 2.75 8.28985 2.75 7.31122V5.38988C2.75 4.41126 3.00408 3.78819 3.38145 3.40744C3.75769 3.02782 4.37212 2.77246 5.34 2.77246H7.24C8.20226 2.77246 8.81363 3.02745 9.18738 3.40625C9.56222 3.78615 9.81444 4.40848 9.81001 5.38647Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
            <path d="M16.7704 2.77246H18.6704C19.6324 2.77246 20.2444 3.02733 20.6196 3.40684C20.9963 3.78776 21.2504 4.41125 21.2504 5.38988V7.31122C21.2504 8.28985 20.9963 8.91334 20.6196 9.29426C20.2444 9.67377 19.6324 9.92864 18.6704 9.92864H16.7704C15.8084 9.92864 15.1965 9.67377 14.8212 9.29426C14.4445 8.91334 14.1904 8.28985 14.1904 7.31122V5.38988C14.1904 4.41125 14.4445 3.78776 14.8212 3.40684C15.1965 3.02733 15.8084 2.77246 16.7704 2.77246Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
            <path d="M16.7704 14.3308H18.6704C19.6324 14.3308 20.2444 14.5857 20.6196 14.9652C20.9963 15.3461 21.2504 15.9696 21.2504 16.9482V18.8696C21.2504 19.8482 20.9963 20.4717 20.6196 20.8526C20.2444 21.2321 19.6324 21.487 18.6704 21.487H16.7704C15.8084 21.487 15.1965 21.2321 14.8212 20.8526C14.4445 20.4717 14.1904 19.8482 14.1904 18.8696V16.9482C14.1904 15.9696 14.4445 15.3461 14.8212 14.9652C15.1965 14.5857 15.8084 14.3308 16.7704 14.3308Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
            <path d="M9.81001 16.955H9.81V16.9583V18.8797C9.81 19.8583 9.5559 20.4818 9.17922 20.8627C8.80392 21.2422 8.19199 21.4971 7.23 21.4971H5.33C4.36802 21.4971 3.75651 21.2423 3.38137 20.8621C3.00457 20.4802 2.75 19.8541 2.75 18.8696V16.9482C2.75 15.9696 3.00408 15.3465 3.38145 14.9658C3.75769 14.5862 4.37212 14.3308 5.34 14.3308H7.24C8.20225 14.3308 8.81319 14.5858 9.18679 14.9653C9.56176 15.3461 9.81445 15.971 9.81001 16.955Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
          </svg>

        
        
        </button>
      </template>

      <v-list style="backdrop-filter: blur(20px)!important; border-radius: 15px; margin-top: 20px;" :class="isDark ? 'menu-bg-dark':'menu-bg-light'">
        <v-list-item v-for="(item, i) in items" :key="i">
          <div>
            <v-btn @click.prevent="navigateTo(item.link)" class="profile-btn" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
            <img :src="item.icon" class="me-3" width="20"/>
            {{ item.title }}
            </v-btn>
          </div>
        </v-list-item>

        <div class="ml-4">

          <v-dialog max-width="400">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn  v-bind="activatorProps" class="profile-btn"  variant="flat" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="letter-spacing: 0px; text-transform: unset;">
                <img src="/svg/logout.svg" class="me-1"/>
                Log out
              </v-btn>
            </template>
  
            <template v-slot:default="{ }">
              <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 15px;">
                <v-card-text>
                 <span class="text-center" style="display: flex; justify-content: center;">Are you sure you want to Logout?</span> 
                </v-card-text>
  
                <v-card-actions>
                  <v-spacer></v-spacer>
  
                  <v-btn @click="Logout_()" style="background: red; letter-spacing: 0px; text-transform: unset; margin-bottom: 6px; margin-right: 6px;">Logout</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </div>


      </v-list>
    </v-menu>
  </div>
</template>
<script setup>
import { useTheme } from 'vuetify';

const pinia = useStore();
const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const items = [
  {icon:'/svg/friend.svg', title: 'Dashboard', link:'/account/dashboard'},
  {icon:'/svg/market.svg', title: 'Market Place', link:'/account/marketplace/activeOffers'},
  {icon:'/svg/createoffer.svg', title: 'Create Offers', link:'/account/marketplace/createOffer'},
  {icon:'/svg/trades.svg', title: 'Trades', link:'/account/marketplace/trades'},
  {icon:'/svg/profile1.svg', title: 'My profile', link:'/account/profile'},
  {icon:'/svg/security.svg', title: 'Security', link:'/account/security'},
  {icon:'/svg/settings.svg', title: 'Settings', link:'/account/settings'},
];

const Logout_= () => {
  // Clear the user state in Pinia
  pinia.logout();

};
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
display: flex;
align-items: center;
justify-content: center;
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
margin-top: -12px;
margin-right: 20px;
}
.nav-btn :deep(.v-btn__overlay, .v-btn__underlay) {
  width: 0% !important;
}


}
</style>