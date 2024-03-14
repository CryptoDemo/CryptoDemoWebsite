<template>
    <Header/>
  <div>
    <v-container style="margin-top: 80px;">
      <v-row no-gutters>
            <v-col cols="9">
                <div class="pa-2 ma-2">      
                  <span class="offer-txt1">{{ PurchaseCrypto ? 'Create an Offer to Sell your Crypto' : 'Create an Offer to Buy your Crypto'}}</span>

                  <div style="display: flex; flex-direction: column; margin-top: 56px;">
                      <span class="prc1">Trade Instructions</span>
                      <span class="prc3" style="margin-top: 35px;">Offer Tags</span>
                  </div>

                  <div style="margin-top: 11px;">    
                    <span class="subtitle2">Select up to 3 tags that will apply to this offer</span>
                        <v-select style="border-radius: 15px; border: 1px solid #1B2537; background: #10192D;"
                            v-model="value" :items="items" variant="none"
                            closable-chips chips
                            multiple>
                            <template><v-chip></v-chip></template>
                        </v-select>
                        <span class="subtitle2">Tags are requirements that sellers must meet to participate in this transaction. </span>
                      <div style="margin-top: 20px;">
                        <span style="color: #2873FF; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 700; line-height: 150%;">See all tags</span>
                      </div>
                  

                    <div style="margin-top: 40px;">
                      <span class="prc3">Your Offer label</span>
                      <div style="margin-top: 10px;">
                        <v-textarea variant="none" no-resize clearable  placeholder="Maximum 25 Characters. Only letters, numbers and dashes." style="border-radius: 15px; height: 61px;  border: 1px solid #1B2537; background: #10192D;"></v-textarea>   
                        <span class="subtitle2">Make your offer stand out to other users with a catchy label. Your offer label can be up to 25 characters long and can contain letters, numbers, the apostrophe and the hyphen.</span>
                      </div>
                      </div>


                    <div style="margin-top: 40px;">
                      <span class="prc3">Offer Terms</span>
                      <div style="margin-top: 10px;">
                        <v-textarea variant="none" clearable no-resize placeholder="Write your offer terms..." style="border-radius: 15px;  border: 1px solid #1B2537; background: #10192D;"></v-textarea>    
                        <span class="subtitle2">Anybody who views your offer will see these terms. Keep them simple and clear to make your offer sound attractive.</span>
                      </div>
                    </div>


                    <div style="margin-top: 40px;">
                      <span class="prc3">Trade Instructions</span>
                      <div style="margin-top: 10px;">
                        <v-textarea variant="none" clearable no-resize placeholder="List out your instructions for your trade partner." style="border-radius: 15px;  border: 1px solid #1B2537; background: #10192D;"></v-textarea>    
                        <span class="subtitle2">To ensure a successful trade be transparent about what you expect from your trade partner and list out what you need.</span>
                      </div>
                    </div>
                    
                    <div style="margin-top: 35px; margin-bottom: 25px; display: grid;">
                      <span class="prc3" style="font-family: manrope;">Offer conditions</span>
                      
                        <div style="display: -webkit-inline-box; height: 40px;">                         
                          <v-checkbox></v-checkbox>
                          <span class="d-flex mt-4 offr-cnd">Trade partner must be verified</span>
                        </div>
                        <div style="display: -webkit-inline-box;">                         
                          <v-checkbox></v-checkbox>
                          <span class="d-flex mt-4 offr-cnd">Trade partner must show their full name</span>
                        </div>
                    </div>



                    <div>

                      <div>
                        <div style="margin-top: 130px;">
                          <span class="payment1" style="font-size: 32px; color: #D8D8D8; margin-bottom: 7px;">About this step</span>
                        </div>

                        <span style="color: #D8D8D8; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">Set the terms, instructions, and limitations for people to trade <br> on this offer.</span>

                        <div style="display: flex; flex-direction: column; margin-top: 18px;">
                          <span class="abt-txt1">You want to sell Bitcoin (BTC)</span>
                          <span class="abt-txt1">And get paid via NIP (NIBSS Instant Payment) in US Dollar (USD)</span>
                          <span class="abt-txt1">You will pay Demo a 1% fee for each trade</span>
                        </div>
                        <div style="display: flex; flex-direction: column; margin-top: 3px;">
                          <span style="font-weight: 600;">  You have set next special rules for kiosk trades:</span>
                          <span class="abt-txt1">Allow all kiosk trades</span>
                          <span class="abt-txt1">No minimum for kiosk trades</span>
                          <span class="abt-txt1">No proxy/VPN restrictions for kiosk trades</span>
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
                          <span class="prc" style="color: #35B233;">Pricing</span>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="243" viewBox="0 0 7 243" fill="none" style="position: relative; left: 131px; margin-top: 30px;">
                            <path d="M3.49999 237.333C2.02723 237.333 0.833323 238.527 0.833323 240C0.833323 241.473 2.02723 242.667 3.49999 242.667C4.97275 242.667 6.16666 241.473 6.16666 240C6.16666 238.527 4.97275 237.333 3.49999 237.333ZM3 -2.18557e-08L2.99999 240L3.99999 240L4 2.18557e-08L3 -2.18557e-08Z" fill="#5FC381"/>
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


const items = ref(['Guided trade', 'No third parties', 'Receipt required', 'Exchange', 'Demo']);
const value = ref([ 'Guided trade', 'No third parties', 'Receipt required',]);
</script>

<style>

.prc1{
color: var(--Primary-100, #2873FF);
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.offer-txt1{
color: var(--Gray-Light, #D8D8D8);
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

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
.prc{
color: var(--Gray-Light, #D8D8D8);
text-align: center;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.v-chip{
border-radius: 12px !important;
background: #131D35 !important;
width: fit-content !important;
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

.subtitle2{
color: var(--Main-Greyscale-40, #8E9BAE);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 19.6px */
}
::-webkit-input-placeholder {
color: var(--Black-40, #8E9BAE);
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 19.6px */
}

::-webkit-scrollbar{
  display: none;
}

.abt-txt1{
  color: #D8D8D8;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: list-item;
  margin-left: 17px;
}
.prc3{
color: var(--Gray-Medium-light, #969696);
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.offr-cnd{
color: #E2E8F0;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 22.4px */
}
.payment1{
  color: #D8D8D8;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.mdi-checkbox-blank-outline::before {
    content: "\F0131";
    background: #10192D !important;
    border-radius: 8px;
    /* outline:1px solid #F00; */
    /* border: 1px solid red; */
}
</style>