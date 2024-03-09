<template>
    <Header/>
  <div>
    <v-container style="margin-top: 80px;">
      <v-row no-gutters>
            <v-col cols="9">
              <div class="pa-2 ma-2">      
                <span class="offer-txt1">Create an Offer to Sell your Crypto</span>

                <div style="display: flex; flex-direction: column; margin-top: 56px;">
                    <span class="prc1">Trade Pricing</span>
                    <span class="prc2 mt-3">Choose Bitcoin rate favourable to you</span>
                </div>

                <div>
                

                  <div class="d-md-flex" style="justify-content: space-between; margin-top: 53px; margin-bottom: 66px;">
                    <div class="" :class="PurchaseCrypto ? 'box1': 'box2'"  @click="PurchaseCrypto=true">
                      <span :class="PurchaseCrypto ? 'mkt-place': 'mkt-place1'"  @click="PurchaseCrypto=true">Market Place</span>
                      <span :class="PurchaseCrypto ? 'mkt-place-caption': 'mkt-place-caption1'"  @click="PurchaseCrypto=true">Your offer’s selling price will change according to the market price of Bitcoin.</span>
                      
                    </div>
                    <div class="" :class="PurchaseCrypto ? 'box2': 'box1'"  @click="PurchaseCrypto=false">
                      <span :class="PurchaseCrypto ? 'mkt-place1': 'mkt-place'"  @click="PurchaseCrypto=false">Fixed Price</span>
                      <span :class="PurchaseCrypto ? 'mkt-place-caption1': 'mkt-place-caption'"  @click="PurchaseCrypto=false">Your offer’s selling price is locked when you create it, and won’t change with the market price.</span>
                    </div>
                  </div>

                  <div style="background: #303A46; height: 1px;"></div>

                  <div>
                    <v-row class="position-relative">

                      <div style="background: #161D26;width: 1px; height: 1000px; position: absolute; left: 0; right: 130px; display: flex; justify-self: center; margin-top: 30px;"></div>
                          <v-col cols="">

                              <div class="d-flex" style="margin-top: 45px;">

                                <div style="display: flex;">
                                  <span class="me-5" style="color:#F8FAFC; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 700; line-height: 150%; display: flex; align-items: center;">Offer Trade Limit</span>
                                  
                                  <div style="border-radius: 20px; display: flex; justify-content: center; width: 150px; margin: auto; background: #161D26; height: 45px; align-items: center;">
                                    <v-btn :class="Trade ? 'fixed': 'range'"  @click.prevent="Trade=true">Fixed</v-btn>
                                    <v-btn :class="Trade ? 'range': 'fixed'"  @click.prevent="Trade=false">Range</v-btn>
                                  </div>

                                </div>

                              </div>
                              <div class="d-flex" style="margin-top: 204px;">

                                <div style="display: flex;">
                                  <span class="me-13" style="color:#F8FAFC; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 700; line-height: 150%; display: flex; align-items: center;">Offer Margin</span>
                                  
                                
                                  <div style="border-radius: 20px; display: flex; justify-content: center; width: 150px; margin: auto; background: #161D26; height: 45px; align-items: center;">
                                    <v-btn :class="TradeType ? 'range': 'fixed'"  @click.prevent="TradeType=false">Basic</v-btn>
                                    <v-btn :class="TradeType ? 'fixed': 'range'"  @click.prevent="TradeType=true">complex</v-btn>
                                  </div>

                                </div>

                              </div>

                              <div class="d-flex" style="margin-top: 474px;">

                                <div style="display: flex;">
                                  <span class="me-13" style="color:#F8FAFC; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 700; line-height: 150%; display: flex; align-items: center;">Offer Time Limit</span>
                                  

                                </div>

                              </div>

                          </v-col>
                      
                          <v-col cols="7" style="margin-top: 45px;">
                            <span class="select1i">Select or type in manually</span>
                            <v-combobox 
                              v-model="select" :items="items" style="border: 1px solid #1B2537; background: #10192D; border-radius: 15px; margin-left: 28px; margin-top: 8px; margin-bottom: 8px;"
                              variant="none"
                              chips
                              multiple >
                              <template #prepend-item> <v-card flat width="100%" height="100%" style=" background: #161D26;  position: absolute; top: 0px " /> </template> 
                            </v-combobox>
                            <span class="select1i d-flex">Your offer limit must be between 14,200 and <br>14,200,000</span>
                            <div style="background: #303A46; height: 1px; margin-left: 28px; margin-top: 30px; margin-bottom: 26px;"></div>

                            <span class="select1i d-flex mb-4">Adopt a customizable offer margin by selecting the market price of Bitcoin from various sources. Choose your desired source and time frame  below.</span>
                            <span class="select1i d-flex mb-2">Source</span>
                            <v-select variant="none"
                              v-model="source" :items="SourceType" style="border: 1px solid #1B2537; background: #10192D; color: #8E9BAE; font-size: 14px; border-radius: 15px; margin-left: 28px;  height: 61px; align-items: center;">
                              <template #prepend-item> <v-card flat width="100%" height="100%" style=" background: #161D26;  position: absolute; top: 0px " /> </template> 
                            </v-select>

                            <div style="margin-top: 16px;">
                              <span class="select1i d-flex mb-2">Price Time frame</span>
                                <v-select variant="none"
                                  v-model="price" :items="pricing" style="border: 1px solid #1B2537; background: #10192D; color: #8E9BAE; font-size: 14px; border-radius: 15px; margin-left: 28px;  height: 61px; align-items: center;">
                                  <template #prepend-item> <v-card flat width="100%" height="100%" style=" background: #161D26;  position: absolute; top: 0px " /> </template> 
                                </v-select>
                            </div>

                            <span class="select1i d-flex mb-2 mt-4">What profit target do you have for each trade? (%)</span>
                              <div style="border-radius: 15px; height: 61px; color: #8E9BAE; border: 1px solid #1B2537; background: #10192D; margin-left: 28px; display: flex; justify-content: space-between;">
                                  <v-btn @click="increment" class="increment-btn">+</v-btn>
                                  <span style="display: flex; align-items: center;"> {{ count }}</span>
                                  <v-btn @click="decrement" class="increment-btn">-</v-btn>
                              </div>

                              <span class="select1i d-flex mb-2 mt-4">Bitcoin Market Price: ₦61,160,488.67 Receive 95% of the Bank Transfer value via Demo at the current price time frame.Save ₦3,054,184.04 per Bitcoin compared to the market price. With a minimum trade of ₦14,200.00, get ₦14,910.00 worth of Bitcoin in return.</span>
                            
                              <div style="background: #303A46; height: 1px; margin-left: 28px; margin-top: 30px; margin-bottom: 26px;"></div>
                            
                                <span class="select1i d-flex mb-2 mt-4">Set your offer time limit here (Minutes)</span>
                                <div style="border-radius: 15px; height: 61px; color: #8E9BAE; border: 1px solid #1B2537; background: #10192D; margin-left: 28px; display: flex; justify-content: space-between;">
                                    <v-btn @click="increaseMinute" class="increment-btn">+</v-btn>
                                    <span style="display: flex; align-items: center;"> {{ minutes }}</span>
                                    <v-btn @click="decreaseMinute" class="increment-btn">-</v-btn>
                                </div>

                                <span class="select1i d-flex mb-2 mt-4">Bitcoin Market Price: ₦61,160,488.67 
                                    Save ₦3,058,024.43 per Bitcoin at your selected margin. With a minimum trade of ₦14,200.00, get ₦14,910.00 worth of Bitcoin in return.
                                </span>
                          </v-col>

                    </v-row>
                  </div>




                  <div>

              
                    <div>
                      <div style="margin-top: 89px;">
                        <span class="payment1" style="font-size: 32px; color: #D8D8D8;">About this step</span>
                      </div>

                      <div style="width: 464px; margin-top: 18px;">
                          <span class="text-step">Start creating your offer by selecting the cryptocurrency you want to trade, whether or not you want to buy or sell, and the payment method you want to use.</span>
                      </div>

                      <div style="display: flex; flex-direction: column; margin-top: 18px;">
                        <span class="abt-txt1">You want to sell Bitcoin (BTC)</span>
                        <span class="abt-txt1">And get paid via NIP (NIBSS Instant Payment) in US Dollar (USD)</span>
                        <span class="abt-txt1">ou will pay Paxful a 1% fee for each trade</span>
                      </div>
                    </div>

                    <div class="d-flex" style="justify-content: space-between; margin-top: 53px; margin-bottom: 39px;">
                    <div>
                      <v-btn class="previous-step me-4">Previous step</v-btn>
                     
                 
                      <v-btn class="next-step" :disabled="loading" :loading="loading" @click.prevent="navigateTo('/createOffer/createOffer4')" >Next step</v-btn>
                     
                    </div>
                  </div>

                    
                  </div>
                </div>
             </div>
            
           

           
       
            </v-col>
            <v-col>
              <div class="pa-2 ma-2 d-flex position-relative">
                    <div style="background: #303A46; width: 1px; height: 579px; margin-top: 10px;"></div>

                    <!-- <div> -->
                      <div class="d-flex" style="flex-direction: column;">
                       <div class="d-flex" style="display: flex; position: absolute; left: 0; right: 0; justify-content: center;">
                        <span class="prc" style="color: #35B233;">Payment Method</span>
                       </div>
                      
                       <svg xmlns="http://www.w3.org/2000/svg" width="7" height="243" viewBox="0 0 7 243" fill="none" style="position: relative; left: 131px; margin-top: 30px;">
                            <path d="M3.49999 237.333C2.02723 237.333 0.833323 238.527 0.833323 240C0.833323 241.473 2.02723 242.667 3.49999 242.667C4.97275 242.667 6.16666 241.473 6.16666 240C6.16666 238.527 4.97275 237.333 3.49999 237.333ZM3 -2.18557e-08L2.99999 240L3.99999 240L4 2.18557e-08L3 -2.18557e-08Z" fill="#5FC381"/>
                        </svg>
                        

                        <div class="d-flex" style="position: relative; left: 110px; top: 12px;">
                          <span class="prc" style="color: #D8D8D8;">Pricing</span>
                        </div>

                       <svg xmlns="http://www.w3.org/2000/svg" width="7" height="243" viewBox="0 0 7 243" fill="none" style="position: relative; left: 131px; margin-top: 30px;">
                              <path d="M3.49999 237.333C2.02723 237.333 0.833323 238.527 0.833323 240C0.833323 241.473 2.02723 242.667 3.49999 242.667C4.97275 242.667 6.16666 241.473 6.16666 240C6.16666 238.527 4.97275 237.333 3.49999 237.333ZM3 -2.18557e-08L2.99999 240L3.99999 240L4 2.18557e-08L3 -2.18557e-08Z" fill="#303A46"/>
                        </svg>

                        <div class="d-flex" style="position: relative; left: 80px;">
                          <span class="prc">Other Settings</span>
                        </div>
                    </div>
                  </div>
                <!-- </div> -->
            </v-col>
    </v-row>
    </v-container>
    <Footer/>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const PurchaseCrypto = ref(true);


