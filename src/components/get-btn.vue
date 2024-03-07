<template>
    <div>
  
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" variant="flat" class="get-btn">
              <img src="/svg/get.svg" class="me-2"/>
              <span>Get</span>
            </v-btn>
          </template>
  
          <template v-slot:default="{ isActive }">
            <v-card style="border-radius: 24px; border: 2px solid #303A46; padding: 29px ; background: #12181F; box-shadow: none; width: 479px; height: 580px;">
              <v-card-text>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                 <span class="snd-crypto">Receive Crypto</span>
                 <v-btn variant="text"  @click="isActive.value = false" style="max-width: 45px !important; height: 45px; border-radius: 14px; background: #10192D;">
                   <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                     <path d="M17.5 16.0868L21.0355 12.5513C21.4261 12.1608 22.0592 12.1608 22.4497 12.5513C22.8403 12.9418 22.8403 13.575 22.4497 13.9655L18.9142 17.5011L22.4497 21.0366C22.8403 21.4271 22.8403 22.0603 22.4497 22.4508C22.0592 22.8413 21.4261 22.8413 21.0355 22.4508L17.5 18.9153L13.9645 22.4508C13.5739 22.8413 12.9408 22.8413 12.5503 22.4508C12.1597 22.0603 12.1597 21.4271 12.5503 21.0366L16.0858 17.5011L12.5503 13.9655C12.1597 13.575 12.1597 12.9418 12.5503 12.5513C12.9408 12.1608 13.5739 12.1608 13.9645 12.5513L17.5 16.0868Z" fill="white"/>
                   </svg>
                 </v-btn>
               </div>
  
               <span style="color: #A4A8AB; margin-left: 10px; font-family: Poppins; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal;"> Coin:</span>
                 <div style="margin-top: 16px; margin-bottom: 8px;">
                   <v-menu :coin="coin">
                         <template v-slot:activator="{ props }">
                           <v-btn class="inputstyling1" v-bind="props">
   
                             <div  class="py-3" style="display: flex; padding-left: 12px; align-items: center; position: absolute; left: 15px; border-radius: 17px; background: #161D26; width: 135px; height: 44px;">
                                 <img :src="coinIcon" class="me-3"/>
                                 <span style="font-weight: 600; color:  #fff; text-transform: capitalize; font-family: Poppins; font-size: 16px;">{{selectedCoin}}</span> 
                             </div>
                               <span class="me-5" style="color: #A4A8AB; font-family: Poppins; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal;">{{ caption }}</span>
                             
                               <v-btn style="position: absolute; right: 15px; min-width: 44px !important; height: 44px; border-radius: 17px; box-shadow: none; background: #161D26;">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z" fill="white"/>
                               </svg>
                             </v-btn>
   
                           </v-btn>
                         </template>
   
                         <v-list>
                           <v-list-item>
                             <div v-for="(coin, index) in coin" class="d-flex py-3" style="cursor: pointer" :key="index" >
                           
                               <v-list-item-title @click="selectedCoin=coin.title; coinIcon= coin.icon; caption = coin.caption"  class="d-flex">
                                   <v-img  :src="coin.icon"></v-img>  
                                 <span class="me-3"> {{ coin.title }} </span>
                                 <span style="color: #A4A8AB; font-family: Poppins; display: flex; align-items: center; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal;">{{ coin.caption }}</span>
                               </v-list-item-title>
                             </div>
                           </v-list-item>
                         </v-list>
                     </v-menu> 
                   </div>
  
                   <span style="color: #FFF; margin-left: 10px; font-family: Poppins;font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Total Balance : <span style="color: #FFF; font-family: Poppins; font-size: 16px; font-style: normal;font-weight: 600; line-height: normal;">0.0121285425 BTC</span></span>
           
                    <div style="margin-top: 18px;">  
                      <span style="color: #A4A8AB; font-family: Poppins; margin-left: 10px; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal;">BTC Address</span>
                    </div>
                    <div class="px-4" style="border-radius: 25px; margin-top: 16px; margin-bottom: 36px; align-items:  center; height: 64px;border: 1px solid  #303A46; background:  #12181F; display: flex; justify-content: space-between; ">
                      <span class="ref-code">bc1qXY2kGdygjrsqtzE2n0yrf2XY3</span>
                      <v-btn style="letter-spacing: 0px; width: 98px; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 600; height: 46px; text-transform: capitalize;border-radius: 17px; display: flex;  background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);">Copy
                        <img src="/svg/copy1.svg" style="margin-left: 10px;"/>
                      </v-btn>
                    </div>
                    <div style="display: flex; justify-content: center;">
                        <img src="/svg/barcode1.svg"/>
                    </div>
              </v-card-text>
  
              
            </v-card>
          </template>
        </v-dialog>
  </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  
  const coinIcon = ref ('/svg/btc.svg')
   const selectedCoin  = ref ('Bitcoin')
   const caption =  ref('BTC')
   
   const coin = [
                     {
                       icon:'/svg/tether.svg', title:"Tether", caption:'USDT'
                     },
                     {
                       icon:'/svg/btc.svg', title:"Bitcoin", caption:'BTC'
                     },
                     {
                       icon:'/svg/btc.svg', title:"Bitcoin", caption:'BTC'
                     },
                     {
                       icon:'/svg/tether.svg', title:"Tether", caption:'USDT'
                     }
   ];
  </script>
  
  <style scoped>
  .get-btn{
  border-radius: 16px;
  border: 1px solid var(--border, #303A46);
  background: var(--dark-bg, #10192D);
  box-shadow: 0px 10px 25px 0px rgba(27, 37, 55, 0.05);
  letter-spacing: 0px;
  text-transform: capitalize;
  display: flex;
  width: 86.333px;
  height: 48px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px; 
  flex-shrink: 0;
  }
  </style>
  