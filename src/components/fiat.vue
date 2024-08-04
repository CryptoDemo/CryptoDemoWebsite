<template>
<div>

    <div style="display: flex; justify-content: space-between; width: 100%;">

      <div class="mobile-fiat" style="display: flex; justify-content: space-between; width: 100%;">

      <div class="hidden-md-and-up flex-sm-and-down" style="display: flex; justify-content: flex-start;">
        <MobileFiatBal/>
      </div>

        <div style="display: flex; justify-content: space-between; align-items: self-end; ">
    
            <v-btn @click="dialog = true" class="fiat-btn send-btn" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
                <img src="/svg/send-arrow.svg" class="me-1"/>
                Fund
            </v-btn>
    
            
            <v-dialog v-model="dialog" max-width="500">
        
                <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 20px; position: relative;">
                <v-card-text>
                    <h3 class="text-center">Wallet Deposit</h3>
                    <span class="text-center mb-2 mt-2" style="display: flex; justify-content: center;">Fund your fiat wallet in your preferred currency</span>
                    <input type="number" placeholder="Enter  ammount" v-model="fund_fiat_payload" :class="isDark ? 'btn-segment':'btn-segment-light'" style="outline: none; height: 60px; width: 100%; padding: 10px; margin-top: 10px; border-radius: 20px; position: relative;"/>
                
                    <v-menu>
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn @click.prevent="toggleChevron()" v-bind="activatorProps" :class="isDark ? 'txn-cards-dark':'txn-cards-light'" style="min-width: 70px; height: 53px; position: absolute; border-radius: 15px; box-shadow: none; right: 5.5%; margin-top: 13px; letter-spacing: 0px;  text-transform: capitalize;">
                                {{ pinia.state.preferredCurrency }}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z" />
                                </svg>
                            </v-btn>
                        </template>
    
                        <v-list :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 15px;">
                            <v-list-item style="display: contents; left: 532px;">
                            <v-row dense style="max-width: 250px; height: 300px; overflow: scroll;">
                                <v-col v-for="(currency, index) in pinia.state.allcountries" :key="index" sm="12">
                                <v-list-item @click="pinia.state.preferredCurrency=currency.currency_name; pinia.state.Selectedcurrency_code = currency.currency_code" style="display: flex;">
                                
                                <span class="currency-list my-2">{{ currency.currency_name }}</span>
                             
                                </v-list-item>
                            </v-col>
                            </v-row>
                            </v-list-item>
                        </v-list>
                    </v-menu> 
                    
                    <v-alert class="text-subtitle-2" type="info" variant="tonal" style="border-radius: 15px; margin-top: 20px;">
                        The minimum funding amount for {{ pinia.state.preferredCurrency }} is {{ pinia.state.Selectedcurrency_code }}{{ formatBalance(fiatToken.minimum_fiat_funding) }}, and the maximum funding amount is {{ pinia.state.Selectedcurrency_code }}{{ formatBalance(fiatToken.maximum_fiat_funding) }}.
                    </v-alert>
    
    
                </v-card-text>
    
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <div class="px-4 mb-3">
                        <v-btn :loading="isloading" @click=fund_fiat_w() style="letter-spacing: 0px; width: 100px; font-weight: 600; color: #2873FF; text-transform: unset; font-size: 16px;">Proceed</v-btn>
                        <v-btn @click="dialog = false" style="letter-spacing: 0px; width: 100px; font-weight: 600; text-transform: unset; font-size: 16px;">Cancel</v-btn>
                    </div>
    
                </v-card-actions>
                </v-card>
    
            </v-dialog>

            <v-btn @click="dialog1 = true" class="fiat-btn" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
                <img src="/svg/get.svg" class="me-1"/>
                Send
            </v-btn>
    
            
            <v-dialog v-model="dialog1" transition="dialog-bottom-transition" fullscreen>
        
                <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 20px; position: relative;">

                    <v-card-text>
                        <h3 class="text-center">Send Money</h3>
                        <span class="text-center mb-2 mt-2" style="display: flex; justify-content: center;">Effortlessly transfer funds using our fiat currency service.</span>
                        
                        <v-btn @click="dialog2 = true" class="mt-10 mb-8" :class="isDark ? 'txn-cards-dark':'txn-cards-light'" style="height: 90px; width: 100%; display: flex;justify-content: normal; letter-spacing: 0.8px; line-height: 25px; text-transform: unset;">
                            <div class="d-flex" style="align-items: center;">
                                <h1 style="color: #2873FF;">@</h1>
                                <div class="d-flex" style="flex-direction: column;">
                                    <span class="ml-2" style="font-weight: 600; align-items: flex-start;text-align: justify;">Send Money using CryptoDemo Tag</span>
                                    <span class="ml-2" style="font-weight: 400;">Easily transfer funds globally using the crypto demo tag for instant transactions.</span>
                                </div>
                            </div>
                        </v-btn>

                        <v-dialog v-model="dialog2" max-width="500">
            
                            <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 20px; position: relative;">

                                <v-card-text v-if="!showPinInput || showBackButton">
                                    <h3 class="text-center">Send money using Tag</h3>
                                    <span class="text-center mb-2 mt-2" style="display: flex; justify-content: center;">
                                        Transfer funds instantly using the user's username.
                                    </span>
                                    <div class="position-relative">
                                        <input 
                                        type="text" 
                                        placeholder="@Enter Username tag" 
                                        v-model="fiatUsername" 
                                        :class="isDark ? 'btn-segment' : 'btn-segment-light'" 
                                        style="outline: none; height: 60px; width: 100%; padding: 10px; margin-top: 10px; border-radius: 20px; position: relative;"
                                        />
                                        <v-progress-circular 
                                        v-if="loading_username" 
                                        indeterminate 
                                        color="primary" 
                                        style="position: absolute; right: 10px; margin-top: 23px;"
                                        ></v-progress-circular>
                                        <v-icon 
                                        v-if="showSuccessIcon" 
                                        size="35" 
                                        color="green-darken-1" 
                                        icon="mdi-check-circle" 
                                        style="position: absolute; right: 10px; margin-top: 23px;"
                                        ></v-icon>
                                        <v-icon 
                                        v-if="showFailureIcon" 
                                        size="35" 
                                        color="red-darken-1" 
                                        icon="mdi-close-octagon" 
                                        style="position: absolute; right: 10px; margin-top: 23px;"
                                        ></v-icon>

                                        <span 
                                        class="text-subtitle-2" 
                                        :class="isDark ? 'text-dark' : 'text-light'" 
                                        v-if="showSuccessIcon"
                                        >
                                        Please confirm that the full name of this user is 
                                        <span style="color: #2873FF; font-weight: 600;">{{ userName }}</span>
                                        </span>
                                        <span 
                                        class="text-subtitle-2" 
                                        :class="isDark ? 'text-dark' : 'text-light'" 
                                        v-else
                                        >
                                        Enter the valid username of the receiver
                                        </span>
                                    </div>

                                    <div class="mt-4">
                                        <input 
                                        type="number" 
                                        placeholder="Enter amount" 
                                        v-model="fiat_ammount_to_send" 
                                        :class="isDark ? 'btn-segment' : 'btn-segment-light'" 
                                        style="outline: none; height: 60px; width: 100%; padding: 10px; margin-top: 10px; border-radius: 20px; position: relative; margin-top: 10px;"
                                        />
                                        <span 
                                        class="text-subtitle-2" 
                                        :class="isDark ? 'text-dark' : 'text-light'"
                                        >
                                        The minimum amount is 
                                        <span style="color: #2873FF; font-weight: 600;">
                                            {{ pinia.state.preferredCurrency }}{{ formatBalance(fiatToken.minimum_fiat_funding) }}
                                        </span>
                                        </span>
                                    </div>
    
                                 </v-card-text>

                                <v-card-text v-if="showPinInput && hasPin &&  !showResetPinForm" class="pin-form d-flex" style="flex-direction: column;">
                                    <span class="text-center text-h6 text-md-h5">Enter Your Transfer PIN</span>
                                    <h5 class="text-center mb-2 mt-2" style="display: flex; justify-content: center;" :class="isDark ? 'text-dark' : 'text-light'">Please enter your 4-digit PIN to authorize this transaction.</h5>
                                    <v-otp-input length="4" v-model="otp" variant="plain" divider="•" style="margin: auto; margin-top: 10px;"></v-otp-input>
                                </v-card-text>

                                <v-card-text v-if="showPinInput && !hasPin" class="pin-form d-flex"  style="flex-direction: column;">
                                <span class="text-center text-h6 text-md-h5">Set Your Transfer PIN</span>
                                <h5 class="text-center mb-2 mt-2" style="display: flex; justify-content: center;" :class="isDark ? 'text-dark':'text-light'">For your security, please set a 4-digit PIN to authorize transfers.</h5>
                                <v-otp-input length="4"  v-model="otp"  variant="plain" divider="•" style="margin: auto; margin-top: 10px;"></v-otp-input>
                                </v-card-text>

                        
                                <div v-if="showPinInput && hasPin &&  showResetPinForm">
                                    <v-card-text  class="pin-form d-flex"  style="flex-direction: column;">
                                        <span class="text-center text-h6 text-md-h5">Reset Pin</span>
                                        <h5 class="text-center mb-2 mt-2" style="display: flex; justify-content: center;" :class="isDark ? 'text-dark':'text-light'" >For your security, please set a 4-digit PIN to authorize transfers.</h5>
                                        <v-otp-input length="4" v-model="Newotp"  variant="plain" divider="•" style="margin-top: 10px; margin-left: 18px;"></v-otp-input>
                                        <span class="text-subtitle-2 mb-2 mt-2 ml-4" :class="isDark ? 'text-dark':'text-light'">Enter new transfer pin</span>
                                        <v-otp-input length="4"  v-model="Msgotp"  variant="plain" divider="•" style="margin-top: 10px;  margin-left: 18px;"></v-otp-input>
                                        <span class="text-subtitle-2 mb-2 mt-2 ml-4" :class="isDark ? 'text-dark':'text-light'">Enter the 4-digit code sent to your email</span>
                                        <v-btn :loading="loading_send_fiat" @click=changePin() style="letter-spacing: 0px; background: inherit; width: 100px; font-weight: 600; color: #2873FF; text-transform: unset; font-size: 16px;">Reset pin</v-btn>
                                     </v-card-text>
                                </div>


                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <div class="px-4 mb-3">
                                        <v-btn @click="continueToOtp()" :loading="loading_send_fiat" style="letter-spacing: 0px; width: 100px; font-weight: 600; color: #2873FF; text-transform: unset; font-size: 16px;" v-if="!showPinInput || showBackButton">continue</v-btn>
                                        <v-btn @click="setPin()" :loading="loading_send_fiat" style="letter-spacing: 0px; width: 100px; font-weight: 600; color: #2873FF; text-transform: unset; font-size: 16px;" v-if="showPinInput && !hasPin">Set Pin</v-btn>
                                        <!-- <v-btn @click="dialog2 = false" style="letter-spacing: 0px; width: 100px; font-weight: 600; text-transform: unset; font-size: 16px;" v-else>Cancel</v-btn> -->
                                        <v-btn :loading="loading_send_fiat" @click=recoverPin() style="letter-spacing: 0px; width: 100px; font-weight: 600; color: #2873FF; text-transform: unset; font-size: 16px;" v-if="showPinInput && hasPin">Recover pin</v-btn>
                                        <v-btn @click="goBack()" style="letter-spacing: 0px; width: 100px; font-weight: 600; text-transform: unset; font-size: 16px;" v-if="showPinInput"> Back </v-btn>
                                        <v-btn :loading="loading_send_fiat" @click=VerifyPin() style="letter-spacing: 0px; width: 100px; font-weight: 600; color: #2873FF; text-transform: unset; font-size: 16px;" v-if="showPinInput && hasPin">Proceed</v-btn>
                                    </div>

                                </v-card-actions>

                             </v-card>

                        </v-dialog>
        
                        <Fiat-withdrawal-acct/>
        
                    </v-card-text>
        
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <div class="px-4 mb-3">
                            <v-btn @click="dialog1 = false" style="letter-spacing: 0px; width: 100px; font-weight: 600; text-transform: unset; font-size: 16px;">Cancel</v-btn>
                        </div>
                    </v-card-actions>

                </v-card>
    
            </v-dialog>

             
            <FiatSwap/>       
          </div>
      </div>

        <!-- <v-btn class="fiat-btn" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
            <img src="/svg/arrow-swap.svg" class="me-1"/>
            Swap
        </v-btn> -->
    </div>
