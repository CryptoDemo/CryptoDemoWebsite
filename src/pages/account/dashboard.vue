<template>
  <div>
    <Header :hide="true" :icon1="true" :icon3="true" :icon2="true" :wallet="true"/>
    <v-container class="d-flex" style="margin-top: 110px;">
       
      <div class="dashboardSpace me-3">
        <Sd-nav1/>
      </div>
         
      <div class="dashboard-container" style="margin-left: 16px; width: 100%;">
        
        <div class="acct-settings" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="display: flex; justify-content: space-between;">    
          <span class="marketPlace" style="font-size: 24px; font-style: 28px; font-weight: 600; color: #5892FF;">Dashboard</span>
          <span class="mail-text" :class="isDark ? 'text-dark' : 'text-light'"> {{ pinia.state.user?.email }}</span>
        </div>
  
        <div style="display: flex; justify-content: space-between; overflow-x: auto;">
          <!-- Check if data is loaded, otherwise show skeleton loaders -->
          <template v-if="tokensList.length">
            <div v-for="(item, i) in tokensList.slice(0, 3)" :key="i">
              <v-card link @click="pinia.state.getNewCoinInfo = item.symbol; navigateTo('/account/trade/coinId')" class="coinbox me-4" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 15px;">
                <span class="balance" :class="isDark ? 'coin-name':'coin-name-light'"> {{ formatBalance(item.balance * item.conversionRate) }} {{ pinia.state.preferredCurrency }} </span>
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

          <v-card link class="offer-card" @click="navigateTo('/account/marketplace/activeOffers')" v-for="offer in pinia.state.MarketPlace.slice(0, 3)" :key="offer.id"  :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="height: auto; margin-top: 5px; margin-bottom: 20px; border-radius: 16px; display: flex; justify-content: space-between; padding: 15px; align-items: center;">
          
            <div style="display: flex; flex-direction: column; line-height: 30px;">
              <span style="font-weight: 600; font-size: 14px">{{ offer.user.username }}</span>
              <span :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 14px; font-style: normal;">Buy limit</span>
              <div class="d-flex" style="line-height: 30px; margin-bottom: 2px;">
                <img :src="offer.trading_pair?.crypto?.token?.icon" class="me-2" width="20px" />
                <span class="me-1" style="color: #8e9bae; font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 600;">{{offer.trading_pair?.crypto?.token?.name }}</span>
              </div>
            </div>
            
            <div style="display: flex; flex-direction: column; line-height: 30px;">
              <span v-if="offer.user?.is_verified" style="font-weight: 500;  text-align-last: right; font-size: 14px; color: #1671D9;">Verified</span>
              <span v-else style="color: orangered; font-size: 14px;">Unverified User</span>
              <span style="font-size: 14px;" :class="isDark ? 'text-dark' : 'text-light'">{{formatBalance(offer?.trading_pair?.fiat?.minimum_buy_limit) }} - {{ formatBalance(offer?.trading_pair?.fiat?.maximum_buy_limit) }} {{ offer?.countryCurrencyName }} </span>  
              <span :class="isDark ? 'text-dark' : 'text-light'" style=" font-family: Manrope; font-size: 14px; font-style: normal;  font-weight: 600; text-align-last: right;">{{offer?.trading_pair?.fiat?.unit_value }} {{ offer.countryCurrencyName }} </span>
            </div>

          </v-card>


          <div style="display: flex; justify-content: space-between; align-items: center">
            <div style="display: flex; flex-direction: column;">
              <span style="font-weight:600; font-size: 16px;">Buy Coins</span>
              <span :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 13px;">Choose your preferred payment method</span>
            </div>
            <span @click="navigateTo('/account/marketplace/activeOffers')" class="resend-code me-1" style="font-size: 13px;">See More...</span>
          </div>

          <v-card class="offer-card" link @click="navigateTo('/account/marketplace/activeOffers'); pinia.state.selectedPaymentMethod_from_indexPage = method.name" v-for="(method, index) in paymentMethods.slice(0, 3)" :key="index" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="margin-top: 5px; margin-bottom: 20px; border-radius: 16px; display: flex; justify-content: space-between; padding: 15px; align-items: center;">
          
            <div style="display: flex; flex-direction: column; line-height: 30px;">
              <span style="font-weight: 600; font-size: 14px;">{{ method.name  }}</span>
              <span :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal;font-weight: 500;">Now available on Demo</span>
            </div>

            <img src="/svg/bankTrf.svg"/>

          </v-card>

        
         
          <v-carousel height="400" cycle :show-arrows="false" class="carousel-item" style="width: 100%;">
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <div :style="`background-image: url(${slide.image_url}); background-size: contain; background-position: center; height: 100%; width: 100%; padding-top: 20px; background-color: ${slide.background};`">
               
              </div>
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
const paymentMethods = computed(() => pinia.state.PaymentMethod);
const offers = ([]);
const slides = computed(() => pinia.state.storeBanners);
const network = pinia.state.selectedNetwork.toLowerCase();
const marketPlace = computed(() => pinia.state.MarketPlace);
const selectedNetworkId = pinia.state.BlockchainNetworks.find(b => b.name == network)?.id;
const tokensForSelectedNetwork = pinia.state.tokenLists?.filter(token => token?.token_networks?.find(tkn => tkn.blockchain_id === selectedNetworkId));
const symbols = tokensForSelectedNetwork.map(token => token.symbol);
const tokensList = computed(()=>pinia.state.tokenLists);


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


const chainIcon = computed(() => {
return pinia.state.tokenLists.find(c => c?.symbol === "BNB" || c?.symbol === "TRX");
});

const sellerCountries =  marketPlace.value.map((market) => {
  const sellerCountry = pinia.state.allcountries.find(
    (country) => country.id === market?.trading_pair?.fiat?.country_id
  )?.currency_name
;

  return sellerCountry ? sellerCountry : null; // Return null if country is not found
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

      pinia.setTokenLists(updatedTokensBals)

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
  loading.value = true; // Start loading indicator
  try {
    const data = await getMarketOffers(pageNumber.value); // Fetch market offers

    console.log(data)

    if (data.success) {
      // Retrieve the current user ID from Pinia store
      const userId = pinia.state.user.id; // Ensure 'pinia' and 'user' state are correctly set up

      // Filter and map offers that do not belong to the current user
      const filteredOffers = data.data.result
        .filter(offer => {
          const isOwnOffer = offer.user.id === userId;

          return !isOwnOffer; // Filter out user's own offers
        })
        .map(offer => {
          // Extract country ID from the offer's trading pair (if available)
          const countryId = offer.trading_pair?.fiat?.country_id;

          // Get the currency name from the country ID, or 'Unknown' if not found
          const countryCurrencyName = countryId
            ? pinia.state.allcountries.find(country => country.id === countryId)?.currency_name || 'Unknown'
            : 'Unknown';


          // Return the modified offer object with the currency name added
          return {
            ...offer,
            countryCurrencyName, // Add the currency name to each offer
          };
        });

      // Update the offers in the current component
      offers.value = filteredOffers;

      // Optionally, update the Pinia store with the filtered offers
      pinia.setMarketPlace(filteredOffers); // Ensure that setMarketPlace is a defined action in your Pinia store

    } else {
      // Handle any error returned by the API
      push.error(`${data.message}`);
    }
  } catch (e) {
    console.error('Failed to fetch market offers:', e); // Log any error during the API request
  } finally {
    loading.value = false; // Stop loading indicator
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

.dashboardSpace{
  margin-inline-end: 0px !important;
}

}
</style>