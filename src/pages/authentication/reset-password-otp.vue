<template>
<div class="section">
  <Header/>
  <v-container class="form-layout overflow-hidden">
    <v-row no-gutters  class="">

      <v-col dense cols="md-5" class="form" :class="isDark ? 'form':'form-light'" style="padding: 0px 90px;">
        <div style="margin-top: 145px;">
          <span class="card-title">Reset Your Password</span>
            <span class="password-subtitle" style="margin-bottom:39px;">Verification code sent to {{ pinia.state.email }}. Please enter the code below:</span>
          <span class="otp-text">Enter code</span>
          <v-otp-input :length="4"  v-model="otp" :disabled="validating" variant="plain"></v-otp-input>
          <div class="code-validation-text">
            <span>Code valid for 30 minutes</span>
          </div>
          <div class="d-flex" style="margin-top:23px;">
            <span class="resend-code me-2">Resend code</span> 
                <span class="me-2" style="color:white">or</span>
            <span class="resend-code">Verify Later</span>
          </div>
          <div style="margin-top:65px;">
            <NuxtLink to="/authentication/create-new-password">  <Button buttonText="Request New Password" :loading="validating" @click=""  /></NuxtLink>
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
      <!-- <v-responsive width="100%"></v-responsive> -->
    </v-row>
  </v-container>
<!-- </v-container> -->
</div>   
</template>
<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const  otp = ref ('');
const validating = ref (false);
const pinia = useStore();

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
</style>