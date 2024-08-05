<template>
    <div  class="wallet-nav">
  
      
        <div class="d-flex" style="align-items: baseline; justify-content: space-between; ">
          <span class="sm-num" :class="isDark ? 'country-name' : 'country-name-light'" style="font-size: 14px; font-style: normal;font-weight: 400;">Balance</span>
          <BlockChainNetwork/>
        </div>
  
  
         <div style="margin-top: 17px; margin-bottom: 17px;  position: relative; display: flex; align-items: center;">
      
          <div style="display: flex; align-items: center; justify-content: space-between;" v-if="isCamouflageEmpty">
            <span v-if="isBalanceVisible" style="font-family: SF Pro Display; font-size: 24px; font-style: normal; font-weight: 800;"> {{ `${pinia.state.Selectedcurrency_code} ${formatBalance(pinia.state.SummedBalance)}` }} </span>
            <span class="lg-num" v-else>{{ generateAsterisks() }}</span>
  
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-3" width="20" height="20" viewBox="0 0 20 20" fill="none" style="cursor: pointer;" v-if="isToggled"  @click="togglePassword()">
              <path d="M12.9833 9.99993C12.9833 11.6499 11.6499 12.9833 9.99993 12.9833C8.34993 12.9833 7.0166 11.6499 7.0166 9.99993C7.0166 8.34993 8.34993 7.0166 9.99993 7.0166C11.6499 7.0166 12.9833 8.34993 12.9833 9.99993Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.99987 16.8918C12.9415 16.8918 15.6832 15.1584 17.5915 12.1584C18.3415 10.9834 18.3415 9.00843 17.5915 7.83343C15.6832 4.83343 12.9415 3.1001 9.99987 3.1001C7.0582 3.1001 4.31654 4.83343 2.4082 7.83343C1.6582 9.00843 1.6582 10.9834 2.4082 12.1584C4.31654 15.1584 7.0582 16.8918 9.99987 16.8918Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
  
  
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-3" width="20" height="20" viewBox="0 0 17 17" fill="none" style="cursor: pointer;" v-else @click="togglePassword()">
                  <path d="M10.3561 6.9924L6.95581 10.2237C6.51901 9.80864 6.25021 9.24028 6.25021 8.60807C6.25021 7.34363 7.32541 6.32187 8.65597 6.32187C9.32125 6.32187 9.91933 6.57731 10.3561 6.9924Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.567 4.62956C11.391 3.78661 10.047 3.32681 8.656 3.32681C6.28384 3.32681 4.07295 4.65511 2.53407 6.95408C1.92927 7.85451 1.92927 9.368 2.53407 10.2684C3.06495 11.0603 3.68319 11.7436 4.35519 12.2928" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.25021 13.4167C7.01629 13.7233 7.82941 13.8893 8.65597 13.8893C11.0281 13.8893 13.239 12.561 14.7779 10.262C15.3827 9.36161 15.3827 7.84812 14.7779 6.94769C14.5561 6.61561 14.3142 6.3027 14.0656 6.00894" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.0147 9.05508C10.84 9.95551 10.0672 10.6899 9.11966 10.8559" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.95581 10.2237L1.93597 14.9941" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.376 2.22202L10.3561 6.99238" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
  
          <div style="display: flex; flex-direction: column;" v-else>
            <span style="font-family: SF Pro Display; font-size: 24px; font-style: normal; font-weight: 800;">{{ camoflageCurrencyIcon }} {{ formatBalance(pinia.state.user.camouflage.max_spend_balance) }}</span>
          </div>
          
        </div>
  
        <div style="display: flex; justify-content: space-between;">
          <v-btn @click.prevent="navigateTo('/account/trade/getButton')" class="fiat-btn" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="font-weight: 600;">
                  <img src="/svg/send-arrow.svg"/>
                  Get
          </v-btn>
          <v-btn @click.prevent="navigateTo('/account/trade/sendButton')"  class="fiat-btn send-btn" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="font-weight: 600;">
                  <img src="/svg/get.svg"/>
                 Send
          </v-btn>
          <v-btn @click.prevent="navigateTo('/account/trade/swap')" class="fiat-btn send-btn" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="font-weight: 600;">
                  <img src="/svg/arrow-swap.svg"/>
                  Swap
          </v-btn>
        </div>
      </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useTheme } from 'vuetify';
  import { getSummedBalance } from "@/composables/requests/tokens";
  const theme = useTheme()
  const isDark = computed(() =>  theme.global.current.value.dark);
  const isToggled = ref(true);
  
  const isBalanceVisible = ref(true);
  
  const togglePassword = () => {
    isBalanceVisible.value = !isBalanceVisible.value;
    isToggled.value = !isToggled.value;
  };
  const pinia = useStore()
  const balanceData = ref(null);
  const allCountries = pinia.state.allcountries;
  const preferredCurrency = pinia.state.preferredCurrency;
  const selectedCountryId = allCountries.find(country=>country.currency_name==preferredCurrency);
  
  const chain = computed(()=>pinia.state.selectedNetwork);
  
  
  const getSummedBal = async () => {
    if (pinia.state.isAuthenticated) {
      try {
        const data = await getSummedBalance(chain.value.toLowerCase(), selectedCountryId.id)
        if (data.success) {
          balanceData.value = data.data;
          pinia.setSummedBalance(data.data)
          }else {
            console.error("Error:", data.message);
        }
  
      } catch (error) {
        console.log(error)
      }
    }
  };
  
  watch(chain, (newChain, oldChain) => {
        if (newChain !== oldChain) {
          getSummedBal();
        }
  }, { immediate: true }); 
  
  
  const isCamouflageEmpty = computed(() => {
    const camouflage = pinia.state.user.camouflage;
    return !camouflage || Object.keys(camouflage).length === 0;
  });
  
  // const camoflageCurrencyIcon = pinia.state.allcountries.find(c=>c.id==pinia.state?.user?.camouflage?.country_id)?.currency_code;
  // console.log(camoflageCurrencyIcon)
  
  const generateAsterisks = () => {
    const balance = formatBalance(pinia.state.SummedBalance);
    const balanceLength = balance.length;
    return '*'.repeat(balanceLength);
  }
  
  
  onMounted(async () => {
     getSummedBal();
  
  });
  </script>
  
  
  
  <style scoped>
  .wallet-nav{
  background: var(--linear-card, linear-gradient(270deg, #1DA1DB -11.75%, #2873FF 119.96%));
  filter: drop-shadow(0px 27px 20px rgba(0, 0, 0, 0.02));
  padding: 20px;
  width: 100%;
  border-radius: 15px;
  }
  .profile{
  background: var(--secondary-background, #10192D);
  }
  .profile-light{
  background: linear-gradient(180deg, rgba(248, 250, 252, 0.00) 65.19%, #F8FAFC 100%) !important;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 4px;
  border: 1px solid #E2E8F0;
  }
  .lg-num{
  text-align: center;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  }
  
  .sm-num{
  color: var(--White, var(--Colors-Base-white, #FFF));
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  }
  
  .country-name{
  color: white !important;
  }
  .country-name-light{
  color: #10192D !important;
  }
  
  .crypto-nav{
    background: var(--linear-card, linear-gradient(270deg, #1DA1DB -11.75%, #2873FF 119.96%));
    filter: drop-shadow(0px 27px 20px rgba(0, 0, 0, 0.02));
    padding: 31px;
    width: 100%;
    border-radius: 15px;
  }
  
  .fiat-btn {
    height: 45px;
    width: 100px;
    border-radius: 12px;
    font-size: 14px;
    letter-spacing: 0px;
    text-transform: unset;
    background: #fff !important;
    color: #10192D;
  }
  </style>