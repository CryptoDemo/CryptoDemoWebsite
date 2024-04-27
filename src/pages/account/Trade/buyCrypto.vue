<template>
    <v-container>
           <div>
                
                <div class="d-flex" style="justify-content: center;"> 
                    <span class="me-5" style="font-family: Poppins; color: white;  font-size: 32px; font-style: normal; font-weight: 700; line-height: normal;">Buy Crypto</span>
                    <div class="vertical-border me-5"></div>
                    <span class="btc-caption">Buy Bitcoin with over 350 payment methods to choose from, including bank transfers, online <br> wallets, and gift cards.</span>
                </div>

                <div style="justify-content: center; display: flex; margin-top: 39px;">
                    <div class=" px-4" style="border-radius: 40px; width: 92%; justify-content: center; padding: 44px; border: 1px solid var(--border, #303A46); background: var(--secondary-background, #12181F); box-shadow: 0px 20px 36.1px 0px rgba(0, 0, 0, 0.10);">
                        <div class="d-flex" style="border-radius: 24px; display: flex; justify-content: center; width: 470px; margin: auto; border: 1px solid var(--border, #303A46); background: #12181F;  padding: 5px;">
                            <v-btn :class="PurchaseCrypto ? 'sell-offers': 'buy-offers'"  @click.prevent="PurchaseCrypto=true">Buy</v-btn>
                            <v-btn :class="PurchaseCrypto ? 'buy-offers': 'sell-offers'"  @click.prevent="PurchaseCrypto=false">Sell</v-btn>
                        </div>

                        <div style="display: flex; justify-content: center; margin-top: 39px; margin-bottom: 40px; width: 100%;"> 
                        
                        <div class="d-flex me-7">
                          <div class="position-relative">
                            <input type="text" style="border-radius: 16px 0px 0px 16px;  padding-left: 10px; outline: none; position: relative; width: 298px; height: 56px; border: 1px solid #303A46; background: #12181F;">
                            <v-menu :Coin="Coin">
                                <template v-slot:activator="{ props }">
                                  <v-btn style="box-shadow: none; margin-top: 2px; position: absolute; left: 225px; width: 72px; height: 53px;  border-left: 1px solid #303A46 !important; background: #10192D;" v-bind="props">
                                    <span  class="me-5" style="color:#D8D8D8; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 700;"> {{ currencyType }} </span> 
                                    <img src="/svg/Arrow Down.svg" style="position: absolute;right: 10px" />
                                  </v-btn>
                                </template>

                                <v-list style="width: 403px; height: 352px; padding: 24px ; border-radius: 24px; border: 1px solid #303A46; background: #12181F;">
                                  <v-list-item>
                                                <div class="searchbar" style="margin-bottom: 24px; display: flex; justify-content: center;">
                                                      <img src="/svg/Search-gradient.svg" class="position-absolute mt-2" style="left: 75px;"/>
                                                    <input type="text" style=" padding-left: 50px; height: 36px; outline: none; width: 237px; border-radius: 20px; background: #12181F; border: 1px solid var(--border, #303A46); display: flex;"/>
                                                </div>

                                                <div class="d-flex" style="margin-bottom: 16px;">
                                                  <img src="/svg/gradient-star.svg" class="me-3"/>
                                                  <span style="color:#D8D8D8; font-family: Manrope; font-size: 16px; font-style: normal;font-weight: 700;line-height: 28px;">Popular</span>
                                                </div>
                                    <v-row dense>
                                    <v-col v-for="(item, index) in country" class="" sm="12" :key="index" >
                                  
                                      <v-list-item-title @click="selectCountry=item.title; flag= item.image; coinCaption= item.caption;"> 
                                        <div style="display: flex; justify-content: space-between;">
   
                                          <v-btn class="button d-inline-flex" style="text-transform: capitalize; margin-bottom: 16px; justify-content: space-between; letter-spacing: 0px; box-shadow: none; border-radius: 16px; background: #10192D; border: 1px solid #303A46; color: #D8D8D8; width: 100%; height: 46px;">
                                            <img :src="item.image" width="30" class="me-3"/>   {{ item.title }}
                                            <div style="border-radius: 12px; position: absolute; right: 3%; padding: 4px 12px; width: 66px; height: 30px; border: 2px solid #D8D8D8; background:  #FFF;">
                                              <div><img :src="item.caption"/></div>
                                            </div>
                                          </v-btn>
                                      

                                        </div>

                                    </v-list-item-title>
                                  </v-col>
                                </v-row>
                              </v-list-item>
                                </v-list>
                            </v-menu> 
                          </div>

                          <div class="position-relative">
                            <input type="text" style="border-radius: 0px 16px 16px 0px; outline: none; padding-left: 10px; position: relative; width: 298px; height: 56px; border: 1px solid #303A46; background: #12181F;">
                            <v-menu :Coin="Coin">
                                <template v-slot:activator="{ props }">
                                  <v-btn  style="border-radius: 0px 16px 16px 0px; box-shadow: none; width: 72px; margin-top: 2px; position: absolute; left: 225px; height: 52px;  border-left: 1px solid  #303A46; background: #10192D; " v-bind="props"> 
                                    <img class="me-7" width="24" :src="coinType"/> 
                                    <img src="/svg/Arrow Down.svg" style="position: absolute;right: 10px" />
                                  </v-btn>
                                </template>

                                <v-list style="width: 544px; height: 181px; border-radius: 24px; border: 1px solid #303A46; background: #12181F;">
                                  <v-list-item>
                                    <v-row dense >
                                    <v-col v-for="(item, index) in TradeCoins" class="" sm="12"
                                      :key="index" >
                                  
                                      <v-list-item-title @click="selectCoin=item.title; coinType= item.image; coinCaption= item.caption "> 
                                        <div style="display: flex; justify-content: space-between;">
                                        
                                        
                                            <v-btn class="coin-btn d-inline-flex" style="text-transform: capitalize; justify-content: space-between; letter-spacing: 0px; box-shadow: none; border-radius: 16px; background: inherit; width: 100%; height: 46px;" v-bind="props">
                                              <img :src="item.image" class="me-3"/>   
                                              <span class="coin-list">{{ item.title }}</span>

                                              <div style="border-radius: 12px; position: absolute; right: 3%; border: 1px solid #303A46; padding: 4px 12px; width: 66px; height: 30px;">
                                                <span style="color: #969696; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 500; line-height: normal;">{{ item.caption }}</span>
                                              </div>
                                            </v-btn>
                                        
                                          
                                      </div>

                                      </v-list-item-title>
                                      </v-col>
                                    </v-row>
                                  </v-list-item>
                                </v-list>
                            </v-menu> 
                          </div>
                        </div>

                        <div v-if="PurchaseCrypto === true" class="display:none" style="border-radius: 16px; border: 1px solid #303A46;  position: relative; background: #12181F; display: flex; width: 345px; height: 56px; flex-shrink: 0;">
                          <span style="color: #969696; font-family: Manrope; justify-content: center; padding:  17px; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;">{{ Paymentmethod }}</span>
                            <v-dialog width="624">
                                  <template v-slot:activator="{ props }">
                                    <v-btn v-bind="props" text="View" style="border-radius: 0px 16px 16px 0px; position: absolute; text-transform: capitalize; right: 0; border-left: 1px solid #303A46; background: #10192D; width: 72px; height: 54px;"> </v-btn>
                                  </template>

                                  <template v-slot:default="{ isActive }">
                                    <div>
                                        <v-card class="dialog">
                                          <v-card-text class="mt-5">
                                            <div class="searchbar"  v-if="!allSelected" style=" border-radius: 20px; height: 48px; width: 85%; display: flex; margin: auto; background: #12181F; border: 1px solid var(--border, #303A46); display: flex;">
                                            <v-btn  @click="searchField.focus()" style="background: inherit; box-shadow: none; margin-top: 4px; position: absolute; left: 79px; z-index: 1000;">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                  <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#4263EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                  <path d="M22 22L20 20" stroke="#4263EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                              </svg>
                                            </v-btn>
                                                <input type="text"  v-model="search"  ref="searchField" style="outline: none; width: 100%; padding-left: 100px"/>
                                            </div>
                                            
                                            <div class="d-flex" style="padding: 0 61px; justify-content: center; margin: auto;">

                                              <v-row no-gutters>

                                              
                                                <v-col v-for="(item, index) in paymentOptions" :key="index" sm="6" @click="Paymentmethod=item.title; isActive.value = false"  class="d-flex" style="justify-content: center;">
                                                  <div style="border-radius: 24px; width: 159px; cursor: pointer;  margin-top: 44px;  border: 1px solid var(--border, #303A46); background: #10192D;">
                                                  
                                                      <div style="display: flex; justify-content: center; margin-top: 28px;">
                                                        <img :src="item.image"/>
                                                      </div>  

                                                      <span  @click.prevent="selected.splice(i, 1)" style="color: #D8D8D8; display: flex; justify-content: center; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 600; line-height: 28px;">{{ item.title }}</span>
                                                        
                                                        <div style="display: flex; justify-content: center; margin-bottom: 28px;">
                                                            <span style="color: var(--Gray-Medium-light, #969696);font-family: Manrope; font-size: 12px; font-style: normal; font-weight: 700;line-height: 28px;">Available (10) </span>
                                                        </div>   
                                                  </div>
                                              </v-col>

                                            </v-row>
                                            
                                            </div>
                                          </v-card-text>

                                        </v-card>
                                    </div>
                                  </template>
                            </v-dialog>
                        </div>


                        </div>


                       <NuxtLink to="/trade/buyCrypto1"><v-btn class="sell-offers" width="100%">Find Offers</v-btn></NuxtLink> 
                    </div>
                </div>              
            
                <div style="background: #303A46; width: 100%; height: 1px; display: flex; justify-content: center; margin-top: 53px; margin-bottom: 53px;"></div>

                <div v-for="n in 4" :key="n" style="display: flex; justify-content: space-between; border-radius: 24px; padding: 29px 50px 28px 49px; border: 1px solid #303A46; margin-bottom: 20px;">
                        <div>
                            <div style="display: flex; margin-bottom: 14px">
                                 <span class="me-3" style="color: #2873FF; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 700; line-height: normal;">Esewa</span>
                            </div>
                            <div style="display: grid">
                              <div class="d-flex" style="align-items: center;">
                                <img src="/svg/heart-tick.svg" alt="icon">
                                <span class="heart-number">23</span>
                              </div>
                                <span class="mb-3" style="color: #969696;font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;">Last seen: <span style="font-weight: 400;">3 minutes ago</span></span>

                                <div style="display:flex">
                                <v-btn class="smaller-btn me-4">Guided Trade</v-btn>
                                <v-btn class="smaller-btn">Receipt required</v-btn>
                            </div>
                            </div>
                        </div>
                        
                        <div>
                            <div style="margin-bottom: 17px; display: flex; align-items: center;">
                              <span class="me-3" style="color: #D8D8D8; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 700; line-height: normal;">Bank Transfer</span>
                              <img src="/flags/ae.svg"   width="30"/>
                            </div>
                            <span style="color:#969696;font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 400;line-height: normal; margin-top: 17px;">All banks accepted</span>
                          </div>

                        <div>
                          <span style="color: #D8D8D8; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 700; line-height: normal;">Trade Speed</span>
                          <div style="margin-top: 17px; margin-bottom: 55px;">
                            <span style="color: #969696; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">5 min (Avg)</span>
                          </div>
                            <div class="" style="display: flex; align-items: center;">
                              <img src="/svg/star.svg" class="me-2"/>

                                <span style="color:#969696; font-family: Manrope; margin-bottom: 3px; font-size: 14px; font-style: normal; font-weight: 700; line-height: normal;">Add to favorites</span>
                            </div>
                      </div>

                        <div>
                            <div style="display: flex; margin-bottom: 14px">
                                 <span style="color: #8E9BAE;font-family: Manrope; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal;">Limit 15,000 - 100,000 NGN</span>
                            </div>
                            <div style="display: grid">
                                <span class="mb-3" style="color: #fff;font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 600; margin-top: 13px; line-height: normal; text-align-last: right;">62,797,850.5 NGN</span>
                                <div class="d-flex mb-3" style="justify-content: end;">
                                    <img src="/svg/btc.svg" class="me-3" width="20px"/> 
                                    <span class="me-1" style="color: #8E9BAE;font-family: Manrope; font-size: 12px; font-style: normal; font-weight: 600; line-height: 150%;">BTC</span>
                                    <img src="/svg/arrow-up.svg" class="mb-1 me-1"/>
                                    <span style="color: #22C36B; font-size: 12px; font-style: normal; font-weight: 400;line-height: 150%;">-10%</span>
                                </div>
                            <div style="display:flex; justify-content: end;">
                                <v-btn class="smaller-btn" style="color: var(--Gray-Light, #D8D8D8); background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);">{{ PurchaseCrypto ? 'Buy Now' : 'Sell Now'}}</v-btn>
                    
                            </div>
                            </div>
                        </div>
                </div>
          </div>
    </v-container>
    <Footer/>
  </template>
  
