<template>
  <div class="section">
   <LoginBG/>
    <!-- <Header/> -->
    <auth-header/>
    <v-container class="form-layout overflow-hidden">
      <div class="section">
      <v-row no-gutters  class="">

        <v-col dense cols="md-5" class="form d-flex mx-auto" style="padding: 0px 90px;">
          <div>
          <div style="margin-top: 55px;"><span class="card-title">Reset Your Password</span></div>
            <div :class="isDark ? 'card-subtitle':'card-subtitle-light'">Enter your email address to reset your password.</div>

            
            <div class="position-relative"  style="margin-bottom: 43.13px; margin-top: 125px;" @keyup.enter="recoverPassword()">
              <v-text-field placeholder="Email Address" class="pr-14" variant="plain" :class="isDark ? 'input-styling':'input-styling-light'" v-model="email" style="font-size: 12px !important;">
                  <v-icon class="prepend-inner-icon ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 25 24" fill="none">
                      <path d="M20.2258 11.9998C20.2257 10.2167 19.6413 8.48476 18.5655 7.07901C17.4898 5.67327 15.9843 4.6743 14.2882 4.24076C12.592 3.80721 10.8025 3.96393 9.20367 4.68603C7.60486 5.40813 6.28846 6.65421 5.46349 8.22641C4.63853 9.79861 4.3523 11.6068 4.65025 13.3638C4.9482 15.1209 5.81326 16.7261 7.10805 17.9245C8.40285 19.1229 10.0532 19.8458 11.7969 19.9785C13.5407 20.1112 15.2779 19.646 16.7328 18.6568L17.8213 20.3208C16.0028 21.5574 13.8312 22.139 11.6515 21.9733C9.47177 21.8076 7.40882 20.904 5.79024 19.406C4.17166 17.9081 3.09024 15.9016 2.71771 13.7053C2.34518 11.509 2.70289 9.24875 3.73404 7.28344C4.76519 5.31814 6.41066 3.76046 8.40917 2.85777C10.4077 1.95508 12.6446 1.75913 14.7648 2.30102C16.885 2.84292 18.7669 4.0916 20.1117 5.84878C21.4564 7.60596 22.1869 9.7709 22.1871 11.9998V13.4998C22.1885 14.2497 21.9536 14.9802 21.5172 15.5837C21.0807 16.1872 20.4657 16.6317 19.7627 16.8519C19.0598 17.0721 18.3061 17.0563 17.6127 16.8067C16.9192 16.5572 16.3227 16.0871 15.911 15.4658C15.2562 16.1595 14.4188 16.6456 13.4996 16.8658C12.5803 17.0859 11.6183 17.0307 10.7291 16.7068C9.83992 16.3829 9.06134 15.804 8.48693 15.0398C7.91253 14.2756 7.56673 13.3585 7.49109 12.3987C7.41545 11.4389 7.61319 10.4773 8.06054 9.62935C8.50789 8.7814 9.18583 8.08319 10.0129 7.61864C10.84 7.15408 11.781 6.94292 12.7229 7.01054C13.6648 7.07816 14.5675 7.42168 15.3226 7.99982H17.2839V13.4998C17.2839 13.8976 17.4389 14.2792 17.7147 14.5605C17.9906 14.8418 18.3648 14.9998 18.7549 14.9998C19.145 14.9998 19.5191 14.8418 19.795 14.5605C20.0709 14.2792 20.2258 13.8976 20.2258 13.4998V11.9998ZM12.3807 8.99982C11.7988 8.99982 11.23 9.17577 10.7462 9.50541C10.2624 9.83506 9.88536 10.3036 9.66269 10.8518C9.44002 11.3999 9.38176 12.0031 9.49528 12.5851C9.60879 13.167 9.88898 13.7016 10.3004 14.1211C10.7119 14.5407 11.2361 14.8264 11.8067 14.9422C12.3774 15.0579 12.9689 14.9985 13.5065 14.7715C14.0441 14.5444 14.5036 14.1599 14.8268 13.6665C15.1501 13.1732 15.3226 12.5932 15.3226 11.9998C15.3226 11.2042 15.0127 10.4411 14.4609 9.8785C13.9092 9.31589 13.1609 8.99982 12.3807 8.99982Z" fill="#C4C4C4"/>
                    </svg>
                  </v-icon>

                  <v-icon class="prepend-inner-icon pl-2" style="position: absolute; margin-left: 40px">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="15" viewBox="0 0 2 15" fill="none" class="grey-line">
                        <path opacity="0.4" d="M1.06026 1.31102V14.311" stroke="#C3CDDB" stroke-linecap="round"/>
                    </svg>
                  </v-icon>
  
                </v-text-field>
                
                <div class="position-absolute tick-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <path d="M8.55756 14.3555C7.38453 14.3555 6.23785 14.0184 5.26251 13.3869C4.28717 12.7553 3.52699 11.8577 3.07809 10.8075C2.62919 9.75728 2.51173 8.60167 2.74058 7.48677C2.96943 6.37188 3.5343 5.34779 4.36375 4.544C5.19321 3.7402 6.25 3.19281 7.40049 2.97105C8.55098 2.74928 9.7435 2.8631 10.8272 3.29811C11.911 3.73312 12.8373 4.46978 13.489 5.41494C14.1407 6.3601 14.4885 7.47131 14.4885 8.60804C14.4885 10.1324 13.8636 11.5942 12.7514 12.6721C11.6391 13.7499 10.1305 14.3555 8.55756 14.3555ZM8.55756 13.206C9.49599 13.206 10.4133 12.9363 11.1936 12.4311C11.9739 11.9259 12.582 11.2078 12.9411 10.3676C13.3003 9.52743 13.3942 8.60294 13.2111 7.71103C13.0281 6.81911 12.5762 5.99984 11.9126 5.35681C11.249 4.71377 10.4036 4.27586 9.48322 4.09845C8.56283 3.92103 7.60881 4.01209 6.74182 4.3601C5.87483 4.7081 5.1338 5.29743 4.61244 6.05356C4.09108 6.80969 3.81281 7.69865 3.81281 8.60804C3.81281 9.82749 4.3127 10.997 5.20251 11.8593C6.09233 12.7216 7.29918 13.206 8.55756 13.206ZM7.96447 10.907L5.44975 8.46819L6.28403 7.65588L7.96447 9.27857L11.3253 6.03032L12.1646 6.84262L7.96447 10.907Z" fill="#C4C4C4"/>
                    </svg>
                </div>
                
            </div>

        
        <Button buttonText="Request New Password" :Otp="isFormValid" :loading="loading" @click="recoverPassword()"/>
        
          <div class="d-flex" style="margin-top:51px; margin-bottom: 130px">
            <img src="/svg/arrow-left.svg" class="me-3"/>
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
    </div>   
    </v-container>
