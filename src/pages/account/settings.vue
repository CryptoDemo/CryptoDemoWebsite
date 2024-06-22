<template>
  <div>
    <Header :hide="true" :icon1="true" :icon3="true"  :icon2="true"/>
    <v-container style="display: flex;">
          <div style="margin-bottom: 113px; margin-top: 110px;display: flex;">
            <div class="me-4 flex-lg-and-up hidden-sm-and-down">
              <div class="mt-3">
                <Side-nav/>           
              </div>
            </div>

            <div>
              <div class="settings-body">
                  <div class="settings-header d-md-flex mt-4" style="margin-left: 16px;">
                    <span class="header-text1">Setting answers to your security questions is a requirement in the event that you need to reset or update your phone number. <span style="color: #2873FF; display: contents;">Set Answers!</span></span>
                  </div>
                  <div class="acct-settings" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="display: flex;width: 100%; margin-left: 16px; justify-content: space-between; margin-top: 32px">
                    <span class="acct-text"> Account Settings</span>
                    <span class="mail-text" :class="isDark ? 'text-dark':'text-light'"> {{ pinia.state.user?.email }}</span>

                  </div>
              </div>

               <v-row no-gutters class="d-sm-flex"  style="margin-top: 32px; width: 102%; margin-bottom:16px; gap: 20px">
                    <v-col  sm="6" cols="12" class="username-col">
                      <div class="d-flex img-col" style="margin-top: 0px!important; margin-left: 16px;">
                        <div @click="$refs.imageSelector.click()">
                          <input type="image" src="/svg/Camera.svg" accept="image/png, image/jpeg, image/bmp" style="position: absolute; margin-left: 17px; margin-top: 17px;"/>
                          <img ref="profileImg" :src="pinia.state?.user?.profile_image || '/svg/Image-grad.svg'" class="me-4" style="align-self: start;height: 72px;width: 72px;border-radius: 50px;"/>
                        </div>
                        <input ref="imageSelector" @input="handleImgChange" type="file" accept="image/*" style="display:none"/>
                        <div class="email-div">
                         <v-text-field placeholder="Username" color="success" v-model="username_" @input="debounce(username_)" class="input-styling1 pl-4 truncate-username" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" variant="plain" style="text-align: justify; font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 400;">
                            <v-icon class="prepend-inner-icon ml-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 25 24" fill="none">
                                  <path d="M20.2258 11.9998C20.2257 10.2167 19.6413 8.48476 18.5655 7.07901C17.4898 5.67327 15.9843 4.6743 14.2882 4.24076C12.592 3.80721 10.8025 3.96393 9.20367 4.68603C7.60486 5.40813 6.28846 6.65421 5.46349 8.22641C4.63853 9.79861 4.3523 11.6068 4.65025 13.3638C4.9482 15.1209 5.81326 16.7261 7.10805 17.9245C8.40285 19.1229 10.0532 19.8458 11.7969 19.9785C13.5407 20.1112 15.2779 19.646 16.7328 18.6568L17.8213 20.3208C16.0028 21.5574 13.8312 22.139 11.6515 21.9733C9.47177 21.8076 7.40882 20.904 5.79024 19.406C4.17166 17.9081 3.09024 15.9016 2.71771 13.7053C2.34518 11.509 2.70289 9.24875 3.73404 7.28344C4.76519 5.31814 6.41066 3.76046 8.40917 2.85777C10.4077 1.95508 12.6446 1.75913 14.7648 2.30102C16.885 2.84292 18.7669 4.0916 20.1117 5.84878C21.4564 7.60596 22.1869 9.7709 22.1871 11.9998V13.4998C22.1885 14.2497 21.9536 14.9802 21.5172 15.5837C21.0807 16.1872 20.4657 16.6317 19.7627 16.8519C19.0598 17.0721 18.3061 17.0563 17.6127 16.8067C16.9192 16.5572 16.3227 16.0871 15.911 15.4658C15.2562 16.1595 14.4188 16.6456 13.4996 16.8658C12.5803 17.0859 11.6183 17.0307 10.7291 16.7068C9.83992 16.3829 9.06134 15.804 8.48693 15.0398C7.91253 14.2756 7.56673 13.3585 7.49109 12.3987C7.41545 11.4389 7.61319 10.4773 8.06054 9.62935C8.50789 8.7814 9.18583 8.08319 10.0129 7.61864C10.84 7.15408 11.781 6.94292 12.7229 7.01054C13.6648 7.07816 14.5675 7.42168 15.3226 7.99982H17.2839V13.4998C17.2839 13.8976 17.4389 14.2792 17.7147 14.5605C17.9906 14.8418 18.3648 14.9998 18.7549 14.9998C19.145 14.9998 19.5191 14.8418 19.795 14.5605C20.0709 14.2792 20.2258 13.8976 20.2258 13.4998V11.9998ZM12.3807 8.99982C11.7988 8.99982 11.23 9.17577 10.7462 9.50541C10.2624 9.83506 9.88536 10.3036 9.66269 10.8518C9.44002 11.3999 9.38176 12.0031 9.49528 12.5851C9.60879 13.167 9.88898 13.7016 10.3004 14.1211C10.7119 14.5407 11.2361 14.8264 11.8067 14.9422C12.3774 15.0579 12.9689 14.9985 13.5065 14.7715C14.0441 14.5444 14.5036 14.1599 14.8268 13.6665C15.1501 13.1732 15.3226 12.5932 15.3226 11.9998C15.3226 11.2042 15.0127 10.4411 14.4609 9.8785C13.9092 9.31589 13.1609 8.99982 12.3807 8.99982Z" fill="currentColor"/>
                                </svg>
                            </v-icon>

                          <v-icon class="prepend-inner-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="15" viewBox="0 0 2 15" fill="none">
                                <path opacity="0.4" d="M1.06026 1.31102V14.311" stroke="#C3CDDB" stroke-linecap="round"/>
                            </svg>
                          </v-icon>

                          </v-text-field>
                          
                          <div class="text-div" style="width: 300px;">
                             <span class="number-caption" :class="isDark ? 'text-dark':'text-light'">This username is auto-generated and can be changed by the user.</span>
                          </div>
                        </div>
                      </div>
                    </v-col>

               
                    <v-col class="currency-div" md="" sm="5" cols="12">
                      <div  style="display: grid; margin-top: 0!important;">
                        <!-- <span class="number-caption ml-1" :class="isDark ? 'text-dark':'text-light'" style="line-height: 28px; font-family: manrope; font-weight: 600; font-size: 16px;">Preferred currency</span> -->
                        <v-menu>
                            <template v-slot:activator="{ props }">
                              <v-btn class="input-styling1 ml-1" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" v-bind="props"  style="box-shadow: none;">
                                <div  class="py-3" style="display: flex; cursor: pointer; position: absolute; left: 37px; align-items: center;">
                                  <span :class="isDark ? 'text-dark':'text-light'" class="me-2" style="font-weight: 700; font-size: 16px;">{{pinia.state.Selectedcurrency_code}}</span>
                                  <span :class="isDark ? 'text-dark':'text-light'" class="mt-" style="font-weight: 700;">{{pinia.state.preferredCurrency}}</span> 
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none" style="position: absolute; right: 30px; bottom: 27px;" :class="isDark ? 'svg-dark':'svg-light'">
                                  <path d="M5.05508 5.99413C5.19232 5.99415 5.32822 5.96714 5.45502 5.91463C5.58182 5.86213 5.69705 5.78516 5.7941 5.68813L9.69409 1.78814C9.88995 1.59227 10 1.32663 10 1.04964C10 0.772651 9.88995 0.50701 9.69409 0.311147C9.49823 0.115285 9.23259 0.00523901 8.9556 0.00523901C8.67861 0.00523901 8.41296 0.115285 8.2171 0.311147L5.0531 2.71114L1.8891 0.311147C1.69324 0.115285 1.4276 0.00523901 1.1506 0.00523901C0.873613 0.00523901 0.607941 0.115285 0.412079 0.311147C0.216217 0.50701 0.106201 0.772651 0.106201 1.04964C0.106201 1.32663 0.216217 1.59227 0.412079 1.78814L4.3121 5.68813C4.4096 5.78569 4.52546 5.86297 4.65298 5.91549C4.78051 5.96801 4.91716 5.99473 5.05508 5.99413Z"/>
                                </svg>
                              </v-btn>
                            </template>

                            <v-list :class="isDark ? 'country-dropdown1':'country-dropdown1-light'" >
                              <v-list-item style="width: 100%;">
                                <div v-for="(currency, index) in pinia.state.allcountries" class="d-flex py-1" :key="index">
                                  <v-list-item @click="pinia.state.preferredCurrency=currency.currency_name; pinia.state.Selectedcurrency_code = currency.currency_code">
                                      <div class="d-flex ml-4">
                                        <span :class="isDark ? 'country-name' : 'country-name-light'">{{ currency.currency_name }}</span>
                                      </div>
                                  </v-list-item>
                                </div>
                              </v-list-item>
                            </v-list>
                        </v-menu> 
                          <span class="number-caption ml-1" :class="isDark ? 'text-dark':'text-light'">Choose the currency for your wallet.</span>
                      </div>
                    </v-col>  
                  </v-row>

                  <v-row no-gutter class="user-inputs d-sm-flex ml-3" style="width: 102%;">
                  <v-col md="6" sm="12" cols="12">

                    <div style="position: relative">

                      <input type="number" id="phone" placeholder="333-4444-4444" minlength="9" maxlength="12" v-model="phoneNumber" style="font-size: 16px; font-weight: 400; height: 64px; padding-left: 100px; outline: none; width: 100%" class="input-styling1  pr-4" :class="isDark ? 'profile-cards-dark':'profile-cards-light'"/>
                      
                      <v-menu transition="scale-transition">
                        <template v-slot:activator="{ props }">
                          <v-btn @click="toggleChevron()" v-bind="props" :class="isDark ? 'wallet-border' : 'wallet-border-light'" style="box-shadow: none; height: 50px; width: 80px; background: inherit; position: absolute; left: 6px; margin-top: 7px; border-radius: 10px;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none" class="mr-2" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']">
                              <path d="M5.05508 5.99413C5.19232 5.99415 5.32822 5.96714 5.45502 5.91463C5.58182 5.86213 5.69705 5.78516 5.7941 5.68813L9.69409 1.78814C9.88995 1.59227 10 1.32663 10 1.04964C10 0.772651 9.88995 0.50701 9.69409 0.311147C9.49823 0.115285 9.23259 0.00523901 8.9556 0.00523901C8.67861 0.00523901 8.41296 0.115285 8.2171 0.311147L5.0531 2.71114L1.8891 0.311147C1.69324 0.115285 1.4276 0.00523901 1.1506 0.00523901C0.873613 0.00523901 0.607941 0.115285 0.412079 0.311147C0.216217 0.50701 0.106201 0.772651 0.106201 1.04964C0.106201 1.32663 0.216217 1.59227 0.412079 1.78814L4.3121 5.68813C4.4096 5.78569 4.52546 5.86297 4.65298 5.91549C4.78051 5.96801 4.91716 5.99473 5.05508 5.99413Z"/>
                            </svg>
                            <!-- <img :src="flag" width="32" height="32" style="border-radius: 20px; object-fit: cover;"/> -->
                            {{ Countrycode }}
                          </v-btn>
                        </template>
  
                        <v-list :class="isDark ? 'country-dropdown1':'country-dropdown1-light'">
                          <v-list-item style="display: contents">
                            <v-row dense style="max-width: 250px;">
                              <v-col v-for="(item, index) in pinia.state.allcountries" sm="12" cols="12" :key="index">
                              <v-list-item @click="Countrycode=item.phone_code; flag= item.flag_url;" style="display: flex;">
                                <div class="pl-4" style="display: flex; align-items: center; ">
                                  <img width="35" height="35" class="me-3" :src="item.flag_url" style="object-fit: cover;border-radius: 30px"/> 
                                  <span class="country-name ml-2" :class="isDark ? 'country-name' : 'country-name-light'">{{ item.phone_code }}</span>
                              </div>
                              </v-list-item>
                            </v-col>
                            </v-row>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </div>


                    <span class="number-caption ml-1 mb-1" :class="isDark ? 'text-dark':'text-light'">Enter a valid phone number for your wallet.</span>
                  </v-col>
                  <v-col :class="isDark ? 'date-input-profile-cards-dark':'date-input-profile-cards-light'">
                   <v-date-input prepend-icon="" clearable class="dateInput"  v-model="DateOfBirth" variant="plain" style="text-transform: capitalize;"></v-date-input>
                   <div style="margin-top: -21px">
                     <span class="number-caption ml-1" :class="isDark ? 'text-dark':'text-light'">Enter a valid DOB</span>
                   </div>
                  </v-col>
                  </v-row>

               <div class="table-div" style="margin-left: 16px; width: 99%; margin-top: 32px !important">
                <NotificationSettings />
              <div class="d-flex" style="justify-content: end; margin-top: 16px;">
                <v-btn class="primary-btn1" :loading="loading" style="height: 60px; width:150px; color: white; box-shadow: none;" @click="UpdateUserInfo()">Update bio</v-btn>
              </div>
              </div>
            </div>
          </div>
    </v-container>     
    <Footer class="flex-lg-and-up hidden-sm-and-down"/>
    <Mobile-footer class="mobile-footer"/>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import { compressImage } from "@/composables/mixin";