const Trade = ref(true);


const TradeType = ref(true);


const count = ref(5);

const increment = () => {
  count.value += 5;
};

const decrement = () => {
  count.value -= 5;
};

const minutes = ref(30);

const increaseMinute = () => {
  minutes.value += 1;
};

const decreaseMinute = () => {
  minutes.value -= 1;
};

 const paymentOptions = [
    { title: 'English', image:"/svg/bank.svg" },
    { title: 'Spanish',  image:"/svg/bank.svg" },
    { title: 'French',  image:"/svg/bank.svg" },
    { title: 'French',  image:"/svg/bank.svg"},
    { title: 'French',  image:"/svg/bank.svg"},
    { title: 'Igbo', image:"/svg/bank.svg"},
      ];


const selected  = ref ('US Dollar USD') 
const currencyIcon = ref ('$')

const currencies = [
    {
    icon:'$', title:"US Dollar USD"
    },
    {
    icon:'$', title:"US Dollar USD"
    },
    {
    icon:'$', title:"Canadian Dollar"
    },
    {
    icon:'$', title:"US Dollar USD"
    }
];

const  select = ref (['11,050', '15,000', '25,000', '35,000' ]);
const items =ref([
          '15,000',
          '85,200',
          '22,109',
          '125,090',
        ]);

