<template>
  <div>
    <Header :hide="true" :icon1="true" :icon3="true"  :icon2="true" :wallet="true"/>
      <v-container style="margin-top: 90px;">
        <div class="py-7 ml-3 nav-chevron" style="display: flex; align-items: center;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" @click.prevent="navigateTo('/account/trade/wallet')" style="cursor: pointer;">
          <path d="M15 19.9181L8.47997 13.3981C7.70997 12.6281 7.70997 11.3681 8.47997 10.5981L15 4.07812" stroke="#B9D1FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="swap1 ml-2">Crypto Swap</span>
        </div>

        
        <div :class="isDark ? 'profile-cards-dark':'profile-cards-light'" class="ctnx-div" style="border-radius: 24px; padding: 37px; margin-top: 70px; margin-bottom: 925px; width: 100%; margin: auto;">
            <div class="d-flex" style="margin-bottom: 30px;">
                <span class="quick-swap me-3 ">Quick Swap</span>
            </div>

            <div v-if="!showOtp" class="d-md-flex" style="justify-content: space-between;">
                <div :class="isDark ? 'txn-cards-dark':'txn-cards-light'" class="swap-div" style="border-radius: 20px;  display: flex;  padding: 10px 20px; justify-content: space-between;">
              
                      <div class="d-flex swap-container">   
                      <div class="me-2 swap-container" style="display: flex; flex-direction: column; z-index: 1000">
                        <span class="have">I have :</span>
                          <v-menu>
                              <template v-slot:activator="{ props }">
                                <button @click="toggleChevron" class="inputstyling2" v-bind="props" style="display: flex; align-items: center; margin-top: 10px;">
                                    <div class="py-3" style="display: flex;  align-items: center;  border-radius: 17px; background: inherit;">
                                      <img :src="icon" width="30" class="me-2"/>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']">
                                        <path d="M4.94888 6.19921C5.08612 6.19923 5.22202 6.17221 5.34882 6.11971C5.47561 6.06721 5.59084 5.99024 5.6879 5.89321L9.58789 1.99322C9.78375 1.79735 9.8938 1.53171 9.8938 1.25472C9.8938 0.977729 9.78375 0.712088 9.58789 0.516225C9.39203 0.320363 9.12639 0.210317 8.8494 0.210317C8.5724 0.210317 8.30676 0.320363 8.1109 0.516225L4.9469 2.91622L1.7829 0.516225C1.58704 0.320363 1.32139 0.210317 1.0444 0.210317C0.767412 0.210317 0.50174 0.320363 0.305878 0.516225C0.110015 0.712088 2.14471e-08 0.977729 0 1.25472C-2.1447e-08 1.53171 0.110015 1.79735 0.305878 1.99322L4.2059 5.89321C4.3034 5.99076 4.41925 6.06804 4.54678 6.12057C4.67431 6.17309 4.81096 6.19981 4.94888 6.19921Z" fill="currentColor"/>
                                    </svg>
                                </button>
                              </template>


                              <v-list :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 15px; margin-top: 10px; max-height: 300px; overflow-y: auto; width: 250px;">
                                <v-list-item style="display: contents;">
                                  <v-row dense style="display: flex; flex-direction: column;">
                                    <v-col v-for="(item, index) in pinia.state.tokenLists" :key="index">
                                    <v-list-item @click="select=item.name; selectedSymbol=item.symbol; icon =item.icon; selectedBalance =item.balance" style="display: flex;">
                                      <div style="display: flex; align-items: center; ">
                                        <img :src="item.icon" width="30" class="me-3"/>
                                        <span class="currency-list my-2">{{item.name}}</span>
                                    </div>
                                    </v-list-item>
                                  </v-col>
                                  </v-row>
                                </v-list-item>
                              </v-list>
                          </v-menu>  
                      </div>
                    </div>

                    <div class="min-max-ctnx" style="display: flex; justify-content: center; align-self: center ; margin-top: 27px; border-radius: 4px; height: 26px;">
                      <v-btn @click="swapAmount = minimumswap?.minimum_swap" class="me-3 min-max min-btn" :class="isDark ? 'btn-segment':'btn-segment-light'" style="height: 26px; letter-spacing: 0px; text-transform: capitalize; background: inherit; box-shadow: none;"><span class="min">Min</span></v-btn>    
                      <v-btn @click="swapAmount = selectedBalance" class="me-1  min-max" :class="isDark ? 'btn-segment':'btn-segment-light'" style="letter-spacing: 0px; text-transform: capitalize; height: 26px; background: inherit; box-shadow: none;"><span class="min">Max</span></v-btn>
                    </div>

                    <div class="number-input" style="display: flex; flex-direction: column;">
                      <span class="have" style="font-family: manrope; font-size: 14px; font-weight: 500; margin-bottom: 10px; display: flex;justify-content: end;">{{ formatBalance(selectedBalance) }} {{ selectedSymbol }}</span>
                      <input type="number" v-model="swapAmount" :class="isDark ? 'btn-segment':'btn-segment-light'" style="outline: none; height: 50px; padding: 10px; border-radius: 8px;"/>    
                    </div>
                </div>

                <div style="cursor: pointer; display: flex; justify-content: center;">

                  <div @click="toggleTokens()" class="swap-btn ml-1" style="display: flex; justify-content: center; margin-top: 5px;" v-if="theme.global.current.value.dark">
                    <img src="/svg/swap.svg" width="100px"/>
                  </div> 
  
                  <div @click="toggleTokens()" class="flex-lg-and-up hidden-sm-and-down" style="position: absolute ; display: flex; left: 0; right: 0; justify-content: center; margin-top: 5px;" v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="85" viewBox="0 0 70 71" fill="none">
                      <path d="M54.8337 35.2005C54.8337 24.2469 45.954 15.3672 35.0003 15.3672C24.0467 15.3672 15.167 24.2469 15.167 35.2005C15.167 46.1542 24.0467 55.0339 35.0003 55.0339C45.954 55.0339 54.8337 46.1542 54.8337 35.2005Z" fill="#4284FF"/>
                      <path d="M54.8337 35.2005C54.8337 24.2469 45.954 15.3672 35.0003 15.3672C24.0467 15.3672 15.167 24.2469 15.167 35.2005C15.167 46.1542 24.0467 55.0339 35.0003 55.0339C45.954 55.0339 54.8337 46.1542 54.8337 35.2005Z" fill="url(#paint0_linear_5037_31025)"/>
                      <path d="M63 35.1992C63 19.7352 50.464 7.19922 35 7.19922C19.536 7.19922 7 19.7352 7 35.1992C7 50.6632 19.536 63.1992 35 63.1992C50.464 63.1992 63 50.6632 63 35.1992Z" stroke="#fff" stroke-width="14"/>
                      <path d="M29.167 36.3659H39.667V38.6992H35.0003V42.1992L29.167 36.3659ZM35.0003 31.6992V28.1992L40.8337 34.0326H30.3337V31.6992H35.0003Z" fill="white"/>
                      <defs>
                        <linearGradient id="paint0_linear_5037_31025" x1="35.0003" y1="15.3672" x2="35.0003" y2="55.0339" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#2873FF"/>
                          <stop offset="1" stop-color="#0B6B96"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                
              

              <div :class="isDark ? 'txn-cards-dark':'txn-cards-light'" class="swap-div" style="border-radius: 20px; display: flex; padding: 10px 20px; justify-content: space-between; width: 46%;">
                <div class="d-flex swap-container">   
                    <div class="swap-container me-2" style="display: flex; flex-direction: column;">
                      <span class="have">I want:</span>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                              <button @click="toggleChevron1" class="inputstyling2" v-bind="props" style="display: flex; align-items: center; margin-top: 8px">

                                <div  class="py-3" style="display: flex; align-items: center;  border-radius: 17px; background: inherit;">
                                  <img :src="coin_to_swap" class="me-2" width="30"/>
                                </div>
                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled1 }, isDark ? 'close-btn' : 'close-btn-dark']">
                                    <path d="M4.94888 6.19921C5.08612 6.19923 5.22202 6.17221 5.34882 6.11971C5.47561 6.06721 5.59084 5.99024 5.6879 5.89321L9.58789 1.99322C9.78375 1.79735 9.8938 1.53171 9.8938 1.25472C9.8938 0.977729 9.78375 0.712088 9.58789 0.516225C9.39203 0.320363 9.12639 0.210317 8.8494 0.210317C8.5724 0.210317 8.30676 0.320363 8.1109 0.516225L4.9469 2.91622L1.7829 0.516225C1.58704 0.320363 1.32139 0.210317 1.0444 0.210317C0.767412 0.210317 0.50174 0.320363 0.305878 0.516225C0.110015 0.712088 2.14471e-08 0.977729 0 1.25472C-2.1447e-08 1.53171 0.110015 1.79735 0.305878 1.99322L4.2059 5.89321C4.3034 5.99076 4.41925 6.06804 4.54678 6.12057C4.67431 6.17309 4.81096 6.19981 4.94888 6.19921Z" fill="currentColor"/>
                                </svg>
                            
                              </button>
                            </template>


                            <v-list :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 15px; margin-top: 10px; max-height: 300px; overflow-y: auto; width: 250px;">
                                <v-list-item style="display: contents;">
                                  <v-row dense style="display: flex; flex-direction: column;">
                                    <v-col v-for="(item, index) in filteredToken_to_swap_to" :key="index">
                                    <v-list-item @click="select=item.name; coin_to_swap =item.icon; selected_tokenType_to_swap =item.symbol" style="display: flex;">
                                      <div style="display: flex; align-items: center; ">
                                        <img :src="item.icon" width="30" class="me-3"/>
                                        <span class="currency-list my-2">{{item.name}}</span>
                                    </div>
                                    </v-list-item>
                                  </v-col>
                                  </v-row>
                                </v-list-item>
                              </v-list>
                        </v-menu>   
                    </div>

                    
                </div>
                <div class="expct-ammt" style="display: flex; flex-direction: column; width: 88%;">
                    <span class="have mb-2" style="font-size: 14px; font-weight: 500; font-family: manrope; display: flex;justify-content: end;"> {{ selected_tokenType_to_swap }}</span>
                    <input type="number" disabled v-model="amount_to_recieve" :class="isDark ? 'btn-segment':'btn-segment-light'" style="outline: none; height: 50px; padding: 10px; border-radius: 8px;"/>  
                </div>

              </div> 
      
            </div>

            <div v-if="!showOtp">
              <h5 class="quick-swap mt-2" style="font-family: manrope; font-size: 14px;">Minimum swap limit : {{ minimumswap?.minimum_swap }}</h5>
            </div>

            <div v-if="!showOtp" class="d-md-flex" style="justify-content: space-between; margin-top: 50px; align-items: center;">

              <div class="alert-div" style="width: 37%;">
                <v-alert v-if="FeeCard" variant="tonal" type="info" density="compact" style="font-family: Manrope;font-size: 14px;  font-style: normal;font-weight: 600;line-height: 180%; border-radius: 10px;">
                  <span style="font-size: 16px;">Important Notice</span><br>
                A fee of {{ formatBalance(from_amount_total) }} will be applied for this transaction
                    <br>
                </v-alert>
              </div>

              <v-btn @click="continueToOtp()" :loading="loading" append-icon="mdi-arrow-right" class="exchange-btn1"> Continue </v-btn>
            </div>

              <!-- Set New Pin -->
              <div v-if="showOtp && !hasPin">
                <h3 class="text-center">Set Transaction Pin</h3>
                <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 14px; display: flex; justify-content: center;">Create a 4-digit transaction pin</span>
                
                <div style="display: flex; flex-direction: column; margin-top: 12px; margin-bottom: 20px;">
                  <v-otp-input v-model="newPinOtp" class="mx-auto" length="4" type="password" variant="underlined"></v-otp-input>
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
       
      </v-container>
    <div style="margin-top: 500px;">
  
      <Footer class="desktop-footer flex-lg-and-up hidden-md-and-down"/>
      <Mobile-footer class="mobile-footer"/>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useTheme } from 'vuetify';
  import { calculateTxnFees, executeTrans } from "@/composables/requests/transaction";
  import {  verify_Pin, set_Pin} from "@/composables/requests/users";
  
  definePageMeta({
  middleware: 'scroll-to-top'
  });
  const theme = useTheme()
  const isDark = computed(() =>  theme.global.current.value.dark);
  const pinia = useStore();
  
  
  const FeeCard = ref(false);
  
  const hasPin = computed(() => pinia.state.user.is_pin_set !== null && pinia.state.user.is_pin_set !== false);
  
  const piniastoredicon = ref(null);
  
  const icon = ref (piniastoredicon)
  
  const select  = ref ()
  const selectedBalance = ref(null);
  
  const coin_to_swap = ref(pinia.state.tokenLists[0].icon)
  
  const selected_tokenType_to_swap  = ref ('USDT')
  
  const selectedSymbol = ref('');
  
  const selectedSymbol_to_swap_to  = ref('');
  
  const minimumswap = ref(null);
  
  const swapAmount =ref(null);
  
  const loading = ref(false);
  
  const mytoken = ref(null)
  
  const amount_to_recieve = ref(null);
  
  const swap_fee_id = ref();
  
  const from_amount_total = ref();
  
  const to_amount = ref();
  
  const tax_fee = ref();
  
  const is_balance_sufficient = ref();
  
  const PinOtp = ref("");
  
  const newPinOtp = ref("");
  
  const confirmPinOtp = ref("");
  
  const showOtp = ref(false)
  
  const loading_pin = ref(false)
  
  mytoken.value = pinia.state.tokenLists.find(c => c.symbol ===  pinia.state.getNewCoinInfo )
  const selectedNetwork = pinia.state.BlockchainNetworks.find(e => e.name.toLowerCase() === pinia.state.selectedNetwork.toLowerCase())
  minimumswap.value = mytoken.value.token_networks.find(e => e.id ===  selectedNetwork.blockchain_id)
  console.log(minimumswap.value)
  
  
  piniastoredicon.value = mytoken.value.icon;
  selectedBalance.value = mytoken.value.balance;
  selectedSymbol.value = mytoken.value.symbol;
  
  const filteredToken_to_swap_to = ref([])
  filteredToken_to_swap_to.value = pinia.state.tokenLists.filter(c => c.symbol !=  selectedSymbol.value)
  
  watch(()=> selectedSymbol.value,(newv)=> {
    if(newv){
      mytoken.value =  pinia.state.tokenLists.find(c => c.symbol ===  newv )
      const selectedNetwork = pinia.state.BlockchainNetworks.find(e => e.name.toLowerCase() === pinia.state.selectedNetwork.toLowerCase())
      minimumswap.value = mytoken.value.token_networks.find(e => e.id ===  selectedNetwork.blockchain_id)
      selectedBalance.value = mytoken.value.balance
  
      filteredToken_to_swap_to.value = pinia.state.tokenLists.filter(c => c.symbol !=  newv)
    }
  })
  
  coin_to_swap.value = filteredToken_to_swap_to.value[0].icon
  
  
  
  const toggleTokens = ()=>{
    const m = selectedSymbol.value
    const p = piniastoredicon.value
  
    selectedSymbol.value = selected_tokenType_to_swap.value;
    piniastoredicon.value =  coin_to_swap.value
    selected_tokenType_to_swap.value = m
    coin_to_swap.value = p
  
  }
  
  
