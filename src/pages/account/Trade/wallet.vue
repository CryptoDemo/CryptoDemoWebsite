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
              <v-table  style="display: grid! important; background: inherit; width: 100%; max-height: 400px;">
                  <thead>
                    <tr style="display: flex; margin-bottom: 8px; justify-content: space-between;">

                      <th class="me-7 coin-th" style="display: flex; align-items: center; align-self: center; width: 20%; justify-content: center;">
                        <div class="d-flex" >
                          <span class="table-header-text" :class="isDark ? 'text-dark':'text-light'">Coin</span>
                        </div>
                      </th>

                      <th class="me-7 price-th" style="display: flex; align-items: center; align-self: center; position: relative;  width: 12%;">
                        <span class="table-header-text me-1"  :class="isDark ? 'text-dark':'text-light'" style="margin-left: ">Price ({{ pinia.state.preferredCurrency }})</span>
                      </th>
                      <th class="flex-lg-and-up hidden-sm-and-down" style="display: flex; align-items: center; align-self: center; position: relative; margin-right: 21px">
                        <span class="table-header-text"  :class="isDark ? 'text-dark':'text-light'" style="margin-left: ">Quantity</span>
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
                
                <tr @click.stop="pinia.state.getNewCoinInfo = token.symbol; navigateTo('/account/trade/coinId')" class="token-price py-2"  :class="isDark ? 'wallet-border' : 'wallet-border-light'" v-for="token in pinia.state.tokenLists" :key="token.id" style="display: flex; justify-content: space-between;">
                  <td style="display: contents; cursor: pointer;">

                    <div class="d-flex me-7 coin-wrap" style="align-items: center; width: 25%;">
                      <img :src="token.icon" width="35" class="" />
                      <img :src="chainIcon?.icon" width="15" class="chainIcon" style="position: relative; right: 6%; margin-top: 16px;"/>
                      <div class="coin-div" style="flex-direction: column; display: flex; overflow: hidden; text-overflow: ellipsis;">
                        <span class="coin-name1"
                              :class="isDark ? 'coin-name' : 'coin-name-light'"
                              style="font-family: Manrope; font-weight: 600; font-size: 16px; line-height: normal; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                          {{ token.name }}
                        </span>
                        <span class="sml-text flex-lg-and-up hidden-sm-and-down"
                              :class="isDark ? 'text-dark' : 'text-light'"
                              style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                          {{ token.symbol }}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td class="mt-2 coin-price-td" style="display: flex; align-items: center; width: 21%; cursor: pointer;"><span class="browser-txt coin-price" style="display: flex; align-self: start; margin-top: 3px;" :class="isDark ? 'coin-name':'coin-name-light'">{{ formatBalance(token?.conversionRate) }}</span></td>

                  <td class="quantity-div" style="display: flex; align-items: end; width: 15%; cursor: pointer;">
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

                            <h3 style="position: absolute; right: 7%; font-family: Manrope; font-weight: 700; font-size: 16px;">{{formatBalance (token.balance)}}</h3>
                            </div>
                          </div>
                          
                            <div class="d-flex mt-6" style="justify-content: space-between;">
                                <td class="me-2" style="display: flex; align-items: center; width: 100%"> 
                                  
                                    <v-btn @click.once.stop="navigateTo('/account/trade/sendCoin')" class="swap" :class="isDark ? 'btn-segment':'btn-segment-light'">
                                      <img src="/svg/get.svg" class="me-1"/>
                                      <span class="ml-1" :class="isDark ? 'coin-name':'coin-name-light'">Send</span>
                                    </v-btn>
                              
                                </td>

                                <td class="me-2" style="display: flex; align-items: center; width: 100%"> 
                                  
                                    <v-btn @click.prevent="navigateTo('/account/trade/getCoin')" class="swap" :class="isDark ? 'btn-segment':'btn-segment-light'">
                                      <img src="/svg/send-arrow.svg" class="me-1"/>
                                      <span class="ml-1" :class="isDark ? 'coin-name':'coin-name-light'">Get</span>
                                    </v-btn>
                             
                                </td>

                                <td style="display: flex; align-items: center; color: white; width: 100%">
                              
                                    <v-btn @click.prevent="navigateTo('/account/trade/swap')"  :class="isDark ? 'btn-segment':'btn-segment-light'" class="swap">
                                      <img src="/svg/arrow-swap.svg" class="me-1"/>
                                      <span class="ml-1" :class="isDark ? 'coin-name':'coin-name-light'">Swap</span>
                                      
                                    </v-btn>
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
                        <v-btn @click.prevent="navigateTo('/account/trade/sendCoin')" class="swap" :class="isDark ? 'btn-segment':'btn-segment-light'">
                          <img src="/svg/send-arrow.svg" class="me-1"/>
                          <span :class="isDark ? 'coin-name':'coin-name-light'">Send</span>
                        </v-btn>
                      </div> 
                    </td>

                    <td class="flex-md-and-up hidden-sm-and-down me-3" style="display: flex; align-items: center; color: white;">
                        <div> 
                        <v-btn @click.prevent="navigateTo('/account/trade/getCoin')" class="swap" :class="isDark ? 'btn-segment':'btn-segment-light'">
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

            <div v-if="selectedScreen" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" class="txn-div" style="padding: 10px; margin-bottom: 300px; overflow: scroll; border-radius: 10px !important;">
              <WebTxn/>
            </div>

            <div v-else :class="isDark ? 'profile-cards-dark':'profile-cards-light'" class="txn-div" style="padding: 10px; margin-bottom: 300px;  overflow: scroll; border-radius: 10px !important;">
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
import { ref, computed, watch, onMounted } from 'vue';
import { useTheme } from 'vuetify';
import { getTokens, getTokenBalance, currencyConverter, getSummedBalance } from "@/composables/requests/tokens";
definePageMeta({
  middleware: 'scroll-to-top'
});

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore();
const selectedNetwork = ref(pinia.state.selectedNetwork.toLowerCase());
const selectedScreen = ref(true);
const pageNumber = ref(1);
const balanceData = ref()


