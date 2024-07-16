<template>
  <div :class="isDark ? 'profile':'profile-light'" class="wallet-nav">
    <div class="d-flex" style="align-items: baseline; justify-content: space-between; margin-top: -2px; ">
      <span class="sm-num" :class="isDark ? 'country-name' : 'country-name-light'" style="font-size: 16px; font-style: normal;font-weight: 600;">Balance</span>
      <BlockChainNetwork/>
    </div>
        <div :class="isDark ?'txn-cards-dark' : 'txn-cards-light'" style="margin-top: 25px; margin-bottom: 25px; height: 130px; position: relative; display: flex; justify-content: center; align-items: center;">
      
          <div style="display: flex; flex-direction: column;">
            <span class="lg-num">{{ pinia.state.Selectedcurrency_code }} {{ formatBalance(pinia.state.SummedBalance) }}</span>
            <!-- <span class="sm-num mt-2">0.0140 BTC</span> -->
          </div>
          
        </div>
        

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
        pinia.setSummedBalance(data.data)
        }else {
          console.error("Error:", data.message);
      }

    } catch (error) {
      console.log(error)
    }
  }
};

watch(chain, (newChain, oldChain) => {
      if (newChain !== oldChain) {
        getSummedBal();
      }
}, { immediate: true }); 




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