import {uploadUserFile} from "@/composables/requests/file";
import { debounce } from "@/composables/mixin";
import {checkUsernameAvailability, updateUser} from "@/composables/requests/users";

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();
const loading = ref(false);
const profileImg = ref(null)
const selectedImage = ref(null);
const phoneNumber = ref(pinia.state?.user?.phone || "");
const DateOfBirth = ref();
const username_ = ref(pinia.state?.user?.username || "")
const Countrycode = ref();
const handleImgChange = async(event)=> await handleFileChange(event,selectedImage,profileImg.value);

watch(()=> selectedImage.value,async(newval)=>{
  console.log(newval);
  const compressedImg = await compressImage(newval);
  console.log(compressedImg);
  if(Array.isArray(compressedImg)) return push.error(compressedImg[1], { duration: 2000 });
  
  var formdata = new FormData();
  formdata.append("file",compressedImg);
  
  try { 
    const imgUrl = await uploadUserFile(formdata);
    if(imgUrl?.uploaded_file_urls?.length){

      const profile_image = {profile_image: imgUrl.uploaded_file_urls[0]}
      const update_user = {...pinia.state.user,...profile_image};
      const tkn = update_user.token;
      delete update_user.token;

      const data = await updateUser(update_user);  
      if (data.success) {
        pinia.setUser({...update_user,token: tkn});
      } else {
        // Display error message
        push.error(data.message, { duration: 2000 })
      }
    }else{
      push.error("Error: file upload failed", { duration: 2000 })
    }
  
  } catch (error) {

    push.error(`Error: ${error}`, { duration: 2000 })
  }
  });

