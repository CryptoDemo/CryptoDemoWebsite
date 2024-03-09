<template>
    <Header/>
  <div>
    <v-container style="margin-top: 80px;">
      <v-row no-gutters>
            <v-col cols="9">
              <div class="pa-2 ma-2">      
                <span class="offer-txt1">Create an Offer to Sell your Crypto</span>

                <div style="display: flex; flex-direction: column; margin-top: 56px;">
                    <span class="prc1">Trade Instructions</span>
                    <span class="prc3" style="margin-top: 35px;">Offer Tags</span>
                </div>

                <div>
                

                

                  <div>
                   
                  </div>




                  <div>

              
                    <div>
                      <div style="margin-top: 89px;">
                        <span class="payment1" style="font-size: 32px; color: #D8D8D8;">About this step</span>
                      </div>

                      <div style="width: 464px; margin-top: 18px;">
                          <span class="text-step">Start creating your offer by selecting the cryptocurrency you want to trade, whether or not you want to buy or sell, and the payment method you want to use.</span>
                      </div>

                      <div style="display: flex; flex-direction: column; margin-top: 18px;">
                        <span class="abt-txt1">You want to sell Bitcoin (BTC)</span>
                        <span class="abt-txt1">And get paid via NIP (NIBSS Instant Payment) in US Dollar (USD)</span>
                        <span class="abt-txt1">ou will pay Paxful a 1% fee for each trade</span>
                      </div>
                    </div>

                    <div class="d-flex" style="justify-content: space-between; margin-top: 53px; margin-bottom: 39px;">
                    <div>
                      <v-btn class="previous-step me-4">Previous step</v-btn>
                     
                 
                      <v-btn class="next-step" :disabled="loading" :loading="loading" @click.prevent="navigateTo('/createOffer/createOffer5')" >Next step</v-btn>
                     
                    </div>
                  </div>

                    
                  </div>
                </div>
             </div>
            
           

           
       
            </v-col>
            <v-col>
              <div class="pa-2 ma-2 d-flex position-relative">
                    <div style="background: #303A46; width: 1px; height: 579px; margin-top: 10px;"></div>

                    <!-- <div> -->
                      <div class="d-flex" style="flex-direction: column;">
                       <div class="d-flex" style="display: flex; position: absolute; left: 0; right: 0; justify-content: center;">
                        <span class="prc" style="color: #35B233;">Payment Method</span>
                       </div>
                      
                       <svg xmlns="http://www.w3.org/2000/svg" width="7" height="243" viewBox="0 0 7 243" fill="none" style="position: relative; left: 131px; margin-top: 30px;">
                            <path d="M3.49999 237.333C2.02723 237.333 0.833323 238.527 0.833323 240C0.833323 241.473 2.02723 242.667 3.49999 242.667C4.97275 242.667 6.16666 241.473 6.16666 240C6.16666 238.527 4.97275 237.333 3.49999 237.333ZM3 -2.18557e-08L2.99999 240L3.99999 240L4 2.18557e-08L3 -2.18557e-08Z" fill="#5FC381"/>
                        </svg>
                        

                        <div class="d-flex" style="position: relative; left: 110px; top: 12px;">
                          <span class="prc" style="color: #D8D8D8;">Pricing</span>
                        </div>

                       <svg xmlns="http://www.w3.org/2000/svg" width="7" height="243" viewBox="0 0 7 243" fill="none" style="position: relative; left: 131px; margin-top: 30px;">
                              <path d="M3.49999 237.333C2.02723 237.333 0.833323 238.527 0.833323 240C0.833323 241.473 2.02723 242.667 3.49999 242.667C4.97275 242.667 6.16666 241.473 6.16666 240C6.16666 238.527 4.97275 237.333 3.49999 237.333ZM3 -2.18557e-08L2.99999 240L3.99999 240L4 2.18557e-08L3 -2.18557e-08Z" fill="#303A46"/>
                        </svg>

                        <div class="d-flex" style="position: relative; left: 80px;">
                          <span class="prc">Other Settings</span>
                        </div>
                    </div>
                  </div>
                <!-- </div> -->
            </v-col>
    </v-row>
    </v-container>
    <Footer/>
  </div>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style>






.box2{
border-radius: 24px;
border: 1px solid var(--border, #303A46);
background: var(--secondary-background, #12181F);
padding: 33px;
display: flex;
flex-direction: column;
width: 48%;
cursor: pointer;
}

.fixed{
border-radius: 20px;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);
width: 68px;
height: 32px;
flex-shrink: 0;
letter-spacing: 0px;
text-transform: capitalize;
color: var(--Colors-Base-white, #FFF);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 21px */
}

.range{
background: inherit;
text-transform: capitalize;
letter-spacing: 0px;
width: 68px;
height: 32px;
box-shadow: none;
color: var(--Black-40, #8E9BAE);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 21px */
opacity: 0.45;
}
.previous-step{
border-radius: 20px;
background: var(--secondary-background, #12181F);
width: 258px;
height: 60px !important;
flex-shrink: 0;
width: 258px;
height: 60px;
letter-spacing: 0px;
text-transform: capitalize;
color: #D8D8D8;
text-align: center;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.next-step{
border-radius: 20px;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF)!important;
width: 258px !important;
height: 60px !important;
flex-shrink: 0;
width: 258px;
height: 60px;
letter-spacing: 0px;
text-transform: capitalize !important;
color: var(--White, var(--Colors-Base-white, #FFF));
text-align: center;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}


.select1{
color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
position: absolute;
top: 30%;
margin-left: 23px;
}

.select2{
color: var(--Main-Greyscale-40, #8E9BAE);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 140%;
margin-left: 28px; /* 19.6px */
}


::-webkit-scrollbar{
  display: none;
}

.v-chip{
border-radius: 12px !important;
background: #131D35 !important;
width: 67px !important;
height: 36px !important;
display: flex !important;
align-items: center !important;
font-family: Manrope; 
color: #8E9BAE !important; 
font-size: 14px !important;
line-height: 140% !important;
cursor: pointer !important;
margin-top: 5px!important ;
}


::-webkit-input-placeholder {
color: var(--Black-40, #8E9BAE);
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 19.6px */
  }

.prc3{
color: var(--Gray-Medium-light, #969696);
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
</style>