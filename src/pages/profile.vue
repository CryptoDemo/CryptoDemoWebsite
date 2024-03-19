<template>
  <div>
     <Header hide="true" icon1="/svg/profile-icon.svg" icon3="/svg/profile-icon.svg"  icon2="/svg/Notification.svg"/>
     <v-container>
        <div style="margin-top: 120px; min-height: 100%;">
            <v-row no-gutters>
              <v-col cols="8" class="">
                <div class="profile" style="padding: 30px 0px">

                  <div class="d-flex" style="justify-content: space-around; align-items: center;">
                    <div class="d-flex">
                      <img src="/svg/Image (1).svg" class="me-3" alt="avatar" style="display: flex; align-self: flex-start;"/>
                        <div>
                          <span class="profile-level" style="margin-bottom: 17.8px;">Unverified</span>
                          <span class="username mt-3">UID : Ogadinma2024</span>
                        </div>
                    </div>
                    <span class="user-location" style="align-self: center;">(UYC+8 ) Asia/Singapore</span>
                    
                      <div class="d-flex" style="align-items: center; background: inherit; box-shadow: none; height: 50px; border-radius: 15px;">
                          <img src="/svg/heart-tick.svg" alt="icon">
                            <span class="user-location">0</span>
                      </div>

                      <div class="d-flex" style="align-items: center; background: inherit; box-shadow: none; height: 50px; border-radius: 15px;">
                      <img src="/svg/heart-remove.svg" alt="icon">
                      <span class="user-location">0</span>
                      </div>
                  </div>

                </div>
              </v-col>
          
           
              <v-col  class="">
                <div>
                  <Acct-level/>
                </div>
              </v-col>
           
          </v-row>
        </div>
     </v-container>

        
          <div>      
              <v-container style="display: flex; flex-direction: column;">
                <div style="display: flex; position: relative;">
                  <div  class="me-9">
                    <div class="sd-nav1 position-relative">
                      <div style="border-bottom: 1px solid var(--border, #303A46); position: relative;top: 58px;"></div>
                        <div style="padding: 20px 24px;">
                          <span style="color: var(--Gray-Medium-light, #969696);text-align: center;font-family: Poppins; font-size: 16px; font-style: normal;font-weight: 700;line-height: normal;">Trading Profile</span>
                          </div>
                          <div v-for="(item, i) in navigation" :key="i">
                            <div style="display: flex; justify-content: space-between;">
                                <v-btn class="nav-options"> 
                                  <img :src="item.icon" class="me-3"/>
                                  {{ item.title }}

                                  <div style="align-items: center; display: flex; position: absolute; right: 20px;">
                                    
                                    <img :src="item.flag" width="25" class="me-3" style="border-radius: 9px;"/>
                                    <span >{{ item.country }}</span>
                                    <span>{{ item.type }}</span>
                                    <span>{{ item.number }}</span>
                                    
                                  </div>

                                </v-btn>
                            </div>
                          </div>
                          <div style="border-top: 1px solid var(--border, #303A46);">
                            <div style="padding: 20px 24px;">
                            <span style="color: var(--Gray-Medium-light, #969696);text-align: center;font-family: Poppins; font-size: 16px; font-style: normal;font-weight: 700;line-height: normal;">Joined 1 week ago</span>
                            </div>
                          </div>
                      <!-- </div> -->
                    </div>
                  </div>
             
                  <v-row style=" min-width: 93%; height: fit-content; margin-top: 1px; gap: 16px;">
                    <v-col
                        v-for="(variant, i) in profileCards" class="profile-cards" :key="i" cols="3" style="display: flex;">
                        <v-card class="mx-auto"  :variant="variant">
                            <v-card-item>
                              <div style="display: flex;">
                                <div>
                                <img :src="variant.image" class="me-3 mt-1"/>
                                </div>
                                <div class="d-flex" style="flex-direction: column;">
                                  <!-- <div> -->
                                      <span class="card-text">{{ variant.Title }}</span>
                                      <span class="card-text" style="color:#969696">{{ variant.Title1 }}</span>
                                      <div class="textCaption" style="color: var(--Gray-Medium-dark, #646464);margin-top: 8px;">{{variant.textCaption}}</div>
                                  <!-- </div> -->
                                </div>
                                
                              </div>
                            </v-card-item>
                                
                            <v-card-actions>
                              <NuxtLink to="#"><span class="verify-text">
                                {{ variant.status }}</span>
                                <span style="color: #646464 !important; right: 0; position: absolute;">{{ variant.status1 }}</span>
                              </NuxtLink>
                            </v-card-actions>
                        </v-card>
                   </v-col>
                 
     
                  <div style="min-width: 77%;">
                  <div class="mt-5"><span class="user-location" style="color: white;">Active offers</span></div>
              
                  <div style="margin-top: 32px;">
                  <v-row class="px-3">
                      <v-btn class=" me-4 mb-4" :class="PurchaseCrypto ? 'active-btn': 'inactive-btn'"  @click.prevent="PurchaseCrypto=true"> 
                          <span style="position: relative; left: -18px">Crypto purchased</span>
                        <span style="position: relative; right: -18px; font-weight: 800;">0</span>
                      </v-btn>
                      <v-btn  :class="PurchaseCrypto ? 'inactive-btn': 'active-btn'"  @click.prevent="PurchaseCrypto=false">
                          <span style="position: relative; left:-37px">Crypto sold </span>
                          <span style="position: relative; right: -32px; font-weight: 800;">0</span>
                      </v-btn>
                

                      <div style="display: flex; margin-inline-start: auto;">
                        <v-menu :location="location">
                            <template v-slot:activator="{ props }">
                              <v-btn class="mx-auto active-offers" style="letter-spacing: 0px"
                                v-bind="props">
                                <img  width="25" class="me-2" :src="flag" style="margin-left: -60px "/> 
                                <div style="display: grid; cursor: pointer;">
                                <span class="slt">{{select}}</span> 
                                <span class="small-text">{{coin}}</span> 
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none" style="position: absolute; display: flex; right: 15px;">
                                    <path d="M5.61643 5.99999C5.7553 6.00001 5.8928 5.973 6.0211 5.92049C6.14941 5.86799 6.266 5.79102 6.3642 5.69399L10.3104 1.794C10.5086 1.59813 10.62 1.33249 10.62 1.0555C10.62 0.77851 10.5086 0.512869 10.3104 0.317007C10.1122 0.121144 9.84345 0.0110984 9.56318 0.0110984C9.2829 0.0110984 9.01411 0.121144 8.81593 0.317007L5.61442 2.717L2.41292 0.317007C2.21473 0.121144 1.94594 0.0110984 1.66567 0.0110984C1.3854 0.0110984 1.11657 0.121144 0.91839 0.317007C0.720206 0.512869 0.608887 0.77851 0.608887 1.0555C0.608887 1.33249 0.720206 1.59813 0.91839 1.794L4.86464 5.69399C4.96329 5.79155 5.08052 5.86882 5.20957 5.92135C5.33861 5.97387 5.47688 6.00059 5.61643 5.99999Z" fill="#E0E4F5"/>
                                </svg>
                              </v-btn>
                            </template>

                          <v-list>
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
                  </v-row>
                </div>

                <div style="height: 1px; background: #303A46; margin-top:16px"></div>
                <div v-for="n in 2" :key="n" >
                  <div style="display: flex; justify-content: space-between;">
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
                              <span class="mb-3" style="color: #fff;font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal; text-align-last: right;">62,797,850.5 NGN</span>
                              <div class="d-flex mb-3" style="justify-content: end;">
                                  <img src="/svg/btc.svg" class="me-3" width="20px"/> 
                                  <span class="me-1" style="color: #8E9BAE;font-family: Manrope; font-size: 12px; font-style: normal; font-weight: 600; line-height: 150%;">BTC</span>
                                  <img src="/svg/arrow-up.svg" class="mb-1 me-1"/>
                                  <span style="color: #22C36B; font-size: 12px; font-style: normal; font-weight: 400;line-height: 150%;">-10%</span>
                              </div>
                          <div style="display:flex; justify-content: end;">
                              <v-btn class="smaller-btn" style="color: var(--Gray-Light, #D8D8D8); background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);">Buy now</v-btn>
                  
                          </div>
                          </div>
                      </div>
                    
                  </div>

                  <div style="height: 1px; background: #303A46; margin-top:16px"></div>
                </div>
               

        
            <div style="margin-top: 101px">
             <span class="user-location">Feedback</span>
            </div>

            <div class="mt-5"> 
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
                    <img src="/svg/Image (1).svg" width="70px" class="me-3" alt="avatar"/>
                        <div>
                            <div style="padding-top: 35px;">
                            <span class="username" style="font-size: 16px;">UID : <span class="grad-text">Ogadinma2024</span></span>
                            <div style="display: grid">
                                <span class="username" style="font-size: 16px;">Feb 5, 2024</span>
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
                        <span class="grad-text">View Offer</span>
                    </div>
                </div>

                    <div style="height: 1px; background: #303A46; margin-top:16px"></div>

                <div style="justify-content: space-between; display: flex; margin-bottom: 191px"> 


                <div class="d-flex">
                    <img src="/svg/Image (1).svg" width="70px" class="me-3" alt="avatar"/>
                        <div>
                            <div style="padding-top: 35px;">
                            <span class="username" style="font-size: 16px;">UID : <span class="grad-text">Ogadinma2024</span></span>
                            <div style="display: grid">
                                <span class="username" style="font-size: 16px;">Feb 5, 2024</span>
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
                      <span class="grad-text">View Offer</span>
                    </div>
                  </div>
                </div>
              
       ]
            </div>
          
          <!-- </div> -->
                  </v-row>
                </div>
              </v-container>
          </div>




       <Footer/>
  </div>
