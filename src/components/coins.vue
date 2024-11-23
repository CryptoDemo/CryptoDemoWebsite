<template>

  <div style="margin-top: 110px; display: flex; width: 100% !important;">

    <div style="width: -webkit-fill-available">
      <div>
        <div class="wallet-box" :class="isDark ? 'wallet-border' : 'wallet-border-light'"
          style="border-radius: 24px; width: 100%; margin-top: 28px; width: 100%;">
          <div style="display: flex; justify-content: space-evenly; align-items: baseline">
      
          
          </div>



          <v-table class="coin-table" style="display: grid! important; background: inherit; width: 100%; height: auto; padding-bottom: 14px;">
            <thead>
              <div class="py-8 table-caption d-md-flex" style="align-items: center; width: 100%; position: relative; padding-right: 28px; padding-left: 28px;">


                  <div class="table-title" style="display: flex; flex-direction: column;">
                    <span style="font-size: 16px; font-weight: 600;">CryptoCurrency Trading Market Table</span>
                    <span class="mt-2" :class="isDark ? 'text-dark' : 'text-light'">Live market data at a glance.</span>
                  </div>

                    <svg xmlns="http://www.w3.org/2000/svg" class="searchIcon" width="21" height="21" viewBox="0 0 21 21" fill="none"
                      style="margin-left: 16px; margin-top: 2px; left: 50%; margin-right: 10px; position: absolute;">
                      <path
                        d="M10.3033 18.2301C14.6756 18.2301 18.22 14.6148 18.22 10.1551C18.22 5.69538 14.6756 2.08008 10.3033 2.08008C5.93105 2.08008 2.38664 5.69538 2.38664 10.1551C2.38664 14.6148 5.93105 18.2301 10.3033 18.2301Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path opacity="0.4" d="M19.0533 19.0809L17.3866 17.3809" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
      
                    <input type="search" class="search-input" v-model="input" placeholder="search for coins here..." style="border: 1px solid #64748B; height: 55px; border-radius: 15px; padding-left: 45px; padding-right: 10px; outline: none; align-items: center; width: 50%; display: flex; margin-inline-start: auto;">
              </div>

              <tr class="coin-table" style="display: flex; margin-bottom: 8px; justify-content: space-between; padding-left: 28px; padding-right: 28px">

                <th class="flex-lg-and-up hidden-sm-and-down" style="display: flex; align-items: center; align-self: center; width: 3%; justify-content: center;">
                  <div class="d-flex">
                    <span class="table-header-text" :class="isDark ? 'text-dark' : 'text-light'">S/N</span>
                  </div>
                </th>

                <th class="coin-tr" style="display: flex; align-items: center; align-self: center; justify-content: center;">
                  <div class="d-flex">
                    <span class="table-header-text" :class="isDark ? 'text-dark' : 'text-light'">Coin</span>
                  </div>
                </th>

                <th class="price-tr" style="display: flex; align-items: center; align-self: center; position: relative; justify-content: center;">
                  <span class="table-header-text" :class="isDark ? 'text-dark' : 'text-light'"
                    style="margin-left: ">Price ({{ pinia.state.preferredCurrency }})</span>
                </th>

                <th class="balance-tr" style="display: flex; align-items: center; align-self: center;">
                  <span class="table-header-text me-1" :class="isDark ? 'text-dark' : 'text-light'">Quantity</span>
                </th>

              </tr>
            </thead>

            <tbody>


            <tr v-for="(item, index) in filteredItems?.length ? filteredItems : pinia.state.tokenLists" :key="index" @click="pinia.state.getNewCoinInfo = item.symbol; navigateTo('/account/trade/coinId')" class="loop-table" style="display: flex; justify-content: space-between; padding-left: 28px; padding-right: 28px">

              <td class="mt-2 flex-lg-and-up hidden-sm-and-down" :class="isDark ? 'text-dark' : 'text-light'" style="display: flex; align-items: center;"> {{ index + 1 }}</td>

              <td style="display: contents; position: relative; width: 34%; cursor: pointer;">
                <div class="d-flex coin-width" style="align-items: center; width: 150px; ">
                  <img :src="item.icon" width="35" class="py-5" />
                  <img :src="chainIcon?.icon" width="15" class=" py-5"
                    style="position: relative; right: 11px; margin-top: 16px;" />
                  <div style="flex-direction:row">
                    <span class="coin-name1" :class="isDark ? 'coin-name' : 'coin-name-light'" style="font-family: Manrope; font-weight: 600; font-size: 16px; line-height:normal">{{ item.name}}</span>
                    <span class="sml-text d-flex flex-lg-and-up hidden-md-and-down"
                      :class="isDark ? 'text-dark' : 'text-light'">{{ item.symbol }}</span>
                  </div>
                </div>
              </td>

              <td class="mt-4 price-td" style="overflow: scroll;  display: flex; align-self: self-start; justify-content: center; width: 27%; cursor: pointer;">
                <span class="browser-txt price-bal" :class="isDark ? 'coin-name' : 'coin-name-light'" style="margin-right: -13px;">{{formatConvertedValue(item.conversionRate || 0) }}</span>
              </td>

              <td class="mt-2 bal-td" style="display: flex; align-items: center; justify-content: center; width: 16%; cursor: pointer;">
                <span class="coin-bal" :class="isDark ? 'coin-name' : 'coin-name-light'" style="font-weight: 600; font-size: 16px; width: 10px; margin-bottom: 16px;"> {{ formatBalance(item.balance) }} </span>
              </td>

            </tr>
            </tbody>
          </v-table>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import { getTokens, getTokenBalance, currencyConverter } from "@/composables/requests/tokens";



