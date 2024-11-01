<template>
<div>

    <div style="display: flex; justify-content: space-between; width: 100%;">

      <div class="mobile-fiat" style="display: flex; justify-content: space-between; width: 100%;">

      <div class="hidden-md-and-up flex-sm-and-down" style="display: flex; justify-content: flex-start;">
        <MobileFiatBal/>
      </div>

        <div style="display: flex; justify-content: space-between; align-items: self-end; width: 100%;">
    
            <v-btn @click="dialog = true" class="fiat-btn send-btn me-" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
                <img src="/svg/send-arrow.svg" class="me-1"/>
                Fund
            </v-btn>
    
            
            <v-dialog v-model="dialog" max-width="500">
        
                <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 20px; position: relative;">
                <v-card-text>
                    <h3 class="text-center">Wallet Deposit</h3>
                    <span class="text-center mb-2 mt-2 fund-wallet" style="display: flex; justify-content: center;">Fund your fiat wallet in your preferred currency</span>
                    <input type="number" placeholder="Enter  ammount" v-model="fund_fiat_payload" :class="isDark ? 'input-outline':'input-outline-light'" style="outline: none; height: 60px !important; width: 100%; padding: 10px !important; margin-top: 10px; border-radius: 15px; position: relative;"/>
                
                    <v-menu>
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn @click.prevent="toggleChevron()" class="toggle-btn" v-bind="activatorProps" :class="isDark ? 'txn-cards-dark':'txn-cards-light'" style="min-width: 70px; height: 53px; position: absolute; border-radius: 15px; box-shadow: none; right: 5.5%; margin-top: 13px; letter-spacing: 0px;  text-transform: capitalize;">
                                {{ pinia.state.preferredCurrency }}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z" />
                                </svg>
                            </v-btn>
                        </template>
    
                        <v-list :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 15px; max-height: 300px; width: 250px;">
                            <v-list-item style="display: contents;">
                            <v-row dense style="overflow: scroll; display: flex;flex-direction: column;">
                                <v-col v-for="(currency, index) in pinia.state.allcountries" :key="index" sm="12">
                                <v-list-item @click="pinia.state.preferredCurrency=currency.currency_name; pinia.state.Selectedcurrency_code = currency.currency_code" style="display: flex;">
                                
                                <span class="currency-list my-2">{{ currency.currency_name }}</span>
                             
                                </v-list-item>
                            </v-col>
                            </v-row>
                            </v-list-item>
                        </v-list>
                    </v-menu> 
                    
                    <div class="hidden-md-and-up flex-sm-and-down">
                      <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 14px;">Minimum {{ pinia.state.Selectedcurrency_code }}{{ formatBalance(fiatToken.minimum_fiat_funding) }}</span>
                    </div>
                      <v-alert class="text-subtitle-2 fund-alert" type="info" variant="tonal" style="border-radius: 15px; margin-top: 20px;">
                          The minimum funding amount for {{ pinia.state.preferredCurrency }} is {{ pinia.state.Selectedcurrency_code }}{{ formatBalance(fiatToken.minimum_fiat_funding) }}, and the maximum funding amount is {{ pinia.state.Selectedcurrency_code }}{{ formatBalance(fiatToken.maximum_fiat_funding) }}.
                      </v-alert>
    
    
                </v-card-text>
    
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <div class="mb-3 d-flex">
                        <v-btn :loading="isloading" @click=fund_fiat_w() style="letter-spacing: 0px; font-weight: 600; color: #2873FF; text-transform: unset; font-size: 16px;">Proceed</v-btn>
                        <v-btn @click="dialog = false" style="letter-spacing: 0px; font-weight: 600; text-transform: unset; font-size: 16px;">Cancel</v-btn>
                    </div>
    
                </v-card-actions>
                </v-card>
    
            </v-dialog>

            <v-btn @click="dialog1 = true" class="fiat-btn me-" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
                <img src="/svg/get.svg" class="me-1"/>
                Send
            </v-btn>
    
            
            <v-dialog v-model="dialog1" transition="dialog-bottom-transition" fullscreen>
        
              <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 20px; position: relative;">
                
                
                <v-card-text class="card-width" style="width: 80%; margin: auto;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x-circle mt-5" viewBox="0 0 16 16" @click="dialog1 = false" style="display: flex; margin-inline-start: auto; cursor: pointer">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                  </svg>
                        <h3 class="text-center header-txt">Send Money</h3>
                        <span class="text-center mb-2 mt-2" style="display: flex; justify-content: center;">Effortlessly transfer funds using our fiat currency service.</span>
                        
                        <v-card @click="dialog2 = true" class="mt-10 mb-8" :class="isDark ? 'txn-cards-dark':'txn-cards-light'" style="height: 90px; width: 100%; display: flex;justify-content: normal; letter-spacing: 0px; line-height: 25px; text-transform: unset;">
                            <div class="d-flex" style="align-items: center;">
                                <h1 style="color: #2873FF;">@</h1>
                                <div class="d-flex" style="flex-direction: column;">
                                    <span class="ml-2" style="font-size: 14px; font-weight: 600; align-items: flex-start;text-align: justify;">Send Money using CryptoDemo Tag</span>
                                    <span class="ml-2" style="font-weight: 400; font-size: 14px;">Easily transfer funds globally using the crypto demo tag for instant transactions.</span>
                                </div>
                            </div>
                        </v-card>

                        <v-dialog v-model="dialog2" max-width="450">
            
                            <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" class="send-fiat-dialog" style="border-radius: 20px; position: relative;">

                                <v-card-text v-if="!showPinInput">
                                    <h3 class="text-center">Send money using Tag</h3>
                                    <span class="text-center mb-2 mt-2" style="display: flex; justify-content: center; font-size: 14px;">
                                        Transfer funds instantly using the user's username.
                                    </span>

                                    <div class="position-relative">

                                      <input type="text" placeholder="@Enter Username tag" v-model="fiatUsername" :class="isDark ? 'input-outline' : 'input-outline-light'" style="outline: none; height: 60px; width: 100%; padding: 10px; margin-top: 10px; border-radius: 20px; position: relative;"/>  
                                        <v-progress-circular v-if="loading_username" indeterminate color="primary" style="position: absolute; right: 10px; margin-top: 23px;"></v-progress-circular>
                                        <v-icon v-if="showSuccessIcon" size="35" color="green-darken-1" icon="mdi-check-circle" style="position: absolute; right: 10px; margin-top: 23px;"></v-icon>
                                        <v-icon v-if="showFailureIcon" size="35" color="red-darken-1" icon="mdi-close-octagon" style="position: absolute; right: 10px; margin-top: 23px;"></v-icon>
                                        <span v-if="showSuccessIcon" style="color: #2873FF; font-weight: 600; font-size: 14px;">{{ userName }}</span>     
                                        <span class="text-subtitle-2" :class="isDark ? 'text-dark' : 'text-light'" v-else> Enter the valid username of the receiver </span>
                                    </div>

                                    <div class="mt-4">
                                      <input type="number" placeholder="Enter amount" v-model="fiat_ammount_to_send" :class="isDark ? 'input-outline' : 'input-outline-light'" style="outline: none; height: 60px; width: 100%; padding: 10px; margin-top: 10px; border-radius: 20px; position: relative; margin-top: 10px;"/>
                                        <span class="text-subtitle-2" :class="isDark ? 'text-dark' : 'text-light'"> The minimum amount is 
                                        <span style="color: #2873FF; font-weight: 600;"> {{ pinia.state.preferredCurrency }}{{ formatBalance(fiatToken.minimum_fiat_funding) }} </span>
                                        </span>
                                    </div>

                                    <v-btn @click="continueToOtp()" class="primary-btn1 mt-4" :loading="loading_send_fiat" style="width: 100%; font-weight: 600; font-size: 16px; height: 50px; border-radius: 10px!important">continue</v-btn>
                                </v-card-text>

                                <v-card-text v-if="showPinInput && hasPin" class="pin-form d-flex" style="flex-direction: column;">
                                    <span class="text-center text-h6 text-md-h5">Enter Your Transfer PIN</span>
                                    <h5 class="text-center mb-2 mt-2" style="display: flex; justify-content: center;" :class="isDark ? 'text-dark' : 'text-light'">Please enter your 4-digit PIN to authorize this transaction.</h5>
                                    <v-otp-input length="4" type="password" v-model="otp" variant="underlined"  style="margin: auto; margin-top: 10px; margin-bottom: 20px;"></v-otp-input>
                                    <v-btn :loading="loading_send_fiat" variant="tonal" @click=VerifyPin() style="letter-spacing: 0px; width: 100%; height: 45px; border-radius: 10px; font-weight: 600; color: #2873FF; text-transform: unset; font-size: 16px;">Proceed</v-btn>
                                </v-card-text>

                                <v-card-text v-if="showPinInput && !hasPin" class="pin-form d-flex"  style="flex-direction: column;">
                                <span class="text-center text-h6 text-md-h5">Set Your Transfer PIN</span>
                                <h5 class="text-center mb-2 mt-2" style="display: flex; justify-content: center; font-size: 14px !important" :class="isDark ? 'text-dark':'text-light'">For your security, please set a 4-digit PIN to authorize transfers.</h5>
                                
                                <div style="display: flex; flex-direction: column; margin-top: 12px; margin-bottom: 20px;">
                                  <v-otp-input v-model="newPinOtp" type="password" class="mx-auto" length="4" variant="underlined"></v-otp-input>
                                  <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 14px; display: flex; justify-content: center;">Set transaction pin</span>
                                </div>

                                <div style="display: flex; flex-direction: column; margin-top: 12px; margin-bottom: 20px;">
                                  <v-otp-input v-model="confirmPinOtp" type="password" class="mx-auto" length="4" variant="underlined"></v-otp-input>
                                  <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 14px; display: flex; justify-content: center;">re-enter transaction pin</span>
                                </div>

                                <v-btn @click="setPin()" variant="tonal" :loading="loading_send_fiat" style="letter-spacing: 0px; width: 100%; font-weight: 600; color: #2873FF; text-transform: unset; font-size: 16px;">Set Pin</v-btn>
                                </v-card-text>

                             </v-card>

                        </v-dialog>
        
                        <Fiat-withdrawal-acct/>
        
                    </v-card-text>
        

                </v-card>
    
            </v-dialog>

             
            <FiatSwap/>       
          </div>
      </div>


    </div>