</template>
<script setup>
import { ref } from 'vue'


const PurchaseCrypto = ref(true);

const profileCards = [
    {image:'/svg/call.svg', Title: 'Phone not verified', textCaption: 'Take a minute to verify your phone number', status:'Verify now'},
    {image:'/svg/sms.svg', Title1: 'Email verified', textCaption: 'You have verified your phone number.',  status1:'Verified' },
    {image:'/svg/login.svg', Title: '2FA not enabled', textCaption: 'Enabling 2FA is a great way to secure',  status:'Verify now'}, 
    {image:'/svg/profile-circle.svg', Title:'I.D. not verified', textCaption: 'Take a minute to verify your phone I.D.',  status:'Verify now'}, 
    {image:'/svg/location.svg', Title: 'Address not verified', textCaption:'Take a minute to verify your address',  status:'Verify now'},
];

const select =ref("All Cryptocurrency")


const allCoins = [
        { title: 'Bitcoin', coinText:"Dai",  image:"/svg/btc.svg" },
        { title: 'Bitcoin', coinText:"BTC", image:"/svg/btc.svg" },
        { title: 'Bitcoin',  coinText:"BTC", image:"/svg/btc.svg"},
        { title: 'Ethereum',  coinText:"ETH", image:"/svg/btc.svg"},
        { title: 'Dodge',  coinText:"DOD",  image:"/svg/btc.svg"},
        { title: 'Bitcoin',  coinText:"BTC", image:"/svg/btc.svg"},
      ];
