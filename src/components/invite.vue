<template>
  <div>
    
    <div style="margin-top:150px; margin-bottom: 30px;">
      <div>
        <div  style="display: flex; justify-content: space-between;">  
          <div :class="isDark ? 'profile-cards-dark':'profile-cards-light'" class="flex-lg-and-up hidden-md-and-down">
            <img src="/img/phoneHand.png" width="195" class="mb-3"/>
          </div>
            <div :class="isDark ? 'profile-cards-dark':'profile-cards-light'" class="ref-box" style="border-radius: 18.54px; display: flex; width: 45%; padding: 34px 18px; border: 0.5px solid rgba(142, 155, 174, 0.5); box-shadow: 0px 25.029px 18.54px 0px rgba(0, 0, 0, 0.02);">
                <div style="display: grid">
                  <div style="display: flex; align-items: center;">
                    <span class="refer-txt me-2" :class="isDark ? 'card-text-dark':'card-text-light'">Refer and Earn</span>
                    <img src="/svg/copied.svg"/>
                  </div>
                  <span class="share-link mt-2">Share the link, referral code for registration, or scan barcode to earn more</span>
                  <div style="display: flex;  position: relative;">
                    <input class="copy-link-box pl-4 mt-4" :class="isDark ? 'text-dark':'text-light'" disabled  v-model="referralCode" style="align-content: baseline;"/>
                      <v-btn @click="copyToClipboard()" variant="plain" style=" background: inherit !important; box-shadow: none; position: absolute; right: 0; margin-top: 8.3%;">
                        <img v-if="!copied" src="/svg/copy.svg"/>
                        <h4 style="color: green; font-weight: 400; text-transform: lowercase; letter-spacing: 0px;" v-else>Copied!</h4>
                      </v-btn>
                  </div>
                  
                </div>
            </div>
            <div :class="isDark ? 'profile-cards-dark':'profile-cards-light'" class="flex-lg-and-up hidden-md-and-down">
              <qrcode-vue :value="referralCode" :size="206" level="H" style="padding: 20px;display: flex;"/>
            </div>
          </div>
        </div>
      </div>
    </div>
   
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import QrcodeVue from 'qrcode.vue'
const pinia = useStore()
const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const referralCode = pinia.state.user?.referral_code || "";
const copied = ref(false);

  const copyToClipboard = () => {
  const text = referralCode
  navigator.clipboard.writeText(text).then(() => {
  copied.value = true;
  setTimeout(() => {
      copied.value = false;
    }, 2000); // Change the text back to 'Copy' after 2 seconds
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

</script>

<style scoped>

.header{
color: var(--Gray-Medium-light, #969696);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 22.4px */
}
.refer-txt{
font-family: Manrope;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 120%; /* 28.8px */
}
.share-link{
color: var(--Black-40, #8E9BAE);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 12.625px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 17.675px */
}

.copy-link-box{
border-radius: 13.527px;
border: 0.902px solid rgba(142, 155, 174, 0.5);
display: flex;
align-items: center;
align-self: stretch; 
height: 51px; 
width: 100%;
outline: none;
position: relative;
color: #AEB4BF;
font-family: Manrope;
font-size: 12.625px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 17.675px */
}

@media only screen and (max-width: 600px) {
.dashboard-container{
  margin-left: 0px !important;
}
.ref-box{
  width: 100% !important;
}
}
</style>