</div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useTheme } from 'vuetify';
import { fundFiatWallet, getbals, sendFiat } from "@/composables/requests/fiat";
import { getUserInfo, set_Pin, verify_Pin} from "@/composables/requests/users";
import {debounce} from "@/composables/mixin";

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();
const fund_fiat_payload = ref();
const isloading = ref(false);
const loading_send_fiat = ref(false);
const loading_username = ref(false);
const fiatUsername = ref('');
const fiat_ammount_to_send = ref(0);
const dialog = ref(false);
const dialog1 = ref(false);
const dialog2 = ref(false);
const userName = ref('');
const showSuccessIcon = ref(false);
const showFailureIcon = ref(false);
const showPinInput = ref(false);
const hasPin = computed(() => pinia.state.user.is_pin_set !== null && pinia.state.user.is_pin_set !== false);
const otp = ref("");
const newPinOtp = ref("");
const confirmPinOtp = ref("");
const loading_pin = ref(false)
const nuxtApp = useNuxtApp();


const fiatToken = computed(() => {
  return pinia.state.allcountries.find(country => country.currency_name === pinia.state.preferredCurrency);
});

const minimumFiatFunding = computed(() => {
  return fiatToken.value ? fiatToken.value.minimum_fiat_funding : null;
});

const maximumFiatFunding = computed(() => {
  return fiatToken.value ? fiatToken.value.maximum_fiat_funding : null;
});

