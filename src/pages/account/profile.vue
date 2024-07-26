<template>
  <div>
     <Header :hide="true" :icon1="true" :icon3="true"  :icon2="true" :wallet="true"/>
     <v-container>
        <div style="margin-top: 100px;">
            <div no-gutters style="display: flex">
              <div class="profile-section me-4" style="min-width: 98%;">
                <div :class="isDark ? 'profile':'profile-light'" style="padding: 30px 15px; align-items: center; background: inherit">
                  <div class="d-flex" style="position:relative ; align-items: center; justify-content: space-between;">
                    <div class="d-flex" style="align-items: center;">
                      <img :src="pinia.state?.user?.profile_image || '/svg/Image-grad.svg'" width="72" class="me-3 avatar" alt="avatar"  style="display: flex; align-self: flex-start; border-radius: 55px; height: 70px;"/>     

                      <div class="unverified-div ml-3">
                        <div class="div-username1"> <span class="username username1" :class="isDark ? 'card-text-dark':'card-text-light'">@{{ pinia.state.user?.username}} </span> </div>
                        
                        <div v-if="pinia.state.user.kyc_verified" style="display: flex; align-items: center;">
                          <span class="resend-code me-1">Verified</span>
                          <img src="/svg/verified.svg"/>
                        </div>

                        <div v-else>
                          <span style="color: #E65100;">Unverified</span>
                        </div>

                      </div>
                    </div>

                    <v-btn v-if="pinia.state.user.kyc_verified === false" @click="kyc_()" class="primary-btn1" style="border-radius: 10px!important;">Verify Now</v-btn>

                    <img v-else :src="pinia.state.user.badge || '/svg/Image-grad.svg'"/>
                    
                  </div>
                </div>
              </div>
           
            </div>
        </div>
     </v-container>
      <div style="margin-bottom: 300px;">      
          <v-container style="display: flex; flex-direction: column;">
            <div style="display: flex; position: relative;">
              <div  class="flex-lg-and-up hidden-sm-and-down">
                <div class="sd-nav1 position-relative" :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
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
          
                <!-- <v-container> -->
                  <div class="px-3 mr-1 grid-container">
                    <v-row no-gutters style="margin-top: -7px; cursor: pointer;">

                      <v-col @click.prevent="navigateTo('/account/trade/wallet')" sm="4" cols="12">
                        <v-card hover link class="pa-4 ma-2" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="display: flex; flex-direction: column;">
                          <div style="display: flex; align-items: normal;">

                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="#2873FF">
                              <path d="M22.5 12.6196V14.6796C22.5 15.2396 22.04 15.6996 21.47 15.6996H19.54C18.46 15.6996 17.47 14.9096 17.38 13.8296C17.32 13.1996 17.56 12.6096 17.98 12.1996C18.35 11.8196 18.86 11.5996 19.42 11.5996H21.47C22.04 11.5996 22.5 12.0596 22.5 12.6196Z" fill="#2873FF"/>
                              <path d="M15.88 13.9604C15.79 12.9104 16.17 11.8804 16.93 11.1304C17.57 10.4804 18.46 10.1004 19.42 10.1004H19.99C20.27 10.1004 20.5 9.87039 20.46 9.59039C20.19 7.65039 18.51 6.15039 16.5 6.15039H6.5C4.29 6.15039 2.5 7.94039 2.5 10.1504V17.1504C2.5 19.3604 4.29 21.1504 6.5 21.1504H16.5C18.52 21.1504 20.19 19.6504 20.46 17.7104C20.5 17.4304 20.27 17.2004 19.99 17.2004H19.54C17.64 17.2004 16.04 15.7804 15.88 13.9604ZM13.5 11.9004H7.5C7.09 11.9004 6.75 11.5704 6.75 11.1504C6.75 10.7304 7.09 10.4004 7.5 10.4004H13.5C13.91 10.4004 14.25 10.7404 14.25 11.1504C14.25 11.5604 13.91 11.9004 13.5 11.9004Z" fill="#2873FF"/>
                              <path d="M14.71 3.97961C14.97 4.24961 14.74 4.64961 14.36 4.64961H6.53003C5.44003 4.64961 4.42003 4.96961 3.57003 5.51961C3.18003 5.76961 2.65003 5.49961 2.84003 5.06961C3.40003 3.75961 4.71003 2.84961 6.22003 2.84961H11.84C13 2.84961 14.03 3.25961 14.71 3.97961Z" fill="#2873FF"/>
                            </svg>

                            <span class="text-center resend-code mb-3 ml-1" style="font-size: 16px; font-weight: 600;">Wallet</span>
                          </div>
                          <span class="" style="font-size: 16px; font-weight: 600;">Crypto Balance: {{ formatBalance(pinia.state.SummedBalance)}}</span>
                          <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 14px;">View your fiat balances and make transactions seamlessly with the wallet.</span>
                          
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8E9BAE" class="bi bi-chevron-double-right mt-3 arrow1" viewBox="0 0 16 16" style="display: flex; align-self: flex-end;">
                            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                          </svg>
                        </v-card>
                      </v-col>

                      <v-col @click.prevent="navigateTo('/account/dashboard')" sm="4" cols="12">
                        <v-card  hover link class="pa-4 ma-2" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="display: flex; flex-direction: column;">
                          <div style="display: flex; align-items: flex-start;">

                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16" fill="#2873FF">
                              <path d="M8.00002 8.00016C9.84097 8.00016 11.3334 6.50778 11.3334 4.66683C11.3334 2.82588 9.84097 1.3335 8.00002 1.3335C6.15907 1.3335 4.66669 2.82588 4.66669 4.66683C4.66669 6.50778 6.15907 8.00016 8.00002 8.00016Z" stroke="#969696" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M2.27332 14.6667C2.27332 12.0867 4.83998 10 7.99998 10C8.63998 10 9.25999 10.0867 9.83999 10.2467" stroke="#2873FF" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M14.6666 12.0002C14.6666 12.2135 14.64 12.4202 14.5867 12.6202C14.5267 12.8868 14.42 13.1468 14.28 13.3735C13.82 14.1468 12.9733 14.6668 12 14.6668C11.3133 14.6668 10.6933 14.4068 10.2266 13.9801C10.0266 13.8068 9.8533 13.6002 9.71997 13.3735C9.4733 12.9735 9.33331 12.5002 9.33331 12.0002C9.33331 11.2802 9.61998 10.6202 10.0866 10.1402C10.5733 9.64018 11.2533 9.3335 12 9.3335C12.7866 9.3335 13.5 9.67351 13.98 10.2202C14.4066 10.6935 14.6666 11.3202 14.6666 12.0002Z" stroke="#2873FF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M12.9933 11.9863H11.0067" stroke="#2873FF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M12 11.0132V13.0065" stroke="#2873FF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="text-center resend-code mb-3 ml-1" style="font-size: 16px; font-weight: 600;">Dashboard</span>
                          </div>
                          <span style="font-size: 14px;" :class="isDark ? 'text-dark':'text-light'">View available coins, their prices, specific coin balances according to blockchain network, and your referral code.</span>
                          
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8E9BAE" class="bi bi-chevron-double-right mt-3 arrow1" viewBox="0 0 16 16" style="display: flex; align-self: flex-end;">
                            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                          </svg>

                        </v-card>
                      </v-col>

                      <v-col @click.prevent="navigateTo('/account/marketplace/createOffer')" sm="4" cols="12">
                        <v-card  hover link class="pa-4 ma-2" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="display: flex; flex-direction: column;">
                          <div style="display: flex; align-items: flex-start;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#2873FF" class="bi bi-database-fill" viewBox="0 0 16 16">
                              <path d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223"/>
                              <path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
                              <path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
                              <path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
                            </svg>
                            <span class="text-center resend-code mb-3 ml-1" style="font-size: 16px; font-weight: 600;">Create Offer</span>
                          </div>

                          <span style="font-size: 14px;" :class="isDark ? 'text-dark':'text-light'">Craft your perfect deal with ease: create offers for the marketplace and select a fixed or market price of choice.</span>
                          
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8E9BAE" class="bi bi-chevron-double-right mt-3 arrow1" viewBox="0 0 16 16" style="display: flex; align-self: flex-end;">
                            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                          </svg>
                        </v-card>
                      </v-col>
                      
                      <v-responsive width="100%" :class="isDark ? 'profile-cards-dark':'profile-cards-light'"></v-responsive>

                      <v-col @click.prevent="navigateTo('/account/marketplace/activeOffers')" sm="4" cols="12">
                        <v-card  hover link class="pa-4 ma-2" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="display: flex; flex-direction: column;">
                          <div style="display: flex; align-items: flex-start;">
                            <img src="/svg/blue-market.svg" style="margin-right: 6px; margin-top: 2px;"/>
                            <span class="text-center resend-code mb-3" style="font-size: 16px; font-weight: 600;">Market Place</span>
                          </div>
                          <span style="font-size: 14px;" :class="isDark ? 'text-dark':'text-light'">view and manage market offers, including viewing offers from other users, managing your own offers, and buying from vendors.</span>
                          
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8E9BAE" class="bi bi-chevron-double-right mt-3 arrow1" viewBox="0 0 16 16" style="display: flex; align-self: flex-end;">
                            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                          </svg>
                        </v-card>
                      </v-col>

                      <v-col @click.prevent="navigateTo('/account/trade/wallet')" sm="4" cols="12">
                        <v-card  hover link class="pa-4 ma-2" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="display: flex; flex-direction: column;">
                          <div style="display: flex; align-items: normal;">

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="#2873FF" style="margin-top: 2px; margin-right: 5px;">
                              <path d="M9 0L17.217 1.826C17.4391 1.87536 17.6377 1.99897 17.78 2.1764C17.9224 2.35384 18 2.57452 18 2.802V12.789C17.9999 13.7767 17.756 14.7492 17.2899 15.62C16.8238 16.4908 16.1499 17.2331 15.328 17.781L9 22L2.672 17.781C1.85027 17.2332 1.17646 16.4911 0.710348 15.6205C0.244236 14.7498 0.000236356 13.7776 0 12.79V2.802C3.90378e-05 2.57452 0.0776379 2.35384 0.21999 2.1764C0.362341 1.99897 0.560937 1.87536 0.783 1.826L9 0ZM9 2.049L2 3.604V12.789C2.00001 13.4475 2.16257 14.0957 2.47326 14.6763C2.78395 15.2568 3.23315 15.7517 3.781 16.117L9 19.597L14.219 16.117C14.7667 15.7518 15.2158 15.2571 15.5265 14.6767C15.8372 14.0964 15.9998 13.4483 16 12.79V3.604L9 2.05V2.049ZM9 6C9.44034 5.9998 9.86843 6.14492 10.2179 6.41286C10.5673 6.6808 10.8186 7.05657 10.9326 7.48187C11.0467 7.90718 11.0172 8.35824 10.8488 8.76509C10.6803 9.17193 10.3823 9.51181 10.001 9.732L10 14H8V9.732C7.61874 9.51186 7.32077 9.17206 7.15231 8.76532C6.98384 8.35857 6.95429 7.90761 7.06824 7.48236C7.18219 7.0571 7.43326 6.68133 7.78253 6.41332C8.1318 6.1453 8.55975 6.00002 9 6Z" fill="#2873FF"/>
                            </svg>
                            <span class="resend-code mb-3" style="font-size: 16px; font-weight: 600;">Security</span>
                          </div>
                          <span style="font-size: 14px;" :class="isDark ? 'text-dark':'text-light'">Change your password, enable/disable two-factor authentication, and review activity logs..</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8E9BAE" class="bi bi-chevron-double-right mt-3 arrow1" viewBox="0 0 16 16" style="display: flex; align-self: flex-end;">
                            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                          </svg>
                        </v-card>
                      </v-col>

                      <v-col @click.prevent="navigateTo('/account/settings')" sm="4" cols="12">
                        <v-card  hover link class="pa-4 ma-2" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="display: flex; flex-direction: column;">
                          <div style="display: flex; align-items: normal;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16" fill="none" style="margin-top: 2px;">
                              <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#2873FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M1.33331 8.5863V7.41297C1.33331 6.71963 1.89998 6.1463 2.59998 6.1463C3.80665 6.1463 4.29998 5.29297 3.69331 4.2463C3.34665 3.6463 3.55331 2.8663 4.15998 2.51963L5.31331 1.85963C5.83998 1.5463 6.51998 1.73297 6.83331 2.25963L6.90665 2.3863C7.50665 3.43297 8.49331 3.43297 9.09998 2.3863L9.17331 2.25963C9.48665 1.73297 10.1666 1.5463 10.6933 1.85963L11.8466 2.51963C12.4533 2.8663 12.66 3.6463 12.3133 4.2463C11.7066 5.29297 12.2 6.1463 13.4066 6.1463C14.1 6.1463 14.6733 6.71297 14.6733 7.41297V8.5863C14.6733 9.27963 14.1066 9.85297 13.4066 9.85297C12.2 9.85297 11.7066 10.7063 12.3133 11.753C12.66 12.3596 12.4533 13.133 11.8466 13.4796L10.6933 14.1396C10.1666 14.453 9.48665 14.2663 9.17331 13.7396L9.09998 13.613C8.49998 12.5663 7.51331 12.5663 6.90665 13.613L6.83331 13.7396C6.51998 14.2663 5.83998 14.453 5.31331 14.1396L4.15998 13.4796C3.55331 13.133 3.34665 12.353 3.69331 11.753C4.29998 10.7063 3.80665 9.85297 2.59998 9.85297C1.89998 9.85297 1.33331 9.27963 1.33331 8.5863Z" stroke="#2873FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="text-center resend-code mb-3 ml-1" style="font-size: 16px; font-weight: 600;">Settings</span>
                          </div>
                          <span style="font-size: 14px;" :class="isDark ? 'text-dark':'text-light'">change profile image, choose preferred currency, add phone number and date of birth, and enable or disable notifications.</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8E9BAE" class="bi bi-chevron-double-right mt-3 arrow1" viewBox="0 0 16 16" style="display: flex; align-self: flex-end;">
                            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                          </svg>
                        </v-card>
                      </v-col>
                   

                   

                    
                    </v-row>
                  </div>
                <!-- </v-container> -->

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
  
 }
</style>