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
                       
                        <span style="color: #D8D8D8; display: flex; justify-content: center; font-family: Manrope; font-size: 24px; font-style: normal; font-weight: 700; line-height: normal;">How much Crypto do you want to buy?</span>

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
                                    <v-col v-for="(item, index) in locations" class="" sm="12"
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
                          <span style="color: #969696; font-family: Manrope; justify-content: center; padding:  17px; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;"> {{ Paymentmethod }}</span>
                            <v-dialog width="624">
                                        <template v-slot:activator="{ props }">
                                          <v-btn v-bind="props" text="View" style="border-radius: 0px 16px 16px 0px; position: absolute; text-transform: capitalize; right: 0; border-left: 1px solid #303A46; background: #10192D; width: 72px; height: 53px;"> </v-btn>
                                        </template>

                                        <template v-slot:default="{ isActive }">
                                          <div>
                                              <v-card class="dialog">
                                                <v-card-text class="mt-5">
                                                  <div class="searchbar" style=" flex-shrink: 0; border-radius: 20px; background: #12181F; border: 1px solid var(--border, #303A46); display: flex;">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" style="margin-left: 16px; margin-top: 20px ">
                                                        <path d="M10.3033 18.2301C14.6756 18.2301 18.22 14.6148 18.22 10.1551C18.22 5.69538 14.6756 2.08008 10.3033 2.08008C5.93105 2.08008 2.38664 5.69538 2.38664 10.1551C2.38664 14.6148 5.93105 18.2301 10.3033 18.2301Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path opacity="0.4" d="M19.0533 19.0809L17.3866 17.3809" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                      </svg>
                                                      <v-text-field  hide-details variant="none"> </v-text-field>
                                                  </div>
                                                  
                                                  <div class="d-flex" style="padding: 0 61px; justify-content: center; margin: auto;">

                                                    <v-row no-gutters>

                                                    <v-col v-for="(item, index) in paymentOptions" :key="index" sm="6" class="d-flex" @click="Paymentmethod=item.title; isActive.value = false" style="justify-content: center;">
                                                      <div style="border-radius: 24px; width: 159px; cursor: pointer;  margin-top: 44px;  border: 1px solid var(--border, #303A46); background: #10192D;">
                                                        <div style="display: flex; justify-content: center; margin-top: 28px;">
                                                          <img src="/svg/ball.svg"/>
                                                        </div>  
                                                        <span style="color: #D8D8D8; display: flex; justify-content: center; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 600; line-height: 28px;">{{ item.title }}</span>
                                                          
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

                        <v-btn class="sell-offers" width="100%">Find Offers</v-btn>
                    </div>
                </div>              
            
                <div style="background: #303A46; width: 100%; height: 1px; display: flex; justify-content: center; margin-top: 53px; margin-bottom: 53px;"></div>

                <span>About Offer</span>
                <div style="border-radius: 16px; border: 1px solid #303A46; padding: 37px; width: 100%; margin-bottom: 32px; margin-top: 16px; display: flex; justify-content: space-between;">
                    <div style="display: flex; flex-direction: column; align-self: center;">
                        <span style="color: #969696; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 700;line-height: normal;">Seller rate</span>
                        <span style="color: #D8D8D8;font-family: Manrope; font-size: 24px; font-style: normal; font-weight: 700; line-height: normal;">67,107,299.589 NGN•1% below market</span>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; align-self: center;">
                        <span style="color: #969696; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 700;line-height: normal;">Buy limits</span>
                        <span style="color: #969696;font-family: Manrope; font-size: 24px; font-style: normal; font-weight: 700; line-height: normal;">Min 
                            <span style="color:#D8D8D8;"> 55,000 NGN -</span> Max <span style="color:#D8D8D8;">55,259 NGN</span>
                        </span>
                    </div>

                    <div style="display: flex; flex-direction: column; align-self: center;">
                        <span style="color: #969696; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 700;line-height: normal;">Trade time limit</span>
                        <span style="color: #D8D8D8;font-family: Manrope; font-size: 24px; font-style: normal; font-weight: 700; line-height: normal;">30 Minutes</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-self: center;">
                        <span style="color: #969696; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 700;line-height: normal;">Demo Fee</span>
                        <span style="color: #D8D8D8;font-family: Manrope; font-size: 24px; font-style: normal; font-weight: 700; line-height: normal;">0%</span>
                    </div>
                </div>



                <span>About Seller</span>

                <div style="border-radius: 16px; border: 1px solid #303A46; display: flex; justify-content: space-between;  padding: 37px; margin-top: 16px; margin-bottom: 32px;">
                    <div class="d-flex">
                      <v-badge color="success" dot style="position: absolute; margin-left: 55px; margin-top: 47px "></v-badge>
                        <img src="/svg/Image (1).svg" class="me-3" width="60" alt="avatar"/>
                        <div style="display: flex; flex-direction: column; align-self: center;">
                            <span class="user-name">Tom Gravesen</span>
                            <span class="ifonline">Online</span>
                        </div>
                    </div>

                    <div style="display: flex; align-items: center;">
                        <img src="/svg/profile-circle(2).svg" class="me-3" width="24" />
                        <span style="font-family: manrope; font-size: 16px; font-style: normal; font-weight: 700; line-height: 150%; color: #D8D8D8">ID verified</span>
                      </div>

                    <div style="display: flex; align-items: center;">
                        <img src="/svg/sms-green.svg" class="me-3" width="24"/>
                        <span style="font-family: manrope; font-size: 16px; font-style: normal; font-weight: 700; line-height: 150%; color: #D8D8D8">Email verified</span>
                      </div>

                    <div style="display: flex; align-items: center;">
                        <img src="/svg/location-green.svg" class="me-3" width="24"/>
                        <span style="font-family: manrope; font-size: 16px; font-style: normal; font-weight: 700; line-height: 150%; color: #D8D8D8">Address verified</span>
                      </div>

                    <div style=" display: flex; align-items: center;">
                        <img src="/svg/call1.svg" class="me-3" width="24"/>
                        <span style="font-family: manrope; font-size: 16px; font-style: normal; font-weight: 700; line-height: 150%; color: #D8D8D8">Phone verified</span>
                    </div>

                    <div style="display: flex; flex-direction: column;">
                      <span style="color: #D8D8D8; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 700; line-height: 150%;">Trade speed</span>
                      <span style="color: #FFF; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 700;line-height: 150%;">5 min</span>
                    </div>


                    <div class="d-flex" style="align-items: center;">
                          <img src="/svg/heart-tick.svg" alt="icon">
                            <span class="user-location">241</span>
                    </div>

                    <div class="d-flex" style="align-items: center;">
                      <img src="/svg/heart-remove.svg" alt="icon">
                      <span class="user-location">2</span>
                    </div>


                </div>
                

                <span>Offer terms</span>

                <div style="border-radius: 16px; border: 1px solid #303A46; display: flex; justify-content: space-between;  padding: 37px; margin-top: 16px; margin-bottom: 32px;">
                    <div style="display: flex; flex-direction: column;">
                      <span>1. Before a trade starts, the seller selects the bank account they’ll receive payment to and the buyer selects the account they will send funds to.</span>
                      <span>2. When the seller is ready to start the trade, they'll share their bank account details with the buyer.</span>
                      <span>3. The buyer makes the payment to the seller's specified account.</span>
                      <span>4. We recommend the buyer uploads a screenshot of the transaction, featuring the transaction reference number, as proof of payment.</span>
                    </div>
                </div>

                <div style="border-radius: 16px; border: 1px solid #303A46; display: flex; justify-content: space-between;  padding: 37px; margin-top: 16px; margin-bottom: 32px;">
                    <div class="d-flex">
                        <img src="/svg/Image (1).svg" class="me-3" width="70" alt="avatar"/>
                        <div style="display: flex; flex-direction: column; align-self: center;">
                            <span class="user-name">Tom Gravesen</span>
                            <span class="ifonline">Online</span>
                        </div>
                    </div>


                    <div>
                      <span class="me-5" style="color: #969696; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;">Bank Transfer</span>
                      <span class="me-5" style="color: #119254; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 700; line-height: normal;">NGN</span>
                      <span style="color: #FACC15; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 700; line-height: normal;">Low Ammount</span>
                      <div>
                        <span style="color: #D8D8D8; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 800; line-height: normal;">Very Fast</span>
                     </div>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; align-items: center;">
                      <img src="/svg/heart-tick.svg" width="40" alt="icon">
                      <span style="color: #2873FF; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 700; line-height: normal;">View Offer</span>
                    </div>
                  </div>


             </div>
    </v-container>
    <Footer/>
  </template>
  
<script setup>
import { ref } from 'vue'
  
const PurchaseCrypto = ref(true);

const Paymentmethod = ref('Select partner’s bank')
const paymentOptions = [
        { title: 'Monie Point', image:"/img/china.png" },
        { title: 'Access Bank',  image:"/img/china.png" },
        { title: 'Fidelity Bank',  image:"/img/china.png" },
        { title: 'Zenith Bank',  image:"/img/china.png" },
        { title: 'UBA ',  image:"/img/china.png" },
        { title: 'GT Bank', image:"/img/china.png" },
      ];


const coinType = ref("/svg/btc.svg")

const locations = [
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

.user-name{
color: var(--Primary-100, #2873FF);
text-align: justify;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

.ifonline{
color: var(--Second-Text, #A4A8AB);
text-align: justify;
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.1px;
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
overflow: scroll;
height: 566px;
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