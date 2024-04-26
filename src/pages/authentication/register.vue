<template>
  <img src="https://res.cloudinary.com/dfejrmsq5/image/upload/v1711619522/Background_pattern_cr8ghg.svg" class="position-absolute bg-vector" style="opacity: 0.4; left: 0; height: 90%;  right: 0; display: flex; margin: auto" v-if="theme.global.current.value.dark"/>
  <img src="https://res.cloudinary.com/dfejrmsq5/image/upload/v1711619522/Background_pattern_cr8ghg.svg" class="position-absolute bg-vector" style="opacity: 0.2; left: 0;  right: 0; display: flex; margin: auto" v-else/>
  <div class="section">
  <Header @country="v => country = v" text2="Already have an account," title="Login" link="/authentication/login"/> 
    <v-container class="form-layout overflow-hidden" :class="isDark ? 'form-layout':'form-layout-light'">
      <v-row no-gutters>
        <v-col dense cols="md-5" class="form" :class="isDark ? 'form':'form-light'" style="padding: 0px 70px;">
          <div class="" style="margin-top:40px; margin-bottom:55.88px;">
          <span class="card-title" :class="isDark ? 'card-title':'card-title-light'">Create Your Account</span>
            <div class="card-subtitle" :class="isDark ? 'card-subtitle':'card-subtitle-light'">Setting up an account takes less than 1 minute.</div>
            
          
            <div class="position-relative">
              <v-text-field placeholder="username" variant="plain" :rules="username" :class="isDark ? 'input-styling':'input-styling-light'" v-model="name" style="font-size: 12px !important; margin-bottom: 21px;">
              <v-icon class="prepend-inner-icon ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#b1b1b1" class="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                </svg>
              </v-icon>

               <v-icon class="prepend-inner-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2" height="15" viewBox="0 0 2 15" fill="none">
                      <path opacity="0.4" d="M1.06026 1.31102V14.311" stroke="#C3CDDB" stroke-linecap="round"/>
                  </svg>
                </v-icon>
              </v-text-field>
          
              <v-text-field placeholder="Email Address" variant="plain" :class="isDark ? 'input-styling':'input-styling-light'" v-model="email" :rules="emailrules" style="font-size: 12px !important;">
                <v-icon class="prepend-inner-icon ml-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 25 24" fill="none">
                    <path d="M20.2258 11.9998C20.2257 10.2167 19.6413 8.48476 18.5655 7.07901C17.4898 5.67327 15.9843 4.6743 14.2882 4.24076C12.592 3.80721 10.8025 3.96393 9.20367 4.68603C7.60486 5.40813 6.28846 6.65421 5.46349 8.22641C4.63853 9.79861 4.3523 11.6068 4.65025 13.3638C4.9482 15.1209 5.81326 16.7261 7.10805 17.9245C8.40285 19.1229 10.0532 19.8458 11.7969 19.9785C13.5407 20.1112 15.2779 19.646 16.7328 18.6568L17.8213 20.3208C16.0028 21.5574 13.8312 22.139 11.6515 21.9733C9.47177 21.8076 7.40882 20.904 5.79024 19.406C4.17166 17.9081 3.09024 15.9016 2.71771 13.7053C2.34518 11.509 2.70289 9.24875 3.73404 7.28344C4.76519 5.31814 6.41066 3.76046 8.40917 2.85777C10.4077 1.95508 12.6446 1.75913 14.7648 2.30102C16.885 2.84292 18.7669 4.0916 20.1117 5.84878C21.4564 7.60596 22.1869 9.7709 22.1871 11.9998V13.4998C22.1885 14.2497 21.9536 14.9802 21.5172 15.5837C21.0807 16.1872 20.4657 16.6317 19.7627 16.8519C19.0598 17.0721 18.3061 17.0563 17.6127 16.8067C16.9192 16.5572 16.3227 16.0871 15.911 15.4658C15.2562 16.1595 14.4188 16.6456 13.4996 16.8658C12.5803 17.0859 11.6183 17.0307 10.7291 16.7068C9.83992 16.3829 9.06134 15.804 8.48693 15.0398C7.91253 14.2756 7.56673 13.3585 7.49109 12.3987C7.41545 11.4389 7.61319 10.4773 8.06054 9.62935C8.50789 8.7814 9.18583 8.08319 10.0129 7.61864C10.84 7.15408 11.781 6.94292 12.7229 7.01054C13.6648 7.07816 14.5675 7.42168 15.3226 7.99982H17.2839V13.4998C17.2839 13.8976 17.4389 14.2792 17.7147 14.5605C17.9906 14.8418 18.3648 14.9998 18.7549 14.9998C19.145 14.9998 19.5191 14.8418 19.795 14.5605C20.0709 14.2792 20.2258 13.8976 20.2258 13.4998V11.9998ZM12.3807 8.99982C11.7988 8.99982 11.23 9.17577 10.7462 9.50541C10.2624 9.83506 9.88536 10.3036 9.66269 10.8518C9.44002 11.3999 9.38176 12.0031 9.49528 12.5851C9.60879 13.167 9.88898 13.7016 10.3004 14.1211C10.7119 14.5407 11.2361 14.8264 11.8067 14.9422C12.3774 15.0579 12.9689 14.9985 13.5065 14.7715C14.0441 14.5444 14.5036 14.1599 14.8268 13.6665C15.1501 13.1732 15.3226 12.5932 15.3226 11.9998C15.3226 11.2042 15.0127 10.4411 14.4609 9.8785C13.9092 9.31589 13.1609 8.99982 12.3807 8.99982Z" fill="#C4C4C4"/>
                  </svg>
                </v-icon>
                <v-icon class="prepend-inner-icon">
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

               <div class="position-relative">
                <v-text-field class="input-styling" :class="isDark ? 'input-styling':'input-styling-light'" style="margin-top:20.81px;" :type="isToggled ? 'text' : 'password'" v-model="password" :rules="passwordrules" placeholder="Password" variant="plain">
                  <v-icon class="prepend-inner-icon ml-3">
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
              <div class="position-relative">  
                  <span v-if="isToggled"  @click="togglePassword()"  class="eye-icon">
                    <img src="/svg/invisible.svg"/>
                  </span>
                  
                  <span v-else @click="togglePassword()" class="eye-icon">
                    <img src="/svg/visible.svg"/>
                  </span>
              </div>
              </div> 

               <v-text-field placeholder="Referral code (Optional)" class="input-styling" v-model="referralcode" :class="isDark ? 'input-styling':'input-styling-light'" style="margin-top:20.81px;"
                  variant="plain">
                  <v-icon class="prepend-inner-icon ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <g clip-path="url(#clip0_649_13091)">
                          <path d="M9.84654 17.2942C8.458 16.315 7.41729 14.9191 6.87517 13.3089C6.33306 11.6986 6.31771 9.95753 6.83134 8.33795C7.34497 6.71837 8.36091 5.30437 9.73196 4.30084C11.103 3.2973 12.758 2.75635 14.457 2.75635C16.1561 2.75635 17.8111 3.2973 19.1821 4.30084C20.5532 5.30437 21.5691 6.71837 22.0827 8.33795C22.5964 9.95753 22.581 11.6986 22.0389 13.3089C21.4968 14.9191 20.4561 16.315 19.0675 17.2942L21.1505 22.0542C21.184 22.1304 21.1979 22.2137 21.191 22.2966C21.1841 22.3796 21.1566 22.4595 21.111 22.5291C21.0654 22.5987 21.0032 22.6558 20.93 22.6953C20.8567 22.7348 20.7748 22.7554 20.6915 22.7552H8.22154C8.13845 22.7553 8.05665 22.7347 7.98352 22.6953C7.91038 22.6559 7.84823 22.5988 7.80267 22.5294C7.75711 22.4599 7.72958 22.3801 7.72258 22.2973C7.71557 22.2146 7.72931 22.1313 7.76254 22.0552L9.84554 17.2942H9.84654ZM16.5815 16.6012L17.9135 15.6602C18.9553 14.926 19.7362 13.8792 20.143 12.6714C20.5499 11.4637 20.5617 10.1577 20.1766 8.94284C19.7915 7.72796 19.0295 6.66726 18.0012 5.91445C16.9728 5.16165 15.7315 4.75584 14.457 4.75584C13.1826 4.75584 11.9412 5.16165 10.9129 5.91445C9.88454 6.66726 9.1226 7.72796 8.73751 8.94284C8.35241 10.1577 8.36416 11.4637 8.77104 12.6714C9.17793 13.8792 9.95881 14.926 11.0005 15.6602L12.3315 16.6012L10.5145 20.7552H18.3985L16.5815 16.6012ZM10.5755 11.7252L12.5155 11.2402C12.6232 11.6735 12.8728 12.0584 13.2245 12.3335C13.5763 12.6085 14.01 12.758 14.4565 12.758C14.9031 12.758 15.3368 12.6085 15.6885 12.3335C16.0403 12.0584 16.2899 11.6735 16.3975 11.2402L18.3375 11.7252C18.12 12.5897 17.62 13.3568 16.917 13.9048C16.2139 14.4529 15.348 14.7505 14.4565 14.7505C13.5651 14.7505 12.6992 14.4529 11.9961 13.9048C11.293 13.3568 10.7931 12.5897 10.5755 11.7252Z" fill="#C4C4C4"/>
                      </g>
                      <defs>
                          <clipPath id="clip0_649_13091">
                          <rect width="23.5355" height="24" fill="white" transform="translate(0.390633 0.755371)"/>
                          </clipPath>
                      </defs>
                  </svg >
                  </v-icon>
                  <v-icon class="prepend-inner-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2" height="15" viewBox="0 0 2 15" fill="none">
                      <path opacity="0.4" d="M1.06026 1.31102V14.311" stroke="#C3CDDB" stroke-linecap="round"/>
                  </svg>
                  </v-icon>
              </v-text-field> 
              
                <NuxtLink to="/authentication/sign-up-email-verification">  
                  <Button buttonText="Continue" :loading="loading"  @click.prevent="register()" class="mt-4"/>
                </NuxtLink>
              
          </div>
        </v-col>
      
        <v-col md="7" class="flex-lg-and-up hidden-sm-and-down">
            <div class="ma-8 carousel-styling" >
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
import {register_} from "@/composables/requests/auth";
import { Notification ,push} from 'notivue';


const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);


