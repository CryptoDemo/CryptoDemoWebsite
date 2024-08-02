<template>
  <div>
    <Header :hide="true" :icon1="true" :icon3="true" :icon2="true" :wallet="true" />
    <v-container style="display: flex; margin-top: 110px;">
     
        <div class="pa-2 flex-lg-and-up hidden-sm-and-down">
          <Sd-nav1 style="border: none;" />
        </div>
     


        <div class="ml-4" style="width: 100%;">
            <div class="acct-settings" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="display: flex; justify-content: space-between; margin-bottom: 40px; margin-top: 12px; border: none">
              <span style=" font-size: 24px; font-style: 28px; font-weight: 600; color: #5892FF;">MarketPlace</span>
              <span class="mail-text" :class="isDark ? 'text-dark' : 'text-light'"> {{ pinia.state.user?.email }}</span>
            </div>
      

            <div class="d-flex">

         
            <div class="px-4" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="height: 480px; margin-bottom: 300px;  padding-top: 2px;">
               <v-row class="px-3" style="margin-top: 17px; margin-bottom: 25px; display: flex; justify-content: space-between;">

                <div class="button-container mr-4" style="display: flex; border-radius: 10px; width: fit-content; align-items: center;">
                  <v-btn class="me-3" :class="[selectedScreen ? 'personalBtn' : isDark ? 'marketBtn' : 'marketBtn-light']" @click.prevent="selectedScreen=true" >Market Offers</v-btn>
                  <v-btn :class="[!selectedScreen ? 'personalBtn' : isDark ? 'marketBtn' : 'marketBtn-light']" @click.prevent="selectedScreen=false">Personal Offers</v-btn>
                </div>


                <div style="display: flex; margin-inline-start: auto">
                  <v-menu>
                    <template v-slot:activator="{ props }">
                      <v-btn class="mx-auto marketBtn" :class="isDark ? 'active-offers-dark' : 'active-offers-light'" style="letter-spacing: 0px; box-shadow: none" v-bind="props">

                        <img width="25" class="me-2" :src="tokenIcon" style="position: absolute; left: 7%" />

                        <div style="display: grid; position: absolute; margin-right: 34%;">
                          <span class="slt" style="font-weight: 600;">{{ tokenSymbol }}</span>
                          <span v-if="!tokenSelected" style="margin-left: 60px; font-weight: 600;">All
                            Coins</span>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6"
                          :class="isDark ? 'close-btn' : 'close-btn-light'"
                          style="position: absolute; display: flex; right: 15px">
                          <path
                            d="M5.61643 5.99999C5.7553 6.00001 5.8928 5.973 6.0211 5.92049C6.14941 5.86799 6.266 5.79102 6.3642 5.69399L10.3104 1.794C10.5086 1.59813 10.62 1.33249 10.62 1.0555C10.62 0.77851 10.5086 0.512869 10.3104 0.317007C10.1122 0.121144 9.84345 0.0110984 9.56318 0.0110984C9.2829 0.0110984 9.01411 0.121144 8.81593 0.317007L5.61442 2.717L2.41292 0.317007C2.21473 0.121144 1.94594 0.0110984 1.66567 0.0110984C1.3854 0.0110984 1.11657 0.121144 0.91839 0.317007C0.720206 0.512869 0.608887 0.77851 0.608887 1.0555C0.608887 1.33249 0.720206 1.59813 0.91839 1.794L4.86464 5.69399C4.96329 5.79155 5.08052 5.86882 5.20957 5.92135C5.33861 5.97387 5.47688 6.00059 5.61643 5.99999Z" />
                        </svg>
                      </v-btn>
                    </template>

                    <v-list :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'"
                      style="border-radius: 15px; margin-top: 10px;">
                      <v-list-item style="display: contents">
                        <v-row dense style="max-width: 240px; height: 250px; overflow: scroll;">
                          <div v-for="tokens in pinia.state.tokenLists" :key="tokens.id" style="width: 100%;">
                            <v-list-item @click="selectToken(tokens)" style="display: flex;">
                              <div style="display: flex; align-items: center;">
                                <img :src="tokens.icon" width="30" class="me-2" />
                                <span class="currency-list">{{ tokens.name }}</span>
                              </div>
                            </v-list-item>
                          </div>
                        </v-row>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </v-row> 
           

               <div v-if="selectedScreen" class="offers-div" :class="isDark ? 'offers-cards-dark' : 'offers-cards-light'" style=" margin-bottom: 300px; overflow: scroll;">

                <div v-for="offer in filteredOffers" :key="offer.id">

                  <div class="py-3">
                    <div class="px-4" style="display: flex; justify-content: space-between; border: none;">
                      <div style="margin-top: 20px; margin-bottom: 10px;">
                        <div style="display: flex; align-items: center; margin-bottom: 14px">

                          <span class="me-3" style="font-size: 14px; font-weight: 600;">{{ offer?.user?.username}}</span>

                          <!-- <img :src="offer.sellerCountry" style="object-fit: cover; border-radius: 4px; height: 28px; width: 45px;"/> -->

                        </div>

                        <div class="d-flex mb-3">
                          <img :src="offer.trading_pair?.crypto?.token?.icon" class="me-2" width="20px" />
                          <span class="me-1"
                            style="color: #8e9bae; font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 600;line-height: 150%;">{{
                              offer.trading_pair?.crypto?.token?.name }}</span>
                          <img src="/svg/arrow-up.svg" width="15" class="mb-1 me-1" />
                        </div>

                        <div style="display: grid">
                          <span class="mb-3" :class="isDark ? 'text-dark' : 'text-light'"
                            style="font-family: Manrope; font-size: 14px; font-style: normal;font-weight: 500;line-height: normal;">Minimum - Maximum buy limit</span>
                          <span class="mb-3" :class="isDark ? 'text-dark' : 'text-light'"
                            style="font-family: Manrope; font-size: 14px; font-style: normal;  font-weight: 500; line-height: normal; ">Unit value</span>
                          <span class="mb-3" :class="isDark ? 'text-dark' : 'text-light'"
                            style="font-family: Manrope; font-size: 14px; font-style: normal;  font-weight: 500; line-height: normal; ">Price model</span>
                        </div>
                      </div>

                      <div style="margin-bottom: 10px; margin-block-start: auto">
                        <div
                          style="display: flex; flex-direction: column; margin-bottom: 14px; justify-content: flex-end;">
                          <span v-if="offer.user?.is_verified" class="resend-code" style="font-weight: 500;  text-align-last: right; margin-bottom: 11px; margin-top: 16px;">Verified</span>
                          <p v-else>Unverified User</p>
                          <span
                            style="display: flex; justify-content: end; margin-bottom: 11px; font-size: 14px; font-weight: 600;">
                            {{ offer?.trading_pair?.crypto?.unit_value }} {{ offer?.trading_pair?.crypto?.token.symbol
                            }}</span>
                          <span :class="isDark ? 'text-dark' : 'text-light'"
                            style="font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 400; line-height: normal; margin-bottom: 11px; align-self: self-end;">{{
                              formatBalance(offer?.trading_pair?.fiat?.minimum_buy_limit) }} - {{
                              formatBalance(offer?.trading_pair?.fiat?.maximum_buy_limit) }} {{ offer?.countryCurrencyName
                            }}</span>
                          <span :class="isDark ? 'text-dark' : 'text-light'"
                            style=" font-family: Manrope; margin-bottom: 11px; font-size: 14px; font-style: normal;  font-weight: 600;line-height: normal; text-align-last: right;">{{
                              offer?.trading_pair?.fiat?.unit_value }}</span>
                          <span :class="isDark ? 'text-dark' : 'text-light'"
                            style="font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 400; margin-bottom: 2px; line-height: normal; align-self: self-end;"
                            v-if="offer?.trading_pair?.fiat?.use_fixed_price">Fixed Price</span>
                          <span :class="isDark ? 'text-dark' : 'text-light'"
                            style="font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 400; margin-bottom: 2px; line-height: normal; align-self: self-end;"
                            v-else>Market Price</span>
                        </div>


                        <div style="display: grid">

                          <div style="display: flex; justify-content: end"> 
                          <v-dialog max-width="500">
                              <template v-slot:activator="{ props: activatorProps }">
                                <v-btn @click.prevent="pinia.state.selected_coin_to_buy_from_marketplace = offer?.id" v-bind="activatorProps" class="smaller-btn mt-2 mb-2">Buy Offer</v-btn>
                              </template>
      
                            <template v-slot:default="{  }">
                              <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 15px; box-shadow: none;">
                                <v-card-text>
                                  <h3 class="text-center py-3">View Offer</h3>
                                  <span style="font-size: 14px;">By continuing, you will be buying <span style="font-weight: 600;">{{ offer.trading_pair?.crypto?.token?.name }}</span> from {{ offer?.user?.username }}</span>
                                  <input type="number" placeholder="Enter Ammount to pay" v-model="amount_to_pay" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="outline: none; height: 60px; padding-right: 25px!important; position: relative; border-radius: 15px; width: 100%; margin-top: 10px; padding-left: 15px;"/>
                        
                                  <v-btn style="min-width: 70px; height: 56px; position: absolute; margin-top: 12px; border-radius: 15px; background: rgba(19, 29, 53, 1); box-shadow: none; right: 26px; letter-spacing: 0px;  text-transform: capitalize;"> 
                                    <span class="currency-list">{{ pinia.state.preferredCurrency }}</span>
                                  </v-btn>

                                  <span style="font-size: 14px;">Range Unit Value 
                                    <span style="font-weight: 600;">{{offer?.trading_pair?.fiat?.minimum_buy_limit }} - {{ offer?.trading_pair?.fiat?.maximum_buy_limit }} {{ offer?.countryCurrencyName }} </span>
                                  </span>

                                <div class="mt-5">
                                  <span style="font-weight: 600; font-size: 14px;">Expected ammount you will receive</span>
                                  <input type="number" disabled placeholder="Ammount to receive" v-model="ammount_to_receive" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="outline: none; height: 60px; padding-right: 25px!important; position: relative; border-radius: 15px; width: 100%; margin-top: 10px; padding-left: 15px;"/>
                          
                                  <v-btn style="min-width: 70px; height: 56px; position: absolute; margin-top: 12px; border-radius: 15px; background: rgba(19, 29, 53, 1); box-shadow: none; right: 26px; letter-spacing: 0px;  text-transform: capitalize;"> 
                                    <img :src="offer.trading_pair?.crypto?.token?.icon" width="30px" />
                                  </v-btn>
                                  <span style="font-size: 14px;">You will receive this ammount in 
                                    <span style="font-weight: 600;">{{ offer.trading_pair?.crypto?.token?.symbol }}</span>
                                  </span>
                                </div>

                                </v-card-text>
      
                                <div class="px-5 mb-3" style="justify-content: space-between;">
                                  <v-btn style="width: 100%; height: 50px; margin-bottom: 10px; font-weight: 600; border: 1px solid var(--Primary-80, #5892FF); background: inherit; border-radius: 16px; color: #2873FF; letter-spacing: 0px; text-transform: unset;">Chat with the seller</v-btn>
                                  <v-btn @click="Buy_Offer()" class="primary-btn1" style="width: 100%; height: 50px; margin-bottom: 10px; font-weight: 600;">Buy Coin</v-btn>
                                </div>
                              </v-card>
                            </template>

                          </v-dialog>
      
      
                        
                          </div> 


                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="!filteredOffers.length"
                  style="text-align: center; margin-top: 80px; display: flex; flex-direction: column;align-items: center;">
                  <img src="/svg/emptyState.svg" width="250" />
                  <span class="mt-6">No records found</span>
                </div>

              </div> 

              <div v-else style="height: 550px; margin-bottom: 300px; overflow: scroll;">
                <MyOffers />
              </div>

            </div>

            <div class="ml-5" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="padding: 10px; border-radius: 10px; width: 25%;;">
           
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn @click.prevent="toggleChevron()" v-bind="props" :class="isDark ? 'offers-cards-dark' : 'offers-cards-light'"  style="width: fit-content; height: 50px; margin-top: 3px; border-radius: 15px;  box-shadow: none; letter-spacing: 0px;width: 100%; display: flex; justify-content: space-between; text-transform: capitalize;"> 
                    <span class="currency-list">{{ pinia.state.preferredCurrency }}</span>
                    <div style="display: flex; position: absolute; right: 1%">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z" />
                      </svg>
                    </div>
                  </v-btn>
                </template>

                <v-list style="width: 65%; border-radius: 10px;" :class="isDark ? 'profile-cards-dark':'profile-cards-light'"  >
                  <v-list-item>
                    <v-row dense >
                        <v-col v-for="(currency, index) in pinia.state.allcountries" class="" sm="12" :key="index" >
                      
                          <v-list-item-title  @click="pinia.state.preferredCurrency=currency.currency_name; pinia.state.Selectedcurrency_code = currency.currency_code"> 
                            <div style="display: flex; justify-content: flex-start;">
                              <span class="currency-list my-2">{{ currency.currency_name }}</span>
                            </div>

                          </v-list-item-title>
                        </v-col>
                    </v-row>
                  </v-list-item>
                </v-list>
              </v-menu>  


              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn @click.prevent="toggleChevron()" v-bind="props" :class="isDark ? 'offers-cards-dark' : 'offers-cards-light'"  style="width: fit-content; height: 50px; margin-top: 3px; border-radius: 15px; margin-top: 10px;  box-shadow: none; letter-spacing: 0px;width: 100%; display: flex; justify-content: space-between; text-transform: capitalize;"> 
                    <span class="currency-list">{{ selectedPaymentMethod }}</span>
                    <div style="display: flex; position: absolute; right: 1%">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z" />
                      </svg>
                    </div>
                  </v-btn>
                </template>

                <v-list style="width: 65%; border-radius: 10px;" :class="isDark ? 'profile-cards-dark':'profile-cards-light'"  >
                  <v-list-item>
                    <v-row dense >
                        <v-col v-for="(options, index) in paymentMethods" class="" sm="12" :key="index" >
                      
                          <v-list-item-title  @click="selectedPaymentMethod=method;"> 
                            <div style="display: flex; justify-content: flex-start;">
                              <span class="currency-list my-2">{{ method }}</span>
                            </div>

                          </v-list-item-title>
                        </v-col>
                    </v-row>
                  </v-list-item>
                </v-list>
              </v-menu>  
            

            
            </div>

          </div>

        </div>

    </v-container>
    <Footer class="flex-lg-and-up hidden-sm-and-down" />
    <Mobile-footer class="mobile-footer" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
