<template>
<div>
  <Header :hide="true" :icon1="true" :icon3="true"  :icon2="true" />
    <v-container style="margin-top: 90px;">
        <span class="swap1">Swap</span>
        <div style="border-radius: 24px; border: 1px solid #303A46; padding: 37px; margin-top: 40px; margin-bottom: 525px;">
            <div class="d-flex" style="margin-bottom: 30px;">
                <span class="quick-swap me-3 ">Quick Swap</span>
                <img src="/svg/reload.svg" class="icon1"/>
            </div>

            <div class="d-md-flex" style="justify-content: space-between; position: relative;">
                <div :class="isDark ? 'profile-cards-dark':'profile-cards-light'"  style="border-radius: 20px; width: 47%; display: flex;  padding: 10px 20px; justify-content: space-between;">
              
                     <div class="d-flex" style="width: 12%;">   
                      <div class="me-13" style="display: flex; flex-direction: column; z-index: 1000">
                        <span class="have">I have :</span>
                          <v-menu>
                              <template v-slot:activator="{ props }">
                                <button class="inputstyling2" v-bind="props" style="display: flex; align-items: center;">
                                    <div  class="py-3" style="display: flex;  align-items: center;  border-radius: 17px; background: inherit;">
                                      <img :src="icon" width="30" class="me-2"/>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                        <path d="M4.94888 6.19921C5.08612 6.19923 5.22202 6.17221 5.34882 6.11971C5.47561 6.06721 5.59084 5.99024 5.6879 5.89321L9.58789 1.99322C9.78375 1.79735 9.8938 1.53171 9.8938 1.25472C9.8938 0.977729 9.78375 0.712088 9.58789 0.516225C9.39203 0.320363 9.12639 0.210317 8.8494 0.210317C8.5724 0.210317 8.30676 0.320363 8.1109 0.516225L4.9469 2.91622L1.7829 0.516225C1.58704 0.320363 1.32139 0.210317 1.0444 0.210317C0.767412 0.210317 0.50174 0.320363 0.305878 0.516225C0.110015 0.712088 2.14471e-08 0.977729 0 1.25472C-2.1447e-08 1.53171 0.110015 1.79735 0.305878 1.99322L4.2059 5.89321C4.3034 5.99076 4.41925 6.06804 4.54678 6.12057C4.67431 6.17309 4.81096 6.19981 4.94888 6.19921Z" fill="#E0E4F5"/>
                                    </svg>
                                </button>
                              </template>
  
                                <v-list :class="isDark ? 'country-dropdown':'country-dropdown-light'" style="border-radius: 16px;">
                                  <v-list-item>
                                    <v-list-item v-for="(item, index) in pinia.state.tokenLists" :key="index">
                                      <v-list-item-title @click="select=item.name; selectedSymbol=item.symbol; icon =item.icon; selectedBalance =item.balance" class="d-flex">
                                        <img :src="item.icon" width="30" class="me-3"/>  
                                        <span class="me-3" style="align-items: center;"> {{item.name}} </span>
                                      </v-list-item-title>
                                    </v-list-item>
                                  </v-list-item>
                                </v-list>
                          </v-menu>  
                      </div>
                    </div>

                    <div style="display: flex; justify-content: center; align-self: center ; margin-top: 17px; border-radius: 4px; height: 26px; z-index: 1000">
                      <v-btn @click="swapAmount = minimumswap?.minimum_swap" class="me-4" style="border: 1px solid #303A46; height: 26px; letter-spacing: 0px; text-transform: capitalize; background: inherit; box-shadow: none;-"><span class="min">Min</span></v-btn>    
                      <v-btn @click="swapAmount = selectedBalance" class="me-3" style=" border: 1px solid #303A46; letter-spacing: 0px; text-transform: capitalize; height: 26px; background: inherit; box-shadow: none;"><span class="min">Max</span></v-btn>
                    </div>

                    <div class="number-input" style="display: flex; margin-right: 10px; flex-direction: column; z-index: 1000">
                      <span class="have" style="font-family: manrope; color: #fff; font-size: 14px; font-weight: 500; margin-bottom; 10px; display: flex;justify-content: end;">{{ selectedBalance }} {{ selectedSymbol }}</span>
                      <input type="number" v-model="swapAmount" style="outline: none; height: 50px; border: 1px solid #303A46; padding: 10px; border-radius: 8px;"/>  
                      
                    </div>
                </div>

                
                <div @click="toggleTokens()" style="position: absolute ; display: flex; left: 0; right: 0; justify-content: center; margin-top: 5px; "><img src="/svg/swap.svg" width="8%"/></div> 
              

              <div :class="isDark ? 'profile-cards-dark':'profile-cards-light'"  style="border-radius: 20px; display: flex; width: 47%;  padding: 10px 20px; justify-content: space-between;">
                <div class="d-flex">   
                    <div class="me-13" style="display: flex; flex-direction: column; margin-left: 10px;">
                      <span class="have">I want:</span>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                              <button class="inputstyling2" v-bind="props" style="display: flex; align-items: center;">

                                <div  class="py-3" style="display: flex; align-items: center;  border-radius: 17px; background: inherit;">
                                  <img :src="coin_to_swap" class="me-2" width="30"/>
                                </div>
                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                    <path d="M4.94888 6.19921C5.08612 6.19923 5.22202 6.17221 5.34882 6.11971C5.47561 6.06721 5.59084 5.99024 5.6879 5.89321L9.58789 1.99322C9.78375 1.79735 9.8938 1.53171 9.8938 1.25472C9.8938 0.977729 9.78375 0.712088 9.58789 0.516225C9.39203 0.320363 9.12639 0.210317 8.8494 0.210317C8.5724 0.210317 8.30676 0.320363 8.1109 0.516225L4.9469 2.91622L1.7829 0.516225C1.58704 0.320363 1.32139 0.210317 1.0444 0.210317C0.767412 0.210317 0.50174 0.320363 0.305878 0.516225C0.110015 0.712088 2.14471e-08 0.977729 0 1.25472C-2.1447e-08 1.53171 0.110015 1.79735 0.305878 1.99322L4.2059 5.89321C4.3034 5.99076 4.41925 6.06804 4.54678 6.12057C4.67431 6.17309 4.81096 6.19981 4.94888 6.19921Z" fill="#E0E4F5"/>
                                </svg>
                            
                              </button>
                            </template>

                            <v-list :class="isDark ? 'country-dropdown':'country-dropdown-light'" style="border-radius: 16px;">
                                <v-list-item>
                                  <v-list-item v-for="(item, index) in filteredToken_to_swap_to" :key="index">
                                    <v-list-item-title @click="select=item.name; coin_to_swap =item.icon; selected_tokenType_to_swap =item.symbol"  class="d-flex">
                                      <img :src="item.icon" width="30" class="me-3"/>  
                                      <span class="me-3" style="align-items: center;"> {{item.name}} </span>
                                    </v-list-item-title>
                                  </v-list-item>
                                </v-list-item>
                              </v-list>
                        </v-menu>   
                    </div>

                    
                </div>
                <div style="display: flex; flex-direction: column;">
                    <span class="have" style="color: #fff; font-size: 14px; font-weight: 500; font-family: manrope; display: flex;justify-content: end;"> {{ selected_tokenType_to_swap }}</span>
                    <input type="number"  disabled v-model="amount_to_recieve" style="outline: none; height: 50px; border: 1px solid #303A46; padding: 10px; border-radius: 8px;"/>  
                    </div>

              </div>
     
              </div>
                <div>
                        <h5 class="quick-swap mt-2" style="font-family: manrope;">Minimum swap limit : {{ minimumswap?.minimum_swap }}</h5>
                      </div>

            <div style="display: flex; justify-content: space-between; margin-top: 55px; align-items: center;">

            <div style="width: 41%;">
              <v-alert v-if="FeeCard" variant="tonal" type="info" density="compact" style="font-family: Manrope;font-size: 14px;  font-style: normal;font-weight: 600;line-height: 180%; border-radius: 10px;">
                <span>Charges incurred for this swap transaction:</span><br>
                  Fee id: {{ swap_fee_id }} <br>
                  Tax fee: {{ tax_fee }} <br>
                  Total ammount: {{ from_amount_total }} <br>
              </v-alert>
            </div>

              <v-btn @click="executeTxn()" :loading="loading" append-icon="mdi-arrow-right" class="exchange-btn1"> Exchange </v-btn>
          </div>
        </div>
    </v-container>
    <Footer/>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import { calculateTxnFees, executeTrans } from "@/composables/requests/transaction";


