<template>
<div class="section">
  <Header/>
  <v-container class="form-layout overflow-hidden">
    <v-row no-gutters  class="">

      <v-col dense cols="md-5" class="form" style="padding: 0px 70px;">
        <div class="" style="margin-top:55.88px; margin-bottom:55.88px;">
          <span class="card-title">Reset Your Password</span>
            <span class="password-subtitle" style="margin-bottom:39px;">Verification code sent to +2349038565023. Please enter the code below:</span>
          <span class="otp-text">Enter code</span>
          <v-otp-input :length="4" :loading="loading"  v-model="otp" :disabled="validating" variant=""></v-otp-input>
          <div class="code-validation-text">
            <span>Code valid for 30 minutes</span>
          </div>
          <div class="d-flex" style="margin-top:23px;">
            <span class="resend-code me-2">Resend code</span> 
                <span class="me-2" style="color:white">or</span>
            <span class="resend-code">Verify Later</span>
          </div>
          <div style="margin-top:65px;">
            <NuxtLink to="/authentication/create-new-password">  <Button buttonText="Request New Password" :loading="validating" @click="onClick"  /></NuxtLink>
          </div>
         <div class="d-flex" style="margin-top:43px; margin-bottom: 137px">
          <img src="/svg/arrow-left.svg" class="me-3" />
          <small><NuxtLink to="/authentication/login"><span class="login-text">Back to login</span></NuxtLink></small>
        </div>

             
        </div>
      </v-col>
     
      <v-col cols="7">
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

const  otp = ref ('');
const validating = ref (false);

</script>
<style scoped>
.carousel-styling{
  max-height: 550px;
    position: relative;
    top: 8%;
    bottom: 0
} 


</style>