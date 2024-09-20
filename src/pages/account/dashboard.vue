<template>
  <div>
    <Header :hide="true" :icon1="true" :icon3="true" :icon2="true" :wallet="true"/>
    <v-container class="d-flex" style="margin-top: 110px;">
       
      <div class="">
        <Sd-nav1/>
      </div>
         
      <div class="dashboard-container" style="margin-left: 16px; width: 100%;">
        
        <div class="acct-settings" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="display: flex; justify-content: space-between;">    
          <span class="marketPlace" style="font-size: 24px; font-style: 28px; font-weight: 600; color: #5892FF;">Dashboard</span>
          <span class="mail-text" :class="isDark ? 'text-dark' : 'text-light'"> {{ pinia.state.user?.email }}</span>
        </div>
  
        <div style="display: flex; justify-content: space-between; overflow-x: auto;">
          <!-- Check if data is loaded, otherwise show skeleton loaders -->
          <template v-if="multipliedValues && multipliedValues.length > 0">
            <div v-for="(item, i) in multipliedValues.slice(0, 3)" :key="i">
              <v-card link @click="pinia.state.getNewCoinInfo = item.symbol; navigateTo('/account/trade/coinId')" class="coinbox me-4" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 15px;">
                <span class="balance" :class="isDark ? 'coin-name':'coin-name-light'">
                  {{ formatBalance(item.product) }} {{ pinia.state.preferredCurrency }}
                </span>
                <span class="mt-2" :class="isDark ? 'text-dark':'text-light'">
                  {{ formatBalance(item.balance) }}
                  <span style="margin-left: 4px;">{{ item.symbol }}</span>
                </span>

                <div class="mt-3" style="display: flex; align-items: center;">
                  <img class="me-2" :src="item.icon" alt="coin" width="30" />
                  <img v-if="chainIcon?.icon" :src="chainIcon?.icon" width="15" style="position: relative; right: 17px; margin-top: 16px;" />
                  <span class="coinName" :class="isDark ? 'text-dark':'text-light'">{{ item.name }}</span>
                </div>
              </v-card>
            </div>
          </template>

          <!-- Skeleton Loader when data is loading -->
          <template v-else>
            <div v-for="i in 3" :key="i">
              <v-skeleton-loader 
                type="card" 
                class="me-4" 
                style="border-radius: 16px; height: 200px; width: 200px;"
                :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'"
              />
            </div>
          </template>
        </div>

        <div style="margin-top: -110px; margin-bottom: 30px;">
          <Coins/>
        </div>

      
          <div style="display: flex; justify-content: space-between;">
            <div style="display: flex; flex-direction: column;">
              <span style="font-weight: 600; font-size: 16px;">Buy Offer</span>
              <span :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 13px;">Choose your preferred offer type</span>
            </div>
            <span @click="navigateTo('/account/marketplace/activeOffers')" class="resend-code me-1" style="font-size: 14px;">See More...</span>
          </div>

          <v-card link class="offer-card" @click="navigateTo('/account/marketplace/activeOffers')" v-for="offer in pinia.state.MarketPlace.slice(0, 3)" :key="offer.id"  :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="height: 100px; margin-top: 5px; margin-bottom: 20px; border-radius: 16px; display: flex; justify-content: space-between; padding: 15px; align-items: center;">
          
            <div style="display: flex; flex-direction: column; line-height: 30px;">
              <span style="font-weight: 600; font-size: 14px">{{ offer.user.username }}</span>
              <span :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 14px; font-style: normal;">Buy limit</span>
            </div>
            
            <div style="display: flex; flex-direction: column; line-height: 30px;">
              <span v-if="offer.user?.is_verified" style="font-weight: 500;  text-align-last: right; font-size: 14px; color: #1671D9;">Verified</span>
              <span v-else style="color: orangered; font-size: 14px;">Unverified User</span>
              <span style="font-size: 14px;" :class="isDark ? 'text-dark' : 'text-light'">{{formatBalance(offer?.trading_pair?.fiat?.minimum_buy_limit) }} - {{ formatBalance(offer?.trading_pair?.fiat?.maximum_buy_limit) }} {{ offer?.countryCurrencyName }} </span>
            </div>

          </v-card>


          <div style="display: flex; justify-content: space-between; align-items: center">
            <div style="display: flex; flex-direction: column;">
              <span style="font-weight:600; font-size: 16px;">Buy Coins</span>
              <span :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 13px;">Choose your preferred withdrawal method</span>
            </div>
            <span @click="navigateTo('/account/marketplace/activeOffers')" class="resend-code me-1" style="font-size: 13px;">See More...</span>
          </div>

          <v-card class="offer-card" link @click="navigateTo('/account/marketplace/activeOffers')"  :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="margin-top: 5px; margin-bottom: 20px; border-radius: 16px; display: flex; justify-content: space-between; padding: 15px; align-items: center;">
          
            <div style="display: flex; flex-direction: column; line-height: 30px;">
              <span style="font-weight: 600; font-size: 14px;">Bank Transfer</span>
              <span :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal;font-weight: 500;">Buy coin and pay with bank transfer</span>
            </div>

            <img src="/svg/bankTrf.svg"/>

          </v-card>

          <v-card class="offer-card" link @click="navigateTo('/account/marketplace/activeOffers')"  :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="margin-bottom: 20px; border-radius: 16px; display: flex; justify-content: space-between; padding: 15px; align-items: center;">
          
            <div style="display: flex; flex-direction: column; line-height: 30px;">
              <span style="font-weight: 600; font-size: 14px;">Online wallet</span>
              <span :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal;font-weight: 500;line-height: normal;">Buy coin and pay from an online wallet</span>
            </div>

            <img src="/svg/cashDeps.svg"/>

          </v-card>

          <v-card class="offer-card" link @click="navigateTo('/account/marketplace/activeOffers')"  :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="margin-bottom: 30px; border-radius: 16px; display: flex; justify-content: space-between; padding: 15px; align-items: center;">
          
            <div style="display: flex; flex-direction: column; line-height: 30px;">
              <span style="font-weight: 600; font-size: 14px;">Cash deposit</span>
              <span :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal;font-weight: 500;line-height: normal;">Buy coin and pay with cash deposit to bank</span>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18" fill="none">
              <mask id="path-1-inside-1_11699_65543" fill="white">
                <path d="M7.6875 7.5225C7.6875 7.9275 7.8 7.9875 8.055 8.0775L8.4375 8.2125V6.9375H8.2125C7.9275 6.9375 7.6875 7.2 7.6875 7.5225Z"/>
              </mask>
              <path d="M7.6875 7.5225C7.6875 7.9275 7.8 7.9875 8.055 8.0775L8.4375 8.2125V6.9375H8.2125C7.9275 6.9375 7.6875 7.2 7.6875 7.5225Z" fill="#8E9BAE"/>
              <path d="M8.055 8.0775L7.55577 9.49199L7.55577 9.49199L8.055 8.0775ZM8.4375 8.2125L7.93827 9.62699L9.9375 10.3326V8.2125H8.4375ZM8.4375 6.9375H9.9375V5.4375H8.4375V6.9375ZM6.1875 7.5225C6.1875 7.7955 6.20911 8.34898 6.59315 8.84103C6.96269 9.31451 7.48699 9.46771 7.55577 9.49199L8.55423 6.66301C8.48883 6.63993 8.52987 6.65123 8.59276 6.68457C8.6754 6.7284 8.82351 6.82278 8.9581 6.99522C9.22214 7.33352 9.1875 7.6545 9.1875 7.5225H6.1875ZM7.55577 9.49199L7.93827 9.62699L8.93673 6.79801L8.55423 6.66301L7.55577 9.49199ZM9.9375 8.2125V6.9375H6.9375V8.2125H9.9375ZM8.4375 5.4375H8.2125V8.4375H8.4375V5.4375ZM8.2125 5.4375C6.95825 5.4375 6.1875 6.51979 6.1875 7.5225H9.1875C9.1875 7.88021 8.89675 8.4375 8.2125 8.4375V5.4375Z" fill="#8E9BAE" mask="url(#path-1-inside-1_11699_65543)"/>
              <path d="M9.945 9.92211L9.7875 10.3684L9.945 9.92211Z" fill="#8E9BAE" stroke="#8E9BAE" stroke-width="1.5"/>
              <path d="M14.685 4.11L13.1475 5.6475C13.035 5.76 12.8925 5.8125 12.75 5.8125C12.6075 5.8125 12.465 5.76 12.3525 5.6475C12.135 5.43 12.135 5.07 12.3525 4.8525L13.89 3.315C12.57 2.19 10.8675 1.5 9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 7.1325 15.81 5.43 14.685 4.11ZM10.3125 8.865C10.7925 9.0375 11.4375 9.3825 11.4375 10.485C11.4375 11.4225 10.695 12.195 9.7875 12.195H9.5625V12.3825C9.5625 12.69 9.3075 12.945 9 12.945C8.6925 12.945 8.4375 12.69 8.4375 12.3825V12.195H8.3775C7.38 12.195 6.5625 11.355 6.5625 10.32C6.5625 10.005 6.8175 9.75 7.125 9.75C7.4325 9.75 7.6875 10.005 7.6875 10.3125C7.6875 10.725 7.995 11.0625 8.3775 11.0625H8.4375V9.3975L7.6875 9.135C7.2075 8.9625 6.5625 8.6175 6.5625 7.515C6.5625 6.5775 7.305 5.805 8.2125 5.805H8.4375V5.625C8.4375 5.3175 8.6925 5.0625 9 5.0625C9.3075 5.0625 9.5625 5.3175 9.5625 5.625V5.8125H9.6225C10.62 5.8125 11.4375 6.6525 11.4375 7.6875C11.4375 7.995 11.1825 8.25 10.875 8.25C10.5675 8.25 10.3125 7.995 10.3125 7.6875C10.3125 7.275 10.005 6.9375 9.6225 6.9375H9.5625V8.6025L10.3125 8.865Z" fill="#8E9BAE"/>
              <path d="M17.0175 1.2825C16.9575 1.1475 16.8525 1.035 16.71 0.975C16.6425 0.9525 16.575 0.9375 16.5 0.9375H13.5C13.1925 0.9375 12.9375 1.1925 12.9375 1.5C12.9375 1.8075 13.1925 2.0625 13.5 2.0625H15.1425L13.89 3.315C14.175 3.5625 14.4375 3.825 14.685 4.11L15.9375 2.8575V4.5C15.9375 4.8075 16.1925 5.0625 16.5 5.0625C16.8075 5.0625 17.0625 4.8075 17.0625 4.5V1.5C17.0625 1.425 17.0475 1.3575 17.0175 1.2825Z" fill="#8E9BAE"/>
            </svg>

          </v-card>

      
          <v-carousel height="400" cycle :show-arrows="false" class="carousel-item" style="border-radius: 10px;">
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :style="`background-image: url(${slide.image_url}); background-size: cover; background-position: center; padding-top: 20px; background-color: ${slide.background};`" height="100%">
                <div class="d-flex fill-height justify-center align-center">
                  <div class="d-flex justify-space-between">
                    <div class="d-flex flex-column">
                      <!-- Add any overlay content or text inside this block if needed -->
                    </div>
                  </div>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>


    
        <div style="margin-top: -130px;">
            <Invite/>
        </div> 

      </div>

    </v-container>
    <Footer class="desktop-footer flex-lg-and-up hidden-md-and-down"/>
    <Mobile-footer class="mobile-footer"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import { getBanners } from '@/composables/requests/admin'
