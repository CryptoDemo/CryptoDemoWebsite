<template>
  <div>
    <Header :hide="true" :icon1="true" :icon3="true"  :icon2="true" :wallet="true"/>
        <v-container>
          <div class="arrow-btn" style="display: flex; align-items: center; margin-bottom: 24px; margin-top: 100px; margin-left: 22px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" @click.prevent="router.go(-1)" style="cursor: pointer;">
          <path d="M15 19.9181L8.47997 13.3981C7.70997 12.6281 7.70997 11.3681 8.47997 10.5981L15 4.07812" stroke="#B9D1FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
         <span  class="snd-text" style="font-family: Manrope; font-size: 18px; font-style: normal;font-weight: 600;line-height: normal; margin-left: 7px;">Send Coin</span>
         </div>

          <div class="snd-coin" style="margin-top: 60px; border: none; padding: 30px; width: 95%; margin: auto;" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
            <div style="display: flex; flex-direction: column;">
            <span style="margin-bottom: 34px; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 600;line-height: normal;">Send Crypto</span>
            <span style="font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;"> Coin:</span>
            </div>


            <div style="margin-top: 8px; margin-bottom: 8px;">
              <v-menu>
              <template v-slot:activator="{ props }">
                  <v-btn @click.prevent="getBtn()" class="inputstyling1" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" v-bind="props" style="height: 60px !important;">
                  <div class="py-3 me-5" style="display: flex; padding-left: 12px; align-items: center; border-radius: 15px; position: absolute; left: 0;">
                      <img :src="pinia.state.coin_to_transfer"  width="30" class="me-3"/>
                      <span :class="isDark ? 'coin-name':'coin-name-light'" style="font-weight: 600; text-transform: capitalize; font-family: Manrope; font-size: 16px;">{{pinia.state.token_to_transfer}}</span> 
                  </div>
                      <div style="position: absolute; right: 15px; box-shadow: none; background: inherit;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z" />
                      </svg>             
                  </div>
                  </v-btn>
              </template>

              <v-list :class="isDark ? 'country-dropdown':'country-dropdown-light'" style="border-radius: 15px;">
                <v-list-item style="display: contents">
              
                  <div v-for="token in tokensForSelectedNetwork" :key="token.id">
                    <v-list-item @click="pinia.state.token_to_transfer=token.name; coin=token.symbol; pinia.state.coin_to_transfer=token.icon;"  style="display: flex;">
                      <div class="d-flex py-2">
                        <img  :src="token.icon" class="me-3" width="30"/>  
                        <div class="d-flex" style="flex-direction: column;">
                          <span :class="isDark ? 'coin-name':'coin-name-light'" style="display: flex; align-items: center;"> {{ token.name }} </span>
                          <span style="font-family: Manrope; display: flex; align-items: center; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal;">{{ token.symbol }}</span>
                        </div>
                      </div>
                    </v-list-item>
                  </div>
                  
                </v-list-item>
              </v-list>

              </v-menu> 
            </div>
             
            <span :class="isDark ? 'coin-name':'coin-name-light'" style="margin-left: 10px; font-family: Manrope;font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;">Total Balance : 
              <span style="font-family: Manrope; font-size: 16px; font-style: normal;font-weight: 600; line-height: normal;">{{ formatBalance(selectedTokenBalance) }}</span>
            </span>
        
            <div style="margin-top: 18px;">  
                <span :class="isDark ? 'text-dark':'text-light'" class="hint-text" style="font-family: Manrope; margin-left: 10px; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">Amount to Send</span>
            </div>

              <div class="position-relative" style="margin-bottom: 31px;">
                <input type="number" class="px-4 mobile-css"  placeholder="Amount to send..." id="hiddenInput" v-model="trfAmmount" :class="isDark ? 'coin-dropdown':'coin-dropdown-light'" style="border-radius: 15px; margin-top: 8px; outline: none; width:100%; padding-right: 110px !important; display: -webkit-box !important; -webkit-box-orient: vertical !important; line-clamp: 1 !important; text-overflow: ellipsis !important; overflow: hidden !important; margin-bottom: 6px; align-items: center; height: 60px; background: inherit; display: flex; justify-content: space-between;">
                <img :src="pinia.state.coin_to_transfer" class="trf-coin" width="35" style="top: 16%;right: 1.5%; position: absolute;"/>
                <span :class="isDark ? 'text-dark':'text-light'" style=" font-family: Manrope; margin-left: 10px; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">minimum transfer limit:  {{ minimumTransfer?.minimum_transfer }}</span>
            </div>

              
            <div style="margin-top: 18px;">  
                <span :class="isDark ? 'text-dark':'text-light'" class="hint-text"  style=" font-family: Manrope; margin-left: 10px; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">Receiver Wallet Address</span>
            </div>
            
              <div class="position-relative" style="margin-bottom: 32px">
                <input class="px-4 mobile-css" @click="navigateTo" placeholder="bc1qXY2kGdygjrsqtzE2n0yrf2XY3" id="hiddenInput" v-model="transferWallet" :class="isDark ? 'coin-dropdown':'coin-dropdown-light'" style="border-radius: 15px; margin-top: 8px; outline: none; width:100%; padding-right: 110px !important; display: -webkit-box !important; -webkit-box-orient: vertical !important; line-clamp: 1 !important; text-overflow: ellipsis !important; overflow: hidden !important; margin-bottom: 6px; align-items: center; height: 60px; background: inherit; display: flex; justify-content: space-between; ">
                
                <svg xmlns="http://www.w3.org/2000/svg" @click="pasteText()" class="paste-svg" width="30" height="30" viewBox="0 0 24 24" fill="none" style="top: 17%; right: 7%; position: absolute; display: flex; cursor: pointer;">
                  <defs>
                    <!-- Define a linear gradient with an id -->
                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color: #4A90E2; stop-opacity:1" />
                      <stop offset="100%" style="stop-color: #007AFF; stop-opacity:1" />
                    </linearGradient>
                  </defs>
                  <!-- Apply the gradient as the fill of the path -->
                  <path d="M6.8775 4.5H5.625C5.32663 4.5 5.04048 4.61853 4.8295 4.8295C4.61853 5.04048 4.5 5.32663 4.5 5.625V19.875C4.5 20.1734 4.61853 20.4595 4.8295 20.6705C5.04048 20.8815 5.32663 21 5.625 21H9C9.19891 21 9.38968 21.079 9.53033 21.2197C9.67098 21.3603 9.75 21.5511 9.75 21.75C9.75 21.9489 9.67098 22.1397 9.53033 22.2803C9.38968 22.421 9.19891 22.5 9 22.5H5.625C4.92881 22.5 4.26113 22.2234 3.76884 21.7312C3.27656 21.2389 3 20.5712 3 19.875V5.625C3 4.92881 3.27656 4.26113 3.76884 3.76885C4.26113 3.27656 4.92881 3 5.625 3H6.8775C7.03266 2.56113 7.32012 2.18119 7.70026 1.91254C8.0804 1.64389 8.53451 1.49976 9 1.5H13.5C14.4795 1.5 15.3135 2.12625 15.6225 3H16.875C17.5712 3 18.2389 3.27656 18.7312 3.76885C19.2234 4.26113 19.5 4.92881 19.5 5.625C19.5 5.82391 19.421 6.01468 19.2803 6.15533C19.1397 6.29598 18.9489 6.375 18.75 6.375C18.5511 6.375 18.3603 6.29598 18.2197 6.15533C18.079 6.01468 18 5.82391 18 5.625C18 5.32663 17.8815 5.04048 17.6705 4.8295C17.4595 4.61853 17.1734 4.5 16.875 4.5H15.6225C15.4673 4.93887 15.1799 5.31881 14.7997 5.58746C14.4196 5.85611 13.9655 6.00024 13.5 6H9C8.53451 6.00024 8.0804 5.85611 7.70026 5.58746C7.32012 5.31881 7.03266 4.93887 6.8775 4.5ZM8.25 3.75C8.25 3.94891 8.32902 4.13968 8.46967 4.28033C8.61032 4.42098 8.80109 4.5 9 4.5H13.5C13.6989 4.5 13.8897 4.42098 14.0303 4.28033C14.171 4.13968 14.25 3.94891 14.25 3.75C14.25 3.55109 14.171 3.36032 14.0303 3.21967C13.8897 3.07902 13.6989 3 13.5 3H9C8.80109 3 8.61032 3.07902 8.46967 3.21967C8.32902 3.36032 8.25 3.55109 8.25 3.75ZM10.5 10.125C10.5 9.42881 10.7766 8.76113 11.2688 8.26884C11.7611 7.77656 12.4288 7.5 13.125 7.5H19.125C19.8212 7.5 20.4889 7.77656 20.9812 8.26884C21.4734 8.76113 21.75 9.42881 21.75 10.125V19.875C21.75 20.5712 21.4734 21.2389 20.9812 21.7312C20.4889 22.2234 19.8212 22.5 19.125 22.5H13.125C12.4288 22.5 11.7611 22.2234 11.2688 21.7312C10.7766 21.2389 10.5 20.5712 10.5 19.875V10.125Z" fill="url(#blueGradient)"/>
                </svg>

                <v-tooltip text="Address book" location="top">  
                  <template v-slot:activator="{ props }">
                    <button v-bind="props" @click.prevent="navigateTo('/account/trade/Addressbook')" class="addressBook-btn" style="position: absolute; right: 2%; top: 19%;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                        <defs>
                          <!-- Define a linear gradient with an id -->
                          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#FF7F50; stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#FF4500; stop-opacity:1" />
                          </linearGradient>
                        </defs>
                        <!-- Apply the gradient to the stroke attribute of the paths -->
                        <path d="M18 18.8597H17.24C16.44 18.8597 15.68 19.1697 15.12 19.7297L13.41 21.4197C12.63 22.1897 11.36 22.1897 10.58 21.4197L8.87 19.7297C8.31 19.1697 7.54 18.8597 6.75 18.8597H6C4.34 18.8597 3 17.5298 3 15.8898V4.97974C3 3.33974 4.34 2.00977 6 2.00977H18C19.66 2.00977 21 3.33974 21 4.97974V15.8898C21 17.5198 19.66 18.8597 18 18.8597Z" stroke="url(#grad1)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.9999 9.99982C13.2868 9.99982 14.33 8.95662 14.33 7.6698C14.33 6.38298 13.2868 5.33984 11.9999 5.33984C10.7131 5.33984 9.66992 6.38298 9.66992 7.6698C9.66992 8.95662 10.7131 9.99982 11.9999 9.99982Z" stroke="url(#grad1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 15.6603C16 13.8603 14.21 12.4004 12 12.4004C9.79 12.4004 8 13.8603 8 15.6603" stroke="url(#grad1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </template>  
                </v-tooltip>


                <span v-if="!errorMessage && !walletVerified" :class="isDark ? 'text-dark':'text-light'" class="hint-text"  style=" font-family: Manrope; margin-left: 10px; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">Ensure the receiver’s wallet is a valid <span :class="isDark ? 'coin-name':'coin-name-light'"  style="font-family: Manrope;font-size: 16px;font-style: normal;font-weight: 700;line-height: normal;">{{ coin }}</span> wallet address</span>
                <span v-if="!errorMessage" style="color: green; font-size: 14px;">{{ walletVerified }}</span>
                <span v-else style="color: orangered; font-size: 14px;">{{ errorMessage }}</span>
              </div>

            <v-btn @click.prevent="checkInputs()" :loading="loading" :disabled="loading_send_coin" class="primary-btn1" style="width: 100%; border-radius: 17px; height: 56px; color: white; box-shadow: none; font-weight: 600; font-size: 16px; font-family: Manrope;">
            Continue
            </v-btn>

      
            <v-dialog v-model="dialog1" width="450">
              <v-card class="alert-card" style="padding: 24px 20px 24px 20px; border-radius: 12px; width: 450px; border: none;" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">

                  <div v-if="!showOtp" style="display: flex; justify-content: center; flex-direction: column;">
                    <span style="font-family: Manrope;font-size: 18px;font-style: normal;font-weight: 700;line-height: 140%; display: flex;justify-content: center; margin-bottom: 16px">Confirm action</span>
                    <v-alert  variant="tonal" type="info" density="compact" style="font-family: Manrope;font-size: 14px;font-style: normal;font-weight: 600; line-height: 170%; border-radius: 10px;">
                    
                      <span>A tax fee of {{ tax_fee }}  applies, resulting in a total deduction of {{ from_amount_total }} from your account</span>        
                    
                    </v-alert>
                    <span style="font-family: Manrope;font-size: 14px;font-style: normal;font-weight: 600;line-height: 150%; margin-top: 20px;">By clicking the confirm button you will be sending a non refundable amount of <span style="font-weight: 600; font-size: 16px;">{{ trfAmmount }} {{  token_id  }}</span> to {{ transferWallet }}.
                    </span>
                  </div>

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
                        <v-otp-input v-model="PinOtp" class="mx-auto" type="password"  length="4" variant="underlined"></v-otp-input>
                      </div>
                
                      <v-btn @click="VerifyPin()" :loading="loading" variant="tonal" style=" height: 45px; border-radius: 10px; color: #2873FF; font-weight: 600; width: 100%; letter-spacing: 0px;">Proceed</v-btn>
              
                    </div>
                  
                    <div class="mt-3">
                      <v-btn v-if="!showOtp" @click="dialog1 = false" rounded="lg" variant="tonal" class="confirm-txn" style="margin-top: 8px; color: white;  width: 100%; height: 50px">
                          Cancel
                      </v-btn>

                      <v-btn v-if="!showOtp" @click="handleConfirm()" rounded="lg" variant="tonal" :loading="loading_send_coin" class="confirm-txn mt-3" style="margin-top: 8px; width: 100%; height: 50px">
                          Confirm
                      </v-btn>
                    </div>
            
              </v-card>
            </v-dialog>


          </div>
        </v-container>
        <div style="margin-top: 500px;">
          <Footer class="desktop-footer flex-lg-and-up hidden-sm-and-down"/>
          <Mobile-footer class="mobile-footer"/>
      </div>
      </div>
  </template>
  
