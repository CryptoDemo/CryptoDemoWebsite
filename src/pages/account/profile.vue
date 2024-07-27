<template>
  <div>
     <Header :hide="true" :icon1="true" :icon3="true"  :icon2="true" :wallet="true"/>
  
      <div style="margin-bottom: 300px; margin-top: 140px;">      
          <v-container style="display: flex; flex-direction: column;">
            <div style="display: flex; position: relative;">
              <div  class="flex-lg-and-up hidden-sm-and-down">
                <div class="sd-nav1 position-relative" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="padding: 0px; border-radius: 16px;">
                  <div :class="isDark ? 'border-dark':'border-light'" style="position: relative;top: 58px;"></div>
                    <div style="padding: 20px 24px;">
                      <span :class="isDark ? 'card-text-dark':'card-text-light'" style="text-align: center;font-family: Manrope; font-size: 16px; font-style: normal;font-weight: 700;line-height: normal;">Trading Profile</span>
                      </div>
                      <div v-for="(item, i) in navigation" :key="i">
                        <div style="display: flex; justify-content: space-between;">
                            <div class="nav-options" :class="isDark ? 'text-dark':'text-light'"> 
                              <img :src="item.icon" class="me-3"/>
                              {{ item.title }}
                              <div style="align-items: center; display: flex; position: absolute; right: 20px;"> 
                                <img :src="item.flag" width="25" class="me-3" style="border-radius: 9px;"/>
                                <span >{{item.country }}</span>
                                <span>{{ item.type }}</span>
                                <span>{{ item.number }}</span>
                              </div>
                            </div>
                        </div>
                      </div>
                </div>
              </div>
          
               
              <div class="ml-2 mr-1 grid-container">

                  <div class="profile-section" style="margin-inline-end: 8px; margin-left: 8px">
                    <div :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="padding: 30px 15px; align-items: center; background: inherit;">
                      <div class="d-flex" style="position:relative ; align-items: center; justify-content: space-between;">
                        <div class="d-flex" style="align-items: center;">
                          <img :src="pinia.state?.user?.profile_image || '/svg/Image-grad.svg'" width="72" class="me-3 avatar" alt="avatar"  style="display: flex; align-self: flex-start; border-radius: 55px; height: 70px;"/>     

                          <div class="unverified-div ml-3">
                            <div class="div-username1"> <span class="username username1" :class="isDark ? 'card-text-dark':'card-text-light'">@{{ pinia.state.user?.username}} </span> </div>
                            
                            <div v-if="pinia.state?.user?.kyc_verified" style="display: flex; align-items: center;">
                              <span class="resend-code me-1">Verified</span>
                              <img src="/svg/verified.svg"/>
                            </div>

                            <div v-else>
                              <span style="color: #E65100;">Unverified</span>
                            </div>

                          </div>
                        </div>

                        
                        <v-btn v-if="pinia?.state?.user?.kyc_verified === false" @click="kyc_()" class="primary-btn1" style="border-radius: 10px!important;">Verify Now</v-btn>

                        <img v-else :src="pinia.state?.user?.badge || '/svg/Image-grad.svg'"/>
                        
                      </div>
                    </div>
                  </div>
              


                <v-row no-gutters class="mt-8" style="margin-top: -7px; cursor: pointer;">

                  
                  <v-col v-for="(card, i) in profileCards" :key="i" @click.prevent="navigateTo(card.link)" sm="4" cols="12">
                    <v-card hover link class="pa-4 ma-2 prof-card" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="display: flex; flex-direction: column; border-radius: 16px;">
                      <div style="display: flex; align-items: self-start;">
                        <img :src="card.image" class="me-1"/>
                        <span class="text-center resend-code mb-3 ml-1" style="font-size: 16px; font-weight: 600;"> {{ card.title }}</span>
                      </div>
                      <span class="" style="font-size: 16px; font-weight: 600;"> {{ card.balTitle}} {{ card.balance}}</span>
                      <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 14px;">{{ card.caption }}</span>
                    </v-card>
                  </v-col>
                </v-row>
              </div>
                

        </div>
          </v-container>
    </div>
    <Footer class="desktop-footer flex-lg-and-up hidden-md-and-down"/>
    <Mobile-footer class="mobile-footer"/>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import { kyc_verification } from "@/composables/requests/users";

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();


const kyc_ = async () => {


  try {
    const data = await kyc_verification();
    
    if (data.success) {
      push.success('KYC verification successful!'); // Custom success message
      pinia.state.user.kyc_verified = true;

    } else {
      push.error(`Error: ${data.message}`); // Custom error message
    }
  } catch (e) {
    console.log(e);
    push.error(`Unexpected error: ${e.message || e}`); // Detailed error message
  }
};


const navigation = [
  {icon:'/svg/grad-location.svg', title: 'Country', number: pinia.state.user.country},
  {icon:'/svg/partners.svg', title: 'Trade partners', number:0},
  {icon:'/svg/trade1.svg', title: 'Trades', link:'/history'},
  {icon:'/svg/trade1.svg', title: 'Trade volume', number:0},
  {icon:'/svg/trust1.svg', title: 'Referral Code', number: pinia.state.user.referral_code},
  {icon:'/svg/blocked1.svg', title: 'Block chain Network', number: pinia.state.selectedNetwork},
  {icon:'/svg/blocked2.svg', title: 'Preferred Currency', number: pinia.state.preferredCurrency},
];

