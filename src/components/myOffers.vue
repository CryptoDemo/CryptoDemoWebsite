<template>
  <div class="offers-div">
    <div v-for="(offer, i) in personalOffers" :key="offer.id">
      <div class="py-3">
        <div class="px-4" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="display: flex; justify-content: space-between; border: none;">
          <div style="margin-top: 20px; margin-bottom: 10px;">
            <div style="display: flex; align-items: center; margin-bottom: 14px;">
              <img v-if="offer?.user?.profile_image" :src="offer.user.profile_image" alt="img" style="width: 30px; height: 30px; border-radius: 30px;" />
              <v-icon v-else style="width: 20px;">mdi-account-circle</v-icon>
              <span class="me-3 ml-2" style="font-size: 14px;">{{ offer?.user?.username }}</span>
            </div>
            <div style="display: grid">
              <span class="mb-3" :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal;font-weight: 500;line-height: normal;">Unit range values</span>
              <span class="mb-3" :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal;  font-weight: 500; line-height: normal;">Price model</span>
              <div class="d-flex mb-3">
                <img :src="offer.trading_pair?.crypto?.token?.icon" class="me-3" width="20px" />
                <span class="me-1" style="color: #8e9bae; font-family: Manrope; font-size: 12px; font-style: normal; font-weight: 600;line-height: 150%;">{{ offer.trading_pair?.crypto?.token?.name }}</span>
                <img src="/svg/arrow-up.svg" width="15" class="mb-1 me-1" />
              </div>
            </div>
          </div>
          <div style="margin-top: 20px; margin-bottom: 10px; margin-block-start: auto">
            <div style="display: flex; flex-direction: column; margin-bottom: 14px; justify-content: flex-end;">
              <span v-if="offer.user?.is_verified" style="font-size: 14px; font-weight: 600; color: green; text-align-last: right; margin-bottom: 20px;">Verified</span>
              <p v-else>Unverified User</p>
              <span :class="isDark ? 'transfer-dark' : 'transfer-light'" style="font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal; align-self: self-end;">Limit {{ offer?.trading_pair?.fiat?.minimum_buy_limit }} - {{ offer?.trading_pair?.fiat?.maximum_buy_limit }} {{ offer?.countryCurrencyName }}</span>
            </div>
            <div style="display: grid">
              <span :class="isDark ? 'text-dark' : 'text-light'" class="mb-3" style=" font-family: Manrope; font-size: 14px; font-style: normal;  font-weight: 600;line-height: normal; text-align-last: right;">{{ offer?.trading_pair?.fiat?.unit_value }}</span>
              <div style="display: flex; justify-content: end">


                <v-dialog max-width="500">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-btn @click.prevent="pinia.state.selected_coin_to_buy_from_marketplace = offer?.id" v-bind="activatorProps" class="smaller-btn" style="background: red;">Delete offer</v-btn>
                  </template>

                  <template v-slot:default="{ isActive }">
                    <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 15px; box-shadow: none;">
                      <v-card-text>
                        <div class="d-flex" style="flex-direction: column; justify-content: center;">
                          <img src="/img/Frame 41502.png" width="90" class="mx-auto mb-3"/>
                          <h3 class="text-center mb-3">Are you sure you want to delete this offer?</h3>
                          <span class=""> This action cannot be undone. Once deleted, this offer will no longer be visible on the marketplace.</span>
                        </div>
                      </v-card-text>

                      <v-card-actions class="px-3">

                        <v-btn  @click="delete_My_Offers()" variant="tonal" style="letter-spacing: 0px; color: #E33E38; height: 50px; width: 100%; border-radius: 15px; margin-bottom: 10px; font-weight: 600; font-size: 16px; text-transform: unset;">Delete Permanently</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

     
      <div v-if="!personalOffers.length" style="text-align: center; margin-top: 80px; display: flex; flex-direction: column;align-items: center;">
        <img src="/svg/emptyState.svg" width="250"/>
        <span class="mt-6">You have not created any personal offers yet</span>
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
const personalOffers = ref(pinia.state.MyOffers || []);

const offerID = ref([]);
offerID.value = pinia.state.MarketPlace.map(item => item.id);

console.log(offerID)

const selectedCoinId = computed(() => pinia.state.selected_coin_to_buy_from_marketplace);
console.log("selectedID", selectedCoinId)

const productID = computed(() => offerID.value.find(id => id === selectedCoinId.value));
console.log("product", productID)

watch(productID, (newVal) => {
  console.log(newVal)
});

const get_allMy_Offers = async () => {

  try {
    const data = await personal_Offer(pageNumber.value);
    if (data.success) {
      personalOffers.value = data.data.result;

      personalOffers.value = personalOffers.value.map(offer => {
        const countryId = offer.trading_pair?.fiat.country_id;
        let countryCurrencyName = 'Unknown';
        if (countryId) {
          const country = pinia.state.allcountries.find(country => country.id === countryId);
          countryCurrencyName = country?.currency_name || 'Unknown';
        }
        return { ...offer, countryCurrencyName };
      });

      if(data?.data?.result?.length){
      personalOffers.value = filterByKey("id",[...personalOffers.value,...data?.data?.result]);
      pinia.setMyOffers(data.data.result);
      pageNumber.value++;

    }
      console.log(personalOffers.value);
    } else {
      push.error(`${data.message}`);
   
    }
  } catch (e) {
    console.log(e);
    loading.value = false;
  }
};

const delete_My_Offers = async () => {

  try {
    const data = await deleteOffer(productID.value);
    if (data.success) {
      personalOffers.value = data.data;
      console.log(personalOffers.value);
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
}

.offers-div::-webkit-scrollbar {
  display: none;
}

.offers-div {
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}

</style>
