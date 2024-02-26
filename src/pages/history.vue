<template>
  <div>
          <v-row no-gutters style="overflow:;">
            <v-col cols="3">
              <div class="pa-2 ma-2">
                          <!-- //side nav here../ -->
              </div>
            </v-col>

            <v-col cols="9" style="margin-bottom: 194px">
                <div class="pa-2 ma-2">
                    
                    <div class="acct-settings" style="display: flex; margin-bottom: 47px">    
                        <span class="acct-text">History</span>   
                    </div>
 
                    <section style="width: 938px;">
                        <div style="margin-bottom: 34px">
                          <span class="title-text">You are currently reviewing all transactions from the past 30 days.</span>  
                        </div >   
                         <span class="title-text"  style="font-weight: 500; color: white">Completed Trades:<span class="title-text" style="font-weight: 800; color: white">{{tradePercentage}}</span></span>
                            <div class="d-flex" style="justify-content: space-between; margin-top: 36px; align-items: center;">
                                <span class="title-text" style="font-weight: 500; color: white">Past trades</span>
                                <div>
                                    <v-btn class="me-4" style="border-radius: 16px; background: #12181F; width: 170px; height: 60px; letter-spacing: 0px; text-transform: capitalize;box-shadow: none;">
                                    <img src="/svg/export.svg" class="me-2"/>
                                        Export Trades
                                </v-btn>
                                    <v-btn style="border-radius: 16px; background: #12181F; width: 170px; height: 60px; letter-spacing: 0px; text-transform: capitalize;box-shadow: none;">
                                        Copy Details
                                        <img src="/svg/copy.svg" style="margin-left: 8px"/>
                                    </v-btn>
                                </div>
                            </div>
                        <div class="trade-box">
                            <div style="padding-top: 120px">
                                <img src="/svg/search-status.svg" class="d-flex mx-auto mb-5"/>
                                <span class="title-text d-flex" style="font-weight: 500; justify-content: center">You are yet to <NuxtLink to="#"><span class="title-text" style="color:#2873FF; font-weight: 500"> start trading</span></NuxtLink></span>
                            </div>
                        </div>
                    </section>
                        
                        
                </div>
            </v-col>     
          </v-row>
          
          <Footer/>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';


const tradePercentage = ref('0%')
const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);


</script>

<style scoped>

.acct-settings{
border-radius: 16px;
background: var(--secondary-background, #12181F);
display: flex;
width: 940px;
padding: 21px var(--spacing-3xl, 24px);
justify-content: space-between;
align-items: center;
margin-bottom: 16px;
}

.title-text{
color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
.title-text-light{
color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
.trade-box{
border-radius: 0px 0px 24px 24px;
border-right: 1px solid var(--border, #303A46)!important;
border-bottom: 1px solid var(--border, #303A46);
border-left: 1px solid var(--border, #303A46);
height: 351px;
margin-top: 26px;
}
</style>