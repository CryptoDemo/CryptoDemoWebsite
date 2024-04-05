<template>
    <span class="text2" style="font-weight: 700; display: contents; font-family: Manrope; color: #64748B; line-height: 150%; font-size: 14px;">{{ selectedOption }}</span> 
    <v-dialog class="dialogue" style="display: flex;  width: 75%;">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" :class="isDark ? 'show-all':'show-all-light'" text="Show all"> </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card class="dialog" :class="isDark ? 'dialog':'dialog-light'">
            <div style="display: flex;">
                
              <div @click.stop  class="me-5" :class="isDark ? 'searchbar':'searchbar-light'" style="border-radius: 29px; width: 100%; align-items: center;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="search-icon" style="position: absolute; top: 55px; margin-left: 19px;">
                  <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#4263EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22 22L20 20" stroke="#4263EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>   
                <v-textarea clearable variant="text" rows="1" no-resize  placeholder="Search..." v-model="input" style="  height: 55px;  border-radius: 30px; padding-left: 45px; align-items: center; width: 100%;"></v-textarea>
              </div>

              <div style="display: flex; flex-direction: column; align-items: center; margin-top: 4px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"  @click="isActive.value = false" style="cursor: pointer;">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#4263EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.17001 14.8299L14.83 9.16992" stroke="#4263EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.83 14.8299L9.17001 9.16992" stroke="#4263EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> 
              <h5 style="letter-spacing: 0.72px; color: #8E9BAE;">CLOSE</h5>
            </div>
            </div>

              <div style="display: flex; justify-content: space-between; margin-top: 30px; height: fit-content;">
                <v-row>
                
                <v-col cols="12" sm="4" :class="isDark ? 'payment-div':'payment-div-light'" v-for="(item, index) in paymentOptions" :key="index">
                  <div class="pay-options" style="display: flex; align-items: center; justify-content: center; cursor: pointer;">
                    <span class="payment-options me-2">{{ item.Options }}</span>
                    <span class="payment-choices mt-2">{{ [item.choice] }}</span>
                  </div>
                </v-col>
              </v-row>
              </div>

              <div class="mt-12">
                <span class="popular">Popular in Nigeria</span>
                <div style="margin-top: 10px; border-radius: 0px !important;">
                  <v-list-item v-for="(items, index) in filteredItems?. length ? filteredItems :popularOptions" :key="index"  @click="selectedOption=items.Options1; isActive.value = false" style=" border-bottom: 0.5px solid #2f3946 !important;">
                    <v-list  style="display: flex;justify-content: flex-start; border-radius: 0px !important; background: inherit !important;">
                      <img :src="items.image" width="30" class="me-3"/>
                      <span class="mb-2" :class="isDark ? 'btn-payment-choices':'btn-payment-choices-light'">{{ items.Options1 }}</span>
                    </v-list>
                  </v-list-item>
                </div>
              </div>

           
              <v-spacer></v-spacer>
              
             
          </v-card>

          
        </template>
    </v-dialog>
  <!-- </div> -->
</template>

<script setup>
import { useTheme } from 'vuetify';

const paymentOptions = [
  {Options:'Bank transfers', choice: 33,},
  {Options:'Online Wallets', choice:29},
  {Options:'Debit/Credit Cards', choice: 98},
  {Options:'Gift Cards', choice:133},
  {Options:'Digital Currencies', choice:34},
  {Options:'Cash Payments', choice: 27},
  // {Options:'Goods and services', choice:'Choices: 27'}, 
]

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const selectedOption = ref(paymentOptions[0].Options);

const props = defineProps({
  selectedPaymentOption: String,
});

watch(()=>props.selectedPaymentOption,(newVal)=>selectedOption.value = newVal);


const popularOptions = ref([
  {image:'/svg/bank-transfer.svg', Options1:'Bank transfers'},
  {image:'/svg/money.svg', Options1:'MTN Mobile Money'},
  {image:'/svg/bank-transfer.svg', Options1:'Cash Deposit to Bank'},
  {image:'/svg/bag.svg', Options1:'Paypal'},
  {image:'/svg/exchange.svg', Options1:'Chipper Cash'},
  {image:'/svg/gift.svg', Options1:'Perfect Money'},
  
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
width: 100%;
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
  background: rgb(0 2 21) !important;
}

.searchbar{
background: #10192D;
}
.searchbar-light{
background: #E9F1FF;
}
::-webkit-scrollbar{
display: none;
}
</style>