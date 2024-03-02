<template>
  <div>
    <Header/>
          <v-row no-gutters style="margin-top:70px;">
            <v-col cols="3">
              <div class="pa-2 ma-2">
                          <!-- //side nav here../ -->
              </div>
            </v-col>

            <v-col cols="9">
              <div class="pa-2 ma-2">
                  
                  <div class="acct-settings" style="display: flex; margin-bottom: 32px">    
                      <span class="partners-text"> Complete verification to access Demo products and services.</span>
                      <div> <v-btn class="primary-btn" style="height: 37px; width: 120px; border-radius: 8px; background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);text-transform: capitalize; letter-spacing: 0px">Verify</v-btn> </div>
                  </div>
                 
                  <div  style="display: flex; justify-content: space-between; width: 930px">  
                    <img src="/svg/referral card (3).svg"/>

                    <div style="border-radius: 18.54px; display: flex; width: 413px; padding: 34px 18px; height: 222px; border: 0.5px solid #64748B; background: var(--secondary-background, #12181F); box-shadow: 0px 25.029px 18.54px 0px rgba(0, 0, 0, 0.02);">
                        <div style="display: grid">
                        <span class="refer-txt">Refer and Earn</span>
                        <span class="share-link">Share the link, referral code for registration, or scan barcode</span>

                        <div style="display: flex; justify-content: center;">
                          <v-text-field class="copy-link-box"  variant="" style="align-content: baseline;">
                            <span class="referral-link">https://demo.com/register?r=nxYXDm8</span>
                            <img src="/svg/copy.svg" style="position: relative; margin-left: 39px "/>
                          </v-text-field>
                        </div>

                        </div>
                    </div>

                    <img src="/svg/referral card (4).svg"/>

                </div>
              </div>
            </v-col>
          </v-row>
    <Footer/>
  </div>
</template>

<script setup>
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
border: 0.902px solid #2A3340;
background: #10192D;
display: flex;
align-items: center;
align-self: stretch; 
height: 51px; 
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
</style>