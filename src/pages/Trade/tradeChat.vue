<template>
  <div>
          <v-row no-gutters style="overflow:;">
            <v-col cols="3">
              <div class="pa-2 ma-2">
                          <!-- //side nav here../ -->
              </div>
            </v-col>

            <v-col cols="9">
              <div class="pa-2 ma-2">
                 <div class="chat-headings" > 
                  <div class="chat-headings"  style="display: flex; justify-content: space-between; ">    
                      <div class="d-flex">
                          <img src="/svg/apple.svg" class="me-3" alt="avatar"/>

                          <div style="display: grid;">
                              <span style="font-family: Poppins; display: flex; color: #2873FF; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;">Tom Gravesen</span>
                              <span style="color: var(--Second-Text, #A4A8AB); font-family: Poppins; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal; letter-spacing: 0.1px;">Online</span>
                          </div>
                      </div>
                      
                      <div class="d-flex">
                          <img src="/svg/call1.svg"/>
                          <img src="/svg/profile-circle(2).svg"/>
                          <div class="d-flex" style="align-items: center;">
                            <img src="/svg/heart-tick.svg" alt="icon">
                            <span class="user-location">0</span>
                          </div>

                          <div class="d-flex" style="align-items: center;">
                            <img src="/svg/heart-remove.svg" alt="icon">
                            <span class="user-location">0</span>
                          </div>  
                          <v-dialog max-width="500">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-btn v-bind="activatorProps" bg-color=""
                                
                                
                            
                                ></v-btn>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-card title="Dialog">
                                <v-card-text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn
                                    text="Close Dialog"
                                    @click="isActive.value = false"
                                    ></v-btn>
                                </v-card-actions>
                                </v-card>
                            </template>
                            </v-dialog>   
                      </div>
                   
                  </div>
                  <div class="chat-border" style="margin-left: 30px"></div>
                  <div style="border-radius: 12px; background: #12181F;"></div>
                   <div class="ma-2" style="border-radius: 0px 24px 24px 24px; background: var(--secondary-background, #12181F);padding: 30px;">
                        <span style="color: var(--Gray-Medium-light, #969696);nfont-family: Poppins; font-size: 14px; font-style: normal; font-weight: 400; line-height: 24px;letter-spacing: 0.1px;">
                            <span style="color:#D8D8D8; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 400; ine-height: 24px; /* 171.429% */ letter-spacing: 0.1px;"> You're buying 0.00032299 BTC (19,788.47 NGN) for 20,000 NGN via Bank Transfer. The BTC is now in escrow and it's safe to make your payment. </span>
                           <div style="display: grid">
                             <span class="mb-1 mt-2">1. When the seller is ready to start the transaction, they'll share their bank account details in the trade chat.</span>
                            <span class="mb-1">2. Make your payment.</span>
                            <span class="mb-1">3. Mark the trade as Paid and upload proof of payment.</span>
                            <span class="mb-1">4. Wait for your trade partner to confirm your payment.</span>
                            <span class="mb-1">5. Your trade partner will release the BTC to you.</span>
                           </div>
                        </span>
                    </div>

                      <div class="ma-2" style="border-radius: 0px 24px 24px 24px; background: var(--secondary-background, #12181F);padding: 30px;">
                          <span style="color:#D8D8D8; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 400; ine-height: 24px; /* 171.429% */ letter-spacing: 0.1px;">Third-party payments are not accepted for this trade. The selected bank accounts must belong to the buyer and seller respectively.</span>
                      </div>
                 </div>
                <div>
                    

                </div>
              </div>
            </v-col>
          </v-row>
  </div>
</template>

<script setup>

</script>

<style scoped>

.partners-text{
color: var(--Gray-Medium-dark, #646464);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.header{
color: var(--Gray-Medium-light, #969696);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 22.4px */
}

.chat-headings{
width: 940px;
padding: 21px var(--spacing-3xl, 24px);
justify-content: space-between;
align-items: center;
margin-bottom: 16px;
}

.chat-border{
background: var(--border, #303A46);
height: 2px;
flex-shrink: 0;
}
</style>