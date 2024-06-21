<template>
  <div :class="isDark ? 'profile':'profile-light'" class="wallet-nav">
    <div class="d-flex" style="align-items: baseline; justify-content: space-between; margin-top: -30px; ">
      <span class="sm-num" :class="isDark ? 'country-name' : 'country-name-light'" style="font-size: 16px; font-style: normal;font-weight: 600;">Balance</span>
      <BlockChainNetwork/>
    </div>
        <div :class="isDark ?'txn-cards-dark' : 'txn-cards-light'" style="margin-top: 25px; margin-bottom: 25px; height: 130px; position: relative; display: flex; justify-content: center; align-items: center;">
      
          <div style="display: flex; flex-direction: column;">
            <span class="lg-num">{{ pinia.state.Selectedcurrency_code }} {{ formatBalance(balanceData) }}</span>
            <!-- <span class="sm-num mt-2">0.0140 BTC</span> -->
          </div>
          
        </div>
        
        <v-row class="" style="display: flex; justify-content: space-between;">
          <v-col v-for="token in pinia.state.tokenLists.slice(0, 4)" :key="token.id" class="d-flex" cols="6">
              <div class="d-flex">
                <div style="display: flex; align-items: center;">
                  <v-progress-circular class="me-2"
                    :size="30"
                    :width="5"
                    model-value="100"
                    :color=token.icon_dominant_color
                  >
                  </v-progress-circular>

                </div>
                <div style="display: flex; flex-direction: column;">
                  <span class="coin-perc mt-1">{{ token.symbol }}</span>
                  <span class="sm-num" :class="isDark ? 'country-name' : 'country-name-light'" style="font-weight: 500;">{{formatBalance (token.balance) }}</span>
                </div>
              </div>
            
          </v-col>
        </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import { getSummedBalance } from "@/composables/requests/tokens";
const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore()
const balanceData = ref(null);
const allCountries = pinia.state.allcountries;
const preferredCurrency = pinia.state.preferredCurrency;
const selectedCountryId = allCountries.find(country=>country.currency_name==preferredCurrency);
const chain = computed(()=>pinia.state.selectedNetwork);


const getSummedBal = async () => {
  if (pinia.state.isAuthenticated) {
    try {
      const data = await getSummedBalance(chain.value.toLowerCase(), selectedCountryId.id)
      if (data.success) {
        balanceData.value = data.data;
        }else {
          console.error("Error:", data.message);
      }

    } catch (error) {
      console.log(error)
    }
  }
};

const coinsWithBalance = computed(() => {
  return pinia.state.tokenLists.filter(token => token.balance > 0);
});

const dominantColor = computed(() => {
  if (coinsWithBalance.value.length > 0) {
    // Assuming tokens have a property `icon_dominant_color`
    return coinsWithBalance.value.icon_dominant_color; // Adjust this logic to select the appropriate dominant color
  } else {
    return 'white';
  }
});

onMounted(async () => {
   getSummedBal();

});
</script>

<style scoped>
.wallet-nav{
background: var(--secondary-background, #12181F);
padding: 31px;
width: 286px;
border-radius: 15px;
}
.profile{
background: var(--secondary-background, #10192D);
}
.profile-light{
background: linear-gradient(180deg, rgba(248, 250, 252, 0.00) 65.19%, #F8FAFC 100%) !important;
box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 4px;
border: 1px solid #E2E8F0;;
}
.lg-num{
text-align: center;
font-family: Manrope;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

.sm-num{
color: var(--White, var(--Colors-Base-white, #FFF));
text-align: center;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.coin-perc{
color: #9E9FA4;
text-align: center;
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
}

.txn-cards-dark {
  background: #162138;
  padding: 10px;
  border-radius: 15px;
}
.txn-cards-light {
  background: #edf3ff;
  padding: 10px;
  border-radius: 15px;
}
.country-name{
color: white !important;
}
.country-name-light{
color: #10192D !important;
}
</style>