<template>
    <Header/>
  <div>
    <v-container style="margin-top: 75px;">
      <v-row no-gutters>
            <v-col cols="9">
              <div class="pa-2 ma-2">      
                <span class="offer-txt1">Create an Offer to Sell your Crypto</span>
                 <div>
                  <v-menu :coin="coin">
                        <template v-slot:activator="{ props }">
                          <v-btn class="inputstyling3" v-bind="props">
  
                            <div  class="py-3" style="display: flex; padding-left: 12px; align-items: center; position: absolute; left: 15px; border-radius: 17px; background: #161D26; width: 135px; height: 44px;">
                                <img :src="coinIcon" class="me-3"/>
                                <span style="font-weight: 600; color:  #fff; text-transform: capitalize; font-family: Poppins; font-size: 16px;">{{selectedCoin}}</span> 
                            </div>

                              <span style="color: #A4A8AB; font-family: Poppins; position: absolute; display: flex; left: 174px; right: 0; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal;">{{ caption }}</span>
                            
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
                                  <img  :src="coin.icon" class="me-4"/>  
                                <span class="me-3" style="align-items: center; display: flex;"> {{ coin.title }} </span>
                                <span style="color: #A4A8AB; font-family: Poppins; display: flex; align-items: center; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal;">{{ coin.caption }}</span>
                              </v-list-item-title>
                            </div>
                          </v-list-item>
                        </v-list>
                    
                  </v-menu> 
                </div>
             </div>
            
           

           
       
      </v-col>
      <v-col>
        <div class="pa-2 ma-2">
                          <!-- //side nav here../ -->
              </div>
      </v-col>
    </v-row>
    </v-container>
    <Footer/>
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
.offer-txt1 {
color: var(--Colors-Base-white, #FFF);
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 800;
line-height: normal;
}

.inputstyling3{
height: 64px;
width: 100%;
background: var(--secondary-background, #12181F);
border-radius: 24px;
}
</style>