<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import { calculateTxnFees, executeTrans } from "@/composables/requests/transaction";
import {  verify_Pin, set_Pin} from "@/composables/requests/users";
import {  verifyWalletAddress } from "@/composables/requests/tokens";

definePageMeta({middleware: 'scroll-to-top'});
const router = useRouter();
const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore()
const hasPin = computed(() => pinia.state.user.is_pin_set !== null && pinia.state.user.is_pin_set !== false);
const dialog =  ref(false);
const dialog1 =  ref(false);
const transferWallet = ref(pinia.state.TransferWallet || pinia.state.selectedAdressBook_UserId.walletAdress || "");
const trfAmmount = ref();
const loading = ref(false);
const loading_pin = ref(false);
const minimumTransfer = ref(null);
const loading_send_coin = ref();
const PinOtp = ref("");
const newPinOtp = ref("");
const confirmPinOtp = ref("");
const network = computed(()=>pinia.state.selectedNetwork.toLowerCase());
const coin =  ref();
const showOtp = ref(false)
const fee_id = ref('');
const token_id = ref('');
const from_amount_total = ref(0);
const tax_fee = ref(0);
const is_balance_sufficient = ref(false);
const errorMessage = ref('');
const walletVerified = ref('');
const selectedNetworkId = computed(()=>pinia.state.BlockchainNetworks.find(b=>b.name==network.value)?.id);
const tokensForSelectedNetwork = computed(()=>pinia.state.tokenLists.filter(token => token.token_networks.find(tkn=>tkn.blockchain_id === selectedNetworkId.value)));

