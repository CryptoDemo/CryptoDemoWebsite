<template>
    <div>
        <div v-for="(transaction, index) in datainfo" :key="index">
            <v-dialog max-width="420">
            <template v-slot:activator="{ props: activatorProps }">
                <div v-bind="activatorProps" style="background: inherit; height: 60px">
                <div v-if="transaction.details.crypto">
                    <div class="mt-2" :class="isDark ? 'wallet-border' : 'wallet-border-light'"
                    v-if="transaction.details.crypto.transfer" style="display: flex; justify-content: space-between">
                    <div style="display: flex; align-items: center">
                        <img src="/svg/transfer.svg" class="me-1 p-2" :class="isDark ?'txn-cards-dark' : 'txn-cards-light'" style="padding: 10px; border-radius: 30px;"/>
                        <div style="display: flex; flex-direction: column">
                        <span>Sold</span>
                        <div class="d-flex" style="margin-bottom: 6px">
                            <h5 class="me-2">
                            {{ formattedDate(transaction.created_at) }}
                            </h5>
                            <h5>{{ formatTime(transaction.created_at) }}</h5>
                        </div>
                        </div>
                    </div>
    
                    <div class="d-flex">
                        <span style="color: #ff3e46">{{formatNumber(transaction.details.crypto.transfer.amount)}}</span>
                        <span style="color: #ff3e46">{{
                        tokenLists.find((p) => p.id === transaction.details.crypto.transfer.token_id).symbol}}</span>
                    </div>
                    </div>
    
                    <div v-if="transaction.details.crypto.swap">
                    <p>
                        Token Symbol:
                        {{ transaction.details.crypto.swap.from.token_id }}
                    </p>
                    <p>Tax Fee: {{ transaction.details.crypto.swap.fees }}</p>
                    <p>Status: {{ transaction.details.crypto.swap.status }}</p>
                    <p>Amount: {{ transaction.details.crypto.swap.from.amount }}</p>
                    <p>Sent To: {{ transaction.details.crypto.swap.to.address }}</p>
                    <p>
                        Transaction Hash:
                        {{ transaction.details.crypto.swap.transaction_hash }}
                    </p>
                    </div>
                    
                    <div v-else-if="transaction.details.crypto.exchange">
                    <p>
                        Token Symbol:
                        {{ transaction.details.crypto.exchange.from.token_id }}
                    </p>
                    <p>Tax Fee: {{ transaction.details.crypto.exchange.fees }}</p>
                    <p>Status: {{ transaction.details.crypto.exchange.status }}</p>
                    <p>
                        Amount: {{ transaction.details.crypto.exchange.from.amount }}
                    </p>
                    <p>
                        Sent To: {{ transaction.details.crypto.exchange.to.address }}
                    </p>
                    <p>
                        Transaction Hash:
                        {{ transaction.details.crypto.exchange.transaction_hash }}
                    </p>
                    </div>
                </div>
    
                <div v-else-if="transaction.details.fiat">
                    <!-- Display fiat transaction details -->
                    <div v-if="transaction.details.fiat.withdrawal">
                    <h3>Fiat Withdrawal</h3>
                    <p>
                        Country: {{ transaction.details.fiat.withdrawal.country_id }}
                    </p>
                    <p>Amount: {{ transaction.details.fiat.withdrawal.amount }}</p>
                    <p>
                        Account Name:
                        {{ transaction.details.fiat.withdrawal.to.account_name }}
                    </p>
                    <p>
                        Account Number:
                        {{ transaction.details.fiat.withdrawal.to.account_number }}
                    </p>
                    <p>
                        Bank Name:
                        {{ transaction.details.fiat.withdrawal.to.bank_name }}
                    </p>
                    <p>Status: {{ transaction.details.fiat.withdrawal.status }}</p>
                    </div>
                    <div v-else-if="transaction.details.fiat.transfer">
                    <h3>Fiat Transfer</h3>
                    <p>Country: {{ transaction.details.fiat.transfer.country_id }}</p>
                    <p>Amount: {{ transaction.details.fiat.transfer.amount }}</p>
                    <p>Status: {{ transaction.details.fiat.transfer.status }}</p>
                    </div>
                </div>
                </div>
    
                <!-- </div> -->
            </template>
            <template v-slot:default="{ isActive }">
                <v-card
                :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'"
                style="border-radius: 20px; padding: 20px"
                >
                <h2 class="text-center">Transaction Details</h2>
    
                <div v-if="transaction?.details?.crypto?.transfer">
                    <div  class="d-flex py-4" style="justify-content: center;">
                    <h4 class="me-1">{{(transaction?.details?.crypto?.transfer?.amount)}}</h4>
                    <h4>{{tokenLists.find((p) =>p.id === transaction?.details?.crypto?.transfer?.token_id).symbol }}</h4>
                    </div>
    
                    <div class="py-6 mb-5" style="display: flex; justify-content:space-between;line-height: 250%" :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'">
                        <div>
                            <p style="font-size: 14px;">Date & Time:</p>
                            <p style="font-size: 14px;">Fees:</p>
                            <p style="font-size: 14px;">Sent To:</p>
                            <p style="font-size: 14px;">Txn ID:</p>
                            <p style="font-size: 14px;">Txn Type:</p>
                            <p style="font-size: 14px;">Status:</p>
                        </div>
    
                        <div style="text-align: right;">
                            <p style="font-size: 14px;">{{ formattedDate(transaction.created_at) }}, {{ formatTime(transaction.created_at) }}</p>
                            <p style="font-size: 14px;">{{transaction?.details?.crypto?.transfer?.fees.find((p) => p.recipient_type === "GAS" ).amount}}</p>
    
                            <p class="truncate" style="font-size: 14px;width: 157px">{{ transaction?.details?.crypto?.transfer?.to_address }}</p>
                            
                            <div class="d-flex">
                                <p class="truncate" style="font-size: 14px;width: 134px">{{ transaction?.details?.crypto.transfer?.transaction_hash }}</p>
                                <button @click="copyToClipboard(transaction?.details?.crypto?.transfer?.transaction_hash)" variant="plain" style=" background: inherit !important; box-shadow: none;">
                                <img v-if="!copied" src="/svg/copy.svg"/>
                                <p style="color: green; font-weight: 400; font-size: 12px; text-transform: lowercase; letter-spacing: 0px;" v-else>Copied!</p>
                            </button>
                            </div>
                            <v-chip color="orange"> {{ transaction.details.crypto.transfer.transfer_type}}</v-chip>
                        </div>
                    </div>
    
                    <div :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'" style="height: 60px; width: 100%; display: flex; align-items: center; border-left: 2px solid var(--Primary-100, #2873FF);">
                        <p style="font-size: 14px;">Transaction is Processing...</p>
                    </div>
    
                </div>
    
                <v-card-actions class="mt-8" style="display: flex; justify-content: space-between;">
                    <v-btn variant="tonal" text="Close Receipt" @click="isActive.value = false" style="text-transform: unset; letter-spacing: 0px; width: 140px; height: 40px; border-radius: 10px !important;"></v-btn>
                    <v-btn class="primary-btn1" text="Print Receipt" style="border-radius: 10px !important; width: 140px; height: 40px; color: white;"></v-btn>
                </v-card-actions>
                </v-card>
            </template>
            </v-dialog>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
