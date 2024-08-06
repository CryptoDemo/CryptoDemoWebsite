<template>
    <div>
       <Header :wallet="true" :hide="true" :icon1="true" :icon3="true"  :icon2="true"/>
       <v-container>
            <div style="margin-top: 90px; display: flex; width: 100% !important;">
            
              <div class="ma-2 mt-5 me-6 flex-lg-and-up hidden-md-and-down" v-if="selectedScreen">
                <Wallet-nav/>
                </div>
              <div class="ma-2 mt-5 me-6 flex-lg-and-up hidden-md-and-down" v-else>
                <FiatBal/>
              </div>
            
  
              <div style="width: -webkit-fill-available">
                <div class="mt-5">
                <div :class="isDark ? 'profile-cards-dark':'profile-cards-light'" class="button-container" style="display: flex; border-radius: 10px; width: fit-content; height: 65px; align-items: center; padding: 10px;">
                  <v-btn class="me-3" :class="[selectedScreen ? 'wallet-btn' : isDark ? 'fiat-btn' : 'fiat-btn-light']" @click.prevent="selectedScreen=true" >Crypto Wallet </v-btn>
                  <v-btn :class="[!selectedScreen ? 'wallet-btn' : isDark ? 'fiat-btn' : 'fiat-btn-light']" @click.prevent="selectedScreen=false">Fiat Wallet</v-btn>
                </div>

                <div v-if="selectedScreen" class="hidden-lg-and-up flex-md-and-down mt-5">
                  <MobilecryptoBal/>
                </div>

            <div v-if="selectedScreen" class="wallet-box" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 24px; padding: 30px; margin-top: 30px;">
                <v-table  style="display: grid! important; background: inherit; width: 100%; height: 420px;">
                  <thead>
                    <tr style="display: flex; margin-bottom: 8px; justify-content: space-between;">

                      <th class="me-7 coin-th" style="display: flex; align-items: center; align-self: center; width: 20%; justify-content: center;">
                        <div class="d-flex" >
                          <span class="table-header-text" :class="isDark ? 'text-dark':'text-light'">Coin</span>
                        </div>
                      </th>

                      <th class="me-7 price-th" style="display: flex; align-items: center; align-self: center; position: relative;  width: 12%;">
                        <span class="table-header-text me-1"  :class="isDark ? 'text-dark':'text-light'" style="margin-left: ">Price (USD)</span>
                      </th>
                      <th class="flex-lg-and-up hidden-sm-and-down" style="display: flex; align-items: center; align-self: center; position: relative; margin-right: 21px">
                        <span class="table-header-text"  :class="isDark ? 'text-dark':'text-light'" style="margin-left: ">Balance</span>
                      </th>
                      
                      <th class="me-5" style="display: flex; align-items: center; align-self: center; position: relative; width: 27%;">
                        <span class="table-header-text me-1"  :class="isDark ? 'text-dark':'text-light'" style="margin-left: "></span>
                      </th>


                      <th style="display: flex; align-items: center; align-self: center; position: relative;right: 72px">
                        <span></span>
                      </th>
                      <th style="display: flex; align-items: center; align-self: center; position: relative;right: 72px">
                        <span></span>
                      </th>
                    </tr>
                  </thead>


              <tbody>
                
                <tr @click="pinia.state.getNewCoinInfo = token.symbol; navigateTo('/account/trade/coinId')" class="token-price py-2"  :class="isDark ? 'wallet-border' : 'wallet-border-light'" v-for="token in pinia.state.tokenLists" :key="token.id" style="display: flex; justify-content: space-between;">
                  <td style="display: contents;">
                    <div class="d-flex me-7" style="align-items: center; width: 25%;">
                      <img :src="token.icon" width="35" class="me-3" />
                      <img :src="chainIcon?.icon" width="15" style="position: relative; right: 25px; margin-top: 16px;"/>
                      <div class="coin-div" style="flex-direction: column; display: flex; overflow: hidden; text-overflow: ellipsis;">
                        <span class="coin-name1 flex-lg-and-up hidden-sm-and-down"
                              :class="isDark ? 'coin-name' : 'coin-name-light'"
                              style="font-family: Manrope; font-weight: 600; font-size: 16px; line-height: normal; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                          {{ token.name }}
                        </span>
                        <span class="sml-text"
                              :class="isDark ? 'text-dark' : 'text-light'"
                              style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                          {{ token.symbol }}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td class="mt-2" style="display: flex; align-items: center; width: 22%;"><span class="browser-txt coin-price" style="display: flex; align-self: start; margin-top: 3px;" :class="isDark ? 'coin-name':'coin-name-light'">{{ token?.conversionValue }}</span></td>

                  <td style="display: flex; align-items: end; width: 16%;">
                    <span class="browser-txt mb-2 flex-md-and-up hidden-sm-and-down" :class="isDark ? 'coin-name':'coin-name-light'" style="font-weight: 700; display: flex; align-self: center;"> 
                      {{formatBalance(token.balance) }}
                    </span>
                  </td>

                  <div class="d-flex" style="align-items: center;"> 
                    <div class="dialog-btn hidden-md-and-up flex-sm-and-down">
                      <v-dialog max-width="500">
                        <template v-slot:activator="{ props: activatorProps }">
                          <v-btn v-bind="activatorProps" style="background: inherit; box-shadow: none;">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M14.5 5.5C14.5 4.4 13.6 3.5 12.5 3.5C11.4 3.5 10.5 4.4 10.5 5.5C10.5 6.6 11.4 7.5 12.5 7.5C13.6 7.5 14.5 6.6 14.5 5.5Z" stroke="#D8D8D8" stroke-width="1.5"/>
                            <path d="M14.5 19.5C14.5 18.4 13.6 17.5 12.5 17.5C11.4 17.5 10.5 18.4 10.5 19.5C10.5 20.6 11.4 21.5 12.5 21.5C13.6 21.5 14.5 20.6 14.5 19.5Z" stroke="#D8D8D8" stroke-width="1.5"/>
                            <path d="M14.5 12.5C14.5 11.4 13.6 10.5 12.5 10.5C11.4 10.5 10.5 11.4 10.5 12.5C10.5 13.6 11.4 14.5 12.5 14.5C13.6 14.5 14.5 13.6 14.5 12.5Z" stroke="#D8D8D8" stroke-width="1.5"/>
                          </svg>
                          </v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                          <v-card max-width="400" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 15px; padding: 20px;">
                      
                            <h4 style="font-family: Manrope; font-size: 400 !important;">Select the action you want to perform</h4>
                            <div  class="d-flex me-7 mt-4" style="align-items: center;">
                              <img :src="token.icon" width="35" class="me-3" />
                              <div style="display: flex; justify-content: space-between;">
                              <div class="coin-div" style="flex-direction: column; display: flex !important;">
                                <span class="coin-name1" :class="isDark ? 'coin-name' : 'coin-name-light'" style="font-family: Manrope; font-weight: 600; font-size: 16px; line-height: normal;">
                                  {{ token.name }}
                                </span>
                                <span class="sml-text"
                                      :class="isDark ? 'text-dark' : 'text-light'"
                                      style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 12px !important;">
                                  {{ token.symbol }}
                                </span>
                              </div>

                            <h3 style="position: absolute; right: 7%; font-family: Manrope; font-weight: 700; font-size: 16px;">{{ pinia.state.preferredCurrency }} {{formatBalance (token.balance)}}</h3>
                            </div>
                          </div>
                            <div class="d-flex mt-6" style="justify-content: space-between;">
                                <td style="display: flex; align-items: center;"> 
                                  <div style="width: 80px;"> 
                                    <v-btn @click.once.stop="navigateTo('/account/trade/sendButton')" class="swap" :class="isDark ? 'btn-segment':'btn-segment-light'">
                                      <img src="/svg/get.svg" class="me-1"/>
                                      <span :class="isDark ? 'coin-name':'coin-name-light'">Send</span>
                                    </v-btn>
                                  </div> 
                                </td>
                                <td style="display: flex; align-items: center;"> 
                                  <div style="width: 80px;"> 
                                    <v-btn @click.prevent="navigateTo('/account/trade/getButton')" class="swap" :class="isDark ? 'btn-segment':'btn-segment-light'">
                                      <img src="/svg/send-arrow.svg" class="me-1"/>
                                      <span :class="isDark ? 'coin-name':'coin-name-light'">Get</span>
                                    </v-btn>
                                  </div> 
                                </td>
                                <td style="display: flex; align-items: center; color: white;">
                                  <div style="width: 80px;">
                                    <v-btn @click.prevent="navigateTo('/account/trade/swap')"  :class="isDark ? 'btn-segment':'btn-segment-light'" class="swap">
                                      <img src="/svg/arrow-swap.svg" class="me-1"/>
                                      Swap
                                    </v-btn>
                                
                                  </div> 
                                </td>
                            </div>
                          
                          <div style="display: flex; justify-content: end;">
                            <v-btn class="primary-btn1" style="border-radius: 10px !important; color: white; padding: 20px; width: 30%; display: flex;"
                              text="Cancel"
                              @click="isActive.value = false"
                            ></v-btn>
                          </div>
                          </v-card>
                        </template>
                      </v-dialog>                         
                    </div>
                    
            
                    <td class="flex-md-and-up hidden-sm-and-down me-3" style="display: flex; align-items: center; color: white;"> 
                      <div>  
                        <v-btn @click.prevent="navigateTo('/account/trade/sendButton')" class="swap" :class="isDark ? 'btn-segment':'btn-segment-light'">
                          <img src="/svg/send-arrow.svg" class="me-1"/>
                          <span :class="isDark ? 'coin-name':'coin-name-light'">Send</span>
                        </v-btn>
                      </div> 
                    </td>

                    <td class=" flex-md-and-up hidden-sm-and-down me-3" style="display: flex; align-items: center; color: white;">
                        <div> 
                        <v-btn @click.prevent="navigateTo('/account/trade/getButton')" class="swap" :class="isDark ? 'btn-segment':'btn-segment-light'">
                          <img src="/svg/get.svg" class="me-1"/>
                          <span :class="isDark ? 'coin-name':'coin-name-light'">Get</span>
                        </v-btn>
                        </div> 
                    </td>

                    <td class="flex-md-and-up hidden-sm-and-down" style="display: flex; align-items: center; color: white;">
                      <div>
                        <v-btn class="swap" @click.prevent="navigateTo('/account/trade/swap')" :class="isDark ? 'btn-segment':'btn-segment-light'">
                          <img src="/svg/arrow-swap.svg"/>
                          <span :class="isDark ? 'coin-name':'coin-name-light'"> Swap </span>
                        </v-btn>
                      </div> 
                    </td>
            
                  </div>
                </tr>
              </tbody>
          </v-table>
            </div>

            <div v-else style="margin-top: 20px; margin-bottom: 10px;">
              <Fiat/>
            </div>

            <div style="margin-top: 47px; margin-bottom: 34px;">
                <span :class="isDark ? 'card-text-dark':'card-text-light'" style="font-family: Manrope; font-size: 24px; font-style: normal; font-weight: 400; line-height: normal;">Transaction History</span>
            </div>

            <div v-if="selectedScreen" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" class="txn-div" style="padding: 10px; margin-bottom: 300px; max-height: 400px; overflow: scroll; border-radius: 10px !important;">
              <WebTxn/>
            </div>

            <div v-else :class="isDark ? 'profile-cards-dark':'profile-cards-light'" class="txn-div" style="padding: 10px; margin-bottom: 300px; max-height: 400px; overflow: scroll; border-radius: 10px !important;">
              <FiatTxn/>
            </div>
          
          </div>
        </div>
      </div>
    </v-container>   
      <Footer class="desktop-footer flex-lg-and-up hidden-sm-and-down"/>
      <Mobile-footer class="mobile-footer"/>
    </div>
  </template>
