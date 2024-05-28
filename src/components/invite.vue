<template>
  <div>
    
    <div  style="margin-top:130px; margin-bottom: 170px;">
        <div class="pa-2 ma-2">
            <div  style="display: flex; justify-content: space-between;">  
              <div :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 18.54px; display: flex; width: 50%; padding: 34px 18px; height: 222px; border: 0.5px solid rgba(142, 155, 174, 0.5); box-shadow: 0px 25.029px 18.54px 0px rgba(0, 0, 0, 0.02);">
                  <div style="display: grid">
                    <span class="refer-txt" :class="isDark ? 'card-text-dark':'card-text-light'">Refer and Earn</span>
                    <span class="share-link">Share the link, referral code for registration, or scan barcode</span>
                    <div style="display: flex;  position: relative;">
                      <input class="copy-link-box pl-4" disabled  v-model="referralCode" style="align-content: baseline;"/>
                        <v-btn @click="copyToClipboard()" variant="plain" style=" background: inherit !important; box-shadow: none; position: absolute; right: 0; margin-top: 2.3%;">
                          <img src="/svg/copy.svg"/>
                        </v-btn>
                    </div>
                    
                  </div>
                </div>
                <div :class="isDark ? 'profile-cards-dark':'profile-cards-light'">
                  <qrcode-vue :value="referralCode" :size="220" level="H" style="padding: 20px;"/>
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


const copyToClipboard = () => {
  if (!referralCode.value) {
    console.error('Referral code is undefined or empty');
    return;
  }
  navigator.clipboard.writeText(referralCode.value)
  console.log(referralCode)
    .then(() => {
      push.success('Text copied successfully!');
    })
    .catch((error) => {
      console.error('Failed to copy text:', error);
      push.error('Failed to copy text!');
    });
}

</script>

<style scoped>

.header{
color: var(--Gray-Medium-light, #969696);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 22.4px */
}
.refer-txt{
font-family: Poppins;
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

.partners-text{
color: var(--Gray-Medium-dark, #646464);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
</style>