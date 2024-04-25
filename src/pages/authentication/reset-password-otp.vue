<template>
  <img src="https://res.cloudinary.com/dfejrmsq5/image/upload/v1711619522/Background_pattern_cr8ghg.svg" class="position-absolute bg-vector" style="opacity: 0.4; left: 0; height: 90%;  right: 0; display: flex; margin: auto" v-if="theme.global.current.value.dark"/>
  <img src="https://res.cloudinary.com/dfejrmsq5/image/upload/v1711619522/Background_pattern_cr8ghg.svg" class="position-absolute bg-vector" style="opacity: 0.2; left: 0;  right: 0; display: flex; margin: auto" v-else/>
<div class="section">
  <Header/>
  <v-container class="form-layout overflow-hidden">
    <v-row no-gutters  class="">

      <v-col dense cols="md-5" class="form" :class="isDark ? 'form':'form-light'" style="padding: 0px 90px;">
        <div style="margin-top: 95px;">
        
          <span class="card-title" :class="isDark ? 'card-title':'card-title-light'">Reset Your Password</span>
            <div class="card-subtitle" :class="isDark ? 'card-subtitle':'card-subtitle-light'" style="margin-top:20px;">Enter the code we've sent to <span><b> 
              {{ pinia.state.email }}</b></span> Didn't receive the code? 
            </div>
          <span class="otp-text">Enter code</span>
          <v-otp-input :length="4"  v-model="otp"  variant="plain"></v-otp-input>
          
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <div class="code-validation-text">
            <span>Valid for {{ OtpCountdown }} seconds</span>
          </div>
          <div class="d-flex" style="margin-top:23px;">
            <v-btn class="resend-code-btn" variant="plain"  :disabled="!timerFinished" @click.prevent="resendCode()">Resend code</v-btn>
          </div>
        </div>

          <div style="margin-top:65px;">
            <Button buttonText="Request New Password" :loading ="!loading" @click="continueToSetPassword()"/>
          </div>
         <div class="d-flex" style="margin-top:43px; margin-bottom: 137px">
          <img src="/svg/arrow-left.svg" class="me-3" />
          <small><NuxtLink to="/authentication/login"><span class="login-text">Back to login</span></NuxtLink></small>
        </div>

             
        </div>
      </v-col>
     
      <v-col cols="7" class="flex-lg-and-up hidden-sm-and-down">
          <div class="ma-8  carousel-styling">
          <Carousel />
        </div>
      </v-col>
    </v-row>
  </v-container>
<!-- </v-container> -->
</div>   
</template>
<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import { verifyOtp } from "@/composables/requests/auth";

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const otp = ref ('');
const pinia = useStore();
const loading= ref(false);
const router = useRouter();
const OtpCountdown = ref(60);
const timerFinished = ref(true);
const decreaseTimer = () => {
  if (OtpCountdown.value > 0) {
    OtpCountdown.value--;
  } else {
        timerFinished.value = true; // Timer finished
    }
};
onMounted(() => {
  const intervalId = setInterval(decreaseTimer, 1000);

  return () => clearInterval(intervalId);
});


const continueToSetPassword = ()=>{
console.log(otp.value)
  router.push(`/authentication/create-new-password?code=${otp.value}`);
  }

const resendCode = async() => {
  OtpCountdown.value = 60
  timerFinished.value = false;
  const Otpmsg = {
    email: pinia.state.email
  }

try {
  const data = await verifyOtp(Otpmsg);
  if (data.success) {
    // navigateTo('/authentication/login')
  } else{
    
    // OtpCountdown.value = 60
    console.error('failed to send OTP');
  }
} catch(e){
  console.log(e)
};
 
}

</script>
<style scoped>
.carousel-styling{
max-height: 550px;
position: relative;
top: 3%;
bottom: 0
} 
.form :deep(.v-otp-input .v-field){
height: 56px !important;
width: 56px !important;
justify-content: flex-start!important;
margin-top: 12px;
border-radius: 15px;
border: 1px solid #303A46;
background: inherit!important;
border-radius: 15px;
}
.form-light :deep(.v-otp-input .v-field){
height: 56px !important;
width: 56px !important;
justify-content: flex-start!important;
margin-top: 12px;
border-radius: 10px;
background: white !important;
border: 1px solid #969696;
border-radius: 15px;
}
.card-subtitle{
color: var(--Basic-White, #FFF);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */
}
.card-subtitle-light{
color: var(--Black-80, #1B2537) !important;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */
}
.v-otp-input__content{
  margin-right: 20px;
}
</style>