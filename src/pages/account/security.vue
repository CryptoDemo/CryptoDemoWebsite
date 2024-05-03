<template>
  <div>
    <Header :hide="true" :icon1="true" :icon3="true"  :icon2="true"/>
      <v-container style="width: 100%;">

          <div  style="margin-top: 110px; display: flex;">
              <div class="flex-lg-and-up hidden-sm-and-down">
                <div class="">
                    <Side-nav/>
                </div>
              </div>

              <div class="mobile-col" style="width: 70%">
                <div class="security-col" style="margin-left: 28px;">
                    <div class="acct-settings" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="display: flex; justify-content: space-between">    
                        <span class="acct-text"> Security</span>
                        <span class="mail-text" :class="isDark ? 'text-dark':'text-light'">{{ pinia.state.user?.email }}</span>  
                    </div>
                    <span class="setup-text ml-2" :class="isDark ? 'card-text-dark':'card-text-light'">Setup your 2FA and make your account more secure</span>
                    <section>
                      
                        <div style="margin-top:35px !important; display:flex; justify-content: space-between;">
                            <div class="d-flex">
                                  <img src="/svg/lock-circle (1).svg" class="me-3" style="display: flex; align-self: start;"/>
                                <div style="display: grid;">
                                  <span class="pswrd-mgt" :class="isDark ? 'text-dark':'text-light'">Login 2-Step Verification</span>
                                  <span class="second-text" :class="isDark ? 'text-dark':'text-light'" style="margin-top: 4px;">The Login 2step Verification adds an extra layer of security to your account. </span>
                                </div>
                            </div>

                            <v-btn :class="{ 'primary-btn1': isEnabled, 'toggled': !isEnabled }" class="tggle-btn" @click="toggleButton" style="width: 100px; height: 60px;">
                              {{ isEnabled ? 'Enable' : 'Disable' }}
                            </v-btn>
                        </div>
                        
                      <div class="ml-2" style="margin-top: 42px;">
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
                            <v-btn  @click="UserPasswordUpdate()" :loading="loading" class="primary-btn1 mt-5" style=" align-self: center; height: 60px;">Change Password</v-btn>
                          </div>
                      </div>
                    </section>
                  <ActivityLog/>
                </div>
              </div>     
          </div>
      </v-container>   
    <Footer class="desktop-footer"/>
    <Mobile-footer class="mobile-footer"/>  <Footer/>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import { passwordUpdate, } from "@/composables/requests/users";

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
const toggleButton = () => {
  isEnabled.value = !isEnabled.value;

};

onBeforeMount(async()=>{

if(pinia.state.twoFactor !== null){

  two_factor_val.value = pinia.state.twoFactor[0]
  code_input.value = two_factor_val.value.code
  selected_code.value = two_factor_val.value.code
  pinia.state.isTwoFactorSet = true

}else{

  try{
    const data = await fetch(`${baseURL}user/init-2fa`,{
  method: 'GET',
  headers: {
      'Content-Type': 'application/json',
      'x-access-token' : `${pinia.state.user?.token}`
  }
  })
  .then(res=>res.json());

  if(data.success){

  pinia.state.isTwoFactorSet = true

  loading.value = false
  const two_factor = [...data.data]

  two_factor.map((item,index)=>{
        if(item.code==two_factor_val.value.code){
          two_factor[index] = two_factor_val.value;
        }
  });

  pinia.setTwoFactor(two_factor)
    }else{
    loading.value = false 
    push.error(data.message, { duration: 2000 })
  }
}catch(e){
  console.log(e)
  push.error(`${e}`)
}
  }
})

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
    push.error(data.message, { duration: 900 })
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
width: 295px;
height: 64px !important; 
align-self: flex-end;
border-radius: 16px;
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