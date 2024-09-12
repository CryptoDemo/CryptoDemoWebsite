<template>
  <div>
    <Header :hide="true" :icon1="true" :icon3="true"  :icon2="true" :wallet="true"/>
      <v-container>

          <div  style="margin-top: 110px; display: flex;">
              <div class="flex-lg-and-up hidden-sm-and-down">
                <div class="">
                    <Side-nav/>
                </div>
              </div>

              <div class="mobile-col me-3" style="width: 100%;">
                <div class="security-col" style="margin-left: 28px;">
                    <div class="acct-settings" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="display: flex; justify-content: space-between">    
                        <span class="acct-text"> Security</span>
                        <span class="mail-text" :class="isDark ? 'text-dark':'text-light'">{{ pinia.state.user?.email }}</span>  
                    </div>
                    <section>
                      
                      <div style="margin-top:35px !important; display:flex; justify-content: space-between;">
                          <div class="d-flex">
                            <img src="/svg/2fa-dark.svg" class="me-3" style="display: flex; align-self: start;" v-if="theme.global.current.value.dark"/>
                            <img src="/svg/lock-circle (1).svg" class="me-3" style="display: flex; align-self: start;" v-else/>

                              <div style="display: grid;">
                                <span class="pswrd-mgt" :class="isDark ? 'coin-name':'coin-name-light'">Login 2-Step Verification</span>
                                <span class="second-text" :class="isDark ? 'text-dark':'text-light'" style="margin-top: 4px;">The Login 2step Verification adds an extra layer of security to your account. </span>
                              </div>
                          </div>

                                                    
                          <v-btn @click="toggle2FA()" :class="{ 'primary-btn1': isEnabled, 'toggled': !isEnabled }" class="tggle-btn" style="width: 100px; height: 60px; font-weight: 600">
                            {{ isEnabled ? 'Enable' : 'Disable' }}
                          </v-btn>
                      
                          <v-dialog v-model="dialog" max-width="500">
                            <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 15px;">
                              <v-card-text>
                                <h3 class="text-center">Two-Factor Authentication</h3>
                                <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                  <div class="qr-code mt-7" v-html="twoFactorCodeUrl"></div>
                                  <span class="scan-text" style="font-size: 14px; font-weight: 700; margin-top: 10px; color: #2873FF;">Scan the QR code with your Google Authenticator</span>
                                </div>

                              <div style="display: flex; justify-content: center; margin-top: 20px; margin-bottom: 5px; font-weight: 600;">
                                <span style="font-size: 14px;">Or</span>
                              </div>

                                <div style="display: flex; flex-direction: column; position: relative;">
                                  <input class="copy-link-box pl-4 mt-4" :class="isDark ? 'text-dark':'text-light'" disabled  v-model="twoFactorCode" style="align-content: baseline; width: 80%; margin: auto;"/>
                                    <v-btn @click="copyToClipboard(twoFactorCode)" variant="plain" style=" background: inherit !important; box-shadow: none; position: absolute; right: 8%; margin-top: 5.5%;">
                                      <img v-if="!copied" class="copied-img" src="/svg/copy.svg"/>
                                      <h4 style="color: green; font-weight: 400; text-transform: lowercase; letter-spacing: 0px;" v-else>Copied!</h4>
                                    </v-btn>
                                    <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 14px; font-weight: 400; margin-top: 10px; display: flex; justify-content: center;">Copy and Paste this code into your Google Authenticator</span>

                                    <v-alert class="flex-lg-and-up hidden-sm-and-down" text="A 6 digit code will be provided for you from google which will be needed when next you login" type="info" variant="tonal" style="font-size: 14px; margin-top: 20px; border-radius: 15px;"></v-alert> 
                                </div>
                              </v-card-text>

                            </v-card>
                          </v-dialog>
                      </div>
                      
                      <div style="margin-top:35px !important; display:flex; justify-content: space-between;">
                          <div class="d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="me-3">
                              <path d="M9 11V10C9 8.34 9.5 7 12 7C14.5 7 15 8.34 15 10V11" stroke="#8e9bae" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M12 14.6004C12.3314 14.6004 12.6 14.3318 12.6 14.0004C12.6 13.669 12.3314 13.4004 12 13.4004C11.6686 13.4004 11.4 13.669 11.4 14.0004C11.4 14.3318 11.6686 14.6004 12 14.6004Z" stroke="#8e9bae" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M14.5 17H9.5C7.5 17 7 16.5 7 14.5V13.5C7 11.5 7.5 11 9.5 11H14.5C16.5 11 17 11.5 17 13.5V14.5C17 16.5 16.5 17 14.5 17Z" stroke="#8e9bae" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#8e9bae" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                              <div style="display: grid;">
                                <span class="pswrd-mgt" :class="isDark ? 'coin-name':'coin-name-light'">Set Transaction Pin</span>
                                <span class="second-text" :class="isDark ? 'text-dark':'text-light'" style="margin-top: 4px;">The  4-digit transaction PIN adds an extra layer of security to your account. </span>
                              </div>
                          </div>

                                                    
                          <v-btn @click="pindialog = true" class="primary-btn1" style="width: 100px; height: 60px; font-weight: 600">
                            Set Pin
                          </v-btn>
                      
                          <v-dialog v-model="pindialog" max-width="500">
                            <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 15px;">
                              <v-card-text>
                              <h3 class="text-center">Set Transaction Pin</h3>
                              <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 14px; display: flex; justify-content: center;">Set transfer pin to authorize transactions</span>

                        
                              <div style="display: flex; flex-direction: column; margin-top: 12px; margin-bottom: 20px;">
                                <v-otp-input v-model="setPinOtp" class="mx-auto" length="4" variant="underlined"></v-otp-input>
                              </div>
                        
                              <v-btn  @click="setPin()" :loading="loading" class="primary-btn1" style=" height: 50px; border-radius: 10px !important; font-weight: 600; width: 100%; color: #fff;">Set Pin</v-btn>
                          
                              </v-card-text>

                            </v-card>
                          </v-dialog>
                          
                      </div>
                      
                      <div style="margin-top:35px !important; display:flex; justify-content: space-between;">
                          <div class="d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="me-3">
                              <path d="M9 11V10C9 8.34 9.5 7 12 7C14.5 7 15 8.34 15 10V11" stroke="#8e9bae" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M12 14.6004C12.3314 14.6004 12.6 14.3318 12.6 14.0004C12.6 13.669 12.3314 13.4004 12 13.4004C11.6686 13.4004 11.4 13.669 11.4 14.0004C11.4 14.3318 11.6686 14.6004 12 14.6004Z" stroke="#8e9bae" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M14.5 17H9.5C7.5 17 7 16.5 7 14.5V13.5C7 11.5 7.5 11 9.5 11H14.5C16.5 11 17 11.5 17 13.5V14.5C17 16.5 16.5 17 14.5 17Z" stroke="#8e9bae" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#8e9bae" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                              <div style="display: grid;">
                                <span class="pswrd-mgt" :class="isDark ? 'coin-name':'coin-name-light'">Recover Transaction Pin</span>
                                <span class="second-text" :class="isDark ? 'text-dark':'text-light'" style="margin-top: 4px;">Click on the reset pin button to change transaction pin. </span>
                              </div>
                          </div>

                                                    
                          <v-btn @click="recoverPindialog = true; recoverPin()" class="primary-btn1" style="width: 100px; height: 60px; font-weight: 600;">
                            Reset Pin
                          </v-btn>
                      
                          <v-dialog v-model="recoverPindialog" max-width="500">
                            <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 15px;">
                              <v-card-text>
                              <h3 class="text-center">Set Transaction Pin</h3>
                              <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 14px; display: flex; justify-content: center;">Set transfer pin to authorize transactions</span>

                        
                              <div style="display: flex; flex-direction: column;">
                                <v-otp-input v-model="Newotp" length="4" class="mx-auto" variant="underlined"></v-otp-input>  
                                <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 14px; display: flex; justify-content: center;">Enter new transfer pin here</span>
                              </div>
                          
                              <div style="display: flex; flex-direction: column; margin-top: 5px; margin-bottom: 15px;">
                                <v-otp-input v-model="Msgotp" length="4" class="mx-auto" variant="underlined"></v-otp-input>
                                <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 14px; display: flex; justify-content: center;">Enter the 4 digit pin sent to your email</span>
                              </div>

                              <v-btn  @click="changePin()" :loading="loading" class="primary-btn1" style=" height: 50px; border-radius: 10px !important; font-weight: 600; width: 100%; color: #fff;">Reset pin</v-btn>
                          
                              </v-card-text>

                            </v-card>
                          </v-dialog>
                          
                      </div>
                        
                      <div class="ml-2" style="margin-top: 42px; width: 99%;">
                          <span class="pswrd-mgt" style="font-weight: 700; font-size: 18px;">Change Password</span>
                          <div class="d-md-flex">
                            <v-text-field class="password-styling firstPassword pl-4 me-4" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" :type="isToggled ? 'text' : 'password'" placeholder="Enter current password" v-model="OldPassword" variant="plain" style="margin-top: 20px;">   
                              <div  class="eye-icon">
                                <span  v-if="isToggled"  @click="togglePassword()" >
                                  <img src="/svg/visible.svg">
                                </span>
                                <span v-else @click="togglePassword()">
                                  <img src="/svg/invisible.svg">
                                </span>
                              </div>
                            </v-text-field> 

                            <v-text-field class="password-styling pl-4" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" :type="isToggled ? 'text' : 'password'" placeholder="Enter new password" v-model="NewPassword" variant="plain" style="margin-top: 20px;">   
                              <div  class="eye-icon">
                                <span  v-if="isToggled"  @click="togglePassword()" >
                                  <img src="/svg/visible.svg">
                                </span>
                                <span v-else @click="togglePassword()">
                                  <img src="/svg/invisible.svg">
                                </span>
                              </div>
                            </v-text-field>  

                          </div>

                          <div class="d-md-flex">
                          
                            <v-text-field class="password-styling pl-4 me-4" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" :type="isToggled ? 'text' : 'password'" placeholder="confirm new password" v-model="ConfirmNewPassword" variant="plain" style="margin-top: 20px;">   
                              <div  class="eye-icon">
                                <span  v-if="isToggled"  @click="togglePassword()" >
                                  <img src="/svg/visible.svg">
                                </span>
                                <span v-else @click="togglePassword()">
                                  <img src="/svg/invisible.svg">
                                </span>
                              </div>
                            </v-text-field>  
                            
                            <v-btn  @click="UserPasswordUpdate()" :loading="loading" class="primary-btn1 mt-5" style=" align-self: center; height: 60px; font-weight: 600; width: 49%; color: #fff;">Change Password</v-btn>
                          </div>
                          <p v-if="errorMessage" style="color: red; font-size: 14px;">{{ errorMessage }}</p>
                          <p v-if="successMessage" style="color: #35B233; font-size: 14px;">{{ successMessage }}</p>
                      </div>


                    </section>
                    <div style="margin-bottom: 220px;">
                      <ActivityLog/>
                    </div>
                </div>
              </div>     
          </div>
      </v-container>   
    <Footer class="desktop-footer"/>
    <Mobile-footer class="mobile-footer"/>  
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import { passwordUpdate, Init2fa, Remove2fa } from "@/composables/requests/users";
import { set_Pin, Init_pin_recovery, reset_Pin} from "@/composables/requests/users";

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();
const loading = ref(false);
const OldPassword= ref('');
const NewPassword= ref('');
const ConfirmNewPassword= ref('');
const isToggled = ref(true);
const errorMessage = ref('');
const successMessage = ref('');
const dialog = ref(false);
const pindialog = ref(false);
const recoverPindialog = ref(false);
const loading_pin = ref(false)
const setPinOtp = ref("");
const Newotp = ref("");
const Msgotp = ref("");


