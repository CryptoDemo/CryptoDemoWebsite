<template>
  <div>
          <v-row no-gutters style="">
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
                          <!-- <img src="/svg/Avatar1.svg" class="me-3" alt="avatar"/> -->

                          <div>
                              <span style="font-family: Poppins; display: flex; color: #2873FF; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;">Tom Gravesen</span>
                              <span style="color: var(--Second-Text, #A4A8AB); font-family: Poppins; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal; letter-spacing: 0.1px;">Online</span>
                          </div>
                      </div>
                      
                      <div class="d-flex" style="margin-right: 30px; align-items: center;">
                          <v-btn style="background: inherit; "><img src="/svg/call1.svg" class=""/></v-btn>
                          <v-btn style="background: inherit; "><img src="/svg/profile-circle(2).svg" class=""/></v-btn>
                        

                           <v-menu v-model="menu" :close-on-content-click="false" location="end">
                              <template v-slot:activator="{ props }">
                                <v-btn v-bind="props" style="background: #12181F; backdrop-filter: blur(10.5px); border-radius: 16px; margin-left: 48px; height: 48px !important; min-width: 48px !important">
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
                                      <!-- <img src="/svg/Avatar1.svg" width="50" class="me-3" alt="avatar"/> -->
                                     
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
                   <span style="color: #F8FAFC; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 400; line-height: 150%; /* 24px */">Do you like or dislike this trade partner?</span>
                    <div class="d-flex" style="margin-bottom: 16px; margin-top: 8px;">
                        <v-btn class="me-4" style="border-radius: 15px!important; background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF); width: 112px; height: 48px;">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M17.1999 12.3984C14.5499 12.3984 12.3999 14.5484 12.3999 17.1984C12.3999 18.0984 12.6499 18.9484 13.0999 19.6684C13.9299 21.0584 15.4499 21.9984 17.1999 21.9984C18.9499 21.9984 20.4799 21.0584 21.2999 19.6684C21.7399 18.9484 21.9999 18.0984 21.9999 17.1984C21.9999 14.5484 19.8499 12.3984 17.1999 12.3984ZM19.5799 16.5684L17.0199 18.9284C16.8799 19.0584 16.6899 19.1284 16.5099 19.1284C16.3199 19.1284 16.1299 19.0584 15.9799 18.9084L14.7999 17.7284C14.5099 17.4384 14.5099 16.9584 14.7999 16.6684C15.0899 16.3784 15.5699 16.3784 15.8599 16.6684L16.5299 17.3384L18.5599 15.4584C18.8599 15.1784 19.3399 15.1984 19.6199 15.4984C19.8999 15.8084 19.8799 16.2884 19.5799 16.5684Z" fill="#99BDFF"/>
                              <path d="M22 8.73062C22 9.92062 21.81 11.0206 21.48 12.0406C21.42 12.2506 21.17 12.3106 20.99 12.1806C19.9 11.3706 18.57 10.9406 17.2 10.9406C13.73 10.9406 10.9 13.7706 10.9 17.2406C10.9 18.3206 11.18 19.3806 11.71 20.3206C11.87 20.6006 11.68 20.9606 11.38 20.8506C8.97 20.0306 4.1 17.0406 2.52 12.0406C2.19 11.0206 2 9.92062 2 8.73062C2 5.64062 4.49 3.14063 7.56 3.14063C9.37 3.14063 10.99 4.02062 12 5.37062C13.01 4.02062 14.63 3.14063 16.44 3.14063C19.51 3.14062 22 5.64062 22 8.73062Z" fill="#99BDFF"/>
                          </svg>
                        </v-btn>

                        <v-btn style="border-radius: 15px; background: #1B2537; width: 112px; height: 48px;">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M17.1999 22.7484C15.6299 22.7484 14.1299 22.0784 13.0699 20.8984C12.1499 19.8684 11.6499 18.5584 11.6499 17.1984C11.6499 14.1384 14.1399 11.6484 17.1999 11.6484C18.7399 11.6484 20.1699 12.2684 21.2399 13.3884C21.2699 13.4184 21.2999 13.4584 21.3199 13.4884C22.2599 14.5484 22.7499 15.8384 22.7499 17.1884C22.7499 20.2584 20.2599 22.7484 17.1999 22.7484ZM17.1999 13.1484C14.9699 13.1484 13.1499 14.9684 13.1499 17.1984C13.1499 18.1884 13.5199 19.1484 14.1899 19.8984C14.9599 20.7584 16.0599 21.2484 17.1999 21.2484C19.4299 21.2484 21.2499 19.4284 21.2499 17.1984C21.2499 16.1684 20.8599 15.1884 20.1399 14.4284C20.1199 14.4084 20.0999 14.3784 20.0799 14.3584C19.3099 13.5784 18.2899 13.1484 17.1999 13.1484Z" fill="white"/>
                                <path d="M18.4799 19.2914C18.2899 19.2914 18.0999 19.2214 17.9499 19.0714L15.4099 16.5315C15.1199 16.2415 15.1199 15.7614 15.4099 15.4714C15.6999 15.1814 16.1799 15.1814 16.4699 15.4714L19.0099 18.0114C19.2999 18.3014 19.2999 18.7814 19.0099 19.0714C18.8699 19.2114 18.6699 19.2914 18.4799 19.2914Z" fill="white"/>
                                <path d="M15.9198 19.3188C15.7298 19.3188 15.5399 19.2487 15.3899 19.0987C15.0999 18.8087 15.0999 18.3287 15.3899 18.0387L17.9298 15.4988C18.2198 15.2088 18.6998 15.2088 18.9898 15.4988C19.2798 15.7887 19.2798 16.2687 18.9898 16.5587L16.4499 19.0987C16.2999 19.2387 16.1098 19.3188 15.9198 19.3188Z" fill="white"/>
                                <path d="M12 21.6516C11.69 21.6516 11.38 21.6116 11.13 21.5216C8.57 20.6516 1.25 16.4116 1.25 8.69159C1.25 5.19159 4.08 2.35156 7.56 2.35156C9.23 2.35156 10.83 3.02159 12 4.19159C13.17 3.02159 14.78 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.19159 22.75 8.69159C22.75 10.6416 22.28 12.5116 21.35 14.2616C21.24 14.4716 21.03 14.6216 20.79 14.6516C20.55 14.6816 20.31 14.6016 20.14 14.4216C19.36 13.6016 18.31 13.1416 17.19 13.1416C14.96 13.1416 13.14 14.9616 13.14 17.1916C13.14 18.1816 13.51 19.1416 14.18 19.8916C14.34 20.0716 14.4 20.3116 14.35 20.5416C14.3 20.7716 14.14 20.9716 13.93 21.0716C13.53 21.2516 13.17 21.4016 12.84 21.5116C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02159 2.75 8.69159C2.75 15.5316 9.31999 19.3116 11.62 20.1016C11.8 20.1716 12.19 20.1616 12.37 20.1016C12.4 20.0916 12.43 20.0816 12.46 20.0716C11.94 19.2116 11.65 18.2216 11.65 17.2016C11.65 14.1416 14.14 11.6516 17.2 11.6516C18.38 11.6516 19.5 12.0216 20.44 12.6916C20.98 11.4116 21.25 10.0716 21.25 8.69159C21.25 6.02159 19.09 3.85156 16.44 3.85156C14.94 3.85156 13.5 4.57162 12.6 5.78162C12.32 6.16162 11.68 6.16162 11.4 5.78162C10.5 4.57162 9.06 3.85156 7.56 3.85156Z" fill="white"/>
                          </svg>
                        </v-btn>
                    </div>
                    <span style="color: #D8D8D8; text-align: justify; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">Leave a comment about this trade partner</span>
                    <div style="border-radius: 16px; margin-top: 12px;">
                        <v-textarea variant="text"  rows="7" row-height="10" auto-grow placeholder="I love the speed" style="background: #12181F;"></v-textarea>
                    </div>

                    <div style="display: flex; justify-content: end; margin-top: 12px; margin-bottom: 157px; ">
                        <v-btn class="submit-review">Submit</v-btn>
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
margin-bottom: 28px;
}

.v-input--density-default {
padding: 20px;
border-radius: 16px;
}
.submit-review{
color: var(--Colors-Base-white, #FFF);
text-align: justify;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
border-radius: 8px !important;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF) !important;
display: inline-flex;
padding: 11px 15px;
align-items: center;
letter-spacing: 0px !important;
text-transform: unset !important;
}
</style>