const fund_fiat_w = async()=>{
    if(!fund_fiat_payload.value) return push.error('Enter amount');
    try{
        isloading.value = true
        const data = await fundFiatWallet({amount: fund_fiat_payload.value, country_id: fiatToken.value.id});
        isloading.value = false;

        if(data.success){
            const config = data.data
            config.theme = `${isDark.value?'dark':'light'}`;
            config.icon = `${isDark.value?'https://crypto-demo-website-iobf.vercel.app/svg/Logo.svg':'https://crypto-demo-website-iobf.vercel.app/svg/Logo.svg'}`;
            
            const lamba = nuxtApp.$lamba(config);
            let getbalsCount = 0;

            dialog.value = false;
            lamba.on('paymentVerified',()=>{
                const intervalId = setInterval(async () => {
                    if (getbalsCount < 2) {
                        getbalsCount++;
                        await getbals();
                    } else {
                        clearInterval(intervalId); // Stop the setInterval loop after executing getbals() twice
                    }
                }, 1000); // Adjust the interval time as needed
            });

            return  

        }else{
            push.error(`${data.message}`)
        }
        fund_fiat_payload.value = 0
    }catch(e){
        console.log(e)
    }
}

const get_user_info = async () => {
    if (!fiatUsername.value) {
        return;
    }
    loading_username.value = true;

  try {
    const data = await getUserInfo(fiatUsername.value);
    loading_username.value = false;

    if (data.success) {
        const user_data = data.data
        userName.value = user_data.name;

      showSuccessIcon.value = true;
      showFailureIcon.value = false;
     
    } else {
      showSuccessIcon.value = false;
      showFailureIcon.value = true;
    }
  } catch (e) {
    showSuccessIcon.value = false;
    showFailureIcon.value = true;
    loading_username.value = false;
    console.log(e);
  }
};



// const debounced_get_user_info = debounce(get_user_info);