const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();


const FeeCard = ref(false);

const ExpectedAmmount = ref();
const piniastoredicon = ref(null);
const icon = ref (piniastoredicon)

const select  = ref ()
const selectedBalance = ref(null);

const coin_to_swap = ref(pinia.state.tokenLists[0].icon)
const selected_tokenType_to_swap  = ref ('USDT')

const selectedSymbol = ref('');
const selectedSymbol_to_swap_to  = ref('');

const minimumswap = ref(null);

const swapAmount =ref(null);

const loading = ref(false);

const mytoken = ref(null)

const amount_to_recieve = ref(null);

const swap_fee_id = ref();

const from_amount_total = ref();

const to_amount = ref();

const tax_fee = ref();

const is_balance_sufficient = ref();


mytoken.value = pinia.state.tokenLists.find(c => c.symbol ===  pinia.state.getNewCoinInfo )
const selectedNetwork = pinia.state.BlockchainNetworks.find(e => e.name.toLowerCase() === pinia.state.selectedNetwork.toLowerCase())
minimumswap.value = mytoken.value.token_networks.find(e => e.id ===  selectedNetwork.blockchain_id)
console.log(minimumswap.value)


piniastoredicon.value = mytoken.value.icon;
selectedBalance.value = mytoken.value.balance;
selectedSymbol.value = mytoken.value.symbol;

