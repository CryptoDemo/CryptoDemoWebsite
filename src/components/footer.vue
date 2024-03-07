<template>
<section  :class="isDark ? 'footer-wrapper':'footer-wrapper-light'">
    <v-container>
        <div class="d-flex mt-5 ma-2 px-4" style="justify-content: space-between;">
          <span  :class="isDark ? 'demo-web1':'demo-web1-light'" >Demo Web</span>
          <Language-dropdown/>
        </div>
      <v-footer :class="isDark ? 'footer-bg':'footer-bg-light'">
        <v-row  no-gutters style="justify-content: space-between;" sm="4" >
          <div
            v-for="link in footer" 
            :key="link"
            variant="text"
            class="mx-2" :class="isDark ? 'footer-text':'footer-text-light'"
            rounded="xl">
            {{ link.title }}
            <v-col class="py-2" style="padding: 0px; margin-top: 11px; display: grid;">
              <NuxtLink :to="link.link"><span class="footer-links">{{link.subtitle1}}</span></NuxtLink>
              <NuxtLink to="#"><span class="footer-links" >{{link.subtitle2}}</span></NuxtLink>
              <NuxtLink to="#"><span class="footer-links">{{link.subtitle3}}</span></NuxtLink>
              <NuxtLink to="#"><span class="footer-links">{{link.subtitle4}}</span></NuxtLink>
              <NuxtLink to="#"><span class="footer-links">{{link.subtitle5}}</span></NuxtLink>
              <NuxtLink to="#"><span class="footer-links">{{link.subtitle6}}</span></NuxtLink>
              <NuxtLink to="#"><span class="footer-links">{{link.subtitle7}}</span></NuxtLink>
              <NuxtLink to="#"><span class="footer-links">{{link.subtitle8}}</span> </NuxtLink>  
            </v-col>
          </div>
        </v-row>    
      </v-footer>
        <div class="d-flex" style="justify-content: space-between; margin-top: 64px; display: flex">
          <div style="display: flex; align-items: center">
            <Toggle @click="toggleTheme" class="me-3"/>
            <span class="" style="color: #E2E8F0"></span>
          </div>
          <div class="d-flex" style="margin-top: 16px">
            <v-icon icon="mdi-information me-2" color="#165CDD"></v-icon>
            <span  :class="isDark ? 'FAQ-text':'FAQ-text-light'">FAQ’s and Help Centre</span>
          </div>
        </div>
    </v-container>
      <div class="footer-icon"  :class="isDark ? 'footer-icon':'footer-icon-light'" style="margin-top: 50px">
        <v-container>
          <v-row class="d-flex">
            <v-col>
                <div class="d-flex">
                  <img src="/svg/BTN 1.svg" class="social-icons me-4"/>
                  <img src="/svg/BTN 2.svg" class="social-icons me-2"/>
                  <div class="border-line"></div>
                  <span class="icon-text">Demo Web App now available for download</span>
                </div>
                  </v-col>
                  <v-col>
                <div style="display: flex; gap: var(--spacing-3xl, 24px); justify-content: end">
                  <img src="/svg/Social icon.svg"  class="social-icons me-2" />
                  <img src="/svg/Social icon (1).svg" class="social-icons me-2"/>
                  <img src="/svg/Social icon (2).svg" class="social-icons me-2" />
                  <img src="/svg/Social icon (3).svg" class="social-icons me-2"/>
                  <img src="/svg/Social icon (4).svg" class="social-icons me-2"/>
                  <img src="/svg/Social icon (5).svg" class="social-icons me-2" />
                </div>
             </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="footer-container"  :class="theme.global.current.value.dark?'custom-dark':'custom-light'">
        <v-container>
            <span class="footer-text2">
              “DEMO WEB” is a registered trademark of Paxful, Inc. Copyright © 2024 Demo Web, Inc. All Rights Reserved. Paxful Inc. has no relation to MoneyGram, Western Union, Payoneer, WorldRemit, Paxum, PayPal, Amazon, OkPay, Payza, Walmart, Reloadit, Perfect Money, WebMoney, Google Wallet, BlueBird, Serve, Square Cash, NetSpend, Chase QuickPay, Skrill, Vanilla, MyVanilla, OneVanilla, Neteller, Venmo, Apple, ChimpChange or any other payment method. We make no claims about being supported by or supporting these services. Their respective wordmarks and trademarks belong to them alone. Official mailing address: 4023 Kennett Pike #50541, Wilmington, DE 19807
            </span>
        </v-container>
      </div>
</section>
</template>

<script setup>
import { ref } from 'vue';

