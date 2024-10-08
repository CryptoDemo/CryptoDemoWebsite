<template>
  <div class="offers-div">
    <div v-for="offer in personalOffers" :key="offer.id">
      <div class="py-3 mb-4" :class="isDark ? 'offers-cards-dark' : 'offers-cards-light'">
        <div class="px-4 mb-4" style="display: flex; justify-content: space-between; border: none;">

          <div>
            <div style="display: flex; align-items: center; line-height: 30px;">
              <img v-if="offer?.user?.profile_image" :src="offer.user.profile_image" alt="img" style="width: 25px; height: 25px; border-radius: 30px;" />
              <v-icon v-else style="width: 20px;">mdi-account-circle</v-icon>
              <span class="me-3 ml-2" style="font-size: 14px; text-transform: capitalize; font-weight: 600;">{{ offer?.user?.username }}</span>
            </div>

            <div style="display: flex; flex-direction: column; line-height: 30px;">
              <div class="d-flex">
                <img :src="offer.trading_pair?.crypto?.token?.icon" class="me-3" width="20px" />
                <span class="me-1" style="color: #8e9bae; font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 600;">{{ offer.trading_pair?.crypto?.token?.name }}</span>
              </div>
              <span :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal;font-weight: 500;">Minimum-Maximum buy limit</span>
              <span :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal;  font-weight: 500; ">Price model</span>
              <span :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal;  font-weight: 500; ">Unit value</span>
            </div>

          </div>

        <div style="margin-block-start: auto; line-height: 30px;">
            <div :class="isDark ? 'text-dark' : 'text-light'" style="display: flex; flex-direction: column; justify-content: flex-end;">
              <span class="resend-code" v-if="offer.user?.is_verified" style="font-size: 14px; font-weight: 600; text-align-last: right;">Verified</span>
              <span style="font-size: 14px; font-weight: 600; color: green; text-align-last: right;" v-else>Unverified User</span>
              <span style="display: flex; justify-content: end; font-size: 14px; font-weight: 600;"> {{ offer?.trading_pair?.crypto?.unit_value }} {{ offer?.trading_pair?.crypto?.token.symbol }}</span>
              <span :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 400; align-self: self-end;">{{
                  formatBalance(offer?.trading_pair?.fiat?.minimum_buy_limit) }} - {{formatBalance(offer?.trading_pair?.fiat?.maximum_buy_limit) }} {{ offer?.countryCurrencyName}}
              </span>
              <span :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px;font-style: normal; font-weight: 400;  align-self: self-end;"
                v-if="offer?.trading_pair?.fiat?.use_fixed_price">Fixed Price</span>
                <span :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 400;  align-self: self-end;" 
                v-else>Market Price</span>
              <span style="font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 400;  align-self: self-end;">{{ offer?.trading_pair?.fiat?.unit_value }} {{ offer.countryCurrencyName }}</span>

          </div>

        </div>

        </div>
           
        <v-btn @click="navigateTo('/account/marketplace/createOffer')" class="primary-btn1" style="width: 95%; display: flex; margin: auto; border-radius: 10px !important; font-weight: 600; height: 40px;">Edit offer</v-btn>
          <div style="display: flex; justify-content: end">
            <v-dialog max-width="500">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn @click.prevent="pinia.state.selected_coin_to_buy_from_marketplace = offer?.id" v-bind="activatorProps" variant="outlined" color="red" class="smaller-btn mt-2">Delete offer</v-btn>
              </template>

              <template v-slot:default>
                <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 15px; box-shadow: none;">
                  <v-card-text>
                    <div class="d-flex" style="flex-direction: column; justify-content: center;">
                      <img src="/img/Frame 41502.png" width="90" class="mx-auto mb-3"/>
                      <h3 class="text-center mb-3">Are you sure you want to delete this offer?</h3>
                      <span class=""> This action cannot be undone. Once deleted, this offer will no longer be visible on the marketplace.</span>
                    </div>
                  </v-card-text>

                  <v-card-actions class="px-3">

                    <v-btn @click="delete_My_Offers()" variant="tonal" style="letter-spacing: 0px; color: #E33E38; height: 50px; width: 100%; border-radius: 15px; margin-bottom: 10px; font-weight: 600; font-size: 16px; text-transform: unset;">Delete Permanently</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </div> 
      </div>
    </div>

     
      <div v-if="!personalOffers.length" style="text-align: center; margin-top: 80px; display: flex; flex-direction: column;align-items: center;">
        <img src="/svg/blue-market.svg" width="150" />
        <span class="mt-6" :class="isDark ? 'text-dark' : 'text-light'">No records found</span>
      </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useTheme } from "vuetify";
import { personal_Offer, deleteOffer } from "@/composables/requests/marketplace";

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore();
const pageNumber = ref(1);
const loading = ref(false);
const personalOffers = computed(() => pinia.state.MyOffers || []);

const offerID = ref([]);
offerID.value = pinia.state.MarketPlace.map(item => item.id);

const selectedCoinId = computed(() => pinia.state.selected_coin_to_buy_from_marketplace);


const get_allMy_Offers = async () => {
  try {
    const data = await personal_Offer(pageNumber.value);
    if (data.success) {
      console.log(data)
      let newOffers = data.data.result;

      newOffers = newOffers.map(offer => {
        const countryId = offer.trading_pair?.fiat.country_id;
        let countryCurrencyName = 'Unknown';
        if (countryId) {
          const country = pinia.state.allcountries.find(country => country.id === countryId);
          countryCurrencyName = country?.currency_name || 'Unknown';
        }
        return { ...offer, countryCurrencyName };
      });

      if (newOffers.length) {
        // Assuming filterByKey is a function to remove duplicates based on "id"
        const updatedOffers = filterByKey("id", [...personalOffers.value, ...newOffers]);
        pinia.setMyOffers(updatedOffers); // Update offers and count
        pageNumber.value++;
      }


    } else {
      push.error(`${data.message}`);
    }
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};


const delete_My_Offers = async () => {

  try {
    const data = await deleteOffer(pinia.state.selected_coin_to_buy_from_marketplace);
    if (data.success) {
      personalOffers.value = data.data;
      await get_allMy_Offers()
      pinia.setMyOffers(data.data);
    } else {
      push.error(`${data.message}`);
   
    }
  } catch (e) {
    console.log(e);
    loading.value = false;
  }
};



onMounted(() => {

get_allMy_Offers();

});
</script>

<style scoped>
.smaller-btn {
border-radius: 8px;
color: red;
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
width: 95%;
margin: auto;
margin-top: 4px;
height: 40px;
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


@media screen and (max-width: 600px) {
    .v-icon--size-default {
        font-size: calc(var(--v-icon-size-multiplier)* 1.5em);
        color: #8E9BAE;
        margin-left: 0px !important;
    }
}
</style>
