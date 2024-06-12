 <template>
    <div>
    <v-row justify="center">
      <v-btn style="font-family: Manrope; font-size: 14px; font-weight: 400;" class="primary-btn1" @click="dialog = true" >
        Add Account 
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M6.5 12H18.5" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5 18V6" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </v-btn>

      <v-dialog v-model="dialog" width="50%">
        <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 32px; padding: 25px 25px; box-shadow: none">
          <v-card-title>
             <div class="">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <span class="ma-4" style="background-image: linear-gradient(360deg, #2873FF, #0B6B96); background-clip: text;  -webkit-text-fill-color: transparent ; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 600; line-height: normal;">Add account</span>    
                </div>
                <div style=" margin-top: 15px; margin-bottom: 13px; margin-left: px ">
                  <span style="color: #969696; font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Bank account residence</span>  
                  <div>
                      <v-menu>
                        <template v-slot:activator="{ props }">
                          <v-btn :class="isDark ? 'profile-cards-dark':'profile-cards-light'" class="acct-modal" width="100%" height="55px" style=" margin-bottom: 17px; gap: 10px" v-bind="props">
                            <div class="py-3" style="display: flex; cursor: pointer; position: absolute; left: 22px; align-items: center;">
                              <span  style="font-weight: 600; font-family: Manrope; text-transform: capitalize; color: var(--Gray-Medium-light, #969696);">{{selected}}</span> 
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none" style="position: absolute; right: 15px; bottom: 18px; ">
                                <path d="M4.94888 6.49413C5.08612 6.49415 5.22202 6.46714 5.34882 6.41463C5.47561 6.36213 5.59084 6.28516 5.6879 6.18813L9.58789 2.28814C9.78375 2.09227 9.8938 1.82663 9.8938 1.54964C9.8938 1.27265 9.78375 1.00701 9.58789 0.811147C9.39203 0.615285 9.12639 0.505239 8.8494 0.505239C8.5724 0.505239 8.30676 0.615285 8.1109 0.811147L4.9469 3.21114L1.7829 0.811147C1.58704 0.615285 1.32139 0.505239 1.0444 0.505239C0.767412 0.505239 0.50174 0.615285 0.305878 0.811147C0.110015 1.00701 2.14471e-08 1.27265 0 1.54964C-2.1447e-08 1.82663 0.110015 2.09227 0.305878 2.28814L4.2059 6.18813C4.3034 6.28569 4.41925 6.36297 4.54678 6.41549C4.67431 6.46801 4.81096 6.49473 4.94888 6.49413Z" fill="#E0E4F5"/>
                            </svg>  
                          </v-btn>
                        </template>

                        <v-list>
                          <v-list-item>
                            <div v-for="(userCountry, index) in userResidence" class="d-flex py-3" style="cursor: pointer" :key="index" >
                              <v-list-item-title @click="selected=userCountry.title;" class="d-flex"> 
                                <span> {{ userCountry.title }} </span>
                              </v-list-item-title>
                            </div>
                          </v-list-item>
                        </v-list>
                    </v-menu>
                  </div>  

                  <div style="color: #969696; font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">
                      <div style=" margin-top: 10px;">
                        <span  style="color: #969696; font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal;">Account holder’s name</span>
                      </div>
                      <v-text-field variant="plain" clearable placeholder="Okoli Bernard Chinedu"></v-text-field>
                   </div>   
                

                <div style=" margin-top: 18px;">
                  <span style="color: #969696; margin-top: 18px; font-family: Manrope; font-size: 14px;  font-style: normal; font-weight: 600; line-height: normal;">Account number</span>
                </div>
                <v-text-field variant="plain" clearable placeholder="08456102341654"></v-text-field>
  
              </div>
            </div>
          </div>

          </v-card-title>

           <v-card-actions class="px-5" style="display: flex; justify-content: space-between; margin-left: 13px ">
            <v-btn color="#323232" variant="text" @click="dialog = false" style="border-radius: 16px; font-size: 16px; font-weight: 600; width: 208px; height: 60px; text-transform: unset; letter-spacing: 0px; border: 1px solid var(--border, #303A46); background: var(--Black-20, #E2E8F0);">
              Close
            </v-btn>
       
            <v-btn color="#FFF" class="ma-2 primary-btn1" @click="dialog2 = true" style="width: 208px; height: 60px; font-size: 16px; font-weight: 600; text-transform: unset; letter-spacing: 0px;border-radius: 16px;">
              Next
            </v-btn>
         
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();
const dialog = ref(false);
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
display: flex;
padding: 13px 23px;
align-items: center;
gap: 316px;
box-shadow: none!important;
}

::-webkit-input-placeholder {
color: var(--Gray-Medium-light, #969696)!important;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;

}

</style>