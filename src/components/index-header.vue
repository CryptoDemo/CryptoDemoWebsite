<template>
  <div>
    <v-app-bar :elevation="2" class="pt-3 pb-3" :class="isDark ? 'navbar-bg' : 'navbar-bg-light'">
      <v-container style="display: flex; align-items: center;">
        <v-app-bar-title :class="isDark ? 'nav-title' : 'nav-title-light'"
          style="cursor: pointer;">Betacrypto</v-app-bar-title>
        <div v-if="!pinia.state?.user?.token" class="d-flex" style="position: absolute; margin-left: 150px;">
          <v-btn @click.prevent="navigateToOffers()" class="header-link flex-lg-and-up hidden-sm-and-down">
            <span :class="isDark ? 'nav-subtitle' : 'nav-subtitle-light'">Create an offer</span>
          </v-btn>
          <v-btn @click="pushToWallet()" class="header-link flex-lg-and-up hidden-sm-and-down">
            <span :class="isDark ? 'nav-subtitle' : 'nav-subtitle-light'">Wallet</span>
          </v-btn>
          <div class="text-center flex-lg-and-up hidden-sm-and-down">
            <v-menu open-on-hover>
              <template v-slot:activator="{ props }">
                <v-btn color="" class="header-link flex-lg-and-up hidden-sm-and-down"
                  :class="isDark ? 'nav-subtitle' : 'nav-subtitle-light'" v-bind="props">Features
                  <v-icon color="primary" class="mt-1" icon="mdi-chevron-down"></v-icon>
                </v-btn>
              </template>
              <div style="display: flex; align-items: center;  justify-content: end;">
                <v-list :class="isDark ? 'hub-dropdown' : 'hub-dropdown-light'">
                  <v-row>
                    <v-col>
                      <div :class="isDark ? 'avatar-bg' : 'avatar-bg-light'">
                        <img src="https://res.cloudinary.com/dfejrmsq5/image/upload/v1711619581/hub_l6s401.svg"
                          style="display: flex; margin: auto;" />
                      </div>
                    </v-col>
                    <v-col cols="7">
                      <v-list-item v-for="(item, index) in items" :key="index"
                        :style="index === 1 ? 'margin-bottom: 30px; margin-top: 30px' : ''">
                        <div class="d-flex">
                          <img :src="isDark ? item.icon1 : item.icon2" class="me-4" />
                          <div style="display: flex;">
                            <div class="d-flex" style="flex-direction: column;">
                              <v-list-item-title :class="isDark ? 'icon-text1' : 'icon-text1-light'">{{ item.title
                                }}</v-list-item-title>
                              <span class="icon-subtitle1 mt-1">{{ item.subtitle }}</span>
                            </div>
                            <div style="display: flex; align-items: center;">
                              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"
                                fill="none">
                                <path d="M10.4004 7.5L15.4004 12.5L10.4004 17.5" stroke="#2973FE" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </v-list-item>
                    </v-col>
                  </v-row>

                </v-list>
              </div>
            </v-menu>
          </div>
          <v-btn class="header-link flex-lg-and-up hidden-sm-and-down">
            <NuxtLink to="#"> <span :class="isDark ? 'nav-subtitle' : 'nav-subtitle-light'">Spot trading</span>
            </NuxtLink>
          </v-btn>
        </div>


        <div class="d-flex" v-if="!pinia.state?.user?.token" style="align-items: center;">
          <v-btn class="header-link me-3 flex-lg-and-up hidden-sm-and-down">
            <NuxtLink to="/authentication/login"><span class="text2 d-flex" style="align-self: center; margin: auto;"
                :class="isDark ? 'nav-subtitle' : 'nav-subtitle-light'">{{ props.title }}</span></NuxtLink>
          </v-btn>

          <NuxtLink to="/authentication/register">
            <v-btn class="register me-3 flex-lg-and-up hidden-sm-and-down" style="border-radius: 10px !important;">
              <span class="register-text">Register </span></v-btn>
          </NuxtLink>
        </div>

        <div v-if="pinia.state?.user?.token">
          <v-btn class="header-link flex-lg-and-up hidden-sm-and-down me-4">
            <NuxtLink to="/account/trade/wallet"> <span :class="isDark ? 'nav-subtitle' : 'nav-subtitle-light'">
                Dashboard
              </span>
            </NuxtLink>
          </v-btn>
        </div>



        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn class="me-4 flex-lg-and-up hidden-sm-and-down"
              :class="isDark ? 'dropdown-btn' : 'dropdown-btn-light'"
              style="letter-spacing: 0px; display: flex; width: 115px; height: 40px; border-radius: 10px; justify-content: center;"
              v-bind="props">
              <img :src="flag" class="me-2" style="object-fit: cover; border-radius: 4px; height: 28px; width: 45px;" />
              <span class="me-2" :class="isDark ? 'nav-subtitle1' : 'nav-subtitle1-light'">{{ countryCode }}</span>
              <v-icon icon="mdi-chevron-down" style="color: #8E9BAE;"></v-icon>
            </v-btn>
          </template>

          <v-list :class="isDark ? 'country-dropdown' : 'country-dropdown-light'">
            <v-list-item style="display: contents">
              <v-row dense style="width: 240px;">
                <v-col v-for="(item, index) in pinia.state.allcountries" sm="12" :key="index">
                  <v-list-item
                    @click="countryCode = item.country_code; countryName = item.country_name; flag = item.flag_url"
                    style="display: flex;">
                    <div style="display: flex; align-items: center; ">
                      <img :src="item.flag_url"
                        style="object-fit: cover; border-radius: 4px; height: 28px; width: 45px;" />
                      <span class="country-name ml-2" :class="isDark ? 'country-name' : 'country-name-light'">{{
                        item.country_name }}</span>
                    </div>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>

        </v-menu>

        <ToggleBtn class="flex-lg-and-up hidden-sm-and-down" />

      </v-container>
    </v-app-bar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import { getcountries } from "@/composables/requests/admin";