// Calculate tax for swapping
const caltax = async () => {
  if (swapAmount.value > selectedBalance.value) {
      push.error("Insufficient balance");
      return;
    }

        const info = {
            swap_input: {
              from_token: selectedSymbol.value,
              from_amount: parseFloat(swapAmount.value),
              to_token: selected_tokenType_to_swap.value,
            },
        }

        console.log(info)
        try {
            loading.value = true
            const data = await calculateTxnFees(info);
            console.log(data);

            if (data.success) {
                amount_to_recieve.value = data.data.expected_swapped_amount.amount
                swap_fee_id.value = data.data.fee_id
                console.log(swap_fee_id.value)
                from_amount_total.value = data.data.amount_plus_fee
                if(pinia.state.selectedNetwork === 'trc20'){
                    to_amount.value = data.data?.expected_swapped_amount
                }else{
                    to_amount.value = data.data?.expected_swapped_amount?.amount
                    
                }
                tax_fee.value = data.data.fee_amount
                is_balance_sufficient.value = data.data.is_balance_sufficient
                FeeCard.value = true;

                pinia.setCalculatedTaxFee_for_swap(data.data.fee_id);

            } else {
                push.error(data.message);
            }

            loading.value = false
        } catch (e) {
            console.log(e)
            loading.value = false
        }
};

