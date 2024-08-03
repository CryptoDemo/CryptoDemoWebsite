<template>

  <div style="margin-top: 110px; display: flex; width: 100% !important;">

    <div style="width: -webkit-fill-available">
      <div>
        <div class="wallet-box" :class="isDark ? 'wallet-border' : 'wallet-border-light'"
          style="border-radius: 24px; width: 100%; padding: 25px; margin-top: 28px; width: 100%;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; flex-direction: column">

              <BlockChainNetwork />
            </div>
            <div @click.stop
              style="margin-top: 4px; margin-bottom: 15px; display: flex; width: 40%; margin-inline-start: auto;">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"
                style="margin-left: 16px; margin-top: 19px; left: 16%; margin-right: 10px; position: relative;">
                <path
                  d="M10.3033 18.2301C14.6756 18.2301 18.22 14.6148 18.22 10.1551C18.22 5.69538 14.6756 2.08008 10.3033 2.08008C5.93105 2.08008 2.38664 5.69538 2.38664 10.1551C2.38664 14.6148 5.93105 18.2301 10.3033 18.2301Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path opacity="0.4" d="M19.0533 19.0809L17.3866 17.3809" stroke="currentColor" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <v-textarea clearable class="custom-height" variant="plain" rows="1" no-resize
                placeholder="Search for Coins..." v-model="input"
                style="border: 1px solid #64748B; height: 55px; border-radius: 15px; padding-left: 45px; padding-right: 15px; align-items: center; width: 50%;"></v-textarea>
            </div>
          </div>



          <v-table class="coin-table"
            style="display: grid! important; background: inherit; width: 100%; height: 420px;">
            <thead>
              <tr class="coin-table" style="display: flex; margin-bottom: 8px; justify-content: space-between;">

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
                  <span class="table-header-text me-1" :class="isDark ? 'text-dark' : 'text-light'"
                    style="margin-left: ">Price (USD)</span>
                </th>

                <th class="balance-tr" style="display: flex; align-items: center; align-self: center;">
                  <span class="table-header-text me-1" :class="isDark ? 'text-dark' : 'text-light'">Balance</span>
                </th>

              </tr>
            </thead>

            <tbody>


              <tr v-for="(item, index) in filteredItems?.length ? filteredItems : pinia.state.tokenLists" :key="index"
                @click="pinia.state.getNewCoinInfo = item.symbol; navigateTo('/account/trade/coinId')"
                style="display: flex; justify-content: space-between;">

                <td class="mt-2 flex-lg-and-up hidden-sm-and-down" :class="isDark ? 'text-dark' : 'text-light'" style="display: flex; align-items: center;">
                  {{ index + 1 }}</td>

                <td style="display: contents; position: relative; width: 34%;">
                  <div class="d-flex coin-width" style="align-items: center; width: 150px; ">
                    <img :src="item.icon" width="35" class="py-5" />
                    <img :src="chainIcon?.icon" width="15" class=" py-5"
                      style="position: relative; right: 11px; margin-top: 16px;" />
                    <div style="flex-direction:row">
                      <span class="coin-name1" :class="isDark ? 'coin-name' : 'coin-name-light'"
                        style="font-family: Manrope; font-weight: 600; font-size: 16px; line-height:normal">{{ item.name
                        }}</span>
                      <span class="sml-text d-flex flex-lg-and-up hidden-md-and-down"
                        :class="isDark ? 'text-dark' : 'text-light'">{{ item.symbol }}</span>
                    </div>
                  </div>
                </td>


                <td class="mt-4"
                  style="overflow: scroll; overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical;line-clamp: 1; display: flex; align-self: self-start; justify-content: center; width: 27%;">
                  <span class="browser-txt" :class="isDark ? 'coin-name' : 'coin-name-light'">{{
                    formatConvertedValue(item.conversionValue || 0) }}</span>
                </td>

                <td class="mt-2" style="display: flex; align-items: center; justify-content: center; width: 15%;">
                  <span class="mb-4 coin-bal" :class="isDark ? 'coin-name' : 'coin-name-light'"
                    style="font-weight: 600; font-size: 16px;"> {{ formatBalance(item.balance) }} </span>
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
import BlockChainNetwork from './blockChainNetwork.vue';


const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore()
const network = pinia.state.selectedNetwork.toLowerCase();
const selectedNetworkId = pinia.state.BlockchainNetworks.find(b => b.name == network)?.id;
const tokensForSelectedNetwork = pinia.state.tokenLists?.filter(token => token?.token_networks?.find(tkn => tkn.blockchain_id === selectedNetworkId));
const symbols = tokensForSelectedNetwork.map(token => token.symbol);
const pageNumber = ref(1);

const getTokens_ = async () => {
  try {
    const data = await getTokens(pageNumber.value, pinia.state.selectedNetwork.toLowerCase());

    if (data.success) {
      const fetchedTokens = data.data.result;

      // Store the fetched tokens with a 5-minute expiry time
      pinia.setTokenLists(fetchedTokens, addMinutes(5));

      // Convert currencies after updating token balances
      await convertCurrencies();


      // Update token balances 
      await getTokenBals();

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
  if (pinia.state.isAuthenticated) {
    try {
      // Fetch token balance
      const data = await getTokenBalance(symbols);

      // Update tokens with the new balance
      if (data.success) {
        // Create a copy of the token list to update locally
        const updatedTokensBals = pinia.state.tokenLists.map(token => {
          const tokenData = data.data.find(t => t.token === token.symbol);
          if (tokenData) {
            return { ...token, balance: tokenData.balance };
          }
          return token;
        });

        // Update the token store with the new balances

        pinia.setTokenLists(updatedTokensBals, addMinutes(5))

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
        pinia.setTokenLists(updatedTokenLists, addMinutes(5));


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
    console.log(newNetwork)
    await getTokens_();
    getTokenBals();
    convertCurrencies();
  }
});


onBeforeMount(() => {
  getTokens_();
  getTokenBals();
  convertCurrencies();
});


</script>



<style scoped>
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
  color: var(--Gray-Medium-light, #969696);
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
  color: var(--Gray-Medium-light, #969696);
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

.coin-table {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.searchBar :deep(.v-textarea .v-field--no-label textarea, .v-textarea .v-field--active textarea) {
  opacity: 1;
  bottom: 2px;
}


@media screen and (max-width: 600px) {
  .wallet-box {
    padding: 15px !important;
    width: 100% !important;
  }

  .coin-name1 {
    font-size: 14px !important;
    /* width: 10px !important; */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* .browser-txt{
    margin-top: 3px !important;
  } */
  .table-header-text{
    font-weight: 600 !important;
    font-size: 14px !important;
  }
  /* .coin-bal{
    margin-bottom: 8px !important
  } */
  .coin-width{
    width: 50% !important;
  }
  .coin-table{
    margin-bottom: 0px !important;
    justify-content: flex-start !important;
  }
  .balance-tr{
    position: absolute;
    right: 8px;
  }
  .coin-tr{
    margin-left: 50px;
  }
  .price-tr{
    margin-left: 50px;
  }
  }


</style>
