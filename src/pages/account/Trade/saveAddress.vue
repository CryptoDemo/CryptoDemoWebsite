<template>
    <div>
      <Header :hide="true" :icon1="true" :icon3="true" :icon2="true" :wallet="true"/>
      <v-container class="d-flex" style="margin-top: 110px">
        <div class="flex-lg-and-up hidden-sm-and-down">
            <Side-nav/>
        </div>
  
        <div class="trades-div" style="width: 100%; margin-left: 24px;">

        <div style="position:relative; height: auto; display: flex; flex-direction: column; padding: 30px;" :class="isDark ? 'txn-cards-dark' : 'profile-cards-light'">
            <span :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 16px; margin-bottom: 10px; line-height: 22.4px;">Enter contact name, select chain network and paste address</span>
            <input type="text" placeholder="Enter the wallet owner's name" v-model="wallet_name" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 20px; margin-top: 8px; outline: none; width:100%; padding-right: 110px !important; display: -webkit-box !important; -webkit-box-orient: vertical !important; line-clamp: 1 !important; text-overflow: ellipsis !important; overflow: hidden !important; margin-bottom: 6px; align-items: center; height: 55px; padding: 20px; border: 1px solid rgba(142, 155, 174, 0.5);  display: flex; align-self: center;">
            <input type="text" placeholder="Enter wallet adresss" v-model="wallet_address" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 20px; margin-top: 8px; outline: none; padding-left: 120px; width:100%; padding-right: 110px !important; display: -webkit-box !important; -webkit-box-orient: vertical !important; line-clamp: 1 !important; text-overflow: ellipsis !important; overflow: hidden !important; margin-bottom: 6px; align-items: center; height: 55px; border: 1px solid rgba(142, 155, 174, 0.5); display: flex; align-self: center;">
         
            <BlockChainNetwork style="position: absolute; top: 42%; padding: 13px; border-radius: 16px; margin-left: 3px;" :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'"/>
            <img src="/svg/scan-barcode.svg" @click="showScanner = true" width="70" style="position: absolute; top: 39%; right: 25px; padding: 13px; border-radius: 16px; margin-left: 3px; cursor: pointer;"/>
          

             <!-- QR Code Reader Component -->
             <QrcodeStream
                v-if="showScanner"
                @decode="onDecode"
                @close="showScanner = false"
                class="custom-scanner"
                />

                <div v-if="decodedResult">Decoded Result: {{ decodedResult }}</div>

            <span class="mt-3" style="font-size: 14px; color: #2873FF; font-weight: 700; cursor: pointer;">+ Add another address</span>
            <v-btn class="primary-btn1 mt-5" style="height: 50px; font-weight: 700; color: white;">Save Address</v-btn>
        </div>
        
        
        </div>

      </v-container>
      <Footer class="flex-lg-and-up hidden-sm-and-down" />
      <Mobile-footer class="mobile-footer" />
    </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useTheme } from "vuetify";
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

// Cleanup timeout when the component is unmounted
onUnmounted(() => {
  if (scannerTimeout) {
    clearTimeout(scannerTimeout);
  }
});
</script>


    

  
<style>
.custom-scanner{
    width: 52% !important;
    margin: auto;
}

</style>
