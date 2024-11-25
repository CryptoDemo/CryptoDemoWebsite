<template>
  <div>
    <div v-for="transaction in displayedTransactions.slice(0, sliceEndValue)" :key="transaction.id">

      <v-dialog max-width="420">
        <template v-slot:activator="{ props: activatorProps }">
          <div @click="pinia.state.getSingleTxnID = transaction.id; getSingleWebTrans()" v-bind="activatorProps"
            style="background: inherit; height: auto; cursor: pointer;">
            <div v-if="transaction.details?.crypto" :class="isDark ? 'wallet-border' : 'wallet-border-light'">

              <div class="mt-2" v-if="transaction.details?.crypto?.transfer"
                style="display: flex; justify-content: space-between">
                <div style="display: flex; align-items: center">
                  <div v-if="transaction?.details?.crypto?.transfer">

                    <div v-if="transaction.details.crypto.transfer.transfer_type == 'IN'" class="d-flex mb-2">
                      <img src="/svg/greenGet.svg" class="me-2 p-2 mr-2"
                        :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'"
                        style="padding: 10px; border-radius: 30px;" />
                      <div class="d-flex" style="flex-direction: column;">
                        <span>Received</span>
                        <div style="display: flex;">
                          <h5 class="me-2"> {{ formattedDate(transaction.created_at) }}, </h5>
                          <h5>{{ formatTime(transaction.created_at) }}</h5>
                        </div>
                      </div>

                    </div>

                    <div v-if="transaction.details.crypto.transfer.transfer_type == 'OUT'" class="d-flex mb-2"
                      style="align-items: center">
                      <img src="/svg/transfer.svg" class="me-2 p-2 mr-2"
                        :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'"
                        style="padding: 10px; border-radius: 30px;" />
                      <div class="d-flex" style="flex-direction: column;">

                        <span>Sent</span>
                        <div class="d-flex">
                          <h5 class="me-2"> {{ formattedDate(transaction.created_at) }}, </h5>
                          <h5>{{ formatTime(transaction.created_at) }}</h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- <div style="display: flex; flex-direction: column">
                          <span style="color: green; font-weight: 700;" v-if="transData?.details?.crypto?.transfer?.status?.fulfilled || transaction?.details?.crypto?.transfer?.status?.fulfilled">Successful</span>
                          <span style="color: red; font-weight: 700;" v-else-if="transData?.details?.crypto?.transfer?.status?.failed || transaction?.details?.crypto?.transfer?.status?.failed">Failed</span>
                          <span style="color: orange; font-weight: 700;" v-else>Pending</span>

                          <div class="d-flex" style="margin-bottom: 6px">
                              <h5 class="me-2"> {{ formattedDate(transaction.created_at) }}, </h5>
                              <h5>{{ formatTime(transaction.created_at) }}</h5>
                          </div>
                        </div> -->
                </div>

                <div class="d-flex" style="justify-items: center; align-items: center;">
                  <span v-if="transaction.details.crypto.transfer.transfer_type == 'IN'"
                    style="color: #35B233; font-weight: 600;">{{
                      formatNumber(transaction?.details?.crypto?.transfer?.amount) }}</span>
                  <span v-if="transaction.details.crypto.transfer.transfer_type == 'OUT'"
                    style="color: #91A3B0; font-weight: 600">{{
                      formatNumber(transaction?.details?.crypto?.transfer?.amount) }}</span>

                  <span v-if="transaction.details.crypto.transfer.transfer_type == 'IN'" style="color: #35B233">{{
                    tokenLists.find((p) => p.id ===
                      transaction?.details?.crypto?.transfer?.token_id)?.symbol}}</span>
                  <span v-if="transaction.details.crypto.transfer.transfer_type == 'OUT'" style="color: #91A3B0">{{
                    tokenLists.find((p) => p.id ===
                      transaction?.details.crypto?.transfer?.token_id)?.symbol}}</span>
                </div>
              </div>



              <div v-if="transaction?.details?.crypto.swap">
                <div class="d-flex" style="justify-content: space-between;">
                  <div style="display: flex; align-items: center">
                    <img src="/svg/newSwap.svg" class="me-2 p-2 mr-2"
                      :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'"
                      style="padding: 10px; border-radius: 30px;" />
                    <div style="display: flex; flex-direction: column">
                      <span>Swap</span>
                      <div class="d-flex" style="margin-bottom: 6px">
                        <h5 class="me-2">
                          {{ formattedDate(transaction.created_at) }}
                        </h5>
                        <h5>{{ formatTime(transaction.created_at) }}</h5>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex" style="justify-items: center;align-items: center;">
                    <span style="color: #007F80">{{ formatNumber(transaction?.details?.crypto?.swap?.from?.amount)
                      }}</span>
                    <span style="color: #007F80">{{ tokenLists.find((p) => p.id ===
                      transaction?.details?.crypto?.swap?.from?.token_id)?.symbol }}</span>
                  </div>
                </div>

              </div>

            </div>


          </div>


        </template>

        <template v-slot:default="{ isActive }">
          <v-card :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'"
            style="border-radius: 20px; padding: 20px">
            <h2 class="text-center">Transaction Details</h2>

            <div v-if="transaction?.details?.crypto?.transfer">
              <div class="d-flex py-4" style="justify-content: center;">
                <v-chip>
                  <h4 class="me-1">{{ (transaction?.details?.crypto?.transfer?.amount) }}</h4>
                  <h4>{{ tokenLists.find((p) => p.id === transaction?.details?.crypto?.transfer?.token_id).symbol }}
                  </h4>
                </v-chip>
              </div>

              <div class="py-6 mb-5" style="display: flex; justify-content:space-between;line-height: 260%"
                :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'">
                <div>
                  <p style="font-size: 14px; font-weight: 600;">Date & Time:</p>
                  <p style="font-size: 14px; font-weight: 600;">Fees:</p>
                  <p style="font-size: 14px; font-weight: 600;">Sent To:</p>
                  <p style="font-size: 14px; font-weight: 600;">Transaction ID:</p>
                  <p style="font-size: 14px; font-weight: 600;">Transaction Type:</p>
                  <p style="font-size: 14px; font-weight: 600;">Status:</p>
                </div>

                <div style="text-align: right;">
                  <p style="font-size: 14px;">{{ formattedDate(transaction.created_at) }}, {{
                    formatTime(transaction.created_at) }}</p>
                  <p style="font-size: 14px;">{{ transaction?.details?.crypto?.transfer?.fees.find((p) =>
                    p.recipient_type === "TOTAL")?.amount || 0 }}</p>

                  <p class="truncate" style="font-size: 14px;width: 157px">{{
                    transaction?.details?.crypto?.transfer?.to_address }}</p>

                  <div class="d-flex">
                    <p class="truncate" style="font-size: 14px;width: 134px">{{
                      transaction?.details?.crypto.transfer?.transaction_hash }}</p>
                    <button @click="copyToClipboard(transaction?.details?.crypto?.transfer?.transaction_hash)"
                      variant="plain" style=" background: inherit !important; box-shadow: none;">
                      <img v-if="!copied" src="/svg/copy.svg" />
                      <p style="color: green; font-weight: 400; font-size: 12px; text-transform: lowercase; letter-spacing: 0px;"
                        v-else>Copied!</p>
                    </button>
                  </div>
                  <div v-if="transaction?.details?.crypto?.transfer?.transfer_type">
                    <v-chip v-if="transaction.details.crypto.transfer.transfer_type == 'IN'" color="green"
                      style="font-size: 14px; border-radius: 20px;"> IN </v-chip>
                    <v-chip v-if="transaction.details.crypto.transfer.transfer_type == 'OUT'" color="orange"
                      style="font-size: 14px; border-radius: 20px"> OUT </v-chip>
                  </div>

                  <p class="truncate" style="font-size: 14px; width: 157px"
                    v-if="transaction?.details?.crypto?.transfer?.status">
                    <span style="color: green; font-weight: 700;"
                      v-if="transData?.details?.crypto?.transfer?.status?.fulfilled || transaction?.details?.crypto?.transfer?.status?.fulfilled">Successful</span>
                    <span style="color: red; font-weight: 700;"
                      v-else-if="transData?.details?.crypto?.transfer?.status?.failed || transaction?.details?.crypto?.transfer?.status?.failed">Failed</span>
                    <span style="color: orange; font-weight: 700;" v-else>Pending</span>
                  </p>
                </div>
              </div>
            </div>



            <div v-if="transaction?.details?.crypto?.swap">
              <div class="d-flex py-4" style="justify-content: center;">
                <v-chip>
                  <h4 class="me-1">{{ (transaction?.details?.crypto?.swap?.from.amount) }}</h4>
                  <h4>{{ tokenLists.find((p) => p.id === transaction?.details?.crypto?.swap?.from?.token_id)?.symbol }}
                  </h4>
                </v-chip>
              </div>

              <div class="py-6 mb-5" style="display: flex; justify-content:space-between;line-height: 260%"
                :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'">
                <div>
                  <p style="font-size: 14px;">Date & Time:</p>
                  <p style="font-size: 14px;">Fees:</p>
                  <p style="font-size: 14px;">User ID:</p>
                  <p style="font-size: 14px;">Txn ID:</p>
                  <p style="font-size: 14px;">Status:</p>
                </div>

                <div style="text-align: right;">
                  <p style="font-size: 14px;">{{ formattedDate(transaction.created_at) }}, {{
                    formatTime(transaction.created_at) }}</p>
                  <p style="font-size: 14px;">{{ transaction?.details?.crypto?.swap?.fees.find((p) => p.recipient_type
                    === "TOTAL").amount }}</p>

                  <p class="truncate" style="font-size: 14px;width: 187px">{{ transaction?.user_id }}</p>

                  <div class="d-flex">
                    <p class="truncate me-1" style="font-size: 14px;width: 157px">{{
                      transaction.details.crypto.swap.transaction_hash }}</p>
                    <button @click="copyToClipboard(transaction?.details?.crypto?.swap?.transaction_hash)"
                      variant="plain" style=" background: inherit !important; box-shadow: none;">
                      <img v-if="!copied" src="/svg/copy.svg" />
                      <p style="color: green; font-weight: 400; font-size: 12px; text-transform: lowercase; letter-spacing: 0px;"
                        v-else>Copied!</p>
                    </button>
                  </div>


                  <p class="truncate" style="font-size: 14px; width: 187px"
                    v-if="transaction?.details?.crypto?.swap?.status">
                    <v-chip color="green"
                      v-if="transaction?.details?.crypto?.swap?.status?.fulfilled">Successful</v-chip>
                    <v-chip color="red" v-else-if="transaction?.details?.crypto?.swap?.status?.failed">Failed</v-chip>
                    <v-chip color="orange" v-else>Pending</v-chip>
                  </p>

                </div>

              </div>


            </div>


            <v-card-actions class="mt-8" style="display: flex; justify-content: space-between; align-items: center;">
              <v-btn variant="tonal" text="Close Receipt" @click="isActive.value = false"
                style="text-transform: unset; letter-spacing: 0px; font-weight: 600;  width: 100%; height: 50px; border-radius: 10px !important;"></v-btn>
              <!-- <v-btn class="primary-btn1" text="Download Receipt" style="border-radius: 10px !important; width: 50%; font-weight: 600; height: 50px; color: white;"></v-btn> -->
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

    </div>

    <div style="width: 100%; display: flex; justify-content: center; margin-top: 15px;">
      <v-btn variant="outlined" @click="toggleTokens"> {{ showAll ? 'See Less' : 'See More' }}</v-btn>
    </div>


    <div v-if="!displayedTransactions.length" class="no-transactions"
      style="height: 400px; display: flex; justify-content: center;">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 14 14" fill="none">
        <path d="M10.52 5.96684L13 3.48682L10.52 1.00684" stroke="#969696" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M1 3.48682H13" stroke="#969696" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.47998 8.03369L1 10.5137L3.47998 12.9937" stroke="#969696" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M13 10.5137H1" stroke="#969696" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span style="">No transactions to display.</span>
    </div>

    <!-- <v-btn variant="text" color="#2873FF" style="text-transform: unset; letter-spacing: 0px; font-weight: 700; font-size: 16px;">
        See More...
      </v-btn> -->

  </div>

