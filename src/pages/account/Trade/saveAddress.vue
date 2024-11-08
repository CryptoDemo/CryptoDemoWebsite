<template>
    <div>
      <Header :hide="true" :icon1="true" :icon3="true" :icon2="true" :wallet="true"/>
      <v-container class="d-flex" style="margin-top: 110px">
        <div class="flex-lg-and-up hidden-sm-and-down">
            <Side-nav/>
        </div>
  
        <div class="trades-div" style="width: 100%; margin-left: 24px;">

        <div class="arrow-btn"  style="display: flex; align-items: center; margin-bottom: 24px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" @click.prevent="navigateTo('/account/trade/addressBook')" style="cursor: pointer;">
            <path d="M15 19.9181L8.47997 13.3981C7.70997 12.6281 7.70997 11.3681 8.47997 10.5981L15 4.07812" stroke="#B9D1FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="snd-text" style="font-family: Manrope;font-size: 20px;font-style: normal;font-weight: 600;line-height: normal; margin-left: 10px;">Save Address</span>
        </div>

        <div class="wallet-ctn" style="position:relative; height: auto; display: flex; flex-direction: column; padding: 30px;" :class="isDark ? 'txn-cards-dark' : 'profile-cards-light'">
            <span class="wallet-txt" :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 16px; margin-bottom: 10px; line-height: 22.4px;">Enter contact name, select chain network and paste address</span>
            <input type="text" placeholder="Enter the wallet owner's name" v-model="wallet_name" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 20px; margin-top: 8px; outline: none; width:100%; padding-right: 110px !important; display: -webkit-box !important; -webkit-box-orient: vertical !important; line-clamp: 1 !important; text-overflow: ellipsis !important; overflow: hidden !important; margin-bottom: 6px; align-items: center; height: 55px; padding: 20px; border: 1px solid rgba(142, 155, 174, 0.5);  display: flex; align-self: center;">
            
            <div style="position: relative;">
                <input type="text" placeholder="Enter wallet adresss" v-model="wallet_address" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 20px; margin-top: 8px; outline: none; padding-left: 120px; width:100%; padding-right: 110px !important; display: -webkit-box !important; -webkit-box-orient: vertical !important; line-clamp: 1 !important; text-overflow: ellipsis !important; overflow: hidden !important; margin-bottom: 6px; align-items: center; height: 55px; border: 1px solid rgba(142, 155, 174, 0.5); display: flex; align-self: center;">
                <BlockChainNetwork style="position: absolute; top: 16%; padding: 13px; border-radius: 16px; margin-left: 3px;" :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'"/>
                <img src="/svg/scan-barcode.svg" @click="showScanner = true" width="70" style="position: absolute; top: 2%; right: 7px; padding: 13px; border-radius: 16px; margin-left: 3px; cursor: pointer;"/>
            </div>
          

             <!-- QR Code Reader Component -->
             <QrcodeStream
                v-if="showScanner"
                @decode="onDecode"
                @close="showScanner = false" style="width: 52%"
                class="custom-scanner"
                />

                <div v-if="decodedResult">Decoded Result: {{ decodedResult }}</div>

                <span v-if="errorMessage" style="color: orangered; font-size: 14px;">{{ errorMessage }}</span>

            <span class="mt-3" style="font-size: 14px; color: #2873FF; font-weight: 700; cursor: pointer;">+ Add another address</span>
            <v-btn class="primary-btn1 mt-5" :loading="loading" @click.prevent="saveWalletAddress()" style="height: 50px; font-weight: 700; color: white;">Save Address</v-btn>
        </div>
        
        
        </div>

      </v-container>
      <Footer class="flex-lg-and-up hidden-sm-and-down" />
      <Mobile-footer class="mobile-footer" />
    </div>
</template>
<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
import { address_Book } from "@/composables/requests/users";
import {  verifyWalletAddress } from "@/composables/requests/tokens";
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

definePageMeta({
  middleware: 'scroll-to-top'
});

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore();
const showScanner = ref(false);
const decodedResult = ref(null);
const wallet_name = ref("");  // The wallet address after decoding QR
const wallet_address = ref("");  // The wallet address after decoding QR
const loading = ref(false);
const errorMessage = ref(false);
// Ref to handle timeout
let scannerTimeout;

const openScanner = () => {
  showScanner.value = true;
  // Auto-close the scanner after 10 seconds
  scannerTimeout = setTimeout(() => {
    showScanner.value = false;
  }, 10000);
};

const onDecode = (result) => {
  wallet_address.value = result;
  decodedResult.value = result;
  clearTimeout(scannerTimeout);  // Clear timeout when decoding
  showScanner.value = false;  // Close the scanner immediately
  console.log("Decoded Wallet Address:", result);
};


const selectedNetwork = ref(pinia.state.selectedNetwork.toLowerCase());

const networkId = computed(() => {
  const network = pinia.state.BlockchainNetworks.find(
    (n) => n.name.toLowerCase() === selectedNetwork.value
  );
  return network ? network.id : null; // Return the ID or null if not found
});

const verifyWalletAds = async () => {
  if (!pinia.state.isAuthenticated) return false;

  const data = await verifyWalletAddress(selectedNetwork.value, wallet_address.value);

  if (data?.success && data.data?.valid) {
    errorMessage.value = ''; // Clear error if verification passes
    return true;
  } 

  if (data?.success && !data.data?.valid) {
    // Handle case where verification is successful but address is invalid
    errorMessage.value = 'Invalid wallet address. Please check and try again.';
  } else {
    // Handle any other unexpected errors
    errorMessage.value = 'An unexpected error occurred. Please try again later.';
  }

  return false;
};


const saveWalletAddress = async () => {
  loading.value = true;

  // Verify wallet address first
  const isAddressValid = await verifyWalletAds();
  if (!isAddressValid) {
    loading.value = false;
    return; // Exit if address verification fails
  }

  // Prepare payload if verification passes
  const payload = {
    chain_id: networkId.value,
    contact_name: wallet_name.value,
    contact_wallet_address: wallet_address.value,
  };

  console.log(payload);

  try {
    const data = await address_Book(payload);

    if (data?.success) {
      // Uncomment this if you want to update the Pinia store with the new address book data
      pinia.setAddressBook(data.data);
      push.success("Wallet address saved successfully.");
    } else {
      push.error(data.message || 'Failed to save the wallet address.');
    }
  } catch (error) {
    push.error(`An error occurred: ${error.message}`);
  } finally {
    loading.value = false; // Always reset loading
  }
};




</script>


    

  
<style>
.custom-scanner{
    width: 52%;
    margin: auto;
}

@media screen and (max-width: 600px) {
.trades-div{
    margin-left: 0px !important;
}
.custom-scanner{
    width: 100% !important;
}
.wallet-ctn{
padding: 20px !important;
}
.wallet-txt{
    font-size: 14px !important;
}
}
</style>
