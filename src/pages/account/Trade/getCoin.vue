<template>
  <div>

    <Header :hide="true" :icon1="true" :icon3="true"  :icon2="true" :wallet="true"/>
      <div>
        <v-container>
          <div class="arrow-btn"  style="display: flex; align-items: center; margin-bottom: 24px; margin-top: 100px; margin-left: 24px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" @click.prevent="navigateTo('/account/trade/wallet')" style="cursor: pointer;">
            <path d="M15 19.9181L8.47997 13.3981C7.70997 12.6281 7.70997 11.3681 8.47997 10.5981L15 4.07812" stroke="#B9D1FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="snd-text" style="font-family: Manrope;font-size: 20px;font-style: normal;font-weight: 600;line-height: normal; margin-left: 10px;">Get Coin</span>
         </div>
          <div class="get-coin" style="margin-top: 60px; border: none; padding: 30px; width: 96%; margin: auto" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
            <div style="display: flex; flex-direction: column;">
            <span style="margin-bottom: 34px; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 600;line-height: normal;">Receive Crypto</span>
            <span :class="isDark ? 'text-dark':'text-light'" style="font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;"> Coin:</span>
            </div>
                 <div style="margin-top: 8px; margin-bottom: 8px;">
                   <v-menu>
                    <template v-slot:activator="{ props }">
                      <v-btn @click.prevent="getBtn()" class="inputstyling1" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" v-bind="props">
                        <div class="py-3 me-5" style="display: flex; padding-left: 12px; align-items: center; border-radius: 17px; position: absolute; left: 0;">
                            <img :src="pinia.state.coin_to_transfer"  width="30" class="me-3"/>
                            <span :class="isDark ? 'coin-name':'coin-name-light'" style="font-weight: 600; text-transform: capitalize; font-family: Manrope; font-size: 16px;">{{pinia.state.token_to_transfer}}</span> 
                        </div>
                        <div style="position: absolute; right: 15px; box-shadow: none; background: inherit;">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z" />
                          </svg>             
                        </div>
                      </v-btn>
                    </template>
    
                    <v-list :class="isDark ? 'country-dropdown':'country-dropdown-light'" style="border-radius: 15px;">
                      <v-list-item style="display: contents">
                    
                        <div v-for="token in tokensForSelectedNetwork" :key="token.id">
                          <v-list-item @click="pinia.state.token_to_transfer=token.name; coin=token.symbol; pinia.state.coin_to_transfer=token.icon; token = token"  style="display: flex;">
                            <div class="d-flex py-2">
                              <img  :src="token.icon" class="me-3" width="30"/>  
                              <div class="d-flex" style="flex-direction: column;">
                                <span :class="isDark ? 'coin-name':'coin-name-light'" style="display: flex; align-items: center;"> {{ token.name }} </span>
                                <span style="font-family: Manrope; display: flex; align-items: center; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal;">{{ token.symbol }}</span>
                              </div>
                            </div>
                          </v-list-item>
                        </div>
                        
                      </v-list-item>
              </v-list>
  
                   </v-menu> 
                 </div>
             
                <span :class="isDark ? 'coin-name':'coin-name-light'" style="margin-left: 10px; font-family: Manrope;font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Total Balance : 
                  <span style="font-family: Manrope; font-size: 16px; font-style: normal;font-weight: 600; line-height: normal;">{{ formatBalance(selectedTokenBalance) }}</span>
                </span>
           
                 <div style="margin-top: 18px;">  
               
                   <span class="hint-text" style="font-family: Manrope; margin-left: 10px; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">BTC Address</span>
                 </div>
                 <div class="position-relative">
                  <input class="px-4 mobile-css" disabled placeholder="bc1qXY2kGdygjrsqtzE2n0yrf2XY3" v-model="walletAddress" :class="isDark ? 'coin-dropdown':'coin-dropdown-light'" style="border-radius: 15px; margin-top: 8px; outline: none; width: 100%; padding-right: 110px !important; margin-bottom: 36px; align-items:  center; height: 60px; display: -webkit-box; -webkit-box-orient: vertical; line-clamp: 1; text-overflow: ellipsis; overflow: hidden; background: inherit; display: flex; justify-content: space-between;">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" @click="copyToClipboard()" width="30" height="30" viewBox="0 0 24 24" fill="none" style="top: 6%; right: 2%; position: absolute; display: flex; cursor: pointer;">
                    <defs>
                      <!-- Define a linear gradient with an id -->
                      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color: #4A90E2; stop-opacity:1" />
                        <stop offset="100%" style="stop-color: #007AFF; stop-opacity:1" />
                      </linearGradient>
                    </defs>
                    <!-- Apply the gradient as the fill of the path -->
                    <path d="M6.8775 4.5H5.625C5.32663 4.5 5.04048 4.61853 4.8295 4.8295C4.61853 5.04048 4.5 5.32663 4.5 5.625V19.875C4.5 20.1734 4.61853 20.4595 4.8295 20.6705C5.04048 20.8815 5.32663 21 5.625 21H9C9.19891 21 9.38968 21.079 9.53033 21.2197C9.67098 21.3603 9.75 21.5511 9.75 21.75C9.75 21.9489 9.67098 22.1397 9.53033 22.2803C9.38968 22.421 9.19891 22.5 9 22.5H5.625C4.92881 22.5 4.26113 22.2234 3.76884 21.7312C3.27656 21.2389 3 20.5712 3 19.875V5.625C3 4.92881 3.27656 4.26113 3.76884 3.76885C4.26113 3.27656 4.92881 3 5.625 3H6.8775C7.03266 2.56113 7.32012 2.18119 7.70026 1.91254C8.0804 1.64389 8.53451 1.49976 9 1.5H13.5C14.4795 1.5 15.3135 2.12625 15.6225 3H16.875C17.5712 3 18.2389 3.27656 18.7312 3.76885C19.2234 4.26113 19.5 4.92881 19.5 5.625C19.5 5.82391 19.421 6.01468 19.2803 6.15533C19.1397 6.29598 18.9489 6.375 18.75 6.375C18.5511 6.375 18.3603 6.29598 18.2197 6.15533C18.079 6.01468 18 5.82391 18 5.625C18 5.32663 17.8815 5.04048 17.6705 4.8295C17.4595 4.61853 17.1734 4.5 16.875 4.5H15.6225C15.4673 4.93887 15.1799 5.31881 14.7997 5.58746C14.4196 5.85611 13.9655 6.00024 13.5 6H9C8.53451 6.00024 8.0804 5.85611 7.70026 5.58746C7.32012 5.31881 7.03266 4.93887 6.8775 4.5ZM8.25 3.75C8.25 3.94891 8.32902 4.13968 8.46967 4.28033C8.61032 4.42098 8.80109 4.5 9 4.5H13.5C13.6989 4.5 13.8897 4.42098 14.0303 4.28033C14.171 4.13968 14.25 3.94891 14.25 3.75C14.25 3.55109 14.171 3.36032 14.0303 3.21967C13.8897 3.07902 13.6989 3 13.5 3H9C8.80109 3 8.61032 3.07902 8.46967 3.21967C8.32902 3.36032 8.25 3.55109 8.25 3.75ZM10.5 10.125C10.5 9.42881 10.7766 8.76113 11.2688 8.26884C11.7611 7.77656 12.4288 7.5 13.125 7.5H19.125C19.8212 7.5 20.4889 7.77656 20.9812 8.26884C21.4734 8.76113 21.75 9.42881 21.75 10.125V19.875C21.75 20.5712 21.4734 21.2389 20.9812 21.7312C20.4889 22.2234 19.8212 22.5 19.125 22.5H13.125C12.4288 22.5 11.7611 22.2234 11.2688 21.7312C10.7766 21.2389 10.5 20.5712 10.5 19.875V10.125Z" fill="url(#blueGradient)"/>
                  </svg>
                  
           
                <div :class="isDark ? 'txn-cards-dark':'txn-cards-light'" class="bg-width" style="display: flex; justify-content: center; border: none; width:20%; margin: auto;">
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import {getWalletAddress, getTokenBalance} from "@/composables/requests/tokens";
import QrcodeVue from 'qrcode.vue'

