 <template>
     <div>
    <v-row justify="center">
      <v-btn style="font-family: Poppins; font-size: 14px; font-weight: 400;" class="primary-btn1" @click="dialog = true" >
        Add Account 

        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M6.5 12H18.5" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5 18V6" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </v-btn>


      <v-dialog v-model="dialog" width="647">
        <v-card style="border-radius: 32px; border: 1px solid var(--border, #303A46); background:#12181F; padding: 32px 72px; box-shadow: none">
          <v-card-title>
             <div class="d-flex">
        
                <div style="padding-top: 69px; display: grid;">
                  <div>
                    <v-btn style="border-radius: 16px;  display: flex; align-items: center; padding: 25px;  border: 1px solid var(--border, #303A46); background: rgba(18, 24, 31, 0.00);transform: rotateZ(90deg); margin-left: 3px; top: -19px">
                    <img src="/svg/personalcard.svg" style="transform: rotate(-89deg);">
                    </v-btn>
                  </div>
                    <v-btn class="psl-btn" style="border-radius: 16px; position: absolute; box-shadow: none; left: 54px; top: 201px; border: 1px solid transparent; display: inline-block; background:  linear-gradient(#12181F, #12181F) padding-box, linear-gradient(60deg, #0B6B96, #2873FF) border-box; width: auto !important; margin-top: 20px; color: #DBE8FF; text-transform: unset; letter-spacing: 0px; transform: rotate(-90deg); padding: 25px; display: flex;">
                       <div style="display: flex; align-items: center;">
                           <span style="margin-right: 12px; font-size: 14px; font-family: Poppins; font-weight: 600;">Personal</span>
                          <img src="/svg/profile-circle(1).svg" style="transform: rotateZ(89deg);">
                       </div>
                      </v-btn>
              
                </div>

              <div>
                  <div style="display: flex; align-items: center; justify-content: space-between;">
                      <span class="ma-4" style="background-image: linear-gradient(360deg, #2873FF, #0B6B96); background-clip: text;  -webkit-text-fill-color: transparent ; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;">Add account</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  @click="dialog = false" style="cursor: pointer;">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.17001 14.8299L14.83 9.16992" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.83 14.8299L9.17001 9.16992" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>      
                  </div>
                <div style=" margin-top: 57px; margin-bottom: 13px; margin-left: 15px ">
                    <span style="color: #969696; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Bank account residence</span>
                    <div>
                      <v-menu >
                              <template v-slot:activator="{ props }">
                                <v-btn
                                  class="acct-modal" width="380px" height="47px" style=" margin-bottom: 17px; gap: 10px"
                                  dark
                                  v-bind="props">
                                  <div  class="py-3" style="display: flex; cursor: pointer; position: absolute; left: 22px; align-items: center;">
                                      <span  style="font-weight: 600; font-family: poppins; text-transform: capitalize; color: var(--Gray-Medium-light, #969696);">{{selected}}</span> 
                                  </div>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none" style="position: absolute; right: 15px; bottom: 18px; ">
                                      <path d="M4.94888 6.49413C5.08612 6.49415 5.22202 6.46714 5.34882 6.41463C5.47561 6.36213 5.59084 6.28516 5.6879 6.18813L9.58789 2.28814C9.78375 2.09227 9.8938 1.82663 9.8938 1.54964C9.8938 1.27265 9.78375 1.00701 9.58789 0.811147C9.39203 0.615285 9.12639 0.505239 8.8494 0.505239C8.5724 0.505239 8.30676 0.615285 8.1109 0.811147L4.9469 3.21114L1.7829 0.811147C1.58704 0.615285 1.32139 0.505239 1.0444 0.505239C0.767412 0.505239 0.50174 0.615285 0.305878 0.811147C0.110015 1.00701 2.14471e-08 1.27265 0 1.54964C-2.1447e-08 1.82663 0.110015 2.09227 0.305878 2.28814L4.2059 6.18813C4.3034 6.28569 4.41925 6.36297 4.54678 6.41549C4.67431 6.46801 4.81096 6.49473 4.94888 6.49413Z" fill="#E0E4F5"/>
                                  </svg>
                                 
                                </v-btn>
                              </template>

                              <v-list>
                                <v-list-item>
                                  <div v-for="(userCountry, index) in userResidence" class="d-flex py-3" style="cursor: pointer"
                                    :key="index" >
                                
                                    <v-list-item-title @click="selected=userCountry.title;" class="d-flex"> 
                                      <span> {{ userCountry.title }} </span>
                                    </v-list-item-title>
                                  </div>
                                </v-list-item>
                              </v-list>
                      </v-menu>
                    </div>   

                    <span style="color: #969696; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Currency</span>
                    <div>
                          <v-menu :currencyType="currencyType">
                                  <template v-slot:activator="{ props }">
                                    <v-btn
                                      class="acct-modal" width="380px" height="47px"
                                 
                                      v-bind="props">
                                      <div  class="py-3" style="display: flex; cursor: pointer; position: absolute; left: 22px; align-items: center;">
                                          <span class="mt-" style="font-weight: 600; font-family: poppins; text-transform: capitalize; color: var(--Gray-Medium-light, #969696);">{{selectedCurrency}}</span> 
                                      </div>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none" style="position: absolute; right: 15px; bottom: 18px;">
                                          <path d="M4.94888 6.49413C5.08612 6.49415 5.22202 6.46714 5.34882 6.41463C5.47561 6.36213 5.59084 6.28516 5.6879 6.18813L9.58789 2.28814C9.78375 2.09227 9.8938 1.82663 9.8938 1.54964C9.8938 1.27265 9.78375 1.00701 9.58789 0.811147C9.39203 0.615285 9.12639 0.505239 8.8494 0.505239C8.5724 0.505239 8.30676 0.615285 8.1109 0.811147L4.9469 3.21114L1.7829 0.811147C1.58704 0.615285 1.32139 0.505239 1.0444 0.505239C0.767412 0.505239 0.50174 0.615285 0.305878 0.811147C0.110015 1.00701 2.14471e-08 1.27265 0 1.54964C-2.1447e-08 1.82663 0.110015 2.09227 0.305878 2.28814L4.2059 6.18813C4.3034 6.28569 4.41925 6.36297 4.54678 6.41549C4.67431 6.46801 4.81096 6.49473 4.94888 6.49413Z" fill="#E0E4F5"/>
                                      </svg>
                                     
                                    </v-btn>
                                  </template>

                                  <v-list>
                                    <v-list-item>
                                      <div v-for="(currencyType, index) in currencyType" class="d-flex py-3" style="cursor: pointer"
                                        :key="index" >
                                    
                                        <v-list-item-title @click="selectedCurrency=currencyType.title;" class="d-flex"> 
                                          <span> {{ currencyType.title }} </span>
                                        </v-list-item-title>
                                      </div>
                                    </v-list-item>
                                  </v-list>
                          </v-menu>
                    </div>        
                </div>
              </div>

             </div>

          </v-card-title>

           <v-card-actions style="display: flex; justify-content: space-around; margin-left: 13px ">
            <v-btn color="#323232" variant="text" @click="dialog = false" style="border-radius: 16px; font-size: 16px; font-weight: 600; width: 208px; height: 63px; text-transform: unset; letter-spacing: 0px; border: 1px solid var(--border, #303A46); background: var(--Black-20, #E2E8F0);">
              Close
            </v-btn>
       
            <v-btn color="#FFF" class="ma-2 primary-btn1" @click="dialog2 = true" style="width: 208px; height: 63px; font-size: 16px; font-weight: 600; text-transform: unset; letter-spacing: 0px;border-radius: 16px;">
              Next
            </v-btn>
         
          </v-card-actions>
         
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog2" height=""
        width="auto"
      >
        <v-card style="border-radius: 32px; border: 1px solid var(--border, #303A46);  height: 100%; background:#12181F; padding: 32px 70px; box-shadow: none">
          <v-card-title>
            <div class="d-flex" style="align-items: center; justify-content: space-between; margin-bottom: 52px">
               <div class="d-flex" style="align-items: center;">
                 <span class="me-5" style="background-image: linear-gradient(360deg, #2873FF, #0B6B96); background-clip: text;  -webkit-text-fill-color: transparent ; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;">Add account</span>
                 <img src="/flags/bi.svg" width="24" style="border-radius: 9px">
                </div>
                 <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" @click="dialog2 = false"  style="cursor: pointer;">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.16998 14.8299L14.83 9.16992" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.83 14.8299L9.16998 9.16992" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                 </div>
            </div>
            <div class="d-flex">
                <div>
                  <span style="color: #969696; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Bank</span>
                    <v-menu :FinancialInstitutions="FinancialInstitutions">
                            <template v-slot:activator="{ props }">
                              <v-btn
                                class="acct-modal me-6" width="380px" height="47px" style=" margin-bottom: 17px; gap: 10px; letter-spacing: 0px;"
                               
                                v-bind="props">
                                <div  class="py-3" style="display: flex; cursor: pointer; position: absolute; left: 22px; align-items: center;">
                                    <span  style="font-weight: 600; font-family: poppins; text-transform: capitalize; color: var(--Gray-Medium-light, #969696);">{{selectedBank}}</span> 
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none" style="position: absolute; right: 15px; bottom: 18px; ">
                                      <path d="M5.05508 6.49413C5.19232 6.49415 5.32822 6.46714 5.45502 6.41463C5.58182 6.36213 5.69705 6.28516 5.7941 6.18813L9.69409 2.28814C9.88995 2.09227 10 1.82663 10 1.54964C10 1.27265 9.88995 1.00701 9.69409 0.811147C9.49823 0.615285 9.23259 0.505239 8.9556 0.505239C8.67861 0.505239 8.41296 0.615285 8.2171 0.811147L5.0531 3.21114L1.8891 0.811147C1.69324 0.615285 1.4276 0.505239 1.1506 0.505239C0.873613 0.505239 0.607941 0.615285 0.412079 0.811147C0.216217 1.00701 0.106201 1.27265 0.106201 1.54964C0.106201 1.82663 0.216217 2.09227 0.412079 2.28814L4.3121 6.18813C4.4096 6.28569 4.52546 6.36297 4.65298 6.41549C4.78051 6.46801 4.91716 6.49473 5.05508 6.49413Z" fill="#E0E4F5"/>
                                </svg>
                                
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-item>
                                <div v-for="(FinancialInstitutions, index) in FinancialInstitutions" class="d-flex py-3" style="cursor: pointer"
                                  :key="index" >
                              
                                  <v-list-item-title @click="selectedBank=FinancialInstitutions.title;" class="d-flex"> 
                                    <span> {{ FinancialInstitutions.title }} </span>
                                  </v-list-item-title>
                                </div>
                              </v-list-item>
                            </v-list>
                    </v-menu>
                </div>

                <div style="color: #969696; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">
                  <div style=" margin-top: 10px;">
                    <span  style="color: #969696; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Account holder’s name</span>
                  </div>
                  <input type="text" class="mt-1" placeholder="Okoli Bernard Chinedu" style="height: 47px; padding: 17px; font-weight: 600; color: #969696; width: 380px; border-radius: 16px; font-family: poppins; outline: none; background: #161D26;" />
                </div>
            </div>

            <div class="d-flex" style="justify-content: space-between;">
               <div style=" font-size: 14px; font-style: normal; font-weight: 600; line-height: normal; display: grid">
                  <span style="color: #969696; margin-top: 18px; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Custom bank details</span>
                  <input type="text"  style="height: 47px; font-weight: 600; color: #969696; padding: 17px; width: 380px; border-radius: 16px; font-family: poppins; outline: none; background: #161D26;" />
                  <div class="d-flex mt-3">
                      <img src="/svg/info-circle.svg" class="me-3"/>
                      <span style="font-size: 12px; font-style: normal; font-weight: 400; line-height: normal; color: #646464"> Include additional bank account information if required.</span>
                  </div>
                </div>
              
                 <div style="color: #969696; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">
                  <div style=" margin-top: 18px;">
                  <span style="color: #969696; margin-top: 18px; font-family: Poppins; font-size: 14px;  font-style: normal; font-weight: 600; line-height: normal;">Account number</span>
                  </div>
                  <input type="text" placeholder="08456102341654" style="height: 47px; font-weight: 600; color: #969696; padding: 17px; width: 380px; border-radius: 16px; font-family: poppins; outline: none; background: #161D26;" />
                 
                </div>
            </div>
            <div class="d-flex mt-3">
                      <img src="/svg/info-circle.svg" class="me-3"/>
                  <span style="font-size: 12px; font-style: normal; font-weight: 400; line-height: normal; color: #646464"> If you'd like to get money from other countries, we need more information about the account holder.</span>
            </div>
            <section v-if="isHidden">
                 <div class="d-flex" style="justify-content: space-between; margin-top: 25px">
                    <div style=" font-size: 14px; font-style: normal; font-weight: 600; line-height: normal; display: grid">
                        <span style="color: #969696; margin-top: 18px; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;"><span style="color: #969696; margin-top: 18px; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Country of residence</span></span>
                        <input type="text"  style="height: 47px; padding: 17px; width: 380px; font-weight: 600; color: #969696; border-radius: 16px; font-family: poppins; outline: none; background: #161D26;" />
 
                      </div>
                    
                      <div style="color: #969696; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">
                        <div style=" margin-top: 18px;">
                        <span style="color: #969696; margin-top: 18px; font-family: Poppins; font-size: 14px; font-weight: 600; color: #969696; font-style: normal; font-weight: 600; line-height: normal;">State/region</span>
                        </div>
                        <input type="text" placeholder="08456102341654" style="height: 47px; font-weight: 600; color: #969696; padding: 17px; width: 380px; border-radius: 16px; font-family: poppins; outline: none; background: #161D26;" />
                      
                      </div>
                  </div>
                 <div class="d-flex" style="justify-content: space-between;">
                    <div style=" font-size: 14px; font-style: normal; font-weight: 600; line-height: normal; display: grid">
                        <span style="color: #969696; margin-top: 18px; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">City</span>
                        <input type="text"  style="height: 47px; font-weight: 600; color: #969696; padding: 17px; width: 380px; border-radius: 16px; font-weight: 600; color: #969696; font-family: poppins; outline: none; background: #161D26;" />
                      </div>
                    
                      <div style="color: #969696; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">
                        <div style=" margin-top: 18px;">
                        <span style="color: #969696; margin-top: 18px; font-family: Poppins; font-weight: 600; color: #969696; font-size: 14px; font-style: normal; line-height: normal;">Zip code</span>
                        </div>
                        <input type="text" placeholder="08456102341654" style="height: 47px; font-weight: 600; color: #969696; padding: 17px; width: 380px; border-radius: 16px; font-family: poppins; outline: none; background: #161D26;" />
                      
                      </div>
                  </div>
                   <div style="color: #969696; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">
                        <div style=" margin-top: 18px;">
                        <span style="color: #969696; margin-top: 18px; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Address</span>
                        </div>
                        <input type="text" placeholder="Phase2" style="height: 47px; font-weight: 600; color: #969696; padding: 17px; width: 100%; border-radius: 16px; font-family: poppins; outline: none; background: #161D26;" />
                      
                      </div>
            </section>
            <div style="display: flex; justify-content: space-between; align-items: self-end; margin-top: 21px;">
                  <v-btn color="#323232" variant="text" @click="dialog2 = false" style="border-radius: 16px; font-size: 16px; font-weight: 600; width: 208px; height: 63px; text-transform: unset; letter-spacing: 0px; border: 1px solid var(--border, #303A46); background: var(--Black-20, #E2E8F0);">
                    Back
                  </v-btn>

                  <div >
                    <h6  @click="isHidden = !isHidden" style="color: #5892FF; font-size: 12px; cursor: pointer; font-weight: 400;"> International trade details</h6>
                    <div style="display: flex; justify-content: center; cursor: pointer"> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none" @click="isHidden = !isHidden" class="arrow1" v-if="isHidden" >
                          <path d="M5.44492 0.0117287C5.30768 0.0117094 5.17178 0.0387232 5.04498 0.091227C4.91818 0.143731 4.80295 0.220696 4.7059 0.317728L0.805908 4.21772C0.610045 4.41358 0.5 4.67923 0.5 4.95622C0.5 5.23321 0.610045 5.49885 0.805908 5.69471C1.00177 5.89057 1.26741 6.00062 1.5444 6.00062C1.82139 6.00062 2.08704 5.89057 2.2829 5.69471L5.4469 3.29472L8.6109 5.69471C8.80676 5.89057 9.0724 6.00062 9.3494 6.00062C9.62639 6.00062 9.89206 5.89057 10.0879 5.69471C10.2838 5.49885 10.3938 5.23321 10.3938 4.95622C10.3938 4.67923 10.2838 4.41358 10.0879 4.21772L6.1879 0.317728C6.0904 0.220174 5.97454 0.142894 5.84702 0.0903725C5.71949 0.0378506 5.58284 0.0111274 5.44492 0.0117287Z" fill="#5892FF"/>
                      </svg>

                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none"  @click="isHidden = !isHidden" class="arrow1"  v-else>
                          <path d="M5.44888 5.99999C5.58612 6.00001 5.72202 5.973 5.84882 5.92049C5.97561 5.86799 6.09084 5.79102 6.1879 5.69399L10.0879 1.794C10.2838 1.59813 10.3938 1.33249 10.3938 1.0555C10.3938 0.77851 10.2838 0.512869 10.0879 0.317007C9.89203 0.121144 9.62639 0.0110984 9.3494 0.0110984C9.0724 0.0110984 8.80676 0.121144 8.6109 0.317007L5.4469 2.717L2.2829 0.317007C2.08704 0.121144 1.82139 0.0110984 1.5444 0.0110984C1.26741 0.0110984 1.00174 0.121144 0.805878 0.317007C0.610015 0.512869 0.5 0.77851 0.5 1.0555C0.5 1.33249 0.610015 1.59813 0.805878 1.794L4.7059 5.69399C4.8034 5.79155 4.91925 5.86882 5.04678 5.92135C5.17431 5.97387 5.31096 6.00059 5.44888 5.99999Z" fill="#5892FF"/>
                      </svg>
                      
                      </div>
                  </div>  

                  <v-btn color="#FFF" class=" primary-btn1" @click="dialog2 = true" style="width: 208px; height: 63px; font-size: 16px; color:white; font-weight: 600; text-transform: unset; letter-spacing: 0px;border-radius: 16px;">
                    Add account
                  </v-btn> 
           </div>




          </v-card-title>
       
        </v-card>
      </v-dialog>

     
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dialog = ref(false);
const dialog2 = ref(false);
const dialog3 = ref (false);
const isHidden = ref(false);
const selected  = ref ('Nigeria') 