const symbols = tokensForSelectedNetwork.value.map(token => token.symbol);


const selectedToken = computed(()=>tokensForSelectedNetwork.value.find(token => token.symbol === coin.value));

  // Compute the balance of the selected token
  const selectedTokenBalance = computed(() => selectedToken.value?.balance || 0);


const pasteText = async () => {
  try {
    const text = await navigator.clipboard.readText();
    transferWallet.value = text;
  } catch (err) {
    console.error('Failed to read clipboard contents: ', err);
  }
};

const getBtn = () => {
toggleChevron();
}


const Newtoken = ref();
Newtoken.value = pinia.state.tokenLists.find(c => c.symbol ===  pinia.state.getNewCoinInfo);

if (Newtoken.value) {
pinia.state.coin_to_transfer = Newtoken.value.icon;
pinia.state.token_to_transfer = Newtoken.value.name;
coin.value = Newtoken.value.symbol;
} else {
  console.error("Token not found");
}

watch(coin, (newCoin) => {
  const mytoken = pinia.state.tokenLists.find(c => c.symbol === newCoin);
  const selectedNetwork = pinia.state.BlockchainNetworks.find(e => e.name.toLowerCase() === pinia.state.selectedNetwork.toLowerCase());
  minimumTransfer.value = mytoken?.token_networks.find(e => e.id === selectedNetwork.blockchain_id);
}, { immediate: true });