const getTokens_ = async () => {
  try {
    const data = await getTokens(pageNumber.value, selectedNetwork.value);

    if (data.success) {
      const fetchedTokens = data.data.result.reverse();

      // Store the fetched tokens with a 5-minute expiry time
      pinia.setTokenLists(fetchedTokens);

      // Convert currencies after updating token balances
      // await convertCurrencies();


      // Update token balances 
      // await getTokenBals();

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
  if (pinia.state.isAuthenticated) {
    try {
      const symbols = pinia.state.tokenLists.map(token => token.symbol);
      const data = await getTokenBalance(symbols);

      if (data.success) {
        const updatedTokens = pinia.state.tokenLists.map(token => {
          const tokenData = data.data.find(t => t.token === token.symbol);
          if (tokenData) {
            return { ...token, balance: tokenData.balance };
          }
          return token;
        });
        pinia.setTokenLists(updatedTokens);
      } else {
        console.log('Error:', data.message);
      }
    } catch (error) {
      console.log('Fetch error:', error);
    }
  }
};

const convertCurrencies = async () => {
  const coins = pinia.state.tokenLists;

  // Prepare the list of currency conversions
  const convertCurrency = coins.map(coin => ({
    from: coin.symbol,
    to: pinia.state.preferredCurrency
  }));

  console.log(convertCurrency)
  try {
    const data = await currencyConverter(convertCurrency);

    if (data.success) {
      // Map the conversion rate to each token
      const updatedTokens = coins.map(coin => {
        const rateData = data.data.find(item => item.from === coin.symbol);
        return {
          ...coin,
          conversionRate: rateData ? rateData.value : null // Add conversionRate to token
        };
      });

      console.log(updatedTokens)
      // Update the Pinia state with the new token list including conversion rates
      pinia.setTokenLists(updatedTokens);
    } else {
      console.log("Conversion failed:", data.message);
    }
  } catch (error) {
    console.log("Error converting currencies:", error);
  }
};


watch(() => pinia.state.selectedNetwork, async (newNetwork) => {
  if (newNetwork.toLowerCase() !== selectedNetwork.value) {
    selectedNetwork.value = newNetwork.toLowerCase();
    await getTokens_();
    await getTokenBals();
    await convertCurrencies();

  }
});

const chainIcon = computed(() => {
  return pinia.state.tokenLists.find(c => c?.symbol === "BNB" || c?.symbol === "TRX");
});


const allCountries = pinia.state.allcountries;
const preferredCurrency = pinia.state.preferredCurrency;
const selectedCountryId = allCountries.find(country=>country.currency_name==preferredCurrency);
  
const chain = computed(()=>pinia.state.selectedNetwork);
const getSummedBal = async () => {
  if (pinia.state.isAuthenticated) {
    try {
      const data = await getSummedBalance(chain.value.toLowerCase(), selectedCountryId.id)
      if (data.success) {
        balanceData.value = data.data;
        pinia.setSummedBalance(data.data)
        }else {
          console.error("Error:", data.message);
      }

    } catch (error) {
      console.log(error)
    }
  }
};
  
watch(chain, (newChain, oldChain) => {
      if (newChain !== oldChain) {
        getSummedBal();
      }
}); 

// Watch for changes in `preferredCurrency` and trigger `convertCurrencies`
watch(() => pinia.state.preferredCurrency,
  (newCurrency, oldCurrency) => {
    if (newCurrency !== oldCurrency) {
      convertCurrencies();
    }
  }
);


onBeforeMount( async() => {
  // Fetch tokens and update relevant data
  await getTokens_();
  await convertCurrencies();
  await getTokenBals();
  await getSummedBal();
});



</script>


<style scoped>
.swap{
border-radius: 16px;
display: flex;
height: 50px !important;
padding: 12px 16px;
justify-content: center;
align-items: center;
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
width: -webkit-fill-available!important;
margin-left: 9%;
}

.dialog-btn :deep(.v-btn--size-default){
padding: 0px;
min-width: 0px !important;
}

.coin-th{
  width: -webkit-fill-available !important;
  margin-inline-end: 0px !important;
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
  font-size: 14px;
}
.token-price{
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}

.chainIcon{
  right: 13%!important;
}
.coin-name1{
  font-size: 14px !important;
}

.quantity-div{
  display: none !important;
}

.coin-wrap{
  margin-inline-end: 0px !important;
}
.coin-price-td{
  width: auto !important;
}

}
</style> 
  