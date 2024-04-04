<template>
   <div  :class="isDark ? 'coin-dropdown':'coin-dropdown-light'"  style="margin-top:9px; width: 100%;">
      <span class="text2" style="font-weight: 700; display: contents; font-family: Manrope; color: #64748B; line-height: 150%; font-size: 14px;">{{ Paymentmethod1 }}</span>
    <v-dialog class="dialogue" style="display: flex;  width: 75%;">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" :class="isDark ? 'show-all':'show-all-light'" text="Show all"> </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card class="dialog" :class="isDark ? 'dialog':'dialog-light'">
            <div style="display: flex; justify-content: flex-end; margin-bottom: 10px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"  @click="isActive.value = false" style="cursor: pointer;">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.17001 14.8299L14.83 9.16992" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.83 14.8299L9.17001 9.16992" stroke="#D8D8D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>   
            </div>
            <div @click.stop style="background: #10192D; border-radius: 29px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" class="search-icon" style="position: absolute; top: 97px; margin-left: 19px;">
                      <path d="M17 17L12.9497 12.9497M12.9497 12.9497C14.2165 11.683 15 9.933 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C9.933 15 11.683 14.2165 12.9497 12.9497Z" stroke="#8E9BAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <v-textarea clearable variant="text" rows="1" no-resize  placeholder="Search..." v-model="input" style="  height: 55px;  border-radius: 30px; padding-left: 30px; align-items: center; width: 100%;"></v-textarea>
              </div>

              <v-row style="display: flex;">
              <div style="display: flex; justify-content: space-between; overflow: scroll; margin-top: 20px; width: 100vw;">
                
                <v-col :class="isDark ? 'payment-div':'payment-div-light'" v-for="(item, index) in paymentOptions" :key="index" lg="2" md="4" sm="3" style="width: 100%;">
                  <div class="pay-options" style="display: flex; flex-direction: column; align-items: center; cursor: pointer;  overflow: scroll;">
                    <img :src="item.image" width="40"/>
                    <span class="payment-options">{{ item.Options }}</span>
                    <span class="payment-choices">{{ item.choice }}</span>
                  </div>
                </v-col>
              </div>
            </v-row>

              <div class="mt-12">
                <span class="popular">Popular in Nigeria</span>
                <v-row style="margin-top: 10px;">
                  <v-col v-for="(items, index) in filteredItems?. length ? filteredItems :popularOptions" :key="index" md="4" sm="12" @click="Paymentmethod1=items.Options1; isActive.value = false">
                    <v-btn  style="background: inherit; color: white; letter-spacing: 0px; text-transform: capitalize; width: 100%; height: 50px; display: flex;justify-content: flex-start; border-: 0.5px solid #2f3946 !important; box-shadow: none;">
                      <img :src="items.image" width="30" class="me-3"/>
                      <span class="mb-2" :class="isDark ? 'btn-payment-choices':'btn-payment-choices-light'">{{ items.Options1 }}</span>
                    </v-btn>
                </v-col>
                </v-row>
              </div>

           
              <v-spacer></v-spacer>
              
             
          </v-card>

          
        </template>
    </v-dialog>
  </div>
</template>

<script setup>
import { useTheme } from 'vuetify';

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);

const Paymentmethod1= ref('Select Payment method');

const paymentOptions = [
  {image:'/svg/bank.svg', Options:'Bank transfers', choice:'Choices : 61'},
  {image:'/svg/bank.svg', Options:'Online Wallets', choice:'Choices : 29'},
  {image:'/svg/bank.svg', Options:'Debit/Credit Cards', choice:'Choices : 98'},
  {image:'/svg/bank.svg', Options:'Gift Cards', choice:'Choices : 133'},
  {image:'/svg/bank.svg', Options:'Digital Currencies', choice:'Choices : 34'},
  {image:'/svg/bank.svg', Options:'Cash Payments', choice:'Choices: 27'},
  
]
const popularOptions = ref([
  {image:'/svg/bag.svg', Options1:'Bank transfers'},
  {image:'/svg/gift.svg', Options1:'MTN Mobile Money'},
  {image:'/svg/gift.svg', Options1:'Cash Deposit to Bank'},
  {image:'/svg/bag.svg', Options1:'Paypal'},
  {image:'/svg/gift.svg', Options1:'Chipper Cash'},
  {image:'/svg/bag.svg', Options1:'Perfect Money'},
  
]);

let input = ref("");   

const filteredItems = computed(() => {
const searchTerm = input.value.toLowerCase();
return popularOptions.value.filter((loc) => {
const lowerOptions1 = loc.Options1.toLowerCase();
return (
  lowerOptions1.includes(searchTerm)
);
});
});
</script>

<style scoped>

.dialog{
border-radius: 20px !important;
background: #1B2537 !important; 
cursor: pointer;
border: 0.5px solid #2f3946;
padding: 40px;
}
.dialog-light{
border-radius: 100px;
background: #fff !important; 
cursor: pointer;
text-transform: unset;
}

.payment-options{
font-size: 16px;
font-family: SF Pro Display;
line-height: normal;
font-weight: 500;
margin-top: 10px;
}

.popular{
font-size: 16px;
font-family: SF Pro Display;
line-height: 140%;
font-weight: 500;
margin-top: 10px;
}
.payment-choices{
font-size: 14px;
font-family: SF Pro Display;
color: #8E9BAE;
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
line-height: normal;
margin-top: 5px;
font-weight: 600;
}
.btn-payment-choices{
font-size: 14px;
font-family: SF Pro Display;
color: #fff;
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
line-height: normal;
margin-top: 5px;
font-weight: 600;
}
.btn-payment-choices-light{
font-size: 14px;
font-family: SF Pro Display;
color: #10192D;
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
line-height: normal;
margin-top: 5px;
font-weight: 600;
}
.show-all{
color: var(--Main-Primary-100, #2873FF);
text-align: center;
font-family: Manrope;
font-size: 12.86px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 19.289px */
display: flex;
height: 32.149px;
padding: 6.43px;
justify-content: center;
align-items: center;
gap: 8.037px;
border-radius: 9.645px;
background: #10192D;
box-shadow: 0px 9.645px 9.645px 0px rgba(51, 65, 85, 0.02);
text-transform: unset !important;
letter-spacing: 0px;

}
.show-all-light{
color: var(--Main-Primary-100, #2873FF);
text-align: center;
font-family: Manrope;
font-size: 12.86px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 19.289px */
display: flex;
height: 32.149px;
padding: 6.43px;
justify-content: center;
align-items: center;
gap: 8.037px;
border-radius: 9.645px;
background: #F8FAFC !important;
box-shadow: 0px 9.645px 9.645px 0px rgba(51, 65, 85, 0.02);
text-transform: unset !important;
}

.payment-div:hover {
  background-color: #202b41;
  color: white;
  height: fit-content;
  border-radius: 5px;
  width: fit-content;
}
.payment-div-light:hover {
  background: #E9F1FF;
  color: #10192D;
  height: fit-content;
  border-radius: 5px;
}

.dialogue :deep(.v-overlay__scrim){
    pointer-events: auto;
    background: rgb(0 2 21) !important;
    border-radius: inherit;
    bottom: 0;
    left: 0;
    opacity: 0.32;
    position: fixed;
    right: 0;
    top: 0;
}
::-webkit-scrollbar{
display: none;
}
</style>