const executeTxn = async()=>{
  const info = {
      fee_id: pinia.state.calculatedTaxFee_for_swap
    }
    try{
      loading.value = true

      const data = await executeTrans(info)

      if(data.success){
        
        loading.value = false
        pinia.setTransactionDetails(data.data)


        navigateTo('/account/Trade/success/')
        
        // navigateTo(/dashboard/wallet/get/`${pinia.state.transactionDetails.id}`)


      }else{
        
        push.error(`${data.message}`, {
        });
        loading.value = false;
        
      }
      

    }catch(e){
        console.log(e)
        loading.value = false;
    }


}
    
// Watch for changes in amount_to_swap and trigger tax calculation
watchEffect(() => {
    if (swapAmount.value < minimumswap.value || swapAmount.value < selectedBalance.value) return;
    debounce(caltax);
  });


watch(()=>swapAmount.value,(newv)=>{
  if(newv < minimumswap.value || newv < selectedBalance.value){
    debounce(caltax);

  }
  if(newv == null ){
    swapAmount.value = ''
  }
})

const continueToOtp = () => {
// Clear previous information
showOtp.value = true;
if (!hasPin.value) {
  showOtp.value = true; // Show the set pin step
} else {
  showOtp.value = true; // Show the enter pin step
}
// Optionally, you might want to clear other state variables here
}

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