const filteredToken_to_swap_to = ref([])
filteredToken_to_swap_to.value = pinia.state.tokenLists.filter(c => c.symbol !=  selectedSymbol.value)

watch(()=> selectedSymbol.value,(newv)=>{
  if(newv){
    mytoken.value =  pinia.state.tokenLists.find(c => c.symbol ===  newv )
    const selectedNetwork = pinia.state.BlockchainNetworks.find(e => e.name.toLowerCase() === pinia.state.selectedNetwork.toLowerCase())
    minimumswap.value = mytoken.value.token_networks.find(e => e.id ===  selectedNetwork.blockchain_id)
    selectedBalance.value = mytoken.value.balance

    filteredToken_to_swap_to.value = pinia.state.tokenLists.filter(c => c.symbol !=  newv)
  }
})

coin_to_swap.value = filteredToken_to_swap_to.value[0].icon
// selected_tokenType_to_swap.value = filteredToken_to_swap_to.value[0].symbol


const toggleTokens = ()=>{
  const m = selectedSymbol.value
  const p = piniastoredicon.value

  selectedSymbol.value = selected_tokenType_to_swap.value;
  piniastoredicon.value =  coin_to_swap.value
  selected_tokenType_to_swap.value = m
  coin_to_swap.value = p



}


// Calculate tax for swapping
const caltax = async () => {
        const info = {
            swap_input: {
              from_token: selectedSymbol.value,
              from_amount: parseFloat(swapAmount.value),
              to_token: selected_tokenType_to_swap.value,
            },
        }

        console.log(info)
        try {
            loading.value = true
            const data = await calculateTxnFees(info);
            console.log(data);

            if (data.success) {
                amount_to_recieve.value = data.data.expected_swapped_amount.amount
                swap_fee_id.value = data.data.fee_id
                console.log(swap_fee_id.value)
                from_amount_total.value = data.data.amount_plus_fee
                if(pinia.state.selectedNetwork === 'trc20'){
                    to_amount.value = data.data?.expected_swapped_amount
                }else{
                    to_amount.value = data.data?.expected_swapped_amount?.amount
                    
                }
                tax_fee.value = data.data.fee_amount
                is_balance_sufficient.value = data.data.is_balance_sufficient
                FeeCard.value = true;

                pinia.setCalculatedTaxFee_for_swap(data.data.fee_id);

            } else {
                push.error(data.message);
            }

            loading.value = false
        } catch (e) {
            console.log(e)
            loading.value = false
        }
    };

  const executeTxn = async()=>{
    const info = {
      fee_id: pinia.state.calculatedTaxFee_for_swap
    }
    try{
      loading.value = true

      const data = await executeTrans(info)

      if(data.success){
        
        loading.value = false
        pinia.setTransactionDetails(data.data)

        // pinia.state.selected_payment_action_to_display = 'send'

        // navigateTo('/account/trade/coinId/'`${data.data.result.id}`)

        navigateTo('/account/Trade/success/')
       
        // navigateTo(/dashboard/wallet/get/`${pinia.state.transactionDetails.id}`)


      }else{
        
        push.error(`${data.message}`, {
        });
        loading.value = false;
        
      }
     

    }catch(e){
       console.log(e)
       loading.value = false;
    }


  }
  
  // Watch for changes in amount_to_swap and trigger tax calculation
  watchEffect(() => {
      if (swapAmount.value < minimumswap.value || swapAmount.value < selectedBalance.value) return;
      debounce(caltax);
    });


  watch(()=>swapAmount.value,(newv)=>{
    if(newv < minimumswap.value || newv < selectedBalance.value){
      debounce(caltax);

    }
    if(newv == null ){
      swapAmount.value = ''
    }
  })


