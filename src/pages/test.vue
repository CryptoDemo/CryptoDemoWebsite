<template>
  <div>
  
      <div style="display: flex; justify-content: space-between; width: 100%;">
  

              <v-btn @click="dialog1 = true" class="fiat-btn" :class="isDark ? 'txn-cards-dark':'txn-cards-light'" style="height: 90px; width: 100%; display: flex;justify-content: normal; letter-spacing: 0.8px; line-height: 25px; text-transform: unset;">
                <div class="d-flex" style="align-items: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#2873FF" class="bi bi-plus-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
               
                    <div class="d-flex" style="flex-direction: column;">
                        <span class="ml-2" style="font-weight: 600; align-items: flex-start;text-align: justify;">Add a Withdrawal account</span>
                        <span class="ml-2" style="font-weight: 400;">To receive your payment, please provide the details of your withdrawal account.</span>
                    </div>
                </div>
              </v-btn>
      
              
              <v-dialog v-model="dialog1" transition="dialog-bottom-transition" fullscreen>
          
                  <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 20px; position: relative;">
  
                      <v-card-text>
                          <h3 class="text-center">withdrawal account information</h3>
                          <span class="text-center mb-2 mt-2" style="display: flex; justify-content: center;">Effortlessly Withdraw funds using our fiat currency service.</span>
                         
                          <div style="display: flex; flex-direction: column; justify-content: center; margin: auto; align-items: center; margin-top: 30px;">
                            
                            <div class="d-flex" style="flex-direction: column; width: 70%;">
                              <v-menu>
                                <template v-slot:activator="{ props }">
                                  <v-btn class="input-styling1 ml-1" :class="isDark ? 'txn-cards-dark':'txn-cards-light'" v-bind="props"  style="box-shadow: none; height: 60px;">
                                    <div  class="py-3" style="display: flex; cursor: pointer; position: absolute; left: 37px; align-items: center;">
                                      <span :class="isDark ? 'text-dark':'text-light'" class="me-2" style="font-weight: 700; font-size: 16px;">{{pinia.state.Selectedcurrency_code}}</span>
                                      <span :class="isDark ? 'text-dark':'text-light'" class="mt-" style="font-weight: 700;">{{pinia.state.preferredCurrency}}</span> 
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none" style="position: absolute; right: 30px; bottom: 27px;" :class="isDark ? 'svg-dark':'svg-light'">
                                      <path d="M5.05508 5.99413C5.19232 5.99415 5.32822 5.96714 5.45502 5.91463C5.58182 5.86213 5.69705 5.78516 5.7941 5.68813L9.69409 1.78814C9.88995 1.59227 10 1.32663 10 1.04964C10 0.772651 9.88995 0.50701 9.69409 0.311147C9.49823 0.115285 9.23259 0.00523901 8.9556 0.00523901C8.67861 0.00523901 8.41296 0.115285 8.2171 0.311147L5.0531 2.71114L1.8891 0.311147C1.69324 0.115285 1.4276 0.00523901 1.1506 0.00523901C0.873613 0.00523901 0.607941 0.115285 0.412079 0.311147C0.216217 0.50701 0.106201 0.772651 0.106201 1.04964C0.106201 1.32663 0.216217 1.59227 0.412079 1.78814L4.3121 5.68813C4.4096 5.78569 4.52546 5.86297 4.65298 5.91549C4.78051 5.96801 4.91716 5.99473 5.05508 5.99413Z"/>
                                    </svg>
                                  </v-btn>
                                </template>
    
                                <v-list :class="isDark ? 'country-dropdown1':'country-dropdown1-light'" >
                                  <v-list-item style="width: 100%;">
                                    <div v-for="(currency, index) in pinia.state.allcountries" class="d-flex py-1" :key="index">
                                      <v-list-item @click="pinia.state.preferredCurrency=currency.currency_name; pinia.state.Selectedcurrency_code = currency.currency_code">
                                          <div class="d-flex ml-4">
                                            <span :class="isDark ? 'country-name' : 'country-name-light'">{{ currency.currency_name }}</span>
                                          </div>
                                      </v-list-item>
                                    </div>
                                  </v-list-item>
                                </v-list>
                              </v-menu>

                                <span class="text-subtitle-2 mt-1 ml-2" :class="isDark ? 'text-dark':'text-light'">
                                  Please select the currency for withdrawal. Kindly note that withdrawals are only permitted in currencies where you have an existing balance.
                                </span>
                        
                            </div>

                            <div class="d-flex mt-3" style="flex-direction: column; width: 70%;">
                              <input type="number" placeholder="Enter  ammount" :class="isDark ? 'btn-segment':'btn-segment-light'" style="outline: none; height: 60px; padding: 10px; margin-top: 10px; border-radius: 20px; position: relative;"/>
                            
                              <span class="text-subtitle-2 mt-1 ml-2" :class="isDark ? 'text-dark':'text-light'">
                                  Enter withdrawal ammount. The minimum withdrawal is 
                                  <span style="color: #2873FF;">{{ pinia.state.Selectedcurrency_code }}{{ minimumWithdrawalAmmount }}</span> with a withdrwal percentage fee of
                                  <span style="color: #2873FF;">{{ pinia.state.Selectedcurrency_code }}{{ Withdrawalfee }}</span> 
                              </span>
                            </div>

                            <template v-if="!isStripeGateway">


                            <div class="d-flex mt-3" style="flex-direction: column; width: 70%;">
                              <input type="text" placeholder="Enter Bank name" v-model="Bankname" :class="isDark ? 'btn-segment':'btn-segment-light'" style="outline: none; height: 60px; padding: 10px; margin-top: 10px; border-radius: 20px; position: relative;"/>
                            
                              <span class="text-subtitle-2 mt-1 ml-2" :class="isDark ? 'text-dark':'text-light'">
                                  Enter Bank Name.
                              </span>
                            </div>

                            <div class="d-flex mt-3" style="flex-direction: column; width: 70%;">
                              <input type="text" placeholder="Enter account name" v-model="acctName" :class="isDark ? 'btn-segment':'btn-segment-light'" style="outline: none; height: 60px; padding: 10px; margin-top: 10px; border-radius: 20px; position: relative;"/>
                            
                              <span class="text-subtitle-2 mt-1 ml-2" :class="isDark ? 'text-dark':'text-light'">
                                  Enter account name.
                              </span>
                            </div>

                            <div class="d-flex mt-3" style="flex-direction: column; width: 70%;">
                              <input type="text" placeholder="Enter account number" v-model="acctNumber" :class="isDark ? 'btn-segment':'btn-segment-light'" style="outline: none; height: 60px; padding: 10px; margin-top: 10px; border-radius: 20px; position: relative;"/>
                            
                              <span class="text-subtitle-2 mt-1 ml-2" :class="isDark ? 'text-dark':'text-light'">
                                  Enter account number.
                              </span>
                            </div>

                            </template>

                          
                            <v-btn @click="Withdrawal_ ()" class="primary-btn1 mt-8" v-if="!isStripeGateway" :loading="loading_withdrawal" style="width: 70%; height: 60px;"> Process withdrawal</v-btn>

                            <v-btn class="primary-btn1 mt-8" v-else style="width: 70%; height: 60px;">Proceed with Stripe</v-btn>
                
                          </div>
  
                         
          
                      </v-card-text>
          
                      <v-card-actions>
                          <v-spacer></v-spacer>
                          <div class="px-4 mb-3">
                              <v-btn @click="dialog1 = false" style="letter-spacing: 0px; width: 100px; font-weight: 600; text-transform: unset; font-size: 16px;">Cancel</v-btn>
                          </div>
                      </v-card-actions>
  
                  </v-card>
      
              </v-dialog>
  
  
  
              
              
                          
                     
  
  
  
      </div>
  </div>
  </template>
  
  <script setup>
  import { ref, watchEffect } from 'vue';
  import { useTheme } from 'vuetify';
  import { WithdrawFund } from "@/composables/requests/fiat";