import { getMarketOffers } from "@/composables/requests/marketplace";

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore();
const selectedScreen = ref(true)
const pageNumber = ref(1);
const loading = ref(false);
const tokenIcon = ref();
const tokenSymbol = ref();
const amount_to_pay = ref();
const ammount_to_receive = ref();
const offers = ref([]);
const isCreating = ref();
const tokenSelected = ref(false);

const selectedPaymentMethod = ref("Bank Transfer");
const method = ref();

const paymentMethods = [
  'hello', 
  'hiii',  
  'heyoo' 
];

const selectToken = (tokens) => {
  tokenIcon.value = tokens.icon;
  tokenSymbol.value = tokens.symbol;
  tokenSelected.value = true;
};


const get_allMarket_Offers = async () => {
  loading.value = true;
  try {
    const data = await getMarketOffers(pageNumber.value);
    
    if (data.success) {
      const updatedOffers = data.data.result.map(offer => {
        const countryId = offer.trading_pair?.fiat.country_id;
        const countryCurrencyName = countryId 
          ? pinia.state.allcountries.find(country => country.id === countryId)?.currency_name || 'Unknown'
          : 'Unknown';

        return { ...offer, countryCurrencyName };
      });

      offers.value = updatedOffers;
      pinia.setMarketPlace(updatedOffers);

    } else {
      push.error(`${data.message}`);
    }
    
  } catch (e) {
    console.error('Failed to fetch market offers:', e);
  } finally {
    loading.value = false;
  }
};


