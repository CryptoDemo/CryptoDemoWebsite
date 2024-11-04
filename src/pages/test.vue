<template>


<div style="position: absolute;width: 600px;">
        <v-layout class="hidden-lg-and-up flex-sm-and-down" style="height: 500px; width: 100%;">
            <v-navigation-drawer v-model="drawer" temporary :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 10px !important">
              
            <div style="display: flex; align-items: center" v-if="selectedCoin?.status !== 'expired'">
              <img src="/svg/Ellipse-active.svg"/>
              <span class="ml-2" style="font-weight: 600; color: #35B233;"> This trade is Active</span>
            </div>
        
            <div style="display: flex; align-items: center" v-else>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orangered" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
              <span style="color: orangered; font-weight: 600; margin-left: 4px;">This trade is Expired</span>
            </div>
      
            <div :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'" class="d-flex mt-4">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#64748B" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
                  <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"/>
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                </svg>
              </div>
              <span class="warning-text ml-3" :class="isDark ? 'text-dark' : 'text-light'"> 
                Keep trades within Betacrypto. Some users may ask you to trade outside the Betacrypto platform. This is against our Terms of Services and likely a scam attempt. You must insist on keeping all trade conversations within Betacrypto, note that we cannot help or support you if you are scammed during such trades. 
              </span>
            </div>
        
            <v-alert type="info" variant="tonal" class="d-flex mt-4" style="border-radius: 10px; padding: 8px; font-size: 14px;">
                <span class="warning-text">Please, make a payment of {{ formatBalance(selectedCoin?.bid?.fiat_amount_paid) }} <span>{{ pinia.state.allcountries.find((c) => c.id === selectedCoin.offer?.trading_pair?.fiat.country_id)?.currency_name}}</span>
                using Bank Transfer. {{ selectedCoin.bid.expected_token_quantity }} {{ selectedCoin?.offer?.trading_pair?.crypto?.token?.name }} will be added to your Crypto wallet</span>
            </v-alert>
        
            <div :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'" class="d-flex mt-4">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#64748B" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
                  <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"/>
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                </svg>
              </div>
              <span class="warning-text ml-3" :class="isDark ? 'text-dark' : 'text-light'"> Make your payment, We recommend the buyer uploads a screenshot of the transaction, featuring the transaction reference number, as proof of payment.</span>
            </div>
      
            <div :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'" class="d-flex mt-4 mb-4">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#64748B" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
                  <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"/>
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                </svg>
              </div>
              <span class="warning-text ml-3" :class="isDark ? 'text-dark' : 'text-light'"> 
              In case of any form of dispute, click on the dispute  
              <v-btn @click="toggleDispute()" class="primary-btn1 mt-2" style="width: 100%; height: 40px; border-radius: 10px !important; font-weight: 600; font-size: 16px; color: white;">Register Dispute</v-btn>
              </span>
            </div>
            
            </v-navigation-drawer>
            
            <v-main>
              <div class="d-flex justify-center align-center Position-relative" style="position: fixed; margin-top: 51px;">
                <v-btn variant="text" @click.stop="drawer = !drawer" style="text-transform: capitalize; letter-spacing: 0px; color: #2873FF">
                Betacrypto Guidlines
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M5.94043 13.7807L10.2871 9.43404C10.8004 8.9207 10.8004 8.0807 10.2871 7.56737L5.94043 3.2207" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </v-btn>
            </div>
          </v-main>
        </v-layout>
      </div>


   


</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();
const drawer = ref(null);


</script>



<style scoped>


</style>