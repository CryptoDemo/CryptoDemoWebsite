<template>
    <Header/>
  <div>
    <v-container style="margin-top: 80px;">
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

                  <div class="d-flex" style="justify-content: space-between; margin-top: 53px; margin-bottom: 39px;">
                    <div>
                      <v-btn :class="PurchaseCrypto ? 'sell-offers': 'buy-offers'"  @click.prevent="PurchaseCrypto=true" style="margin-bottom: 11px;">Sell Bitcoin</v-btn>
                      <span class="caption1">Your offer will be listed on the Buy Bitcoin page</span>
                    </div>
                    <div>
                      <v-btn :class="PurchaseCrypto ? 'buy-offers': 'sell-offers'"  @click.prevent="PurchaseCrypto=false" style="margin-bottom: 11px;">Buy Bitcoin</v-btn>
                      <span class="caption1">Your offer will be listed on the Sell Bitcoin page</span>
                    </div>
                  </div>

                  <div>

                    


                    <div style="display: flex; justify-content: space-between;">
                        <div style="display: flex; flex-direction: column; width: 50%;">
                            <span class="payment1 mb-3">Payment Method</span>
                            <div style="height: 64px; border-radius: 24px; background: #12181F; position: relative;">
                                <span class="select1">Select payment method</span>
                                <v-dialog width="624">
                                    <template v-slot:activator="{ props }">
                                        <v-btn v-bind="props" text="View" style="border-radius: 0px 24px 24px 0px; position: absolute; background: #2873FF; text-transform: capitalize; right: 0;  width: 72px; height: 64px; padding: 8px var(--spacing-3xl, 24px);"> </v-btn>
                                    </template>

                                    <template v-slot:default="{  }">
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

                                                <v-col v-for="(item, index) in paymentOptions" :key="index" sm="6" class="d-flex" style="justify-content: center;">
                                                    <div style="border-radius: 24px; width: 159px; cursor: pointer;  margin-top: 44px;  border: 1px solid var(--border, #303A46); background: #10192D;">
                                                    
                                                        <div style="display: flex; justify-content: center; margin-top: 28px;">
                                                            <img :src="item.image"/>
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

                         <div style="display: flex; flex-direction: column;">
                            <span class="payment1 mb-3">Preferred currency</span>
                            <v-menu :currency="currency">
                                <template v-slot:activator="{ props }">
                                <v-btn
                                    class="input-styling4 mb-2" v-bind="props">
                                    <div  class="py-3" style="display: flex; cursor: pointer; position: absolute; left: 37px; align-items: center;">
                                        <span class="me-4" style="font-weight: 700; font-size: 16px;">{{currencyIcon}}</span>
                                        <span class="mt-" style="font-weight: 700; color: var(--Gray-Medium-light, #969696);">{{selected}}</span> 
                                    </div>
                                    <v-icon icon="mdi-chevron-down"  color="#E0E4F5" class="chevron-icon" style="position: absolute; right: 45px; bottom: 25px; "></v-icon>
                                </v-btn>
                                </template>

                                <v-list>
                                <v-list-item>
                                    <div v-for="(currency, index) in currencies" class="d-flex py-3" style="cursor: pointer"
                                    :key="index" >
                                
                                    <v-list-item-title @click="selected=currency.title;" class="d-flex">
                                        <span>{{currency.icon}}</span> 
                                        <span> {{ currency.title }} </span>
                                    </v-list-item-title>
                                    </div>
                                </v-list-item>
                                </v-list>
                            </v-menu> 
                            <span class="currency-list">This list shows only the currencies supported for your selected payment method. If you think we're missing a currency that's supported, let us know and we'll add it.</span>
                         </div>
                    </div>

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
                     
                 
                      <v-btn class="next-step" :disabled="loading" :loading="loading" @click.prevent="navigateTo('/createOffer/createOffer2')" >Next step</v-btn>
                     
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
                        <span>Payment Method</span>
                       </div>
                      
                          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="243" viewBox="0 0 7 243" fill="none" style="position: relative; left: 131px; margin-top: 30px;">
                              <path d="M3.49999 237.333C2.02723 237.333 0.833323 238.527 0.833323 240C0.833323 241.473 2.02723 242.667 3.49999 242.667C4.97275 242.667 6.16666 241.473 6.16666 240C6.16666 238.527 4.97275 237.333 3.49999 237.333ZM3 -2.18557e-08L2.99999 240L3.99999 240L4 2.18557e-08L3 -2.18557e-08Z" fill="#303A46"/>
                          </svg>

                        <div class="d-flex" style="position: relative; left: 110px; top: 12px;">
                          <span>Pricing</span>
                        </div>

                       <svg xmlns="http://www.w3.org/2000/svg" width="7" height="243" viewBox="0 0 7 243" fill="none" style="position: relative; left: 131px; margin-top: 30px;">
                              <path d="M3.49999 237.333C2.02723 237.333 0.833323 238.527 0.833323 240C0.833323 241.473 2.02723 242.667 3.49999 242.667C4.97275 242.667 6.16666 241.473 6.16666 240C6.16666 238.527 4.97275 237.333 3.49999 237.333ZM3 -2.18557e-08L2.99999 240L3.99999 240L4 2.18557e-08L3 -2.18557e-08Z" fill="#303A46"/>
                        </svg>

                        <div class="d-flex" style="position: relative; left: 80px;">
                          <span>Other Settings</span>
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
const loading = ref(false)

// const nextStep = () =>{
//         loading.value = true
//         setTimeout(() => (loading.value = false), 2000);

//         navigateTo(''); 
//       };


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
letter-spacing: 0px;
box-shadow: none;
}
.input-styling4{
border-radius: 16px;
height: 64px !important;
width: 367px;
background: var(--secondary-background, #12181F);
letter-spacing: 0px;
box-shadow: none;
}

.sell-offers {
display: flex;
width: 372px;
height: 56px;
padding: 16px 68px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 16px;
border: 1px solid var(--border, #303A46);
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);
letter-spacing: 0px;
text-transform: unset;
color: var(--Colors-Base-white, #FFF);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.buy-offers{
width: 372px;
height: 56px;
padding: 16px 68px;
background: inherit;
border-radius: 22px;
color:  #FFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0px;
text-transform: unset;
box-shadow: none;
display: flex;
align-self: center;
background: var(--secondary-background, #12181F);
}
.previous-step{
border-radius: 20px;
background: var(--Gray-Medium-light, #969696);
width: 258px;
height: 60px;
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

.dialog{
border-radius: 40px !important;
border: 1px solid var(--border, #303A46);
background: var(--secondary-background, #12181F);
color: white;
box-shadow: none !important;
height: 566px;
overflow: scroll;
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
.currency-list{
color: var(--Primary-40, #B9D1FF);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 361px;
flex-shrink: 0;
}
</style>