<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import {getTokens,  getTokenBalance, currencyConverter } from "@/composables/requests/tokens";
import FiatTxn from '~/components/fiatTxn.vue';


const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore()
const selectedScreen = ref(true)
const network = pinia.state.selectedNetwork.toLowerCase();
const selectedNetworkId = pinia.state.BlockchainNetworks.find(b=>b.name==network)?.id;
const tokensForSelectedNetwork = pinia.state.tokenLists?.filter(token => token?.token_networks?.find(tkn=>tkn.blockchain_id === selectedNetworkId));
const symbols = tokensForSelectedNetwork.map(token => token.symbol);
const pageNumber = ref(1);

const getTokens_ = async () => {
  try {
    const data = await getTokens(pageNumber.value, pinia.state.selectedNetwork.toLowerCase());

    if (data.success) {
      const fetchedTokens = data.data.result;
      

      // Store the fetched tokens with a 5-minute expiry time
      pinia.setTokenLists(fetchedTokens, addMinutes(5));
    } else {
      // Display a message to the user if fetching tokens was unsuccessful
      push.message(data.message, { position: 'top', timeout: 2000 });
    }
  } catch (error) {
    // Log the error to the console
    console.log(error);
  }
};

const getTokenBals = async () => {
 
 // Check if user is authenticated
 if (pinia.state.isAuthenticated)  {
   try {
     // Fetch token balance
     const data = await getTokenBalance(symbols);

     // Update tokens with the new balance
     if (data.success) {
       // Create a copy of the token list to update locally
       const updatedTokens = pinia.state.tokenLists.map(token => {
         const tokenData = data.data.find(t => t.token === token.symbol);
         if (tokenData) {
           return { ...token, balance: tokenData.balance };
         }
         return token;
       });

       // Update the token store with the new balances

       pinia.setTokenLists(updatedTokens, addMinutes(5))

       // Optionally, you can return or use `updatedTokens` as needed

     } else {
       console.log('Error:', data.message);
     }
   } catch (error) {
     console.log('Fetch error:', error);
   }
 }
};



