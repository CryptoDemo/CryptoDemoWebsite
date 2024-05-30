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
                        <tr style="display: flex; margin-bottom: 8px;">

                          <th style="display: flex; align-items: center; align-self: center; width: 18%; justify-content: center;">
                            <div class="d-flex" >
                              <span class="table-header-text" :class="isDark ? 'text-dark':'text-light'">Coin</span>
                            </div>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative; margin-right: 24px; width: 21%; justify-content: center;">
                            <span class="table-header-text me-1"  :class="isDark ? 'text-dark':'text-light'" style="margin-left: ">Price (USD)</span>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative; margin-right: 21px">
                            <span class="table-header-text"  :class="isDark ? 'text-dark':'text-light'" style="margin-left: ">Balance</span>
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
                    <tr v-for="token in pinia.state.tokenLists" :key="token.id" style="display: flex; justify-content: space-between;">
                      <td style="display: contents;">
                          <div class="d-flex" style="align-items: center; width: 30%;">
                              <img :src="token.icon" width="30" class="me-3"/>
                                <div style="flex-direction:row">
                                  <span class="coin-name1" :class="isDark ? 'coin-name':'coin-name-light'" style="font-family: poppins; font-weight: 600; font-size: 16px; line-height:normal">{{ token.name }}</span>
                                  <span class="sml-text d-flex flex-lg-and-up hidden-md-and-down" :class="isDark ? 'text-dark':'text-light'">{{ token.symbol }}</span>
                                </div>
                            </div>
                      </td>

                      <td  style="display: flex;align-items: end; width: 20%;"><span class="browser-txt coin-price" style="margin-bottom: 8px" :class="isDark ? 'coin-name':'coin-name-light'">{{ token?.converted_value || 0 }}</span></td>


                      <td style="display: flex; align-items: end; justify-content: center; width: 20%;">
                        <span class="browser-txt mb-2" :class="isDark ? 'coin-name':'coin-name-light'"> 
                         {{ token.balance }}
                        </span>
                      </td>

                      <div class="d-flex"> 
                        <div class="hidden-lg-and-up flex-sm-and-down">
                          <v-menu>
                            <template v-slot:activator="{ props }">
                              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" v-bind="props">
                                <path d="M14.5 5.5C14.5 4.4 13.6 3.5 12.5 3.5C11.4 3.5 10.5 4.4 10.5 5.5C10.5 6.6 11.4 7.5 12.5 7.5C13.6 7.5 14.5 6.6 14.5 5.5Z" stroke="#D8D8D8" stroke-width="1.5"/>
                                <path d="M14.5 19.5C14.5 18.4 13.6 17.5 12.5 17.5C11.4 17.5 10.5 18.4 10.5 19.5C10.5 20.6 11.4 21.5 12.5 21.5C13.6 21.5 14.5 20.6 14.5 19.5Z" stroke="#D8D8D8" stroke-width="1.5"/>
                                <path d="M14.5 12.5C14.5 11.4 13.6 10.5 12.5 10.5C11.4 10.5 10.5 11.4 10.5 12.5C10.5 13.6 11.4 14.5 12.5 14.5C13.6 14.5 14.5 13.6 14.5 12.5Z" stroke="#D8D8D8" stroke-width="1.5"/>
                              </svg>
                              <!-- <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn> -->
                            </template>

                            <v-list>
                              <v-list-item
                                v-for="(item, i) in items"
                                :key="i"
                              >
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </div>

                        <td class="flex-lg-and-up hidden-md-and-down" style="display: flex; align-items: center;"> <div> <Send-btc/> </div> </td>
                        <td class="me-4 flex-lg-and-up hidden-md-and-down" style="display: flex; align-items: center;"> <div> <Get-btn/> </div> </td>
                        <td class="flex-lg-and-up hidden-md-and-down" style="display: flex; align-items: center; color: white;"><div>
                          <nuxt-link to="/account/trade/swap"><v-btn :class="isDark ? 'active-offers-dark':'active-offers-light'" class="swap">
                          <img src="/svg/arrow-swap.svg"/>
                          Swap</v-btn>
                        </nuxt-link>
                      </div> 
                        </td>
                    </div>
                    </tr>
                  </tbody>
              </v-table>
            </div>

            <div style="margin-top: 63px; margin-bottom: 94px;">
                <span :class="isDark ? 'card-text-dark':'card-text-light'" style="font-family: Poppins; font-size: 24px; font-style: normal; font-weight: 400; line-height: normal;">Latest transactions</span>
            </div>

            <div style="display: flex; justify-content: space-between;  margin-bottom: 284px; width: 95%;">
              <span>1</span>
                <div style="display: flex;">
                  <img src="/svg/btc.svg" class="me-3"/>
                  <div style="display: flex; flex-direction: column;">
                    <span class="browser-txt" :class="isDark ? 'coin-name':'coin-name-light'" style="font-weight: 600;">Bitcoin</span>
                    <span class="sml-text" :class="isDark ? 'coin-name':'coin-name-light'">BTC</span>
                  </div>
                </div>
                <div>
                  <span class="browser-txt" :class="isDark ? 'coin-name':'coin-name-light'">Jan 17, 4:33 PM</span>
                </div>

                <div>
                  <span class="browser-txt" style="color: #35B233; font-weight: 600; font-family: Poppins;">Completed</span>
                </div>

                <div>
                  <span class="browser-txt" :class="isDark ? 'coin-name':'coin-name-light'" style="font-weight: 600;">+2.820436 USDT</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </v-container>   
      <Footer class="desktop-footer"/>
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
    const selectedNetworkId = pinia.state.BlockchainNetworks.find(b=>b.name==network)?.id;

    const filteredTokens = fetchedTokens.filter(token => 
    token.token_networks.some(tkn => tkn.blockchain_id === selectedNetworkId));
        
    pinia.setTokenLists(filteredTokens, addMinutes(5));

    } else {
        push.message(data.message, { position: 'top', timeout: 2000 });
    }
    } catch (error) {
    console.log(error);
    // toast.message(error, { position: 'top', timeout: 2000 });
    }
};


watch(() => pinia.state.selectedNetwork, (newNetwork) => {
  if (newNetwork) {
    console.log(newNetwork)
    getTokens_();
  }
});


  watch(()=>conversionResult.value,(newVal)=>{
    pinia.state.tokenLists.map(t=>{
    const tokenConversion = newVal.find(tc=>tc.from== t.symbol);
    if(tokenConversion){
      t.converted_value = tokenConversion.value;
    }
  });
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


      if (data.success) {
        // Store the conversion result in the array
        conversionResult.value = data.data;
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


// const formatBalance = balance => (balance === 0 ? '0.00' : balance?.toFixed(7));


const getTokenBals = async () => {

  // Check if user is authenticated

  if (pinia.state.isAuthenticated) {
    try {
      console.log(network);

      // Fetch token balance
      const data = await getTokenBalance(symbols);

      // Update tokens with the new balance
      if (data.success) {
          for (const token_ of data.data) {
          
            // Update tokenLists with the new balance
            const token = tokensForSelectedNetwork.find(t => t.symbol === token_);
            // const token = pinia.state.tokenLists.find(t => t.symbol === token_.token);
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

onMounted(async () => {
  await convertCurrencies();
  getTokens_()
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

@media screen and (max-width: 600px) {
.wallet-box{
  padding: 15px !important;
  width: 100% !important;
}
.coin-name1{
font-size: 14px !important;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
overflow: hidden;
text-overflow: ellipsis;
}
.coin-price{
  margin-bottom: 10px !important;
}

}
</style>
  