<template>
  <div>
    <div  :class="isDark ? 'footer-bg1':'footer-bg1-light'">
      <v-container>
       <div class="d-flex mt-5" style="justify-content: space-between;padding: 10px !important; align-items: center;">
          <span :class="isDark ? 'demo-web1':'demo-web1-light'">Demo Web</span>
          <Language-dropdown style="width: 136px;"/>
        </div>
      </v-container>

        <v-card class="mx-auto footer-body" width="100%" :class="isDark ? 'footer-body':'footer-body-light'">
          <v-container :class="isDark ? 'footer-body':'footer-body-light'">
            <v-list  v-model:opened="open" :class="isDark ? 'footer-list':'footer-list-light'">

              <v-list-group v-for="(links, i) in footer" :key="i" :class="isDark ? 'border-dark':'border-light'">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" class="py-6">
                  <span :class="isDark ? 'mobile-title':'mobile-title-light'">{{ links.title }}</span>
                  </v-list-item>
                </template>

                <v-list-group>
                  <template v-slot:activator="{props}">   
                    <div>
                      <v-list-item  v-bind="props" :append-icon="null" v-for="(item,i) in links.items" :key="i">
                        <NuxtLink :to="item.link"><span class="mobile-footer">{{ item.subtitle }}</span></NuxtLink>
                      </v-list-item>
                  </div>
                </template> 
              </v-list-group>
            </v-list-group>
              <div class="d-flex py-4" style="margin-top: 16px;"  :class="isDark ? 'border-dark':'border-light'">
                <v-icon icon="mdi-information me-2" color="#165CDD"></v-icon>
                <span class="faq-text">FAQ’s and Help Centre</span>
              </div>

              <div style="display: flex; justify-content: flex-start; flex-direction: column; margin-top: 72px; align-items: center; margin-left: 10px;">
              <ToggleBtn class="me-3" style="margin-bottom: 13px"/>
              <span :class="isDark ? 'Switch-text':'Switch-text-light'">Switch to <span class=".switch-hint" style="margin-top: 13px;">light</span> Mode</span>
            </div>

            </v-list>
          </v-container>
          </v-card>
      <div class="footer-icon"  :class="isDark ? 'footer-icon':'footer-icon-light'" style="margin-top: 50px">
            <v-container>
              <v-row class="d-flex">
                <div>
                    <div class="d-flex">
                      <img src="/svg/BTN 1.svg" class="social-icons me-4"/>
                      <img src="/svg/BTN 2.svg" class="social-icons me-2"/>
                      <div class="border-line flex-lg-and-up hidden-sm-and-down"></div>
                      <span class="icon-text" style="color: #64748B; font-family: SF Pro Display; font-size: 16px;">Demo Web App now available for download</span>
                    </div>
                  </div>
                      <v-col>
                    <div style="display: flex; gap: var(--spacing-2xl, 12px); justify-content: center; margin: auto; width: min-content; margin-top: 58px;">
                      <img src="/svg/Social icon.svg"  class="social-icons me-1" />
                      <img src="/svg/Social icon (1).svg" class="social-icons me-1"/>
                      <img src="/svg/Social icon (2).svg" class="social-icons me-1" />
                      <img src="/svg/Social icon (3).svg" class="social-icons me-1"/>
                      <img src="/svg/Social icon (4).svg" class="social-icons me-1"/>
                      <img src="/svg/Social icon (5).svg" class="social-icons me-1" />
                    </div>
                </v-col>
              </v-row>
            </v-container>
        </div>
        <div class="footer-container">
        <v-container>
            <span class="footer-text2">
              “DEMO WEB” is a registered trademark of Demo, Inc. Copyright © 2024 Demo Web, Inc. All Rights Reserved. Paxful Inc. has no relation to MoneyGram, Western Union, Payoneer, WorldRemit, Paxum, PayPal, Amazon, OkPay, Payza, Walmart, Reloadit, Perfect Money, WebMoney, Google Wallet, BlueBird, Serve, Square Cash, NetSpend, Chase QuickPay, Skrill, Vanilla, MyVanilla, OneVanilla, Neteller, Venmo, Apple, ChimpChange or any other payment method. We make no claims about being supported by or supporting these services. Their respective wordmarks and trademarks belong to them alone. Official mailing address: 4023 Kennett Pike #50541, Wilmington, DE 19807
            </span>
        </v-container>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';




const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);