import { getMarketOffers } from "@/composables/requests/marketplace";
import { getTokenBalance, currencyConverter } from "@/composables/requests/tokens";


const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();
const conversionResult = ref([]);
const pageNumber = ref(1);
const isLoading = ref();
const loading = ref();
const offers = ([]);
const slides = computed(() => pinia.state.storeBanners);
const network = pinia.state.selectedNetwork.toLowerCase();
const selectedNetworkId = pinia.state.BlockchainNetworks.find(b => b.name == network)?.id;
const tokensForSelectedNetwork = pinia.state.tokenLists?.filter(token => token?.token_networks?.find(tkn => tkn.blockchain_id === selectedNetworkId));
const symbols = tokensForSelectedNetwork.map(token => token.symbol);


const fetchBanners = async () => {
  try {
    isLoading.value = true; // Start loading indicator

    // Fetch data using the getBanners function
    const data = await getBanners(pageNumber.value);
    console.log(data)

    // Check if the fetch was successful
    if (data.success) {
      pinia.setStoredBanners(data.data.result)
    } else {
      console.error("Error:", data.message); // Log the error message if fetch failed
    }

  } catch (error) {
    console.log(error.message); // Log any caught errors
  } finally {
    isLoading.value = false; // End loading indicator regardless of success or failure
  }
};


