<template>
    <div class=" text-center">
     <v-btn @click="dialog = true" :class="isDark ? 'active-offers-dark':'active-offers-light'" class="send-btn">
       <img src="/svg/send-arrow.svg"/>
       <span :class="isDark ? 'coin-name':'coin-name-light'">Send</span>
     </v-btn>
 
     <v-dialog v-model="dialog" max-width="479">
       <v-card :class="isDark ? 'profile':'profile-light'" style="border-radius: 24px; padding: 29px ; box-shadow: none; width: 479px; height: 580px;">
         <template v-slot:text>
             <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px">
               <span class="snd-crypto" :class="isDark ? 'coin-name':'coin-name-light'">Send Crypto</span>
               <v-btn  :class="isDark ? 'nav-btn':'nav-btn-light'" @click="dialog = false" style="max-width: 45px !important; height: 45px; border-radius: 14px;">
                 <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" :class="isDark ? 'close-btn':'close-btn-light'">
                   <path d="M17.5 16.0868L21.0355 12.5513C21.4261 12.1608 22.0592 12.1608 22.4497 12.5513C22.8403 12.9418 22.8403 13.575 22.4497 13.9655L18.9142 17.5011L22.4497 21.0366C22.8403 21.4271 22.8403 22.0603 22.4497 22.4508C22.0592 22.8413 21.4261 22.8413 21.0355 22.4508L17.5 18.9153L13.9645 22.4508C13.5739 22.8413 12.9408 22.8413 12.5503 22.4508C12.1597 22.0603 12.1597 21.4271 12.5503 21.0366L16.0858 17.5011L12.5503 13.9655C12.1597 13.575 12.1597 12.9418 12.5503 12.5513C12.9408 12.1608 13.5739 12.1608 13.9645 12.5513L17.5 16.0868Z"/>
                 </svg>
               </v-btn>
             </div>
 
             <span style="margin-left: 10px; font-family: Poppins; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal;"> Coin:</span>
               <div style="margin-top: 8px; margin-bottom: 8px;">
                 <v-menu>
                  <template v-slot:activator="{ props }">
                    <v-btn class="inputstyling1" :class="isDark ? 'profile-cards-dark':'profile-cards-light'"  v-bind="props">
                      <div class="me-5" style="display: flex; padding-left: 12px; align-items: center; border-radius: 17px; position: absolute; left: 0;">
                        <img :src="icon"  width="30" class="me-3"/>
                        <span class="isDark ? 'coin-name':'coin-name-light'" style="font-weight: 600; text-transform: capitalize; font-family: Poppins; font-size: 16px;">{{select}}</span> 
                      </div>
                        <div style="position: absolute; right: 15px; box-shadow: none; background: inherit;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="isDark ? 'close-btn':'close-btn-light'">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z"/>
                        </svg>
                      </div>
                    </v-btn>
                  </template>
 
                  <v-list :class="isDark ? 'country-dropdown':'country-dropdown-light'" style="border-radius: 15px;">
                    <v-list-item>
                      <div v-for="token in tokensForSelectedNetwork" :key="token.id" class="d-flex py-3">
                        <v-list-item-title @click="select=token.name; coin=token.symbol; icon =token.icon" class="d-flex">
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
               <span class="isDark ? 'coin-name':'coin-name-light'" style="margin-left: 10px; font-family: Poppins;font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Total Balance : <span style="font-family: Poppins; font-size: 16px; font-style: normal;font-weight: 600; line-height: normal;">{{ selectedTokenBalance }}</span></span>
         
               <div style="margin-top: 18px;">  
                 <span style=" font-family: Poppins; margin-left: 10px; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal;">BTC Address</span>
               </div>
               <div class="position-relative">
                <input class="px-4" placeholder="bc1qXY2kGdygjrsqtzE2n0yrf2XY3" id="hiddenInput" v-model="transferWallet" style="border-radius: 25px; margin-top: 8px; outline: none; width:100%; padding-right: 110px !important; display: -webkit-box !important; -webkit-box-orient: vertical !important; -webkit-line-clamp: 1 !important; text-overflow: ellipsis !important; overflow: hidden !important; margin-bottom: 36px; align-items: center; height: 60px; border: 1px solid rgba(142, 155, 174, 0.5); background: inherit; display: flex; justify-content: space-between; ">
                <v-btn @click="focusInput()" style="letter-spacing: 0px; width: 98px; font-family: Poppins; font-size: 16px; color: white; font-style: normal; font-weight: 600; height: 46px; width: 90px; text-transform: unset; border-radius: 17px; top: 14%;right: 2%; position: absolute; display: flex;box-shadow: none; background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);">Paste</v-btn>
              </div>
               <input type="number" v-model="trfAmmount" placeholder="Amount to send" style="height: 60px; outline: none; border-radius: 25px; width: 100%; border: 1px solid rgba(142, 155, 174, 0.5); padding: 10px;"/>
               <v-btn :loading="loading" text="Continue" @click="calculateFee()" style="letter-spacing: 0px; margin-top: 35px; box-shadow: none; color: white; width: 100%; height: 55px; text-transform: capitalize; border-radius: 17px;background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);"></v-btn>
               <!-- <v-btn :loading="loading" text="Continue" @click="dialog2 = true" style="letter-spacing: 0px; margin-top: 35px; box-shadow: none; color: white; width: 100%; height: 55px; text-transform: capitalize; border-radius: 17px;background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);"></v-btn> -->
             </template>
       </v-card>
     </v-dialog>
      
     
     <v-dialog v-model="dialog2" width="340">
       <v-card style="border-radius: 12px; border: 1px solid rgba(142, 155, 174, 0.5); background: #161D26;">
         <template v-slot:text>
           <span style="color: #F8FAFC; justify-content: center; display: flex; font-family: Manrope; font-size: 18px; font-style: normal; font-weight: 700; line-height: 140%;">Confirm action</span>
             <div style="margin-top: 16px;">
               <span class="confirmation-text">By clicking the confirm button you will be sending <span style="font-weight: 600;">200USDT</span>  to <span style="font-weight: 600; line-height: 150%; font-family: manrope;">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</span></span>
             </div>
 
             <div class="d-flex" style="margin-top: 28px; margin-bottom: 30px; justify-content: end;">
               <v-btn text="Cancel" variant="text" color="#64748B" @click="dialog2 = false" style="font-family: Manrope;font-size: 16px; letter-spacing: 0px; text-transform: capitalize; font-style: normal; font-weight: 700; line-height: 160%;"></v-btn>
               <v-btn variant="text" text="Confirm" @click="dialog3 = !dialog3" color="#2873FF" style="font-family: Manrope; letter-spacing: 0px;  text-transform: capitalize; font-size: 16px; font-style: normal; font-weight: 700; line-height: 160%; "></v-btn>
             </div>
         </template>

       </v-card>
     </v-dialog>
 
     <v-dialog v-model="dialog3" width="312">
       <v-card style="border-radius: 12px; border: 1px solid #303A46;background: #161D26; padding: var(--spacing-3xl, 24px) 20px 32px 20px;">
         <span style="color: #F8FAFC; font-family: Manrope; font-size: 24px; display: flex; justify-content: center; font-style: normal; font-weight: 800; line-height: 120%; ">Successful</span>
         <div style=" margin-top: 16px; ">
           <span class="success-txt">You have successfully sent <span style="font-weight: 600; color: white; line-height: 150%;">  2,000USD </span> worth of <span style="font-weight: 600; color: white; line-height: 150%;">  Bitcoin </span> to  <span style="font-weight: 600; color: white; line-height: 150%;"> 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</span></span>
         </div>
           <v-card-actions style="margin-top: 28px;">
        
           <v-btn text="Confirm" variant="text" @click="dialog3 = false" color="#2873FF" style="font-family: Manrope; letter-spacing: 0px;  text-transform: capitalize; font-size: 16px; font-style: normal; font-weight: 700; line-height: 160%;">
           </v-btn>
         </v-card-actions>
 
       </v-card>
     </v-dialog>
   </div>
 </template>
 
 <script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import {getTokens, getTokenBalance, calculateTxnFees} from "@/composables/requests/tokens";

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


