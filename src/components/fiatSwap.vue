<template>
    <div>
      <v-btn @click="dialog = true" class="fiat-btn" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
              <img src="/svg/arrow-swap.svg" class="me-1"/>
              Swap
      </v-btn>
  
      <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
        <v-card style="border-radius: 20px; position: relative; background: #060A1D;">
          
          <div style="width: 85%; display: flex; justify-content: center; align-self: center; flex-direction: column;"> 
  
            <v-card-text>
              <div class="py-7 ml-3" style="display: flex; align-items: center; justify-content: center; flex-direction: column">
                <span class="swap1">Real-Time Currency Exchange Hub</span>
                <span class="mt-4">Your Trusted Gateway to Seamless and Secure Currency Exchange Solutions</span>
              </div>


                <div :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 24px;  padding: 37px; margin-top: 70px; margin-bottom: 925px;  width: 97%; margin: auto; ">
                    <div class="d-flex" style="margin-bottom: 30px">
                    <span class="quick-swap me-3">Quick Swap</span>
                    <img src="/svg/reload.svg" class="icon1" />
                    </div>
            
                    <div class="d-md-flex" style="justify-content: space-between; position: relative">
                    <div :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'" style=" border-radius: 20px; width: 47%; display: flex; padding: 10px 20px; justify-content: space-between;">
                        <div class="d-flex" style="width: 12%">
                        <div
                            class="me-13" style="display: flex; flex-direction: column; z-index: 1000">
                            <span class="have d-flex">I have :</span>
            
                            <v-menu>
                            <template v-slot:activator="{ props }">
                                <button
                                @click="toggleChevron"
                                class="inputstyling2"
                                v-bind="props"
                                style=" display: flex; align-items: center; margin-top: 13px;">
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
                        </div>
                        </div>
            
                        <div style="display: flex; justify-content: center; align-self: center; margin-top: 30px; border-radius: 4px; height: 26px;z-index: 1000;">
                        <v-btn @click="swapAmount = mytoken?.minimum_fiat_to_crypto_swap" class="me-4" :class="isDark ? 'btn-segment' : 'btn-segment-light'"
                            style=" height: 26px; letter-spacing: 0px; text-transform: capitalize; background: inherit; box-shadow: none;"><span class="min">Min</span>
                        </v-btn>
                        <v-btn
                            @click="swapAmount = mytoken?.maximum_fiat_funding"
                            class="me-3" :class="isDark ? 'btn-segment' : 'btn-segment-light'" style="letter-spacing: 0px; text-transform: capitalize; height: 26px; background: inherit; box-shadow: none;"><span class="min">Max</span>
                        </v-btn>
                        </div>
                        <div class="number-input" style="display: flex; margin-right: 10px; flex-direction: column; z-index: 1000;">
                        <span class="have" style="font-family: manrope; font-size: 14px; font-weight: 500; margin-bottom: 10px; display: flex;justify-content: end;">{{ pinia.state.Selectedcurrency_code }}
                            {{ formatBalance(selectedBalance) }}</span>
                        <input
                            type="number"
                            v-model="swapAmount"
                            :class="isDark ? 'btn-segment' : 'btn-segment-light'"
                            style="
                            outline: none;
                            height: 50px;
                            padding: 10px;
                            border-radius: 8px;
                            "/>
                        </div>
                    </div>
            
                    <div @click="toggleTokens()" style=" position: absolute; display: flex; left: 0; right: 0; justify-content: center; margin-top: 5px;" v-if="theme.global.current.value.dark">
                        <img src="/svg/swap.svg" width="8%" />
                    </div>
            
                    <div @click="toggleTokens()" style="position: absolute; display: flex; left: 0; right: 0; justify-content: center; margin-top: 5px;" v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="85" viewBox="0 0 70 71" fill="none">
                        <path
                            d="M54.8337 35.2005C54.8337 24.2469 45.954 15.3672 35.0003 15.3672C24.0467 15.3672 15.167 24.2469 15.167 35.2005C15.167 46.1542 24.0467 55.0339 35.0003 55.0339C45.954 55.0339 54.8337 46.1542 54.8337 35.2005Z"
                            fill="#4284FF"/>
                        <path
                            d="M54.8337 35.2005C54.8337 24.2469 45.954 15.3672 35.0003 15.3672C24.0467 15.3672 15.167 24.2469 15.167 35.2005C15.167 46.1542 24.0467 55.0339 35.0003 55.0339C45.954 55.0339 54.8337 46.1542 54.8337 35.2005Z"
                            fill="url(#paint0_linear_5037_31025)"/>
                        <path
                            d="M63 35.1992C63 19.7352 50.464 7.19922 35 7.19922C19.536 7.19922 7 19.7352 7 35.1992C7 50.6632 19.536 63.1992 35 63.1992C50.464 63.1992 63 50.6632 63 35.1992Z"
                            stroke="#fff"
                            stroke-width="14"/>
                        <path
                            d="M29.167 36.3659H39.667V38.6992H35.0003V42.1992L29.167 36.3659ZM35.0003 31.6992V28.1992L40.8337 34.0326H30.3337V31.6992H35.0003Z"
                            fill="white"/>
                        <defs>
                            <linearGradient id="paint0_linear_5037_31025" x1="35.0003" y1="15.3672" x2="35.0003" y2="55.0339" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2873FF" />
                            <stop offset="1" stop-color="#0B6B96" />
                            </linearGradient>
                        </defs>
                        </svg>
                    </div>
            
                    <div :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'" style="border-radius: 20px; display: flex; width: 47%; padding: 10px 20px; justify-content: space-between;">
                        <div class="d-flex">
                        <div class="me-13"  style="display: flex; flex-direction: column; margin-left: 10px">
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
                        <div style="display: flex; flex-direction: column">
                        <span class="have mb-2" style="font-size: 14px; font-weight: 500; font-family: manrope; display: flex; justify-content: end;">
                            Expected ammount
                        </span>

                        <input type="number" disabled v-model="amount_to_recieve" :class="isDark ? 'btn-segment' : 'btn-segment-light'"
                            style="outline: none; height: 50px; padding: 10px; border-radius: 8px;"/>
                        </div>

                    </div>
                    </div>

                    <div>
                      <div class="quick-swap mt-2 text-subtitle-2" :class="isDark ? 'text-dark' : 'text-light'" type="info" density="compact" style="width: 40%; border-radius: 10px; line-height: 20px;">
                          Minimum swap amount is {{ pinia.state.Selectedcurrency_code}}{{ formatBalance(mytoken.minimum_fiat_to_crypto_swap) }} and
                          the maximum swap ammount is {{ pinia.state.Selectedcurrency_code}}{{ formatBalance(mytoken.maximum_fiat_funding) }}
                      </div>
                    </div>
            
                    <div style="display: flex; justify-content: end; margin-top: 55px; align-items: center;">
            
                    <v-btn @click="calculateTxn()" v-if="exchange" :loading="loading"  class="exchange-btn1">
                        <v-icon icon="mdi-arrow-right"></v-icon>
                        Exchange
                    </v-btn>
            
                    <v-btn @click="executeTxn()" v-if="proccedBtn" :loading="loading" class="exchange-btn1">
                        <v-icon icon="mdi-arrow-right"></v-icon>
                        Proceed
                    </v-btn>
            
                    </div>
                </div>
            </v-card-text>


            <v-card-actions style="margin-top: 180px; justify-content: end;">
            <div class="px-4 mb-3">
              <v-btn @click="dialog = false" style="letter-spacing: 0px; width: 100px; font-weight: 600; text-transform: unset; font-size: 16px;">Cancel</v-btn>
            </div>
          </v-card-actions>
        </div>
    
        </v-card>
          
      </v-dialog>
    </div>
    
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useTheme } from "vuetify";
  import { swapFund } from "@/composables/requests/fiat";
  
  const theme = useTheme();
  const isDark = computed(() => theme.global.current.value.dark);
  const pinia = useStore();
  
  const dialog = ref(false);
  
  const proccedBtn = ref(false);
  
  const exchange = ref(true)

  pinia.state.fiat_currency_i_want = pinia.state.allcountries[0].currency_name;
  
  const countryID_of_currency_i_want = computed(() =>pinia.state.allcountries.find((c) => c.currency_name === pinia.state.fiat_currency_i_want));
  
  const swapAmount = ref(null);
  
  const loading = ref(false);
  
  const amount_to_recieve = ref(null);
  
  
  const mytoken = computed(() =>pinia.state.allcountries.find((c) => c.currency_name === pinia.state.preferredCurrency));
  
  const selectedBalance = computed(() => {
    const balance = pinia.state.Total_fiat_bal.find((c) => c.country_id === (mytoken.value ? mytoken.value.id : null));
    return balance ? balance.balance : 0;
  });
  

const filteredCurrency_to_swap_to = computed(() => pinia.state.allcountries.filter((c) => c.currency_name !== pinia.state.preferredCurrency));
   

  
  watch(
    () => pinia.state.preferredCurrency,
    (newValue) => {
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
        proccedBtn.value = true
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
        proccedBtn.value = false;
        exchange.value = true;
        swapAmount.value = "";
        amount_to_recieve.value = "";
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
  
  onMounted(() => {});
  
  // const toggleTokens = ()=>{
  //   const m = selectedSymbol.value
  //   const p = piniastoredicon.value
  
  //   selectedSymbol.value = selected_tokenType_to_swap.value;
  //   piniastoredicon.value =  currency_i_want.value
  //   selected_tokenType_to_swap.value = m
  //   currency_i_want.value = p
  
  // }
  
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
}
  </style>