const open = ref(['Users']);
const footer = ref ([
        {
          title: 'Legal', 
          items: [
            {subtitle:'Vendor Reminder', link:'#'},
            {subtitle:"Terms & Conditions", link:'#'},
            {subtitle: 'AML Policy', link:'#'},
            {subtitle: 'Stablecoin Terms Of Service', link:'#'},
            {subtitle: 'Privacy Notice', link:'#'},
            {subtitle: 'Cookie Policy', link:'#'},
            {subtitle: 'Restricted Countries', link:'#'},
            {subtitle: 'Bug Bounty Policy', link:'#'},
          ]

        },

        {
          title: 'For You', 
          items: [
            {subtitle:'Buy Bitcoin'},
            {subtitle:'Buy Tether'},
            {subtitle:'Sell Bitcoin'},
            {subtitle:'Buy Bitcoin'},
            {subtitle:'Demo web Wallet'},
            {subtitle:'Become Vendor'},
          ]
        },
        {
          title: 'For Your Business', 
          items: [
            {subtitle:'Demo Web Pay'},
            {subtitle:'Virtual Bitcoin Kiosk'},
            {subtitle:'API Documentation'},
          ]
      
        },

        {
          title: 'Growth', 
          items: [
            {subtitle:'Demo Web Rewards Program'},
            {subtitle:'Demo Web Trader Program'},
            {subtitle:'Demo Web Peer Program'},
            {subtitle:'Community'},
          ]
        },

        {
          title: 'Buy Anywhere', 
          items: [
            {subtitle:'Buy Bitcoin in USA'},
            {subtitle:'Buy Bitcoin in Nigeria'},
            {subtitle:'Buy Bitcoin in India'},
          ]
        },

        {
          title: 'Useful Links', 
          items: [
            {subtitle:'Demo Web Status'},
            {subtitle:'Bitcoin Calculator'},
            {subtitle:'Peer-to-Peer Market Prices'},
          ]
        },
        {
          title: 'About Demo Web', 
          items: [
            {subtitle:'About Us'},
            {subtitle:'Business Contacts'},
            {subtitle:'Careers'},
            {subtitle:'Demo Web Blog'},
            {subtitle:'Demo Web Reviews'},
          ]
        },
      ])

</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');
.mobile-footer{
color: #8E9BAE;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 16px */
letter-spacing: 0.16px;
}

.mobile-title{
color: var(--Colors-Base-white, #FFF);
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 16px */
letter-spacing: 0.16px;
}
.mobile-title-light{
color: #10192D;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 16px */
letter-spacing: 0.16px;
}
.demo-web1{
color: #fff;
font-family: "SF Pro Display";
font-size: 24px;
font-style: normal;
font-weight: 700 !important;
line-height: normal;
}

.demo-web1-light{
color: #10192D;
font-family: "SF Pro Display";
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.FAQ-text{
color: #8E9BAE;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-decoration-line: underline; 
cursor: pointer;
}

.footer-body{
background: rgba(6, 10, 29, 0.70) !important; 
/* backdrop-filter: blur(25px); */
box-shadow: none;
}
.footer-body-light{
background: white !important; 
backdrop-filter: blur(25px);
box-shadow: none;
}
.footer-list{
background: rgba(6, 10, 29, 0.70) !important; 
backdrop-filter: blur(25px) !important;
}
.footer-list-light{
background: #fff !important;
backdrop-filter: blur(25px) !important;
/* color: #10192D !important; */
}
.faq-text{
color: #64748B;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-decoration-line: underline;
}
.footer-icon{
display: flex;
padding-top: 40px;
padding-bottom: 40px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
background: #10192D !important;
}
.footer-icon-light{
display: flex;
padding-top: 40px;
padding-bottom: 40px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
background: #F8FAFC !important;
}

.footer-text2{
color: #8E9BAE;
font-family: "SF Pro Display";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 200%; /* 24px */
letter-spacing: 0.12px;
}
.footer-bg1{
background: rgba(6, 10, 29, 0.70) !important; 
/* backdrop-filter: blur(25px) !important;  */
}
.footer-bg1-light{
background: #fff !important; 
backdrop-filter: blur(25px) !important; 
}
.border-dark{
  border-bottom: 1px solid #10192D;
}
.border-light{
  border-bottom: 1px solid #E2E8F0 !important;
}
/* .Switch-text{
color: #E2E8F0;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.Switch-text-light{
color: #64748B;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
} */
</style>