<script setup>
import { ref } from 'vue'
  
const PurchaseCrypto = ref(true);

const Paymentmethod = ref('Select Payment method')
const paymentOptions = [
        { title: 'English', image:"/svg/bank.svg" },
        { title: 'Spanish',  image:"/svg/bank.svg" },
        { title: 'French',  image:"/svg/bank.svg" },
        { title: 'French',  image:"/svg/bank.svg"},
        { title: 'French',  image:"/svg/bank.svg"},
        { title: 'Igbo', image:"/svg/bank.svg"},
      ];


const coinType = ref("/svg/btc.svg")

const TradeCoins = [
        {image:"/svg/btc.svg", title: 'Bitcoin', caption: 'BTC'},
        { image:"/svg/tether.svg", title: 'Tether', caption: 'USDT' },
        { image:"/svg/btc.svg", title: 'USD Coin', caption: 'USDC'},
      ];


const currencyType = ref("$")

const country = [
        {image:"/flags/us.svg", title: 'US Dollar', caption:'/svg/Currency.svg', },
        { image:"/flags/gr.svg", title: 'British Pound', caption:'/svg/Currency (1).svg' },
        { image:"/flags/al.svg", title: 'Canadian Dollar', caption:'/svg/Currency.svg'},
      ];


  </script>
  
<style scoped>
.button:hover {
background-color: #5892FF!important;
color: var(--Basic-Black, var(--Colors-Base-black, #000))!important;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 28px; /* 200% */
}

.heart-number{
color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
::-webkit-scrollbar{
  display: none;
}
.smaller-btn{
border-radius: 8px;
background: var(--secondary-background, #12181F);
display: flex;
padding: 6px 16px;
justify-content: center;
align-items: center;
gap: 10px;
color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: unset;
letter-spacing:0px;
}

.coin-btn:hover{
border-radius: 16px;
background: rgba(40, 115, 255, 0.10) !important;
}

.vertical-border{
background: #303A46; 
width: 1px;
height: 56px;
 }
  
 .dialog{
border-radius: 40px !important;
border: 1px solid var(--border, #303A46);
background: var(--secondary-background, #12181F);
color: white;
box-shadow: none !important;
height: 566px;
overflow: scroll;
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
box-shadow: none;
display: flex;
align-self: center;
}

.btc-caption{
color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
align-self: center;
width: 71%;
}

.coin-list{
color: var(--Gray-Light, #D8D8D8);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
} 

::-webkit-scrollbar{
  display: none;
}
  </style>