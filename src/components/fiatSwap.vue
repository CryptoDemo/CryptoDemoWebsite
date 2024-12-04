<template>
  <div>
    <v-btn @click="dialog = true" class="fiat-btn" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
            <img :src="isDark ? '/svg/arrow-swap.svg' : '/svg/arrow-swap-dark.svg'" class="me-1"/>
            Swap
    </v-btn>

    <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
      <v-card style="border-radius: 20px; position: relative; background: #060A1D;">
        
        <div class="swap-container" style="width: 85%; display: flex; justify-content: center; align-self: center; flex-direction: column;"> 

          <v-card-text>

            
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x-circle mt-5" viewBox="0 0 16 16" @click="dialog = false" style="display: flex; margin-inline-start: auto; cursor: pointer">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
            
            
            <div class="py-7 ml-3" style="display: flex; align-items: center; justify-content: center; flex-direction: column">
              <span class="swap1">Real-Time Currency Exchange Hub</span>
              <span class="mt-4 trusted-gt">Your Trusted Gateway to Seamless and Secure Currency Exchange Solutions</span>
            </div>
              
            
              <div class="ctnx-div" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 24px;  padding: 37px; margin-top: 70px; margin-bottom: 925px;  width: 100%; margin: auto; ">
                  <div class="d-flex" style="margin-bottom: 30px">
                  <span class="quick-swap me-3">Quick Swap</span>
                  </div>
          
                  <div class="d-md-flex" style="justify-content: space-between;">
                  
                  <div :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'" class="swap-div" style=" border-radius: 20px;  padding: 10px 20px; width: -webkit-fill-available;">
                    
                    <div style="display: flex; justify-content: space-between;">
                      <span class="have d-flex">I have :</span>
                      <span class="have" style="font-family: manrope; font-size: 14px; font-weight: 500; margin-bottom: 10px; display: flex;justify-content: end;">{{ pinia.state.Selectedcurrency_code }}
                            {{ formatBalance(selectedBalance) }}</span>                         
                    </div>

                    <div style="display: flex; justify-content: space-between; width: -webkit-fill-available;">
          
                      <v-menu>
                        <template v-slot:activator="{ props }">
                            <button @click="toggleChevron" class="inputstyling2 me-2" v-bind="props" style=" display: flex; align-items: center;">
                            <div class="py-3" style=" display: flex; align-items: center; border-radius: 17px; background: inherit;">
                                <span class="me-2">{{pinia.state.preferredCurrency}}</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark',]">
                                <path
                                d="M4.94888 6.19921C5.08612 6.19923 5.22202 6.17221 5.34882 6.11971C5.47561 6.06721 5.59084 5.99024 5.6879 5.89321L9.58789 1.99322C9.78375 1.79735 9.8938 1.53171 9.8938 1.25472C9.8938 0.977729 9.78375 0.712088 9.58789 0.516225C9.39203 0.320363 9.12639 0.210317 8.8494 0.210317C8.5724 0.210317 8.30676 0.320363 8.1109 0.516225L4.9469 2.91622L1.7829 0.516225C1.58704 0.320363 1.32139 0.210317 1.0444 0.210317C0.767412 0.210317 0.50174 0.320363 0.305878 0.516225C0.110015 0.712088 2.14471e-08 0.977729 0 1.25472C-2.1447e-08 1.53171 0.110015 1.79735 0.305878 1.99322L4.2059 5.89321C4.3034 5.99076 4.41925 6.06804 4.54678 6.12057C4.67431 6.17309 4.81096 6.19981 4.94888 6.19921Z"
                                fill="currentColor"/>
                            </svg>
                            </button>
                        </template>

                        <v-list :class="isDark ? 'country-dropdown':'country-dropdown-light'">
                            <v-list-item style="display: contents">
                                <v-row dense style="max-width: 200px;">
                                <v-col v-for="(currency, index) in pinia.state.allcountries" sm="12" :key="index">
                                <v-list-item @click="pinia.state.preferredCurrency = currency?.currency_name; pinia.state.Selectedcurrency_code = currency?.currency_code;" style="display: flex;">
                                    <div style="display: flex; align-items: center; ">
                                    <img width="40" height="25" class="me-3" :src="currency?.flag_url" style="object-fit: cover;border-radius: 3px"/> 
                                    <span class="country-name" :class="isDark ? 'country-name' : 'country-name-light'">{{  currency?.currency_name }}</span>
                                </div>
                                </v-list-item>
                                </v-col>
                                </v-row>
                            </v-list-item>
                        </v-list>
                      </v-menu>
                 
                      <div style="display: flex; justify-content: center; align-self: center; border-radius: 4px; height: 26px;">
                      <v-btn @click="swapAmount = mytoken?.minimum_fiat_to_crypto_swap" class="me-4 min-btn" :class="isDark ? 'btn-segment' : 'btn-segment-light'"
                          style=" height: 26px; letter-spacing: 0px; text-transform: capitalize; background: inherit; box-shadow: none;"><span class="min">Min</span>
                      </v-btn>
  
                      <v-btn @click="swapAmount = mytoken?.maximum_fiat_funding"
                          class="me-3" :class="isDark ? 'btn-segment' : 'btn-segment-light'" style="letter-spacing: 0px; text-transform: capitalize; height: 26px; background: inherit; box-shadow: none;"><span class="min">Max</span>
                      </v-btn>
  
                      </div>
  
                      <input type="number" v-model="swapAmount" :class="isDark ? 'btn-segment' : 'btn-segment-light'" style=" outline: none; height: 50px; padding: 10px; border-radius: 8px; "/>
 
                    </div>
                    
                  </div>

                  <div style="display: flex; justify-content: center;">
                    <div @click="toggleTokens()" class="swap-btn" style="display: flex; justify-content: center; margin-top: 3px; cursor: pointer" v-if="theme.global.current.value.dark">
                        <img src="/svg/swap.svg" width="100px" />
                    </div>
            
                    <div @click="toggleTokens()" class="swap-btn" style="display: flex; justify-content: center; margin-top: 5px; cursor: pointer;" v-else>
                      <img src="/svg/toggle-btn.svg"/>
                    </div>
                  </div>
          
          
                  <div :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'" class="swap-div" style="border-radius: 20px; display: flex; padding: 10px 20px; justify-content: space-between; width: -webkit-fill-available;">
                      <div class="d-flex">
                      <div class="me-2 expectedAmmt-div" style="display: flex; flex-direction: column; margin-left: 10px">
                          <span class="have">I want:</span>
                          <v-menu>
                          <template v-slot:activator="{ props }">
                              <button @click="toggleChevron1" class="inputstyling2" v-bind="props" style="display: flex; align-items: center; margin-top: 12px;">

                                <div class="py-3" style="display: flex; align-items: center; border-radius: 17px;background: inherit;"> 
                                    <span class="me-2">{{pinia.state.fiat_currency_i_want}}</span>
                                </div>
          
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none" :class="['chevron-icon',{ 'chevron-icon-rotated': isChevronToggled1 },isDark ? 'close-btn' : 'close-btn-dark',]">
                                    <path d="M4.94888 6.19921C5.08612 6.19923 5.22202 6.17221 5.34882 6.11971C5.47561 6.06721 5.59084 5.99024 5.6879 5.89321L9.58789 1.99322C9.78375 1.79735 9.8938 1.53171 9.8938 1.25472C9.8938 0.977729 9.78375 0.712088 9.58789 0.516225C9.39203 0.320363 9.12639 0.210317 8.8494 0.210317C8.5724 0.210317 8.30676 0.320363 8.1109 0.516225L4.9469 2.91622L1.7829 0.516225C1.58704 0.320363 1.32139 0.210317 1.0444 0.210317C0.767412 0.210317 0.50174 0.320363 0.305878 0.516225C0.110015 0.712088 2.14471e-08 0.977729 0 1.25472C-2.1447e-08 1.53171 0.110015 1.79735 0.305878 1.99322L4.2059 5.89321C4.3034 5.99076 4.41925 6.06804 4.54678 6.12057C4.67431 6.17309 4.81096 6.19981 4.94888 6.19921Z"
                                    fill="currentColor"/>
                                </svg>
                              </button>
                          </template>

                          <v-list :class="isDark ? 'country-dropdown':'country-dropdown-light'">
                              <v-list-item style="display: contents">
                                  <v-row dense style="max-width: 200px;">
                                  <v-col v-for="(currency, index) in filteredCurrency_to_swap_to" sm="12" :key="index">
                                  <v-list-item @click="pinia.state.fiat_currency_i_want = currency.currency_name;" style="display: flex;">
                                      <div style="display: flex; align-items: center; ">
                                      <img width="40" height="25" class="me-3" :src="currency?.flag_url" style="object-fit: cover;border-radius: 3px"/> 
                                      <span class="country-name" :class="isDark ? 'country-name' : 'country-name-light'">{{  currency.currency_name }}</span>
                                  </div>
                                  </v-list-item>
                                  </v-col>
                                  </v-row>
                              </v-list-item>
                          </v-list>
          
                          </v-menu>
                      </div>
                      </div>
                      <div style="display: flex; flex-direction: column; width: 88%;">
                        <span class="have mb-2" style="font-size: 14px; font-weight: 500; font-family: manrope; display: flex; justify-content: end;">Expected ammount</span>

                        <input type="number" disabled v-model="amount_to_recieve" :class="isDark ? 'btn-segment' : 'btn-segment-light'" style="outline: none; height: 50px; padding: 10px; border-radius: 8px;"/>
                      </div>

                  </div>
                  </div>

                    <div class="quick-swap mt-2 text-subtitle-2" :class="isDark ? 'text-dark' : 'text-light'" type="info" density="compact" style="width: 40%; border-radius: 10px; line-height: 20px;">
                        Minimum swap amount is {{ pinia.state.Selectedcurrency_code}}{{ formatBalance(mytoken.minimum_fiat_to_crypto_swap) }} and
                        the maximum swap ammount is {{ pinia.state.Selectedcurrency_code}}{{ formatBalance(mytoken.maximum_fiat_funding) }}
                    </div>

          
                  <div style="display: flex; justify-content: end; margin-top: 55px; align-items: center;">
          
                  <v-btn @click="calculateTxn()" v-if="exchange" :loading="loading"  class="exchange-btn1">
                      <v-icon icon="mdi-arrow-right"></v-icon>
                      Exchange
                  </v-btn>
          
                  <v-btn @click="handleConfirm()" v-if="proceedBtn" :loading="loading" class="exchange-btn1">
                      <v-icon icon="mdi-arrow-right"></v-icon>
                      Proceed
                  </v-btn>

                    <!-- Set New Pin -->
                  <div v-if="showOtp && !hasPin">
                    <h3 class="text-center">Set Transaction Pin</h3>
                    <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 14px; display: flex; justify-content: center;">Create a 4-digit transaction pin</span>
                    
                    <div style="display: flex; flex-direction: column; margin-top: 12px; margin-bottom: 20px;">
                      <v-otp-input v-model="newPinOtp" class="mx-auto" type="password" length="4" variant="underlined"></v-otp-input>
                      <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 14px; display: flex; justify-content: center;">Set transaction pin</span>
                    </div>

                    <div style="display: flex; flex-direction: column; margin-top: 12px; margin-bottom: 20px;">
                      <v-otp-input v-model="confirmPinOtp" class="mx-auto" type="password" length="4" variant="underlined"></v-otp-input>
                      <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 14px; display: flex; justify-content: center;">re-enter transaction pin</span>
                    </div>

                    <v-btn @click="setNewPin()" :loading="loading" variant="tonal"  style="height: 45px; border-radius: 10px; color: #2873FF; font-weight: 600; width: 100%; letter-spacing: 0px;">
                      Set Pin
                    </v-btn>
                  </div>

                    <!-- Enter Pin for users who have a pin -->
                  <div v-if="showOtp && hasPin">

                    <h3 class="text-center">Enter Transaction Pin</h3>
                    <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 14px; display: flex; justify-content: center;">Enter transfer pin to authorize this transaction</span>

              
                    <div style="display: flex; flex-direction: column; margin-top: 12px; margin-bottom: 20px;">
                      <v-otp-input v-model="PinOtp" class="mx-auto" type="password" length="4" variant="underlined"></v-otp-input>
                    </div>
              
                    <v-btn @click="VerifyPin()" :loading="loading" variant="tonal" style=" height: 45px; border-radius: 10px; color: #2873FF; font-weight: 600; width: 100%; letter-spacing: 0px;">Proceed</v-btn>
            
                  </div>
          
                  </div>
              </div>
          </v-card-text>

      </div>
  
      </v-card>
        
    </v-dialog>
  </div>
  
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
import { swapFund } from "@/composables/requests/fiat";
import {  verify_Pin, set_Pin} from "@/composables/requests/users";

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore();