import { useTheme } from 'vuetify';

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const toggleTheme = () =>{
  theme.global.name.value = theme.global.current.value.dark ? 'LightThemeConfig' : 'DarkThemeConfig'
}

const footer = ref ([
        {
          title: 'Legal', 
          subtitle1:'Vendor Reminder', link:'#',
          subtitle2:"Terms & Conditions", link:'#',
          subtitle3: 'AML Policy', link:'#',
          subtitle4: 'Stablecoin Terms Of Service', link:'#',
          subtitle5: 'Privacy Notice', link:'#',
          subtitle6: 'Cookie Policy', link:'#',
          subtitle7: 'Restricted Countries', link:'#',
          subtitle8: 'Bug Bounty Policy', link:'#',

        },

        {
          title: 'For You', 
          subtitle1:'Buy Bitcoin',
          subtitle2:'Buy Tether',
          subtitle3:'Sell Bitcoin',
          subtitle4:'Buy Bitcoin',
          subtitle5:'Demo web Wallet',
          subtitle6:'Become Vendor',
        },

        {
          title: 'For Your Business', 
          subtitle1:'Demo Web Pay',
          subtitle2:'Virtual Bitcoin Kiosk',
          subtitle3:'API Documentation',
      
        },

        {
          title: 'Growth', 
          subtitle1:'Demo Web Rewards Program',
          subtitle2:'Demo Web Trader Program',
          subtitle3:'Demo Web Peer Program',
          subtitle4:'Community',
        },

        {
          title: 'Buy Anywhere', 
          subtitle1:'Buy Bitcoin in USA',
          subtitle2:'Buy Bitcoin in Nigeria',
          subtitle3:'Buy Bitcoin in India',
        },

        {
          title: 'Useful Links', 
          subtitle1:'Demo Web Status',
          subtitle2:'Bitcoin Calculator',
          subtitle3:'Peer-to-Peer Market Prices',
        },

        {
          title: 'About Demo Web', 
          subtitle1:'About Us',
          subtitle2:'Business Contacts',
          subtitle3:'Careers',
          subtitle4:'Demo Web Blog',
          subtitle5:'Demo Web Reviews',
        },
      ]);

</script>

<style scoped>

.footer-bg{
align-items: center;
flex-shrink: 0;  
background: rgba(6, 10, 29, 0.70);
backdrop-filter: blur(25px); 
margin-top: 64px;
}
.footer-bg-light{
align-items: center;
flex-shrink: 0;  
background: rgba(255, 255, 255, 0.70);
backdrop-filter: blur(25px); 
margin-top: 64px;
}
.footer-text{
color: #E2E8F0;
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 100%; /* 14px */
letter-spacing: 0.14px;
}
.footer-text-light{
color: #10192D;
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 100%; /* 14px */
letter-spacing: 0.14px;
}
.footer-links{
margin-bottom: 16px;
color: #8E9BAE;
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 14px */
letter-spacing: 0.14px;
margin-bottom: 16px!important;
display: flex;
}
.demo-web1 {
color: var(--Colors-Base-white, #FFF);
font-family: "SF Pro Display";
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.demo-web1-light {
color: #10192D;
font-family: "SF Pro Display";
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.FAQ-text{
color: #E2E8F0;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-decoration-line: underline; 
cursor: pointer;
}
.FAQ-text-light{
color: #64748B;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-decoration-line: underline; 
cursor: pointer;
}
.footer-icon{
display: flex;
padding: 48px 120px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
background: #10192D;
}
.footer-icon-light{
display: flex;
padding: 48px 120px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
background: #F8FAFC;
}
.icon-text{
color: #8E9BAE;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
display: flex;
width: 186px;
justify-content: center;
align-items: center;
}
.border-line{
border-left: 1px solid #8E9BAE;
gap: 10px;
margin-left: 13px;
margin-right: 28.5px;
}
.social-icons{
  cursor: pointer;
}
.footer-container{
display: flex;
height: 175px;
padding: var(--spacing-3xl, 24px) 10px;
justify-content: center;
align-items: center;
gap: 10px;
border-top: 0.5px solid rgba(142, 155, 174, 0.50);
}
.footer-text2{
color: #8E9BAE;
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 22.4px */
letter-spacing: 0.14px;
color: #8E9BAE;
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 22.4px */
letter-spacing: 0.14px;
}
.footer-wrapper{
flex-direction: column;
align-items: center;
gap: 50px;
flex-shrink: 0;
background: rgba(6, 10, 29, 0.70);
backdrop-filter: blur(25px);
}
.footer-wrapper-light{
flex-direction: column;
align-items: center;
gap: 50px;
flex-shrink: 0;
background: rgba(255, 255, 255, 0.70);
backdrop-filter: blur(25px);
}
</style>