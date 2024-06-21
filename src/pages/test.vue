<template>
    <div>
      <Header :hide="true" :icon1="true" :icon3="true" :icon2="true" />
      <v-container>
        <div class="container-style">
          <div>
            <div class="pa-2 ma-2">
              <Sd-nav1 />
            </div>
          </div>
  
          <div class="main-content">
            <div :class="['acct-settings', isDark ? 'profile-cards-dark' : 'profile-cards-light']">
              <span class="marketplace-title">MarketPlace</span>
              <v-btn class="primary-btn"></v-btn>
            </div>
  
            <div class="marketplace-buttons">
              <v-row class="px-2">
                <v-btn class="me-4 mb-4" :class="PurchaseCrypto ? 'active-btn' : 'inactive-btn'" @click.prevent="PurchaseCrypto = true">Buy Crypto</v-btn>
                <v-btn :class="[PurchaseCrypto ? 'inactive-btn' : 'active-btn', isDark ? 'profile-cards-dark' : 'profile-cards-light']" @click.prevent="PurchaseCrypto = false">Sell Crypto</v-btn>
                <div class="token-menu">
                  <v-menu>
                    <template v-slot:activator="{ props }">
                      <v-btn :class="['mx-auto', isDark ? 'active-offers-dark' : 'active-offers-light']" v-bind="props">
                        <img class="token-icon" :src="tokenIcon" />
                        <div class="token-info">
                          <span class="slt">{{ tokenSymbol }}</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" :class="isDark ? 'close-btn' : 'close-btn-light'">
                          <path d="M5.61643 5.99999C5.7553 6.00001 5.8928 5.973 6.0211 5.92049C6.14941 5.86799 6.266 5.79102 6.3642 5.69399L10.3104 1.794C10.5086 1.59813 10.62 1.33249 10.62 1.0555C10.62 0.77851 10.5086 0.512869 10.3104 0.317007C10.1122 0.121144 9.84345 0.0110984 9.56318 0.0110984C9.2829 0.0110984 9.01411 0.121144 8.81593 0.317007L5.61442 2.717L2.41292 0.317007C2.21473 0.121144 1.94594 0.0110984 1.66567 0.0110984C1.3854 0.0110984 1.11657 0.121144 0.91839 0.317007C0.720206 0.512869 0.608887 0.77851 0.608887 1.0555C0.608887 1.33249 0.720206 1.59813 0.91839 1.794L4.86464 5.69399C4.96329 5.79155 5.08052 5.86882 5.20957 5.92135C5.33861 5.97387 5.47688 6.00059 5.61643 5.99999Z"/>
                        </svg>
                      </v-btn>
                    </template>
  
                    <v-list :class="isDark ? 'profile-cards-dark':'profile-cards-light'" class="token-list">
                      <v-list-item class="token-list-item">
                        <v-row dense>
                          <div v-for="tokens in pinia.state.tokenLists" :key="tokens.id" class="token-row">
                            <v-list-item @click="selectToken(tokens)">
                              <div class="token-item">
                                <img :src="tokens.icon" width="30" class="me-2"/>
                                <span class="currency-list">{{ tokens.name }}</span>
                              </div>
                            </v-list-item>
                          </div>
                        </v-row>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </v-row>
            </div>
  
            <div class="divider"></div>
  
            <div v-for="offer in filteredOffers" :key="offer.id" class="offer-card">
              <div class="offer-header">
                <div class="offer-user-info">
                  <img v-if="offer?.user?.profile_image" :src="offer.user.profile_image" alt="img" class="user-img"/>
                  <v-icon v-else class="user-icon">mdi-account-circle</v-icon>
                  <span class="username">{{ offer?.user?.username }}</span>
                </div>
                <div class="offer-details">
                  <span class="offer-unit-range">Unit range values</span>
                  <span class="offer-price-model">Price model</span>
                  <div class="offer-token">
                    <img :src="offer.trading_pair?.crypto?.token?.icon" class="token-icon"/>
                    <span class="token-name">{{ offer.trading_pair?.crypto?.token?.name }}</span>
                    <img src="/svg/arrow-up.svg" class="arrow-icon"/>
                  </div>
                </div>
              </div>
  
              <div class="offer-footer">
                <span v-if="offer.user?.is_verified" class="verified">Verified</span>
                <span v-else class="unverified">Unverified User</span>
                <span class="offer-limit">{{ offer?.trading_pair?.fiat?.minimum_buy_limit }} - {{ offer?.trading_pair?.fiat?.maximum_buy_limit }} {{ offer?.countryCurrencyName }}</span>
                <div class="offer-price">
                  <span class="unit-value">{{ offer?.trading_pair?.fiat?.unit_value }}</span>
                  <v-btn class="smaller-btn">{{ PurchaseCrypto ? "Buy Now" : "Sell Now" }}</v-btn>
                </div>
              </div>
  
              <div class="divider"></div>
            </div>
          </div>
        </div>
      </v-container>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useTheme } from 'vuetify';
  import { getMarketOffers } from '@/composables/requests/marketplace';

  
  const theme = useTheme();
  const isDark = computed(() => theme.global.current.value.dark);
  const pinia = useStore();
  const PurchaseCrypto = ref(true);
  const pageNumber = ref(1);
  const loading = ref(false);
  const tokenIcon = ref('');
  const tokenSymbol = ref('');
  const offers = ref([]);
  
  const get_allMarket_Offers = async () => {
    loading.value = true;
    try {
      const data = await getMarketOffers(pageNumber.value);
      if (data.success) {
        offers.value = data.data.result.map(offer => {
          const countryId = offer.trading_pair?.fiat.country_id;
          let countryCurrencyName = 'Unknown';
          if (countryId) {
            const country = pinia.state.allcountries.find(country => country.id === countryId);
            countryCurrencyName = country?.currency_name || 'Unknown';
          }
          return { ...offer, countryCurrencyName };
        });
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };
  
  const selectToken = (token) => {
    tokenIcon.value = token.icon;
    tokenSymbol.value = token.symbol;
  };
  
  const filteredOffers = computed(() => {
  if (!tokenSymbol.value) return offers.value;
  return offers.value.filter(offer => offer.trading_pair?.crypto?.token?.symbol === tokenSymbol.value);
});
  
  onMounted(async () => {
    await get_allMarket_Offers();
  });
  </script>
  
  <style scoped>
  .container-style {
    margin-top: 105px;
    margin-bottom: 100px;
    display: flex;
    width: 100%;
  }
  
  .main-content {
    width: 780px;
    margin-left: 20px;
  }
  
  .acct-settings {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
    width: 100%;
    margin-top: 15px;
  }
  
  .marketplace-title {
    font-size: 24px;
    font-style: 400;
    color: #5892fc;
    font-family: 'Roboto';
    text-align: start;
    margin-left: 8px;
  }
  
 
  
  .profile-cards-dark {
    background-color: #353535;
  }
  
  .profile-cards-light {
    background-color: white;
  }
  
  .active-btn {
    background-color: #5892fc;
    border: 1px solid #5892fc;
    color: white;
    width: 300px;
    height: 50px;
    border-radius: 12px;
    text-transform: none;
  }
  
  .inactive-btn {
    background-color: white;
    border: 1px solid #5892fc;
    color: #5892fc;
    width: 300px;
    height: 50px;
    border-radius: 12px;
    text-transform: none;
  }
  
  .active-offers-dark {
    border: 1px solid #353535;
    background-color: #353535;
    height: 50px;
    border-radius: 12px;
    width: 250px;
    text-transform: none;
  }
  
  .active-offers-light {
    border: 1px solid #5892fc;
    background-color: white;
    height: 50px;
    border-radius: 12px;
    width: 250px;
    text-transform: none;
  }
  
  .token-list {
    padding: 10px;
    max-height: 300px;
    overflow-y: auto;
  }
  
  .token-list-item {
    padding: 0;
  }
  
  .token-row {
    width: 100%;
    display: flex;
  }
  
  .token-item {
    display: flex;
    align-items: center;
  }
  
  .user-img {
    border-radius: 50%;
    width: 35px;
    height: 35px;
  }
  
  .user-icon {
    font-size: 35px;
    color: gray;
  }
  
  .username {
    color: white;
    font-size: 14px;
    margin-left: 10px;
  }
  
  .offer-card {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 12px;
    margin-bottom: 40px;
  }
  
  .offer-header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  
  .offer-user-info {
    display: flex;
    align-items: center;
  }
  
  .offer-details {
    display: flex;
    align-items: center;
  }
  
  .offer-token {
    display: flex;
    align-items: center;
  }
  
  .token-icon {
    width: 35px;
    height: 35px;
  }
  
  .arrow-icon {
    width: 11px;
    height: 6px;
  }
  
  .offer-footer {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  
  .verified {
    color: green;
  }
  
  .unverified {
    color: red;
  }
  
  .offer-limit {
    color: gray;
  }
  
  .offer-price {
    display: flex;
    align-items: center;
  }
  
  .unit-value {
    margin-right: 10px;
  }
  

  
  .divider {
    height: 1px;
    width: 100%;
    background: #ebebeb;
    margin: 20px 0;
  }
  
  </style>
  