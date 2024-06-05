<template>
<div>
  <div v-for="txns in setWeb3_transactions" :key="txns.id" style="display: flex; justify-content: space-between;  margin-bottom: 284px; width: 95%;">
    <span>{{txns+1}}</span>
      <div style="display: flex;">
        <img src="/svg/btc.svg" class="me-3"/>
        <div style="display: flex; flex-direction: column;">
          <span class="browser-txt" :class="isDark ? 'coin-name':'coin-name-light'" style="font-weight: 600;">Bitcoin</span>
          <span class="sml-text" :class="isDark ? 'coin-name':'coin-name-light'">BTC</span>
        </div>
      </div>
      <div>
        <span class="browser-txt" :class="isDark ? 'coin-name':'coin-name-light'">Jan 17, 4:33 PM</span>
      </div>

      <div>
        <span class="browser-txt" style="color: #35B233; font-weight: 600; font-family: Poppins;">Completed</span>
      </div>

      <div>
        <span class="browser-txt" :class="isDark ? 'coin-name':'coin-name-light'" style="font-weight: 600;">+2.820436 USDT</span>
      </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import { getWebTransaction } from "@/composables/requests/transaction";
const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore()
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


onMounted(() => {
fetchTxnData();
});
</script>
<style scoped>

</style>