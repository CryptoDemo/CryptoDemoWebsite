<template>
<div>
  <!-- <div> -->

    <v-dialog style="width: 100%">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-for="txns in pinia.state.Web3_transactions" :key="txns.id" v-bind="activatorProps" color="surface-variant" variant="text" style="width: 100%; height: 60px; background: inherit; display: flex; justify-content: space-between;">
          
        
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