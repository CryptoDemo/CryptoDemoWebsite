<template>
<div class="section">
  <Header text2="Already have an account," title="Login" link="/authentication/login"/>
  <v-container class="form-layout overflow-hidden">
    <v-row no-gutters  class="">

      <v-col dense cols="md-5" class="form" style="padding: 0px 70px;">
        <div class="" style="margin-top:55.88px; margin-bottom:55.88px;">

            <span class="card-title">Create Your Account</span>
            <div class="card-subtitle">Setting up an account takes less than 1 minute.</div>
            
           <div class="position-relative input-styling d-flex" >
            <v-text-field placeholder="Phone number"  style="width: 124px!important; position:relative; left: -21px !important;"
                variant="text">
               <template v-slot:prepend>
                    <v-select class="form-select mt-1"  style="position: relative; padding-left: 4px!important;" 
                        variant="text" v-model="selected" 
                        :items="['+00', '+98', '+07', '+90', '+08', '+29']">
                    </v-select>
                </template>
              <v-icon class="prepend-inner-icon" style="position: absolute!important; right: 185px !important;">
               <svg xmlns="http://www.w3.org/2000/svg" width="2" height="32" viewBox="0 0 2 32" fill="none">
                  <path d="M1 0V32" stroke="#E2E8F0"/>
                </svg>
                </v-icon>
                <div class="position-absolute tick-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <path d="M8.55756 14.3555C7.38453 14.3555 6.23785 14.0184 5.26251 13.3869C4.28717 12.7553 3.52699 11.8577 3.07809 10.8075C2.62919 9.75728 2.51173 8.60167 2.74058 7.48677C2.96943 6.37188 3.5343 5.34779 4.36375 4.544C5.19321 3.7402 6.25 3.19281 7.40049 2.97105C8.55098 2.74928 9.7435 2.8631 10.8272 3.29811C11.911 3.73312 12.8373 4.46978 13.489 5.41494C14.1407 6.3601 14.4885 7.47131 14.4885 8.60804C14.4885 10.1324 13.8636 11.5942 12.7514 12.6721C11.6391 13.7499 10.1305 14.3555 8.55756 14.3555ZM8.55756 13.206C9.49599 13.206 10.4133 12.9363 11.1936 12.4311C11.9739 11.9259 12.582 11.2078 12.9411 10.3676C13.3003 9.52743 13.3942 8.60294 13.2111 7.71103C13.0281 6.81911 12.5762 5.99984 11.9126 5.35681C11.249 4.71377 10.4036 4.27586 9.48322 4.09845C8.56283 3.92103 7.60881 4.01209 6.74182 4.3601C5.87483 4.7081 5.1338 5.29743 4.61244 6.05356C4.09108 6.80969 3.81281 7.69865 3.81281 8.60804C3.81281 9.82749 4.3127 10.997 5.20251 11.8593C6.09233 12.7216 7.29918 13.206 8.55756 13.206ZM7.96447 10.907L5.44975 8.46819L6.28403 7.65588L7.96447 9.27857L11.3253 6.03032L12.1646 6.84262L7.96447 10.907Z" fill="#C4C4C4"/>
                    </svg>
                </div>
            </v-text-field>
           </div>

            <div class="position-relative">
              <v-text-field class="input-styling" style="margin-top:20.81px;" :type="isToggled ? 'text' : 'password'"
                placeholder="Password"
                variant="text">
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
            <v-text-field placeholder="Referral code (Optional)" class="input-styling" style="margin-top:20.81px;"
                variant="text">
                <v-icon class="prepend-inner-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <g clip-path="url(#clip0_649_13091)">
                    <path d="M9.84654 17.2942C8.458 16.315 7.41729 14.9191 6.87517 13.3089C6.33306 11.6986 6.31771 9.95753 6.83134 8.33795C7.34497 6.71837 8.36091 5.30437 9.73196 4.30084C11.103 3.2973 12.758 2.75635 14.457 2.75635C16.1561 2.75635 17.8111 3.2973 19.1821 4.30084C20.5532 5.30437 21.5691 6.71837 22.0827 8.33795C22.5964 9.95753 22.581 11.6986 22.0389 13.3089C21.4968 14.9191 20.4561 16.315 19.0675 17.2942L21.1505 22.0542C21.184 22.1304 21.1979 22.2137 21.191 22.2966C21.1841 22.3796 21.1566 22.4595 21.111 22.5291C21.0654 22.5987 21.0032 22.6558 20.93 22.6953C20.8567 22.7348 20.7748 22.7554 20.6915 22.7552H8.22154C8.13845 22.7553 8.05665 22.7347 7.98352 22.6953C7.91038 22.6559 7.84823 22.5988 7.80267 22.5294C7.75711 22.4599 7.72958 22.3801 7.72258 22.2973C7.71557 22.2146 7.72931 22.1313 7.76254 22.0552L9.84554 17.2942H9.84654ZM16.5815 16.6012L17.9135 15.6602C18.9553 14.926 19.7362 13.8792 20.143 12.6714C20.5499 11.4637 20.5617 10.1577 20.1766 8.94284C19.7915 7.72796 19.0295 6.66726 18.0012 5.91445C16.9728 5.16165 15.7315 4.75584 14.457 4.75584C13.1826 4.75584 11.9412 5.16165 10.9129 5.91445C9.88454 6.66726 9.1226 7.72796 8.73751 8.94284C8.35241 10.1577 8.36416 11.4637 8.77104 12.6714C9.17793 13.8792 9.95881 14.926 11.0005 15.6602L12.3315 16.6012L10.5145 20.7552H18.3985L16.5815 16.6012ZM10.5755 11.7252L12.5155 11.2402C12.6232 11.6735 12.8728 12.0584 13.2245 12.3335C13.5763 12.6085 14.01 12.758 14.4565 12.758C14.9031 12.758 15.3368 12.6085 15.6885 12.3335C16.0403 12.0584 16.2899 11.6735 16.3975 11.2402L18.3375 11.7252C18.12 12.5897 17.62 13.3568 16.917 13.9048C16.2139 14.4529 15.348 14.7505 14.4565 14.7505C13.5651 14.7505 12.6992 14.4529 11.9961 13.9048C11.293 13.3568 10.7931 12.5897 10.5755 11.7252Z" fill="#C4C4C4"/>
                </g>
                <defs>
                    <clipPath id="clip0_649_13091">
                    <rect width="23.5355" height="24" fill="white" transform="translate(0.390633 0.755371)"/>
                    </clipPath>
                </defs>
            </svg>
                </v-icon>
                <v-icon class="prepend-inner-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="15" viewBox="0 0 2 15" fill="none">
                    <path opacity="0.4" d="M1.06026 1.31102V14.311" stroke="#C3CDDB" stroke-linecap="round"/>
                </svg>
                </v-icon>
            </v-text-field>
              <NuxtLink to="/authentication/sign-up-number-verification"> 
                <Button buttonText="Continue" class="mt-4"/>
              </NuxtLink>
             <NuxtLink to="/authentication/register">  
                <v-btn variant="outlined"  color="blue-darken-4" class="btn-outlined"  style="color: var(--Primary-100, #2873FF)!important; margin-top:15.33px;">Create account with Email</v-btn>
             </NuxtLink>
             <div class="d-flex b-styling">
                <div class="border"></div> <span class="cnt-text">Or Continue with</span> <div class="border"></div>
              </div>

               <div class="d-flex justify-center mt-4">
              <div class="cursor-pointer">
                <img src="/svg/facebook.svg" alt="facebook-logo" class="facebook-icon"/>
              </div>
              <div class="cursor-pointer">
                <img src="/svg/apple.svg" alt="facebook-logo" class="facebook-icon"/>
              </div>
              <div class="">
                <img src="/img/google-logo.png" alt="google-logo" class="facebook-icon"/>
              </div>
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

const isToggled = ref(true);
const togglePassword = () => {
  isToggled.value = !isToggled.value;
};
const selected = ref('+09')


</script>
<style scoped>
.btn-outlined{
width: 300.384px!important;
height: 57.474px!important;
flex-shrink: 0;
border-radius: 24px;
border: 1px solid var(--Primary-80, #5892FF);
background: #161D26;
font-size: 13px !important;
font-style: normal;
padding: 30px;
text-transform: unset !important;
display: flex;

}

.v-btn__content {
    grid-area: content;
    justify-content: center;
    white-space: nowrap;
    width: 275.885px!important;
    font-size: 12px!important;
    font-weight: 400;
    line-height: normal;
}
.v-btn {
  align-items: center;  
  font-weight: 400 !important;  
  text-decoration: none;
  letter-spacing: unset !important;
  text-indent: 0! important;
    
}
.carousel-styling{
  max-height: 550px;
    position: relative;
    top: 8%;
    bottom: 0
} 
.tick-icon{
  top: 46%;
  right: 18px ;
}  
.eye-icon{
bottom: 16px; 
right: 18px ;
cursor: pointer;
position: absolute;
}  
.form-select{
position: relative;
/* left: 35px; */
margin-top: 3px;
padding-inline-end: 2px;
padding-left: 6px 
}
.mdi-menu-down{
     position: absolute!important;
    left: 52px!important;
    z-index: 1000;
}


</style>