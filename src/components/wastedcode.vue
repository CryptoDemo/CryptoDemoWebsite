<template>
    <v-dialog max-width="420" origin="center center">
    <template v-slot:activator="{ props: activatorProps }">
      <div @click="pinia.state.getSingleTxnID = transaction.id; getSingleWebTrans()" v-bind="activatorProps"
        style="background: inherit; height: auto; cursor: pointer;">
        <div v-if="transaction.details?.crypto" :class="isDark ? 'wallet-border' : 'wallet-border-light'">

          <div class="px-6" v-if="transaction.details?.crypto?.transfer"
            style="display: flex; justify-content: space-between; margin: 4px 0px 10px 0px;">
            <div style="display: flex; align-items: center">
              <div v-if="transaction?.details?.crypto?.transfer">

                <div v-if="transaction.details.crypto.transfer.transfer_type == 'IN'" class="d-flex mb-2 mt-4">
                  <img src="/svg/greenGet.svg" class="me-2 p-2 mr-2"
                    :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'"
                    style="padding: 10px; border-radius: 30px;" />
                  <div class="d-flex" style="flex-direction: column; margin-left: 7px">
                    <span>Received</span>
                    <div style="display: flex;">
                      <h5 class="me-2"> {{ formattedDate(transaction.created_at) }}, </h5>
                      <h5>{{ formatTime(transaction.created_at) }}</h5>
                    </div>
                  </div>

                </div>

                <div v-if="transaction.details.crypto.transfer.transfer_type == 'OUT'" class="d-flex mb-2 mt-4"
                  style="align-items: center">
                  <img src="/svg/transfer.svg" class="me-2 p-2 mr-2"
                    :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'"
                    style="padding: 10px; border-radius: 30px;" />
                  <div class="d-flex" style="flex-direction: column; margin-left: 7px">

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

    <template v-slot:default="{ isActive }" origin="center center">
      <v-card :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'"
        style="border-radius: 1px; padding: 20px">
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

</template>




<!-- <v-dialog v-model="dialog" origin="center center" width="420px">
  <v-card :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'"
    style="border-radius: 1px; padding: 20px">
    <h2 class="text-center">Transaction Details</h2>

    <div v-if="transData?.details?.crypto?.transfer">
      <div class="d-flex py-4" style="justify-content: center;">
        <v-chip>
          <h4 class="me-1">{{ (transData?.details?.crypto?.transfer?.amount) }}</h4>
          <h4>{{ tokenLists.find((p) => p.id === transData?.details?.crypto?.transfer?.token_id).symbol }}
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
          <p style="font-size: 14px;">{{ formattedDate(transData.created_at) }}, {{
            formatTime(transData.created_at) }}</p>
          <p style="font-size: 14px;">{{ transData?.details?.crypto?.transfer?.fees.find((p) =>
            p.recipient_type === "TOTAL")?.amount || 0 }}</p>

          <p class="truncate" style="font-size: 14px;width: 157px">{{
            transData?.details?.crypto?.transfer?.to_address }}</p>

          <div class="d-flex">
            <p class="truncate" style="font-size: 14px;width: 134px">{{
              transData?.details?.crypto.transfer?.transaction_hash }}</p>
            <button @click="copyToClipboard(transData?.details?.crypto?.transfer?.transaction_hash)"
              variant="plain" style=" background: inherit !important; box-shadow: none;">
              <img v-if="!copied" src="/svg/copy.svg" />
              <p style="color: green; font-weight: 400; font-size: 12px; text-transform: lowercase; letter-spacing: 0px;"
                v-else>Copied!</p>
            </button>
          </div>
          <div v-if="transData?.details?.crypto?.transfer?.transfer_type">
            <v-chip :color="transData.details.crypto.transfer.transfer_type == 'IN' ? 'green' : 'orange'"
              style="font-size: 14px; border-radius: 20px;">
              {{ transData.details.crypto.transfer.transfer_type == 'IN' ? 'IN' : 'OUT' }}
              </v-chip>
          </div>

          <p class="truncate" style="font-size: 14px; width: 157px"
            v-if="transData?.details?.crypto?.transfer?.status">
            <v-chip style="font-weight: 700 !important;"
              :color="transData?.details?.crypto?.transfer?.status?.fulfilled ? 'green' : transData?.details?.crypto?.transfer?.status?.failed ? 'red' : 'orange'">
              {{ transData?.details?.crypto?.transfer?.status?.fulfilled ? 'Successful' :
                transData?.details?.crypto?.transfer?.status?.failed ? 'Failed': 'Pending'}}</v-chip>
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
            <button @click="copyToClipboard(transaction?.details?.crypto?.swap?.transaction_hash)" variant="plain"
              style=" background: inherit !important; box-shadow: none;">
              <img v-if="!copied" src="/svg/copy.svg" />
              <p style="color: green; font-weight: 400; font-size: 12px; text-transform: lowercase; letter-spacing: 0px;"
                v-else>Copied!</p>
            </button>
          </div>


          <p class="truncate" style="font-size: 14px; width: 187px"
            v-if="transData?.details?.crypto?.swap?.status">
            <v-chip
              :color="transData?.details?.crypto?.swap?.status?.fulfilled ? 'green' : transData?.details?.crypto?.swap?.status?.failed ? 'red' : 'orange'">
              {{ transData?.details?.crypto?.swap?.status?.fulfilled ? 'Successful' :
                transData?.details?.crypto?.swap?.status?.failed ? 'Failed': 'Pending'}}</v-chip>
          </p>

        </div>

      </div>


    </div>


    <v-card-actions class="mt-8" style="display: flex; justify-content: space-between; align-items: center;">
      <v-btn variant="tonal" text="Close Receipt" @click="dialog = false"
        style="text-transform: unset; letter-spacing: 0px; font-weight: 600;  width: 100%; height: 50px; border-radius: 10px !important;"></v-btn>
      <!-- <v-btn class="primary-btn1" text="Download Receipt" style="border-radius: 10px !important; width: 50%; font-weight: 600; height: 50px; color: white;"></v-btn> -->
    </v-card-actions>
  </v-card>