import { push } from 'notivue';

  
  const theme = useTheme()
  const isDark = computed(() =>  theme.global.current.value.dark);
  const pinia = useStore();

  const fiatUsername = ref('');
  const fiat_ammount_to_send = ref(0);
  const dialog = ref(false);
  const dialog1 = ref(false);
  const dialog2 = ref(false);
  const Bankname = ref('');
  const acctName = ref('');
  const acctNumber = ref();
  const loading_withdrawal = ref(false);
  
  
  const withdrawal = computed(() => {
    return pinia.state.allcountries.find(country => country.currency_name === pinia.state.preferredCurrency);
  });

  
  const minimumWithdrawalAmmount = computed(() => {
    return withdrawal.value ? withdrawal.value.minimum_withdrawal : null;
  });


  const Withdrawalfee = computed(() => {
    return withdrawal.value ? withdrawal.value.withdrawal_percentage_fee : null;
  });


  const paymentGateway = computed(() => {
    return withdrawal.value ? withdrawal.value.supported_payment_gateways : null;
  });

  
  const isStripeGateway = computed(() => {
  return paymentGateway.value && paymentGateway.value.includes('stripe');
});

const Countryid = computed(() => {
  return pinia.state.allcountries.find(country => country.currency_name === pinia.state.preferredCurrency);
});


const Withdrawal_ = async () => {

    const payload = {
    country_id: Countryid.value.id,
    withdrawal_info: {
        bank_name: Bankname.value,
        account_name: acctName.value,
        account_number: acctNumber.value
    }
}
    loading_withdrawal.value = true;

  try {
    const data = await WithdrawFund(payload);
    loading_withdrawal.value = false;

    if (data.success) {
        const user_data = data.data
        console.log(data.data)
 
    } else {
     push.error(`${data.message}`)
    }
  } catch (e) {
    loading_withdrawal.value = false;
    console.log(e);
    push.error(`${e}`);
  }
};
   
  const isChevronToggled = ref(false);
  const toggleChevron = () => {
      isChevronToggled.value = !isChevronToggled.value;
  };
  </script>
  
  <style scoped>

  
  .btn-segment{
  border: 1px solid #1B2537;
  }
  
  .btn-segment-light{
  border: 1px solid #E2E8F0;
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
  
  .chevron-icon {
  transition: transform 0.3s;
  }
  
  .chevron-icon-rotated {
  transform: rotate(180deg);
  }
  
  .close-btn{
  fill: white;
  }
  .close-btn-dark{
  fill: #10192D;
  }
  </style>