const togglePassword = () => {
  isToggled.value = !isToggled.value;
};
const isEnabled= ref(false)

const twoFactorData = ref();

const twoFactorCodeUrl = ref();

const twoFactorCode = ref();


const toggle2FA = async () => {
  if (!pinia.state.isTwoFactorSet) {
    await initialize2FA();
  } else {
    await terminate2FA();
  }
};

const initialize2FA = async () => {
 
  try {
  
    const data = await Init2fa(); 


    if (data.success) {
      console.log('2FA initialization successful'); // Added logging
      pinia.state.isTwoFactorSet = true;

      loading.value = false;

      twoFactorData.value = data.data;

      dialog.value = true

      twoFactorCodeUrl.value = twoFactorData.value.auth_url_img;

      twoFactorCode.value = twoFactorData.value.code;
    
      isEnabled.value = true;
      
     
    } else {
      console.log('2FA initialization failed'); // Added logging
      loading.value = false;
      push.error(data.message, { duration: 2000 });
    }
  } catch (e) {
    console.log('Error:', e); // Added logging
    push.error(`${e}`);
  }
};

const terminate2FA = async () => {
  try {
    const data = await Remove2fa();
    console.log('Remove2fa response:', data); 

    if (data?.success) {
      console.log('2FA terminated successfully'); // Log success

      pinia.state.isTwoFactorSet = false;

      twoFactorData.value = null;

      loading.value = false;

      isEnabled.value = false;
      
      dialog.value = false;
    
    } else {

      console.log('2FA termination failed'); // Log failure
      loading.value = false;
      push.error(data.message, { duration: 2000 });
    }
  } catch (e) {
    // Catch any errors during the process
    console.log('Error:', e); // Log the error
    push.error(`${e}`);
  }
};

