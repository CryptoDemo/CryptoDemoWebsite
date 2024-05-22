<template>
  <div>
    
    <div  style="margin-top:130px; margin-bottom: 444px;">

      <div>
        <div class="pa-2 ma-2">

            <div  style="display: flex; justify-content: space-between;">  
              <img src="/svg/referral card (3).svg"/>

              
              <div :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 18.54px; display: flex; width: 42%; padding: 34px 18px; height: 222px; border: 0.5px solid rgba(142, 155, 174, 0.5); box-shadow: 0px 25.029px 18.54px 0px rgba(0, 0, 0, 0.02);">
                  <div style="display: grid">
                    <span class="refer-txt">Refer and Earn</span>
                    <span class="share-link">Share the link, referral code for registration, or scan barcode</span>
                    
                    <div style="display: flex; justify-content: center;">
                      <div class="copy-link-box pl-4 mx-auto"  variant="text" style="align-content: baseline;">
                        <span class="referral-link">{{ pinia.state.user?.referral_code }}</span>
                        <v-btn @click="copyURL" variant="plain" style=" background: inherit !important; box-shadow: none;"><img src="/svg/copy.svg" style="position: relative;"/></v-btn>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <qrcode-vue :value="referralCode" :size="150" level="h" />

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
const currentURL = useRoute().fullPath; 
const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const referralCode = pinia.state.user?.referral_code;
const copyURL = () => {
    alert('Copied!');
};

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
background: linear-gradient(90deg, #FFF 5.29%, #64748B 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
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
border: 0.902px solid #2f3946;
background: #10192D;
display: flex;
align-items: center;
align-self: stretch; 
height: 51px; 
width: 90%;
}

.referral-link{
overflow: hidden;
color: #AEB4BF;
text-overflow: ellipsis;
font-family: Manrope;
font-size: 12.625px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 17.675px */
display: -webkit-box;
width: 239px;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
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