const offerID = ref([]);
offerID.value = pinia.state.MarketPlace.map(item => item.id);

const selectedCoinId = computed(() => pinia.state.selected_coin_to_buy_from_marketplace);
const productID = computed(() => offerID.value.find(id => id === selectedCoinId.value));

watch(productID, (newVal) => {
});


// Create an order
const Buy_Offer = async () => {
  const payload = {
    purchase_amount: amount_to_pay.value
  }
  isCreating.value = true;
  try {
    const data = await createOrder(payload, productID.value);
    if (data.success) {

      amount_to_pay.value = ""

    } else {
      push.error(data.message);
    }
    isCreating.value = false;
  } catch (e) {
    console.log(e);
    isCreating.value = false;
  }
};

const filteredOffers = computed(() => {
  if (!tokenSymbol.value) return offers.value;
  return offers.value.filter(offer => offer.trading_pair?.crypto?.token?.symbol === tokenSymbol.value);
});



const matchingCountries = pinia.state.MarketPlace.map(marketplaceEntry => {
  const sellerCountry = pinia.state.allcountries.find(country => country.country_name === marketplaceEntry.user.country)?.flag_url;
});

const isChevronToggled = ref(false);
const toggleChevron = () => {
    isChevronToggled.value = !isChevronToggled.value;
};