const UserPasswordUpdate = async () => {
  if (NewPassword.value !== ConfirmNewPassword.value) {
    errorMessage.value = 'New Passwords does not match';
    return
  }
  loading.value = true;
  const updatePassword = {
    old_password: OldPassword.value ,
    new_password: ConfirmNewPassword.value,
  }
  console.log(updatePassword)
  try {
  const data = await passwordUpdate(updatePassword);
  if (data.success) {
  
    successMessage.value = 'password changed succesfully';
    OldPassword.value = '';
    NewPassword.value = '';
    ConfirmNewPassword.value = '';
    loading.value = false 
  } else{
    loading.value = false 
    push.error(data.message, { duration: 2000 })
  }
}catch(e){
  console.log(e)
  push.error(`${e}`)
}
 
};

watch([NewPassword, ConfirmNewPassword], () => {
      errorMessage.value = '';
});

const copied = ref(false);

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
  copied.value = true;
  setTimeout(() => {
      copied.value = false;
    }, 2000); // Change the text back to 'Copy' after 2 seconds
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

const setPin = async () => {
  loading_pin.value = true;
  const payload = {
    pin: setPinOtp.value,
  }

  try {
    const data = await set_Pin(payload);
    setPinOtp.value  = "";
    if (data.success) {
        push.success(data.message);
        pinia.state.user.is_pin_set = true
    } else {
    loading_pin.value = false;
      push.error(data.message);
    }
  } catch (e) {
    loading_pin.value = false;
    console.log(e);
    push.error(`${e}`);
  }
};