const PinOtp = ref("");

const newPinOtp = ref("");

const confirmPinOtp = ref("");

const dialog = ref(false);

const proceedBtn = ref(false);

const exchange = ref(true)

pinia.state.fiat_currency_i_want = pinia.state.allcountries[0].currency_name;

const countryID_of_currency_i_want = computed(() =>pinia.state.allcountries.find((c) => c.currency_name === pinia.state.fiat_currency_i_want));

const swapAmount = ref(null);

const loading = ref(false);

const amount_to_recieve = ref(null);

const hasPin = computed(() => pinia.state.user.is_pin_set !== null && pinia.state.user.is_pin_set !== false);

const showOtp = ref(false)

const loading_pin  = ref(false)

const mytoken = computed(() =>pinia.state.allcountries.find((c) => c.currency_name === pinia.state.preferredCurrency));

const selectedBalance = computed(() => {
  const balance = pinia.state.Total_fiat_bal.find((c) => c.country_id === (mytoken.value ? mytoken.value.id : null));
  return balance ? balance.balance : 0;
});


const filteredCurrency_to_swap_to = computed(() => pinia.state.allcountries.filter((c) => c.currency_name !== pinia.state.preferredCurrency));
 
watch(() => pinia.state.preferredCurrency,
  (newValue) => {
    // Clear the inputs when preferredCurrency changes
    amount_to_recieve.value = ""; // Clear amount to receive
    swapAmount.value = ""; // Clear swap amount
  }
);