const pinia = useStore()
const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark);
const pageNumber = ref(1);
const countryCode = ref();
const flag = ref();
const country = ref();
const countryName = ref();



onMounted(async () => {
  // Fetch countries only if the store list is empty
  if (pinia.state.allcountries.length === 0) {
    try {
      const data = await getcountries(pageNumber.value);

      if (data.success) {
        const fetchedCountries = data.data.result;
        const storedCountryIds = pinia.state.allcountries.map(item => item.id);

        // Filter out new countries not already in the store
        const newItems = fetchedCountries.filter(
          item => !storedCountryIds.includes(item.id)
        );

        if (newItems.length > 0) {
          pinia.setallcountries([
            ...pinia.state.allcountries,
            ...newItems
          ]);
        }
      } else {
        console.error('Failed to fetch countries: Response was unsuccessful.');
      }
    } catch (error) {
      console.error('An error occurred while fetching countries:', error);
    }
  }

  // Handle country and flag logic with fallback
  country.value = pinia.state.geo.country;

  const geoCountry = computed(() =>
    pinia.state.allcountries.find(c => c.country_name === country.value)
  );

  flag.value = geoCountry.value?.flag_url || "https://storage.yeerlo.com/flags/ng.svg";
  countryCode.value = geoCountry.value?.country_code;
});

const navigateToOffers = () => {
  // Perform the check for user login
  if (pinia.state.user?.token) {
    navigateTo('/account/marketplace/createOffer');
  } else {
    navigateTo('/authentication/login');
  }
}

function pushToWallet() {
  if (pinia.state.user?.token) {
    navigateTo('/account/trade/wallet');
  } else {
    navigateTo('/authentication/login');
  }
}

const props = defineProps(
  {
    title: String,
    text2: String,
    link: ""
  }
)

const items = [
  { icon1: '/svg/bitcoin-hub.svg', icon2: '/svg/btc-logo-light1.svg', title: 'Buy with bitcoin', subtitle: 'Search for offers to buy gift cards with Bitcoin.' },
  { icon1: '/svg/btc-logolight.svg', icon2: '/svg/tether-light.svg', title: 'Buy with Tether', subtitle: 'Search for offers to buy gift cards with Tether.' },
  { icon1: '/svg/btc-logodark.svg', icon2: '/svg/binance-lightlogo.svg', title: 'Buy with Binance Coin', subtitle: 'Search for offers to buy gift cards with Binance Coin.' },

];



</script>

<style scoped>
.navbar-bg {
  border-bottom: 1px solid #10192D;
  background: rgba(6, 10, 29, 0.60) !important;
  backdrop-filter: blur(50px);
  display: flex !important;
  height: 80px;
  width: 100% !important;
  justify-content: center !important;
  position: fixed !important;
  top: 0 !important;
}

.navbar-bg-light {
  border-bottom: 1px solid #E2E8F0;
  background: rgba(255, 255, 255, 0.60) !important;
  backdrop-filter: blur(50px);
  box-shadow: none !important;
  display: flex;
  height: 80px;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: fixed !important;
  top: 0 !important;
}

