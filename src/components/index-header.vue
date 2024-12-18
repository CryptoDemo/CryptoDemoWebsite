<template>
  <v-app-bar :elevation="2" class="pt-3 pb-3" :class="['navbar-bg', { hidden: !showNavbar }]" :style="{
    borderBottom: isDark ? '1px solid #10192D' : '1px solid #E2E8F0',
    background: isDark ? 'rgba(6, 10, 29, 0.60) !important' : 'rgba(255, 255, 255, 0.60) !important',
    boxShadow: isDark ? '' : 'none !important'
  }">
    <v-container style="display: flex; align-items: center; justify-content: space-between; width: 100%">
      <div class="d-flex">
        <v-app-bar-title class="nav-title"
          :style="{ color: isDark ? '#fff' : '#10192D', marginRight: '52px' }">Betacrypto</v-app-bar-title>
        <div v-if="!pinia.state?.user?.token" class="d-flex gc-2 flex-lg-and-up hidden-sm-and-down"
          style="width: fit-content">
          <v-btn @click.prevent="naviagteToRoute('/account/marketplace/createOffer')"
            :style="{ color: isDark ? '#fff' : '#10192D !important' }" class="nav-subtitle">
            Create an offer
          </v-btn>
          <v-btn @click.prevent="naviagteToRoute('/account/trade/wallet')"
            :style="{ color: isDark ? '#fff' : '#10192D !important' }" class="nav-subtitle">
            Wallet
          </v-btn>
          <div class="text-center">
            <v-menu open-on-hover>
              <template v-slot:activator="{ props }">
                <v-btn class="nav-subtitle" v-bind="props">Features
                  <v-icon color="primary" class="mt-1" icon="mdi-chevron-down"></v-icon>
                </v-btn>
              </template>
              <v-list class="hub-dropdown"
                :style="{ display: 'flex', alignItems: 'center', justifyContent: 'end', border: isDark ? '1px solid #10192D' : '1px solid var(--Gradient-Line, rgba(226, 232, 240, 0.50)) !important', background: !isDark ? '#fff' : 'rgba(6, 10, 29, 0.70)', boxShadow: isDark ? '0px 4px 50px 0px rgba(6, 10, 29, 0.25)' : '0px 4px 50px 0px rgba(27, 37, 55, 0.15) !important' }">
                <v-row>
                  <v-col>
                    <div class="avatar-bg" :style="{ background: isDark ? '#10192D' : '#E9F1FF' }">
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
                            <v-list-item-title class="icon-text1"
                              :style="{ color: isDark ? '#fff' : '#10192D !important' }">{{
                                item.title }}</v-list-item-title>
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
            </v-menu>
          </div>
          <v-btn @click.prevent="naviagteToRoute('#')" :style="{ color: isDark ? '#fff' : '#10192D !important', borderRadius:'10px' }"
            class="nav-subtitle">
            Spot trading
          </v-btn>
        </div>
      </div>

      <div class="d-flex gc-4" style="align-items: center;">
        <v-btn v-if="!pinia.state?.user?.token" @click.prevent="navigateTo('/authentication/login')"
          :style="{ color: isDark ? '#fff' : '#10192D !important', borderRadius:'10px' }" class="nav-subtitle">
          {{ props.title }}
        </v-btn>

        <v-btn v-if="!pinia.state?.user?.token" @click.prevent="navigateTo('/authentication/register')" class="register nav-subtitle">
          Register
        </v-btn>

        <v-btn v-if="pinia.state?.user?.token" @click.prevent="navigateTo('/account/trade/wallet')"
          :style="{ color: isDark ? '#fff' : '#10192D !important' }" class="nav-subtitle">
          Dashboard
        </v-btn>

        <v-menu>
          <template v-slot:activator="{ props }">
            <button class="flex-lg-and-up hidden-sm-and-down dropdown-btn"
              :style="{ background: isDark ? '#10192D !important' : '#F8FAFC !important' }"
              style="letter-spacing: 0px; display: flex; width: 111px; height: 40px; border-radius: 100px; justify-content: space-between; padding: 10px 8px"
              v-bind="props">
              <img :src="flag" style="object-fit: cover; border-radius: 100px; height: 30px; width: 30px;" />
              <span class="nav-subtitle1" :style="{ color: isDark ? '#fff' : '#10192D !important' }">{{ countryCode
                }}</span>
              <v-icon size="24" icon="mdi-chevron-down" style="color: #8E9BAE;"></v-icon>
            </button>
          </template>

          <v-list class="country-dropdown"
            :style="{ border: isDark ? '0.5px solid #2f3946' : '', background: isDark ? '#1B2537 !important' : '#fff', marginTop:'20px' }">
            <v-list-item style="display: contents">
              <v-row dense style="width: 240px;">
                <v-col v-for="(item, index) in pinia.state.allcountries" sm="12" :key="index">
                  <v-list-item
                    @click="countryCode = item.country_code; countryName = item.country_name; flag = item.flag_url"
                    style="display: flex;">
                    <div style="display: flex; align-items: center; ">
                      <img :src="item.flag_url"
                        style="object-fit: cover; border-radius: 4px; height: 28px; width: 45px;" />
                      <span class="country-name ml-2" :style="{ color: isDark ? '#fff' : '#10192D !important' }">{{
                        item.country_name }}</span>
                    </div>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
        </v-menu>

        <ToggleBtn class="flex-lg-and-up hidden-sm-and-down" />
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import { getcountries } from "@/composables/requests/admin";


