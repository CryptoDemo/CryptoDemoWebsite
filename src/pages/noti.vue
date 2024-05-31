<template>
<div>
  <div v-for="token in pinia.state.tokenLists" :key="token.id" style="display: flex; justify-content: space-between;  margin-bottom: 284px; width: 95%;">
    <span>1</span>
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
    if (!data.success) {
      throw new Error('Network response was not ok ' + data.statusText);
    }
 
    console.log(data);

    // Process the response based on transaction type
    if (data.success) {
      data.data.result.forEach(transaction => {
        if (transaction.details.crypto.transfer) {
          processTransfer(transaction);
        } else if (transaction.details.crypto.swap) {
          processSwap(transaction);
        }
      });
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

const processTransfer = (transaction) => {
  const { transaction_hash, transfer_type, token_id, from_address, to_address, amount, status, fees } = transaction.details.crypto.transfer;

  console.log("Transfer Details:");
  console.log("Transaction Hash:", transaction_hash);
  console.log("Transfer Type:", transfer_type);
  console.log("Token ID:", token_id);
  console.log("From Address:", from_address);
  console.log("To Address:", to_address);
  console.log("Amount:", amount);

  if (status.fulfilled) {
    console.log("Status: Fulfilled -", status.fulfilled.reason);
  } else if (status.pending) {
    console.log("Status: Pending -", status.pending.reason);
  } else if (status.failed) {
    console.log("Status: Failed -", status.failed.reason);
  }

  console.log("Fees:");
  fees.forEach(fee => {
    console.log(`Recipient Type: ${fee.recipient_type}, Token ID: ${fee.token_id}, Address: ${fee.address}, Amount: ${fee.amount}`);
  });
}

const processSwap = (transaction) => {
  const { transaction_hash, from, to, status, fees } = transaction.details.crypto.swap;

  console.log("Swap Details:");
  console.log("Transaction Hash:", transaction_hash);
  console.log("From Token ID:", from.token_id);
  console.log("From Address:", from.address);
  console.log("From Amount:", from.amount);
  console.log("To Token ID:", to.token_id);
  console.log("To Address:", to.address);
  console.log("To Amount:", to.amount);

  if (status.fulfilled) {
    console.log("Status: Fulfilled -", status.fulfilled.reason);
  } else if (status.pending) {
    console.log("Status: Pending -", status.pending.reason);
  } else if (status.failed) {
    console.log("Status: Failed -", status.failed.reason);
  }

  console.log("Fees:");
  fees.forEach(fee => {
    console.log(`Recipient Type: ${fee.recipient_type}, Token ID: ${fee.token_id}, Address: ${fee.address}, Amount: ${fee.amount}`);
  });
}

onMounted(() => {
fetchTxnData();
});
</script>
<style scoped>

</style>