</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
import { getWebTransaction, getSingleTransactions } from "@/composables/requests/transaction";

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore();
const isloading = ref(false);
const tokenSymbol = ref();
const pageNumber = ref(1);
const tokenLists = ref(pinia.state.tokenLists);
const copied = ref(false);

const sliceEndValue = ref(5);
const showAll = ref(false);

const toggleTokens = () => {
  if (showAll.value) {
    sliceEndValue.value = 5;
  } else {
    sliceEndValue.value = displayedTransactions.length;
  }
  showAll.value = !showAll.value;
};

const created_at = ref();

const displayedTransactions = ref(pinia.state.TransactionDetails || []);

const transData = ref(null)


const worker = new Worker('/worker/index.js'); // Path to your worker file
let hasMoreData = ref(true);


const getWebTrans = async () => {
  isloading.value = true;
  try {
    const data = await getWebTransaction(pageNumber.value, pinia.state.selectedNetwork.toLowerCase());
    if (data.success) {
      const result = data.data.result;

      if (result.length === 0) {
        // No more data to fetch
        hasMoreData.value = false;
      } else {
        worker.postMessage({
          type: 'prepareTransaction',
          data: result,
        });
      }
    } else {
      push.error(data.message || 'An error occurred');
    }
  } catch (error) {
    push.error('An error occurred while fetching transactions');
  }

  worker.onmessage = (event) => {
    const { success, type, result, message } = event.data;

    if (type === 'prepareTransaction') {
      if (success) {
        const currentData = Array.isArray(displayedTransactions.value) ? displayedTransactions.value : [];
        const newData = [...currentData, ...result];
        displayedTransactions.value = newData.length ? filterByKey("id", newData) : [];
        pinia.setTransactionDetails(displayedTransactions.value);

      } else {
        push.error(message || 'An error occurred');
      }
    }

    isloading.value = false;
  };

  worker.onerror = (error) => {
    console.error('Worker error:', error);
    push.error('An error occurred in the worker');
    isloading.value = false;
  };
};







