<template>
  <div>
    <Header :hide="true" :icon1="true" :icon3="true"  :icon2="true"/>
      <v-container style="width: 100%;">

          <div  style="margin-top: 110px; display: flex;width: 100%">
              <div class="flex-lg-and-up hidden-sm-and-down">
                <div class="">
                    <Side-nav/>
                </div>
              </div>

              <div class="mobile-col">
                <div class="security-col" style="margin-left: 28px;">
                    <div class="acct-settings" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="display: flex; justify-content: space-between">    
                        <span class="acct-text"> Security</span>
                        <span class="mail-text" :class="isDark ? 'text-dark':'text-light'">{{ pinia.state.user?.email }}</span>  
                    </div>
                    <span class="setup-text ml-2 d-flex" style="font-size: 18px;">Setup your 2FA and make your account more secure</span>
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

                            
                            
                            <v-btn @click="toggle2FA()" :class="{ 'primary-btn1': isEnabled, 'toggled': !isEnabled }" class="tggle-btn" style="width: 100px; height: 60px;">
                              {{ isEnabled ? 'Enable' : 'Disable' }}
                            </v-btn>
                       
                            <v-dialog v-model="dialog" max-width="500">
                              <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 15px;">
                                <v-card-text>
                                  <h3 class="text-center">Two-Factor Authentication</h3>
                                  <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                    <div class="qr-code mt-7" v-html="twoFactorCodeUrl"></div>
                                    <span style="font-size: 14px; font-weight: 700; margin-top: 10px; color: #2873FF;">Scan the QR code with your Google Authenticator</span>
                                  </div>

                                <div style="display: flex; justify-content: center; margin-top: 20px; margin-bottom: 5px;">
                                  <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 14px;">Or</span>
                                </div>

                                  <div style="display: flex; flex-direction: column; position: relative;">
                                    <input class="copy-link-box pl-4 mt-4" :class="isDark ? 'text-dark':'text-light'" disabled  v-model="twoFactorCode" style="align-content: baseline; width: 80%; margin: auto;"/>
                                      <v-btn @click="copyToClipboard(twoFactorCode)" variant="plain" style=" background: inherit !important; box-shadow: none; position: absolute; right: 8%; margin-top: 5.5%;">
                                        <img v-if="!copied" src="/svg/copy.svg"/>
                                        <h4 style="color: green; font-weight: 400; text-transform: lowercase; letter-spacing: 0px;" v-else>Copied!</h4>
                                      </v-btn>
                                      <span :class="isDark ? 'text-dark':'text-light'" style="font-size: 14px; font-weight: 400; margin-top: 10px; display: flex; justify-content: center;">Copy and Paste this code into your Google Authenticator</span>

                                      
                                        <v-alert text="A 6 digit code will be provided for you from google which will be needed when next you login"
                                        
                                          type="info" variant="tonal" style="font-size: 14px; margin-top: 20px; border-radius: 15px;"
                                        ></v-alert>
                                    
                                  </div>
                                </v-card-text>

                              </v-card>
                            </v-dialog>
                           

                        </div>
                        
                      <div class="ml-2" style="margin-top: 42px; width: 99%;">
                          <span class="pswrd-mgt" style="font-weight: 700; font-size: 18px;">Change Password</span>
                          <div class="d-md-flex">
                            <v-text-field class="password-styling firstPassword pl-4 me-4" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" :type="isToggled ? 'text' : 'password'" placeholder="Enter current password" v-model="OldPassword" variant="plain">   
                              <div  class="eye-icon">
                                <span  v-if="isToggled"  @click="togglePassword()" >
                                  <img src="/svg/invisible.svg">
                                </span>
                                <span v-else @click="togglePassword()">
                                  <img src="/svg/visible.svg">
                                </span>
                              </div>
                            </v-text-field> 

                            <v-text-field class="password-styling pl-4" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" :type="isToggled ? 'text' : 'password'" placeholder="Enter new password" v-model="NewPassword" variant="plain">   
                              <div  class="eye-icon">
                                <span  v-if="isToggled"  @click="togglePassword()" >
                                  <img src="/svg/invisible.svg">
                                </span>
                                <span v-else @click="togglePassword()">
                                  <img src="/svg/visible.svg">
                                </span>
                              </div>
                            </v-text-field>  

                          </div>

                          <div class="d-md-flex">
                          
                            <v-text-field class="password-styling pl-4 me-4" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" :type="isToggled ? 'text' : 'password'" placeholder="confirm new password" v-model="ConfirmNewPassword" variant="plain">   
                              <div  class="eye-icon">
                                <span  v-if="isToggled"  @click="togglePassword()" >
                                  <img src="/svg/invisible.svg">
                                </span>
                                <span v-else @click="togglePassword()">
                                  <img src="/svg/visible.svg">
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
    console.log('Calling Init2fa'); // Added logging
    const data = await Init2fa(); 
    console.log('Init2fa response:', data); 

    if (data.success) {
      console.log('2FA initialization successful'); // Added logging
      pinia.state.isTwoFactorSet = true;

      loading.value = false;

      twoFactorData.value = data.data;

      dialog.value = true

      twoFactorCodeUrl.value = twoFactorData.value.auth_url_img;

      twoFactorCode.value = twoFactorData.value.code;
    
      isEnabled.value = true;
      
      // pinia.setTwoFactor(two_factor)
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
    // pinia.setUser(user)
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
font-size: 20px;
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
margin-top: 20px;
} 

.coin-name{
color: white !important;
}
.coin-name-light{
color: #10192D;
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
width: 100%;
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
    margin-top: 28px;
 }
 .primary-btn1{
  height: 50px !important;
  margin-top: 28px !important;
 }
}
</style>