const navigation = [
  {icon:'/svg/grad-location.svg', title: 'location', link:'/profile', flag:'/flags/ag.svg', country:'Argentina'},
  {icon:'/svg/globe.svg', title: 'Languages:', link:'/payment', type:'English'},
  {icon:'/svg/partners.svg', title: 'Trade partners:', link:'', number:0},
  {icon:'/svg/trade1.svg', title: 'Trades', link:'/history'},
  {icon:'/svg/trade1.svg', title: 'Trade volume:', link:'/settings', number:0},
  {icon:'/svg/trust1.svg', title: 'Trusted By:', link:'/trade/invite', number:0},
  {icon:'/svg/blocked1.svg', title: 'Blocked By:', link:'', number:0},
  {icon:'/svg/blocked2.svg', title: 'Blocked', link:'', number:0},
];
     
</script>
<style scoped>
.profile{
border-radius: 20px;
background: var(--secondary-background, #12181F);
height: 130px;
flex-shrink: 0;
}

.grad-text{
  background-image: linear-gradient(360deg, #2873FF, #0B6B96); 
  background-clip: text;  
  -webkit-text-fill-color: transparent ; 
  font-family: Poppins; 
  font-size: 16px; 
  font-style: normal; 
  font-weight: 600; 
  line-height: normal;
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
color: #FB774A;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.username{
color: var(--Gray-Medium-light, #969696);
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.user-location{
color: var(--Gray-Medium-light, #969696);
font-family: Poppins;
font-size: 16px;
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
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.profile-cards{
border-radius: 24px;
background: var(--secondary-background, #12181F)!important;
/* height: fit-content; */
/* display: flex; */
/* width: 50% !important; */
/* max-height: 180px; */
/* padding: 20px 20px 16px 20px; */
/* flex-direction: column; */
/* justify-content: center; */
/* align-items: flex-end; */
/* gap: 16px; */
/* color: white; */
}
.card-text{
color: var(--Warm-Red, #E33E38);
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
height: 50px!important;
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
background-image: linear-gradient(360deg, #2873FF, #0B6B96); 
background-clip: text;  
-webkit-text-fill-color: transparent ; 
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
height: 50px!important;
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
height: 50px!important;
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

.slt{
overflow: hidden;
color: #C2C2C2;
text-overflow: ellipsis;
white-space: nowrap;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
display: flex;
width: 134.577px;
height: 27px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
}

.sd-nav1{
/* display: flex; */
width: 305px;
/* padding: 20px 28px; */
align-items: center;
gap: 10px;
border-radius: 24px;
/* border-bottom: 1px solid var(--border, #303A46); */
background: var(--secondary-background, #12181F);
 }  
 
 .nav-options{
display: flex;
width: 305px;
padding: 16px 28px;
height: 54px!important;
justify-content: flex-start!important;
align-items: center;
background: inherit !important;
box-shadow: none !important;
color: var(--Gray-Medium-light, #969696)!important;
text-align: center;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-transform: capitalize !important;
letter-spacing: 0px;
 }
</style>