<template>
<Header :hide="true" :icon1="true" :icon3="true"  :icon2="true"/>
<div>
    <v-container>
       <div style="display: flex; align-items: center; margin-bottom: 44px; margin-top: 100px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" @click.prevent="navigateTo('/account/trade/wallet')" style="cursor: pointer;">
        <path d="M15 19.9181L8.47997 13.3981C7.70997 12.6281 7.70997 11.3681 8.47997 10.5981L15 4.07812" stroke="#B9D1FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
           <img :src="coin.icon" width="35" class="me-2 ml-2"/>
           <span>{{ coin.name }}/{{pinia.state.preferredCurrency}}</span>
       </div>
       <div :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="width: 100%; height: 250px;border-radius: 24px; padding: 45px;">
           <div style="display: flex; flex-direction: column;">
               <div style="display: flex; align-items: center; margin-bottom: 5px;">
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

            <div style="display: flex;align-items: center; margin-top: -13px; justify-content: space-between;">
            <div>
                <span class="currency-bal">{{ pinia.state.tokenLists.converted_value }}</span>
                <span class="currencyEquiv me-3">{{ pinia.state.Selectedcurrency_code }} {{ currencyEquivalent }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                 <path d="M6.22003 11.9987H9.78003C11.9934 11.9987 12.8934 10.432 11.7934 8.5187L11.3 7.66536C11.18 7.4587 10.96 7.33203 10.72 7.33203H5.28003C5.04003 7.33203 4.82003 7.4587 4.70003 7.66536L4.2067 8.5187C3.1067 10.432 4.0067 11.9987 6.22003 11.9987Z" fill="white"/>
                 <path d="M5.86004 6.66833H10.1467C10.4067 6.66833 10.5667 6.38833 10.4334 6.16833L10.0067 5.435C8.90671 3.52167 7.09337 3.52167 5.99337 5.435L5.56671 6.16833C5.44004 6.38833 5.60004 6.66833 5.86004 6.66833Z" fill="white"/>
                </svg>
                <span class="perc">+10%</span>
            </div>

            <div style="display: flex; align-items: center;">
           
              <v-btn @click.prevent="navigateTo('/account/trade/sendButton')" class="send-btn me-3" :class="isDark ? 'wallet-border':'wallet-border-light'" >
                <img src="/svg/send-arrow.svg" class="me-1"/>
                <span :class="isDark ? 'coin-name':'coin-name-light'">Send</span>
              </v-btn>
       

              <v-btn @click.prevent="navigateTo('/account/trade/getButton')" class="send-btn me-3" :class="isDark ? 'wallet-border':'wallet-border-light'">
                <img src="/svg/get.svg" class="me-1"/>
                <span :class="isDark ? 'coin-name':'coin-name-light'">Get</span>
              </v-btn>

              <v-btn @click.prevent="navigateTo('/account/trade/swap')" class="send-btn" :class="isDark ? 'wallet-border':'wallet-border-light'">
                <img src="/svg/arrow-swap.svg" class="me-1"/>
                <span :class="isDark ? 'coin-name':'coin-name-light'">Get</span>
              </v-btn>
            </div>
        </div>
        </div>
       </div>                   
    </v-container>
    <div style="margin-top: 500px;">
        <Footer class="desktop-footer flex-lg-and-up hidden-sm-and-down"/>
        <Mobile-footer class="mobile-footer"/>
    </div>
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

const currencyEquivalent = ref(0);
const calculateCurrencyEquivalent = () => {
  const balance = parseFloat(fetchedBalance.value);
  const rate = parseFloat(conversionRate.value);


    currencyEquivalent.value = balance * rate;
    console.log(currencyEquivalent);

};


onBeforeMount(async() => {
 await fetchConversionRate()
 await getSingleBal();
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
.currencyEquiv{
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.perc{
text-align: right;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */
}

.send-btn{
border-radius: 16px;
display: flex;
max-width: 86.333px !important;
height: 48px !important;
padding: 12px 16px;
box-shadow: none;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;
letter-spacing: 0px;
text-transform: unset;
align-content: center;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 140%;
background: inherit;
}

.wallet-border{
  border: 1px solid  #1B2537;
}
.wallet-border-light{
border: 1px solid #E2E8F0;
}
</style>
  