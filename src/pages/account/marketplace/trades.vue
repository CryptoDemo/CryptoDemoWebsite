<template>
  <div>
    <Header :hide="true" :icon1="true" :icon3="true" :icon2="true" :wallet="true"/>
    <v-container class="d-flex" style="margin-top: 110px">
      <div class="flex-lg-and-up hidden-sm-and-down">
        <Sd-nav1 style="border: none" />
      </div>

      <div class="trades-div" style="width: 100%; margin-left: 16px;">
        <div class="acct-settings" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="display: flex; justify-content: space-between; margin-bottom: 40px; border: none;">
          <span style=" font-size: 24px; font-style: 28px; font-weight: 600;color: #5892ff;">Trade</span>
          <span class="mail-text" :class="isDark ? 'text-dark' : 'text-light'"> {{ pinia.state.user?.email }}</span>
        </div>

        <div :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" class="button-container" style=" display: flex; border-radius: 10px; width: fit-content; height: 65px; align-items: center; padding: 10px; ">
          
          <v-btn class="me-3" :class="[ selectedScreen? 'wallet-btn': isDark? 'fiat-btn': 'fiat-btn-light',]" 
                @click.prevent="selectedScreen = true">Active trade
          </v-btn>

          <v-btn
            :class="[!selectedScreen? 'wallet-btn' : isDark? 'fiat-btn' : 'fiat-btn-light',
            ]" @click.prevent="selectedScreen = false">Closed trade
          </v-btn>
        </div>

        <v-alert v-if="showAlert" type="info" class="mb-4">{{ alertMessage }} </v-alert>

        <div class="mt-5">
          <div v-if="!filteredOrders.length" style="display: flex; flex-direction: column; justify-content: center; margin: auto; margin: auto; height: 420px;">
            
            <span class="text-center">No active trades available.</span>
            <span @click="navigateTo('/account/marketplace/activeOffers')" class="text-decoration-underline text-subtitle-2 text-center cursor-pointer" :class="isDark ? 'text-dark' : 'text-light'">Perform trades to see them here</span>
          </div>

          <v-dialog v-model="dialog">
            <template v-slot:activator="{ props: activatorProps }">
              <div style="overflow-y: auto;" v-if="filteredOrders && filteredOrders.length">
              <v-virtual-scroll :items="filteredOrders" item-height="150"> <!-- Adjust item-height based on your card height -->
                <template v-slot="{ item: order, index }">
                  <v-card
                    link
                    v-bind="activatorProps"
                    @click.prevent="openDialog(order)"
                    :key="index"
                    :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'"
                    style="padding: 20px; border-radius: 15px; margin-bottom: 10px"
                  >
                    <span style="font-size: 14px">
                      Trade time span
                      <span
                        :class="{
                          'expired-text': order.status === 'expired',
                          'active-text': order.status !== 'expired',
                        }"
                        style="font-size: 14px"
                      >
                        {{ formattedDate(order.created_at) }},
                        {{ formatTime(order.created_at) }} -
                        {{ formatTime(order.expires_in) }}
                      </span>
                    </span>

                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 14px; line-height: 30px;">
                      <div style="display: flex; flex-direction: column" :class="isDark ? 'text-dark' : 'text-light'">
                        <div v-if="pinia.state?.user?.kyc_verified" style="display: flex; align-items: center">
                          <span>{{ order?.offer?.user?.username }}</span>
                          <img src="/svg/verified.svg" />
                        </div>

                        <span>Trade status</span>
                        <span>My role</span>
                        <span>Trade amount</span>
                        <span>Expected amount</span>
                        <span>Payment method</span>
                        <span>Order ID</span>
                      </div>

                      <div style="display: flex; flex-direction: column; align-items: end;" :class="isDark ? 'text-dark' : 'text-light'">
                        <button @click="navigateTo('/account/marketplace/tradechat'); pinia.state.selected_trade_ID = order?.id"
                          :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'"
                          class="chat-btn"
                          style="border-radius: 5px !important; height: fit-content !important; height: 38px; position: relative; z-index: 100;">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16" style="cursor: pointer">
                            <defs>
                              <linearGradient id="chatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#2873FF" />
                                <stop offset="100%" stop-color="#0B6B96" />
                              </linearGradient>
                            </defs>
                            <path fill="url(#chatGradient)" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
                          </svg>
                        </button>

                        <span
                          :class="{
                            'expired-text': order.status === 'expired ',
                            'active-text': order.status !== 'expired',
                          }"
                          style="text-transform: capitalize; color: orangered !important; font-weight: 600"
                        >
                          {{ order.status }}
                        </span>
                        <span>Buyer</span>
                        <div>
                          <span>{{ formatBalance(order?.bid?.fiat_amount_paid) }}</span>
                          <span>{{ pinia.state.allcountries.find((c) => c.id === order.offer?.trading_pair?.fiat.country_id)?.currency_name }}</span>
                        </div>
                        <div>
                          <span>{{ order?.bid?.expected_token_quantity }}</span>
                          <span class="ml-1">{{ order.offer?.trading_pair?.crypto.token?.symbol }}</span>
                        </div>
                        <span>Bank Transfer</span>
                        <span style="font-size: 14px">{{ order?.id }}</span>
                      </div>
                    </div>
                  </v-card>
                </template>
              </v-virtual-scroll>
              </div>
            </template>


            <v-card :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" class="chat-modal-info" style="width: 540px; display: flex; margin: auto; border-radius: 16px; padding: 30px; position: relative;">
            
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"  @click="dialog = false"  style="cursor: pointer; display: flex; margin-inline-start: auto;">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </div>

              <v-card-text v-if="selectedOrder?.status === 'processing'">
                <span style="display: flex; justify-content: center; font-weight: 600;">Do you want to cancel this trade?</span>
                <div class="mt-4" style="display: flex;  justify-content: center;">
                  <v-btn @click="cancelMyOrder()" style="background: orangered; width: 50%; height: 40px; border-radius: 10px;">Cancel</v-btn>
                </div>
              </v-card-text>
              
              <v-card-text v-else>
               
                
                <span class="mb-5" style="font-size: 20px; font-weight: 600; display: flex; justify-content: center;">Paid but the Order got cancelled or expired?</span>
               
                <ul class="list-bullets-styled">
                        <li>Prepare Proof of Payment</li>
                        <span :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 14px;">Provide a screenshot or any evidence  of payment you have.</span>
                        <li class="mt-5">Request crypto Transfer</li>
                        <span :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 14px;">Send it to the seller and request for a crypto transfer via Demo pay in the chat</span>
                        <v-btn @click="navigateTo('/account/marketplace/tradechat?message=Hi, i have paid but the order has been cancelled by the system, please credit me.');" class="primary-btn1 mt-1" style="border-radius: 8px !important; font-weight: 600; width: 100%; height: 45px;">Request crypto transfer</v-btn>
                        <li class="mt-5">Place New Order</li>
                        
                        <span :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 14px;">If the seller does not respond, place a new order of the same ammount you paid. Tap "Transferred", notify seller immeadiately after the order is created </span>
                        <v-btn @click="navigateTo('/account/marketplace/activeOffers')" class="primary-btn1 mt-1" style="border-radius: 8px !important; font-weight: 600; width: 100%; height: 45px;">Place new order</v-btn>
                        <li class="mt-5">Send Dispute</li>

                        <span :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 14px;">Send a dispute and explain clearly the issue(s) using clear proof of payments.</span>
                        <v-btn @click="navigateTo('/account/marketplace/tradeChat')" class="primary-btn1 mt-1" style="border-radius: 8px !important; font-weight: 600; width: 100%; height: 45px;">Send dispute</v-btn>
                </ul> 

              </v-card-text>


            </v-card>
          </v-dialog>
        </div>
      </div>
    </v-container>
    <Footer class="flex-lg-and-up hidden-sm-and-down" />
    <Mobile-footer class="mobile-footer" />
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useTheme } from "vuetify";
import { getmyOrders, cancelOrderforP2P } from "@/composables/requests/marketplace";

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore();
const selectedScreen = ref(true);
const pageNumber = ref(1);
const dialog = ref(false);
const alertMessage = ref("");
const showAlert = ref(false);