const convertCurrencies = async () => {
  // Get the list of coins from pinia state

  const coins = pinia.state.tokenLists;

  try {

    const convertCurrency = [];
   
    // Loop through each coin and convert to USD
    for (const coin of coins) {
      convertCurrency.push({ from: coin.symbol, to: "USD" });
    }

    try {
      const data = await currencyConverter(convertCurrency);
     

      if (data.success) {
        // Store the conversion result in the array
        const conversionMap = data.data.reduce((map, item) => {
          map[item.from] = item.value;
          return map;
        }, {});

        // Update the tokenLists with conversion values
        const updatedTokenLists = coins.map(coin => ({
          ...coin,
          conversionValue: conversionMap[coin.symbol] || 0 // Add the conversion value
        }));

        // Store the updated tokenLists in Pinia
        pinia.setTokenLists(updatedTokenLists);

        console.log(updatedTokenLists);
        

        // pinia.setTokenLists(pinia.state.tokenLists, ...conversionResult.value, addMinutes(5))
        
      } else {
        console.log(`Conversion failed:`, data.message);
      }
    } catch (error) {
      console.log(`Error converting:`, error);
    }


  } catch (error) {
    console.log(error);
  }

};

watch(() => pinia.state.selectedNetwork, async(newNetwork) => {
  if (newNetwork) {
    console.log(newNetwork)
    await getTokens_();
    getTokenBals();
    convertCurrencies();
  }
});


