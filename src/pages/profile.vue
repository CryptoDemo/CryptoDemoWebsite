<template>
  <div>
     <Header hide="true" icon1="/svg/profile-icon.svg" icon3="/svg/profile-icon.svg"  icon2="/svg/Notification.svg"/>
        <v-row no-gutters style="margin-top: 130px;">
            <v-col cols="8">
              <div class="pa-1 ma-1">
                <div class="profile" style="padding: 30px 0px ">

                  <div class="d-flex" style="justify-content: space-around;">
                    <div class="d-flex">
                      <img src="/svg/Image (1).svg" class="me-3" alt="avatar" style="display: flex; align-self: flex-start;"/>
                        <div>
                          <span class="profile-level" style="margin-bottom: 17.8px;">Unverified</span>
                          <span class="username mt-3">UID : Ogadinma2024</span>
                        </div>
                    </div>
                    <span class="user-location" style="align-self: center;">(UYC+8 ) Asia/Singapore</span>
                    
                      <v-btn class="d-flex" style="align-self: center; background: inherit; box-shadow: none; height: 50px; border-radius: 15px;">
                          <img src="/svg/heart-tick.svg" alt="icon">
                            <span class="user-location">0</span>
                      </v-btn>

                      <v-btn class="d-flex" style="align-self: center; background: inherit; box-shadow: none; height: 50px; border-radius: 15px;">
                      <img src="/svg/heart-remove.svg" alt="icon">
                      <span class="user-location">0</span>
                      </v-btn>
                  </div>

                </div>
              </div>
            </v-col>
            <v-col>
              <div class="pa-1 ma-1">
                <div class="acct-level">
                  <div class="d-flex" style="padding: 35px"> 
                      <img src="/svg/Dashboard.svg" class="me-10" alt="dashboard-icon">
                      <div style="display: grid;">
                        <div class="d-flex">
                          <span class="acct-level-text me-2">Account Level 1</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                              <g clip-path="url(#clip0_5037_26892)">
                                <path d="M10.7879 18.3327C6.18542 18.3327 2.45459 14.6018 2.45459 9.99935C2.45459 5.39685 6.18542 1.66602 10.7879 1.66602C15.3904 1.66602 19.1213 5.39685 19.1213 9.99935C19.1213 14.6018 15.3904 18.3327 10.7879 18.3327ZM10.7879 16.666C12.556 16.666 14.2517 15.9636 15.502 14.7134C16.7522 13.4632 17.4546 11.7675 17.4546 9.99935C17.4546 8.23124 16.7522 6.53555 15.502 5.2853C14.2517 4.03506 12.556 3.33268 10.7879 3.33268C9.01981 3.33268 7.32412 4.03506 6.07388 5.2853C4.82364 6.53555 4.12126 8.23124 4.12126 9.99935C4.12126 11.7675 4.82364 13.4632 6.07388 14.7134C7.32412 15.9636 9.01981 16.666 10.7879 16.666ZM9.95459 12.4993H11.6213V14.166H9.95459V12.4993ZM11.6213 11.1285V11.666H9.95459V10.416C9.95459 10.195 10.0424 9.98304 10.1987 9.82676C10.3549 9.67048 10.5669 9.58268 10.7879 9.58268C11.0247 9.58267 11.2565 9.51543 11.4565 9.38879C11.6565 9.26215 11.8165 9.08132 11.9177 8.86733C12.019 8.65335 12.0574 8.41501 12.0285 8.18005C11.9996 7.94509 11.9046 7.72317 11.7545 7.54011C11.6043 7.35705 11.4053 7.22037 11.1806 7.14599C10.9559 7.07161 10.7146 7.06257 10.4849 7.11994C10.2553 7.1773 10.0466 7.29871 9.88323 7.47003C9.71985 7.64135 9.60849 7.85554 9.56209 8.08768L7.92709 7.76018C8.02845 7.25359 8.26251 6.78299 8.60536 6.3965C8.9482 6.01002 9.38752 5.7215 9.87841 5.56045C10.3693 5.3994 10.8942 5.37159 11.3993 5.47986C11.9045 5.58814 12.3718 5.82861 12.7536 6.1767C13.1354 6.5248 13.4179 6.96802 13.5722 7.46107C13.7265 7.95412 13.7471 8.4793 13.632 8.98294C13.5168 9.48657 13.27 9.9506 12.9167 10.3276C12.5634 10.7045 12.1164 10.9809 11.6213 11.1285Z" fill="#A4A8AB"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_5037_26892">
                                  <rect width="20" height="20" fill="white" transform="translate(0.786621)"/>
                                </clipPath>
                              </defs>
                          </svg>
                        </div>
                        <img src="/svg/Line1.svg"/>
                        <span class="acct-level-text" style="color: #FF3E46;">1000 USD</span>     
                      </div>
                  </div>
                </div>
              </div>
            </v-col>
        </v-row>

        
          <v-row no-gutters style="margin-top: 32px;">
            <v-col cols="3">
              <div class=" ma-2">
                <div class="sd-nav1">
                  <div style="border-bottom: 1px solid var(--border, #303A46);">
                    <div style="padding: 20px 24px;">
                      <span style="color: var(--Gray-Medium-light, #969696);text-align: center;font-family: Poppins; font-size: 16px; font-style: normal;font-weight: 700;line-height: normal;">Trading Profile</span>
                      </div>
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
                  </div>
                </div>
            </v-col>

            <v-col>
              <div class="pa-2 ma-2" >
                  <v-row align="center" justify="start" style="gap: 16px; margin-bottom: 32px !important">
                    <v-col
                        v-for="(variant, i) in profileCards" class="profile-cards" :key="i" cols="auto">
                        <v-card class="mx-auto" max-width="344" :variant="variant">
                            <v-card-item>
                              <div>
                                <div class="d-flex">
                                  <img :src="variant.image" class="me-3"/>
                                  <span class="card-text">{{ variant.Title }}</span>
                                  <span class="card-text" style="color:#969696">{{ variant.Title1 }}</span>
                                </div>
                                
                                <div class="textCaption" style="color: var(--Gray-Medium-dark, #646464);margin-top: 8px;">{{variant.textCaption}}</div>
                              </div>
                            </v-card-item>
                                
                            <v-card-actions>
                              <NuxtLink to="#"><span class="verify-text">
                                {{ variant.status }}
                                <span style="color: #646464;">{{ variant.status1 }}</span>
                              </span></NuxtLink>
                            </v-card-actions>
                        </v-card>
                   </v-col>
                  </v-row>
              </div>

              <span class="user-location" >Active offers</span>
        
        <div class="mt-5">
              <v-row style="width: 930px; margin-left: 1px;">
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
                          <v-icon icon="mdi-chevron-down"  color="#E0E4F5" style="position: absolute; display: flex; right: 15px;"></v-icon>
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

                <div style="height: 1px; width: 930px; background: #303A46; margin-top:16px"></div>
                <div v-for="n in 2" :key="n" >
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

                  <div style="height: 1px; width: 930px; background: #303A46; margin-top:16px"></div>
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
                    <img src="/svg/Image (1).svg" width="70px" class="me-3" alt="avatar"/>
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
                    <img src="/svg/Image (1).svg" width="70px" class="me-3" alt="avatar"/>
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
            </v-col>
          </v-row>
          
          <Footer/>
  </div>
</template>
<script setup>
import { ref } from 'vue'


const PurchaseCrypto = ref(true);

const profileCards = [
    {image:'/svg/call.svg', Title: 'Phone not verified', textCaption: 'Take a minute to verify your phone number', status:'Verify now'},
    {image:'/svg/sms.svg', Title1: 'Email verified', textCaption: 'You have verified your phone number.',  status1:'Verified' },
    {image:'/svg/login.svg', Title: '2FA not enabled', textCaption: 'Enabling 2FA is a great way to secure your account',  status:'Verify now'}, 
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
color: var(--Primary-100, #2873FF);
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