const conversionRate = ref([]); // Initialize as an empty array to store conversion rates

const convertCurrencies = async () => {
  // Get the list of coins from Pinia state
  const coins = pinia.state.tokenLists;

  try {
    const convertCurrency = [];

    // Prepare the list of currency conversions
    for (const coin of coins) {
      convertCurrency.push({ from: coin.symbol, to: pinia.state.preferredCurrency });
    }

    // Fetch conversion rates
    try {
      const data = await currencyConverter(convertCurrency);

      if (data.success) {
        // Map conversion results to the conversionRate array
        conversionRate.value = data.data.map(item => ({
          from: item.from,
          rate: item.value
        }));


      } else {
        console.log("Conversion failed:", data.message);
      }
    } catch (error) {
      console.log("Error converting:", error);
    }
  } catch (error) {
    console.log("Error fetching coins:", error);
  }
};

const multipliedValues = computed(() => {
  // Convert conversionRate array to a map for easy lookup
  const rateMap = conversionRate.value.reduce((map, item) => {
    map[item.from] = item.rate; // Assuming rate is the correct property
    return map;
  }, {});

  return pinia.state.tokenLists.map(token => {
    const balance = token.balance ?? 0;
    const rate = rateMap[token.symbol] ?? 0; // Lookup the rate from the map
    const product = balance * rate;

    return {
      ...token,
      product // Attach the calculated product to the token object
    };
  });
});