const pinia = useStore();
const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const pageNumber = ref(1);
const countryCode = ref();
const flag = ref();
const country = ref();
const countryName = ref();
let showNavbar = ref(true);
let lastScrollPosition = 0;

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

const naviagteToRoute = (url) => {
  if (pinia.state.user?.token) {
    navigateTo(url);
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

const onScroll = () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollPosition < 0) return;
  if (Math.abs(currentScrollPosition - lastScrollPosition) < 60) return;

  showNavbar.value = currentScrollPosition < lastScrollPosition;
  lastScrollPosition = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped>
.navbar-bg {
  backdrop-filter: blur(50px);
  display: flex !important;
  height: 80px;
  width: 100% !important;
  justify-content: center !important;
  position: fixed !important;
  top: 0 !important;
  z-index: 9999;
}

.hidden {
  opacity: 0;
  transform: translateY(-100%);
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
  pointer-events: none;
}

.nav-title {
  font-family: "SF Pro Display" !important;
  font-size: 24px !important;
  font-style: normal;
  font-weight: 700 !important;
  line-height: normal;
  cursor: pointer;
  max-width: fit-content !important
}

.nav-subtitle {
  font-family: "SF Pro Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  border-radius:10px !important;
  line-height: 19.09px;
  text-transform: unset !important;
  letter-spacing: 0px !important;
}

.hub-dropdown {
  border-radius: 15px;
  backdrop-filter: blur(50px);
  display: flex;
  width: 659px;
  padding: var(--spacing-2xl, 20px);
  align-items: center;
  gap: var(--spacing-3xl, 24px);
}

.avatar-bg {
  border-radius: 10px;
  display: flex;
  margin: auto;
  padding: 51.69px 13.585px 0px 13.267px;
  height: 249px !important;
}

.icon-text1 {
  color: var(--Colors-Base-white, #FFF);
  font-family: "SF Pro Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.icon-subtitle1 {
  color: #64748B;
  font-family: "SF Pro Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.register {
  width: 115px;
  height: 40px;
  padding: 10px;
  border-radius: 10px !important;
  background: rgba(40, 115, 255, 1) !important;
  text-indent: unset !important;
  text-transform: unset !important;
  letter-spacing: 0px;
  color: #fff !important;
  font-family: "SF Pro Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.dropdown-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: unset !important;
  color: white !important;
}

.nav-subtitle1 {
  font-family: "SF Pro Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16.72px;
  letter-spacing: -1%;
}

.country-dropdown {
  border-radius: 15px;
  backdrop-filter: blur(50px) !important;
  height: 320px !important;
}

.country-name {
  font-family: "SF Pro Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
}
</style>