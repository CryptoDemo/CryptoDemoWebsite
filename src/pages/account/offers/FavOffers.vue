<template>
  <div>
    <Header :hide="true" :icon1="true" :icon3="true" :icon2="true" />
    <v-container>
      <div
        style="
          margin-top: 105px;
          margin-bottom: 100px;
          display: flex;
          width: 100%;
        "
      >
        <div>
          <div class="pa-2 ma-2">
            <Sd-nav1 />
          </div>
        </div>

        <div style="width: 67%; margin-left: 20px">
          <div
            class="acct-settings"
            :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'"
            style="
              display: flex;
              justify-content: space-between;
              margin-bottom: 80px;
              width: 100%;
              margin-top: 15px;
            "
          >
            <span
              class="partners-text"
              :class="isDark ? 'text-dark' : 'text-light'"
              style="
                font-family: Poppins;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
              "
            >
              Complete verification to access Demo products and services.</span
            >
            <div>
              <v-btn
                class="primary-btn"
                style="
                  height: 37px;
                  width: 120px;
                  border-radius: 8px;
                  background: var(
                    --Primary-100,
                    linear-gradient(180deg, #2873ff 0%, #0b6b96 100%),
                    #2873ff
                  );
                  text-transform: capitalize;
                  letter-spacing: 0px;
                "
                >Verify</v-btn
              >
            </div>
          </div>
          <div style="margin-top: 32px">
            <v-row class="px-3">
              <v-btn
                class="me-4 mb-4"
                :class="PurchaseCrypto ? 'active-btn' : 'inactive-btn'"
                @click.prevent="PurchaseCrypto = true"
              >
                <span style="position: relative; left: -18px"
                  >Crypto purchased</span
                >
                <span style="position: relative; right: -18px; font-weight: 800"
                  >0</span
                >
              </v-btn>
              <v-btn
                :class="`${PurchaseCrypto ? 'inactive-btn' : 'active-btn'} ${
                  isDark ? 'profile-cards-dark' : 'profile-cards-light'
                }`"
                @click.prevent="PurchaseCrypto = false"
              >
                <span style="position: relative; left: -37px"
                  >Crypto sold
                </span>
                <span style="position: relative; right: -32px; font-weight: 800"
                  >0</span
                >
              </v-btn>

              <div style="display: flex; margin-inline-start: auto">
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <v-btn
                      class="mx-auto active-offers"
                      :class="
                        isDark ? 'active-offers-dark' : 'active-offers-light'
                      "
                      style="letter-spacing: 0px; box-shadow: none"
                      v-bind="props"
                    >
                      <img
                        width="25"
                        class="me-2"
                        :src="icon"
                        style="position: absolute; left: 7%"
                      />
                      <div style="display: grid; cursor: pointer">
                        <span class="slt">{{ select }}</span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="6"
                        viewBox="0 0 11 6"
                        :class="isDark ? 'close-btn' : 'close-btn-light'"
                        style="position: absolute; display: flex; right: 15px"
                      >
                        <path
                          d="M5.61643 5.99999C5.7553 6.00001 5.8928 5.973 6.0211 5.92049C6.14941 5.86799 6.266 5.79102 6.3642 5.69399L10.3104 1.794C10.5086 1.59813 10.62 1.33249 10.62 1.0555C10.62 0.77851 10.5086 0.512869 10.3104 0.317007C10.1122 0.121144 9.84345 0.0110984 9.56318 0.0110984C9.2829 0.0110984 9.01411 0.121144 8.81593 0.317007L5.61442 2.717L2.41292 0.317007C2.21473 0.121144 1.94594 0.0110984 1.66567 0.0110984C1.3854 0.0110984 1.11657 0.121144 0.91839 0.317007C0.720206 0.512869 0.608887 0.77851 0.608887 1.0555C0.608887 1.33249 0.720206 1.59813 0.91839 1.794L4.86464 5.69399C4.96329 5.79155 5.08052 5.86882 5.20957 5.92135C5.33861 5.97387 5.47688 6.00059 5.61643 5.99999Z"
                        />
                      </svg>
                    </v-btn>
                  </template>

                  <v-list :class="isDark ? 'coin-bg1' : 'coin-bg1-light'">
                    <v-list-item style="width: 100%; height: 310px">
                      <div
                        v-for="(item, index) in filteredItems?.length
                          ? filteredItems
                          : pinia.state.tokenLists"
                        :key="index"
                        class="d-flex py-2"
                      >
                        <v-list-item-title style="width: 100%">
                          <v-list-item
                            @click="
                              select = item.name;
                              coin = item.symbol;
                              icon = item.icon;
                            "
                            class="d-flex"
                            style="align-items: center"
                          >
                            <div style="display: flex">
                              <img
                                width="25"
                                class="rounded-5 me-3"
                                :src="item.icon"
                              />
                              <div
                                style="display: flex; flex-direction: column"
                              >
                                <span
                                  style="
                                    font-family: Manrope;
                                    font-size: 14px;
                                    font-style: normal;
                                    font-weight: 700;
                                    line-height: 140%;
                                  "
                                >
                                  {{ item.name }}
                                </span>
                                <span class="small-text">{{
                                  item.symbol
                                }}</span>
                              </div>
                            </div>
                          </v-list-item>
                        </v-list-item-title>
                      </div>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-row>
          </div>

          <div
            style="
              border-top: 0.5px solid rgba(142, 155, 174, 0.5);
              margin-top: 16px;
            "
          ></div>
          <div v-for="n in 2" :key="n">
            <div style="display: flex; justify-content: space-between">
              <div style="margin-top: 32px">
                <div style="display: flex; margin-bottom: 14px">
                  <span class="me-3">Esewa</span>
                  <img src="/flags/do.svg" width="25px" />
                </div>
                <div style="display: grid">
                  <span
                    class="mb-3"
                    :class="isDark ? 'text-dark' : 'text-light'"
                    style="
                      font-family: Manrope;
                      font-size: 16px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: normal;
                    "
                    >Bank Transfer</span
                  >
                  <span
                    class="mb-3"
                    :class="isDark ? 'text-dark' : 'text-light'"
                    style="
                      font-family: Manrope;
                      font-size: 16px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: normal;
                    "
                    >First Bank only</span
                  >
                  <div style="display: flex">
                    <v-btn
                      class="smaller-btn me-4"
                      :class="isDark ? 'toggle-btn-dark' : 'toggle-btn-light'"
                      >Guided Trade</v-btn
                    >
                    <v-btn
                      class="smaller-btn"
                      :class="isDark ? 'toggle-btn-dark' : 'toggle-btn-light'"
                      >Receipt required</v-btn
                    >
                  </div>
                </div>
              </div>

              <div style="margin-top: 32px; margin-block-start: auto">
                <div
                  style="
                    display: flex;
                    margin-bottom: 14px;
                    justify-content: flex-end;">
                  <span
                    :class="isDark ? 'transfer-dark' : 'transfer-light'"
                    style="
                      font-family: Manrope;
                      font-size: 12px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: normal;">Limit 15,000 - 100,000 NGN</span>
                </div>
                <div style="display: grid">
                  <span
                    :class="isDark ? 'text-dark' : 'text-light'"
                    class="mb-3"
                    style="
                      font-family: Manrope;
                      font-size: 16px;
                      font-style: normal;
                      font-weight: 600;
                      line-height: normal;
                      text-align-last: right;
                    ">62,797,850.5 NGN</span>
                  <div class="d-flex mb-3" style="justify-content: end">
                    <img :src="icon" class="me-3" width="20px" />
                    <span
                      class="me-1"
                      style="
                        color: #8e9bae;
                        font-family: Manrope;
                        font-size: 12px;
                        font-style: normal;
                        font-weight: 600;
                        line-height: 150%;
                      ">{{ select }}</span>

                    <img src="/svg/arrow-up.svg" class="mb-1 me-1" />
                    <span
                      style="
                        color: #22c36b;
                        font-size: 12px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 150%;
                      ">-10%</span>
                  </div>
                  <div style="display: flex; justify-content: end">
                    <v-btn
                      class="smaller-btn"
                      style="
                        color: var(--Gray-Light, #d8d8d8);
                        background: var(
                          --Primary-100,
                          linear-gradient(180deg, #2873ff 0%, #0b6b96 100%),
                          #2873ff
                        );
                      "
                      >{{ PurchaseCrypto ? "Buy Now" : "Sell Now" }}</v-btn
                    >
                  </div>
                </div>
              </div>
            </div>
            <div
              style="
                border-bottom: 0.5px solid rgba(142, 155, 174, 0.5);
                margin-top: 16px;
              "
            ></div>
          </div>

          <tr v-if="isLoading">
            <td class="d-flex justify-content-center align-items-center">
              <v-progress-circular
                :width="3"
                indeterminate
              ></v-progress-circular>
            </td>
          </tr>

          <tr v-if="!isLoading && !activityLogs?.length">
            <td>
              <span class="d-flex justify-content-center align-items-center"
                >No records found</span
              >
            </td>
          </tr>
        </div>
      </div>
    </v-container>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
import { getTokens } from "@/composables/requests/tokens";

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore();
const PurchaseCrypto = ref(true);

const select = ref("All Cryptocurrency");
</script>

<style scoped>
.active-offers {
  width: 202.371px !important;
  height: 50px !important;
  flex-shrink: 0;
  border-radius: 20px;
  border-radius: 20px;
  letter-spacing: unset !important;
  text-transform: unset !important;
  overflow: hidden;
  color: #c2c2c2;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.coin-bg1 {
  border-radius: 15px !important;
  background: #1b2537 !important;
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: center;
  margin-top: 10px;
  border: 0.5px solid #2f3946;
}
.coin-bg1-light {
  border-radius: 15px !important;
  border: 1px solid #dbe8ff !important;
  color: #060a1d;
  width: 100%;
  margin-top: 10px;
  border: 0.5px solid #2f3946;
  box-shadow: none !important;
}
.active-offers-dark {
  background: var(--secondary-background, #1b2537);
  color: #8e9bae !important;
}
.active-offers-light {
  background: var(--secondary-background, #f8fafc);
  color: #646464 !important;
}
.offers-text {
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  justify-content: center;
}
.inactive-btn {
  border-radius: 20px;
  background: var(--secondary-background, #1b2537);
  text-transform: unset;
  letter-spacing: 0px;
  width: 231.714px;
  height: 50px !important;
  flex-shrink: 0;
  color: #c2c2c2;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  box-shadow: none;
}
.active-btn {
  border-radius: 20px;
  background: var(
    --Primary-100,
    linear-gradient(180deg, #2873ff 0%, #0b6b96 100%),
    #2873ff
  );
  text-transform: unset;
  letter-spacing: 0px;
  width: 231.714px;
  height: 50px !important;
  flex-shrink: 0;
  color: var(--Gray-Light, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  box-shadow: none;
}
.smaller-btn {
  border-radius: 8px;
  background: var(--secondary-background, #1b2537);
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #c2c2c2;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: unset;
  letter-spacing: 0px;
  box-shadow: none;
}
.slt {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
}
.user-location {
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.close-btn {
  fill: white;
}
.close-btn-dark {
  fill: #10192d;
}
</style>