const userResidence = [
                  {
                     title:"Canada"
                  },
                  {
                     title:"Australia"
                  },
                  {
                     title:"India"
                  },
                  {
                    title:"Austria"
                  }
];

const selectedCurrency  = ref ('Nigerian Naira') 
const currencyType = [
                  {
                     title:"Pounds sterling"
                  },
                  {
                     title:"Rupees"
                  },
                  {
                     title:"Canadian Dollars"
                  },
                  {
                    title:"Euros"
                  }
];
const selectedBank  = ref ('Guarantee Trust Bank') 
const FinancialInstitutions = [
                  {
                     title:"Monie Point"
                  },
                  {
                     title:"Zenith Bank"
                  },
                  {
                     title:"Access Bank"
                  },
                  {
                    title:"Fidelity Bank"
                  }
];
</script>

<style scoped>


.arrow1 {
  animation: slide1 3s ease-in-out infinite;
}

@keyframes slide1 {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }

  50% {
    transform: translate(0px, 5px) rotate(0deg);
  }
}


.active{
border-radius: 12px;
background: #1F2F2F;
}
.acct-modal{
border-radius: 16px;
background: #161D26;
display: flex;
padding: 13px 23px;
align-items: center;
gap: 316px;
box-shadow: none!important;
}

::-webkit-input-placeholder {
color: var(--Gray-Medium-light, #969696)!important;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;

}

</style>