watch(() => pinia.state.selectedNetwork.toLowerCase(),
  (newNetwork, oldNetwork) => {
    if (newNetwork !== oldNetwork) {
      // Clear previous transactions
      displayedTransactions.value = [];
      pageNumber.value = 1; // Reset page number if needed

      // Fetch new transactions
      getWebTrans();
    }
  }
);



const getSingleWebTrans = async () => {
  isloading.value = true;
  try {


    const data = await getSingleTransactions(pinia.state.getSingleTxnID);

    if (data.success) {

      transData.value = data.data


      // Optionally handle any additional logic with the data here
    } else {
      // Display error message
      push.error(data.message || 'An error occurred');
    }
  } catch (error) {
    // Log the error with context
    console.error('Failed to fetch transaction:', error);
  } finally {
    // Ensure that the loading state is updated regardless of success or failure
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

const fetch_Web3_txn = async () => {
  if (pinia.state.TransactionDetails.length) {
    return; // No need to fetch if details already exist
  }

  try {
    const results = await Promise.allSettled([
      getWebTrans(),
    ]);

    // Handle results
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        // Process successful result
        console.log('Fetch successful:', result.value);
      } else {
        // Handle error
        console.error('Fetch failed:', result.reason);
      }
    });

  } catch (error) {
    // Handle unexpected errors
    console.error('An unexpected error occurred:', error);
  }
};


onMounted(() => {
  fetch_Web3_txn();
});
</script>

<style scoped>
.wallet-border {
  border-bottom: 1px solid #1B2537 !important;
  border: none;
}

.wallet-border-light {
  border-bottom: 1px solid #e2e8f0 !important;
  border: none;
}

.txn-cards-dark {
  background: #162138;
  padding: 10px;
  border-radius: 15px;
}

.txn-cards-light {
  background: #edf3ff;
  padding: 10px;
  border-radius: 15px;
}

.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.no-transactions {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.list-wrapper {
  width: 100% !important;
  display: flex;
  overflow-y: scroll !important;
  flex-direction: column;
}
</style>
