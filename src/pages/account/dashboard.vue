<template>
  <div>
    <Header :hide="true" :icon1="true" :icon3="true" :icon2="true" :wallet="true"/>
    <v-container>
      <div style="margin-top:100px; display: flex; width: 100%;">
        <div class="pa-2 ma-2">
          <Sd-nav1/>
        </div>
         
            <div>
              <div class="mt-3 pa-2">
                <div class="acct-settings" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="display: flex; width: 809px; justify-content: space-between;">    
                  <span class="partners-text"  :class="isDark ? 'text-dark':'text-light'"> Complete verification to access Demo products and services.</span>
                  <div> <v-btn class="primary-btn" style="height: 37px !important; width: 120px; border-radius: 8px; background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);text-transform: capitalize; color: white; letter-spacing: 0px">Verify</v-btn> </div>
                </div>

              <div style="width: 810px;">
                <DashboardCoin/>
              </div>
           
              <div style="margin-top: -110px; width: 810px; margin-bottom: 30px;">
                <Coins/>
              </div>

            
              <div style="display: flex; justify-content: space-between;">
                <div style="display: flex; flex-direction: column;">
                  <span style="font-weight: 600; font-size: 16px;">Buy Offer</span>
                  <span>Choose your preferred offer type to purchase</span>
                </div>
                <span @click="navigateTo('/account/marketplace/activeOffers')" class="resend-code me-1">See More...</span>
              </div>

                <v-card link @click="navigateTo('/account/marketplace/activeOffers')" v-for="offer in pinia.state.MarketPlace" :key="offer.id"  :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="height: 100px; margin-top: 5px; margin-bottom: 30px; border-radius: 16px; display: flex; justify-content: space-between; padding: 15px; align-items: center;">
                
                <div style="display: flex; flex-direction: column;">
                  <span style="margin-bottom: 11px; font-weight: 600;">{{ offer.user.username }}</span>
                  <!-- <img :src="offer.sellerCountry" style="height: 50px; width: 50px;"/> -->
                  <span class="mb-3" :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal;font-weight: 500;line-height: normal;">Minimum - Maximum buy limit</span>
                </div>

                <div style="display: flex; flex-direction: column;">
                  <span v-if="offer.user?.is_verified" class="resend-code" style="font-weight: 500;  text-align-last: right; margin-bottom: 11px;">Verified</span>
                  <span v-else>Unverified User</span>
                  <span style="font-weight: 600;">{{formatBalance(offer?.trading_pair?.fiat?.minimum_buy_limit) }} - {{ formatBalance(offer?.trading_pair?.fiat?.maximum_buy_limit) }} {{ offer?.countryCurrencyName }} </span>
                </div>

                </v-card>

              <!-- <div> -->
                <v-carousel height="400"  cycle  :show-arrows="false" class="carousel-item" style="border-radius: 10px;">
                  <v-carousel-item v-for="(slide, i) in slides" :key="i">
  
                    <v-sheet :style="`background: ${slide.background};`"  height="100%" style="padding-top: 20px;">
                      <div class="d-flex fill-height justify-center align-center">
                        <div style="display: flex; justify-content: space-between">
                          <div style="display: flex; flex-direction: column;">
                            <span style="font-size: 32px; font-weight: 700; line-height: 140%; font-family: SF Pro Display; margin-bottom: 16px; margin-left: 28px;" :style="i === slides.length - 1 ? { marginTop: '35px', marginLeft: '0px' } : {}">
                              {{ slide.title }}
                            </span>
                      

                            <div  v-if="i === 2" style="display: flex; margin-right: 30px; margin-bottom: 16px;">
                                <span class="carousel-text">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M9.99996 1.66663C5.40829 1.66663 1.66663 5.40829 1.66663 9.99996C1.66663 14.5916 5.40829 18.3333 9.99996 18.3333C14.5916 18.3333 18.3333 14.5916 18.3333 9.99996C18.3333 5.40829 14.5916 1.66663 9.99996 1.66663ZM13.9833 8.08329L9.25829 12.8083C9.14163 12.925 8.98329 12.9916 8.81663 12.9916C8.64996 12.9916 8.49163 12.925 8.37496 12.8083L6.01663 10.45C5.77496 10.2083 5.77496 9.80829 6.01663 9.56663C6.25829 9.32496 6.65829 9.32496 6.89996 9.56663L8.81663 11.4833L13.1 7.19996C13.3416 6.95829 13.7416 6.95829 13.9833 7.19996C14.225 7.44163 14.225 7.83329 13.9833 8.08329Z" fill="#FAFAFA"/>
                                  </svg>
                                  <span class="ml-1">{{ slide.description }}</span>
                                </span>

                                <span class="carousel-text ml-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M9.99996 1.66663C5.40829 1.66663 1.66663 5.40829 1.66663 9.99996C1.66663 14.5916 5.40829 18.3333 9.99996 18.3333C14.5916 18.3333 18.3333 14.5916 18.3333 9.99996C18.3333 5.40829 14.5916 1.66663 9.99996 1.66663ZM13.9833 8.08329L9.25829 12.8083C9.14163 12.925 8.98329 12.9916 8.81663 12.9916C8.64996 12.9916 8.49163 12.925 8.37496 12.8083L6.01663 10.45C5.77496 10.2083 5.77496 9.80829 6.01663 9.56663C6.25829 9.32496 6.65829 9.32496 6.89996 9.56663L8.81663 11.4833L13.1 7.19996C13.3416 6.95829 13.7416 6.95829 13.9833 7.19996C14.225 7.44163 14.225 7.83329 13.9833 8.08329Z" fill="#FAFAFA"/>
                                  </svg>
                                  <span class="ml-1">{{ slide.description1 }}</span>
                                </span>

                            </div>

                            <div  v-if="i === 2" style="display: flex;">
                              <span class="carousel-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                  <path d="M9.99996 1.66663C5.40829 1.66663 1.66663 5.40829 1.66663 9.99996C1.66663 14.5916 5.40829 18.3333 9.99996 18.3333C14.5916 18.3333 18.3333 14.5916 18.3333 9.99996C18.3333 5.40829 14.5916 1.66663 9.99996 1.66663ZM13.9833 8.08329L9.25829 12.8083C9.14163 12.925 8.98329 12.9916 8.81663 12.9916C8.64996 12.9916 8.49163 12.925 8.37496 12.8083L6.01663 10.45C5.77496 10.2083 5.77496 9.80829 6.01663 9.56663C6.25829 9.32496 6.65829 9.32496 6.89996 9.56663L8.81663 11.4833L13.1 7.19996C13.3416 6.95829 13.7416 6.95829 13.9833 7.19996C14.225 7.44163 14.225 7.83329 13.9833 8.08329Z" fill="#FAFAFA"/>
                                </svg>
                                <span class="ml-1">{{ slide.description2 }}</span>
                              </span>

                              <span class="carousel-text ml-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                  <path d="M9.99996 1.66663C5.40829 1.66663 1.66663 5.40829 1.66663 9.99996C1.66663 14.5916 5.40829 18.3333 9.99996 18.3333C14.5916 18.3333 18.3333 14.5916 18.3333 9.99996C18.3333 5.40829 14.5916 1.66663 9.99996 1.66663ZM13.9833 8.08329L9.25829 12.8083C9.14163 12.925 8.98329 12.9916 8.81663 12.9916C8.64996 12.9916 8.49163 12.925 8.37496 12.8083L6.01663 10.45C5.77496 10.2083 5.77496 9.80829 6.01663 9.56663C6.25829 9.32496 6.65829 9.32496 6.89996 9.56663L8.81663 11.4833L13.1 7.19996C13.3416 6.95829 13.7416 6.95829 13.9833 7.19996C14.225 7.44163 14.225 7.83329 13.9833 8.08329Z" fill="#FAFAFA"/>
                                </svg>
                                <span class="ml-1">{{ slide.description3 }}</span>
                              </span>
                            </div>

                          </div>
                          <img :src="slide.image" width="350" alt="Slide Image" :style="i === slides.length - 1 ? { width: '280px', height: '350px', borderRadius: '10px' } : {}">
                        
                        <div class="secureWallet">

                        </div>

                        </div>
                      </div>
                    </v-sheet>
                  </v-carousel-item>
                </v-carousel>
              <!-- </div> -->

    

              <div style="margin-top: -130px;">
                  <Invite/>
              </div>

              </div>
            </div>
          </div>
    </v-container>
    <Footer/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import { getBanners } from '@/composables/requests/admin'