</div>
</template>
<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import {accountRecovery} from "@/composables/requests/auth";
definePageMeta({
  middleware: ['auth', 'scroll-to-top']
});


const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const email = ref('')
const pinia = useStore();
const loading = ref(false);

 
const isFormValid = computed(() => validateEmail(email.value));


const recoverPassword = async () => {
  loading.value = true;

  // Object containing the email for account recovery
  const accountrec = {
    email: email.value,
  };

  // Check if email is empty
  if (!email.value) {
    push.error('Please fill out all the fields', { duration: 2000 });
    loading.value = false;
    return;
  }

  // Validate email format (basic regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    push.error('Please enter a valid email address', { duration: 2000 });
    loading.value = false;
    return;
  }

  try {
    const data = await accountRecovery(accountrec);
    
    // If recovery is successful
    if (data.success) {
      pinia.setEmail(email.value);
      navigateTo('/authentication/reset-password-otp');
    } else {
      // If recovery fails
      push.error('Failed to send OTP. Please try again.', { duration: 2000 });
    }
  } catch (e) {
    // Catch and handle errors
    push.error('An error occurred. Please try again later.', { duration: 2000 });
    console.error(e);
  } finally {
    // Stop loading indicator regardless of success or failure
    loading.value = false;
  }
};



</script>

<style scoped>
.form-layout :deep(.v-text-field .v-field--no-label input, .v-text-field .v-field--active input) {
    opacity: 1;
    margin-left: 30px;
}

.carousel-styling{
  max-height: 550px;
    position: relative;
    top: 1%;
    bottom: 0
} 
.tick-icon{
  top: 40%;
  right: 10% ;
}  

.button-base {
  background: #161D26;
  border: unset;
  color: white;
  box-shadow: none;
  text-transform: unset !important;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: unset;
  /* margin: 10px; */
}
.active {
  /* Blue background for active button */
  background-color:var(--Primary-100, #2873FF);;
  color: #fff;
  border: unset;
  border-radius: 1rem;
  text-transform: unset !important;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: unset;
}
.btn-box {
width: 260px;
height: 55px;
margin-top: 64px;
margin-bottom: 22.88px;
border-radius: 20px;
background: #161D26;
display: flex;
justify-content: center;
align-items: center;
}
 .v-select--select .v-select--menu  {
  background: yellowgreen;
  }

</style>