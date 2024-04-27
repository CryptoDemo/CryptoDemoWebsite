<template>
  <div>
    <Header hide="true" icon1="/svg/profile-icon.svg" icon3="/svg/profile-icon.svg"  icon2="/svg/Notification.svg"/>
              
        
          <v-row no-gutters style="margin-top: 130px; margin-bottom: 338px">
            <v-col cols="3">
              <div class="pa-2 ma-2">
                <Sd-nav1/>
              </div>
            </v-col>

            <v-col>
              <div class="pa-2 ma-2">
                <div class="acct-settings" style="display: flex; justify-content: space-between; margin-bottom: 74px">    
                      <span class="partners-text"> Complete verification to access Demo products and services.</span>
                      <div> <v-btn class="primary-btn" style="height: 37px!important; width: 120px; border-radius: 8px; background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);text-transform: capitalize; letter-spacing: 0px">Verify</v-btn> </div>
                  </div>


        
                  <div class="mt-5">
                      <v-row>
                      <div class="d-flex">
                        <div class="d-flex">
                          <v-btn class=" me-4 mb-4" :class="PurchaseCrypto ? 'active-btn': 'inactive-btn'"  @click.prevent="PurchaseCrypto=true"> 
                              <span style="position: relative; left: -18px">Crypto purchased</span>
                            <span style="position: relative; right: -18px; font-weight: 800;">2</span>
                          </v-btn>
                          <v-btn  :class="PurchaseCrypto ? 'inactive-btn': 'active-btn'"  @click.prevent="PurchaseCrypto=false">
                              <span style="position: relative; left:-37px">Crypto sold </span>
                              <span style="position: relative; right: -32px; font-weight: 800;">2</span>
                          </v-btn>
                        </div>

                        <div style="position: relative; left: 38%;">
                          <v-menu :location="location">
                            <template v-slot:activator="{ props }">
                              <v-btn class="mx-auto active-offers" style="letter-spacing: 0px"
                                v-bind="props">
                                <img  width="25" class="me-2" :src="flag" style="margin-left: -60px "/> 
                                <div style="display: grid; cursor: pointer;">
                                <span >{{select}}</span> 
                                <span class="me- small-text">{{coin}}</span> 
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none" style="position: absolute; display: flex; right: 15px;">
                                   <path d="M5.61643 5.99999C5.7553 6.00001 5.8928 5.973 6.0211 5.92049C6.14941 5.86799 6.266 5.79102 6.3642 5.69399L10.3104 1.794C10.5086 1.59813 10.62 1.33249 10.62 1.0555C10.62 0.77851 10.5086 0.512869 10.3104 0.317007C10.1122 0.121144 9.84345 0.0110984 9.56318 0.0110984C9.2829 0.0110984 9.01411 0.121144 8.81593 0.317007L5.61442 2.717L2.41292 0.317007C2.21473 0.121144 1.94594 0.0110984 1.66567 0.0110984C1.3854 0.0110984 1.11657 0.121144 0.91839 0.317007C0.720206 0.512869 0.608887 0.77851 0.608887 1.0555C0.608887 1.33249 0.720206 1.59813 0.91839 1.794L4.86464 5.69399C4.96329 5.79155 5.08052 5.86882 5.20957 5.92135C5.33861 5.97387 5.47688 6.00059 5.61643 5.99999Z" fill="#E0E4F5"/>
                                </svg>

                              </v-btn>
                            </template>

                          <v-list style="background: #303A46; border-radius: 15px;">
                            <v-list-item>
                              <div v-for="(item, index) in allCoins" class="d-flex py-3" style="cursor: pointer"
                                :key="index" >
                            
                                <v-list-item-title @click="select=item.title; coin=item.coinText; flag= item.image" class="d-flex">
                                <v-img width="20" class="rounded-5 me-3" :src="item.image"/>    
                                <span> {{ item.title }} </span>
                              </v-list-item-title>
                              </div>
                            </v-list-item>
                          </v-list>
                          </v-menu> 
                        </div>
                      </div>
                      </v-row>

                        <div style="height: 1px; width: 930px; background: #303A46; margin-top:16px"></div>
                    <div style="display: flex; justify-content: space-between;  width: 930px;">
                        <div style="margin-top: 32px;">
                            <div style="display: flex; margin-bottom: 14px">
                                 <span class="me-3">Esewa</span>
                                 <img src="/flags/do.svg" width="24px" style="border-radius: 10px;"/>
                            </div>
                            <div style="display: grid">
                                <span class="mb-3" style="color: #969696;font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 500; line-height: normal;">Bank Transfer</span>
                                <span class="mb-3" style="color: #969696;font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 500; line-height: normal;">First Bank only</span>
                            <div style="display:flex">
                                <v-btn class="smaller-btn me-4">Guided Trade</v-btn>
                                <v-btn class="smaller-btn">Receipt required</v-btn>
                            </div>
                            </div>
                        </div>
                        
                        <div class="" style="display: flex; align-items: center;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M13.73 3.51063L15.49 7.03063C15.73 7.52063 16.37 7.99062 16.91 8.08063L20.1 8.61062C22.14 8.95062 22.62 10.4306 21.15 11.8906L18.67 14.3706C18.25 14.7906 18.02 15.6006 18.15 16.1806L18.86 19.2506C19.42 21.6806 18.13 22.6206 15.98 21.3506L12.99 19.5806C12.45 19.2606 11.56 19.2606 11.01 19.5806L8.02 21.3506C5.88 22.6206 4.58 21.6706 5.14 19.2506L5.85 16.1806C5.98 15.6006 5.75 14.7906 5.33 14.3706L2.85 11.8906C1.39 10.4306 1.86 8.95062 3.9 8.61062L7.09 8.08063C7.62 7.99062 8.26 7.52063 8.5 7.03063L10.26 3.51063C11.22 1.60063 12.78 1.60063 13.73 3.51063Z" fill="#FACC15"/>
                            </svg>

                            <span style="color: var(--Gray-Medium-light, #969696);font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 700; line-height: normal;">Add to favorites</span>
                        </div>

                        <div style="margin-top: 32px;">
                            <div style="display: flex; margin-bottom: 14px">
                                 <span style="color: #8E9BAE;font-family: Manrope; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal;">Limit 15,000 - 100,000 NGN</span>
                            </div>
                            <div style="display: grid">
                                <span class="mb-3" style="color: #fff;font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal; text-align-last: right;">62,797,850.5 NGN</span>
                                <div class="d-flex mb-3" style="justify-content: end;">
                                    <img src="/svg/btc.svg" class="me-3" width="20px"/> 
                                    <span class="me-1" style="color: #8E9BAE;font-family: Manrope; font-size: 12px; font-style: normal; font-weight: 600; line-height: 150%;">BTC</span>
                                    <img src="/svg/arrow-up.svg" class="mb-1 me-1"/>
                                    <span style="color: #22C36B; font-size: 12px; font-style: normal; font-weight: 400;line-height: 150%;">-10%</span>
                                </div>
                            <div style="display:flex; justify-content: end;">
                                <v-btn class="smaller-btn" style="color: var(--Gray-Light, #D8D8D8); background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);">{{ PurchaseCrypto? 'Buy Now' : 'Sell Now'}}</v-btn>
                    
                            </div>
                            </div>
                        </div>
                    </div>

                        <div style="height: 1px; width: 930px; background: #303A46; margin-top:16px"></div>
                    <div style="display: flex; justify-content: space-between;  width: 920px;">
                        <div style="margin-top: 32px;">
                            <div style="display: flex; margin-bottom: 14px">
                                 <span class="me-3">Esewa</span>
                                 <img src="/flags/dz.svg" width="24px" style="border-radius: 10px;"/>
                            </div>
                            <div style="display: grid">
                                <span class="mb-3" style="color: #969696;font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 500; line-height: normal;">Bank Transfer</span>
                                <span class="mb-3" style="color: #969696;font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 500; line-height: normal;">First Bank only</span>
                            <div style="display:flex">
                                <v-btn class="smaller-btn me-4">Guided Trade</v-btn>
                                <v-btn class="smaller-btn">Receipt required</v-btn>
                            </div>
                            </div>
                        </div>
                        
                        <div class="" style="display: flex; align-items: center;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M13.73 3.51063L15.49 7.03063C15.73 7.52063 16.37 7.99062 16.91 8.08063L20.1 8.61062C22.14 8.95062 22.62 10.4306 21.15 11.8906L18.67 14.3706C18.25 14.7906 18.02 15.6006 18.15 16.1806L18.86 19.2506C19.42 21.6806 18.13 22.6206 15.98 21.3506L12.99 19.5806C12.45 19.2606 11.56 19.2606 11.01 19.5806L8.02 21.3506C5.88 22.6206 4.58 21.6706 5.14 19.2506L5.85 16.1806C5.98 15.6006 5.75 14.7906 5.33 14.3706L2.85 11.8906C1.39 10.4306 1.86 8.95062 3.9 8.61062L7.09 8.08063C7.62 7.99062 8.26 7.52063 8.5 7.03063L10.26 3.51063C11.22 1.60063 12.78 1.60063 13.73 3.51063Z" fill="#FACC15"/>
                            </svg>
                            <span style="color: var(--Gray-Medium-light, #969696);font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 700; line-height: normal;">Add to favorites</span>
                        </div>

                        <div style="margin-top: 32px;">
                            <div style="display: flex; margin-bottom: 14px">
                                 <span style="color: #8E9BAE;font-family: Manrope; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal;">Limit 15,000 - 100,000 NGN</span>
                            </div>
                            <div style="display: grid">
                                <span class="mb-3" style="color: #fff;font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal; text-align-last: right;">62,797,850.5 NGN</span>
                                <div class="d-flex mb-3" style="justify-content: end;">
                                    <img src="/svg/btc.svg" class="me-3" width="20px"/> 
                                    <span  style="color: #8E9BAE;font-family: Manrope; font-size: 12px; font-style: normal; font-weight: 600; line-height: 150%;">BTC</span>
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

              </div>
                        
                
            </v-col>
          </v-row>
          
          <Footer/>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const PurchaseCrypto = ref(true);
