<template>
  <div>
     <v-container>
          <div style="margin-top: 110px; display: flex; width: 100% !important;">
             
            <div style="width: -webkit-fill-available">
              <div>   
                 <div class="wallet-box" :class="isDark ? 'wallet-border':'wallet-border-light'" style="border-radius: 24px; width: 100%; padding: 25px; margin-top: 28px; width: 100%;">
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; flex-direction: column">
                      <span :class="isDark ? 'coin-name':'coin-name-light'" style="font-family: Poppins;font-size: 16px; font-style: normal; font-weight: 600">Hot Coins</span>
                      <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 12px; font-style: normal; font-weight: 400;">Updates every 60 seconds</span>
                    </div>
                    <div @click.stop style="margin-top: 4px; margin-bottom: 15px; display: flex; width: 40%; margin-inline-start: auto;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" style="position: absolute; margin-top: 1.5%; margin-left: 15px;">
                        <path d="M9.58335 18.1986C13.9556 18.1986 17.5 14.6542 17.5 10.2819C17.5 5.90965 13.9556 2.36523 9.58335 2.36523C5.2111 2.36523 1.66669 5.90965 1.66669 10.2819C1.66669 14.6542 5.2111 18.1986 9.58335 18.1986Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M18.3334 19.0319L16.6667 17.3652" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <v-textarea clearable variant="plain" rows="1" no-resize  placeholder="Search for Coins..." v-model="input" style=" border: 1px solid #64748B; height: 55px; border-radius: 30px; padding-left: 45px; padding-right: 15px; align-items: center; width: 50%;"></v-textarea>
                    </div>
                  </div>

                  <v-table style="display: grid! important; background: inherit; width: 100%; height: 420px;">
                    <thead>
                      <tr style="display: flex; margin-bottom: 8px;">

                        <th style="display: flex; align-items: center; align-self: center; width: 7%; justify-content: center;">
                          <div class="d-flex" >
                            <span class="table-header-text" :class="isDark ? 'text-dark':'text-light'">S/N</span>
                          </div>
                        </th>

                        <th style="display: flex; align-items: center; align-self: center; width: 20%; justify-content: center;">
                          <div class="d-flex" >
                            <span class="table-header-text" :class="isDark ? 'text-dark':'text-light'">Coin</span>
                          </div>
                        </th>

                        <th style="display: flex; align-items: center; align-self: center; position: relative; margin-right: 24px; width: 42%; justify-content: center;">
                          <span class="table-header-text me-1"  :class="isDark ? 'text-dark':'text-light'" style="margin-left: ">Price (USD)</span>
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
                  <tr v-for="(item, index) in filteredItems?.length ? filteredItems : pinia.state.tokenLists" :key="index" style="display: flex; justify-content: space-between;">
                    <td class="mt-2 me-5" style="display: flex; align-items: center;">{{index+1}}</td>

                   
                    <td style="display: contents;">
                      <div class="d-flex" style="align-items: center; width: 30%;">
                            <img :src="item.icon" width="30" class="me-3 py-5"/>
                            <div style="flex-direction:row">
                              <span class="coin-name1" :class="isDark ? 'coin-name':'coin-name-light'" style="font-family: poppins; font-weight: 600; font-size: 16px; line-height:normal">{{item.name }}</span>
                              <span class="sml-text d-flex flex-lg-and-up hidden-md-and-down" :class="isDark ? 'text-dark':'text-light'">{{ item.symbol }}</span>
                            </div>
                      </div>
                    </td>
                  

                    <td class="mt-4" style="width: 20%; overflow: scroll; overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical;-webkit-line-clamp: 1; display: flex; align-self: self-start;"><span class="browser-txt" :class="isDark ? 'coin-name':'coin-name-light'">{{ item?.converted_value || 0 }}</span></td>
                      <td style="display: flex; align-items: center;"> 
                        <v-chip 
                        class="ma-2" color="success" variant="outlined">
                        0.008%
                        </v-chip> 
                      </td>
                      
                      <td class="mt-3" style="display: flex; align-items: center;"> 
                        <CoinChart/> 
                      </td>
                  </tr>
                </tbody>
            </v-table>
          </div>

        </div>
      </div>
    </div>
  </v-container>   
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
const currentPageNumber = ref(1);
const fetchMore = async()=>{
  // increment the pageNumber
  currentPageNumber.value += 1;

  // fetch the new page record
  
}
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

let input = ref("");

const filteredItems = computed(() => {
const searchTerm = input.value.toLowerCase();
return pinia.state.tokenLists.filter((loc) => {
const lowername = loc.name.toLowerCase();
const symbol = loc.symbol.toLowerCase();
return (
lowername.includes(searchTerm) || symbol.includes(searchTerm)
);
});
});
const props = defineProps({
  selectedCoin: String,
});

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
