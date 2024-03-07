<template>
<div>
    <Header/>
    <v-container style="margin-top: 70px;">
        <span class="swap1">Swap</span>
        <div style="border-radius: 24px; border: 1px solid #303A46; padding: 37px; margin-top: 40px;">
            <div class="d-flex" style="margin-bottom: 30px;">
                <span class="quick-swap me-8">Quick Swap</span>
                <img src="/svg/reload.svg"/>
            </div>

            <div class="d-flex" style="justify-content: space-between; background: #060A1D; position: relative;">
                <div style="border-radius: 20px; background: #12181F; width: 47%; display: flex;  padding: 19px 20px; justify-content: space-between;">
                  
                     <div class="d-flex">   
                      <div class="me-13" style="display: flex; flex-direction: column;">
                        <span class="have">I have :</span>
                        <v-menu :coin="coin">
                              <template v-slot:activator="{ props }">
                                <v-btn class="inputstyling2" v-bind="props">
  
                                    <div  class="py-3" style="display: flex; padding-left: 12px; align-items: center;  border-radius: 17px; background: inherit;">
                                        <img :src="coinIcon" class="me-2"/>
                                        <span style="font-weight: 600; color:  #fff; text-transform: capitalize; font-family: Poppins; font-size: 16px;">{{selectedCoin}}</span> 
                                    </div>
                                
                                    <v-icon icon="mdi-chevron-down"></v-icon>
                              
                                </v-btn>
                              </template>
  
                                <v-list style="background: #12181F; border-radius: 16px;">
                                  <v-list-item>
                                    <div v-for="(coin, index) in coin" class="d-flex py-3" style="cursor: pointer;" :key="index" >
                                  
                                      <v-list-item-title @click="selectedCoin=coin.title; coinIcon= coin.icon;"  class="d-flex">
                                          <img  :src="coin.icon" class="me-3"/>  
                                        <span class="me-3" style="align-items: center;"> {{ coin.title }} </span>
                                      </v-list-item-title>
                                    </div>
                                  </v-list-item>
                                </v-list>
                    
                          </v-menu>  
                      </div>

                      <div style="display: flex; margin-top: px; justify-content: center; align-self: center; border-radius: 4px; width: 48px; height: 26px; position: relative ; z-index: 1000;">
                        <v-btn @click="increaseCounter" class="me-4" style=" border: 1px solid #303A46; letter-spacing: 0px; text-transform: capitalize; background: inherit;"><span class="min">Min</span></v-btn>    
                        <v-btn style=" border: 1px solid #303A46; letter-spacing: 0px; text-transform: capitalize; background: inherit;"><span class="min">Max</span></v-btn>
                      </div>
                     </div>
                     <div style="display: flex; flex-direction: column;">
                      <span class="have" style="color: #fff; font-size: 12px;">0.12000 BTC</span>
                      <span class="have" style="color: #fff;  font-family: Poppins; font-size: 18px; margin-top: 15px; font-style: normal; font-weight: 700; line-height: normal; display: flex; justify-content: end;">{{ counter }}</span>
                     </div>
                
                </div>

                
                  <div style="position: absolute ; display: flex; left: 0; right: 0; justify-content: center; margin-top: 5px; "><img src="/svg/swap.svg" width="8%"/></div> 
              

                <div style="border-radius: 20px; background: #12181F; display: flex; width: 47%;  padding: 19px 20px; justify-content: space-between;">
                  <div class="d-flex">   
                      <div class="me-13" style="display: flex; flex-direction: column;">
                        <span class="have">I want :</span>
                          <v-menu :coin1="coin1">
                              <template v-slot:activator="{ props }">
                                <v-btn class="inputstyling2" v-bind="props" style="margin-left: 14px;">
  
                                    <div  class="py-3" style="display: flex; padding-left: 12px; align-items: center;  border-radius: 17px; background: inherit;">
                                        <img :src="coinIcon1" class="me-2"/>
                                        <span style="font-weight: 600; color:  #fff; text-transform: capitalize; font-family: Poppins; font-size: 16px;">{{selectedCoin1}}</span> 
                                    </div>
                                
                                    <v-icon icon="mdi-chevron-down"></v-icon>
                              
                                </v-btn>
                              </template>
  
                                <v-list style="background: #12181F; border-radius: 16px;">
                                  <v-list-item>
                                    <div v-for="(coin, index) in coin" class="d-flex py-3" style="cursor: pointer;" :key="index" >
                                  
                                      <v-list-item-title @click="selectedCoin1=coin.title; coinIcon1= coin.icon;"  class="d-flex">
                                          <img  :src="coin.icon" class="me-3"/>  
                                        <span class="me-3" style="align-items: center;"> {{ coin.title }} </span>
                                      </v-list-item-title>
                                    </div>
                                  </v-list-item>
                                </v-list>
                    
                          </v-menu>   
                      </div>

                     
                  </div>
                  <div style="display: flex; flex-direction: column;">
                      <span class="have" style="color: #fff; font-size: 12px;">0.12000 USDT</span>
                      <span class="have" style="color: #fff;  font-family: Poppins; font-size: 18px; margin-top: 15px; font-style: normal; font-weight: 700; line-height: normal; display: flex; justify-content: end;">$403</span>
                     </div>

                </div>

            </div>

            <div style="display: flex; justify-content: space-between; margin-top: 55px;">
              <span style="color: #FFF; font-family: Poppins; display: flex; align-items: center; font-size: 16px; font-style: normal; font-weight: 800;line-height: normal;">
                Refreshes every 
                <span style="color: #5892FF; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 800; line-height: normal;">{{ countDownTimer }}s</span>
              </span>

              <!-- <div> -->
              <v-btn @click.prevent="navigateTo('/trade/convert1')" append-icon="mdi-arrow-right" class="exchange-btn1" > Exchange </v-btn>
            <!-- </div> -->
          </div>

        </div>
    </v-container>
    <Footer/>