import { getWebTransaction } from "@/composables/requests/transaction";

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore();
const isloading = ref(false);
const tokenSymbol = ref();
const GasFee = ref();
const pageNumber = ref(1);
const tokenLists = ref(pinia.state.tokenLists);
const copied = ref(false);
// const crypto_trans = ref();

const created_at = ref();

const datainfo = ref(pinia.state.TransactionDetails || []);

tokenSymbol.value = tokenLists.value.find((p) => p.id === datainfo.token_id);

const getWebTrans = async () => {
  isloading.value = true;
  try {
    const data = await getWebTransaction(pageNumber.value);
    if (data.success) {
      datainfo.value = data.data.result;

      console.log("datainfo.value:", datainfo.value);


      datainfo.value = filterByKey("id", [
        ...datainfo.value,
        ...data.data.result,
      ]);
      pinia.setTransactionDetails(datainfo.value);

      isloading.value = false;
    } else {
      push.error(`${data.message}`);
      isloading.value = false;
    }
  } catch (e) {
    console.log(e);
    isloading.value = false;
  }
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
  copied.value = true;
  setTimeout(() => {
      copied.value = false;
    }, 2000); // Change the text back to 'Copy' after 2 seconds
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

onMounted(() => {
  getWebTrans();
});
</script>

<style scoped>
.wallet-border {
  border-bottom: 1px solid #1b2537;
}
.wallet-border-light {
  border-bottom: 1px solid #e2e8f0;
}
.txn-cards-dark {
  background: #162138;
  padding: 10px;
  border-radius: 15px;
}

.truncate {
  /* width: 180px; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