const chainIcon = computed(() => {
return pinia.state.tokenLists.find(c => c?.symbol === "BNB" || c?.symbol === "TRX");
});

const matchingCountries = pinia.state.MarketPlace.map(marketplaceEntry => {
const sellerCountry = pinia.state.allcountries.find(country => country.country_name === marketplaceEntry.user.country)?.flag_url;

});


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



const get_allMarket_Offers = async () => {
  loading.value = true;
  try {
    const data = await getMarketOffers(pageNumber.value);
    if (data.success) {
      offers.value = data.data.result;
      loading.value = false;

      offers.value = offers.value.map(offer => {
        const countryId = offer.trading_pair?.fiat.country_id;
        let countryCurrencyName = 'Unknown';
        if (countryId) {
          const country = pinia.state.allcountries.find(country => country.id === countryId);
          countryCurrencyName = country?.currency_name || 'Unknown';
        }
        return { ...offer, countryCurrencyName };
      });
      pinia.setMarketPlace(data.data.result)
    } else {
      push.error(`${data.message}`);
      loading.value = false;
    }
  } catch (e) {
    console.log(e);
    loading.value = false;
  }
};

watch(()=>conversionResult.value,(newVal)=>{
    pinia.state.tokenLists?.map(t=>{
    const tokenConversion = newVal.find(tc=>tc.from== t.symbol);
    if(tokenConversion){
      t.converted_value = tokenConversion.value;
    }
  });
});




onMounted(() => {
  getTokenBals();
  convertCurrencies();
  fetchBanners();
  get_allMarket_Offers()
});
</script>

<style scoped>
.coinbox{
width: 256.73px;
flex-shrink: 0;
padding: 24px;
display: flex;
flex-direction: column;
margin-top: 10px;
}

.partners-text{
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.buy-btn{
border-radius: 15px;
background: #212A36;
width: 110px;
height: 42px;
text-transform: unset;
box-shadow: none;
letter-spacing: 0px;
margin-top: 5px;
/* margin-left: 5px !important; */
}
.bg-color{
background: #12181F;
}
.selected-coin{
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.text-bg{
border-radius: 20px;
height: 64px !important;
}
.buy{
font-family: Manrope;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.carousel-text{
font-family: "SF Pro Display";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 28px */
display: flex; 
align-items: center;
}
.secureWallet{
border-radius: 12px;
border: 0.3px solid #CCC;
background: rgba(0, 21, 61, 0.05);
box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.10);
backdrop-filter: blur(2px);
display: flex;
align-items: center;
display: inline-flex;
padding: 8px;
align-items: center;
gap: 8px;
width: 152px;
margin-top: 20px;
}

.balance{
font-family: Manrope;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.coinName{
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left: -8px;
}
.coin-name{
color: white !important;
}
.coin-name-light{
color: #10192D;
}

.carousel-item :deep(.v-carousel__controls) {
  align-items: center;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: center;
  list-style-type: none;
  position: absolute;
  width: 100%;
  z-index: 1;
  background: none !important;
  color: rgb(51 143 220);
}

.carousel-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
  color: white;
  font-family: 'SF Pro Display';
  margin-bottom: 16px;
}

.secure-wallet-text {
  color: white;
  font-family: 'SF Pro Display';
}


@media only screen and (max-width: 600px) {
.dashboard-container{
  margin-left: 0px !important;
}
.offer-card{
  height: 80px !important;
}
.scroll-coin{
  width: 340px !important;
}
.carousel-title{
  font-size: 17px !important;
}
.slide-img{
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: 10px;
}
.carousel-item{
  height: 200px !important;
}
.secureWallet{
  display: none;
}

.coinbox {
  width: 200.73px !important;
  flex-shrink: 0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.carousel-item :deep(.mdi-circle){
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: auto !important; 
}
.balance{
font-family: Manrope;
font-size: 20px;
}

}
</style>