<template>
  <img src="https://res.cloudinary.com/dfejrmsq5/image/upload/v1711619522/Background_pattern_cr8ghg.svg" class="position-absolute bg-vector" style="opacity: 0.4; left: 0; height: 90%;  right: 0; display: flex; margin: auto" v-if="theme.global.current.value.dark"/>
  <img src="https://res.cloudinary.com/dfejrmsq5/image/upload/v1711619522/Background_pattern_cr8ghg.svg" class="position-absolute bg-vector" style="opacity: 0.2; left: 0;  right: 0; display: flex; margin: auto" v-else/>
<div class="section">
  <Header text2="Already have an account," title="Login"/>
  <v-container class="form-layout overflow-hidden" :class="isDark ? 'form-layout':'form-layout-light'">
    <v-row no-gutters  class="">

      <v-col dense cols="md-5" class="form" :class="isDark ? 'form':'form-light'" style="padding: 0px 70px;">
        <div style="margin-top: -95px;">
          <span class="card-title" :class="isDark ? 'card-title':'card-title-light'">Verify Your Email</span>
            <div class="card-subtitle" :class="isDark ? 'card-subtitle':'card-subtitle-light'" style="margin-top:20px;">Enter the code we've sent to <span><b> 
              {{ pinia.state.email }}</b></span> Didn't receive the code? 
            </div>
          <span :class="isDark ? 'otp-text':'otp-text-light'">Enter code</span>
          
          <v-otp-input :length="4"  required v-model="otp" variant="plain"></v-otp-input>

          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <div class="code-validation-text">
              <span>Valid for {{ OtpCountdown }} seconds</span>
            </div>
            <div style="margin-top:23px;">
            <v-btn class="resend-code-btn" variant="plain"  :disabled="!timerFinished" @click.prevent="resendCode()">Resend code</v-btn>
            </div>
          </div>
          <div style="margin-top:89px;">
            <Button buttonText="Continue" :loading="loading" @click.prevent="VerifyEmail()"/>
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
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import { Resend_Code, VerifyOtp } from "@/composables/requests/auth";
import { push } from 'notivue';

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const loading = ref(false);
const otp = ref ('');
const pinia = useStore();
const timerFinished = ref(true);
const OtpCountdown = ref(60);

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

const VerifyEmail = async () => {
  loading.value = true;
  const Otpmsg = {
  email: pinia.state.email,
  code: otp.value
  };
  console.log('Otpmsg:', Otpmsg); 
try {
  const data = await VerifyOtp(Otpmsg);
  if (data.success) {
    navigateTo('/authentication/login')
  } else {
    loading.value = false 
    push.error(data.message, { timeout: 90000 })
  }
}catch(e){
  console.log(e)
  push.error(`${e}`)
  loading.value = false;
}
};

const resendCode = async() => {
  OtpCountdown.value = 60
  timerFinished.value = false;
  const codeMsg = {
   email: pinia.state.email,
  }

try {
  const data = await Resend_Code(codeMsg);
  if (data.success) {
  } else{
    push.error(data.message, { timeout: 90000 })
  }
} catch(e){
  push.error(`${e}`)
};
 
};

</script>
<style scoped>
 .carousel-styling{
  max-height: 550px;
  position: relative;
  top: 8%;
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
.v-otp-input__content{
  margin-right: 20px;
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

</style>