const isChevronToggled = ref(false);
const toggleChevron = () => {
      isChevronToggled.value = !isChevronToggled.value;
};


const result = ref('');
watchEffect(() => username_, debounce((value) => {
      console.log('Updating username to:', value);
      // Your logic to update the username
 }, 500)); 

  onMounted(async () => {
  
  
    }
  );

const UpdateUserInfo = async () => {
  const dobFormatted = formatDate(DateOfBirth.value);
  const phoneNumberString = phoneNumber.value.toString();
  // if (!phoneNumber || !DateOfBirth) return;
  const UpdateUserDetails = {
    ...pinia.state.user,
    phone: phoneNumberString,
    dob: dobFormatted,
    username: username_.value
  }
  delete UpdateUserDetails.token;

  loading.value = true;
  console.log(UpdateUserDetails)
  try {
  const data = await updateUser(UpdateUserDetails);
  if (data.success) {
    pinia.setUser({
      ...pinia.state.user,
      ...UpdateUserDetails
    });

    push.success('Update Succesful');
    loading.value = false 
  } else{
    push.error(data.message, { duration: 9000 })
  }
}catch(e){
  loading.value = false 
  console.log(e)
  push.error(`${e}`)
}
};

// Countrycode.value = pinia.state.allcountries.find(c => c.phone_code === pinia.state.user.country);
// console.log('Selected country code:', Countrycode.value);