const name=ref("");
const email=ref("");
const password =ref("");
const referralcode =ref("");
const country = ref("")
const loading = ref(false);

const isToggled = ref(true);
const togglePassword = () => {
  isToggled.value = !isToggled.value;
};

const username = [
  value => {
    if (value) return true

    return 'Full name is required'
  },
];
const emailrules = [
  value => {
    if (value) return true
    return 'E-mail is requred.'
  },
  value => {
    if (/.+@.+\..+/.test(value)) return true
      return 'E-mail must be valid.'
    },
];

const passwordrules = [
(v) => !!v || 'Password is required',
  (v) => v.length >= 6 || 'Password must be at least 6 characters',
  (v) => /[A-Z]+/.test(v) || 'One uppercase letter',
  (v) => /[a-z]+/.test(v) || 'One lowercase letter',
  (v) => /[0-9]+/.test(v) || 'One Numeral',
  (v) => /[^a-zA-Z0-9]+/.test(v) || 'One Special Character',
  ];

const device = useDevice();

const pinia = useStore();
console.log(device)

const register = async () => {
const registerInfo = {
name: name.value,
email: email.value,
password: password.value,
referralcode: referralcode.value,
country: country.value,
device_info: JSON.stringify(device)
}

try {
  const data = await register_(registerInfo);
  if (data.success) {
    // loading.value = true;
    pinia.setEmail(email.value)
    navigateTo('/authentication/sign-up-email-verification')
  } else{
    push.error(data.message, { timeout: 90000000 })
  }
}catch(e){
  console.log(e)
  push.error(`${e}`)
}
 
};
</script>
<style scoped>
.form-layout :deep(.Notivue__notification *) {
    box-sizing: border-box;
    background: red !important;
}
.v-btn__content {
  grid-area: content;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  width: 275.885px!important;
  font-size: 14px!important;
  font-weight: 400 !important;
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
top: 3%;
bottom: 0
} 
.tick-icon{
  top: 75%;
  right: 10% ;
}  
.eye-icon{
bottom: 16px; 
right: 10% ;
cursor: pointer;
position: absolute;
}  
.form-layout :deep(.v-input--plain-underlined.v-text-field .v-input__details){
  margin-top: 10px;
}

</style>