</script>

<style>

.swap1{
color: var(--Colors-Base-white, #FFF);
font-family: Manrope;
font-size: 32px;
font-style: normal;
font-weight: 800;
line-height: normal;
}

.cancel1{
width: 258px;
height: 60px!important;
flex-shrink: 0;
border-radius: 20px;
background: var(--dark-bg, #10192D);
color: var(--White, var(--Colors-Base-white, #FFF));
text-align: center;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: capitalize;
letter-spacing: 0px;
   }
.hidden {
  display: none;
}
.quick-swap{
color: var(--White, var(--Colors-Base-white, #FFF));
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

.have{
color: var(--Second-Text, #A4A8AB);
font-family: Manrope;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.inputstyling2{
/* border-radius: 20px; */
background: inherit;
/* color: var(--White, var(--Colors-Base-white, #FFF)); */
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
box-shadow: none;
letter-spacing: 0px;
position: relative;
}

.min{
color: var(--Gray-Light, #D8D8D8);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.exchange-btn1{
border-radius: 20px;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);
width: 258px;
height: 60px !important;
text-align: center;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: capitalize;
letter-spacing: 0px;
position: relative !important;
}

.mdi-arrow-right{
border-radius: 12px;
background: rgba(255, 255, 255, 0.20) !important;
width: 34.928px!important;
height: 33.527px!important;
flex-shrink: 0;
position: absolute!important;
right: 18px!important;
}
.number-input :deep(.v-number-input__control){
display: none !important;
}
.v-number-input__control{
  display: none !important;
}

.country-dropdown{
border-radius: 15px;
border: 0.5px solid #2f3946;
background: #1B2537 !important;
backdrop-filter: blur(50px) !important;
height: 320px !important;
border-radius: 20px !important;
border-radius: 15px;
border: 0.5px solid #354356;
color: white;
margin-top: 15px;
box-shadow: none  !important;
height: 170px !important;
}
.country-dropdown-light{
border-radius: 15px;
background: #fff !important;
border: 1px solid #DBE8FF !important;
border-radius: 20px !important;
color: black;
margin-top: 15px;
box-shadow: none  !important;
height: 170px !important;
}

</style>