const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore()
const network = pinia.state.selectedNetwork.toLowerCase();
const selectedNetworkId = pinia.state.BlockchainNetworks.find(b => b.name == network)?.id;
const tokensForSelectedNetwork = pinia.state.tokenLists?.filter(token => token?.token_networks?.find(tkn => tkn.blockchain_id === selectedNetworkId));
const symbols = tokensForSelectedNetwork.map(token => token.symbol);
const pageNumber = ref(1);

// Helper function to update token balances
const updateTokenBalances = (tokens, balances) => {
  return tokens.map(token => {
    const tokenData = balances.find(t => t.token === token.symbol);
    return tokenData ? { ...token, balance: tokenData.balance } : token;
  });
};

// Main function to fetch tokens and update balances/conversions
const getTokens_ = async () => {
  try {
    const data = await getTokens(pageNumber.value, pinia.state.selectedNetwork.toLowerCase());

    if (data.success) {
      const fetchedTokens = data.data.result.reverse();

      // Store the fetched tokens with a 5-minute expiry time
      pinia.setTokenLists(fetchedTokens);

      // Convert currencies after updating token balances
      await convertCurrencies();

      // Update token balances
      setTimeout(async () => {
        await getTokenBals();
      }, 2000); 

    } else {
      // Display a message to the user if fetching tokens was unsuccessful
      push.message(data.message, { position: 'top', timeout: 2000 });
    }
  } catch (error) {
    // Log the error to the console
    console.log("Error fetching tokens:", error);
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


// Function to convert currencies for each token
const convertCurrencies = async () => {
  const coins = pinia.state.tokenLists;

  // Prepare the list of currency conversions
  const convertCurrency = coins.map(coin => ({
    from: coin.symbol,
    to: pinia.state.preferredCurrency
  }));

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
      console.log("updatedTokens...", updatedTokens)
      // Update the Pinia state with the new token list including conversion rates
      pinia.setTokenLists(updatedTokens);

    } else {
      console.log("Conversion failed:", data.message);
    }
  } catch (error) {
    console.log("Error converting currencies:", error);
  }
};

// Watch for changes in `preferredCurrency` and trigger `convertCurrencies`
watch(() => pinia.state.preferredCurrency,
  (newCurrency, oldCurrency) => {
    if (newCurrency !== oldCurrency) {
      convertCurrencies();
    }
  }
);


const chainIcon = computed(() => {
  return pinia.state.tokenLists.find(c => c?.symbol === "BNB" || c?.symbol === "TRX");
});

const formatConvertedValue = (value) => {
  if (value < 1) {
    return parseFloat(value).toFixed(4);
  } else {
    return parseFloat(value).toFixed(2);
  }
};


let input = ref("");

const filteredItems = computed(() => {
  const searchTerm = input.value.toLowerCase();
  return pinia.state.tokenLists.filter((loc) => {
    const lowername = loc?.name?.toLowerCase();
    const symbol = loc?.symbol?.toLowerCase();
    return (
      lowername.includes(searchTerm) || symbol.includes(searchTerm)
    );
  });
});
const props = defineProps({
  selectedCoin: String,
});


watch(() => pinia.state.selectedNetwork, async (newNetwork) => {
  if (newNetwork) {
    pinia.state.tokenLists = []
    await Promise.allSettled([
      getTokens_(),
    ])
  }
})


const fetch_token_bals = async()=>{
  if(pinia.state.tokenLists.length){
    return 
  }else{
    await Promise.allSettled([
      getTokens_(),
    ])
    
  }

}

fetch_token_bals();

onMounted(() => {

  convertCurrencies();

});



</script>



<style scoped>
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: auto;
  cursor: pointer;
}
.swap {
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

.v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>td,
.v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>th {
  border: none !important;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}

.v-table--density-default>.v-table__wrapper>table>thead>tr>th,
.v-table--density-default>.v-table__wrapper>table>tfoot>tr>th {
  border: none !important;
}

.browser-txt {
  color: var(--White, var(--Colors-Base-white, #FFF));
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.sml-text {
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.table-header-text {
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.wallet-border {
  border: 0.5px solid rgba(142, 155, 174, 0.5);
}

.wallet-border-light {
  border: 1px solid #DBE8FF;
}

.coin-name {
  color: white !important;
}

.coin-name-light {
  color: #10192D;
}

.coin-table::-webkit-scrollbar {
  display: none;
}




@media screen and (max-width: 600px) {
  .wallet-box {
    padding: 15px !important;
    width: 100% !important;
  }

  .coin-name1 {
    font-size: 14px !important;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .table-header-text{
    font-weight: 600 !important;
    font-size: 14px !important;
  }

  .coin-width{
    width: 50% !important;
  }
  .coin-table{
    margin-bottom: 0px !important;
    justify-content: flex-start !important;
    padding-right: 0px !important; 
    padding-left: 0px !important;
  }
  .bal-td{
    width: 23% !important;
  }
  .price-td{
    width: 39% !important;
  }
   .balance-tr{
    padding: 0px !important;
  }
  .coin-tr{
    margin-inline-start: auto;
    padding: 0px;
    margin-inline: auto;
  }
  .coin-bal{
    width: 28px !important;
    margin-bottom: 10px !important;
  }
  .price-bal{
    margin-top: 2px;
  }
  .search-input{
    width: 100% !important;
    margin-bottom: 0px !important;
    margin-top: 15px;
  }
  .searchIcon{
    left: 0% !important;
    margin-top: 33px !important;
  }
  .table-caption{
    padding-right: 0px !important; 
    padding-left: 0px !important; 
    padding-top: 10px !important; 
  }
  .coin-table{
    padding-bottom: 0px !important;
  }
  .loop-table{
  padding-left: 0px !important; 
  padding-right: 0px !important; 
  }


  }


</style>