watchEffect(() => {
    if (fiatUsername.value) {
      showSuccessIcon.value = false;
      showFailureIcon.value = false;
      debounce(get_user_info);
    }
});

const continueToOtp = () => {
  // Validate inputs
  if (!fiatUsername.value || !fiat_ammount_to_send.value || showFailureIcon.value ) {
    push.error('Required fields are missing.');
    return;
  }

  // if (fiatToken.value.minimum_fiat_funding > loading_send_fiat.value || showFailureIcon.value ) {
  //   push.error('Insufficient fund.');
  //   return;
  // }


  // Proceed to show PIN input based on whether the user has a PIN
  if (hasPin.value) {
    // Show the input for entering the PIN
    showPinInput.value = true;
  } else {
    // Show the input for setting a new PIN
    showPinInput.value = true;
  }
};

const submitTransaction = () => {
  if (!hasPin.value) {
    // Check if new PIN and confirmation match
    if (newPinOtp.value !== confirmPinOtp.value) {
      push.error("The PINs don't match. Please try again.");
      return;
    }

    // Proceed to set the new PIN
    // e.g. savePin(newPinOtp.value);
  } else {
    // Proceed to authorize transaction with existing PIN (otp.value)
    // e.g. authorizeTransaction(otp.value);
  }
}

const setPin = async () => {
  loading_pin.value = true;
  const payload = {
    pin: otp.value,
  }

  try {
    const data = await set_Pin(payload);
    otp.value  = "";
    if (data.success) {
        push.success(data.message);
        pinia.state.user.is_pin_set = true
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

const VerifyPin = async () => {
  loading_pin.value = true;
  const payload = {
    pin: otp.value,
  }

  try {
    const data = await verify_Pin(payload);
    otp.value  = "";
    if (data.success) {
        push.success(data.message);
        await send_Fiat();
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


const send_Fiat = async () => {

    if (!fiatUsername.value || !fiat_ammount_to_send.value) {
    push.error("Username or amount is empty, cannot send fiat.");
    console.warn("Username or amount is empty, cannot send fiat.");
    return;
  }

  if (fiat_ammount_to_send.value > pinia.state.Total_fiat_bal) {
        push.error("Insufficient balance to send fiat.");
        console.warn("Insufficient balance to send fiat.");
        return;
    }

    showPinInput.value = true;

    loading_send_fiat.value = true;
    const payload = {
        recipient_username: fiatUsername.value,
        country_id: fiatToken.value.id,
        amount: fiat_ammount_to_send.value,
    };

    try {
        const data = await sendFiat(payload);
        loading_send_fiat.value = false;

        if (data.success) {
            pinia.setFiat_transactions({...pinia.state.Fiat_transactions, ...data.data});
            dialog1.value = false;
            dialog2.value = false;
            fiatUsername.value = "";
            fiat_ammount_to_send.value = "";
        } else {
            push.error(data.message, { duration: 2000 });
        }
    } catch (e) {
        console.log(e);
        push.error(`${e}`);
    }
};


const resetForm = () => {
  fiatUsername.value = '';
  fiat_ammount_to_send.value = '';
  showPinInput.value = false;
  loading_username.value = false;
  loading_send_fiat.value = false;
  showSuccessIcon.value = false;
  showFailureIcon.value = false;
  userName.value = '';
};

// Watch dialog2 and reset form when dialog is closed
watch(dialog2, (newVal) => {
  if (!newVal) {
    resetForm();
  }
});


const isChevronToggled = ref(false);
const toggleChevron = () => {
    isChevronToggled.value = !isChevronToggled.value;
};
</script>

<style scoped>
.fiat-btn{
display: flex;
height: 132px;
width:  260px;
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

.input-outline{
border: 1px solid #1B2537;
}

.input-outline-light{
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

.offers-cards-dark{
background: #0D1526;
border-radius: 10px;
}

.offers-cards-light{
background: #edf3ff;
border-radius: 10px;
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

  .mobile-fiat{
  height: 180px; 
  width: 100%; 
  padding: 20px;
  flex-direction: column;
  background: var(--linear-card, linear-gradient(270deg, #1DA1DB -11.75%, #2873FF 119.96%));
  filter: drop-shadow(0px 27px 20px rgba(0, 0, 0, 0.02));
  border-radius: 18px;
  }

  .fund-wallet{
    font-size: 14px;
  }

  .toggle-btn{
    right: 8% !important;
  }

  .fund-alert{
    display: none;
  }

  .header-txt{
  margin-top: 20px !important;
 }

 .card-width{
  width: 100% !important;
 }

}
</style>