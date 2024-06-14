<template>
  <div>
     <Header :hide="true" :icon1="true" :icon3="true"  :icon2="true" />
     <v-container>
        <div style="margin-top: 100px;">
            <div no-gutters style="display: flex">
              <div class="profile-section me-4" style="min-width: 67%;">
                <div :class="isDark ? 'profile':'profile-light'" style="padding: 30px 15px">
                  <div class="d-flex" style="position:relative ; align-items: center; justify-content: space-between;">
                    <div class="d-flex">
                      <img :src="pinia.state?.user?.profile_image || '/svg/Image-grad.svg'" width="72" class="me-3 avatar" alt="avatar"  style="display: flex; align-self: flex-start; border-radius: 55px; height: 70px;"/>
                        <div class="unverified-div">
                          <v-chip class="profile-level" color="#FB774A" style="margin-bottom: 13.8px;">Unverified</v-chip>
                         <div class="div-username1"> <span class="username username1" :class="isDark ? 'card-text-dark':'card-text-light'">@{{ pinia.state.user?.username}} </span> </div>
                        </div>
                    </div>
<!-- 
               

                    < TODO: insert a user badge here when it is available -->
                    
                  </div>
                </div>
              </div>
      
              <div sm="4" md="4" class="flex-lg-and-up hidden-md-and-down">
                <div>
                  <Acct-level/>
                </div>
              </div>
           
            </div>
        </div>
     </v-container>
      <div style="margin-bottom: 150px;">      
          <v-container style="display: flex; flex-direction: column;">
            <div style="display: flex; position: relative;">
              <div  class="me-9 flex-lg-and-up hidden-sm-and-down">
                <div class="sd-nav1 position-relative" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
                  <div :class="isDark ? 'border-dark':'border-light'" style="position: relative;top: 58px;"></div>
                    <div style="padding: 20px 24px;">
                      <span :class="isDark ? 'card-text-dark':'card-text-light'" style="text-align: center;font-family: Manrope; font-size: 16px; font-style: normal;font-weight: 700;line-height: normal;">Trading Profile</span>
                      </div>
                      <div v-for="(item, i) in navigation" :key="i">
                        <div style="display: flex; justify-content: space-between;">
                            <v-btn class="nav-options" :class="isDark ? 'text-dark':'text-light'"> 
                              <img :src="item.icon" class="me-3"/>
                              {{ item.title }}
                              <div style="align-items: center; display: flex; position: absolute; right: 20px;"> 
                                <img :src="item.flag" width="25" class="me-3" style="border-radius: 9px;"/>
                                <span >{{item.country }}</span>
                                <span>{{ item.type }}</span>
                                <span>{{ item.number }}</span>
                              </div>
                            </v-btn>
                        </div>
                      </div>
                      <div :class="isDark ? 'border-dark':'border-light'">
                        <div style="padding: 20px 24px;">
                        <span :class="isDark ? 'card-text-dark':'card-text-light'" style="text-align: center;font-family: Manrope; font-size: 16px; font-style: normal;font-weight: 700;line-height: normal;">Joined 1 week ago</span>
                        </div>
                      </div>
            
                </div>
              </div>
          
            <v-row class="card-wrap" style="min-width: 89%; height: fit-content; margin-top: 1px; gap: 16px;">
                <v-col v-for="(variant, i) in profileCards" class="profile-cards" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" :key="i" sm="3" cols="12" style="display: flex;">
                    <v-card class="mx-auto" variant="text">
                        <v-card-item>
                          <div style="display: flex;">
                            <div>
                            <img :src="variant.image" class="me-3 mt-1" v-if="theme.global.current.value.dark"/>
                            <img :src="variant.image1" class="me-3 mt-1" v-else/>
                            </div>
                            <div class="d-flex" style="flex-direction: column;">
                              <span class="card-text">{{ variant.Title }}</span>
                              <span class="card-text" :class="isDark ? 'card-text-dark':'card-text-light'">{{ variant.Title1 }}</span>
                              <div :class="isDark ? 'text-dark':'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 400; margin-top: 8px;">{{variant.textCaption}}</div>
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
              
         
  
            </v-row>
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
import {getTokens} from "@/composables/requests/tokens";

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();
const PurchaseCrypto = ref(true);

const profileCards = [
  {image:'/svg/call.svg', image1:'/svg/call-light.svg', Title: 'Phone not verified', textCaption: 'Take a minute to verify your phone number', status:'Verify now'},
  {image:'/svg/sms.svg', image1:'/svg/msg-light.svg', Title1: 'Email verified', textCaption: 'You have verified your phone number.',  status1:'Verified' },
  {image:'/svg/login.svg', image1:'/svg/login-light.svg', Title: '2FA not enabled', textCaption: 'Enabling 2FA is a great way to secure your',  status:'Verify now'}, 
  {image:'/svg/profile-circle.svg', image1:'/svg/profile-light.svg', Title:'I.D. not verified', textCaption: 'Take a minute to verify your phone I.D.',  status:'Verify now'}, 
  {image:'/svg/location.svg', image1:'/svg/location-light.svg', Title: 'Address not verified', textCaption:'Take a minute to verify your address',  status:'Verify now'},
];

const select =ref("All Cryptocurrency")


const pageNumber = ref(1)

  try {
    const data = await getTokens(pageNumber.value);
    if(data.success) {
      const fetchedTokens = data.data.result;

      const storedTokenIds = pinia.state.tokenLists.map(item => item.id);

      // Check if there are any new items in the fetched data
      const newItems = fetchedTokens.filter(item => !storedTokenIds.includes(item.id));

      if (newItems.length > 0) {
        console.log('fetching')
        pinia.setTokenLists(fetchedTokens);
      }
    } else {
      console.log('Unavailable')
    }
  } catch (error) {
    console.log(error);
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
font-size: 18px;
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
line-height: 150%; /* 18px */
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
  }
  .hrt-icon{
    width: 20px !important;
  }
  .user-location{
    font-size: 14px !important;
  }
  /* .unverified-div{
    display: flex;
  } */
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
  
 }
</style>