</script>
<style scoped>
.settings-header {
border-radius: 16px;
padding: 25px 10px;
width: 100%;
background: #ECECEC;
}
.header-text1{
color: #0D0D0D;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 12px;
font-style: normal;
font-weight: 400;
font-family: Manrope;
line-height: normal;
display: flex;
justify-content: center;
}
.acct-settings{
border-radius: 16px;
display: flex;
width: 100%;
padding: 21px var(--spacing-3xl, 24px);
justify-content: space-between;
align-items: center;
}
.acct-text{
color: var(--Primary-80, #5892FF);
font-family: Manrope;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 28px; 
}

.wallet-border{
  border: 1px solid  #1B2537;
}
.wallet-border-light{
border: 1px solid #E2E8F0;
}

.area-num{
border-radius: 17px;
background: #161D26;
width: 109px;
height: 44px!important;
box-shadow: none !important;
position: absolute;
margin-top: 10px;
margin-left: 9px;
}
.profile-cards-dark{
background:  #10192D!important;
}
.profile-cards-light{
background: #F8FAFC!important;
}
.user-inputs :deep(.profile-cards-dark .v-input__control){
background:  #10192D!important;
}
.user-inputs :deep(.profile-cards-light .v-input__control){
background: #F8FAFC!important;
}
.mail-text{
color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 28px; 
}
.input-styling1{
/* width: 320px; */
height: 64px !important;
border-radius: 15px ;
letter-spacing: 0px;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
box-shadow: none;
}
.country-dropdown1{
border: 0.5px solid #354356;
}
.country-dropdown1-light{
border: 1px solid #DBE8FF !important;
}
.number-caption{
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.update-btn{
color: var(--Gray-Light, #D8D8D8);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
display: flex;
width: 224px;
height: 64px!important;
padding: 21px 16px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 16px;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);
text-transform: unset!important;
}

.v-switch__track ::before {
display: inline-flex;
align-items: center;
font-size: 0.5rem;
padding: 0 5px;
background-color: #12181F !important;
border-radius: 9999px;
height: 14px;
opacity: 0.6;
min-width: 36px;
cursor: pointer;
transition: 0.2s background-color cubic-bezier(0.4, 0, 0.2, 1);
}
.country-name{
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line {
padding-inline: 0px;
width: 100%;
}
.svg-dark{
  fill:#E0E4F5;
}
.svg-light{
  fill: #101632;
}

.close-btn{
fill: white;
}
.close-btn-dark{
fill: #10192D;
}
.chevron-icon {
  transition: transform 0.3s;
}

.chevron-icon-rotated {
  transform: rotate(180deg);
}

::-webkit-scrollbar {
  display: none;
}
.profile-cards-dark{
background:  #10192D!important;
}
.profile-cards-light{
background: #F8FAFC!important;
}
.user-inputs :deep(.v-input__control){
height: 64px !important;
border-radius: 15px;
}
.user-inputs :deep(.v-field__append-inner){
  display: none !important;
}

.date-input-profile-cards-dark :deep(.v-input__control){
  background:  #10192D!important;
  padding-left: 1rem;
  padding-right: 1rem;
}
.date-input-profile-cards-light :deep(.v-input__control){
  background: #F8FAFC!important;
  padding-left: 1rem;
  padding-right: 1rem;
}

.username-col :deep(.v-input__control){
  height: 64px
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

@media screen and (max-width: 600px) {
  .email-div{
    width: 83% !important;
  }
  .username-col, .img-col{
    margin-inline-end: 0px !important;
    margin-left: 0px !important;
  }
  .text-div{
    width: 230px !important;
  }
  .currency-div{
    margin-top: -1px;
  }
  .table-div{
    margin-left: 0px !important;
  }

  .settings-header{
    padding: 15px 10px;
  }
  .acct-settings{
    margin-top: 24px !important;
  }
  .user-inputs{
    margin-left: -8px !important;
  }

  .truncate-username :deep(.v-input__control .v-field__input input){
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 50%; /* Adjust as needed */
}

}

</style>