const piniastoredicon = ref(null);
const icon = ref(piniastoredicon);

const storedSymbol = ref("");
const select  = ref(storedSymbol);
const network = pinia.state.selectedNetwork.toLowerCase();
const coin =  ref('BTC')

let selectedToken = ref(null);
const selectedTokenBalance = computed(() => {
  const selectedToken = tokensForSelectedNetwork.find(token => token.symbol === coin.value);
  return selectedToken?.balance;
});


// const getTokens_ = async()=>{
//   try {
//       const data = await getTokens(pageNumber.value);
  
//       if (data.success) {
//         const fetchedTokens = data.data.result;
  
//         // Filter tokens based on the selected network ID
//         const selectedNetworkId = pinia.state.BlockchainNetworks.find(b=>b.name==network)?.id;
//         const filteredTokens = fetchedTokens.filter(token => token.token_networks.find(tkn=>tkn.blockchain_id === selectedNetworkId));
  
//         const storedTokenIds = pinia.state.tokenLists.map(item => item.id);
  
//         // Check if there are any new items in the fetched data
//         const newItems = filteredTokens.filter(item => !storedTokenIds.includes(item.id));
  
//         if (newItems.length > 0) {
//           console.log('fetching');
//           pinia.setTokenLists(newItems);
//         }
//       } else {
//         console.log('Unavailable');
//       }
//     } catch (error) {
//       console.log(error);
//     }
// }

