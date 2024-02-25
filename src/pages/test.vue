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
                    
                    <div class="acct-settings" style="display: flex; justify-content: space-between">    
                        <span class="acct-text"> Payment methods</span>
                        <span class="mail-text">vaststudiosng@gmail.com</span>  
                    </div>
                    <span class="setup-text"> Add your bank account details below.</span>
                    <div>
                       <v-btn class="primary-btn" @click="dialog = true">Add Account</v-btn>

                       
                    </div>
                    <section style="width: 938px;">

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
.input-styling{
  width: 350px;
  height: 64px !important;
  background: var(--secondary-background, #12181F) !important;
  border-radius: 15px ;
}
.second-text{
color: var(--Second-Text, #A4A8AB);
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.update-btn{
color: var(--Gray-Light, #D8D8D8);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
display: flex;
width: 224px;
height: 64px!important;
padding: 21px 16px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 16px;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);
text-transform: unset!important;
}
.setup-text{
color: var(--Colors-Base-white, #FFF);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 16px;
}
.pswrd-mgt{
color: var( #A4A8AB);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.primary-btn{
/* width: 100px; */
height: 60px!important;
flex-shrink: 0;
border-radius: 16px;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF)!important;
color: var(--White, var(--Colors-Base-white, #FFF));
text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: unset !important;
letter-spacing: 0px;
}
.mdi-checkbox-blank-outline::before {
    content: "\F0131";
    background: white !important;
    border-radius: 8px;
}
</style>