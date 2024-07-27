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
                <span class="resend-code me-1">See More...</span>
              </div>

                <div v-for="offer in pinia.state.MarketPlace" :key="offer.id"  :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="height: 100px; margin-top: 5px; margin-bottom: 30px; border-radius: 10px; display: flex; justify-content: space-between; padding: 15px; align-items: center;">
                
                <div style="display: flex; flex-direction: column;">
                  <span style="margin-bottom: 11px; font-weight: 600;">{{ offer.user.username }}</span>
                  <img :src="offer.sellerCountry" style="height: 50px; width: 50px;"/>
                  <span class="mb-3" :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal;font-weight: 500;line-height: normal;">Minimum - Maximum buy limit</span>
                </div>

                <div style="display: flex; flex-direction: column;">
                  <span v-if="offer.user?.is_verified" class="resend-code" style="font-weight: 500;  text-align-last: right; margin-bottom: 11px;">Verified</span>
                  <span v-else>Unverified User</span>
                  <span style="font-weight: 600;">{{formatBalance(offer?.trading_pair?.fiat?.minimum_buy_limit) }} - {{ formatBalance(offer?.trading_pair?.fiat?.maximum_buy_limit) }} {{ offer?.countryCurrencyName }} </span>
                </div>

                </div>

              <div>
                <v-carousel height="400"  cycle  :show-arrows="false" style="border-radius: 10px;">
                  <v-carousel-item v-for="(slide, i) in slides" :key="i">
  
                    <v-sheet height="100%">
                      <div class="d-flex fill-height justify-center align-center">
                        <div class="text-h2">
                          {{ slide }} Slide
                        </div>
                      </div>
                    </v-sheet>
                  </v-carousel-item>
                </v-carousel>
              </div>

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

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();
const pageNumber = ref(1);
const isLoading = ref();

const slides = ref([
    'First',
    'Second',
    'Third',
    'Fourth',
  ]);


const matchingCountries = pinia.state.MarketPlace.map(marketplaceEntry => {
  const sellerCountry = pinia.state.allcountries.find(country => country.country_name === marketplaceEntry.user.country)?.flag_url;

  console.log("newz.... ", sellerCountry)
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


onMounted(() => {
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
</style>