</v-dialog> -->




<v-virtual-scroll :items="FiatTxnInfo" :key="FiatTxnInfo.id">
            <template v-slot="{ item: transaction }">
                <v-dialog max-width="420">
                <template v-slot:activator="{ props: activatorProps }">
                    <div v-bind="activatorProps" style="background: inherit; height: 60px; cursor: pointer;">

                    <div :class="isDark ? 'wallet-border' : 'wallet-border-light'">

                        <div v-if="transaction?.details?.fiat?.transfer" class="px-6 mt-3" style="display: flex; align-items: center; justify-content: space-between;margin: 4px 0px 10px 0px;">
                            <div style="display: flex; align-items: center">
                        
                                <img src="/svg/transfer.svg" class="me-1 p-2 mr-2" :class="isDark ?'txn-cards-dark' : 'txn-cards-light'" style="padding: 10px; border-radius: 30px;"/>
                            
                                <div style="display: flex; flex-direction: column">
                                    <span>Sent</span>
                                    <div class="d-flex" style="margin-bottom: 6px">
                                        <h5 class="me-2"> {{ formattedDate(transaction.created_at) }}, </h5>
                                        <h5>{{ formatTime(transaction.created_at) }}</h5>
                                    </div>
                                </div>
                            </div>

                            <div style="display: flex; justify-items: center; align-items: center;">
                                <span style="color: rgb(145, 163, 176)">{{ pinia.state.allcountries.find ((c) => c.id === transaction?.details?.fiat?.transfer?.country_id).currency_code }}</span>
                                <span style="color: rgb(145, 163, 176)">{{formatNumber(transaction?.details?.fiat?.transfer?.amount)}}</span>
                            </div>
                        </div>


                        <div v-if="transaction?.details?.fiat?.funding" class="px-6 mt-3"  style="display: flex; align-items: center; justify-content: space-between;margin: 4px 0px 10px 0px;">
                            <div style="display: flex; align-items: center; ">
                        
                                <img src="/svg/greenGet.svg" class="me-1 p-2 mr-2" :class="isDark ?'txn-cards-dark' : 'txn-cards-light'" style="padding: 10px; border-radius: 30px;"/>
                            
                                <div style="display: flex; flex-direction: column">
                                    <span>Received</span>
                                    <div class="d-flex" style="margin-bottom: 6px">
                                        <h5 class="me-2"> {{ formattedDate(transaction.created_at) }}, </h5>
                                        <h5>{{ formatTime(transaction.created_at) }}</h5>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span style="color: rgb(53, 178, 51)">{{ pinia.state.allcountries.find ((c) => c.id === transaction?.details?.fiat?.funding?.country_id).currency_code }}</span>
                                <span style="color: rgb(53, 178, 51)">{{formatNumber(transaction?.details?.fiat?.funding?.amount)}}</span>
                            </div>
                        </div>
        

                        <div v-if="transaction?.details?.fiat.swap">
                            <div class="d-flex" style="justify-content: space-between;">
                                <div style="display: flex; align-items: center">
                                    <img src="/svg/newSwap.svg" class="me-1 p-2 mr-2" :class="isDark ?'txn-cards-dark' : 'txn-cards-light'" style="padding: 10px; border-radius: 30px;"/>
                                    <div style="display: flex; flex-direction: column">
                                    <span>Swap</span>
                                    <div class="d-flex" style="margin-bottom: 6px">
                                        <h5 class="me-2">{{ formattedDate(transaction.created_at) }},</h5>
                                        <h5>{{ formatTime(transaction.created_at) }}</h5>
                                    </div>
                                    </div>
                                </div>

                                <div class="d-flex" style="justify-items: center; align-items: center;">
                                    <span style="color: #007F80">{{ pinia.state.allcountries.find ((c) => c.id === transaction?.details?.fiat?.swap?.from_country_id).currency_code }}</span>
                                    <span style="color: #007F80">{{formatNumber(transaction?.details?.fiat?.swap?.from_amount)}}</span>
                                </div>
                            </div>
            
                        </div> 



                        
                        <div v-if="transaction?.details?.fiat.exchange">
                            <div class="d-flex" style="justify-content: space-between;">
                                <div style="display: flex; align-items: center">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#4169E1" class="bi bi-arrow-repeat me-1 p-2 mr-2" viewBox="0 0 16 16"  :class="isDark ?'txn-cards-dark' : 'txn-cards-light'" style="padding: 10px; border-radius: 30px;">
                                            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
                                            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
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
                                            <span style="color: #4169E1">{{ pinia.state.allcountries.find ((c) => c.id === transaction?.details?.fiat?.exchange?.from_fiat_to_crypto?.from_fiat.country_id)?.currency_code }}</span>
                                            <span style="color: #4169E1">{{formatBalance(transaction?.details?.fiat?.exchange?.from_fiat_to_crypto?.from_fiat.amount)}}</span>
                                        </div>
                                        <div class="d-flex">
                                            <span style="color: #4169E1">{{ formatBalance(transaction?.details?.fiat?.exchange?.from_fiat_to_crypto?.to_crypto?.amount) }}</span>
                                            <span style="color: #4169E1">{{ pinia.state.tokenLists.find ((c) => c.id === transaction?.details?.fiat?.exchange?.from_fiat_to_crypto?.to_crypto?.token_id)?.symbol }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                        </div> 

                        <!-- when you make a withdrwal and there is an error, quickly check here because i have not made any withdrawal to test this section of the code... -->

                        <div v-if="transaction?.details?.fiat?.withdrawal">
                            <div class="d-flex" style="justify-content: space-between;">
                                <div style="display: flex; align-items: center">
                                    <img src="/svg/newSwap.svg" class="me-1 p-2 mr-2" :class="isDark ?'txn-cards-dark' : 'txn-cards-light'" style="padding: 10px; border-radius: 30px;"/>
                                    <div style="display: flex; flex-direction: column">
                                    <span>Withdrawal</span>
                                    <div class="d-flex" style="margin-bottom: 6px">
                                        <h5 class="me-2"> {{ formattedDate(transaction.created_at) }}, </h5>
                                        <h5>{{ formatTime(transaction.created_at) }}</h5>
                                    </div>
                                    </div>
                                </div>

                                <div class="d-flex">
                                    <span style="color: #007F80">{{formatNumber(transaction?.details?.fiat?.withdrawal?.amount)}}</span>
                                </div>
                            </div>
            
                        </div>
                    
                    </div>
                </div>
            </template>
            
            
            <template v-slot:default="{ isActive }">
                   
                    <v-card :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 20px; padding: 20px">
                    <h2 class="text-center">Transaction Details</h2>
        
                    <div v-if="transaction?.details?.fiat?.transfer">
                        <div  class="d-flex py-4" style="justify-content: center;">
                            <v-chip>
                                <h4>{{ pinia.state.allcountries.find ((c) => c.id === transaction?.details?.fiat?.transfer?.country_id).currency_code }}</h4>
                                <h4 class="me-1">{{formatBalance(transaction?.details?.fiat?.transfer?.amount)}}</h4>
                            </v-chip>
                        </div>
        
                        <div class="py-6 mb-5" style="display: flex; justify-content:space-between;line-height: 260%" :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'">
                            <div>
                                <p style="font-size: 14px; font-weight: 600;">Date & Time:</p>
                                <p style="font-size: 14px; font-weight: 600;">Txn ID:</p>
                                <p style="font-size: 14px; font-weight: 600;">Status:</p>
                            </div>
        
                            <div style="text-align: right;">
                                <p style="font-size: 14px;">{{ formattedDate(transaction.created_at) }}, {{ formatTime(transaction.created_at) }}</p>
                            
                                
                            <div class="d-flex">
                                <p class="truncate" style="font-size: 14px;width: 134px">{{ transaction?.id }}</p>
                                <button @click="copyToClipboard(transaction?.id)" variant="plain" style=" background: inherit !important; box-shadow: none;">
                                    <img v-if="!copied" src="/svg/copy.svg"/>
                                    <p style="color: green; font-weight: 400; font-size: 12px; text-transform: lowercase; letter-spacing: 0px;" v-else>Copied!</p>
                                </button>
                            </div>                     
                                
                            <p class="truncate" style="font-size: 14px; width: 157px" v-if="transaction?.details?.fiat?.transfer?.status">
                                <span style="color: green; font-weight: 700;" v-if="transaction?.details?.fiat?.transfer?.status === 'fulfilled'">Successful</span>
                                <span style="color: red; font-weight: 700;" v-else-if="transaction?.details?.fiat?.transfer?.status ==='failed' "> Failed</span>
                                <span style="color: orange; font-weight: 700;" v-else>Pending</span>
                            </p>
                        
                        </div>

                    </div>

                    </div>


                    <div v-if="transaction?.details?.fiat?.swap">
                        <div  class="d-flex py-4" style="justify-content: center;">
                            <v-chip>
                                <h4>{{ pinia.state.allcountries.find ((c) => c.id === transaction?.details?.fiat?.swap?.from_country_id).currency_code }}</h4>
                                <h4 class="me-1">{{formatBalance(transaction?.details?.fiat?.swap?.from_amount)}}</h4>
                            </v-chip>
                        </div>
        
                        <div class="py-6 mb-5" style="display: flex; justify-content:space-between;line-height: 260%" :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'">
                            <div>
                                <p style="font-size: 14px;">Date & Time:</p>
                                <p style="font-size: 14px;">Txn ID:</p>
                                <p style="font-size: 14px;">Currency to swap</p>
                                <p style="font-size: 14px;">Status:</p>
                            </div>
        
                            <div style="text-align: right;">
                                <p style="font-size: 14px;">{{ formattedDate(transaction.created_at) }}, {{ formatTime(transaction.created_at) }}</p>
                            
                                
                                <div class="d-flex">
                                    <p class="truncate me-1" style="font-size: 14px;width: 157px">{{ transaction?.id }}</p>
                                    <button @click="copyToClipboard(transaction?.id)" variant="plain" style=" background: inherit !important; box-shadow: none;">
                                        <img v-if="!copied" src="/svg/copy.svg"/>
                                        <p style="color: green; font-weight: 400; font-size: 12px; text-transform: lowercase; letter-spacing: 0px;" v-else>Copied!</p>
                                    </button>
                                </div>

                                <div style="display: flex; align-items: center; justify-content: end;">
                                    <span style="font-size: 14px;">{{ pinia.state.allcountries.find ((c) => c.id === transaction?.details?.fiat?.swap?.from_country_id).currency_code }}</span>
                                    <span style="font-size: 14px;">{{formatBalance(transaction?.details?.fiat?.swap?.from_amount)}}</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#007f80" class="bi bi-arrow-left-right" viewBox="0 0 16 16" style="margin-left: 4px; margin-right: 4px;">
                                    <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
                                    </svg>

                                    <span style="font-size: 14px;">{{ pinia.state.allcountries.find ((c) => c.id === transaction?.details?.fiat?.swap?.to_country_id).currency_code }}</span>
                                    <span style="font-size: 14px;">{{formatBalance(transaction?.details?.fiat?.swap?.to_amount)}}</span>
                                </div>
                            
                                <p class="truncate" style="font-size: 14px; width: 187px" v-if="transaction?.details?.fiat?.swap?.status">
                                    <span style="color: green; font-weight: 700;" v-if="transaction?.details?.fiat?.swap?.status === 'fulfilled'">Successful</span>
                                    <span style="color: red; font-weight: 700;" v-else-if="transaction?.details?.fiat?.swap?.status === 'failed' ">Failed</span>
                                    <span style="color: orange; font-weight: 700;" v-else>Pending</span>
                                </p>
                        
                            </div>

                    </div> 

                    </div>


                    <div v-if="transaction?.details?.fiat?.funding">
                        <div  class="d-flex py-4" style="justify-content: center;">
                            <v-chip>
                                <h4>{{ pinia.state.allcountries.find ((c) => c.id === transaction?.details?.fiat?.funding?.country_id)?.currency_code }}</h4>
                                <h4>{{formatBalance(transaction?.details?.fiat?.funding?.amount)}}</h4>
                            </v-chip>
                        </div>
        
                        <div class="py-6 mb-5" style="display: flex; justify-content:space-between;line-height: 260%" :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'">
                            <div>
                                <p style="font-size: 14px;">Date & Time:</p>
                                <p style="font-size: 14px;">Txn ID:</p>
                                <p style="font-size: 14px;">Status:</p>
                            </div>
        
                            <div style="text-align: right;">
                                <p style="font-size: 14px;">{{ formattedDate(transaction.created_at) }}, {{ formatTime(transaction.created_at) }}</p>
                            
                                
                                <div class="d-flex">
                                    <p class="truncate me-1" style="font-size: 14px;width: 157px">{{ transaction?.id }}</p>
                                    <button @click="copyToClipboard(transaction?.id)" variant="plain" style=" background: inherit !important; box-shadow: none;">
                                        <img v-if="!copied" src="/svg/copy.svg"/>
                                        <p style="color: green; font-weight: 400; font-size: 12px; text-transform: lowercase; letter-spacing: 0px;" v-else>Copied!</p>
                                    </button>
                                </div>

                    
                            
                                <p class="truncate" style="font-size: 14px; width: 187px" v-if="transaction?.details?.fiat?.funding?.status">
                                    <span style="color: green; font-weight: 700;" v-if="transaction?.details?.fiat?.funding?.status === 'fulfilled'">Successful</span>
                                    <span style="color: red; font-weight: 700;" v-else-if="transaction?.details?.fiat?.funding?.status === 'failed' ">Failed</span>
                                    <span style="color: orange; font-weight: 700;" v-else>Pending</span>
                                </p>
                        
                            </div>

                    </div> 

                    </div>


                    <div v-if="transaction?.details?.fiat?.exchange">
                        <div  class="d-flex py-4" style="justify-content: center;">
                            <v-chip>
                                <h4>{{ pinia.state.allcountries.find ((c) => c.id === transaction?.details?.fiat?.exchange?.from_fiat_to_crypto?.from_fiat.country_id)?.currency_code }}</h4>
                                <h4>{{formatBalance(transaction?.details?.fiat?.exchange?.from_fiat_to_crypto?.from_fiat.amount)}}</h4>
                            </v-chip>
                        </div>
        
                        <div class="py-6 mb-5" style="display: flex; justify-content:space-between;line-height: 260%" :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'">
                            <div>
                                <p style="font-size: 14px;">Date & Time:</p>
                                <p style="font-size: 14px;">Txn ID:</p>
                                <p style="font-size: 14px;">Status:</p>
                            </div>
        
                            <div style="text-align: right;">
                                <p style="font-size: 14px;">{{ formattedDate(transaction.updated_at) }}, {{ formatTime(transaction.updated_at) }}</p>
                            
                                
                                <div class="d-flex">
                                    <p class="truncate me-1" style="font-size: 14px;width: 157px">{{ transaction?.id }}</p>
                                    <button @click="copyToClipboard(transaction?.id)" variant="plain" style=" background: inherit !important; box-shadow: none;">
                                        <img v-if="!copied" src="/svg/copy.svg"/>
                                        <p style="color: green; font-weight: 400; font-size: 12px; text-transform: lowercase; letter-spacing: 0px;" v-else>Copied!</p>
                                    </button>
                                </div>

                    
                            
                                <p class="truncate" style="font-size: 14px; width: 187px" v-if="transaction?.details?.fiat?.exchange?.from_fiat_to_crypto?.status">
                                    <span style="color: green; font-weight: 700;" v-if="transaction?.details?.fiat?.exchange?.from_fiat_to_crypto?.status === 'fulfilled'">Successful</span>
                                    <span style="color: red; font-weight: 700;" v-else-if="transaction?.details?.fiat?.exchange?.from_fiat_to_crypto?.status === 'failed' ">Failed</span>
                                    <span style="color: orange; font-weight: 700;" v-else>Pending</span>
                                </p>
                        
                            </div>

                    </div> 

                    </div>
                    
                    <v-card-actions class="mt-8" style="display: flex; justify-content: space-between; align-items: center;">
                        <v-btn variant="tonal" text="Close Receipt" @click="isActive.value = false" style="text-transform: unset; letter-spacing: 0px; font-weight: 600;  width: 100%; height: 50px; border-radius: 10px !important;"></v-btn>
                        <!-- <v-btn class="primary-btn1" text="Download Receipt" style="border-radius: 10px !important; width: 50%; font-weight: 600; height: 50px; color: white;"></v-btn> -->
                    </v-card-actions>
                    </v-card>
                </template> 
                </v-dialog>
            </template>
        </v-virtual-scroll>