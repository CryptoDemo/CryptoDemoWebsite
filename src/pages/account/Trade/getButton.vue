<template>
  <Header :hide="true" :icon1="true" :icon3="true"  :icon2="true"/>
    <div>
      <v-container>
        <div style="display: flex; align-items: center; margin-bottom: 24px; margin-top: 100px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" @click.prevent="navigateTo('/account/trade/wallet')" style="cursor: pointer;">
        <path d="M15 19.9181L8.47997 13.3981C7.70997 12.6281 7.70997 11.3681 8.47997 10.5981L15 4.07812" stroke="#B9D1FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
       <span style="font-family: Poppins;font-size: 20px;font-style: normal;font-weight: 600;line-height: normal; margin-left: 10px;">Get Coin</span>
       </div>
        <div style="margin-top: 60px; border: none; padding: 30px;" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
          <div style="display: flex; flex-direction: column;">
          <span style="margin-bottom: 34px; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 600;line-height: normal;">Receive Crypto</span>
          <span :class="isDark ? 'text-dark':'text-light'" style="font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;"> Coin:</span>
          </div>
               <div style="margin-top: 8px; margin-bottom: 8px;">
                 <v-menu>
                  <template v-slot:activator="{ props }">
                    <v-btn @click.prevent="getBtn()" class="inputstyling1" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" v-bind="props">
                      <div class="py-3 me-5" style="display: flex; padding-left: 12px; align-items: center; border-radius: 17px; position: absolute; left: 0;">
                          <img :src="icon"  width="30" class="me-3"/>
                          <span :class="isDark ? 'coin-name':'coin-name-light'" style="font-weight: 600; text-transform: capitalize; font-family: Poppins; font-size: 16px;">{{select}}</span> 
                      </div>
                      <div style="position: absolute; right: 15px; box-shadow: none; background: inherit;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z" />
                        </svg>             
                      </div>
                    </v-btn>
                  </template>
  
                  <v-list :class="isDark ? 'country-dropdown':'country-dropdown-light'" style="border-radius: 15px;">
                    <v-list-item>
                      <div v-for="token in tokensForSelectedNetwork" :key="token.id" class="d-flex py-3">
                        <v-list-item-title @click="select=token.name; coin=token.symbol; icon =token.icon; token = token" class="d-flex">
                        <img  :src="token.icon" class="me-3" width="30"/>  
                        <div class="d-flex" style="flex-direction: column;">
                          <span :class="isDark ? 'coin-name':'coin-name-light'" style="display: flex; align-items: center;"> {{ token.name }} </span>
                          <span style="font-family: Poppins; display: flex; align-items: center; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal;">{{ token.symbol }}</span>
                        </div>
                        </v-list-item-title>
                      </div>
                    </v-list-item>
                  </v-list> 
                </v-menu> 
               </div>
           
              <span :class="isDark ? 'coin-name':'coin-name-light'" style="margin-left: 10px; font-family: Poppins;font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Total Balance : 
                <span style="font-family: Poppins; font-size: 16px; font-style: normal;font-weight: 600; line-height: normal;">{{ selectedTokenBalance }}</span>
              </span>
         
               <div style="margin-top: 18px;">  
             
                 <span style=" font-family: Poppins; margin-left: 10px; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">BTC Address</span>
               </div>
               <div class="position-relative">
                <input class="px-4" placeholder="bc1qXY2kGdygjrsqtzE2n0yrf2XY3" v-model="walletAddress" style="border-radius: 25px; margin-top: 8px; outline: none; width:100%; padding-right: 110px !important; margin-bottom: 36px; align-items:  center; height: 65px; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; text-overflow: ellipsis; overflow: hidden; border: 1px solid rgba(142, 155, 174, 0.5); background: inherit; display: flex; justify-content: space-between;">
                  <v-btn @click="copyToClipboard()" style="letter-spacing: 0px; width: 98px; color: white; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 600; height: 46px; width: 90px; text-transform: unset; border-radius: 17px; top: 4.0%; right: 1%; position: absolute; display: flex;box-shadow: none;  background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);">
                    <div v-if="!copied" class="d-flex">
                      <span>Copy</span>
                      <img src="/svg/copy1.svg" style="margin-left: 10px;"/>
                    </div>
  
                    <spanv v-else>Copied</spanv>
                  </v-btn>
              <div style="display: flex; justify-content: center;">
                <qrcode-vue :value="walletAddress" :size="150" level="H" />
              </div>
              </div>
        </div>
      </v-container>
      <div style="margin-top: 500px;">
        <Footer class="desktop-footer flex-lg-and-up hidden-sm-and-down"/>
        <Mobile-footer class="mobile-footer"/>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import {getTokens, getWalletAddress, getTokenBalance} from "@/composables/requests/tokens";