definePageMeta({
  middleware: 'scroll-to-top'
});

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore()
const walletAddress = ref('');
const dialog =  ref(false);
const mytoken = ref();



const network = pinia.state.selectedNetwork.toLowerCase();
const coin =  ref();

const Newtoken = ref();
Newtoken.value = pinia.state.tokenLists.find(c => c.symbol ===  pinia.state.getNewCoinInfo);

if (Newtoken.value) {
pinia.state.coin_to_transfer = Newtoken.value.icon;
pinia.state.token_to_transfer = Newtoken.value.name;
coin.value = Newtoken.value.symbol;
} else {
  console.error("Token not found");
}

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

mytoken.value = pinia.state.tokenLists.find(c => c.symbol ===  pinia.state.getNewCoinInfo )

onMounted(async () => {

  const addressData = await getWalletAds();
  if (addressData) {
    walletAddress.value = addressData.address;
  }
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
.profile-cards-dark {
  border: 1px solid #1B2537 !important;
}

.profile-cards-light {
  border: 1px solid #E2E8F0 !important;
}
.coin-dropdown{
border: 1px solid #1B2537;
}
.coin-dropdown-light{
border: 1px solid #E2E8F0;
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
.inputstyling1{
stroke-width: 1px;
border-radius: 15px !important;
width: 100% !important;
height: 60px !important;
box-shadow: none!important;
letter-spacing: 0px;
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

.txn-cards-dark {
  background: #162138;
  padding: 30px;
  border-radius: 15px;
}
.txn-cards-light {
  background: #edf3ff;
  padding: 30px;
  border-radius: 15px;
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
  .get-coin{
    width: 100% !important;
    padding: 20px !important;
  }
  .arrow-btn{
    margin-left: 0px !important;
  }
  .snd-text{
    font-size: 16px !important;
  }
  .inputstyling1 {
    border-radius: 19px !important;
    width: 100% !important;
    height: 60px !important;
  }
  .hint-text{
    font-size: 14px !important;
    display: flow;
  }
  .mobile-css{
    height: 60px !important;
    border-radius: 19px !important;
  }
  .paste-btn{
    width: 90px !important;
    height: 50px !important;
    top: 2% !important;
    border-radius: 14px !important;
  }
  .bg-width{
    width: 100% !important;
  }

  }
</style>