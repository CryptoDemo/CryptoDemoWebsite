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

                  <div style="margin-top: 11px;">    
                    <span class="subtitle2">Select up to 3 tags that will apply to this offer</span>
                        <v-select style="border-radius: 15px; border: 1px solid #1B2537; background: #10192D;"
                            v-model="value" :items="items" variant="none"
                            closable-chips chips
                            multiple>
                            <!-- <template><v-chip></v-chip></template> -->
                        </v-select>
                        <span class="subtitle2">Tags are requirements that sellers must meet to participate in this transaction. </span>
                      <div style="margin-top: 20px;">
                        <span style="color: #2873FF; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 700; line-height: 150%;">See all tags</span>
                      </div>
                  

                    <div style="margin-top: 40px;">
                      <span class="prc3">Your Offer label</span>
                      <div style="margin-top: 10px;">
                        <v-textarea variant="none" no-resize clearable placeholder="Maximum 25 Characters. Only letters, numbers and dashes." style="border-radius: 15px; height: 61px;  border: 1px solid #1B2537; background: #10192D;"></v-textarea>   
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

                        <span class="subtitle3">Target Country</span>
                        <span class="subtitle2 mt-4">Select your target country</span>
                        <v-textarea variant="none" no-resize clearable  placeholder="Select (Optional)" style="border-radius: 15px; height: 61px; margin-top: 18px; margin-bottom: 18px;  border: 1px solid #1B2537; background: #10192D;"></v-textarea>
                        <span class="subtitle2">Only users who have completed past trades up to your required number will be able to sell to you</span>
                      
                       <div style="display: flex; flex-direction: column; margin-top: 24px;">
                        <span class="subtitle3">Visibility</span>

                        <div style="display: -webkit-inline-box; height: 40px;">                         
                          <v-checkbox></v-checkbox>
                          <span class="d-flex mt-4 offr-cnd">Show this offer to my trusted users only</span>
                        </div>
                       <!-- </div> -->

                      <v-row>
                        <v-col >
                          <div class="position-relative">
                            <div style="margin-top: 26px; margin-bottom: 16px;"><span class="subtitle3 mb-4">Minimum Trade Required</span></div>
                            <div>
                              <span class="subtitle2 mb-2">Show my offer only to users who have completed;</span>
                            </div>
                            <input type="text" placeholder="enter number of completed trades" style="outline: none; height: 61px; padding-right: 25px!important; position: relative; border-radius: 15px; border: 1px solid #1B2537; background: #10192D; width: 80%;  padding-left: 15px;"/>
                            <v-menu>
                                <template v-slot:activator="{ props }">
                                  <v-btn v-bind="props" style="max-width: 60px; height: 57px; margin-top: 3px; position: absolute; border-radius: 11px; background: rgba(19, 29, 53, 1); box-shadow: none; right: 83px; letter-spacing: 0px;  text-transform: capitalize;"> 
                                    <span class="subtitle2">Trades</span>
                                  </v-btn>
                                </template>

                                <v-list style="width: 60%; border-radius: 24px;  border: 1px solid #303A46; background: #12181F;">
                                  <v-list-item>
                                    <v-row dense >
                                        <v-col v-for="(item, index) in Currency" class="" sm="12" :key="index" >
                                      
                                          <v-list-item-title @click="currencyType=item"> 
                                            <div style="display: flex; justify-content: center; cursor: pointer;">
                                              <span class="subtitle2 my-2">{{ item }}</span>

                                            </div>

                                          </v-list-item-title>
                                        </v-col>
                                    </v-row>
                                  </v-list-item>
                                </v-list>
                            </v-menu> 
                            <div><span class="subtitle2">Only users who have completed past trades up to <br> your required number will be able to sell to you</span></div>
                          </div>
                        </v-col>

                        <v-col>
                          <div style="position: relative;">
                            <div style="margin-top: 26px; margin-bottom: 16px;"><span class="subtitle3 mb-4">New users</span></div>
                              <div>
                                <span class="subtitle2 mb-2">Maximum trade amount for new users</span>
                              </div>
                              
                              <input type="text" placeholder="App fixed amount" style="outline: none; height: 61px; padding-right: 25px!important; position: relative; border-radius: 15px; border: 1px solid #1B2537; background: #10192D; width: 80%;  padding-left: 15px;"/>
                              <v-menu>
                                  <template v-slot:activator="{ props }">
                                    <v-btn v-bind="props" style="max-width: 60px; height: 57px; position: absolute;  border-radius: 11px; background: rgba(19, 29, 53, 1); box-shadow: none; right: 83px; letter-spacing: 0px;  text-transform: capitalize; display: flex; top: 66px;"> 
                                      <span class="subtitle2">{{ currencyType }}</span>
                                    </v-btn>
                                  </template>

                                  <v-list style="width: 60%; border-radius: 24px;  border: 1px solid #303A46; background: #12181F;">
                                    <v-list-item>
                                      <v-row dense >
                                          <v-col v-for="(item, index) in Currency" class="" sm="12" :key="index" >
                                        
                                            <v-list-item-title @click="currencyType=item"> 
                                              <div style="display: flex; justify-content: center;">
                                                <span class="currency-list my-2">{{ item }}</span>

                                              </div>

                                            </v-list-item-title>
                                          </v-col>
                                      </v-row>
                                    </v-list-item>
                                  </v-list>
                              </v-menu> 
                              <div><span class="subtitle2">Only users who have completed past trades up to <br> your required number will be able to sell to you</span></div>
                          </div>
                        </v-col>
                      </v-row>
                     
                      <div>
                        <div style="margin-top: 24px; margin-bottom: 16px; display: flex; flex-direction: column;">
                          <span class="subtitle3 mb-3">Limit by countries</span>
                          <span class="subtitle2">Use one of the two options, once you block some countries, your offer is visible to every other country and vice versa</span>
                        </div>
                        <v-row>
                          <v-col>
                            <span class="subtitle2 mt-5">Select countries to allow</span>
                            <v-select class="subtitle3" variant="none"
                                placeholder="Nigeria"  style="width: 80%; border-radius: 15px; margin-top: 8px; height: 61px; border: 1px solid #1B2537; background: #131D35;"
                                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                              ></v-select>
                          </v-col>
                          <v-col>
                            <span class="subtitle2">Select countries to block</span>
                            <v-select variant="none"
                                placeholder="Nigeria"  style="width: 80%; border-radius: 15px; margin-top: 8px; height: 61px; border: 1px solid #1B2537; background: #131D35;"
                                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                              ></v-select>
                          </v-col>
                        </v-row>
                      </div>


                      <div style="display: flex; flex-direction: column; margin-top: 24px;">
                        <span class="subtitle3">Proxy/VPN users</span>

                        <div style="display: -webkit-inline-box; height: 40px;">                         
                          <v-checkbox></v-checkbox>
                          <span class="d-flex mt-4 offr-cnd">Do not allow users with VPN or any anonymous users</span>
                        </div>
                       </div>

                       <div style="margin-top: 16px;">
                        <span class="subtitle2">Select days of the week</span>
                        <v-select variant="none" style="border-radius: 15px; border: 1px solid #1B2537; background: #10192D;"
                             :items="['Mon', 'Tue', 'Wen', 'Thur', 'Fri', 'Sat', 'Sun']"
                            closable-chips chips
                            multiple>
                             <!-- <template><v-chip></v-chip></template> -->
                        </v-select>
                        <span class="subtitle2">Your offer will be visible only on these days</span>
                       </div>
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
                      
                  
                        <v-btn class="next-step" :disabled="loading" :loading="loading" @click.prevent="navigateTo('/createOffer/createOffer5')" >Create Offer</v-btn>
                      
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

const currencyType = ref('NGN')

const Currency = ([
  'USD',
  'Euro',
  'NGN',
  'NGN',

]);
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

.subtitle3{
color: var(--Black-5, #F8FAFC);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 24px */
}

.mdi-checkbox-blank-outline::before {
    content: "\F0131";
    background: #10192D !important;
    border-radius: 8px;
    /* outline:1px solid #F00; */
    /* border: 1px solid red; */
}
</style>