<template>
  <div>
        <v-row no-gutters>
            <v-col cols="8">
              <div class="pa-1 ma-1">
                <div class="profile" style="padding: 30px 0px ">

                  <div class="d-flex" style="justify-content: space-around;">
                    <div class="d-flex">
                      <img src="/svg/Image (1).svg" class="me-3" alt="avatar"/>
                        <div>
                          <span class="username mt-5 d-flex">UID : Ogadinma2024</span>
                        </div>
                    </div>
                    <div class="d-flex">
                     <div class="d-flex me-4" style="color:#2873FF; font-family: Poppins; font-size: 16px; align-self: center; font-style: normal; font-weight: 700; line-height: 160%;"><img src="/svg/shield.svg" style="margin-right: 3px !important"/>Trust</div>
                     <div class="d-flex" style="color: #F65556; font-family: Poppins; align-self: center; font-size: 16px; font-style: normal; font-weight: 700; line-height: normal; "><img src="/svg/forbidden.svg" style="margin-right: 3px !important"/>Block</div>
                    </div>
                    <div class="d-flex" style="align-items: center;">
                      <img src="/svg/heart-remove.svg" alt="icon">
                      <span class="user-location">0</span>
                    </div>
                      <div class="d-flex" style="align-items: center;">
                          <img src="/svg/heart-tick.svg" alt="icon">
                            <span class="user-location">0</span>
                      </div>
                  </div>

                </div>
              </div>
            </v-col>
            <v-col>
              <div class="pa-1 ma-1">
                <div class="acct-level">
                  <div class="d-flex" style="padding: 45px; justify-content: center"> 
                      <img src="/svg/btc.svg" class="me-3" alt="dashboard-icon"> 
                      <span class="acct-level-text">Send Bitcoin</span>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>

        
          <v-row no-gutters style="overflow:;">
            <v-col cols="3">
              <div class="pa-2 ma-2">
                          <!-- //side nav here../ -->
              </div>
            </v-col>

            <v-col>
              <div class="pa-2 ma-2">
                  <v-row align="center" justify="start" style="gap: 16px; margin-bottom: 32px !important">
                    <v-col v-for="(variant, i) in profileCards" class="profile-cards" :key="i" cols="auto">
                        <v-card class="mx-auto" max-width="344" :variant="variant" >
                            <v-card-item>
                              <div>
                                <div class="d-flex">
                                  <img :src="variant.image" class="me-3"/>
                                  <span class="card-text">{{ variant.Title }}</span>
                                  <span class="card-text">{{ variant.Title1 }}</span>
                                </div>
                                
                                <div class="textCaption" style="color: var(--Gray-Medium-dark, #646464);margin-top: 8px; font-size: 14px;">{{variant.textCaption}}</div>
                              </div>
                            </v-card-item>
                                
                            <v-card-actions>
                              <NuxtLink to="#"><span class="verify-text">
                                Verified
                              </span></NuxtLink>
                            </v-card-actions>
                        </v-card>
                   </v-col>
                   
                  </v-row>


                  <span class="user-location " >Active offers</span>
        
                <div class="mt-5">
                      <v-row>
                        <v-btn class=" me-4 mb-4" :class="PurchaseCrypto ? 'active-btn': 'inactive-btn'"  @click.prevent="PurchaseCrypto=true"> 
                            <span style="position: relative; left: -18px">Crypto purchased</span>
                          <span style="position: relative; right: -18px; font-weight: 800;">0</span>
                         </v-btn>
                        <v-btn  :class="PurchaseCrypto ? 'inactive-btn': 'active-btn'"  @click.prevent="PurchaseCrypto=false">
                             <span style="position: relative; left:-37px">Crypto sold </span>
                             <span style="position: relative; right: -32px; font-weight: 800;">0</span>
                        </v-btn>
                  
                        <v-menu
                            transition="slide-x-transition">
                                <template v-slot:activator="{ props }">
                                <v-btn class="mx-auto active-offers" v-bind="props"> All cryptocurrencies
                                <v-icon icon="mdi-chevron-down"></v-icon>
                                </v-btn>
                                </template>

                                <v-list>
                                <v-list-item v-for="(item, i) in items" :key="i">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                                </v-list>
                        </v-menu>
                      </v-row>

                        <div style="height: 1px; width: 930px; background: #303A46; margin-top:16px"></div>
                    <div style="display: flex; justify-content: space-between;  width: 930px;">
                        <div style="margin-top: 32px;">
                            <div style="display: flex; margin-bottom: 14px">
                                 <span class="me-3">Esewa</span>
                                 <img src="/flags/do.svg" width="25px"/>
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
                            <img src="/svg/star.svg" class="me-2 mb-2"/>
                            <span style="color: var(--Gray-Medium-light, #969696);font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 700; line-height: normal;">Add to favorites</span>
                        </div>

                        <div style="margin-top: 32px; margin-block-start: auto;">
                            <div style="display: flex; margin-bottom: 14px">
                                 <span style="color: #8E9BAE;font-family: Manrope; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal;">Limit 15,000 - 100,000 NGN</span>
                            </div>
                            <div style="display: grid">
                                <span class="mb-3" style="color: #8E9BAE;font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;">62,797,850.5 NGN</span>
                                <div class="d-flex mb-3">
                                    <img src="/svg/btc.svg" class="me-3" width="20px"/> 
                                    <span  style="color: #8E9BAE;font-family: Manrope; font-size: 12px; font-style: normal; font-weight: 600; line-height: 150%;">BTC</span>
                                    <span style="color: #22C36B; font-size: 12px; font-style: normal; font-weight: 400;line-height: 150%;">-10%</span>
                                </div>
                            <div style="display:flex">
                                <v-btn class="smaller-btn me-4" style="color: var(--Gray-Light, #D8D8D8); background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);">Buy now</v-btn>
                    
                            </div>
                            </div>
                        </div>
                    </div>

                        <div style="height: 1px; width: 930px; background: #303A46; margin-top:16px"></div>
                    <div style="display: flex; justify-content: space-between;  width: 920px;">
                        <div style="margin-top: 32px;">
                            <div style="display: flex; margin-bottom: 14px">
                                 <span class="me-3">Esewa</span>
                                 <img src="/flags/dz.svg" width="25px"/>
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
                            <img src="/svg/star.svg" class="me-2 mb-2"/>
                            <span style="color: var(--Gray-Medium-light, #969696);font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 700; line-height: normal;">Add to favorites</span>
                        </div>

                        <div style="margin-top: 32px; margin-block-start: auto;">
                            <div style="display: flex; margin-bottom: 14px">
                                 <span style="color: #8E9BAE;font-family: Manrope; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal;">Limit 15,000 - 100,000 NGN</span>
                            </div>
                            <div style="display: grid">
                                <span class="mb-3" style="color: #8E9BAE;font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;">62,797,850.5 NGN</span>
                                <div class="d-flex mb-3">
                                    <img src="/svg/btc.svg" class="me-3" width="20px"/> 
                                    <span  style="color: #8E9BAE;font-family: Manrope; font-size: 12px; font-style: normal; font-weight: 600; line-height: 150%;">BTC</span>
                                    <span style="color: #22C36B; font-size: 12px; font-style: normal; font-weight: 400;line-height: 150%;">-10%</span>
                                </div>
                            <div style="display:flex">
                                <v-btn class="smaller-btn me-4" style="color: var(--Gray-Light, #D8D8D8); background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);">Buy now</v-btn>
                    
                            </div>
                            </div>
                        </div>
                    </div>


                    <div style="margin-top: 115px">
                     <span class="user-location">Feedback</span>
                    </div>

                    <div class="mt-5" style="width: 930px;"> 
                        <v-btn class=" me-4 inactive-btn"> 
                            <span style="position: relative; left: -18px">From buyers</span>
                          <span style="position: relative; right: -18px; font-weight: 800;">0</span>
                         </v-btn>
                        <v-btn class=" me-4 inactive-btn"> 
                            <span style="position: relative; left: -18px">From sellers</span>
                          <span style="position: relative; right: -18px; font-weight: 800;">0</span>
                         </v-btn>
                        <div style="height: 1px; background: #303A46; margin-top:16px"></div> 


                        <div style="justify-content: space-between; display: flex;"> 


                        <div class="d-flex">
                            <img src="/svg/Image (1).svg" class="me-3" alt="avatar"/>
                                <div>
                                    <div style="padding-top: 35px;">
                                    <span class="username">UID : <span style="color: #2873FF; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;">Ogadinma2024</span></span>
                                    <div style="display: grid">
                                        <span class="username">Feb 5, 2024</span>
                                        <img src="/svg/heart-tick.svg" class="mt-3" alt="icon">
                                    </div>
                                    </div>
                                </div>
                        </div> 

                            <div style="margin-top: 35px">
                                <span class="me-5" style="color: #969696; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;">Bank Transfer</span>
                                <span class="me-5" style="color: #119254; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 700; line-height: normal;">NGN</span>
                                <span style="color: #FACC15; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 700; line-height: normal;">Low Ammount</span>
                                <div>
                                    <span style="color: #D8D8D8; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 800; line-height: normal;">Very Fast</span>
                                </div>
                            </div>

                            <div  style="margin-top: 35px">
                                <span style="color: #2873FF; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 700; line-height: normal;">View Offer</span>
                            </div>
                        </div>

                            <div style="height: 1px; background: #303A46; margin-top:16px"></div>

                        <div style="justify-content: space-between; display: flex; margin-bottom: 191px"> 


                        <div class="d-flex">
                            <img src="/svg/Image (1).svg" class="me-3" alt="avatar"/>
                                <div>
                                    <div style="padding-top: 35px;">
                                    <span class="username">UID : <span style="color: #2873FF; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;">Ogadinma2024</span></span>
                                    <div style="display: grid">
                                        <span class="username">Feb 5, 2024</span>
                                        <img src="/svg/heart-tick.svg" class="mt-3" alt="icon">
                                    </div>
                                    </div>
                                </div>
                        </div> 

                            <div style="margin-top: 35px">
                                <span class="me-5" style="color: #969696; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;">Bank Transfer</span>
                                <span class="me-5" style="color: #119254; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 700; line-height: normal;">NGN</span>
                                <span style="color: #FACC15; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 700; line-height: normal;">Low Ammount</span>
                                <div>
                                    <span style="color: #D8D8D8; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 800; line-height: normal;">Very Fast</span>
                                </div>
                            </div>

                            <div  style="margin-top: 35px">
                                <span style="color: #2873FF; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 700; line-height: normal;">View Offer</span>
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
                        {image:'/svg/profile-circle.svg', Title:'I.D. not verified', textCaption: 'Take a minute to verify your phone I.D.'}, 
                        
];

   
const Trade = [
    {active:'From buyers', ammount: '0'},
    {active: 'From sellers', ammount: '0'}

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
width: 202.371px;
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
</style>