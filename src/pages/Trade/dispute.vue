<template>
  <div>
          <v-row no-gutters>
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
                    <div style="margin-bottom: 41px;">          
                        <span style="color: #D8D8D8; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 600; line-height: 150%;">Use this form to report any trade disputes.
                        <span style="color: #969696;font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 400; line-height: 150%;">Provide details of the issue and we will be in touch soon.</span></span>
                    </div>

                       <span style="color: #969696; text-align: justify; font-family: manrope; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">How can we contact you?</span>
                    
                        <div class="d-flex" style="margin-bottom: 16px; margin-top: 8px;">
                      <v-menu :location="location">
                        <template v-slot:activator="{ props }">
                            <v-btn class="mx-auto active-offers" style="letter-spacing: 0px"
                                v-bind="props">
                            
                                <div style="display: grid; cursor: pointer;">
                                <span style="color: #969696; font-family: Manrope; font-size: 16px; font-style: normal;">{{select}}</span> 
                                <span class="me- small-text">{{coin}}</span> 
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style="position: absolute; display: flex; right: 15px;">
                                    <path d="M19.9201 8.94922L13.4001 15.4692C12.6301 16.2392 11.3701 16.2392 10.6001 15.4692L4.08008 8.94922" stroke="#969696" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <!-- <v-icon icon="mdi-chevron-down"  color="#E0E4F5" style="position: absolute; display: flex; right: 15px;"></v-icon> -->
                            </v-btn>
                        </template>

                        <v-list style="background: #12181F; border-radius: 15px;">
                            <v-list-item>
                            <div v-for="(item, index) in contactType" class="d-flex py-3" style="cursor: pointer"
                                :key="index" >
                            
                                <v-list-item-title @click="select=item.title" class="d-flex" >    
                                <span> {{ item.title }} </span>
                            </v-list-item-title>
                            </div>
                            </v-list-item>
                        </v-list>
                      </v-menu> 

                    </div>
                    <span style="color: #969696; text-align: justify; font-family: manrope; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">Describe the trade dispute</span>
                    <div style="border-radius: 16px; margin-top: 12px;">
                        <v-textarea variant="" clearable auto-grow placeholder="I love the speed" style="background: #12181F; height: 170px;"></v-textarea>
                    </div>


                    <div class="upload-section">
                        <span class="upload-txt">Upload supporting evidence </span>
                        <v-btn type="file" class="upload-btn">Upload File</v-btn>
                    </div>


                    <div style="display: flex; justify-content: end; margin-top: 55px ">
                        <v-btn class="register-dispute">Register Dispute</v-btn>
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

const  menu = ref (false);

const select =ref("Email or Phone")
const contactType = ([
        { title: 'Email'},
        { title: 'Phone Number'},
       
      ]);
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

.active-offers{
border-radius: 16px;
background: var(--secondary-background, #12181F);
display: flex;
width: 100%;
padding: 12px 40px;
justify-content: space-between;
height: 48px;
text-transform: unset;
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
margin-bottom: 28px;
}

.v-input--density-default {
padding: 20px;
border-radius: 16px;
}
.register-dispute{
color: #FFF;
text-align: justify;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
border-radius: 8px;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);
letter-spacing: 0px !important;
text-transform: unset !important;
}

.upload-section{
border-radius: 16px;
background: var(--secondary-background, #12181F);
display: flex;
padding: 17px 16px;
justify-content: space-between;
align-items: center;
height: 80px;
margin-top: 20px;
}

.upload-btn{
border-radius: 8px;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);
display: flex;
padding: 11px 15px;
align-items: center;
letter-spacing: 0px;
text-transform: unset;
color: var(--Colors-Base-white, #FFF);
text-align: justify;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.upload-txt{
color: var(--Gray-Light, #D8D8D8);
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 171.429% */
}
</style>