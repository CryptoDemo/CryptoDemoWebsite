<template>
    
    <div class="wallet-nav">

        <div class="d-flex" style="justify-content: space-between; align-items: center;">

            <div class="d-flex" style="align-items: baseline; justify-content: space-between; margin-top: -2px; ">
              <span class="sm-num"  style="font-size: 16px; font-style: normal;font-weight: 600; color: white;">Fiat Balance</span>
            </div>

            <v-menu transition="slide-y-transition">
                <template v-slot:activator="{ props }">
                  <button class="dropdown-btn1i" :class="isDark ? 'dropdown-btn1i':'dropdown-btn1i-light'" v-bind="props" variant="text" style="display: flex; align-self: flex-start; border-radius: none; box-shadow: none; color: white;" @click="toggleChevron">
                    <span class="me-2" :class="isDark ? 'country-text':'country-text-light'" style="text-transform: capitalize; font-family: Manrope;">{{pinia.state.preferredCurrency}}</span>
    
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']">
                      <g clip-path="url(#clip0_10476_6360)">
                        <path d="M12.7207 13.7951L17.6707 8.74609L19.0847 10.1884L12.7207 16.6797L6.35669 10.1884L7.77069 8.74609L12.7207 13.7951Z" fill="currentColor"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_10476_6360">
                          <rect width="24" height="24.48" fill="currentColor" transform="translate(0.719971 0.359375)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </template>
    
                <v-list style="border-radius: 10px; height: 120px !important; background: white; color: black;">
                  <v-list-item style="display: contents">
                    <v-row dense style="max-width: 250px; display: block;">
                      <v-col v-for="(currency, index) in pinia.state.allcountries" :key="index">
                      <v-list-item @click="pinia.state.preferredCurrency=currency.currency_name; pinia.state.Selectedcurrency_code = currency.currency_code" style="display: flex;">
                          <span style="text-transform: capitalize;">{{ currency.currency_name }}</span>
                      </v-list-item>
                    </v-col>
                    </v-row>
                  </v-list-item>
                </v-list>
            </v-menu>
        </div>


          <div style="margin-top: 25px; margin-bottom: 25px; height: 90px; position: relative; display: flex; align-items: center;">
        
            <div style="display: flex; align-items: center; justify-content: flex-start;">
              <span class="lg-num" v-if="isBalanceVisible">{{ pinia.state.Selectedcurrency_code }}{{ formatBalance(fiatAmmount) }}</span>

              <span class="lg-num" v-else>{{ generateAsterisks() }}</span>

              <svg xmlns="http://www.w3.org/2000/svg" class="ml-3" width="20" height="20" viewBox="0 0 20 20" fill="none" style="cursor: pointer; position: fixed; right: 30px;" v-if="isToggled"  @click="togglePassword()">
                <path d="M12.9833 9.99993C12.9833 11.6499 11.6499 12.9833 9.99993 12.9833C8.34993 12.9833 7.0166 11.6499 7.0166 9.99993C7.0166 8.34993 8.34993 7.0166 9.99993 7.0166C11.6499 7.0166 12.9833 8.34993 12.9833 9.99993Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.99987 16.8918C12.9415 16.8918 15.6832 15.1584 17.5915 12.1584C18.3415 10.9834 18.3415 9.00843 17.5915 7.83343C15.6832 4.83343 12.9415 3.1001 9.99987 3.1001C7.0582 3.1001 4.31654 4.83343 2.4082 7.83343C1.6582 9.00843 1.6582 10.9834 2.4082 12.1584C4.31654 15.1584 7.0582 16.8918 9.99987 16.8918Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>


              <svg xmlns="http://www.w3.org/2000/svg" class="ml-3" width="20" height="20" viewBox="0 0 17 17" fill="none" style="cursor: pointer; position: fixed; right:30px;" v-else @click="togglePassword()">
                    <path d="M10.3561 6.9924L6.95581 10.2237C6.51901 9.80864 6.25021 9.24028 6.25021 8.60807C6.25021 7.34363 7.32541 6.32187 8.65597 6.32187C9.32125 6.32187 9.91933 6.57731 10.3561 6.9924Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.567 4.62956C11.391 3.78661 10.047 3.32681 8.656 3.32681C6.28384 3.32681 4.07295 4.65511 2.53407 6.95408C1.92927 7.85451 1.92927 9.368 2.53407 10.2684C3.06495 11.0603 3.68319 11.7436 4.35519 12.2928" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.25021 13.4167C7.01629 13.7233 7.82941 13.8893 8.65597 13.8893C11.0281 13.8893 13.239 12.561 14.7779 10.262C15.3827 9.36161 15.3827 7.84812 14.7779 6.94769C14.5561 6.61561 14.3142 6.3027 14.0656 6.00894" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.0147 9.05508C10.84 9.95551 10.0672 10.6899 9.11966 10.8559" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.95581 10.2237L1.93597 14.9941" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.376 2.22202L10.3561 6.99238" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            
          </div>
          
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useTheme } from 'vuetify';
  import { getbals } from "@/composables/requests/fiat";
  const theme = useTheme()
  const isDark = computed(() =>  theme.global.current.value.dark);
  const pinia = useStore()

  const isToggled = ref(true);

  const isBalanceVisible = ref(true);

  const togglePassword = () => {
  isBalanceVisible.value = !isBalanceVisible.value;
  isToggled.value = !isToggled.value;
};

  const allCountries = pinia.state.allcountries;
  const fiatAmmount = ref();
  
  const totalFiatBal = computed(() => Object.values(pinia.state.Total_fiat_bal));

  const currency = allCountries.find(country => country.currency_name === pinia.state.preferredCurrency);

  fiatAmmount.value = totalFiatBal.value.find(f => f.country_id === currency.id);

  const generateAsterisks = () => {
  const balance = formatBalance(pinia.state.SummedBalance);
  const balanceLength = balance.length;
  return '*'.repeat(balanceLength);
}

  watch(() => pinia.state.preferredCurrency, (newCurrency) => {
      const currency = allCountries.find(country => country.currency_name === newCurrency);
      const fiat = currency ? totalFiatBal.value.find(f => f.country_id === currency.id) : null;
      fiatAmmount.value = fiat ? fiat.balance : 0;

  }, { immediate: true }); // `immediate` ensures it runs on initial load as well


    
  const isChevronToggled = ref(false);
  const toggleChevron = () => {
  isChevronToggled.value = !isChevronToggled.value;
  };


  const fetch_fiat_bals = async()=>{
  if(pinia.state.Total_fiat_bal.length){
    return 
  }else{
    await Promise.allSettled([
      getbals(),
    ])
    
  }

}

  onMounted(async () => {
    fetch_fiat_bals();
  });
  </script>
  
  <style scoped>
  .wallet-nav{
  background: var(--linear-card, linear-gradient(270deg, #1DA1DB -11.75%, #2873FF 119.96%));
  filter: drop-shadow(0px 27px 20px rgba(0, 0, 0, 0.02));
  padding: 25px;
  width: 286px;
  border-radius: 15px;
  }
  .profile{
  background: var(--secondary-background, #10192D);
  }
  .profile-light{
  background: linear-gradient(180deg, rgba(248, 250, 252, 0.00) 65.19%, #F8FAFC 100%) !important;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 4px;
  border: 1px solid #E2E8F0;;
  }
  .lg-num{
  text-align: center;
  font-family: Manrope;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: white;
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
  .country-name{
  color: white !important;
  }
  .country-name-light{
  color: #10192D !important;
  }

  .country-dropdown{
flex-shrink: 0;
background: #1B2537 !important;
text-transform: unset !important;
color: white;
letter-spacing: 0px;
margin-top: 10px !important;
border: 0.5px solid #2f3946;
}
.country-dropdown-light{
flex-shrink: 0;
border-radius: 20px;
text-transform: unset !important;
background: #F8FAFC !important;
color: #060A1D;
letter-spacing: 0px;
box-shadow: none;
margin-top: 10px !important;
border: 1px solid #DBE8FF;
}

.close-btn{
fill: white;
transition: transform 0.3s ease;
}
.close-btn-dark{
fill: #10192D;
}
.chevron-icon {
  transition: transform 0.3s;
}

.chevron-icon-rotated {
  transform: rotate(180deg);
}
  </style>