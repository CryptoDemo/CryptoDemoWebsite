<template>
  <div>
    <Header hide="true" icon1="/svg/profile-icon.svg" icon3="/svg/profile-icon.svg"  icon2="/svg/Notification.svg"/>
    <v-container style="display: flex;">
          <div style="margin-bottom: 113px; margin-top: 110px;display: flex;">
            <div class="me-4">
              <div class="mt-3">
                <Side-nav/>           
              </div>
            </div>

            <div>
              <div class="settings-body">
                  <div class="settings-header ml-4 mt-4" style="width: 96%;">
                    <span class="header-text1">Setting answers to your security questions is a requirement in the event that you need to reset or update your phone number. <span style="color: var(--Primary-100, #2873FF);">Set Answers!</span></span>
                  </div>

                  <div class="acct-settings ml-4" style="display: flex;width: 96%; justify-content: space-between; margin-top: 32px">
                     
                        <span class="acct-text" v-if="phoneVerificationStep!=3"> Account Settings</span>
                        <span class="mail-text" v-if="phoneVerificationStep!=3"> {{ pinia.state.email }}</span>

                      <div class="verified" id="verified" v-if="phoneVerificationStep==3" style="display: flex; margin: auto; align-items: center; ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none" class="me-10">
                           <path d="M6.65557 9.37269L15.8378 0.179688L17.2513 1.59369L6.65557 12.2007L0.29834 5.83669L1.71084 4.42269L6.65557 9.37269Z" fill="#5FC381"/>
                        </svg>
                        <span style="color: #5FC381; font-feature-settings: 'clig' off, 'liga' off; font-family: Manrope; align-items: center; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">Your phone number has been verified</span>
                      </div>

                  </div>
              </div>

               <v-row no-gutters >
                    <v-col class="d-md-flex me-5" style=" flex-grow: 0 !important;">
                      <div class="d-flex" >
                          <div class="pa-2 ma-2" style="margin-top: 0px!important;">
                          
                            <div style="display: grid; width: 100%;">
                              <input type="text" v-if="phoneVerificationStep==1 || phoneVerificationStep==3" class="input-styling1 position-relative" placeholder="002-002-003" style="outline: none; padding-left: 140px; color: #fff;  font-size: 14px; font-weight: 600;"/>
                                <v-menu>
                                    <template v-slot:activator="{ props }">
                                      <v-btn class="area-num" v-bind="props">
                                        <img :src="flag" class="me-3" width="32" height="32" style="object-fit: cover;border-radius: 30px"/> 
                                        <span class="me-2">{{phoneCode}}</span>
                                        <v-icon icon="mdi-chevron-down"></v-icon>
                                      </v-btn>
                                    </template>

                                    <v-list :class="isDark ? 'country-dropdown':'country-dropdown-light'">
                                      <v-list-item style="display: contents;">
                                        <v-row dense style="max-width: 250px;">
                                          <v-col v-for="(item, index) in pinia.state.allcountries" sm="12" :key="index">
                                          <v-list-item @click="phoneCode=item.phone_code; flag= item.flag_url" style="display: flex; width: 100%;">
                                            <div class="ml-4" style="display: flex; align-items: center;">
                                              <img width="35" height="35" class="me-3" :src="item.flag_url" style="object-fit: cover;border-radius: 30px"/> 
                                              <span>{{ item.phone_code }}</span>
                                            </div>
                                          </v-list-item>
                                        </v-col>
                                        </v-row>
                                      </v-list-item>
                                    </v-list>
                                </v-menu>

                                <input type="text" v-if="phoneVerificationStep==2" style="font-size: 14px; font-weight: 700; outline: none; padding: 25px; color: #D8D8D8;" placeholder="6-4-0-1" class="input-styling1 position-relative"/>
                              <div>
                                <span class="number-caption" v-if="phoneVerificationStep==1">Please set your phone number with country code. <span style="font-weight: 700;">Must be a mobile number!</span></span>
                                <span class="number-caption" v-if="phoneVerificationStep==2">Input the code sent to your number</span>
                              </div>
                            </div> 
                          
                          </div>
                          <v-btn v-if="phoneVerificationStep==1"  @click="sendOTP" class="update-btn" style="border-radius: 16px; height: 59px !important; width: 94px; letter-spacing: 0px; margin-top: 10px; box-shadow: none;">Confirm</v-btn>
                          <v-btn v-if="phoneVerificationStep==2" @click="verifyOTP" class="mt-2 update-btn" style="border-radius: 16px; height: 59px !important; width: 94px; letter-spacing: 0px ">Confirm</v-btn>
                      </div>
                    </v-col>

                    <v-col>
                      <div class="pa-2 ma-2 d-flex" style="margin-top: 0px!important;">
                        <div @click="$refs.imageSelector.click()">
                          <input type="image" src="/svg/Camera.svg" accept="image/png, image/jpeg, image/bmp" style="position: absolute; margin-left: 17px; margin-top: 17px;"/>
                          <input type="image" :src="selectedImageFile || '/svg/Image-grad.svg'" class="me-4" style="align-self: start;height: 65px;width: 72px;border-radius: 25px;"/>
                        </div>
                        <input ref="imageSelector" @input="setSelectedFile" type="file" accept="image/*" style="display:none"/>
                        <div>
                         <v-text-field placeholder="Email Address" class="input-styling1" variant="plain" style="color: #fff;text-align: justify; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 400;">
                            <v-icon class="prepend-inner-icon ml-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 25 24" fill="none">
                                  <path d="M20.2258 11.9998C20.2257 10.2167 19.6413 8.48476 18.5655 7.07901C17.4898 5.67327 15.9843 4.6743 14.2882 4.24076C12.592 3.80721 10.8025 3.96393 9.20367 4.68603C7.60486 5.40813 6.28846 6.65421 5.46349 8.22641C4.63853 9.79861 4.3523 11.6068 4.65025 13.3638C4.9482 15.1209 5.81326 16.7261 7.10805 17.9245C8.40285 19.1229 10.0532 19.8458 11.7969 19.9785C13.5407 20.1112 15.2779 19.646 16.7328 18.6568L17.8213 20.3208C16.0028 21.5574 13.8312 22.139 11.6515 21.9733C9.47177 21.8076 7.40882 20.904 5.79024 19.406C4.17166 17.9081 3.09024 15.9016 2.71771 13.7053C2.34518 11.509 2.70289 9.24875 3.73404 7.28344C4.76519 5.31814 6.41066 3.76046 8.40917 2.85777C10.4077 1.95508 12.6446 1.75913 14.7648 2.30102C16.885 2.84292 18.7669 4.0916 20.1117 5.84878C21.4564 7.60596 22.1869 9.7709 22.1871 11.9998V13.4998C22.1885 14.2497 21.9536 14.9802 21.5172 15.5837C21.0807 16.1872 20.4657 16.6317 19.7627 16.8519C19.0598 17.0721 18.3061 17.0563 17.6127 16.8067C16.9192 16.5572 16.3227 16.0871 15.911 15.4658C15.2562 16.1595 14.4188 16.6456 13.4996 16.8658C12.5803 17.0859 11.6183 17.0307 10.7291 16.7068C9.83992 16.3829 9.06134 15.804 8.48693 15.0398C7.91253 14.2756 7.56673 13.3585 7.49109 12.3987C7.41545 11.4389 7.61319 10.4773 8.06054 9.62935C8.50789 8.7814 9.18583 8.08319 10.0129 7.61864C10.84 7.15408 11.781 6.94292 12.7229 7.01054C13.6648 7.07816 14.5675 7.42168 15.3226 7.99982H17.2839V13.4998C17.2839 13.8976 17.4389 14.2792 17.7147 14.5605C17.9906 14.8418 18.3648 14.9998 18.7549 14.9998C19.145 14.9998 19.5191 14.8418 19.795 14.5605C20.0709 14.2792 20.2258 13.8976 20.2258 13.4998V11.9998ZM12.3807 8.99982C11.7988 8.99982 11.23 9.17577 10.7462 9.50541C10.2624 9.83506 9.88536 10.3036 9.66269 10.8518C9.44002 11.3999 9.38176 12.0031 9.49528 12.5851C9.60879 13.167 9.88898 13.7016 10.3004 14.1211C10.7119 14.5407 11.2361 14.8264 11.8067 14.9422C12.3774 15.0579 12.9689 14.9985 13.5065 14.7715C14.0441 14.5444 14.5036 14.1599 14.8268 13.6665C15.1501 13.1732 15.3226 12.5932 15.3226 11.9998C15.3226 11.2042 15.0127 10.4411 14.4609 9.8785C13.9092 9.31589 13.1609 8.99982 12.3807 8.99982Z" fill="#C4C4C4"/>
                                </svg>
                            </v-icon>

                          <v-icon class="prepend-inner-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="15" viewBox="0 0 2 15" fill="none">
                                <path opacity="0.4" d="M1.06026 1.31102V14.311" stroke="#C3CDDB" stroke-linecap="round"/>
                            </svg>
                            </v-icon>

                          </v-text-field>
                          <span class="number-caption">This username is auto-generated and can be changed only once.</span>
                        </div>


                      </div>
                    </v-col>

                  <div class="d-md-flex">
                    <v-col style="flex-grow: 0 !important;">
                      <div class="me-4" style="display: grid; margin-top: 0!important;">
                        <span class="number-caption ml-1" style="line-height: 28px; font-family: manrope; font-weight: 600; font-size: 16px;">Preferred currency</span>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                              <v-btn class="input-styling1 ml-1" width="385px" v-bind="props">
                                <div  class="py-3" style="display: flex; cursor: pointer; position: absolute; left: 37px; align-items: center;">
                                  <span class="me-2" style="font-weight: 700; font-size: 16px; color: white;">{{Selectedcurrency_code}}</span>
                                  <span class="mt-" style="font-weight: 700; color: #969696;">{{Selectedcurrency}}</span> 
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none" style="position: absolute; right: 30px; bottom: 27px;">
                                  <path d="M5.05508 5.99413C5.19232 5.99415 5.32822 5.96714 5.45502 5.91463C5.58182 5.86213 5.69705 5.78516 5.7941 5.68813L9.69409 1.78814C9.88995 1.59227 10 1.32663 10 1.04964C10 0.772651 9.88995 0.50701 9.69409 0.311147C9.49823 0.115285 9.23259 0.00523901 8.9556 0.00523901C8.67861 0.00523901 8.41296 0.115285 8.2171 0.311147L5.0531 2.71114L1.8891 0.311147C1.69324 0.115285 1.4276 0.00523901 1.1506 0.00523901C0.873613 0.00523901 0.607941 0.115285 0.412079 0.311147C0.216217 0.50701 0.106201 0.772651 0.106201 1.04964C0.106201 1.32663 0.216217 1.59227 0.412079 1.78814L4.3121 5.68813C4.4096 5.78569 4.52546 5.86297 4.65298 5.91549C4.78051 5.96801 4.91716 5.99473 5.05508 5.99413Z" fill="#E0E4F5"/>
                                </svg>
                              </v-btn>
                            </template>

                            <v-list :class="isDark ? 'country-dropdown':'country-dropdown-light'">
                              <v-list-item style="width: 100%;">
                                <div v-for="(currency, index) in pinia.state.allcountries" class="d-flex py-3" :key="index">
                                  <v-list-item @click="Selectedcurrency=currency.currency_name; Selectedcurrency_code = currency.currency_code">
                                      <div class="d-flex ml-4">
                                        <!-- <span class="me-2">{{currency.currency_code}}</span>  -->
                                        <span :class="isDark ? 'country-name' : 'country-name-light'">{{ currency.currency_name }}</span>
                                      </div>
                                  </v-list-item>
                                </div>
                              </v-list-item>
                            </v-list>
                        </v-menu> 
                          <span class="number-caption ml-1" >Choose the currency for your wallet.</span>
                      </div>
                    </v-col>  
                    
                    <v-col>
                      <div style="flex-grow: 0 !important;">
                        <div style="display: grid;">
                          <span class="number-caption ml-1" style="line-height: 28px; font-family: manrope; font-weight: 600; font-size: 16px;">Set your time zone</span>
                          <v-menu>
                              <template v-slot:activator="{ props }">
                                <v-btn class="input-styling1"  width="385px" v-bind="props">
                                  <div  class="py-3" style="display: flex; cursor: pointer; position: absolute; left: 15px; align-items: center;">
                                      <span class="dropdown-text">{{selectedTimezone}}</span> 
                                  </div>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none" style="position: absolute; right: 30px; bottom: 27px;">
                                    <path d="M5.05508 5.99413C5.19232 5.99415 5.32822 5.96714 5.45502 5.91463C5.58182 5.86213 5.69705 5.78516 5.7941 5.68813L9.69409 1.78814C9.88995 1.59227 10 1.32663 10 1.04964C10 0.772651 9.88995 0.50701 9.69409 0.311147C9.49823 0.115285 9.23259 0.00523901 8.9556 0.00523901C8.67861 0.00523901 8.41296 0.115285 8.2171 0.311147L5.0531 2.71114L1.8891 0.311147C1.69324 0.115285 1.4276 0.00523901 1.1506 0.00523901C0.873613 0.00523901 0.607941 0.115285 0.412079 0.311147C0.216217 0.50701 0.106201 0.772651 0.106201 1.04964C0.106201 1.32663 0.216217 1.59227 0.412079 1.78814L4.3121 5.68813C4.4096 5.78569 4.52546 5.86297 4.65298 5.91549C4.78051 5.96801 4.91716 5.99473 5.05508 5.99413Z" fill="#E0E4F5"/>
                                  </svg>
                                </v-btn>
                              </template>

                              <v-list :class="isDark ? 'country-dropdown':'country-dropdown-light'">
                                <v-list-item>
                                  <div v-for="(zone, index) in pinia.state.allcountries" :key="index" class="d-flex py-2">
                                    <v-list-item @click="selectedTimezone=zone.timezone;" class="d-flex"> 
                                    <div class="ml-3">
                                      <span :class="isDark ? 'country-name' : 'country-name-light'"> {{ zone.timezone }} </span>
                                    </div>
                                    </v-list-item>
                                  </div>
                                </v-list-item>
                              </v-list>
                          </v-menu>    
                        </div>
                      </div>
                    </v-col>
                  </div>
               </v-row>

                <div class="pa-2 ma-2">
            
                </div>
              <div class="pa-2 ma-2" style="flex-shrink: 0;">
                <DataTable/>
              
              </div>
            </div>     
          </div>
    </v-container>     
          <Footer/>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import {FiveMB} from "@/composables/configs";

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();
const phoneVerificationStep = ref(1);
const selectedImageFile = ref(null);

