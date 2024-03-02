<template>
    <v-container>
           <div>
                
                <div class="d-flex" style="justify-content: center;"> 
                    <span class="me-5" style="font-family: Poppins; color: white;  font-size: 32px; font-style: normal; font-weight: 700; line-height: normal;">Buy Crypto</span>
                    <div class="vertical-border me-5"></div>
                    <span class="btc-caption">Buy Bitcoin with over 350 payment methods to choose from, including bank transfers, online wallets, and gift cards.</span>
                </div>

             <div style="justify-content: end; display: flex; margin-top: 39px;">
                <div class="d-flex px-4" style="border-radius: 40px; width: 92%; justify-content: center; display: flex; padding: 44px; border: 1px solid var(--border, #303A46); background: var(--secondary-background, #12181F); box-shadow: 0px 20px 36.1px 0px rgba(0, 0, 0, 0.10);">
                    <div class="d-flex" style="border-radius: 24px; border: 1px solid var(--border, #303A46); background: #12181F;  padding: 5px;">
                        <v-btn :class="PurchaseCrypto ? 'sell-offers': 'buy-offers'"  @click.prevent="PurchaseCrypto=true">Sell Offers</v-btn>
                        <v-btn :class="PurchaseCrypto ? 'buy-offers': 'sell-offers'"  @click.prevent="PurchaseCrypto=false">Buy Offers </v-btn>
                    </div>
                </div>
                <v-btn class="sell-offers"></v-btn>
             </div>              
  
                <div>
                    <v-btn style="display: flex; margin-left: auto; text-transform: unset; letter-spacing: 0px; padding: 8px 40px; justify-content: center; align-items: center; gap: 10px; border-radius: 8px;background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);">Create Offer</v-btn>
                </div>
               
          </div>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const PurchaseCrypto = ref(true);
  

  </script>
  
<style scoped>

.vertical-border{
background: #303A46;  
width: 1px;
height: 56px;
 }
  
.header {
color: var(--Gray-Medium-light, #969696);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%; 

}
  
.sell-offers {
display: flex;
width: 228px;
height: 48px;
padding: 12px 98px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 22px;
background: var(--linear-card, linear-gradient(270deg, #1DA1DB -11.75%, #2873FF 119.96%));
letter-spacing: 0px;
text-transform: unset;
color: var(--Colors-Base-white, #FFF);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
height: 48px!important;
}
  
.buy-offers{
width: 228px;
height: 48px;
background: inherit;
border-radius: 22px;
color: var(--Gray-Medium-light, #969696);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0px;
text-transform: unset;
height: 48px !important;
}

.btc-caption{
color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
width: 755px;

}

  
  </style>