const chainIcon = computed(() => {
  return pinia.state.tokenLists.find(c => c?.symbol === "BNB" || c?.symbol === "TRX");
});


onMounted(() => {
convertCurrencies();
getTokenBals();
});

</script>

<style scoped>
.swap{
border-radius: 16px;
display: flex;
width: 86.333px;
height: 48px !important;
padding: 12px 16px;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;
letter-spacing: 0px;
text-transform: unset;
align-content: center;
box-shadow: none;
background: inherit;
}
.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td, .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
border: none !important;
color: var(--Gray-Medium-light, #969696);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%;
}
.v-table--density-default > .v-table__wrapper > table > thead > tr > th, .v-table--density-default > .v-table__wrapper > table > tfoot > tr > th {
border: none !important;
}
.browser-txt{
color: var(--White, var(--Colors-Base-white, #FFF));
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.sml-text{
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.table-header-text{
color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.active-offers-dark{
  background: var(--secondary-background, #1B2537) !important;
  color: white;
}
.v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > tbody > tr > th, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > thead > tr > th, .v-table > .v-table__wrapper > table > tfoot > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > th {
  padding: 0px !important;

}
.active-offers-light{
background: var(--secondary-background, #F8FAFC) !important;
color: #10192D;
}
.wallet-border{
  border-bottom: 1px solid  #1B2537 !important;
  border:none;
}
.wallet-border-light{
border-bottom: 1px solid #E2E8F0 !important;
border:none;
}
.coin-name{
color: white !important;
}
.coin-name-light{
color: #10192D;
}

.wallet-btn{
border-radius: 10px;
background: var(--linear-card, linear-gradient(270deg, #1DA1DB -11.75%, #2873FF 119.96%));
display: flex;
width: 228px;
height: 48px;
padding: 12px 98px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
box-shadow: none;
color: white;
text-transform: capitalize;
letter-spacing: 0px;
}

.fiat-btn{
border-radius: 10px;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
width: 228px;
height: 48px;
padding: 12px 98px;
background: inherit;
box-shadow: none;
color: #969696;
background: #060A1D;
text-transform: capitalize;
letter-spacing: 0px;
}

.fiat-btn-light{
background: white;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
width: 228px;
height: 48px;
box-shadow: none;
text-transform: capitalize;
letter-spacing: 0px;
}

.btn-segment{
border: 1px solid #1B2537;
}

.notivue-notification {
  position: relative;
  z-index: 1000000 !important; /* Set this value higher than Vuetify modal */
}

.btn-segment-light{
border: 1px solid #E2E8F0;
}

::-webkit-scrollbar {
  display: none;
}

@media only screen and (max-width: 600px) {
.wallet-box{
  padding: 15px !important;
  width: 100% !important;
}
.coin-div{
 overflow: unset !important;
 display: block !important;
}
.sml-text{
font-size: 14px !important;
font-weight: 600;
line-height: normal;
}
.token-price{
  display: flex !important;
  justify-content: space-between !important;
}
.price-th{
width: 65% !important;
margin-left: 9%;
}

.dialog-btn :deep(.v-btn--size-default){
padding: 0px;
min-width: 0px !important;
}

.coin-th{
  width: 45% !important;
}

.txn-div{
  width: 100% !important;
}
.wallet-btn{
width: 48%;
height: 42px;
padding: 12px 58px;
font-size: 14px;
font-style: normal;
font-weight: 700;
}
.fiat-btn{
width: 48%;
height: 42px;
padding: 12px 58px;
font-size: 14px;
font-style: normal;
font-weight: 700;
}
.fiat-btn-light{
width: 48%;
height: 42px;
padding: 12px 58px;
font-size: 14px;
font-style: normal;
font-weight: 700;
}
.button-container{
  width: 100% !important;
  height: 61px !important;
}
.coin-price{
  margin-top: 11px !important;
}

}
</style> 
  