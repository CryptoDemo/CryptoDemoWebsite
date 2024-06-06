<template>
<div>
  <!-- <div> -->

    <v-dialog style="width: 100%">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-for="(txns, date) in pinia.state.Web3_transactions.data" :key="date" v-bind="activatorProps" color="surface-variant" variant="text" style="width: 100%; height: 60px; background: inherit; display: flex; justify-content: space-between;">
          
          <span class="me-3">{{txns+1}}</span>
        
          <div class="me-3" style="display: flex; align-items: center">
            <img src="/svg/btc.svg" class="me-3"/>
            <span class="browser-txt" :class="isDark ? 'coin-name':'coin-name-light'" style="font-weight: 600;">Bitcoin</span>
          </div>

            <span class="browser-txt me-3" :class="isDark ? 'coin-name':'coin-name-light'">Jan 17, 4:33 PM</span>

            <span class="browser-txt me-3" style="color: #35B233; font-weight: 600; font-family: Poppins;">{{ txns.status }}</span>

            <span class="browser-txt me-3" :class="isDark ? 'coin-name':'coin-name-light'" style="font-weight: 600;">{{ txns.fees }}</span>

        </v-btn>
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

  <!-- </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import { getWebTransaction } from "@/composables/requests/transaction";
const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore()
const transaction = ref([])

const tokenSymbol = ref('')

const tokenAmount = ref('')

const tax_fee = ref('')

const sent_to = ref('')

const transaction_hash = ref('')

const status = ref([])

const pending = ref(true)

const isloading = ref(false)
const pageNumber = ref(1)
const selectedNetwork = pinia.state.selectedNetwork;

const fetchTxnData = async () => {
  try {
    const data = await getWebTransaction(selectedNetwork, pageNumber.value, );
    if(data.success){
      const transData = data?.data.result
      if(transData.length != 0){

      const groupedTransactions = transData.reduce((groups, transaction) => {
            const createdAt = new Date(transaction.created_at);
            const dateKey = createdAt.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
            if (!groups[dateKey]) {
                groups[dateKey] = [];
            }
            groups[dateKey].push(transaction);
            return groups;
      }, {});

        pinia.setWeb3_transactions(groupedTransactions,addMinutes(5))
          return
        }else{
            pinia.setWeb3_transactions(transData)
        }

        }else{
          push.error(`${data.message}`)
        }
  
        }catch(e){
        //    console.log(e)

  }
}

const getSingleTrans = async()=>{

isloading.value = true
try {
    const data = await getSingleTransactions(currentId)
    if(data.success){

        const datainfo = data.data
        transaction.value = datainfo
        console.log(datainfo)

        if(datainfo.details.crypto != null){
            const crypto_trans = datainfo.details.crypto
            if( crypto_trans.transfer != null){
                tokenSymbol.value =  pinia.state.tokenLists.data.find(p => p.id === datainfo.details.crypto.transfer.token_id)
                tax_fee.value =  datainfo.details.crypto.transfer.fees.find(p => p.recipient_type === 'TOTAL')
                status.value = datainfo.details.crypto.transfer.status
                tokenAmount.value = crypto_trans.transfer.amount
                sent_to.value = crypto_trans.transfer.to_address
                transaction_hash.value = crypto_trans.transfer.transaction_hash

            }else if(crypto_trans.swap != null){
                 tokenSymbol.value = pinia.state.tokenLists.data.find(p => p.id === datainfo.details.crypto.swap.from.token_id)
                 tax_fee.value =  datainfo.details.crypto.swap.fees.find(p => p.recipient_type === 'TOTAL')
                 status.value =  datainfo.details.crypto.swap.status
                 tokenAmount.value = crypto_trans.swap.from.amount
                 sent_to.value = crypto_trans.swap.to.address
                 transaction_hash.value = crypto_trans.swap.transaction_hash
            }else{
                 tokenSymbol.value = pinia.state.tokenLists.data.find(p => p.id === datainfo.details.crypto.exhange.from.token_id) 
                 tax_fee.value =  datainfo.details.crypto.exchange.fees.find(p => p.recipient_type === 'TOTAL')
                 status.value = datainfo.details.crypto.exchange.status
                 tokenAmount.value = crypto_trans.exchange.from.amount
                 sent_to.value = crypto_trans.exchange.to.address
                 transaction_hash.value = crypto_trans.exchange.transaction_hash
            }
        }else{
            //  tokenSymbol.value = ''
             const fiat_trans = datainfo.details.fiat
             if(fiat_trans.withdrawal != null){
                 country.value = pinia.state.countries.find(e => e.id.toUpperCase() ===  fiat_trans.withdrawal.country_id.toUpperCase())
                 amount.value = fiat_trans.withdrawal.amount
                 acct_name.value = fiat_trans.withdrawal.to.account_name
                 acct_number.value = fiat_trans.withdrawal.to.account_number
                 bank_name.value = fiat_trans.withdrawal.to.bank_name
                 fiatStatus.value = fiat_trans.withdrawal.status
             }else if(fiat_trans.transfer != null){
                country.value = pinia.state.countries.find(e => e.id.toUpperCase() ===  fiat_trans.transfer.country_id.toUpperCase())
                 amount.value = fiat_trans.transfer.amount
                 fiatStatus.value = fiat_trans.transfer.status

             }
        }

        isloading.value = false


    }else{
        push.error(`${data.message}`)
        isloading.value = false
   
    }
}catch(e){
    console.log(e)
    isloading.value = false

}
}

onMounted(async()=>{
await getSingleTrans()
console.log(transaction.value)
})


onMounted(() => {
fetchTxnData();
});
</script>
<style scoped>
.close-btn{
  fill: white;
}
.close-btn-dark{
fill: #10192D;
}
</style>