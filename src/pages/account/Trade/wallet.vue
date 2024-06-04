<template>
    <div>
       <Header :hide="true" :icon1="true" :icon3="true"  :icon2="true"/>
       <v-container>
            <div style="margin-top: 110px; display: flex; width: 100% !important;">
               <div>
                  <div class="ma-2 mt-5 me-6 flex-lg-and-up hidden-md-and-down">
                    <Wallet-nav/>
                   </div>
               </div>
  
              <div style="width: -webkit-fill-available">
                <div>
                  <div style=" margin-top: 10px;">
                    <span :class="isDark ? 'card-text-dark':'card-text-light'" style="font-family: Poppins; font-size: 32px;  font-style: normal; font-weight: 700; line-height: normal;">Wallet</span>
                  </div>
                   <div class="wallet-box" :class="isDark ? 'wallet-border':'wallet-border-light'" style="border-radius: 24px; width: 100%; padding: 30px; margin-top: 20px; width: 96%;">
                    <v-table  style="display: grid! important; background: inherit; width: 100%; height: 420px;">
                      <thead>
                        <tr style="display: flex; margin-bottom: 8px; justify-content: space-between;">

                          <th class="me-7" style="display: flex; align-items: center; align-self: center; width: 18%; justify-content: center;">
                            <div class="d-flex" >
                              <span class="table-header-text" :class="isDark ? 'text-dark':'text-light'">Coin</span>
                            </div>
                          </th>

                          <th class="me-7 price-th" style="display: flex; align-items: center; align-self: center; position: relative;  width: 15%;">
                            <span class="table-header-text me-1"  :class="isDark ? 'text-dark':'text-light'" style="margin-left: ">Price (USD)</span>
                          </th>
                          <th class="flex-lg-and-up hidden-sm-and-down" style="display: flex; align-items: center; align-self: center; position: relative; margin-right: 21px">
                            <span class="table-header-text"  :class="isDark ? 'text-dark':'text-light'" style="margin-left: ">Balance</span>
                          </th>
                         
                          <th class="me-7" style="display: flex; align-items: center; align-self: center; position: relative; width: 27%;">
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
                    <tr class="token-price" v-for="token in pinia.state.tokenLists" :key="token.id" style="display: flex; justify-content: space-between;">
                      <td style="display: contents;">
                        <div class="d-flex me-7" style="align-items: center; width: 25%; overflow: hidden;">
                          <img :src="token.icon" width="30" class="me-3" />
                          <div class="coin-div" style="flex-direction: column; display: flex; overflow: hidden; text-overflow: ellipsis;">
                            <span class="coin-name1 flex-lg-and-up hidden-sm-and-down"
                                  :class="isDark ? 'coin-name' : 'coin-name-light'"
                                  style="font-family: Poppins; font-weight: 600; font-size: 16px; line-height: normal; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
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

                      <td class="mt-2" style="display: flex; align-items: center; width: 22%;"><span class="browser-txt coin-price" style="margin-bottom: 8px" :class="isDark ? 'coin-name':'coin-name-light'">{{ token?.converted_value }}</span></td>

                      <td style="display: flex; align-items: end; justify-content: center; width: 20%;">
                        <span class="browser-txt mb-2 flex-md-and-up hidden-sm-and-down" :class="isDark ? 'coin-name':'coin-name-light'"> 
                         {{ token.balance }}
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
                          
                                <h4 style="font-family: Poppins; font-size: 400 !important;">Select the action you want to perform</h4>
                                <div  class="d-flex me-7 mt-4" style="align-items: center;">
                                  <img :src="token.icon" width="35" class="me-3" />
                                  <div style="display: flex; justify-content: space-between;">
                                  <div class="coin-div" style="flex-direction: column; display: flex !important;">
                                    <span class="coin-name1"
                                          :class="isDark ? 'coin-name' : 'coin-name-light'"
                                          style="font-family: Poppins; font-weight: 600; font-size: 16px; line-height: normal;">
                                      {{ token.name }}
                                    </span>
                                    <span class="sml-text"
                                          :class="isDark ? 'text-dark' : 'text-light'"
                                          style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 12px !important;">
                                      {{ token.symbol }}
                                    </span>
                                  </div>

                                <h3 style="position: absolute; right: 7%; font-family: Poppins; font-weight: 600; font-size: 16px;">{{ pinia.state.preferredCurrency }} {{ token.balance}}</h3>
                                </div>
                              </div>
                                <div class="d-flex mt-3">
                                    <td style="display: flex; align-items: center;"> <div> <Send-btc/> </div> </td>
                                    <td style="display: flex; align-items: center;"> <div> <Get-btn/> </div> </td>
                                    <td style="display: flex; align-items: center; color: white;">
                                      <div>
                                      <nuxt-link to="/account/trade/swap"><v-btn :class="isDark ? 'active-offers-dark':'active-offers-light'" class="swap">
                                      <img src="/svg/arrow-swap.svg" class="me-1"/>
                                      Swap</v-btn>
                                      </nuxt-link>
                                      </div> 
                                    </td>
                                </div>
                              
                              <div style="display: flex; justify-content: end;">
                                <v-btn class="primary-btn1" style="border-radius: 10px !important; color: white; padding: 20px; width: 30%;"
                                  text="Cancel"
                                  @click="isActive.value = false"
                                ></v-btn>
                              </div>
                              </v-card>
                            </template>
                          </v-dialog>                         
                        </div>
                        
                      <div class="d-flex">
                        <td class="flex-md-and-up hidden-sm-and-down" style="display: flex; align-items: center;"> <div> <Send-btc/> </div> </td>
                        <td class=" flex-md-and-up hidden-sm-and-down" style="display: flex; align-items: center;"> <div> <Get-btn/> </div> </td>
                        <td class="flex-md-and-up hidden-sm-and-down" style="display: flex; align-items: center; color: white;">
                          <div>
                          <nuxt-link to="/account/trade/swap"><v-btn :class="isDark ? 'active-offers-dark':'active-offers-light'" class="swap">
                          <img src="/svg/arrow-swap.svg"/>
                          Swap</v-btn>
                          </nuxt-link>
                          </div> 
                        </td>
                    </div>
                      </div>
                    </tr>
                  </tbody>
              </v-table>
            </div>

            <div style="margin-top: 63px; margin-bottom: 94px;">
                <span :class="isDark ? 'card-text-dark':'card-text-light'" style="font-family: Poppins; font-size: 24px; font-style: normal; font-weight: 400; line-height: normal;">Latest transactions</span>
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
import {getTokens, currencyConverter, getTokenBalance} from "@/composables/requests/tokens";
const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore()
const dialog = ref(false)
const pageNumber = ref(1)
const conversionResult = ref([]);
const network = pinia.state.selectedNetwork.toLowerCase();
const selectedNetworkId = pinia.state.BlockchainNetworks.find(b=>b.name==network)?.id;

