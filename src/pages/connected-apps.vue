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
                    
                    <div class="acct-settings" style="display: flex; justify-content: space-between; margin-bottom: 47px">    
                        <span class="acct-text"> Connected Apps and Websites</span>
                        <span class="mail-text">vaststudiosng@gmail.com</span>  
                    </div>
 
                    <section style="width: 938px;">
                       <div style="border-radius: 24px; background: var(--secondary-background, #12181F); height: 489px; padding: 35px 41px">
                         <span style="color: var(--Gray-Medium-light, #969696); font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">
                           Here is the comprehensive list of apps and websites through which you've logged in using Demo. These platforms automatically retain certain parts of your information. If you decide to remove any of them, they will retain the information you previously shared, but won't gather any new data.</span>
                          <div style="margin-top: 165px">
                            <img src="/svg/search-status.svg" class="d-flex mx-auto mb-2"/>
                            <span style="color: var(--Gray-Medium-dark, #646464); font-family: Poppins; font-size: 12px; font-style: normal; font-weight: 400;line-height: normal; display: flex;justify-content: center;">Currently, there are no apps or websites connected to your account.</span>
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






</script>
<style >

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
.acct-text{
color: var(--Primary-80, #5892FF);
font-family: Manrope;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 28px; 
}

.mail-text{
  color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 28px; 
}

.second-text{
color: var(--Second-Text, #A4A8AB);
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}


</style>