const calculateTxn = async () => {
if (swapAmount?.value > selectedBalance.value) {
  push.error("Insufficient balance");
  return;
}


const info = {
  action_type: "CALCULATE_FIAT_SWAP_AMOUNT",
  from_country_id: mytoken?.value.id,
  to_country_id: countryID_of_currency_i_want.value?.id,
  amount: swapAmount.value,
};
try {
  loading.value = true;

  const data = await swapFund(info);

  if (data.success) {
    loading.value = false;
    pinia.setFiat_swap_details(data.data);
    amount_to_recieve.value = pinia.state.Fiat_swap_details?.expected_amount;
    proceedBtn.value = true
    exchange.value = false

  } else {
    push.error(`${data.message}`, {});
    loading.value = false;
  }
} catch (e) {
  console.log(e);
  loading.value = false;
}
};

const executeTxn = async () => {
const info = {
  action_type:"EXECUTE_FIAT_SWAP",
  action_id: pinia.state.Fiat_swap_details.action_id,
  from_country_id: mytoken.value.id,
  to_country_id: countryID_of_currency_i_want.value?.id,
  amount: swapAmount.value,
  // expected_amount: pinia.state.Fiat_swap_details.expected_amount,
};
try {
  loading.value = true;

  const data = await swapFund(info);

  if (data.success) {
    loading.value = false;
    proceedBtn.value = false;
    exchange.value = true;
    swapAmount.value = "";
    amount_to_recieve.value = "";
    dialog.value = false
    showOtp.value = false;
    pinia.setFiat_transactions([...pinia.state.Fiat_transactions, data.data]);


    push.success(`${data.message}`)
  } else {
    push.error(`${data.message}`);
    loading.value = false;
  }
} catch (e) {
  console.log(e);
  loading.value = false;
}
};