const profileCards = [
                        {image:'/svg/call.svg', Title: 'Phone not verified', textCaption: 'Take a minute to verify your phone number' },
                        {image:'/svg/sms.svg', Title1: 'Email verified', textCaption: 'You have verified your phone number.' }, 
                        {image:'/svg/profile-circle.svg', Title:'I.D. not verified', textCaption: 'You have verified your phone I.D.'}, 
                        
];

const select =ref("All Cryptocurrency")
// const coin = ref ("BTC")
// const flag = ref("/svg/bitcoin-btc-logo 1.svg")

const allCoins = [
    { title: 'Tron', coinText:"TRX",  image:"/svg/tron.svg" },
    { title: 'Tether', coinText:"USDT", image:"/svg/tether.svg" },
    { title: 'Binance',  coinText:"BNN", image:"/svg/binance.svg"},
    { title: 'Ethereum',  coinText:"ETH", image:"/svg/btc.svg"},
      ];

   const items = [
        { title: 'Ethereum' },
        { title: 'USDT' },
        { title: 'Dodge' },
        { title: 'Bitcoin' },
      ];
    
</script>
<style scoped>
.profile{
border-radius: 20px;
background: var(--secondary-background, #12181F);
height: 130px;
flex-shrink: 0;
}
.acct-level{
height: 130px;
flex-shrink: 0;
border-radius: 20px;
background: var(--secondary-background, #12181F);
}
.profile-level{
border-radius: 12px;
background: rgba(247, 147, 26, 0.15);
display: flex;
width: 101.521px;
padding: 7px 13px;
align-items: flex-start;
gap: 10px;
color: #969696;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.username{
color: var(--Gray-Medium-light, #969696);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.user-location{
color: var(--Colors-Base-white, #FFF);
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.acct-level-text{
overflow: hidden;
color: var(--White, var(--Colors-Base-white, #FFF));
text-overflow: ellipsis;
white-space: nowrap;
font-family: Manrope;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.profile-cards{
border-radius: 24px;
background: var(--secondary-background, #12181F)!important;
display: flex;
width: 302px;
min-height: 140px;
padding: 20px 20px 16px 20px;
flex-direction: column;
justify-content: center;
align-items: flex-end;
gap: 16px;
color: white;
}
.card-text{
color: var(--Warm-Red, #969696);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
display: flex;
flex-direction: column;
justify-content: center;
}
.active-offers{
width: 202.371px !important;
height: 50px;
flex-shrink: 0;
border-radius: 20px;
border-radius: 20px;
background: var(--secondary-background, #12181F);
letter-spacing: unset!important;
text-transform: unset !important;
overflow: hidden;
color: #C2C2C2;
text-overflow: ellipsis;
white-space: nowrap;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.offers-text{
color: #C2C2C2;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
justify-content: center;

}
.verify-text{
color: #646464;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 25.6px */
cursor: pointer;
position: absolute;
right: 0;
bottom: 3px ;
}
.inactive-btn {
border-radius: 20px;
background: var(--secondary-background, #12181F);
text-transform: unset;
letter-spacing: 0px;
width: 231.714px;
height: 50px;
flex-shrink: 0;
color: #C2C2C2;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.active-btn{
border-radius: 20px;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);
text-transform: unset;
letter-spacing: 0px;
width: 231.714px;
height: 50px;
flex-shrink: 0;
color: var(--Gray-Light, #D8D8D8);
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal; 
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
.partners-text{
color: var(--Gray-Medium-dark, #646464);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
</style>