<template>
  <div>
    <Header :hide="true" :icon1="true" :icon3="true" :icon2="true" :wallet="true"/>
    <v-container class="d-flex" style="margin-top: 100px">
      <div class="pa-2 flex-lg-and-up hidden-sm-and-down">
        <Sd-nav1 style="border: none" />
      </div>

      <div class="ml-4" style="width: 100%">
        <div class="acct-settings" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'"
          style="display: flex; justify-content: space-between;
            margin-bottom: 40px;
            margin-top: 12px;
            border: none;">

          <span style=" font-size: 24px; font-style: 28px; font-weight: 600;color: #5892ff;">Trade</span>
          <span class="mail-text" :class="isDark ? 'text-dark' : 'text-light'"> {{ pinia.state.user?.email }}</span>
        </div>

        <div :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'"
          class="button-container"
          style="
            display: flex;
            border-radius: 10px;
            width: fit-content;
            height: 65px;
            align-items: center;
            padding: 10px;
          "
        >
          <v-btn
            class="me-3"
            :class="[
              selectedScreen
                ? 'wallet-btn'
                : isDark
                ? 'fiat-btn'
                : 'fiat-btn-light',
            ]"
            @click.prevent="selectedScreen = true"
            >Active trade
          </v-btn>
          <v-btn
            :class="[
              !selectedScreen
                ? 'wallet-btn'
                : isDark
                ? 'fiat-btn'
                : 'fiat-btn-light',
            ]"
            @click.prevent="selectedScreen = false"
            >Closed trade</v-btn
          >
        </div>

        <v-alert v-if="showAlert" type="info" class="mb-4">
          {{ alertMessage }}
        </v-alert>

        <div
          class="mt-5"
          style="height: 500px; overflow-y: scroll; margin-bottom: 150px"
        >
          <div
            v-if="!filteredOrders.length"
            style="
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin: auto;
              margin-top: 70px;
            ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              style="display: flex; align-self: center"
            >
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#2873FF" />
                  <stop offset="100%" stop-color="#0B6B96" />
                </linearGradient>
              </defs>
              <path
                d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
                fill="0B6B96"
                stroke="#2873FF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.5 12.4113V7.84132C2.5 6.65132 3.23 5.59128 4.34 5.17128L12.28 2.17128C13.52 1.70128 14.85 2.62131 14.85 3.95131V7.7513"
                stroke="#2873FF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.5588 13.9692V16.0292C22.5588 16.5792 22.1188 17.0292 21.5588 17.0492H19.5988C18.5188 17.0492 17.5288 16.2592 17.4388 15.1792C17.3788 14.5492 17.6188 13.9592 18.0388 13.5492C18.4088 13.1692 18.9188 12.9492 19.4788 12.9492H21.5588C22.1188 12.9692 22.5588 13.4192 22.5588 13.9692Z"
                stroke="#0B6B96"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 12H14"
                stroke="#2873FF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="text-center">No active trades available.</span>
            <span
              @click="navigateTo('/account/marketplace/activeOffers')"
              class="text-decoration-underline text-subtitle-2 text-center cursor-pointer"
              :class="isDark ? 'text-dark' : 'text-light'"
              >Perform trades to see them here</span
            >
          </div>

          <v-dialog v-model="dialog">
            <template v-slot:activator="{ props: activatorProps }">
              <v-card
                link
                v-bind="activatorProps"
                @click.prevent="pinia.state.selected_offer_from_trades = order?.id"
                v-for="(order, index) in filteredOrders"
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

                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 14px;
                    line-height: 30px;
                  "
                >
                  <div
                    style="display: flex; flex-direction: column"
                    :class="isDark ? 'text-dark' : 'text-light'"
                  >
                    <div
                      v-if="pinia.state?.user?.kyc_verified"
                      style="display: flex; align-items: center"
                    >
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

                  <div
                    style="
                      display: flex;
                      flex-direction: column;
                      align-items: end;
                    "
                    :class="isDark ? 'text-dark' : 'text-light'"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-chat-left-text-fill"
                      viewBox="0 0 16 16"
                      style="cursor: pointer"
                    >
                      <defs>
                        <linearGradient
                          id="chatGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stop-color="#2873FF" />
                          <stop offset="100%" stop-color="#0B6B96" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#chatGradient)"
                        d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"
                      />
                    </svg>
                    <span
                      :class="{
                        'expired-text': order.status === 'expired',
                        'active-text': order.status !== 'expired',
                      }"
                       style="text-transform: capitalize; color: orangered !important;">{{ order.status }}</span
                    >
                    <span>Buyer</span>
                    <div>
                      <span>{{ order?.bid?.fiat_amount_paid }}</span>
                      <span>{{
                        pinia.state.allcountries.find(
                          (c) =>
                            c.id === order.offer?.trading_pair?.fiat.country_id
                        )?.currency_name
                      }}</span>
                    </div>
                    <div>
                      <span>{{ order?.bid?.expected_token_quantity }}</span>
                      <span class="ml-1">{{
                        order.offer?.trading_pair?.crypto.token?.symbol
                      }}</span>
                    </div>
                    <span>Bank Transfer</span>
                    <span style="font-size: 14px">{{ order?.id }}</span>
                  </div>
                </div>
              </v-card>
            </template>

            <v-card :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="width: 40%; display: flex; margin: auto; border-radius: 16px; padding: 30px;">
              <v-card-text>
                <span class="mb-5" style="font-size: 20px; font-weight: 600; display: flex; justify-content: center;">Paid but the Order got cancelled or expired?</span>
                <ul class="list-bullets-styled">
                        <li>Prepare Proof of Payment</li>
                        <span :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 14px;">Provide a screenshot or any evidence  of payment you have.</span>
                        <li class="mt-5">Request crypto Transfer</li>
                        <span :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 14px;">Send it to the seller and request for a crypto transfer via Demo pay in the chat</span>
                        <v-btn class="primary-btn1 mt-1" style="border-radius: 8px !important; font-weight: 600; width: 100%; height: 45px;">Request crypto transfer</v-btn>
                        <li class="mt-5">Place New Order</li>
                        <span :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 14px;">If the seller does not respond, place a new order of the same ammount you paid. Tap "Transferred", notify seller immeadiately after the order is created </span>
                        <v-btn class="primary-btn1 mt-1" style="border-radius: 8px !important; font-weight: 600; width: 100%; height: 45px;">Place new order</v-btn>
                        <li class="mt-5">Send Dispute</li>
                        <span :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 14px;">Send a dispute and explain clearly the issue(s) using clear proof of payments.</span>
                        <v-btn class="primary-btn1 mt-1" style="border-radius: 8px !important; font-weight: 600; width: 100%; height: 45px;">Send dispute</v-btn>
                      </ul> 

              </v-card-text>

              <!-- <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="Close Dialog" @click="dialog = false"></v-btn>
              </v-card-actions> -->

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
import { getmyOrders } from "@/composables/requests/marketplace";

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore();
const selectedScreen = ref(true);
const pageNumber = ref(1);
const dialog = ref(false);

const alertMessage = ref("");
const showAlert = ref(false);

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

const filteredOrders = computed(() => {
  if (selectedScreen.value) {
    // Display only non-expired (active) trades
    return pinia.state?.allMyOders.filter(
      (order) => order.status !== "expired"
    );
  } else {
    // Display only expired trades
    return pinia.state?.allMyOders.filter(
      (order) => order.status === "expired" || "expired" 
    );
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
</style>