const tokensForSelectedNetwork = pinia.state.tokenLists.filter(token => token.token_networks.find(tkn=>tkn.blockchain_id === selectedNetworkId));

const symbols = tokensForSelectedNetwork.map(token => token.symbol);


const getTokens_ = async () => {
  try {
    const data = await getTokens (pageNumber.value);
    
    if (data.success) {
      const fetchedTokens = data.data.result;
      const selectedNetworkId = pinia.state.BlockchainNetworks.find(b=>b.name.toLowerCase() === pinia.state.selectedNetwork.toLowerCase());
      const filteredTokens = fetchedTokens.filter(token => {
        return token.token_networks && token.token_networks.some(tkn => tkn.blockchain_id === selectedNetworkId.id)
      })
   
        
    pinia.setTokenLists(filteredTokens, addMinutes(5));
    } else {
        push.message(data.message, { position: 'top', timeout: 2000 });
    }
    } catch (error) {
    console.log(error);
    // toast.message(error, { position: 'top', timeout: 2000 });
    }
};


watch(() => pinia.state.selectedNetwork, async(newNetwork) => {
  if (newNetwork) {
    console.log(newNetwork)
    await getTokens_();
    
  }
});


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
      console.log('here....')
     

      if (data.success) {
        // Store the conversion result in the array
        conversionResult.value = data.data;
        console.log(conversionResult.value)
        
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


watch(()=>conversionResult.value,(newVal)=>{
    pinia.state.tokenLists.map(t=>{
    const tokenConversion = newVal.find(tc=>tc.from== t.symbol);
    if(tokenConversion){
      t.converted_value = tokenConversion.value;
    }
  });
});
// const formatBalance = balance => (balance === 0 ? '0.00' : balance?.toFixed(7));

const getTokenBals = async () => {

  // Check if user is authenticated

  if (pinia.state.isAuthenticated) {
    try {

      // Fetch token balance
      const data = await getTokenBalance(symbols);
     

      // Update tokens with the new balance
      if (data.success) {
          for (const token_ of data.data) {
          
            // Update tokenLists with the new balance
            // const token = tokensForSelectedNetwork.find(t => t.symbol === token_);
            const token = pinia.state.tokenLists.find(t => t.symbol === token_.token);
            if (token) {
            // Update token balance
            token.balance = (token_.balance);
        
          }
          }
      } else {
        console.log('Error:', data.message);
      }
    } catch (error) {
      console.log('Fetch error:', error);
    }
  }
};




onMounted(() => {
convertCurrencies();
getTokens_();
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
}
.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td, .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
border: none !important;
color: var(--Gray-Medium-light, #969696);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Poppins;
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
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.sml-text{
font-family: Poppins;
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
  border: 0.5px solid rgba(142, 155, 174, 0.5);
  /* padding: 10px; */
}
.wallet-border-light{
  border: 1px solid #DBE8FF;
}
.coin-name{
color: white !important;
}
.coin-name-light{
color: #10192D;
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
width: 17% !important;
margin-left: 9%;
}

.dialog-btn :deep(.v-btn--size-default){
padding: 0px;
min-width: 0px !important;
}

}
</style>
  