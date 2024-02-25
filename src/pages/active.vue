<template>
     <div>
    <v-row justify="center" >
      <v-btn color="primary" class="ma-2" @click="dialog = true" >
        add account +
      </v-btn>

      <v-dialog v-model="dialog" width="647" >
        <v-card style="border-radius: 32px; border: 1px solid var(--border, #303A46); background:#12181F; padding: 32px 72px; box-shadow: none">
          <v-card-title>
             <div class="d-flex">
        
                <div style="padding-top: 69px; display: grid;">
                  <div>
                    <v-btn style="border-radius: 16px;  display: flex; align-items: center; padding: 19px;  border: 1px solid var(--border, #303A46); background: rgba(18, 24, 31, 0.00);transform: rotateZ(89deg)">
                    <img src="/svg/personalcard.svg" style="transform: rotate(-89deg);">
                    </v-btn>
                  </div>
                
                 
                    <v-btn style="border-radius: 16px;  position: absolute; left: 54px; top: 201px ; border: 1px solid var(--Primary-100, #2873FF);background: #12181F;  width: auto !important; margin-top: 20px;  color: #DBE8FF; text-transform: unset; letter-spacing: 0px; transform: rotate(-90deg); padding: 19px; display: flex;">
                       <div style="display: flex; align-items: center; ">
                           <span style="margin-right: 12px">Personal</span> 
                          <img src="/svg/profile-circle(1).svg"  style="transform: rotateZ(89deg);">
                       </div>
                      </v-btn>
              
                </div>

              <div>
               <span class="ma-4" style="color: #2873FF; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;">Add account</span>
                <div style=" margin-top: 57px; margin-bottom: 13px; margin-left: 15px ">
                    <span style="color: #969696; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Bank account residence</span>
                    <div>
                      <v-menu :userCountry="userCountry">
                              <template v-slot:activator="{ props }">
                                <v-btn
                                  class="acct-modal" width="380px" height="47px" style=" margin-bottom: 17px; gap: 10px"
                                  dark
                                  v-bind="props">
                                  <div  class="py-3" style="display: flex; cursor: pointer; position: absolute; left: 22px; align-items: center;">
                                      <span  style="font-weight: 600; font-family: poppins; text-transform: capitalize; color: var(--Gray-Medium-light, #969696);">{{selected}}</span> 
                                  </div>
                                  <v-icon icon="mdi-chevron-down"  color="#E0E4F5" class="chevron-icon" style="position: absolute; right: 15px; bottom: 13px; "></v-icon>
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
                                      dark
                                      v-bind="props">
                                      <div  class="py-3" style="display: flex; cursor: pointer; position: absolute; left: 22px; align-items: center;">
                                          <span class="mt-" style="font-weight: 600; font-family: poppins; text-transform: capitalize; color: var(--Gray-Medium-light, #969696);">{{selectedCurrency}}</span> 
                                      </div>
                                      <v-icon icon="mdi-chevron-down"  color="#E0E4F5" class="chevron-icon" style="position: absolute; right: 15px; bottom: 13px; "></v-icon>
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
        v-model="dialog2"
        width="auto"
      >
        <v-card style="border-radius: 32px; border: 1px solid var(--border, #303A46); background:#12181F; padding: 32px 70px; box-shadow: none">
          <v-card-title>
            <div class="d-flex">
                <div>
                  <span style="color: #969696; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Bank</span>
                    <v-menu :FinancialInstitutions="FinancialInstitutions">
                            <template v-slot:activator="{ props }">
                              <v-btn
                                class="acct-modal me-6" width="380px" height="47px" style=" margin-bottom: 17px; gap: 10px"
                                dark
                                v-bind="props">
                                <div  class="py-3" style="display: flex; cursor: pointer; position: absolute; left: 22px; align-items: center;">
                                    <span  style="font-weight: 600; font-family: poppins; text-transform: capitalize; color: var(--Gray-Medium-light, #969696);">{{selectedBank}}</span> 
                                </div>
                                <v-icon icon="mdi-chevron-down"  color="#E0E4F5" class="chevron-icon" style="position: absolute; right: 15px; bottom: 13px; "></v-icon>
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

                <div style="color: #969696; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal; display: grid">
                  <span style="color: #969696; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Account holder’s name</span>
                  <input type="text" placeholder="Okoli Bernard Chinedu" style="height: 47px; padding: 17px; width: 380px; border-radius: 16px; font-family: poppins; outline: none; background: #161D26;" />
                </div>
            </div>

            <div class="d-flex" style="justify-content: space-between;">
               <div style=" font-size: 14px; font-style: normal; font-weight: 600; line-height: normal; display: grid">
                  <span style="color: #969696; margin-top: 18px; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Custom bank details</span>
                  <input type="text"  style="height: 47px; padding: 17px; width: 380px; border-radius: 16px; font-family: poppins; outline: none; background: #161D26;" />
                  <span style="font-size: 12px; font-style: normal; font-weight: 400; line-height: normal; color: #646464"> Include additional bank account information if required.</span>
                </div>
                 <div style="color: #969696; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal; display: grid">
                  <span style="color: #969696; margin-top: 18px; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Account number</span>
                  <input type="text" placeholder="08456102341654" style="height: 47px; padding: 17px; width: 380px; border-radius: 16px; font-family: poppins; outline: none; background: #161D26;" />
                </div>
            </div>
            <v-btn color="#323232" variant="text" @click="dialog = false" style="border-radius: 16px; font-size: 16px; font-weight: 600; width: 208px; height: 63px; text-transform: unset; letter-spacing: 0px; border: 1px solid var(--border, #303A46); background: var(--Black-20, #E2E8F0);">
              Close
            </v-btn>
            <v-btn></v-btn>
            <v-btn color="#FFF" class="ma-2 primary-btn1" @click="dialog2 = true" style="width: 208px; height: 63px; font-size: 16px; font-weight: 600; text-transform: unset; letter-spacing: 0px;border-radius: 16px;">
              Add account
            </v-btn>
          </v-card-title>
        
          <v-card-actions>
            <v-btn
              color="primary"
              variant="text"
              @click="dialog2 = false"
            >
              Close
            </v-btn>
          </v-card-actions>
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

const selectedCurrency  = ref ('Naira') 
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
const selectedBank  = ref ('Opay') 
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
</style>