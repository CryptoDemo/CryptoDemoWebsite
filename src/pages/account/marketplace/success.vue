<template>
    <div>
        <Header :hide="true" :icon1="true" :icon3="true"  :icon2="true" />
        <v-container style="margin-top: 70px;">

            <div  :class="isDark ? 'wallet-border' : 'wallet-border-light'" style="border-radius: 24px; padding: 37px; margin-top: 60px; margin-bottom: 525px; width: 98%;">
    
                <div class="d-md-flex" style="justify-content: space-between;  position: relative;">
                    <div style="display: flex; flex-direction: column; justify-content: center;">
                        <span class="success-text" :class="isDark ? 'card-text-dark':'card-text-light'"> Successful</span>
                        <span class="sub-text" style="font-size: 24px;font-style: normal; font-weight: 400;">You have successfully created an Offer !!</span>
                    </div>
                    
                    <div style="display: flex; flex-direction: column;">
                        <img src="/svg/Frame 1s.svg"/>
                        <img src="/svg/Frame 2s.svg"/>
                    </div>
                </div> 
                
                <div class="mt-4 btn-div" style="display: flex; justify-content: end;">
                    <v-btn @click.prevent="navigateTo('/account/marketplace/activeOffers')" class="primary-btn1" style="width: 258px; height: 60px; color: white; box-shadow: none; font-size: 16px;">Back to MarketPlace</v-btn>
                </div>
            </div>  
        </v-container>
    <Footer class="desktop-footer flex-lg-and-up hidden-md-and-down"/>
    <Mobile-footer class="mobile-footer"/>
    </div> 
</template>

<script setup>
import { useTheme } from 'vuetify';



const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
</script>

<style scoped>
.success-text{
color: var(--Colors-Base-white, #FFF);
font-family: Poppins;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 60px; /* 166.667% */
}

.wallet-border{
  border: 1px solid  #1B2537;
}
.wallet-border-light{
border: 1px solid #E2E8F0;
}

@media screen and (max-width: 600px) {
  .success-text {
   font-size: 20px;
  }
  .sub-text{
    font-size: 14px !important;
    margin-bottom: 10px !important;
  }
  .primary-btn1{
    height: 45px !important;
    width: 160px !important;
    justify-content: flex-start !important;
  }

  .btn-div{
   justify-content: left !important;
  }
}

</style>