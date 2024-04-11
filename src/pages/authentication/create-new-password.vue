<template>
<div class="section">
  <Header/>
  <v-container class="form-layout overflow-hidden">
    <v-row no-gutters  class="">

      <v-col dense cols="md-5" class="form" :class="isDark ? 'form':'form-light'" style="padding: 0px 70px;">
        <div style="margin-top: 150px;">
          <span class="card-title">Create new password</span>
            <span class="password-subtitle" style="margin-bottom:39px;">Choose a strong password that meets all requirements.</span>
         
              <div class="position-relative" style="margin-top: 27px;">
                <span style="color: #C3CDDB;font-family: Manrope; font-size: 12px; font-style: normal; font-weight: 700; line-height: 150%;">New Password </span>
              <v-text-field class="input-styling" style="margin-top:8px;" :type="isToggled ? 'text' : 'password'"
                placeholder="Password"
                v-model.trim="password" variant="text"  persistent-hint :rules="Passwordrules">

                
                <v-icon class="prepend-inner-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <g clip-path="url(#clip0_649_13096)">
                      <path d="M14.6836 22.9448C9.1606 22.9448 4.6836 18.4678 4.6836 12.9448C4.6836 7.42182 9.1606 2.94482 14.6836 2.94482C20.2066 2.94482 24.6836 7.42182 24.6836 12.9448C24.6836 18.4678 20.2066 22.9448 14.6836 22.9448ZM14.6836 20.9448C16.8053 20.9448 18.8402 20.102 20.3405 18.6017C21.8407 17.1014 22.6836 15.0666 22.6836 12.9448C22.6836 10.8231 21.8407 8.78826 20.3405 7.28797C18.8402 5.78768 16.8053 4.94482 14.6836 4.94482C12.5619 4.94482 10.527 5.78768 9.02675 7.28797C7.52646 8.78826 6.6836 10.8231 6.6836 12.9448C6.6836 15.0666 7.52646 17.1014 9.02675 18.6017C10.527 20.102 12.5619 20.9448 14.6836 20.9448ZM13.6836 13.7368C13.1572 13.5071 12.726 13.1031 12.4624 12.5928C12.1988 12.0825 12.119 11.497 12.2363 10.9348C12.3537 10.3725 12.661 9.86784 13.1067 9.50557C13.5524 9.1433 14.1093 8.94554 14.6836 8.94554C15.258 8.94554 15.8148 9.1433 16.2605 9.50557C16.7062 9.86784 17.0135 10.3725 17.1309 10.9348C17.2482 11.497 17.1684 12.0825 16.9048 12.5928C16.6412 13.1031 16.21 13.5071 15.6836 13.7368V16.9448H13.6836V13.7368Z" fill="#C4C4C4"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_649_13096">
                        <rect width="23.5355" height="24" fill="white" transform="translate(0.613289 0.944824)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </v-icon>
                <v-icon class="prepend-inner-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="15" viewBox="0 0 2 15" fill="none">
                  <path opacity="0.4" d="M1.06026 1.31102V14.311" stroke="#C3CDDB" stroke-linecap="round"/>
                </svg>
              </v-icon>
              <!-- <ul>
                <li v-for="(rule, index) in Passwordrules" :key="index" :class="{ 'text--red': !rule.valid, 'text--green': rule.valid }">
                  <v-icon>{{ rule.valid ? 'mdi-check' : 'mdi-close' }}</v-icon> {{ rule.text }}
                </li>
              </ul> -->
              <!-- <div class="password-hint" hint="passwordHint"></div> -->
            </v-text-field> 
            <div  class="position-relative">

              <span  v-if="isToggled"  @click="togglePassword()"  class="eye-icon">
                 <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <path d="M10.3561 6.9924L6.95581 10.2237C6.51901 9.80864 6.25021 9.24028 6.25021 8.60807C6.25021 7.34363 7.32541 6.32187 8.65597 6.32187C9.32125 6.32187 9.91933 6.57731 10.3561 6.9924Z" stroke="#8E9BAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.567 4.62956C11.391 3.78661 10.047 3.32681 8.656 3.32681C6.28384 3.32681 4.07295 4.65511 2.53407 6.95408C1.92927 7.85451 1.92927 9.368 2.53407 10.2684C3.06495 11.0603 3.68319 11.7436 4.35519 12.2928" stroke="#8E9BAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.25021 13.4167C7.01629 13.7233 7.82941 13.8893 8.65597 13.8893C11.0281 13.8893 13.239 12.561 14.7779 10.262C15.3827 9.36161 15.3827 7.84812 14.7779 6.94769C14.5561 6.61561 14.3142 6.3027 14.0656 6.00894" stroke="#8E9BAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.0147 9.05508C10.84 9.95551 10.0672 10.6899 9.11966 10.8559" stroke="#8E9BAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.95581 10.2237L1.93597 14.9941" stroke="#8E9BAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.376 2.22202L10.3561 6.99238" stroke="#8E9BAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              
              <span v-else @click="togglePassword()" class="eye-icon">
                 <img src="/svg/visible.svg">
              </span>
              
            </div>
            </div>
          <div style="margin-top:65px;">
          <NuxtLink to="/authentication/login"> <Button buttonText="Continue"  :disabled="!isFormValid" @click.prevent="isFormValid ? login() : null"  /></NuxtLink>
          </div> 
            <div class="d-flex" style="margin-top:43px; margin-bottom: 287px">
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
</div>   
</template>
<script setup>
import { ref } from 'vue'

import { useTheme } from 'vuetify';

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);

const isToggled = ref(true);
const togglePassword = () => {
  isToggled.value = !isToggled.value;
};

const password = ref('');
const isFormValid = ref(false);

const Passwordrules = [
  (v) => !!v || 'Password is required',
  (v) => v.length >= 6 || 'Password must be at least 6 characters',
  (v) => /[A-Z]+/.test(v) || 'One uppercase letter',
  (v) => /[a-z]+/.test(v) || 'One lowercase letter',
  (v) => /[0-9]+/.test(v) || 'One Numeral',
  (v) => /[^a-zA-Z0-9]+/.test(v) || 'One Special Character'
];

 const login =  () => {
  if (!isFormValid.value) {
    // Show an error message or highlight invalid fields (optional)
    return; // Prevent login if password is invalid

    
  }
};
watch(password, (newValue) => {
  isFormValid.value = Passwordrules.every(rule => rule(newValue) === true);
});
</script>
<style scoped>
.carousel-styling{
max-height: 550px;
position: relative;
top: 8%;
bottom: 0
} 
.eye-icon{
bottom: 16px; 
right: 22% ;
cursor: pointer;
position: absolute;
}   

.password-hint {
  color: red;
}

.password-hint span {
  color: green;
}
</style>