const selectedOrder = ref(null)


const openDialog = (order) => {
  selectedOrder.value = order
  pinia.state.selected_trade_ID_from_active_trade = order.id
  pinia.state.selected_trade_ID = order?.id
  dialog.value = true
}

const getActiveOffers = async () => {
  try {
    // Fetch active offers
    const data = await getmyOrders(pageNumber.value);

    // Check if the data retrieval was successful
    if (data.success) {
      pinia.setallMyOders(data.data.result);
      console.log(data.data.result);
    } else {
      push.error(`Error: ${data.message}`); // Custom error message
    }
  } catch (e) {
    console.error("Unexpected error:", e);
    push.error(`Unexpected error: ${e.message || e}`); // Detailed error message
  }
};

const cancelMyOrder = async () => {

  const payload = {
    order_id: pinia.state.selected_trade_ID_from_active_trade,
  }
  try {
  
    const data = await cancelOrderforP2P(payload);

    // Check if the data retrieval was successful
    if (data.success) {
      dialog.value = false
      console.log(data.data.result);
    } else {
      push.error(`Error: ${data.message}`); // Custom error message
    }
  } catch (e) {
    console.error("Unexpected error:", e);
    push.error(`Unexpected error: ${e.message || e}`); // Detailed error message
  }
};


const filteredOrders = computed(() => {
  
  if (selectedScreen.value) {
    // Display only non-expired and non-canceled (active) trades
    return pinia.state?.allMyOders.filter((order) => order.status !== "expired" && order.status !== "canceled");
  } else {
    // Display only expired or canceled trades
    return pinia.state?.allMyOders.filter((order) => order.status === "expired" || order.status === "canceled");
  }
});


