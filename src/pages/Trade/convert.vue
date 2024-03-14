<template>
<div>
    <Header/>
    <v-container style="margin-top: 90px;">
        <span class="swap1">Swap</span>
        <div style="border-radius: 24px; border: 1px solid #303A46; padding: 37px; margin-top: 40px; margin-bottom: 525px;">
            <div class="d-flex" style="margin-bottom: 30px;">
                <span class="quick-swap me-8 ">Quick Swap</span>
                <img src="/svg/reload.svg" class="icon1"/>
            </div>

            <div class="d-flex" style="justify-content: space-between; background: #060A1D; position: relative;">
                <div style="border-radius: 20px; background: #12181F; width: 47%; display: flex;  padding: 19px 20px; justify-content: space-between;">
              
                     <div class="d-flex">   
                      <div class="me-13" style="display: flex; flex-direction: column;">
                        <span class="have">I have :</span>
                        <v-menu :coin="coin">
                              <template v-slot:activator="{ props }">
                                <v-btn class="inputstyling2" v-bind="props" style=" height: fit-content; width: fit-content;">
  
                                    <div  class="py-3" style="display: flex; padding-left: 12px; align-items: center;  border-radius: 17px; background: inherit;">
                                        <img :src="coinIcon" class="me-2"/>
                                        <span  class="me-3" style="font-weight: 600; color:  #fff; text-transform: capitalize; font-family: Poppins; font-size: 16px;">{{selectedCoin}}</span> 
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                        <path d="M4.94888 6.19921C5.08612 6.19923 5.22202 6.17221 5.34882 6.11971C5.47561 6.06721 5.59084 5.99024 5.6879 5.89321L9.58789 1.99322C9.78375 1.79735 9.8938 1.53171 9.8938 1.25472C9.8938 0.977729 9.78375 0.712088 9.58789 0.516225C9.39203 0.320363 9.12639 0.210317 8.8494 0.210317C8.5724 0.210317 8.30676 0.320363 8.1109 0.516225L4.9469 2.91622L1.7829 0.516225C1.58704 0.320363 1.32139 0.210317 1.0444 0.210317C0.767412 0.210317 0.50174 0.320363 0.305878 0.516225C0.110015 0.712088 2.14471e-08 0.977729 0 1.25472C-2.1447e-08 1.53171 0.110015 1.79735 0.305878 1.99322L4.2059 5.89321C4.3034 5.99076 4.41925 6.06804 4.54678 6.12057C4.67431 6.17309 4.81096 6.19981 4.94888 6.19921Z" fill="#E0E4F5"/>
                                    </svg>

                              
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

                      <div style="display: flex; justify-content: center; align-self: center ; margin-top: 17px; border-radius: 4px; width: 48px; height: 26px; position: relative ; z-index: 1000;">
                        <v-btn @click="increaseCounter" class="me-4" style=" border: 1px solid #303A46; height: 26px; letter-spacing: 0px; text-transform: capitalize; background: inherit;"><span class="min">Min</span></v-btn>    
                        <v-btn style=" border: 1px solid #303A46; letter-spacing: 0px; text-transform: capitalize; height: 26px; background: inherit;"><span class="min">Max</span></v-btn>
                      </div>
                     </div>
                     <div style="display: flex; flex-direction: column;">
                      <span class="have" style="color: #fff; font-size: 12px;">0.12000 BTC</span>
                      <span class="have" style="color: #fff;  font-family: Poppins; font-size: 18px; margin-top: 15px; font-style: normal; font-weight: 700; line-height: normal; display: flex; justify-content: end;">{{ counter }}</span>
                     </div>
                
                </div>

                
                  <div style="position: absolute ; display: flex; left: 0; right: 0; justify-content: center; margin-top: 11px; "><img src="/svg/swap.svg" width="8%"/></div> 
              

                <div style="border-radius: 20px; background: #12181F; display: flex; width: 47%;  padding: 19px 20px; justify-content: space-between;">
                  <div class="d-flex">   
                      <div class="me-13" style="display: flex; flex-direction: column;">
                        <span class="have">I want :</span>
                          <v-menu :coin1="coin1">
                              <template v-slot:activator="{ props }">
                                <v-btn class="inputstyling2" v-bind="props" style="margin-left: 14px; height: fit-content; width: fit-content;">
  
                                    <div  class="py-3" style="display: flex; padding-left: 12px; align-items: center;  border-radius: 17px; background: inherit;">
                                        <img :src="coinIcon1" class="me-2"/>
                                        <span class="me-4" style="font-weight: 600; color:  #fff; text-transform: capitalize; font-family: Poppins; font-size: 16px;">{{selectedCoin1}}</span> 
                                    </div>
                                
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                        <path d="M4.94888 6.19921C5.08612 6.19923 5.22202 6.17221 5.34882 6.11971C5.47561 6.06721 5.59084 5.99024 5.6879 5.89321L9.58789 1.99322C9.78375 1.79735 9.8938 1.53171 9.8938 1.25472C9.8938 0.977729 9.78375 0.712088 9.58789 0.516225C9.39203 0.320363 9.12639 0.210317 8.8494 0.210317C8.5724 0.210317 8.30676 0.320363 8.1109 0.516225L4.9469 2.91622L1.7829 0.516225C1.58704 0.320363 1.32139 0.210317 1.0444 0.210317C0.767412 0.210317 0.50174 0.320363 0.305878 0.516225C0.110015 0.712088 2.14471e-08 0.977729 0 1.25472C-2.1447e-08 1.53171 0.110015 1.79735 0.305878 1.99322L4.2059 5.89321C4.3034 5.99076 4.41925 6.06804 4.54678 6.12057C4.67431 6.17309 4.81096 6.19981 4.94888 6.19921Z" fill="#E0E4F5"/>
                                    </svg>
                              
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

              <v-btn @click="toggleButtons" v-if="!showOptions" v-model="exchangeBtn" append-icon="mdi-arrow-right" class="exchange-btn1"> Exchange </v-btn>
              <div v-else>
                <v-btn  @click.prevent="navigateTo('/trade/convert-successful')" class="exchange-btn1 me-4">Continue</v-btn>
                <v-btn @click="toggleButtons" class="cancel1">Cancel</v-btn>
               </div>
          </div>
        </div>
    </v-container>
    <Footer/>
</div>
</template>

<script setup>
import { ref } from 'vue'

const showOptions = ref(false);
const toggleButtons = () => {
      showOptions.value = !showOptions.value;
    };

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

.icon1 {
  transform-origin: 0% 50%;
  animation: slide4 3s linear infinite;
}

@keyframes slide4 {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
.swap1{
color: var(--Colors-Base-white, #FFF);
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 800;
line-height: normal;
}

.cancel1{
width: 258px;
height: 60px!important;
flex-shrink: 0;
border-radius: 20px;
background: var(--dark-bg, #10192D);
color: var(--White, var(--Colors-Base-white, #FFF));
text-align: center;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: capitalize;
letter-spacing: 0px;
   }
.hidden {
  display: none;
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