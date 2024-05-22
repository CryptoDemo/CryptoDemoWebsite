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
                  <span :class="isDark ? 'card-text-dark':'card-text-light'" style="font-family: Poppins; font-size: 32px;  font-style: normal; font-weight: 700; line-height: normal;">Wallet</span>
                   <div class="wallet-box" :class="isDark ? 'wallet-border':'wallet-border-light'" style="border-radius: 24px; width: 100%; padding: 30px; margin-top: 28px; width: 96%;">
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
                    <tr v-for="(item, index) in pinia.state.tokenLists" :key="index" style="display: flex; justify-content: space-between;">
                      <td style="display: contents;">
                          <div class="d-flex" style="align-items: center; width: 30%;">
                              <img :src="item.icon" width="30" class="me-3"/>
                                <div style="flex-direction:row">
                                  <span class="coin-name1" :class="isDark ? 'coin-name':'coin-name-light'" style="font-family: poppins; font-weight: 600; font-size: 16px; line-height:normal">{{item.name }}</span>
                                  <span class="sml-text d-flex flex-lg-and-up hidden-md-and-down" :class="isDark ? 'text-dark':'text-light'">{{ item.symbol }}</span>
                                </div>
                            </div>
                      </td>

                      <td  style="display: flex;align-items: end; width: 20%;"><span class="browser-txt mb-2" :class="isDark ? 'coin-name':'coin-name-light'">{{ item?.converted_value || 0 }}</span></td>


                      <td style="display: flex; align-items: end; justify-content: center; width: 20%;">
                        <span class="browser-txt" :class="isDark ? 'coin-name':'coin-name-light'"> 
                          <TokenBalance :symbol="item.symbol"/> 
                        </span>
                      </td>

                      <div class="d-flex"> 
                        <td class="flex-lg-and-up hidden-md-and-down" style="display: flex; align-items: center;"> <div> <Send-btc/> </div> </td>
                        <td class="me-4 flex-lg-and-up hidden-md-and-down" style="display: flex; align-items: center;"> <div> <Get-btn/> </div> </td>
                        <td class="flex-lg-and-up hidden-md-and-down" style="display: flex; align-items: center; color: white;"><div><nuxt-link to="/account/trade/swap"><v-btn :class="isDark ? 'active-offers-dark':'active-offers-light'" class="swap">
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
import {getTokens, currencyConverter} from "@/composables/requests/tokens";

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore()
const pageNumber = ref(1)
const symbolPrice= ref()
const conversionResult = ref([]);

  try {
    const data = await getTokens(pageNumber.value);
    if(data.success) {
      const fetchedTokens = data.data.result;

      const storedTokenIds = pinia.state.tokenLists.map(item => item.id);

      // Check if there are any new items in the fetched data
      const newItems = fetchedTokens.filter(item => !storedTokenIds.includes(item.id));

      if (newItems.length > 0) {
        console.log('fetching')
        pinia.setTokenLists(fetchedTokens);
      }
    } else {
      console.log('Unavailable')
    }
  } catch (error) {
    console.log(error);
  };

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
    console.log("Starting currency conversion...");

    const convertCurrency = [];
    
    // Loop through each coin and convert to USD
    for (const coin of coins) {
      convertCurrency.push({ from: coin.symbol, to: "USD" });
    }

    try {
      const data = await currencyConverter(convertCurrency);
      console.log(`Data received: `, data);

      if (data.success) {
        // Store the conversion result in the array
        conversionResult.value = data.data;
      } else {
        console.log(`Conversion failed:`, data.message);
      }
    } catch (error) {
      console.log(`Error converting:`, error);
    }

    // Optionally, store all conversion results in pinia
    // pinia.setTokenPrices(conversionResults, addMinutes(10));

  } catch (error) {
    console.log(error);
  }

  // Log the array to see the stored conversion results
  console.log("Conversion Results:", conversionResult.value);
};

onMounted(async () => {
  await convertCurrencies();

  });

</script>

<style scoped>
.swap{
border-radius: 16px;
box-shadow: 0px 10px 25px 0px rgba(27, 37, 55, 0.05);
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
  background: var(--secondary-background, #1B2537);
}
.active-offers-light{
background: var(--secondary-background, #F8FAFC);
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
  /* width: 10px !important; */
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
overflow: hidden;
text-overflow: ellipsis;
}

}
</style>
  