const calculateFee = async () => {
  const TxnInfo = {
    transfer_input: {
      token: coin.value,
      amount: parseFloat(trfAmmount.value),
      to_address: transferWallet.value,
    },
  }
    console.log(TxnInfo)
  try {
      loading.value = true
      const data = await calculateTxnFees(TxnInfo);
      console.log(data);

      if (data.success) {
        fee_id.value = data.data.fee_id;
        token_id = data.data.token;
        from_amount_total.value = data.data.amount_plus_fee;
        tax_fee.value = data.data.fee_amount;
        is_balance_sufficient.value = data.data.is_balance_sufficient;
        loading.value = false
        dialog2.value = true
      } else {
          push.error(data.message);
      }

  } catch (e) {
      console.log(e)
  }
}

const selectedNetworkId = pinia.state.BlockchainNetworks.find(b=>b.name==network)?.id;

const tokensForSelectedNetwork = pinia.state.tokenLists.filter(token => token.token_networks.find(tkn=>tkn.blockchain_id === selectedNetworkId));

const symbols = tokensForSelectedNetwork.map(token => token.symbol);

// const getTokenBals = async () => {

// // Check if user is authenticated

// if (pinia.state.isAuthenticated) {
//   try {
//     console.log(network);

//     // Fetch token balance
//     const data = await getTokenBalance(symbols);
//     console.log('here.....1')
//     // Update tokens with the new balance
//     if (data.success) {
//         for (const token_ of data.data) {
//           console.log(data);
//           // Update tokenLists with the new balance
       
//           const token = pinia.state.tokenLists.find(t => t.symbol === token_.token);
//           if (token) {
//           // Update token balance
//           token.balance = (token_.balance);
//         }
//         }
//     } else {
//       console.log('Error:', data.message);
//     }
//   } catch (error) {
//     console.log('Fetch error:', error);
//   }
// }
// };

const focusInput = () => {
  transferWallet.value.focus();
}

  onMounted(async () => { 
 
  

    piniastoredicon.value = tokensForSelectedNetwork[0]?.icon;
    storedSymbol.value = tokensForSelectedNetwork[0]?.name;
  });


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
 width: 426px !important;
 height: 60px !important;
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
::-webkit-scrollbar{
  display: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
 </style>