const setSelectedFile = (event)=>{
  const file = event.target.files[0];
  console.log(file)

  if(file.size>FiveMB) {
    // TODO: show error pop notification that the file size is greater than 2MB
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    selectedImageFile.value = e.target.result;
  };
  reader.readAsDataURL(file);
}


const sendOTP = ()=>{
  // write logic for sending otp to user's phone

  phoneVerificationStep.value = 2;
}

const verifyOTP = ()=>{
  // write logic for verifying otp here

  phoneVerificationStep.value = 3;
}

const Selectedcurrency  = ref ('USD');
const Selectedcurrency_code = ref ('$');
const pageNumber = ref(1);
const phoneCode = ref('+61');
const flag = ref('');
const selectedTimezone  = ref ('Africa, Lagos') 

</script>
<style>
.settings-header {
border-radius: 16px;
background: rgba(245, 249, 253, 0.54);
padding: 27px 16px;
width: 100%;
/* margin-top: 30px; */
}
.header-text1{
color: var(--Gray-Dark, #323232);
font-feature-settings: 'clig' off, 'liga' off;
font-size: 12px;
font-style: normal;
font-weight: 400;
font-family: Manrope;
line-height: normal;
display: flex;
justify-content: center;
}
.acct-settings{
border-radius: 16px;
background: var(--secondary-background, #12181F);
display: flex;
width: 100%;
padding: 21px var(--spacing-3xl, 24px);
justify-content: space-between;
align-items: center;
}
.acct-text{
color: var(--Primary-80, #5892FF);
font-family: Manrope;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 28px; 
}

.area-num{
border-radius: 17px;
background: #161D26;
width: 109px;
height: 44px!important;
box-shadow: none !important;
position: absolute;
margin-top: 10px;
margin-left: 9px;
}

.mail-text{
  color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 28px; 
}
.input-styling1{
width: 289px;
height: 64px !important;
background: var(--secondary-background, #12181F) !important;
border-radius: 15px ;
letter-spacing: 0px;
color: var(--Gray-Medium-light, #969696);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
box-shadow: none;
}
.number-caption{
color:#969696;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.update-btn{
color: var(--Gray-Light, #D8D8D8);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
display: flex;
width: 224px;
height: 64px!important;
padding: 21px 16px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 16px;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);
text-transform: unset!important;
}

.v-switch__track ::before {
display: inline-flex;
align-items: center;
font-size: 0.5rem;
padding: 0 5px;
background-color: #12181F !important;
border-radius: 9999px;
height: 14px;
opacity: 0.6;
min-width: 36px;
cursor: pointer;
transition: 0.2s background-color cubic-bezier(0.4, 0, 0.2, 1);
}
.country-dropdown{
border-radius: 15px;
border: 0.5px solid #2f3946;
background: #141B23 !important;
backdrop-filter: blur(50px) !important;
border-radius: 20px !important;
color: white;
margin-top: 15px;
box-shadow: none  !important;
height: 320px !important;
}
.country-dropdown-light{
border-radius: 15px;
background: #fff !important;
border-radius: 20px !important;
color: black;
margin-top: 15px;
box-shadow: none  !important;
height: 320px !important;
}
.country-name{
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line {
padding-inline: 0px;
width: 100%;
}
::-webkit-scrollbar {
  display: none;
}
</style>