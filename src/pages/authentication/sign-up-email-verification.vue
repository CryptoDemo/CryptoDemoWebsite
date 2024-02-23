<template>
<div class="section">
<!-- <v-container style="top: 7rem; position: relative;"> -->
  <Header text2="Already have an account," title="Login"/>
  <v-container class="form-layout overflow-hidden">
    <v-row no-gutters  class="">

      <v-col dense cols="md-5" class="form" style="padding: 0px 70px;">
        <div class="" style="margin-top:55.88px; margin-bottom:55.88px;">
          <span class="card-title">Verify Your Email</span>
            <div class="card-subtitle" style="margin-top:20px;">Enter the code we've sent to <span><b> User@gmail.com.</b></span> Didn't receiver the code? 
              <span class="text-primary" style="cursor: pointer;">Change email</span> 
            </div>
          <span class="otp-text">Enter code</span>
          <v-otp-input :length="4" :loading="loading"  v-model="otp" :disabled="validating" variant=""></v-otp-input>
          <div class="code-validation-text">
            <span>Code valid for 30 minutes</span>
          </div>
          <div style="margin-top:23px;">
          <span class="resend-code">Resend code</span>
          </div>
          <div style="margin-top:48px;">
            <span class="resend-code">Verify Later</span>
          </div>
          <div style="margin-top:89px;">
            <NuxtLink to="/authentication/login">  <Button buttonText="Continue" :loading="validating" @click="onClick" /></NuxtLink>
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