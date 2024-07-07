<template>
    
    <div :class="isDark ? 'profile':'profile-light'" class="wallet-nav">

        <div class="d-flex" style="justify-content: space-between; align-items: center;">

            <div class="d-flex" style="align-items: baseline; justify-content: space-between; margin-top: -2px; ">
              <span class="sm-num" :class="isDark ? 'country-name' : 'country-name-light'" style="font-size: 16px; font-style: normal;font-weight: 600;">Fiat Balance</span>
            </div>

            <v-menu transition="slide-y-transition">
                <template v-slot:activator="{ props }">
                  <button class="dropdown-btn1i" :class="isDark ? 'dropdown-btn1i':'dropdown-btn1i-light'" v-bind="props" variant="text" style="display: flex; align-self: flex-start; border-radius: 16px; box-shadow: none;" @click="toggleChevron">
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
    
                <v-list :class="isDark ? 'country-dropdown':'country-dropdown-light'" style="border-radius: 15px; height: 120px !important;">
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


          <div :class="isDark ?'txn-cards-dark' : 'txn-cards-light'" style="margin-top: 25px; margin-bottom: 25px; height: 130px; position: relative; display: flex; justify-content: center; align-items: center;">
        
            <div style="display: flex; flex-direction: column;">
              <span class="lg-num">{{ pinia.state.Selectedcurrency_code }} {{ formatBalance(fiatAmmount) }}</span>
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
  const totalFiatBal = computed(()=>pinia.state.Total_fiat_bal);
  console.log(totalFiatBal.value)
  const allCountries = pinia.state.allcountries;
  const fiatAmmount = ref();

const currency = allCountries.find(country => country.currency_name === pinia.state.preferredCurrency);
console.log(currency.id)

fiatAmmount.value = totalFiatBal.value.find(f => f.country_id === currency.id);



watch(() => pinia.state.preferredCurrency, (newCurrency) => {
    const currency = allCountries.find(country => country.currency_name === newCurrency);
    const fiat = currency ? totalFiatBal.value.find(f => f.country_id === currency.id) : null;
    fiatAmmount.value = fiat ? fiat.balance : 0;
    console.log(fiatAmmount.value);
}, { immediate: true }); // `immediate` ensures it runs on initial load as well


  
const isChevronToggled = ref(false);
const toggleChevron = () => {
isChevronToggled.value = !isChevronToggled.value;
};

  
  onMounted(async () => {
    getbals();
  });
  </script>
  
  <style scoped>
  .wallet-nav{
  background: var(--secondary-background, #12181F);
  padding: 31px;
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