import {getTokens,  getTokenBalance, currencyConverter } from "@/composables/requests/tokens";
const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();
const conversionResult = ref([]);
const pageNumber = ref(1);
const isLoading = ref();
const network = pinia.state.selectedNetwork.toLowerCase();
const selectedNetworkId = pinia.state.BlockchainNetworks.find(b=>b.name==network)?.id;


const tokensForSelectedNetwork = pinia.state.tokenLists?.filter(token => token?.token_networks?.find(tkn=>tkn.blockchain_id === selectedNetworkId));

const symbols = tokensForSelectedNetwork.map(token => token.symbol);

// const chainIcon = pinia?.state?.tokenLists?.find(c => c.symbol === "BNB" || c.symbol === "TRX");

const slides = ref([
{
          title: "Experience peer-to-peer cryptocurrency transactions with diverse payment options ",
          image: "/img/coinframe.png",
          background: "linear-gradient(113deg, #218380 22.37%, #145553 81.84%)", // Custom background color for Slide 1
        },
        {
          title: "Trade your favourite coins at your choice price and preferred payment option.",
          image: "/img/crypto1.png",
          background: "#FF7A5A", // Custom background color for Slide 2
        },
        {
          title: "FEATURES",
          image: "/img/cryptocurency-dist.png",
          description: "Multiple payment options",
          description1: "Vendor fixed prices",
          description2: "Secure Escrow hub",
          description3: "Free wallet",
          background: "#2B539A", // Custom background color for Slide 3
        },
  ]);

const getTokens_ = async () => {
  try {
    const data = await getTokens(pageNumber.value, pinia.state.selectedNetwork.toLowerCase());

    if (data.success) {
      const fetchedTokens = data.data.result;
      console.log(fetchedTokens);

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
       // pinia.setTokenBalance(updatedTokens);

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
        conversionResult.value = data.data;

        // pinia.setTokenLists(...data.data, addMinutes(5))
        
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



const matchingCountries = pinia.state.MarketPlace.map(marketplaceEntry => {
const sellerCountry = pinia.state.allcountries.find(country => country.country_name === marketplaceEntry.user.country)?.flag_url;

});

const fetchBanners = async () => {
  try {
    isLoading.value = true; // Start loading indicator

    // Fetch data using the getBanners function
    const data = await getBanners(pageNumber.value);

    // Check if the fetch was successful
    if (data.success) {
    } else {
      console.error("Error:", data.message); // Log the error message if fetch failed
    }

  } catch (error) {
    console.log(error.message); // Log any caught errors
  } finally {
    isLoading.value = false; // End loading indicator regardless of success or failure
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
getTokens_();
getTokenBals();
convertCurrencies();
fetchBanners();
});
</script>

<style scoped>
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
}
</style>