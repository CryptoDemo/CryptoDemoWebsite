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
                          <span class="profile-level">Unverified</span>
                          <span class="username mt-3">UID : Ogadinma2024</span>
                        </div>
                    </div>
                    <span class="user-location" style="align-self: center;">(UYC+8 ) Asia/Singapore</span>
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
                  <div class="d-flex" style="padding: 35px"> 
                      <img src="/svg/Dashboard.svg" class="me-3" alt="dashboard-icon">
                      <div style="display: grid;">
                        <span class="acct-level-text">Account Level 1</span>
                        <span class="acct-level-text" style="color: #FF3E46;">1000 USD</span>
                      </div>
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
                    <v-col
                        v-for="(variant, i) in profileCards" class="profile-cards" 
                        :key="i"
                        cols="auto">
                        <v-card
                            class="mx-auto"
                            max-width="344"
                            :variant="variant" >
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
                                Verify now
                              </span></NuxtLink>
                            </v-card-actions>
                        </v-card>
                   </v-col>
                  </v-row>
              </div>

              <span class="user-location" >Active offers</span>
        
                <div class="">
                      <v-row align="center" justify="">
                        <v-col
                              v-for="(activeOffers, i) in offers"
                              :key="i"
                              cols="auto"
                                    >
                              <div
                                    class=" active-offers"
                                    max-width="344"
                                    :activeOffers="activeOffers"
                                  >
                                  <v-card-item> 
                                      <div class="offers-text d-flex" style="justify-content: space-between; padding: 5px ">
                                      <span> {{ activeOffers.active }}</span>
                                      <span style="font-weight: 800; color: white"> {{ activeOffers.ammount }}</span>
                                      </div>
                                  </v-card-item>

                              </div>
                        </v-col>
                  

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
                </div>
                 <v-divider style="width: 939px; height: 1px; background: #303A46; margin-top:16px"></v-divider>
                        <div style="margin-bottom: 32px">
                          <span class="user-location d-flex" style="color: var(--Gray-Medium-dark, #646464);justify-content: center ">There are no active offers</span>
                        </div>
                <span class="user-location">Feedback</span>
                <div class="">
                      <v-row align="center" justify="">
                        <v-col
                              v-for="(activeOffers, i) in Trade"
                              :key="i"
                              cols="auto"
                                    >
                              <div
                                    class=" active-offers"
                                    max-width="344"
                                    :activeOffers="activeOffers"
                                  >
                                  <v-card-item> 
                                      <div class="offers-text d-flex" style="justify-content: space-between; padding: 5px ">
                                      <span> {{ activeOffers.active }}</span>
                                      <span style="font-weight: 800; color: white"> {{ activeOffers.ammount }}</span>
                                      </div>
                                  </v-card-item>

                              </div>
                        </v-col>
                  
                      </v-row>
                </div>
                  <v-divider style="width: 939px; height: 1px; background: #303A46; margin-top:16px; margin-bottom:80px"></v-divider>
                    <div style="margin-bottom: 32px">
                          <span class="user-location d-flex" style="color: var(--Gray-Medium-dark, #646464);justify-content: center">There are no active offers</span>
                    </div>
            </v-col>
          </v-row>
          
          <Footer/>
  </div>
</template>
<script setup>
import { ref } from 'vue'


    const profileCards = [
                         {image:'/svg/call.svg', Title: 'Phone not verified', textCaption: 'Take a minute to verify your phone number' },
                         {image:'/svg/sms.svg', Title1: 'Email verified', textCaption: 'You have verified your phone number.' },
                         {image:'/svg/login.svg', Title: '2FA not enabled', textCaption: 'Enabling 2FA is a great way to secure your account'}, 
                         {image:'/svg/profile-circle.svg', Title:'I.D. not verified', textCaption: 'Take a minute to verify your phone I.D.'}, 
                         {image:'/svg/location.svg', Title: 'Address not verified', textCaption:'Take a minute to verify your address'},
    ];

    const offers = [
      {active:'Crypto purchased', ammount: '0'},
      {active: 'Crypto sold', ammount: '0'}
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
width: 203px !important;
height: 50px !important;
flex-shrink: 0;
border-radius: 20px;
background: var(--secondary-background, #12181F);
letter-spacing: unset!important;
text-transform: unset !important;
margin-top: 16px;
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
</style>