// const debouncedUpdate = debounce(() => {
//   ammount_to_receive.value = null;
//   if (
//     amount_to_pay.value >= offerDetails.value?.trading_pair?.fiat.minimum_buy_limit &&
//     amount_to_pay.value <= offerDetails.value?.trading_pair?.fiat.maximum_buy_limit
//   ) {
//     ammount_to_receive.value = parseFloat(
//       (offerDetails.value?.trading_pair?.crypto?.unit_value * amount_to_pay.value) / offerDetails.value?.trading_pair?.fiat?.unit_value
//     );
//   }
// }, 1000, 3000);

// Watch the amount_to_pay and call the debounced function
// watch(amount_to_pay, debouncedUpdate);



onMounted(() => {
  get_allMarket_Offers();
}
);
</script>

<style scoped>


/* .active-offers-dark {
  background: var(--secondary-background, #10192D);
  color: #8e9bae !important;
}

.active-offers-light {
  background: var(--secondary-background, #f8fafc);
  color: #646464 !important;
} */

.smaller-btn {
border-radius: 8px;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);
display: flex;
padding: 6px 16px;
justify-content: center;
align-items: center;
color: #fff;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
text-transform: unset;
letter-spacing: 0px;
box-shadow: none;
width: 100%;
height: 40px;
}