.nav-title {
  color: var(--Colors-Base-white, #FFF);
  font-family: "SF Pro Display" !important;
  font-size: 24px !important;
  font-style: normal;
  font-weight: 700 !important;
  line-height: normal;
}

.nav-title-light {
  color: #10192D;
  font-family: "SF Pro Display" !important;
  font-size: 24px !important;
  font-style: normal;
  font-weight: 700 !important;
  line-height: normal;
}

.v-toolbar {
  padding: 0px;
}

.text2 {
  color: var(--Colors-Base-white, #FFF);
  font-family: "SF Pro Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
}

.dropdown-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #10192D !important;
  text-transform: unset !important;
  color: white !important;
}

.dropdown-btn-light {
  display: flex;
  justify-content: space-between;
  background: #F8FAFC !important;
  text-transform: unset !important;
  color: white !important;
}

.v-list {
  background: rgba(6, 10, 29, 0.70) !important;
  border-radius: 20px !important;
  color: white;
  margin-top: 15px;
  cursor: pointer;
}

.nav-subtitle {
  display: flex;
  color: var(--Colors-Base-white, #FFF);
  font-family: "SF Pro Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  justify-content: center;
  align-items: center;
  letter-spacing: 0px !important;
}

.nav-subtitle1 {
  color: var(--Colors-Base-white, #FFF);
  font-family: "SF Pro Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
  justify-content: center;
  align-items: center;
  letter-spacing: 0px !important;
}

.nav-subtitle-light {
  display: flex;
  color: #10192D !important;
  font-family: "SF Pro Display";
  font-size: 16px !important;
  font-style: normal;
  font-weight: 400 !important;
  line-height: normal;
  justify-content: center;
  align-items: center;

}

.nav-subtitle1-light {
  display: flex;
  color: #10192D !important;
  color: var(--Colors-Base-white, #FFF);
  font-family: "SF Pro Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
  justify-content: center;
  align-items: center;

}

.register {
  display: flex;
  width: 115px;
  height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px !important;
  background: #2873FF !important;
  text-indent: unset !important;
  text-transform: unset !important;
  letter-spacing: 0px;
}

.register-text {
  color: var(--Colors-Base-white, #FFF);
  font-family: "SF Pro Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.header-link {
  display: flex;
  height: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-indent: unset !important;
  text-transform: unset !important;
  letter-spacing: 0px !important;
}

.hub-dropdown {
  border-radius: 15px;
  border: 1px solid #10192D;
  background: rgba(6, 10, 29, 0.70);
  box-shadow: 0px 4px 50px 0px rgba(6, 10, 29, 0.25);
  backdrop-filter: blur(50px);
  display: flex;
  width: 659px;
  /* height: 289px; */
  padding: var(--spacing-2xl, 20px);
  align-items: center;
  gap: var(--spacing-3xl, 24px);
}

.hub-dropdown-light {
  border-radius: 15px !important;
  border: 1px solid var(--Gradient-Line, rgba(226, 232, 240, 0.50)) !important;
  background: #FFF !important;
  box-shadow: 0px 4px 50px 0px rgba(27, 37, 55, 0.15) !important;
  display: flex;
  width: 659px;
  padding: var(--spacing-2xl, 20px);
  align-items: center;
  gap: var(--spacing-3xl, 24px);
}

.avatar-bg {
  border-radius: 10px;
  background: #10192D;
  display: flex;
  margin: auto;
  padding: 51.69px 13.585px 0px 13.267px;
  height: 249px !important;
}

.avatar-bg-light {
  border-radius: 10px;
  background: #E9F1FF;
  padding: 51.69px 13.585px 0px 13.267px;
  height: 249px !important;
  display: flex;
  margin: auto;
}

.icon-text1 {
  color: var(--Colors-Base-white, #FFF);
  font-family: "SF Pro Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
}

.icon-text1-light {
  color: #10192D !important;
  font-family: "SF Pro Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
}

.icon-subtitle1 {
  color: #64748B;
  font-family: "SF Pro Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.country-dropdown {
  border-radius: 15px;
  border: 0.5px solid #2f3946;
  background: #1B2537 !important;
  backdrop-filter: blur(50px) !important;
  height: 320px !important;
}

.country-dropdown-light {
  border-radius: 15px;
  background: #fff !important;
  height: 320px !important;
}

.country-name {
  color: var(--Colors-Base-white, #FFF) !important;
  font-family: "SF Pro Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
}

.country-name-light {
  color: #10192D !important;
  font-family: "SF Pro Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
}

::-webkit-scrollbar {
  display: none;
}
</style>