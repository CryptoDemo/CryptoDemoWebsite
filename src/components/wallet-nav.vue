<template>
    <div :class="isDark ? 'profile':'profile-light'" class="wallet-nav">
      <span class="sm-num" style="font-size: 16px; font-style: normal;font-weight: 600;">Balance</span>
          <div style="margin-top: 51px; position: relative; display: flex; justify-content: center;">
            <img src="/svg/coin-range.svg" style="position: relative;"/>
            <img src="/svg/range1.svg" style="position: absolute; left: 0;right: 0; margin: auto; top: 17%;"/>
            <div style="display: flex; flex-direction: column; position: absolute; left: 0; right: 0; top: 57px;">
              <span class="lg-num">$69300</span>
              <span class="sm-num">0.0140 BTC</span>
            </div>
            
          </div>
          <div class="d-flex" style="justify-content: space-between;">
              <div class="d-flex">
                <div style="display: flex; align-items: center;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="46" viewBox="0 0 45 46" fill="none">
                    <path d="M5.36596 33.6745C4.36505 34.3156 3.02367 34.0278 2.48103 32.9702C0.106027 28.3416 -0.60156 23.0088 0.521364 17.8837C1.64429 12.7585 4.51685 8.21017 8.60966 4.99861C9.54479 4.26483 10.8836 4.56427 11.5248 5.56518C12.1659 6.5661 11.8643 7.888 10.946 8.64276C7.80702 11.2228 5.60455 14.7956 4.72611 18.8049C3.84766 22.8142 4.35444 26.9807 6.12705 30.6368C6.64561 31.7064 6.36688 33.0333 5.36596 33.6745Z" fill="#FFAA35"/>
                  </svg>
                  <span class="coin-perc" style="position: absolute; margin-left: 7px;">35%</span>
                </div>
                <div style="display: inline-grid;">
                  <span class="coin-perc">Waves</span>
                  <span class="sm-num" style="font-weight: 500;">$120</span>
                </div>
              </div>
  
  
              <div class="d-flex">
                <div style="display: flex; align-items: center;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="46" viewBox="0 0 45 46" fill="none">
                     <path d="M5.36596 33.6745C4.36505 34.3156 3.02374 34.0279 2.48113 32.9703C1.46409 30.988 0.745259 28.8621 0.351555 26.6611C-0.0421489 24.4601 -0.10489 22.2168 0.161904 20.0049C0.304244 18.8248 1.46263 18.0899 2.62373 18.3443C3.78484 18.5987 4.50634 19.7466 4.39074 20.9296C4.22895 22.5853 4.29466 24.2589 4.58878 25.9031C4.88291 27.5474 5.40142 29.1399 6.12715 30.6369C6.64569 31.7065 6.36688 33.0333 5.36596 33.6745Z" fill="#3D3E52"/>
                  </svg>
                  <span class="coin-perc" style="position: absolute; margin-left: 7px;">5%</span>
                </div>
                <div style="display: inline-grid;">
                  <span class="coin-perc">Bitcoin</span>
                  <span class="sm-num" style="font-weight: 500;">$1920</span>
                </div>
              </div>
          </div>
          <div class="d-flex" style="justify-content: space-between; margin-top: 17px;">
              <div class="d-flex">
                <div style="display: flex; align-items: center;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="46" viewBox="0 0 45 46" fill="none">
                      <path d="M5.36596 33.6745C4.36505 34.3156 3.02373 34.0279 2.48111 32.9703C0.99396 30.0717 0.149966 26.8766 0.0182156 23.6044C-0.142479 19.6133 0.762184 15.6514 2.63928 12.1256C4.51637 8.5998 7.29822 5.63726 10.6991 3.54229C13.4874 1.82466 16.6093 0.740991 19.8443 0.356483C21.0247 0.216189 22.0123 1.16833 22.0392 2.35668C22.0661 3.54502 21.121 4.51713 19.9441 4.6841C17.4738 5.03457 15.094 5.89058 12.9567 7.20721C10.2065 8.90139 7.95682 11.2972 6.43884 14.1484C4.92085 16.9997 4.18926 20.2037 4.31921 23.4312C4.42021 25.9395 5.03871 28.3918 6.12714 30.6369C6.64568 31.7065 6.36688 33.0333 5.36596 33.6745Z" fill="#674AFF"/>
                  </svg>
                  <span class="coin-perc" style="position: absolute; margin-left: 7px;">35%</span>
                </div>
                <div style="display: inline-grid;">
                  <span class="coin-perc">Avax</span>
                  <span class="sm-num" style="font-weight: 500;">$26</span>
                </div>
              </div>
  
  
              <div class="d-flex">
                <div style="display: flex; align-items: center;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="46" viewBox="0 0 45 46" fill="none">
                      <path d="M5.36596 33.6745C4.36505 34.3156 3.02373 34.0279 2.48111 32.9703C0.726372 29.5503 -0.12851 25.7258 0.0156293 21.8607C0.159769 17.9956 1.29712 14.2455 3.30172 10.9656C3.92159 9.95143 5.28062 9.76439 6.231 10.4783C7.18138 11.1922 7.36057 12.5362 6.7638 13.5641C5.27375 16.1309 4.42854 19.0335 4.31712 22.0211C4.20571 25.0087 4.83238 27.9662 6.12712 30.6369C6.64566 31.7064 6.36688 33.0333 5.36596 33.6745Z" fill="#26A17B"/>
                  </svg>
                  <span class="coin-perc" style="position: absolute; margin-left: 7px;">5%</span>
                </div>
                <div style="display: inline-grid;">
                  <span class="coin-perc">Bitcoin</span>
                  <span class="sm-num" style="font-weight: 500;">$1920</span>
                </div>
              </div>
          </div>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import { getSummedBalance } from "@/composables/requests/tokens";
const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore()

const allCountries = pinia.state.allcountries;
const preferredCurrency = pinia.state.preferredCurrency;

const selectedCountryId = allCountries.find(country=>country.currency_name==preferredCurrency);

const getSummedBal = async () => {
    if (pinia.state.isAuthenticated) {
      try {
        const data = await getSummedBalance(selectedCountryId.id)
        console.log(getWalletAddress);
        if (data.success) {
          console.log(data);
          const totalAmount = data.data;
          // return{ address: data.data?.address}
          }else {
            console.error("Error:", data.message);
        }
 
      } catch (error) {
        console.log(error)
      }
    }
  };

  onMounted(async () => {
     getSummedBal();
  
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
border: 1px solid #DBE8FF;
}
.lg-num{
color: var(--White, var(--Colors-Base-white, #FFF));
text-align: center;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
  
.sm-num{
  color: var(--White, var(--Colors-Base-white, #FFF));
text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.coin-perc{
color: #9E9FA4;
text-align: center;
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
</style>