const  source = ref ('Demo');
const SourceType =ref([
          'Demo',
          'Bank Transfer',
          'Peer to Peer',
          'Binance',
        ]);

const  price = ref ('Current price');
const pricing =ref([
          'Demo',
          'Bank Transfer',
          'Peer to Peer',
          'Binance',
        ]);
</script>

<style>
.offer-txt1 {
color: var(--Colors-Base-white, #FFF);
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 800;
line-height: normal;
}


.prc{
color: var(--Gray-Medium-light, #969696);
text-align: center;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.prc1{
color: var(--Primary-100, #2873FF);
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.prc2{
color: var(--Gray-Medium-light, #969696);
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: normal;   
}

.box1{
border-radius: 24px;
border: 1px solid var(--linear-card, #1DA1DB);
background: var(--dark-bg, #10192D);
padding: 33px;
display: flex;
flex-direction: column;
width: 48%;
cursor: pointer;
}

.mkt-place{
color: var(--Primary-100, #2873FF);
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.mkt-place1{
color: var(--Primary-100, #D8D8D8);
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.mkt-place-caption{
color: var(--Gray-Light, #D8D8D8);
font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 11px;
}
.mkt-place-caption1{
color: var(--Gray-Light, #969696);
font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 11px;
}

.box2{
border-radius: 24px;
border: 1px solid var(--border, #303A46);
background: var(--secondary-background, #12181F);
padding: 33px;
display: flex;
flex-direction: column;
width: 48%;
cursor: pointer;
}

.fixed{
border-radius: 20px;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);
width: 68px;
height: 32px;
flex-shrink: 0;
letter-spacing: 0px;
text-transform: capitalize;
color: var(--Colors-Base-white, #FFF);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 21px */
}

.range{
background: inherit;
text-transform: capitalize;
letter-spacing: 0px;
width: 68px;
height: 32px;
box-shadow: none;
color: var(--Black-40, #8E9BAE);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 21px */
opacity: 0.45;
}
.previous-step{
border-radius: 20px;
background: var(--secondary-background, #12181F);
width: 258px;
height: 60px !important;
flex-shrink: 0;
width: 258px;
height: 60px;
letter-spacing: 0px;
text-transform: capitalize;
color: #D8D8D8;
text-align: center;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.next-step{
border-radius: 20px;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF)!important;
width: 258px !important;
height: 60px !important;
flex-shrink: 0;
width: 258px;
height: 60px;
letter-spacing: 0px;
text-transform: capitalize !important;
color: var(--White, var(--Colors-Base-white, #FFF));
text-align: center;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.caption1{
color: var(--Gray-Light, #D8D8D8);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.payment1{
color: var(--Colors-Base-white, #FFF);
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;

}

.select1{
color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
position: absolute;
top: 30%;
margin-left: 23px;
}


.abt-txt1{
color: var(--Gray-Light, #D8D8D8);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
display: list-item; 
margin-left: 15px;
}
.text-step{
color: var(--Gray-Light, #D8D8D8);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 464px;
}
::-webkit-scrollbar{
  display: none;
}

.v-chip{
border-radius: 12px !important;
background: #131D35 !important;
width: 67px !important;
height: 36px !important;
display: flex !important;
align-items: center !important;
font-family: Manrope; 
color: #8E9BAE !important; 
font-size: 14px !important;
line-height: 140% !important;
cursor: pointer !important;
margin-top: 5px!important ;
}

.v-input--density-default .v-field__input {
    row-gap: 16px !important;
    width: 65%;
}

.select1i{
color: var(--Main-Greyscale-40, #8E9BAE);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 19.6px */
margin-left: 28px;
}

.increment-btn{
min-width: 53px;
height: 55px !important;
flex-shrink: 0;
background: rgba(19, 29, 53, 1);
box-shadow: none;
border-radius: 10px;
margin-top: 2px;
}
</style>