const profileCards = [
  {icon:'/svg/grad-location.svg', image:"/svg/blueWallet.svg", title: 'Wallet', caption:"View your fiat balances and make transactions seamlessly with the wallet.", balTitle:"Crypto Balance:", balance:formatBalance(pinia.state.SummedBalance), link:"/account/trade/wallet"},
  {icon:'/svg/partners.svg', image:"/svg/blueDashboard.svg", title: 'Dashboard', caption: "View available coins, their prices, specific coin balances according to blockchain network, and your referral code.", link:"/account/dashboard"},
  {icon:'/svg/trade1.svg', image:"/svg/blueOffer.svg", title: 'Create Offer', caption: "Craft your perfect deal with ease: create offers for the marketplace and select a fixed or market price of choice.", link:"/account/marketplace/createOffer"},
  {icon:'/svg/trade1.svg', image:"/svg/blueMarket.svg", title: 'Market Place', caption: "Craft your perfect deal with ease: create offers for the marketplace and select a fixed or market price of choice.", link:"/account/marketplace/activeOffers"},
  {icon:'/svg/trust1.svg', image:"/svg/blueSecurity.svg", title: 'Security', caption: "Change your password, enable/disable two-factor authentication, and review activity logs", link:"/account/security"},
  {icon:'/svg/blocked1.svg', image:"/svg/blueSettings.svg", title: 'Settings', caption: "change profile image, choose preferred currency, add phone number and date of birth, and enable or disable notifications.", link:"/account/settings"},

];

onMounted(() => {
    getVisitorsLocation();
});
</script>
<style scoped>
.profile{
border-radius: 20px;
background: var(--secondary-background, #10192D);
height: 130px;
flex-shrink: 0;
}
.profile-light{
border-radius: 20px;
background: linear-gradient(180deg, rgba(248, 250, 252, 0.00) 65.19%, #F8FAFC 100%) !important;
box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 4px;
height: 130px;
flex-shrink: 0;
}
.v-card-item {
padding: 0 !important;
padding-top: 5px !important;
padding-left: 5px !important;
}
.acct-level{
height: 130px;
flex-shrink: 0;
border-radius: 20px;
background: var(--secondary-background, #10192D);
}
.profile-level{
border-radius: 12px;
background: rgba(247, 147, 26, 0.15);
display: flex;
width: 101.521px;
padding: 7px 13px;
align-items: center;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.username{
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.user-location{
font-family: Manrope;
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
height: fit-content;
width: 100%;
}
.profile-cards-dark{
border-radius: 24px;
background:  #10192D!important;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px !important;
}
.profile-cards-light{
border-radius: 24px;
background: #F8FAFC!important;
}
.card-text{
color: var(--Warm-Red, #E33E38);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
display: flex;
flex-direction: column;
justify-content: center;
}
.active-offers-dark{
  background: var(--secondary-background, #1B2537);
  color: #8E9BAE !important;
}
.active-offers-light{
  background: var(--secondary-background, #F8FAFC);
  color: #646464 !important;
}
.offers-text{
font-family: Manrope;
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
font-family: Manrope;
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
background: var(--secondary-background, #1B2537);
text-transform: unset;
letter-spacing: 0px;
width: 231.714px;
height: 50px!important;
flex-shrink: 0;
color: #C2C2C2;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
box-shadow: none;
}
.active-btn{
border-radius: 20px;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);
text-transform: unset;
letter-spacing: 0px;
width: 231.714px;
height: 50px!important;
flex-shrink: 0;
color: var(--Gray-Light, #fff);
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal; 
box-shadow: none;
}

.smaller-btn{
border-radius: 8px;
background: var(--secondary-background, #1B2537);
display: flex;
padding: 6px 16px;
justify-content: center;
align-items: center;
gap: 10px;
color: #C2C2C2;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: unset;
letter-spacing:0px;
box-shadow: none;
}

.slt{
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
display: flex;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
}

.sd-nav1{
width: 305px;
align-items: center;
gap: 10px;
border-radius: 24px;
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
text-align: center;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-transform: capitalize !important;
letter-spacing: 0px;
 }
 .coin-card{
background: #1B2537 !important; 
cursor: pointer; 
border: 0.5px solid #2f3946;
border-radius: 20px !important;
margin-top: 10px;
 }
 .small-text{
color: var(--Main-Greyscale-20, #E2E8F0);
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 16px */
 }

.close-btn{
  fill: white;
}
.close-btn-dark{
fill: #10192D;
}

.border-dark{
border-bottom: 1px solid #10192D !important;
}

.border-light{
  border-bottom: 1px solid #E2E8F0 !important;
}

.arrow1 {
  animation: slide1 3s ease-in-out infinite;
  margin-left: 9px;
}

@keyframes slide1 {
  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(10px, 0);
  }
}

 @media screen and (max-width: 600px) {
  .card-wrap {
    width: 92%;
    display: flex;
    margin: auto;
  }
  .avatar{
    width: 54px !important;
    height: 54px !important;
  }
  .profile-section{
    min-width: 100% !important;
    margin-inline-end: 0px !important;
    margin-left: 0px !important
  }
  .hrt-icon{
    width: 20px !important;
  }
  .user-location{
    font-size: 14px !important;
  }
 
  .username1{
  width: 230px !important;
  display: -webkit-box !important; 
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: 1 !important;
  text-overflow: ellipsis;
  overflow: hidden;
  }
  .div-username1{
    width: 110px !important;
    overflow: hidden !important;
  }
  .username{
    display: flex;
  }
  .grad-text{
  display: -webkit-box;
  width: 90px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  }
  .bank-trf{
  font-size: 12px !important;
  font-style: normal;
  font-weight: 700;
  }
  .grid-container{
    padding: 0px !important;
    margin: 0px !important;
  }
  .prof-card{
    margin: 0px !important;
    margin-bottom: 12px !important;
  }
  
 }
</style>