const verifyWalletAds = async () => {
  if (pinia.state.isAuthenticated) {
    try {
      const data = await verifyWalletAddress(pinia.state.selectedNetwork.toLowerCase(), transferWallet.value);
      if (data.success) {
        if (data.data?.valid) {
          errorMessage.value = ''; // Clear any previous error message
          walletVerified.value = 'This is a verified wallet address'; // Clear any previous error message
          return { address: data.data.address };
        } else {
          errorMessage.value = 'Invalid wallet address. Please check and try again.';
          walletVerified.value = '';
        }
      } else {
        errorMessage.value = `Error: ${data.message}`;
      }
    } catch (error) {
      // Handle unexpected errors and show to user
      errorMessage.value = `An unexpected error occurred: ${error.message}`;
    }
  }
};

// Watch walletAddress for changes and trigger verifyWalletAds when updated
watch(transferWallet, (newAddress) => {
  if (newAddress) {
    verifyWalletAds();
  }
});

const calculateFee = async () => {
  // Check if any required value is missing or if the transfer amount is less than the minimum transfer amount
  if (!trfAmmount.value || (parseFloat(trfAmmount.value) < minimumTransfer.value.minimum_transfer) || !transferWallet.value) {
    push.error('Required fields are missing or transfer amount is below minimum.');
    return;
  }

  const TxnInfo = {
    transfer_input: {
      token: coin.value,
      amount: parseFloat(trfAmmount.value),
      to_address: transferWallet.value,
    },
  };


  try {
    loading.value = true;
    const data = await calculateTxnFees(TxnInfo);
 

    if (data.success) {
      fee_id.value = data.data.fee_id;
      token_id.value = data.data.token;
      from_amount_total.value = data.data.amount_plus_fee;
      tax_fee.value = data.data.fee_amount;
      is_balance_sufficient.value = data.data.is_balance_sufficient;
      console.log(tax_fee.value);

      pinia.setCalculatedTaxFee(data.data.fee_id);

      dialog1.value = true

      loading.value = false;
    } else {
      loading.value = false;
      push.error(data.message);
    }
  } catch (e) {
    loading.value = false;
    console.log(e);
  }
};