</div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useTheme } from 'vuetify';
import { fundFiatWallet, getbals, sendFiat } from "@/composables/requests/fiat";
import { getUserInfo, set_Pin, verify_Pin, Init_pin_recovery, reset_Pin} from "@/composables/requests/users";
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
const showBackButton = ref(false);
const showResetPinForm = ref(false)
const hasPin = computed(() => pinia.state.user.is_pin_set !== null && pinia.state.user.is_pin_set !== false);
console.log(hasPin.value)
const otp = ref("");
const Newotp = ref("");
const Msgotp = ref("");
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
        console.log(user_data)
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
    push.error(`${e}`);
  }
};

// const debounced_get_user_info = debounce(get_user_info);

watchEffect(() => {
    if (fiatUsername.value) {
      console.log(fiatUsername.value)
      showSuccessIcon.value = false;
      showFailureIcon.value = false;
      debounce(get_user_info);
    }
});

const continueToOtp =() => {
      // Hide the previous inputs and content
      showPinInput.value = true;
      showBackButton.value = false;
};


const goBack = () => {
  showPinInput.value = false;
  showBackButton.value = false;
};


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

const recoverPin = async () => {
  loading_pin.value = true;
  
  try {
    const data = await Init_pin_recovery();
    
    if (data.success) {
      push.success('a 4-digit pin has been sent to your mail');
      showResetPinForm.value = true;
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

const changePin = async () => {
  loading_pin.value = true;
  const payload = {
    pin: Newotp.value,
    code: Msgotp.value,
  }

  try {
    const data = await reset_Pin(payload);
    otp.value  = "";
    if (data.success) {
        push.success(data.message);
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
            dialog2.value = false;
        } else {
            push.error(data.message, { duration: 2000 });
        }
    } catch (e) {
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
.fiat-btn{
display: flex;
height: 132px;
width:  260px;
border-radius: 16px;
justify-content: center;
align-items: center;
flex-shrink: 0;
color: var(--Gray-Light, #D8D8D8);
font-family: Manrope;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 33.6px */
}

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
.pin-form :deep(.v-otp-input .v-field) {
  height: 60px !important;
  width: 60px !important;
  justify-content: space-between !important;
  border-radius: 15px;
  border: 1px solid #303a46;
  background: inherit !important;
  border-radius: 15px;
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
  height: 155px; 
  width: 100%; 
  padding: 20px;
  flex-direction: column;
  background: var(--linear-card, linear-gradient(270deg, #1DA1DB -11.75%, #2873FF 119.96%));
  filter: drop-shadow(0px 27px 20px rgba(0, 0, 0, 0.02));
  border-radius: 18px;
  }
}
</style>