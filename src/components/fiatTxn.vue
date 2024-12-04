<template>
    <div>
        <v-virtual-scroll :items="FiatTxnInfo" :key="FiatTxnInfo.id">
            <template v-slot="{ item: transaction }">
                <v-dialog max-width="420" origin="center center">
                    <template v-slot:activator="{ props: activatorProps }">
                        <div v-bind="activatorProps" style="background: inherit; height: 60px; cursor: pointer;">

                            <div :class="isDark ? 'wallet-border' : 'wallet-border-light'">

                                <div v-if="transaction?.details?.fiat?.transfer" class="px-6 mt-3"
                                    style="display: flex; align-items: center; justify-content: space-between;margin: 4px 0px 10px 0px;">
                                    <div style="display: flex; align-items: center">

                                        <img src="/svg/transfer.svg" class="me-1 p-2 mr-2"
                                            :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'"
                                            style="padding: 10px; border-radius: 30px;" />

                                        <div style="display: flex; flex-direction: column">
                                            <span>Sent</span>
                                            <div class="d-flex" style="margin-bottom: 6px">
                                                <h5 class="me-2"> {{ formattedDate(transaction.created_at) }}, </h5>
                                                <h5>{{ formatTime(transaction.created_at) }}</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div style="display: flex; justify-items: center; align-items: center;">
                                        <span style="color: rgb(145, 163, 176)">{{ pinia.state.allcountries.find((c) =>
                                            c.id === transaction?.details?.fiat?.transfer?.country_id).currency_code
                                            }}</span>
                                        <span style="color: rgb(145, 163, 176)">{{
                                            formatNumber(transaction?.details?.fiat?.transfer?.amount) }}</span>
                                    </div>
                                </div>


                                <div v-if="transaction?.details?.fiat?.funding" class="px-6 mt-3"
                                    style="display: flex; align-items: center; justify-content: space-between;margin: 4px 0px 10px 0px;">
                                    <div style="display: flex; align-items: center; ">

                                        <img src="/svg/greenGet.svg" class="me-1 p-2 mr-2"
                                            :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'"
                                            style="padding: 10px; border-radius: 30px;" />

                                        <div style="display: flex; flex-direction: column">
                                            <span>Received</span>
                                            <div class="d-flex" style="margin-bottom: 6px">
                                                <h5 class="me-2"> {{ formattedDate(transaction.created_at) }}, </h5>
                                                <h5>{{ formatTime(transaction.created_at) }}</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <span style="color: rgb(53, 178, 51)">{{ pinia.state.allcountries.find((c) =>
                                            c.id === transaction?.details?.fiat?.funding?.country_id).currency_code
                                            }}</span>
                                        <span style="color: rgb(53, 178, 51)">{{
                                            formatNumber(transaction?.details?.fiat?.funding?.amount) }}</span>
                                    </div>
                                </div>


                                <div v-if="transaction?.details?.fiat.swap">
                                    <div class="d-flex" style="justify-content: space-between;">
                                        <div style="display: flex; align-items: center">
                                            <img src="/svg/newSwap.svg" class="me-1 p-2 mr-2"
                                                :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'"
                                                style="padding: 10px; border-radius: 30px;" />
                                            <div style="display: flex; flex-direction: column">
                                                <span>Swap</span>
                                                <div class="d-flex" style="margin-bottom: 6px">
                                                    <h5 class="me-2">{{ formattedDate(transaction.created_at) }},</h5>
                                                    <h5>{{ formatTime(transaction.created_at) }}</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="d-flex" style="justify-items: center; align-items: center;">
                                            <span style="color: #007F80">{{ pinia.state.allcountries.find((c) => c.id
                                                === transaction?.details?.fiat?.swap?.from_country_id).currency_code
                                                }}</span>
                                            <span style="color: #007F80">{{
                                                formatNumber(transaction?.details?.fiat?.swap?.from_amount) }}</span>
                                        </div>
                                    </div>

                                </div>




                                <div v-if="transaction?.details?.fiat.exchange">
                                    <div class="d-flex" style="justify-content: space-between;">
                                        <div style="display: flex; align-items: center">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                                fill="#4169E1" class="bi bi-arrow-repeat me-1 p-2 mr-2"
                                                viewBox="0 0 16 16"
                                                :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'"
                                                style="padding: 10px; border-radius: 30px;">
                                                <path
                                                    d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                                                <path fill-rule="evenodd"
                                                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z" />
                                            </svg>

                                            <div style="display: flex; flex-direction: column;">
                                                <span>P2P</span>
                                                <div class="d-flex" style="margin-bottom: 6px">
                                                    <h5 class="me-2">
                                                        {{ formattedDate(transaction.updated_at) }},
                                                    </h5>
                                                    <h5>{{ formatTime(transaction.updated_at) }}</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="d-flex">
                                            <div style="display: flex; flex-direction: column;">
                                                <div style="display:flex; justify-content: flex-end;">
                                                    <span style="color: #4169E1">
                                                        {{ pinia.state.allcountries.find((c) => c.id ===
                                                            transaction?.details?.fiat?.exchange?.from_fiat_to_crypto?.from_fiat.country_id)?.currency_code
                                                        }}</span>
                                                    <span style="color: #4169E1">{{
                                                        formatBalance(transaction?.details?.fiat?.exchange?.from_fiat_to_crypto?.from_fiat.amount)
                                                    }}</span>
                                                </div>
                                                <div class="d-flex">
                                                    <span style="color: #4169E1">{{
                                                        formatBalance(transaction?.details?.fiat?.exchange?.from_fiat_to_crypto?.to_crypto?.amount)
                                                        }}</span>
                                                    <span style="color: #4169E1">{{ pinia.state.tokenLists.find((c) =>
                                                        c.id ===
                                                        transaction?.details?.fiat?.exchange?.from_fiat_to_crypto?.to_crypto?.token_id)?.symbol
                                                        }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <!-- when you make a withdrwal and there is an error, quickly check here because i have not made any withdrawal to test this section of the code... -->

                                <div v-if="transaction?.details?.fiat?.withdrawal">
                                    <div class="d-flex" style="justify-content: space-between;">
                                        <div style="display: flex; align-items: center">
                                            <img src="/svg/newSwap.svg" class="me-1 p-2 mr-2"
                                                :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'"
                                                style="padding: 10px; border-radius: 30px;" />
                                            <div style="display: flex; flex-direction: column">
                                                <span>Withdrawal</span>
                                                <div class="d-flex" style="margin-bottom: 6px">
                                                    <h5 class="me-2"> {{ formattedDate(transaction.created_at) }}, </h5>
                                                    <h5>{{ formatTime(transaction.created_at) }}</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="d-flex">
                                            <span style="color: #007F80">{{
                                                formatNumber(transaction?.details?.fiat?.withdrawal?.amount) }}</span>
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

                            <div v-if="transaction?.details?.fiat?.transfer">
                                <div class="d-flex py-4" style="justify-content: center;">
                                    <v-chip>
                                        <h4>{{ pinia.state.allcountries.find((c) => c.id ===
                                            transaction?.details?.fiat?.transfer?.country_id).currency_code }}</h4>
                                        <h4 class="me-1">{{ formatBalance(transaction?.details?.fiat?.transfer?.amount)
                                            }}
                                        </h4>
                                    </v-chip>
                                </div>

                                <div class="py-6 mb-5"
                                    style="display: flex; justify-content:space-between;line-height: 260%"
                                    :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'">
                                    <div>
                                        <p style="font-size: 14px; font-weight: 600;">Date & Time:</p>
                                        <p style="font-size: 14px; font-weight: 600;">Txn ID:</p>
                                        <p style="font-size: 14px; font-weight: 600;">Status:</p>
                                    </div>

                                    <div style="text-align: right;">
                                        <p style="font-size: 14px;">{{ formattedDate(transaction.created_at) }}, {{
                                            formatTime(transaction.created_at) }}</p>


                                        <div class="d-flex">
                                            <p class="truncate" style="font-size: 14px;width: 134px">{{ transaction?.id
                                                }}</p>
                                            <button @click="copyToClipboard(transaction?.id)" variant="plain"
                                                style=" background: inherit !important; box-shadow: none;">
                                                <img v-if="!copied" src="/svg/copy.svg" />
                                                <p style="color: green; font-weight: 400; font-size: 12px; text-transform: lowercase; letter-spacing: 0px;"
                                                    v-else>Copied!</p>
                                            </button>
                                        </div>

                                        <p class="truncate" style="font-size: 14px; width: 157px"
                                            v-if="transaction?.details?.fiat?.transfer?.status">
                                            <span style="color: green; font-weight: 700;"
                                                v-if="transaction?.details?.fiat?.transfer?.status === 'fulfilled'">Successful</span>
                                            <span style="color: red; font-weight: 700;"
                                                v-else-if="transaction?.details?.fiat?.transfer?.status === 'failed'">
                                                Failed</span>
                                            <span style="color: orange; font-weight: 700;" v-else>Pending</span>
                                        </p>

                                    </div>

                                </div>

                            </div>


                            <div v-if="transaction?.details?.fiat?.swap">
                                <div class="d-flex py-4" style="justify-content: center;">
                                    <v-chip>
                                        <h4>{{ pinia.state.allcountries.find((c) => c.id ===
                                            transaction?.details?.fiat?.swap?.from_country_id).currency_code }}</h4>
                                        <h4 class="me-1">
                                            {{ formatBalance(transaction?.details?.fiat?.swap?.from_amount) }}</h4>
                                    </v-chip>
                                </div>

                                <div class="py-6 mb-5"
                                    style="display: flex; justify-content:space-between;line-height: 260%"
                                    :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'">
                                    <div>
                                        <p style="font-size: 14px;">Date & Time:</p>
                                        <p style="font-size: 14px;">Txn ID:</p>
                                        <p style="font-size: 14px;">Currency to swap</p>
                                        <p style="font-size: 14px;">Status:</p>
                                    </div>

                                    <div style="text-align: right;">
                                        <p style="font-size: 14px;">{{ formattedDate(transaction.created_at) }}, {{
                                            formatTime(transaction.created_at) }}</p>


                                        <div class="d-flex">
                                            <p class="truncate me-1" style="font-size: 14px;width: 157px">{{
                                                transaction?.id }}</p>
                                            <button @click="copyToClipboard(transaction?.id)" variant="plain"
                                                style=" background: inherit !important; box-shadow: none;">
                                                <img v-if="!copied" src="/svg/copy.svg" />
                                                <p style="color: green; font-weight: 400; font-size: 12px; text-transform: lowercase; letter-spacing: 0px;"
                                                    v-else>Copied!</p>
                                            </button>
                                        </div>

                                        <div style="display: flex; align-items: center; justify-content: end;">
                                            <span style="font-size: 14px;">{{ pinia.state.allcountries.find((c) => c.id
                                                === transaction?.details?.fiat?.swap?.from_country_id).currency_code
                                                }}</span>
                                            <span style="font-size: 14px;">{{
                                                formatBalance(transaction?.details?.fiat?.swap?.from_amount) }}</span>

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="#007f80" class="bi bi-arrow-left-right" viewBox="0 0 16 16"
                                                style="margin-left: 4px; margin-right: 4px;">
                                                <path fill-rule="evenodd"
                                                    d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5" />
                                            </svg>

                                            <span style="font-size: 14px;">{{ pinia.state.allcountries.find((c) => c.id
                                                === transaction?.details?.fiat?.swap?.to_country_id).currency_code
                                                }}</span>
                                            <span style="font-size: 14px;">{{
                                                formatBalance(transaction?.details?.fiat?.swap?.to_amount) }}</span>
                                        </div>

                                        <p class="truncate" style="font-size: 14px; width: 187px"
                                            v-if="transaction?.details?.fiat?.swap?.status">
                                            <span style="color: green; font-weight: 700;"
                                                v-if="transaction?.details?.fiat?.swap?.status === 'fulfilled'">Successful</span>
                                            <span style="color: red; font-weight: 700;"
                                                v-else-if="transaction?.details?.fiat?.swap?.status === 'failed'">Failed</span>
                                            <span style="color: orange; font-weight: 700;" v-else>Pending</span>
                                        </p>

                                    </div>

                                </div>

                            </div>


                            <div v-if="transaction?.details?.fiat?.funding">
                                <div class="d-flex py-4" style="justify-content: center;">
                                    <v-chip>
                                        <h4>{{ pinia.state.allcountries.find((c) => c.id ===
                                            transaction?.details?.fiat?.funding?.country_id)?.currency_code }}</h4>
                                        <h4>{{ formatBalance(transaction?.details?.fiat?.funding?.amount) }}</h4>
                                    </v-chip>
                                </div>

                                <div class="py-6 mb-5"
                                    style="display: flex; justify-content:space-between;line-height: 260%"
                                    :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'">
                                    <div>
                                        <p style="font-size: 14px;">Date & Time:</p>
                                        <p style="font-size: 14px;">Txn ID:</p>
                                        <p style="font-size: 14px;">Status:</p>
                                    </div>

                                    <div style="text-align: right;">
                                        <p style="font-size: 14px;">{{ formattedDate(transaction.created_at) }}, {{
                                            formatTime(transaction.created_at) }}</p>


                                        <div class="d-flex">
                                            <p class="truncate me-1" style="font-size: 14px;width: 157px">{{
                                                transaction?.id }}</p>
                                            <button @click="copyToClipboard(transaction?.id)" variant="plain"
                                                style=" background: inherit !important; box-shadow: none;">
                                                <img v-if="!copied" src="/svg/copy.svg" />
                                                <p style="color: green; font-weight: 400; font-size: 12px; text-transform: lowercase; letter-spacing: 0px;"
                                                    v-else>Copied!</p>
                                            </button>
                                        </div>



                                        <p class="truncate" style="font-size: 14px; width: 187px"
                                            v-if="transaction?.details?.fiat?.funding?.status">
                                            <span style="color: green; font-weight: 700;"
                                                v-if="transaction?.details?.fiat?.funding?.status === 'fulfilled'">Successful</span>
                                            <span style="color: red; font-weight: 700;"
                                                v-else-if="transaction?.details?.fiat?.funding?.status === 'failed'">Failed</span>
                                            <span style="color: orange; font-weight: 700;" v-else>Pending</span>
                                        </p>

                                    </div>

                                </div>

                            </div>


                            <div v-if="transaction?.details?.fiat?.exchange">
                                <div class="d-flex py-4" style="justify-content: center;">
                                    <v-chip>
                                        <h4>{{ pinia.state.allcountries.find((c) => c.id ===
                                            transaction?.details?.fiat?.exchange?.from_fiat_to_crypto?.from_fiat.country_id)?.currency_code
                                            }}</h4>
                                        <h4>{{
                                            formatBalance(transaction?.details?.fiat?.exchange?.from_fiat_to_crypto?.from_fiat.amount)
                                        }}
                                        </h4>
                                    </v-chip>
                                </div>

                                <div class="py-6 mb-5"
                                    style="display: flex; justify-content:space-between;line-height: 260%"
                                    :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'">
                                    <div>
                                        <p style="font-size: 14px;">Date & Time:</p>
                                        <p style="font-size: 14px;">Txn ID:</p>
                                        <p style="font-size: 14px;">Status:</p>
                                    </div>

                                    <div style="text-align: right;">
                                        <p style="font-size: 14px;">{{ formattedDate(transaction.updated_at) }}, {{
                                            formatTime(transaction.updated_at) }}</p>


                                        <div class="d-flex">
                                            <p class="truncate me-1" style="font-size: 14px;width: 157px">{{
                                                transaction?.id }}</p>
                                            <button @click="copyToClipboard(transaction?.id)" variant="plain"
                                                style=" background: inherit !important; box-shadow: none;">
                                                <img v-if="!copied" src="/svg/copy.svg" />
                                                <p style="color: green; font-weight: 400; font-size: 12px; text-transform: lowercase; letter-spacing: 0px;"
                                                    v-else>Copied!</p>
                                            </button>
                                        </div>



                                        <p class="truncate" style="font-size: 14px; width: 187px"
                                            v-if="transaction?.details?.fiat?.exchange?.from_fiat_to_crypto?.status">
                                            <span style="color: green; font-weight: 700;"
                                                v-if="transaction?.details?.fiat?.exchange?.from_fiat_to_crypto?.status === 'fulfilled'">Successful</span>
                                            <span style="color: red; font-weight: 700;"
                                                v-else-if="transaction?.details?.fiat?.exchange?.from_fiat_to_crypto?.status === 'failed'">Failed</span>
                                            <span style="color: orange; font-weight: 700;" v-else>Pending</span>
                                        </p>

                                    </div>

                                </div>

                            </div>

                            <v-card-actions class="mt-8"
                                style="display: flex; justify-content: space-between; align-items: center;">
                                <v-btn variant="tonal" text="Close Receipt" @click="isActive.value = false"
                                    style="text-transform: unset; letter-spacing: 0px; font-weight: 600;  width: 100%; height: 50px; border-radius: 10px !important;"></v-btn>
                                <!-- <v-btn class="primary-btn1" text="Download Receipt" style="border-radius: 10px !important; width: 50%; font-weight: 600; height: 50px; color: white;"></v-btn> -->
                            </v-card-actions>
                        </v-card>
                    </template>

                </v-dialog>
            </template>
        </v-virtual-scroll>
        <div v-show="FiatTxnInfo.length > 5"
            style="width: 100%; display: flex; justify-content: center; margin-top: 5px; padding: 0px">
            <v-btn variant="text" @click="toggleTokens" style="text-transform: capitalize; padding: 0px 5px"> {{ showAll
                ? 'See Less' : 'See More' }}</v-btn>
        </div>


        <div v-if="!FiatTxnInfo.length" class="no-transactions"
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
    </div>
</template>


<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
import { allFiatTxn } from "@/composables/requests/fiat";

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore();
const isloading = ref(false);
const pageNumber = ref(1);
const copied = ref(false);
const sliceEndValue = ref(5);
const showAll = ref(false);


const created_at = ref();

const FiatTxnInfo = computed(() => pinia.state.Fiat_transactions.slice(0, sliceEndValue.value));

const toggleTokens = () => {
    if (showAll.value) {
        sliceEndValue.value = 5;
    } else {
        sliceEndValue.value = FiatTxnInfo.length;
    }
    showAll.value = !showAll.value;
};

const getFiatTxn = async () => {
    isloading.value = true;

    try {
        const data = await allFiatTxn(pageNumber.value);

        if (data.success) {
            // Ensure both existing and new transactions are arrays
            const existingTransactions = Array.isArray(FiatTxnInfo.value) ? FiatTxnInfo.value : [];
            const newTransactions = Array.isArray(data.data.result) ? data.data.result : [];

            // Merge and filter transactions by unique ID
            const updatedTransactions = filterByKey("id", [
                ...existingTransactions,
                ...newTransactions,
            ]);

            // Sort by timestamp (replace 'createdAt' with the actual timestamp field)
            updatedTransactions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

            // Update the transactions in Pinia store
            pinia.setFiat_transactions(updatedTransactions);

        } else {
            push.error(`${data.message}`);
        }
    } catch (e) {
        console.error("An error occurred while fetching transactions:", e);
        push.error("An error occurred while fetching transactions. Please try again.");
    } finally {
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
    getFiatTxn();
});
</script>

<style scoped>
.wallet-border {
    border-bottom: 1px solid #1B2537 !important;
    border: none;
}

.wallet-border:last-child {
    border-bottom: none
}

.wallet-border-light {
    border-bottom: 1px solid #e2e8f0 !important;
    border: none;
}

.wallet-border-light:last-child {
    border-bottom: none
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
</style>