//execute transaction
const execute = async()=>{
  if (parseFloat(trfAmmount.value) > parseFloat(selectedTokenBalance.value)) {
    push.error('Insufficient balance or transfer amount exceeds the available balance.');
    return;
  }
    const info = {
      fee_id: pinia.state.calculatedTaxFee
    }
    try{
      loading_send_coin.value = true

      const data = await executeTrans(info)

      if(data.success){
        
        loading.value = false
        pinia.setTransactionDetails(data.data)
    
        transferWallet.value = "";
        trfAmmount.value = "";
        dialog1.value = false

        push.success('Transfer Succesful')
        navigateTo('/account/trade/wallet');

      }else{
        
        push.error(`${data.message}`, {
        });
        loading_send_coin.value = false;
        
      }
     

    }catch(e){
       console.log(e)
       loading_send_coin.value = false;
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
        await execute();
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

const checkInputs = async () => {
  // Validate inputs
  if (!trfAmmount.value || (parseFloat(trfAmmount.value) < minimumTransfer.value.minimum_transfer) || !transferWallet.value) {
    push.error('Required fields are missing or transfer amount is below minimum.');
    return;
  }


  // Validate wallet address
  const walletVerification = await verifyWalletAds();
  if (!walletVerification) {
    push.error('Invalid wallet address. Please check and try again.');
    return;
  }

  // Calculate the fee before opening the dialog
  await calculateFee();

  // Open the dialog after fee calculation
  dialog1.value = true;
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
  // Check balance sufficiency
  if (!is_balance_sufficient.value) {
    push.error("Insufficient balance");
    return; // Exit early if balance is insufficient
  }

  // Proceed to the next step
  showOtp.value = true; // Show the OTP step by default

  if (!hasPin.value) {
    // Optionally handle the "set PIN" step here
  } else {
    // Optionally handle the "enter PIN" step here
  }
};


watch(dialog1, (newVal) => {
  if (!newVal) {
    showOtp.value = false; // Reset OTP view when dialog is closed
  }
});

watch(transferWallet, (newVal) => {
  pinia.setTransferWallet(newVal);
});


const isChevronToggled = ref(false);
const toggleChevron = () => {
    isChevronToggled.value = !isChevronToggled.value;
};



</script>
  
<style scoped>
.success-txt{
color: #8E9BAE;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 19.6px */
}

.coin-dropdown{
border: 1px solid #1B2537;
}
.coin-dropdown-light{
border: 1px solid #E2E8F0;
}

.profile-cards-dark {
  border: 1px solid #1B2537 !important;
}

.profile-cards-light {
  border: 1px solid #E2E8F0 !important;
}

  
.confirmation-text{
color: #E2E8F0;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 19.6px */
}

.send-txt{
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 19.6px */
}
.inputstyling1{
stroke-width: 1px;
border-radius: 15px !important;
width: 100% !important;
height: 60px !important;
box-shadow: none!important;
letter-spacing: 0px;
}

  
.country-dropdown{
border-radius: 15px;
border: 0.5px solid #2f3946;
background: #1B2537 !important;
backdrop-filter: blur(50px) !important;
height: 320px !important;
border-radius: 20px !important;
border-radius: 15px;
border: 0.5px solid #354356;
color: white;
margin-top: 15px;
box-shadow: none  !important;
height: 320px !important;
}
.country-dropdown-light{
border-radius: 15px;
background: #fff !important;
border: 1px solid #DBE8FF !important;
border-radius: 20px !important;
color: black;
margin-top: 15px;
box-shadow: none  !important;
height: 320px !important;
}

.coin-name{
color: white !important;
}
.coin-name-light{
color: #10192D;
}
.close-btn{
  fill: white;
}
.close-btn-dark{
fill: #10192D;
}
  
.nav-btn{
background: #1b2537 !important;
}
.nav-btn-light{
background: #eef3fb !important;
}
.chevron-icon {
  transition: transform 0.3s;
}

.wallet-border{
  border: 1px solid  #1B2537;
}
.wallet-border-light{
border: 1px solid #E2E8F0;
}
  
  .chevron-icon-rotated {
    transform: rotate(180deg);
  }

.confirm-txn{
color: var(--Primary-100, #2873FF);
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 160%; /* 25.6px */
text-transform: capitalize;
letter-spacing: 0px;
}
  
  ::-webkit-scrollbar{
  display: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  @media only screen and (max-width: 600px) {
  .dialog-card{
    padding: 10px !important;
    width: 100% !important;
    height: auto !important;
  }
  .snd-coin{
    width: 100% !important;
    padding: 20px !important;
  }
  .arrow-btn{
    margin-left: 0px !important;
  }
  .snd-text{
    font-size: 16px !important;
  }
  .inputstyling1 {
    border-radius: 19px !important;
    width: 100% !important;
    height: 60px !important;
  }
  .hint-text{
    font-size: 14px !important;
    display: flow;
  }
  .paste-svg{
    right: 46px !important;
  }
  .addressBook-btn{
    top: 18% !important;
  }
  .paste-btn{
    width: 80px !important;
    height: 50px !important;
    top: 5% !important;
    border-radius: 14px !important;
  }
  .trf-coin{
    top: 12% !important;
    right: 3.5% !important;
  }
  .alert-card{
    width: 100% !important;
  }
  }
  </style>