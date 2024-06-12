<template>
    <div class=" text-center">
     <v-btn @click.once.stop="navigateTo('/account/trade/sendButton')" class="send-btn" :class="isDark ? 'wallet-border':'wallet-border-light'" >
       <img src="/svg/send-arrow.svg" class="me-1"/>
       <span :class="isDark ? 'coin-name':'coin-name-light'">Send</span>
     </v-btn>
 
   </div>
 </template>
 
 <script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import { calculateTxnFees} from "@/composables/requests/transaction";

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore()
const dialog =  ref(false);
const dialog2 = ref(false);
const dialog3 = ref(false);
const pageNumber = ref(1); 
const transferWallet = ref()
const trfAmmount = ref("")
const loading = ref(false)




 </script>
 
 <style scoped>
 .send-btn{
border-radius: 16px;
display: flex;
max-width: 86.333px !important;
height: 48px !important;
padding: 12px 16px;
box-shadow: none;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;
letter-spacing: 0px;
text-transform: unset;
align-content: center;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 140%;
background: inherit;
 }
 .success-txt{
 color: #8E9BAE;
 font-family: Manrope;
 font-size: 14px;
 font-style: normal;
 font-weight: 400;
 line-height: 140%; /* 19.6px */
 }

 .confirmation-text{
 color: #E2E8F0;
 font-family: Manrope;
 font-size: 14px;
 font-style: normal;
 font-weight: 400;
 line-height: 140%; /* 19.6px */
 }
 
 .ref-code{
 overflow: hidden;
 color: var(--White, var(--Colors-Base-white, #FFF));
 text-overflow: ellipsis;
 font-family: Manrope;
 font-size: 16px;
 font-style: normal;
 font-weight: 600;
 line-height: normal;
 display: -webkit-box;
 width: 171px;
 -webkit-box-orient: vertical;
 -webkit-line-clamp: 1;
 }
 .snd-crypto{
 font-family: Manrope;
 font-size: 16px;
 font-style: normal;
 font-weight: 600;
 line-height: normal;
 margin-left: 10px;
 }
 .send-txt{
 font-family: Manrope;
 font-size: 14px;
 font-style: normal;
 font-weight: 700;
 line-height: 140%; /* 19.6px */
 }
 
.active-offers-dark{
  background: var(--secondary-background, #1B2537);
}
.active-offers-light{
  background: var(--secondary-background, #F8FAFC);
}
.v-btn--size-default {
--v-btn-size: 0.875rem;
--v-btn-height: 36px;
font-size: var(--v-btn-size);
min-width: 45px !important;
padding: 0 16px;
}
.country-dropdown{
border-radius: 15px;
border: 0.5px solid #2f3946;
background: #1B2537 !important;
backdrop-filter: blur(50px) !important;
height: 320px !important;
border-radius: 20px !important;
border-radius: 15px;
border: 0.5px solid #354356;
color: white;
margin-top: 15px;
box-shadow: none  !important;
height: 320px !important;
}
.country-dropdown-light{
border-radius: 15px;
background: #fff !important;
border: 1px solid #DBE8FF !important;
border-radius: 20px !important;
color: black;
margin-top: 15px;
box-shadow: none  !important;
height: 320px !important;
}

.profile-cards-dark{
border: 1px solid rgba(142, 155, 174, 0.5);
background: inherit;
}
.profile-cards-light{
background: inherit;
}
.close-btn{
  fill: white;
}
.close-btn-dark{
fill: black;
}
.nav-btn{
background: #1b2537 !important;
box-shadow: none;
}
.nav-btn-light{
background: #eef3fb !important;
box-shadow: none;
}

.chevron-icon {
  transition: transform 0.3s;
}

.chevron-icon-rotated {
  transform: rotate(180deg);
}
.coin-name{
color: white !important;
}
.coin-name-light{
color: #10192D;
}

.wallet-border{
  border: 1px solid  #1B2537;
}
.wallet-border-light{
border: 1px solid #E2E8F0;
}

::-webkit-scrollbar{
  display: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

@media only screen and (max-width: 600px) {
.dialog-card{
  padding: 10px !important;
  width: 100% !important;
  height: auto !important;
}
}
 </style>