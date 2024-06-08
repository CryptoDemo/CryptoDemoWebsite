<template>
<Header :hide="true" :icon1="true" :icon3="true"  :icon2="true"/>
<div>
    <v-container>
       <div style="display: flex; align-items: center; margin-bottom: 44px; margin-top: 100px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" @click.prevent="navigateTo('/account/trade/wallet')">
        <path d="M15 19.9181L8.47997 13.3981C7.70997 12.6281 7.70997 11.3681 8.47997 10.5981L15 4.07812" stroke="#B9D1FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
           <img :src="coin.icon" width="35" class="me-2"/>
           <span>{{ coin.name }}/{{pinia.state.preferredCurrency}}</span>
       </div>
       <div :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="width: 100%; height: 250px;border-radius: 24px; padding: 45px;">
           <div style="display: flex; flex-direction: column;">
               <div style="display: flex; align-items: center;">
                   <span class="tkn-bal me-3">Balance</span>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" v-if="isToggled"  @click="togglePassword()" style="cursor: pointer;">
                   <path d="M15.58 12.0019C15.58 13.9819 13.98 15.5819 12 15.5819C10.02 15.5819 8.42004 13.9819 8.42004 12.0019C8.42004 10.0219 10.02 8.42188 12 8.42188C13.98 8.42188 15.58 10.0219 15.58 12.0019Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M12 20.2688C15.53 20.2688 18.82 18.1887 21.11 14.5887C22.01 13.1787 22.01 10.8087 21.11 9.39875C18.82 5.79875 15.53 3.71875 12 3.71875C8.46997 3.71875 5.17997 5.79875 2.88997 9.39875C1.98997 10.8087 1.98997 13.1787 2.88997 14.5887C5.17997 18.1887 8.46997 20.2688 12 20.2688Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" v-else  @click="togglePassword()" style="cursor: pointer;">
                   <path d="M15.58 12.0019C15.58 13.9819 13.98 15.5819 12 15.5819C10.02 15.5819 8.42004 13.9819 8.42004 12.0019C8.42004 10.0219 10.02 8.42188 12 8.42188C13.98 8.42188 15.58 10.0219 15.58 12.0019Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M12 20.2688C15.53 20.2688 18.82 18.1887 21.11 14.5887C22.01 13.1787 22.01 10.8087 21.11 9.39875C18.82 5.79875 15.53 3.71875 12 3.71875C8.46997 3.71875 5.17997 5.79875 2.88997 9.39875C1.98997 10.8087 1.98997 13.1787 2.88997 14.5887C5.17997 18.1887 8.46997 20.2688 12 20.2688Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
               </div>
               <span class="bal" v-if="isToggled">{{fetchedBalance }} {{ coin.symbol }}</span>
               <span class="bal" v-else>***</span>
               <span class="currency-bal">{{ pinia.state.tokenLists.converted_value }}</span>
           </div>
       </div>                   
    </v-container>
</div>
  </template>
  
<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import {currencyConverter, getSingleTokenBal} from "@/composables/requests/tokens";
const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore()

const coin = pinia.state.tokenLists.find(e => e.symbol === pinia.state.getNewCoinInfo)

const chain = pinia.state.selectedNetwork;  // Example chain, replace as needed

const token = pinia.state.tokenLists.find(e => e.symbol === pinia.state.getNewCoinInfo);

const fetchedBalance = ref(); // Define a ref to store the fetched balance

const coins = pinia.state.tokenLists;

const isToggled = ref(true);
const togglePassword = () => {
  isToggled.value = !isToggled.value;
};

const getSingleBal = async () => {

  try {
    const data = await getSingleTokenBal(chain, token);
    if (data.success) {
      fetchedBalance.value = data.data.balance; // Update the ref with the fetched balance
      console.log(fetchedBalance.value)
    } else {
      console.log("Error in response:", data.message);
    }
  } catch (error) {
    console.log('Error:', error);
  }
};

const conversionRate = ref(); // Store conversion rate

// Fetch the conversion rate for the selected coin to the preferred currency
const fetchConversionRate = async () => {
  try {
    if (coin) {
 
      const convertCurrency = [{ from: coin.symbol, to: pinia.state.preferredCurrency }];
      const data = await currencyConverter(convertCurrency);
      
      if (data.success) {
  
        conversionRate.value = data.data[0].value;
        console.log("Conversion current rate:",conversionRate.value)
      } else {
        console.log("Conversion failed:", data.message);
      }
    } else {
      console.log("Coin not found in tokenLists");
    }
  } catch (error) {
    console.log('Error fetching conversion rate:', error);
  }
};

const calculateCurrencyEquivalent = () => {
  const balance = parseFloat(fetchedBalance.value);
  const rate = parseFloat(conversionRate.value);

  if (!isNaN(balance) && !isNaN(rate)) {
    const currencyEquivalent = balance * rate;
    console.log(currencyEquivalent);
  } else {
    console.log('Invalid balance or conversion rate.');
  }
};
console.log(typeof fetchedBalance.value, typeof conversionRate.value);


onBeforeMount(() => {
  fetchConversionRate()
  getSingleBal();
  calculateCurrencyEquivalent()
});
// Call the function


</script>

<style scoped>
.tkn-bal{
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.bal{
font-family: Poppins;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

.currency-bal{
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
</style>
  