const VerifyPin = async () => {
loading_pin.value = true;
const payload = {
pin: PinOtp.value,
}

try {
  const data = await verify_Pin(payload);
  PinOtp.value  = "";
  if (data.success) {
      await executeTxn();
  } else {
  loading_pin.value = false;
  dialog.value = false
    push.error(data.message);
  }
} catch (e) {
  loading_pin.value = false;
  console.log(e);
  push.error(`${e}`);
}
};

const setNewPin = () => {
// Check if the pins match before clearing the values
if (newPinOtp.value !== confirmPinOtp.value) {
  // Handle pin mismatch (show an alert or message)
  push.error("Pins do not match. Please try again.");
  return;
}

// Logic to save the new pin
hasPin.value = true;

// Call the function to save the pin to the backend
setPin(newPinOtp.value); // Pass the new pin to the setPin function

// Clear the pin fields after the pin is successfully set
newPinOtp.value = "";
confirmPinOtp.value = "";
};

const setPin = async () => {
loading_pin.value = true;
const payload = {
  pin: newPinOtp.value,
}

try {
  const data = await set_Pin(payload);

  if (data.success) {
      push.success(data.message);
      execute();
  } else {
  loading_pin.value = false;
    push.error(data.message);
  }
} catch (e) {
  loading_pin.value = false;
  console.log(e);
  push.error(`${e}`);
}
};

const handleConfirm = () => {
// Clear previous information
showOtp.value = true;
proceedBtn.value = false; // Hide the "Proceed" button after clicking
if (!hasPin.value) {
  showOtp.value = true; // Show the set pin step
} else {
  showOtp.value = true; // Show the enter pin step
}
// Optionally, you might want to clear other state variables here
}
onMounted(() => {});


const toggleTokens = () => {

  // Swapping currency names
  const tempIcon = pinia.state.fiat_currency_i_want;
  pinia.state.fiat_currency_i_want = pinia.state.preferredCurrency;
  pinia.state.preferredCurrency = tempIcon;
};

