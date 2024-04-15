<template>
<div class="section">
<!-- <v-container style="top: 7rem; position: relative;"> -->
  <Header text2="Already have an account," title="Login"/>
  <v-container class="form-layout overflow-hidden" :class="isDark ? 'form-layout':'form-layout-light'">
    <v-row no-gutters  class="">

      <v-col dense cols="md-5" class="form" :class="isDark ? 'form':'form-light'" style="padding: 0px 70px;">
        <div style="margin-top:17px;">
          <span class="card-title" :class="isDark ? 'card-title':'card-title-light'">Verify Your Email</span>
            <div class="card-subtitle" :class="isDark ? 'card-subtitle':'card-subtitle-light'" style="margin-top:20px;">Enter the code we've sent to <span><b> {{ pinia.state.email }}</b></span> Didn't receive the code? 
              <span class="text-primary" style="cursor: pointer;">Change email</span> 
            </div>
          <span :class="isDark ? 'otp-text':'otp-text-light'">Enter code</span>
          
          <v-otp-input :length="4"  v-model="otp" variant="plain"></v-otp-input>
          <div class="code-validation-text">
            <span>Code valid for {{ OtpCountdown }} seconds</span>
          </div>
          <div style="margin-top:23px;">
          <span class="resend-code" @click.prevent="resendCode()">Resend code</span>
          </div>
          <div style="margin-top:48px;">
            <span class="resend-code">Verify Later</span>
          </div>
          <div style="margin-top:89px;">
            <NuxtLink to="/authentication/login">  <Button buttonText="Continue" /></NuxtLink>
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
const OtpCountdown = ref(60);
const decreaseTimer = () => {
  if (OtpCountdown.value > 0) {
    OtpCountdown.value--;
  }
};
onMounted(() => {
  const intervalId = setInterval(decreaseTimer, 1000);

  // Clear interval when component is unmounted
  return () => clearInterval(intervalId);
});

const resendCode = async() => {
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
background: #12181F!important;
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