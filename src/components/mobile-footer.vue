<template>
  <div>
    
    <div class="footer-links"  :class="isDark ? 'footer-bg2':'footer-bg2-light'">
      <v-container>
       <div class="d-flex mt-5" style="justify-content: space-between;padding: 10px !important; align-items: center;">
          <span :class="isDark ? 'demo-web1':'demo-web1-light'">Demo</span>
          <LanguageDropdown style="width: 136px;"/>
        </div>
      </v-container>

        <v-card class="mx-auto footer-body" width="100%" :class="isDark ? 'footer-body':'footer-body-light'">
          <v-container :class="isDark ? 'footer-body':'footer-body-light'">
            <v-list :class="isDark ? 'footer-list':'footer-list-light'">

              <v-list-group v-for="(links, i) in footer" :key="i" :class="isDark ? 'border-dark':'border-light'">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" class="py-6">
                  <span class="pb-3" :class="isDark ? 'mobile-title':'mobile-title-light'">{{ links.title }}</span>
                  </v-list-item>
                </template>

                <v-list-group class="pb-5">
                  <template v-slot:activator="{props}">   
                    <div>
                      <v-list-item v-bind="props" :append-icon="null" v-for="(item,i) in links.items" :key="i">
                        <NuxtLink :to="item.link"><span class="mobile-footer">{{ item.subtitle }}</span></NuxtLink>
                      </v-list-item>
                  </div>
                </template> 
              </v-list-group>
            </v-list-group>
              

            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 72px;">
              <div style="display: flex; justify-content: flex-start; flex-direction: column; align-items: center; margin-left: 10px;">
                <ToggleBtn class="me-3" style="margin-bottom: 13px"/>
                <span :class="isDark ? 'Switch-text':'Switch-text-light'">{{ isDark? 'Switch to light theme' : 'Switch to dark theme' }}</span>
              </div>

              <div style="display: flex; align-items: center; flex-direction: column; cursor: pointer;">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#2873FF" class="bi bi-wechat" viewBox="0 0 16 16" id="my_custom_link" @click.prevent="activate_chat();">
                  <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356"/>
                  <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0"/>
                </svg>
              <span  :class="isDark ? 'Switch-text':'Switch-text-light'">FAQ’s and Help Centre</span>
            </div>
          </div>

            </v-list>
          </v-container>
          </v-card>
      <div class="footer-icon"  :class="isDark ? 'footer-icon':'footer-icon-light'" style="margin-top: 50px">
            <v-container>
              <v-row class="d-flex px-3">
                <div>
                    <div class="d-flex">
                      <v-btn class="image-button1 me-3 mobile-social-icons" :style="{ backgroundImage: `url(${imageSrc2})`}"></v-btn>
                      <v-btn class="image-button1 me-3 mobile-social-icons" :style="{ backgroundImage: `url(${imageSrc3})`}"></v-btn>
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
              “DEMO” is a registered trademark of Demo, Inc. Copyright © 2024 Demo Web, Inc. All Rights Reserved. Paxful Inc. has no relation to MoneyGram, Western Union, Payoneer, WorldRemit, Paxum, PayPal, Amazon, OkPay, Payza, Walmart, Reloadit, Perfect Money, WebMoney, Google Wallet, BlueBird, Serve, Square Cash, NetSpend, Chase QuickPay, Skrill, Vanilla, MyVanilla, OneVanilla, Neteller, Venmo, Apple, ChimpChange or any other payment method. We make no claims about being supported by or supporting these services. Their respective wordmarks and trademarks belong to them alone. Official mailing address: 4023 Kennett Pike #50541, Wilmington, DE 19807
            </span>
        </v-container>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import intercom from '@intercom/messenger-js-sdk';

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();

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

const activate_chat = ()=>{
  const activate = intercom({
      app_id:'lwqnsoko',
      user_id:pinia.state.user.id,
      email:pinia.state.user.email,
      name:pinia.state.user.name,
      created_at:pinia.state.user.created_at,
      hide_default_launcher: true,
      custom_launcher_selector:'#my_custom_link'
  })
  return activate
}

const imageSrc2=('/svg/BTN-one.svg')  // Replace with your image path
const imageSrc3=('/svg/BTN-two.svg')
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


.footer-body{
background: rgba(6, 10, 29, 0.70) !important; 
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
border-radius: 0px !important;
}
.footer-list-light{
background: #fff !important;
backdrop-filter: blur(25px) !important;
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
.footer-bg2{
backdrop-filter: blur(25px) !important; 
}
.footer-bg2-light{
backdrop-filter: blur(25px) !important; 
}
.border-dark{
  border-bottom: 1px solid #10192D;
}
.border-light{
  border-bottom: 1px solid #E2E8F0 !important;
}
.Switch-text{
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
}

.image-button1{
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 102px;
  position: relative;
  z-index: 100;
}

.footer-links :deep(.v-list-item__content) {
  align-self: center;
  grid-area: content;
  overflow: visible !important;
}
</style>