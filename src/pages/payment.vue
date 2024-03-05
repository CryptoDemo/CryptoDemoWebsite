<template>
  <div>
     <Header icon="/svg/white-wallet.svg" Menuicon="/svg/Main Menu Icons.svg" icon1="/svg/profile-icon.svg"  icon2="/svg/Notification.svg"/>
          <v-row no-gutters>
            <v-col cols="3">
              <div class="pa-2 ma-2">
                  <Side-nav/>
              </div>
            </v-col>

            <v-col cols="9" style="margin-bottom: 194px">
                <div class="pa-2 ma-2">
                    
                    <div class="acct-settings" style="display: flex; justify-content: space-between; margin-bottom: 47px">    
                        <span class="acct-text"> Payment methods</span>
                        <span class="mail-text">vaststudiosng@gmail.com</span>  
                    </div>
 
                    <section style="width: 938px;">
                       <div style="margin-top: 35px; justify-content: space-between; display: flex;">
                          <span class="setup-text"> Add your bank account details below.</span>  
                          <Add-act/>  
                       </div>

                      <div style="margin-top: 28px; border-radius: 24px; border: 1px solid var(--border, #303A46); padding: 16px 26px;">
                        <div >
                          <span class="setup-text d-flex">Personal</span>
                          <div class="d-flex" style="justify-content: space-between;">
                            <div style="display: flex; margin-top: 36px">
                              <span class="acct-details1">Okoli Bernard Chinedu</span>
                              <div class="border1" style="position: relative;right: 3%;"></div>
                              <span class="acct-details1">GUARANTY TRUST BANK</span>
                               <div class="border1" style="position: relative;right: -4%;"></div>
                              <span class="acct-details1 text-center" style="font-weight: 600;">NGN</span>
                               <div class="border1" style="position: relative; right: 4%;"></div>
                              <span class="acct-details1">0154175839</span>
                            </div>

                            <div class="d-flex" style="margin-top: 17px ">
                              <v-btn  class="delete-btn  position-relative me-5" style="width: 96px; height: 40px;">
                                  <img src="/svg/close-circle.svg" style="margin-right: 3px !important"/>
                                  Delete 
                                </v-btn>
                              <v-btn  class="edit-btn  position-relative" style="width: 96px; height: 40px;">
                                  <img src="/svg/magicpen.svg" style="margin-right: 3px !important"/>
                                  Edit
                                </v-btn>
                            </div>
                        </div>
                        </div>
                      </div>
                       <div style="margin-top: 40px; justify-content: space-between; display: flex;">
                          <span class="setup-text">  Add your online wallet details below.</span>  
                          <Add-act/>  
                       </div>

                      <div style="margin-top: 28px; border-radius: 24px; border: 1px solid var(--border, #303A46); padding: 16px 26px;">
                        <div >
                          <span class="setup-text d-flex">Personal</span>
                          <div class="d-flex" style="justify-content: space-between;">
                            <div style="display: flex; margin-top: 36px">
                              <span class="acct-details1">Okoli Bernard Chinedu</span>
                              <div class="border1" style="position: relative;right: 3%;"></div>
                              <span class="acct-details1">GUARANTY TRUST BANK</span>
                               <div class="border1" style="position: relative;right: -4%;"></div>
                              <span class="acct-details1 text-center" style="font-weight: 600;">NGN</span>
                               <div class="border1" style="position: relative; right: 4%;"></div>
                              <span class="acct-details1">0154175839</span>
                            </div>

                            <div class="d-flex" style="margin-top: 17px ">
                              <v-btn  class="delete-btn  position-relative me-5" style="width: 96px; height: 40px;">
                                  <img src="/svg/close-circle.svg" style="margin-right: 3px !important"/>
                                  Delete 
                                </v-btn>
                              <v-btn  class="edit-btn  position-relative" style="width: 96px; height: 40px;">
                                  <img src="/svg/magicpen.svg" style="margin-right: 3px !important"/>
                                  Edit
                                </v-btn>
                            </div>
                        </div>
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
.acct-details1{
overflow: hidden;
color: var(--Gray-Light, #D8D8D8);
text-overflow: ellipsis;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
display: -webkit-box;
width: 138px;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
}

.delete-btn{
border-radius: 12px;
background: rgba(246, 85, 86, 0.12);
align-items: center !important;
/* gap: 5px !important; */
text-transform: unset !important;
display: flex;
padding: 8px 12px;
align-items: center;
gap: 5px;
color: var(--Basic-White, var(--Colors-Base-white, #FFF));
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 19.6px */
}

.edit-btn{
border-radius: 12px;
background: rgba(85, 159, 246, 0.12);
display: flex;
width: 96px;
padding: 8px 12px;
justify-content: space-between;
align-items: center;
flex-shrink: 0;
color: var(--Basic-White, var(--Colors-Base-white, #FFF));
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 19.6px */
text-transform: unset;
}
.border1{
width: 0.5px;
height: 21px;
background: #646464;
}
::-webkit-scrollbar{
  display: none;
}
</style>