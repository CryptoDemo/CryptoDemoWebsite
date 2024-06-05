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

              <div class="mobile-col" style="">
                <div class="security-col" style="margin-left: 28px;">
                    <div class="acct-settings" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="display: flex; justify-content: space-between">    
                        <span class="acct-text"> Security</span>
                        <span class="mail-text" :class="isDark ? 'text-dark':'text-light'">{{ pinia.state.user?.email }}</span>  
                    </div>
                    <span class="setup-text ml-2" :class="isDark ? 'card-text-dark':'card-text-light'">Setup your 2FA and make your account more secure</span>
                    <section>
                      
                        <div style="margin-top:35px !important; display:flex; justify-content: space-between;">
                            <div class="d-flex">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="31" viewBox="0 0 24 31" fill="none" class="me-3" style="display: flex; align-self: start;" v-if="theme.global.current.value.dark">
                                <path d="M12 5L20.217 6.826C20.4391 6.87536 20.6377 6.99897 20.78 7.1764C20.9224 7.35384 21 7.57452 21 7.802V17.789C20.9999 18.7767 20.756 19.7492 20.2899 20.62C19.8238 21.4908 19.1499 22.2331 18.328 22.781L12 27L5.672 22.781C4.85027 22.2332 4.17646 21.4911 3.71035 20.6205C3.24424 19.7498 3.00024 18.7776 3 17.79V7.802C3.00004 7.57452 3.07764 7.35384 3.21999 7.1764C3.36234 6.99897 3.56094 6.87536 3.783 6.826L12 5ZM12 7.049L5 8.604V17.789C5.00001 18.4475 5.16257 19.0957 5.47326 19.6763C5.78395 20.2568 6.23315 20.7517 6.781 21.117L12 24.597L17.219 21.117C17.7667 20.7518 18.2158 20.2571 18.5265 19.6767C18.8372 19.0964 18.9998 18.4483 19 17.79V8.604L12 7.05V7.049ZM12 11C12.4403 10.9998 12.8684 11.1449 13.2179 11.4129C13.5673 11.6808 13.8186 12.0566 13.9326 12.4819C14.0467 12.9072 14.0172 13.3582 13.8488 13.7651C13.6803 14.1719 13.3823 14.5118 13.001 14.732L13 19H11V14.732C10.6187 14.5119 10.3208 14.1721 10.1523 13.7653C9.98384 13.3586 9.95429 12.9076 10.0682 12.4824C10.1822 12.0571 10.4333 11.6813 10.7825 11.4133C11.1318 11.1453 11.5597 11 12 11Z" fill="#8e9bae"/>
                              </svg>
                              <img src="/svg/lock-circle (1).svg" class="me-3" style="display: flex; align-self: start;" v-else/>

                                <div style="display: grid;">
                                  <span class="pswrd-mgt" :class="isDark ? 'coin-name':'coin-name-light'">Login 2-Step Verification</span>
                                  <span class="second-text" :class="isDark ? 'text-dark':'text-light'" style="margin-top: 4px;">The Login 2step Verification adds an extra layer of security to your account. </span>
                                </div>
                            </div>

                            <v-btn :class="{ 'primary-btn1': isEnabled, 'toggled': !isEnabled }" class="tggle-btn" @click="Init2fa()" style="width: 100px; height: 60px;">
                              {{ isEnabled ? 'Enable' : 'Disable' }}
                            </v-btn>
                        </div>
                        
                      <div class="ml-2" style="margin-top: 42px; width: 100%;">
                          <span class="pswrd-mgt" :class="isDark ? 'card-text-dark':'card-text-light'" style="font-weight: 700;">Change Password</span>
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
                            <v-btn  @click="UserPasswordUpdate()" :loading="loading" class="primary-btn1 mt-5" style=" align-self: center; height: 60px; color: #fff;">Change Password</v-btn>
                          </div>
                      </div>
                    </section>
                  <ActivityLog/>
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
import { passwordUpdate, Init2fa } from "@/composables/requests/users";

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();
const loading = ref(false);
const OldPassword= ref('');
const ConfirmNewPassword= ref('');
const isToggled = ref(true);
const togglePassword = () => {
  isToggled.value = !isToggled.value;
};
const isEnabled= ref(false)
// const initialize2FA = () => {
//   isEnabled.value = !isEnabled.value;

// };

const initialize2FA = async () => {
  isEnabled.value = !isEnabled.value;
  try{
    const data = await Init2fa (Initialize2fa);

  if(data.success){

  pinia.state.isTwoFactorSet = true

  loading.value = false
  const two_factor = [...data.data]



  // pinia.setTwoFactor(two_factor)
    }else{
    loading.value = false 
    push.error(data.message, { duration: 2000 })
  }
}catch(e){
  console.log(e)
  push.error(`${e}`)
}
}


const UserPasswordUpdate = async () => {
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
    push.success('password changed succesfully')
    OldPassword.value = '';
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
font-family: Poppins;
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
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 16px;
}
.pswrd-mgt{
font-family: Poppins;
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
    width: 100%;
    margin-top: 28px;
 }
 .primary-btn1{
  height: 50px !important;
  margin-top: 28px !important;
 }
}
</style>