.personalBtn{
border-radius: 10px;
background: var(--linear-card, linear-gradient(270deg, #1DA1DB -11.75%, #2873FF 119.96%));
display: flex;
width: 170px;
height: 45px;
/* padding: 12px 98px; */
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
font-family: Manrope;
font-size: 15px;
font-style: normal;
font-weight: 700;
box-shadow: none;
color: white;
text-transform: capitalize;
letter-spacing: 0px;
}

.marketBtn{
border-radius: 10px;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 700;
width: 170px;
height: 45px;
/* padding: 12px 98px; */
background: inherit;
box-shadow: none;
color: #969696;
background: #060A1D;
text-transform: capitalize;
letter-spacing: 0px;
}

.marketBtn-light{
background: white;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
width: 228px;
height: 48px;
box-shadow: none;
text-transform: capitalize;
letter-spacing: 0px;
}

.btn-segment{
border: 1px solid #1B2537;
}

.notivue-notification {
  position: relative;
  z-index: 1000000 !important; /* Set this value higher than Vuetify modal */
}


.user-location {
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.close-btn {
  fill: white;
}

.close-btn-dark {
  fill: #10192d;
}

.offers-div::-webkit-scrollbar {
  display: none;
}

.offers-div {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.offers-cards-dark{
background: #0D1526;
height: fit-content;
border-radius: 10px;
}
</style>