const isChevronToggled = ref(false);
const toggleChevron = () => {
  isChevronToggled.value = !isChevronToggled.value;
};

const isChevronToggled1 = ref(false);
const toggleChevron1 = () => {
  isChevronToggled1.value = !isChevronToggled1.value;
};
</script>
  
<style scoped>
.fiat-btn{
display: flex;
height: 132px;
width: 260px;
border-radius: 16px;
justify-content: center;
align-items: center;
flex-shrink: 0;
font-family: Manrope;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 33.6px */
}
.swap1 {
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 10px;
}

.cancel1 {
  width: 258px;
  height: 60px !important;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--dark-bg, #10192d);
  color: var(--White, var(--Colors-Base-white, #fff));
  text-align: center;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  letter-spacing: 0px;
}
.hidden {
  display: none;
}
.quick-swap {
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.have {
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.inputstyling2 {
  /* border-radius: 20px; */
  background: inherit;
  /* color: var(--White, var(--Colors-Base-white, #FFF)); */
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  box-shadow: none;
  letter-spacing: 0px;
  position: relative;
}

.min {
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.exchange-btn1 {
  border-radius: 20px;
  background: var(
    --Primary-100,
    linear-gradient(180deg, #2873ff 0%, #0b6b96 100%),
    #2873ff
  );
  width: 258px;
  height: 60px !important;
  text-align: center;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  letter-spacing: 0px;
  color: white;
  box-shadow: none;
}

.mdi-arrow-right {
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2) !important;
  width: 34.928px !important;
  height: 33.527px !important;
  flex-shrink: 0;
  position: absolute !important;
  right: 18px !important;
}
.number-input :deep(.v-number-input__control) {
  display: none !important;
}
.v-number-input__control {
  display: none !important;
}

.country-dropdown {
  border-radius: 15px;
  border: 0.5px solid #2f3946;
  background: #1b2537 !important;
  backdrop-filter: blur(50px) !important;
  height: 320px !important;
  border-radius: 20px !important;
  border-radius: 15px;
  border: 0.5px solid #354356;
  color: white;
  margin-top: 15px;
  box-shadow: none !important;
  height: 170px !important;
}
.country-dropdown-light {
  border-radius: 15px;
  background: #fff !important;
  border: 1px solid #dbe8ff !important;
  border-radius: 20px !important;
  color: black;
  margin-top: 15px;
  box-shadow: none !important;
  height: 170px !important;
}

.btn-segment {
  border: 1px solid rgba(65, 69, 87, 0.6);
}

.btn-segment-light {
  border: 1px solid #e2e8f0;
}

.close-btn {
  fill: white;
  transition: transform 0.3s ease;
}
.close-btn-dark {
  fill: #10192d;
}

.chevron-icon {
  transition: transform 0.3s;
}

.chevron-icon-rotated {
  transform: rotate(180deg);
}

.mdi-arrow-right{
animation: slide1 2s ease-in-out infinite;
margin-left: 9px;
}

@keyframes slide1 {
0%,
100% {
  transform: translate(0, 0);
}

50% {
  transform: translate(10px, 0);
}
}

@media screen and (max-width: 600px) {
.fiat-btn {
height: 45px;
width: 100px;
border-radius: 12px;
font-size: 14px;
letter-spacing: 0px;
text-transform: unset;
background: #fff !important;
color: #10192D;
}

.swap-container{
  margin-inline-end: 0px !important;
  width: 100% !important;
}

.swap-div{
width: 100% !important;
padding: 10px 10px !important;
margin-top: 0px !important;
}
.min-max{
height: fit-content !important;
margin-top: 0px !important;
margin-inline-end: 9px !important;
}
.btn-segment{
margin-bottom: 0px !important;
}
.ctnx-div{
padding: 15px !important; 
margin-top: 70px; 
width: 100% !important; 
border-radius: 15px !important;
}
.number-input{
margin-right: 0px !important;
}
.min-max-ctnx{
margin-top: 18px !important;
}
/* .min-btn{
margin-left: 10px !important;
} */
.mobile-swap{
top: 36% !important;
}
.mobile-swap-width{
width: 65px !important;
}
.exchange-btn1{
width: 100% !important;
}
.quick-swap{
width: 100% !important;
}
.swap1{
display: flex;
margin: auto;
}

.trusted-gt{
display: flex;
text-align: center;
}

.swap-btn{
    width: 56px !important;
}

.expectedAmmt-div{
  margin-left: 0px !important;
}

}
</style>