import QrcodeVue from 'qrcode.vue'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore()
const walletAddress = ref('');
const dialog =  ref(false);

const piniastoredicon = ref(null);
const icon = ref(piniastoredicon);

const storedSymbol = ref("");
const select  = ref(storedSymbol);

const network = pinia.state.selectedNetwork.toLowerCase();
const coin =  ref('BTC');

let selectedToken = ref(null);
const selectedTokenBalance = computed(() => {
  const selectedToken = tokensForSelectedNetwork.find(token => token.symbol === coin.value);
  return selectedToken?.balance;
});

const selectedNetworkId = pinia.state.BlockchainNetworks.find(b=>b.name==network)?.id;
const tokensForSelectedNetwork = pinia.state.tokenLists.filter(token => token.token_networks.find(tkn=>tkn.blockchain_id === selectedNetworkId));

const symbols = tokensForSelectedNetwork.map(token => token.symbol);


const getWalletAds = async () => {
    if (pinia.state.isAuthenticated) {
      try {
        const data = await getWalletAddress(pinia.state.selectedNetwork.toLowerCase())
        if (data.success) {
          return{ address: data.data?.address}
          }else {
            console.error("Error:", data.message);
        }
 
      } catch (error) {
        console.log(error)
      }
    }
};

const copied = ref(false);
const copyToClipboard = () => {
  navigator.clipboard.writeText(walletAddress.value).then(() => {
  copied.value = true;
  setTimeout(() => {
      copied.value = false;
    }, 2000); // Change the text back to 'Copy' after 2 seconds
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

const getBtn = () => {
  dialog.value = true;
  toggleChevron();
}

const isChevronToggled = ref(false);
const toggleChevron = () => {
      isChevronToggled.value = !isChevronToggled.value;
};

onMounted(async () => {

  const addressData = await getWalletAds();
  if (addressData) {
    walletAddress.value = addressData.address;
  }

  piniastoredicon.value = tokensForSelectedNetwork[0]?.icon;
  storedSymbol.value = tokensForSelectedNetwork[0]?.name;

});
</script>

<style scoped>
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
font-family: Poppins;
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
font-family: Poppins;
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
.inputstyling1{
stroke-width: 1px;
border-radius: 26px !important;
width: 100% !important;
height: 65px !important;
box-shadow: none!important;
letter-spacing: 0px;
border: 1px solid rgba(142, 155, 174, 0.5) !important;
}
.profile{
background: #10192D !important;
border: 1px solid #1B2537 !important;
}
.profile-light{
background: #F8FAFC!important;
border: 1px solid #DBE8FF !important;
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
/* border: #DBE8FF !important; */
background: inherit;
}
.coin-name{
color: white !important;
}
.coin-name-light{
color: #10192D;
}
.close-btn{
  fill: white;
}
.close-btn-dark{
fill: #10192D;
}
.nav-btn{
background: #1b2537 !important;
}
.nav-btn-light{
background: #eef3fb !important;
}
.chevron-icon {
  transition: transform 0.3s;
}


.wallet-border{
  border: 1px solid  #1B2537;
}
.wallet-border-light{
border: 1px solid #E2E8F0;
}


.chevron-icon-rotated {
  transform: rotate(180deg);
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