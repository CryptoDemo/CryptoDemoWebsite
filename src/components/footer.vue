<template>
<section class="footer-wrapper" :class="isDark ? 'footer-wrapper': 'footer-wrapper-light'">
    <v-container>
        <div class="d-flex mt-5" style="justify-content: space-between;">
          <span  :class="isDark ?  'demo-web1':'demo-web1-light'" >Demo</span>
          <!-- <Language-dropdown/> -->
        <div style="height: 60px;">

          <div id="google_translate_element"></div>
        </div>
        </div>
      <div class="footer-bg" :class="isDark ? 'footer-bg-dark':'footer-bg-light'">
        <v-row  no-gutters style="justify-content: space-between;" sm="4" >
          <div v-for="(links, i) in footer" :key="i" variant="plain"
            class="mx-2" :class="isDark ? 'footer-text':'footer-text-light'"
            rounded="xl">
            {{ links.title }}
            <v-col class="py-2" style="padding: 0px; margin-top: 11px; display: grid;">
              <div v-for="(item, i) in links.items" :key="i">
                 <NuxtLink :to="item.link"><span class="footer-links">{{item.subtitle }}</span></NuxtLink>
              </div>
            </v-col>
          </div>
        </v-row>    
      </div>
        <div class="d-flex" style="justify-content: space-between; margin-top: 64px; display: flex">
          <div style="display: flex; align-items: center">
            <ToggleBtn  class="me-3" />
            <span :class="isDark ? 'Switch-text':'Switch-text-light'">{{ isDark? 'Switch to light theme' : 'Switch to dark theme' }}</span>
          </div>
          <div class="d-flex" style="margin-top: 16px">
            <v-icon icon="mdi-information me-2" color="#165CDD"></v-icon>
            <span  :class="isDark ? 'FAQ-text':'FAQ-text-light'">FAQ’s and Help Centre</span>
          </div>
        </div>
    </v-container>
      <div class="footer-icon"  :class="isDark ? 'footer-icon-dark':'footer-icon-light'" style="margin-top: 50px">
        <v-container>
          <v-row class="d-flex">
            <v-col>
                <div class="d-flex">
                  <v-btn class="image-button social-icons me-4" variant="text" :style="{ backgroundImage: `url(${imageSrc2})`}"></v-btn>
                  <v-btn class="image-button social-icons me-4"  variant="text" :style="{ backgroundImage: `url(${imageSrc3})`}"></v-btn>
                 
                  <div style="border-left: 1px solid #8E9BAE; height: 1%; padding-left: 13px; width: 200px;">
                    <span class="icon-text" style="color: #8E9BAE;font-family: SF Pro Display; font-weight: 500; font-size: 16px;">Demo App now  available for download</span>
                  </div>
                </div>
                  </v-col>
                  <v-col>
                <div style="display: flex; gap: var(--spacing-3xl, 24px); justify-content: end;">
                  <img src="/svg/Social icon.svg"  class="social-icons me-2"/>
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
              “DEMO” is a registered trademark of Demo Inc. Copyright © 2024 Demo Web, Inc. All Rights Reserved. Paxful Inc. has no relation to MoneyGram, Western Union, Payoneer, WorldRemit, Paxum, PayPal, Amazon, OkPay, Payza, Walmart, Reloadit, Perfect Money, WebMoney, Google Wallet, BlueBird, Serve, Square Cash, NetSpend, Chase QuickPay, Skrill, Vanilla, MyVanilla, OneVanilla, Neteller, Venmo, Apple, ChimpChange or any other payment method. We make no claims about being supported by or supporting these services. Their respective wordmarks and trademarks belong to them alone. Official mailing address: 4023 Kennett Pike #50541, Wilmington, DE 19807
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


// const toggleTheme = () =>{
//   theme.global.name.value = theme.global.current.value.dark ? 'LightThemeConfig' : 'DarkThemeConfig'
// }

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
const imageSrc2=('/svg/BTN-one.svg')  // Replace with your image path
const imageSrc3=('/svg/BTN-two.svg')

</script>

<style scoped>

.footer-bg{
align-items: center;
flex-shrink: 0;  
backdrop-filter: blur(25px); 
margin-top: 64px;
}
.footer-bg-dark{ 
background: rgba(6, 10, 29, 0.70);
backdrop-filter: blur(25px); 
}
.footer-bg-light{ 
background: rgba(255, 255, 255, 0.70);
backdrop-filter: blur(25px); 
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
.social-icons{
  cursor: pointer;
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
.switch-text{
color: #E2E8F0;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;
}
.switch-text-light{
color: #64748B;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;
}
.footer-icon{
display: flex;
padding-top: 48px;
padding-bottom: 48px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
}
.footer-icon-dark{
background: #10192D;
}
.footer-icon-light{
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

.footer-container{
display: flex;
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

.image-button {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 116px;
  object-fit: cover;
}

</style>