const recoverPin = async () => {
  loading_pin.value = true;
  
  try {
    const data = await Init_pin_recovery();
    
    if (data.success) {
      push.success('a 4-digit pin has been sent to your mail');
    } else {
      loading_pin.value = false;
      push.error(data.message);
    }
  } catch (e) {
    loading_pin.value = false;
    console.log(e);
    push.error(`${e}`);
  }
};

const changePin = async () => {
  loading_pin.value = true;
  const payload = {
    pin: Newotp.value,
    code: Msgotp.value,
  }

  try {
    const data = await reset_Pin(payload);
    Newotp.value  = "";
    Msgotp.value  = "";
    if (data.success) {
        push.success(data.message);
        Msgotp.value = "";
        Newotp.value = "";
    } else {
    loading_pin.value = false;
      push.error(data.message);
    }
  } catch (e) {
    loading_pin.value = false;
    console.log(e);
    push.error(`${e}`);
  }
};

</script>
<style>

.mail-text{
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 28px; 
}

.toggled {
border-radius: 16px;
background: #10192D;
height: 60px !important;
text-transform: unset!important;
letter-spacing: 0px;
box-shadow: none !important;
color: white;
}

.second-text{
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.update-btn{
color: white;
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
box-shadow: none !important;
}
.setup-text{
font-family: Manrope;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 16px;
}
.pswrd-mgt{
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

.eye-icon{
bottom: 5%; 
right: 18px ;
cursor: pointer;
position: absolute;
} 

.password-styling{
width: 100%;
height: 64px !important; 
align-self: flex-end;
border-radius: 16px;

} 

.coin-name{
color: white !important;
}
.coin-name-light{
color: #10192D;
}

.pin-form :deep(.v-otp-input .v-field) {
  height: 60px !important;
  width: 60px !important;
  justify-content: space-between !important;
  border-radius: 15px;
  border: 1px solid #303a46;
  background: inherit !important;
  border-radius: 15px;
}

::-webkit-input-placeholder {
color: #808195!important;
font-size: 0.875rem !important;
font-style: normal;
font-size: 14px;
font-weight: 400;
line-height: normal;
display: flex !important;
width:190px !important;
}
.profile-cards-dark{
background:  #10192D!important;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px !important;
height: fit-content;
}
.profile-cards-light{
background: #F8FAFC!important;
height: fit-content;
}

.copy-link-box{
border-radius: 13.527px;
border: 0.902px solid rgba(142, 155, 174, 0.5);
display: flex;
align-items: center;
align-self: stretch; 
height: 51px; 
outline: none;
position: relative;
color: #AEB4BF;
font-family: Manrope;
font-size: 12.625px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 17.675px */
}


@media screen and (max-width: 600px) {
  .security-col {
   margin-left: 0px !important;
  }
  .mobile-col{
    width: 100% !important;
  }
  .setup-text{
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  }
  .pswrd-mgt {
  font-size: 14px;
  font-weight: 600;
 }
 .second-text {
  font-size: 12px;
 }
 .tggle-btn{
  height: 45px !important;
 }
 .firstPassword{
  margin-top: 16px !important;
}
 .password-styling {
  width: 98%;
  margin-top: 10px !important;
 }
 .primary-btn1{
  height: 50px !important;
  margin-top: 28px !important;
 }
 .scan-text{
  font-size: 11px !important;
 }
 .copy-link-box{
  width: 100% !important;
  white-space: nowrap !important;   
  overflow: hidden !important;  
  text-overflow: ellipsis !important; 
  display: inline-block !important;
  display: -webkit-box !important; 
  -webkit-box-orient: vertical !important; 
  -webkit-line-clamp: 1 !important;
  line-clamp: 1 !important;
  padding-right: 60px;
 }
 .acct-text{
  font-size: 18px !important;
 }
 .copied-img{
  position: absolute;
  right: 0;
  margin-top: 20px;
 }
 
}
</style>