</div>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0.01)
const increaseCounter = () => {
  counter.value += 0.01;
};

const countDownTimer = ref(60); 

onMounted(() => {
  // Start the countdown
  const intervalId = setInterval(() => {
    countDownTimer.value--;
    if (countDownTimer.value === 0) {
      clearInterval(intervalId);
      // Perform any actions after the countdown finishes
    }
  }, 1000); 
});



const coinIcon = ref ('/svg/btc.svg')
const selectedCoin  = ref ('BTC')

 
 const coin = [
                   {
                     icon:'/svg/tether.svg', title:"USDT", 
                   },
                   {
                     icon:'/svg/btc.svg', title:"BTC", 
                   },
                   {
                     icon:'/svg/btc.svg', title:"USDT", 
                   },
                   {
                     icon:'/svg/tether.svg', title:"BTC", 
                   }
 ];
const coinIcon1 = ref ('/svg/tether.svg')
const selectedCoin1  = ref ('USDT')

 
 const coin1 = [
                   {
                     icon:'/svg/tether.svg', title:"USDT", 
                   },
                   {
                     icon:'/svg/btc.svg', title:"BTC", 
                   },
                   {
                     icon:'/svg/btc.svg', title:"USDT", 
                   },
                   {
                     icon:'/svg/tether.svg', title:"BTC", 
                   }
 ];
</script>

<style>
.swap1{
color: var(--Colors-Base-white, #FFF);
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 800;
line-height: normal;
}
.quick-swap{
color: var(--White, var(--Colors-Base-white, #FFF));
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

.have{
color: var(--Second-Text, #A4A8AB);
font-family: Poppins;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.inputstyling2{
border-radius: 20px;
background: inherit;
color: var(--White, var(--Colors-Base-white, #FFF));
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
box-shadow: none;
width: 110px;
height: 55px;
letter-spacing: 0px;
position: relative;
right: 19px;
z-index: 10000;
}

.min{
color: var(--Gray-Light, #D8D8D8);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.exchange-btn1{
border-radius: 20px;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);
width: 258px;
height: 60px !important;
text-align: center;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: capitalize;
letter-spacing: 0px;
position: relative !important;
}

.mdi-arrow-right{
border-radius: 12px;
background: rgba(255, 255, 255, 0.20) !important;
width: 34.928px!important;
height: 33.527px!important;
flex-shrink: 0;
position: absolute!important;
right: 18px!important;
}
</style>