const isChevronToggled = ref(false);
const toggleChevron = () => {
      isChevronToggled.value = !isChevronToggled.value;
};
  
const isChevronToggled1 = ref(false);
const toggleChevron1 = () => {
      isChevronToggled1.value = !isChevronToggled1.value;
};

  
</script>
  
<style>
  
  .swap1{
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal; 
  margin-left: 10px;
  }
  
  .cancel1{
  width: 258px;
  height: 60px!important;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--dark-bg, #10192D);
  color: var(--White, var(--Colors-Base-white, #FFF));
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
  .quick-swap{
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  }
  
  .have{
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  }
  
  .inputstyling2{
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
  
  .min{
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  }
  
  .exchange-btn1{
  border-radius: 20px;
  background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);
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
  
  .mdi-arrow-right{
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.20) !important;
  width: 34.928px!important;
  height: 33.527px!important;
  flex-shrink: 0;
  position: absolute!important;
  right: 18px!important;
  }
  .number-input :deep(.v-number-input__control){
  display: none !important;
  }
  .v-number-input__control{
    display: none !important;
  }
  
  
  .btn-segment {
      border: 1px solid rgba(65, 69, 87, 0.6);
    }
  
  .btn-segment-light{
  border: 1px solid #E2E8F0;
  }
  
  .close-btn{
  fill: white;
  transition: transform 0.3s ease;
  }
  .close-btn-dark{
  fill: #10192D;
  }
  
  .chevron-icon {
    transition: transform 0.3s;
  }
  
  .chevron-icon-rotated {
    transform: rotate(180deg);
  }
  
  @media only screen and (min-width: 600px) {
    .swap-div{
    width: 100% !important;
  }
  }
  
  @media only screen and (max-width: 600px) {
  .swap-div{
    width: 100% !important;
    padding: 10px 10px !important;
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
  .swap-container{
    margin-inline-end: 0px !important;
    width: fit-content !important;
  }
  .number-input{
    margin-right: 0px !important;
  }
  .min-max-ctnx{
    margin-top: 18px !important;
  }
  .min-btn{
  margin-left: 10px !important;
  }
  .mobile-swap{
    top: 36% !important;
  }
  .mobile-swap-width{
    width: 65px !important;
  }
  .exchange-btn1{
    width: 100% !important;
    border-radius: 15px !important;
  }
  .alert-div{
    width: 100% !important;
    margin-bottom: 15px !important;
  }
  .nav-chevron{
    margin-left: 0px !important;
  }
  .swap-btn{
    width: 56px !important;
  }
  .expct-ammt{
   width: 78% !important;
  }

  }
  </style>