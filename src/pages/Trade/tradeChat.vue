<template>
  <div>
          <v-row no-gutters >
            <v-col cols="3">
              <div class="pa-2 ma-2">
                          <!-- //side nav here../ -->
              </div>
            </v-col>

            <v-col cols="9">
              <div class="pa-2 ma-2">
                 <div class="chat-headings" > 
                  <div  style="display: flex; justify-content: space-between; width: 940px; margin-bottom: 23px">    
                      <div class="d-flex">
                          <img src="/svg/Avatar1.svg" class="me-3" alt="avatar"/>

                          <div>
                              <span style="font-family: Poppins; display: flex; color: #2873FF; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;">Tom Gravesen</span>
                              <span style="color: var(--Second-Text, #A4A8AB); font-family: Poppins; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal; letter-spacing: 0.1px;">Online</span>
                          </div>
                      </div>
                      
                      <div class="d-flex" style="margin-right: 30px; align-items: center;">
                          <v-btn style="background: inherit; "><img src="/svg/call1.svg" class=""/></v-btn>
                          <v-btn style="background: inherit; "><img src="/svg/profile-circle(2).svg" class=""/></v-btn>
                          
                          <v-btn class="d-flex" style="background: inherit; padding: 10px;">
                            <img src="/svg/heart-tick.svg" alt="icon">
                            <span class="user-location" style="color: #64748B; font-size: 16px;">0</span>
                          </v-btn>

                          <v-btn class="d-flex" style="background: inherit; padding: 10px;">
                            <img src="/svg/heart-remove.svg" alt="icon">
                            <span class="user-location" style="color: #64748B; font-size: 16px;">0</span>
                          </v-btn> 

                           <v-menu v-model="menu" :close-on-content-click="false" location="end">
                              <template v-slot:activator="{ props }">
                                <v-btn v-bind="props" style="background: #12181F;  backdrop-filter: blur(10.5px); border-radius: 16px; margin-left: 48px; height: 48px !important; min-width: 48px !important">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                          <g clip-path="url(#clip0_4035_64725)">
                                            <path d="M5.35498 10.1992C4.25498 10.1992 3.35498 11.0992 3.35498 12.1992C3.35498 13.2992 4.25498 14.1992 5.35498 14.1992C6.45498 14.1992 7.35498 13.2992 7.35498 12.1992C7.35498 11.0992 6.45498 10.1992 5.35498 10.1992ZM19.355 10.1992C18.255 10.1992 17.355 11.0992 17.355 12.1992C17.355 13.2992 18.255 14.1992 19.355 14.1992C20.455 14.1992 21.355 13.2992 21.355 12.1992C21.355 11.0992 20.455 10.1992 19.355 10.1992ZM12.355 10.1992C11.255 10.1992 10.355 11.0992 10.355 12.1992C10.355 13.2992 11.255 14.1992 12.355 14.1992C13.455 14.1992 14.355 13.2992 14.355 12.1992C14.355 11.0992 13.455 10.1992 12.355 10.1992Z" fill="white"/>
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_4035_64725">
                                              <rect width="24" height="24" fill="white" transform="translate(0.35498 0.199219)"/>
                                            </clipPath>
                                          </defs>
                                        </svg>
                                </v-btn>
                              </template>

                              <v-card min-width="304" style="border-radius: 24px; padding: 21px; border: 1px solid  #303A46; background: #161D26;">
                                  <div class="d-flex" style="margin-bottom: 15px;">
                                      <img src="/svg/Avatar1.svg" width="50" class="me-3" alt="avatar"/>
                                          <div>
                                              <span style="font-family: Poppins; display: flex; color: #2873FF; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;">Tom Gravesen</span>
                                                <div class="d-flex">
                                                  <div class="d-flex me-6" style="align-items: center;">
                                                    <img src="/svg/heart-tick.svg" alt="icon">
                                                    <span class="user-location">0</span>
                                                  </div>

                                                  <div class="d-flex me-8" style="align-items: center;">
                                                    <img src="/svg/heart-remove.svg" alt="icon">
                                                    <span class="user-location">0</span>
                                                  </div> 
                                                </div>
                                          </div>
                                      <v-btn variant="text" @click="menu = false" style="border-radius: 14px; background: #12181F; max-width: 45px!important; height: 45px !important;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                          <path d="M17.5 16.0849L21.0355 12.5494C21.4261 12.1588 22.0592 12.1588 22.4497 12.5494C22.8403 12.9399 22.8403 13.573 22.4497 13.9636L18.9142 17.4991L22.4497 21.0346C22.8403 21.4252 22.8403 22.0583 22.4497 22.4489C22.0592 22.8394 21.4261 22.8394 21.0355 22.4489L17.5 18.9133L13.9645 22.4489C13.5739 22.8394 12.9408 22.8394 12.5503 22.4489C12.1597 22.0583 12.1597 21.4252 12.5503 21.0346L16.0858 17.4991L12.5503 13.9636C12.1597 13.573 12.1597 12.9399 12.5503 12.5494C12.9408 12.1588 13.5739 12.1588 13.9645 12.5494L17.5 16.0849Z" fill="white"/>
                                        </svg>
                                      </v-btn>
                                  </div>

                                  <span style="font-family: Poppins; margin-top: 15px;  font-size: 16px; font-style: normal; font-weight: 600; line-height: 22px;">About</span>
                                  <div style=" display: flex; margin-top: 24px">
                                   <img src="/svg/call1.svg" class="me-4"/>
                                   <span style="font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 400; color: #35B233">Phone verified</span>
                                  </div>

                                  <div style="display: flex; margin-top: 6px; margin-bottom: 28px">
                                     <img src="/svg/profile-circle(2).svg" class="me-4"/>
                                     <span style="font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 400; color: #35B233">ID verified</span>
                                  </div>

                                  <span style="font-family: Manrope; color: #F8FAFC; font-size: 14px; font-style: normal; font-weight: 600; line-height: 150%;">Estimated Response  time</span>
                                  <div style="display: grid; margin-top: 12px">
                                    <span class="mb-3" style="font-family: Manrope; color: #8E9BAE; font-size: 14px; font-style: normal; font-weight: 400; line-height: 140%;">Speed - 3mns</span>
                                    <span class="mb-5" style="font-family: Manrope; color: #8E9BAE; font-size: 14px; font-style: normal; font-weight: 400; line-height: 140%;">Status - Last seen 1min ago</span>
                                    <span class="mb-3" style="font-family: Manrope; color: #8E9BAE; font-size: 14px; font-style: normal; font-weight: 400; line-height: 140%;">Name - Nehemiah Bernard Judas</span>
                                    <span class="mb-3" style="font-family: Manrope; color: #8E9BAE; font-size: 14px; font-style: normal; font-weight: 400; line-height: 140%;">Mobile carrier info - MTN NG</span>
                                    <span class="mb-3" style="font-family: Manrope; color: #8E9BAE; font-size: 14px; font-style: normal; font-weight: 400; line-height: 140%;">IP Loc- Nigeria</span>
                                    <span class="mb-3" style="font-family: Manrope; color: #8E9BAE; font-size: 14px; font-style: normal; font-weight: 400; line-height: 140%;">Detected Loc- Nigeria</span>
                                  </div>
                              </v-card>
                          </v-menu>
   
                      </div>
                   
                  </div>
                  <div class="chat-border"></div>


                  <div style="border-radius: 12px; background: #12181F; width: 90px; height: 46px; margin: auto; margin-top: 22px; margin-bottom: 25px">
                    <span  style="font-size: 10px; font-style: normal; font-weight: 400; line-height: 26px;letter-spacing: 0.1px; display: flex; justify-content: center; padding-top: 12px ">{{chatDate}}</span>
                  </div>


                   <div class="ma-2" style="border-radius: 0px 24px 24px 24px; background: #12181F; padding: 30px; width: 705px; height: 256px ">
                     
                        <span style="color: var(--Gray-Medium-light, #969696); font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 400; line-height: 24px;letter-spacing: 0.1px;">
                            <span style="color:#D8D8D8; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 400; line-height: 24px; /* 171.429% */ letter-spacing: 0.1px;"> You're buying 0.00032299 BTC (19,788.47 NGN) for 20,000 NGN via Bank Transfer. The BTC is now in escrow and it's safe to make your payment. </span>
                           <div style="display: grid">
                             <span class="mb-1 mt-2">1. When the seller is ready to start the transaction, they'll share their bank account details in the trade chat.</span>
                            <span class="mb-1">2. Make your payment.</span>
                            <span class="mb-1">3. Mark the trade as Paid and upload proof of payment.</span>
                            <span class="mb-1">4. Wait for your trade partner to confirm your payment.</span>
                            <span class="mb-1">5. Your trade partner will release the BTC to you.</span>
                           </div>
                        </span>
                    </div>

                    <span style="font-family: Poppins; font-size: 12px; font-style: normal;font-weight: 400; color: #A4A8AB">03:49PM</span>

                      <div class="ma-2" style="border-radius: 0px 24px 24px 24px; background: var(--secondary-background, #12181F);padding: 30px; width: 705px; height: 112px">
                          <span style="color:#D8D8D8; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 400; line-height: 24px; /* 171.429% */ letter-spacing: 0.1px;">Third-party payments are not accepted for this trade. The selected bank accounts must belong to the buyer and seller respectively.</span>
                      </div>

                       <span style="font-family: Poppins; font-size: 12px; font-style: normal;font-weight: 400; color: #A4A8AB">04:49PM</span>
               
                    <div style="display: flex; justify-content: end;margin-top: 55px;">
                        <div style="border-radius: 24px 24px 0px 24px; border: 1px solid #2873FF; background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF); display: flex; width: 204.339px; height: 88px; padding: 20px;">
                          <span style="font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 400; line-height: 24px;  letter-spacing: 0.1px;">Ok, thank you so much for the speed</span>
                        </div>
                    </div>
                          <span style="font-family: Poppins; font-size: 12px; margin-top: 10px; font-style: normal;font-weight: 400; color: #A4A8AB; display: flex; justify-content: flex-end;">04:49PM</span>
                   <div class="chat-border" style="margin-top: 15px;"></div>

                   <div>
                     <div style="display: flex; justify-content: space-between; margin-top: 25.3px">
                        <v-btn class="me-5" style="border-radius: 16px; background: rgba(0, 0, 0, 0.38); backdrop-filter: blur(10.5px); width: 48.08px; height: 48px">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <g clip-path="url(#clip0_4035_64741)">
                              <path d="M12 22.1992C6.477 22.1992 2 17.7222 2 12.1992C2 6.67622 6.477 2.19922 12 2.19922C17.523 2.19922 22 6.67622 22 12.1992C22 17.7222 17.523 22.1992 12 22.1992ZM12 20.1992C14.1217 20.1992 16.1566 19.3564 17.6569 17.8561C19.1571 16.3558 20 14.321 20 12.1992C20 10.0775 19.1571 8.04266 17.6569 6.54236C16.1566 5.04207 14.1217 4.19922 12 4.19922C9.87827 4.19922 7.84344 5.04207 6.34315 6.54236C4.84285 8.04266 4 10.0775 4 12.1992C4 14.321 4.84285 16.3558 6.34315 17.8561C7.84344 19.3564 9.87827 20.1992 12 20.1992ZM7 13.1992H9C9 13.9949 9.31607 14.7579 9.87868 15.3205C10.4413 15.8831 11.2044 16.1992 12 16.1992C12.7956 16.1992 13.5587 15.8831 14.1213 15.3205C14.6839 14.7579 15 13.9949 15 13.1992H17C17 14.5253 16.4732 15.7971 15.5355 16.7348C14.5979 17.6724 13.3261 18.1992 12 18.1992C10.6739 18.1992 9.40215 17.6724 8.46447 16.7348C7.52678 15.7971 7 14.5253 7 13.1992ZM8 11.1992C7.60218 11.1992 7.22064 11.0412 6.93934 10.7599C6.65804 10.4786 6.5 10.097 6.5 9.69922C6.5 9.30139 6.65804 8.91986 6.93934 8.63856C7.22064 8.35725 7.60218 8.19922 8 8.19922C8.39782 8.19922 8.77936 8.35725 9.06066 8.63856C9.34196 8.91986 9.5 9.30139 9.5 9.69922C9.5 10.097 9.34196 10.4786 9.06066 10.7599C8.77936 11.0412 8.39782 11.1992 8 11.1992ZM16 11.1992C15.6022 11.1992 15.2206 11.0412 14.9393 10.7599C14.658 10.4786 14.5 10.097 14.5 9.69922C14.5 9.30139 14.658 8.91986 14.9393 8.63856C15.2206 8.35725 15.6022 8.19922 16 8.19922C16.3978 8.19922 16.7794 8.35725 17.0607 8.63856C17.342 8.91986 17.5 9.30139 17.5 9.69922C17.5 10.097 17.342 10.4786 17.0607 10.7599C16.7794 11.0412 16.3978 11.1992 16 11.1992Z" fill="white"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_4035_64741">
                                <rect width="24" height="24" fill="white" transform="translate(0 0.199219)"/>
                              </clipPath>
                            </defs>
                          </svg>
                       </v-btn>

                       <v-btn style="border-radius: 16px; background: rgba(0, 0, 0, 0.38); backdrop-filter: blur(10.5px); width: 48.08px; height: 48px">
                         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <g clip-path="url(#clip0_4035_64745)">
                              <path d="M11.093 11.1992V7.19922H13.093V11.1992H17.093V13.1992H13.093V17.1992H11.093V13.1992H7.09302V11.1992H11.093ZM12.093 22.1992C6.57002 22.1992 2.09302 17.7222 2.09302 12.1992C2.09302 6.67622 6.57002 2.19922 12.093 2.19922C17.616 2.19922 22.093 6.67622 22.093 12.1992C22.093 17.7222 17.616 22.1992 12.093 22.1992ZM12.093 20.1992C14.2147 20.1992 16.2496 19.3564 17.7499 17.8561C19.2502 16.3558 20.093 14.321 20.093 12.1992C20.093 10.0775 19.2502 8.04266 17.7499 6.54236C16.2496 5.04207 14.2147 4.19922 12.093 4.19922C9.97129 4.19922 7.93645 5.04207 6.43616 6.54236C4.93587 8.04266 4.09302 10.0775 4.09302 12.1992C4.09302 14.321 4.93587 16.3558 6.43616 17.8561C7.93645 19.3564 9.97129 20.1992 12.093 20.1992Z" fill="white"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_4035_64745">
                                <rect width="24" height="24" fill="white" transform="translate(0.0930176 0.199219)"/>
                              </clipPath>
                            </defs>
                          </svg>
                       </v-btn>

                      <v-textarea variant=""  rows="1" row-height="10" auto-grow placeholder="Your text here..." style="background: inherit"></v-textarea>

                        <v-btn style="border-radius: 17px; background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF); backdrop-filter: blur(10.5px); width: 48.08px; height: 48px">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M16.2896 3.68937C20.1059 2.41937 22.1794 4.49937 20.9173 8.30937L18.0826 16.7994C16.1794 22.5094 13.0542 22.5094 11.1511 16.7994L10.3097 14.2794L7.78547 13.4394C2.06598 11.5394 2.06598 8.42937 7.78547 6.51937L12.3931 4.98937" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.4998 13.8478L14.0857 10.2578" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                       </v-btn>
                     </div>
                   </div>
                 </div>
              </div>
            </v-col>
          </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const chatDate = ref('Today, 8:26 AM')

const  menu = ref (false);
</script>

<style scoped>


.header{
color: var(--Gray-Medium-light, #969696);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 22.4px */
}

.chat-headings{
width: 940px;
padding: 21px var(--spacing-3xl, 24px);
justify-content: space-between;
align-items: center;
margin-bottom: 16px;
}

.chat-border{
background: var(--border, #303A46);
height: 2px;
flex-shrink: 0;
width: 100%;
}
</style>