onMounted(() => {
  getActiveOffers();
});
</script>


<style scoped>
.wallet-btn {
  border-radius: 10px;
  background: var(
    --linear-card,
    linear-gradient(270deg, #1da1db -11.75%, #2873ff 119.96%)
  );
  display: flex;
  width: 228px;
  height: 48px;
  padding: 12px 98px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  box-shadow: none;
  color: white;
  text-transform: capitalize;
  letter-spacing: 0px;
}
.fiat-btn {
  border-radius: 10px;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  width: 228px;
  height: 48px;
  padding: 12px 98px;
  background: inherit;
  box-shadow: none;
  color: #969696;
  background: #060a1d;
  text-transform: capitalize;
  letter-spacing: 0px;
}

.fiat-btn-light {
  background: white;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  width: 228px;
  height: 48px;
  box-shadow: none;
  text-transform: capitalize;
  letter-spacing: 0px;
}

.expired-text {
  color: grey !important;
  font-size: 14px;
  font-weight: 600;
}

.active-text {
  background-image: linear-gradient(180deg, #2873ff, #0b6b96);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
}

.list-bullets-styled {
  list-style-type: none; /* Remove default list style */
  position: relative; /* Needed for the pseudo-element positioning */
}

.list-bullets-styled li {
  position: relative; /* Needed for the pseudo-element positioning */
  padding-left: 20px; /* Space for the custom bullet */
  line-height: 28px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
}

.list-bullets-styled li:before {
  background-color: #2873FF;
  border-radius: 50%;
  content: "";
  display: block;
  height: 12px;
  position: absolute;
  left: 0;
  top: 10px;
  width: 12px;
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

@media only screen and (max-width: 600px) {

.wallet-btn{
width: 48%;
height: 42px;
padding: 12px 58px;
font-size: 14px;
font-style: normal;
font-weight: 700;
}
.fiat-btn{
width: 48%;
height: 42px;
padding: 12px 58px;
font-size: 14px;
font-style: normal;
font-weight: 700;
}
.fiat-btn-light{
width: 48%;
height: 42px;
padding: 12px 58px;
font-size: 14px;
font-style: normal;
font-weight: 700;
}
.button-container{
  width: 100% !important;
  height: 61px !important;
}
.trades-div{
  margin-left: 0px !important;
}
.expired-text {
  font-size: 12px !important;
}
.chat-btn{
  height: 32px !important;
  display: flex !important;
  align-items: center !important;
}

.chat-modal-info{
  width: 100% !important;
  display: flex !important;
  margin: auto;
  border-radius: 16px !important;
  padding: 10px !important;
}


}

</style>