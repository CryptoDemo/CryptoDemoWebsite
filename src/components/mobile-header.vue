<template>
  <div style="position: relative;">

    <div style="position: fixed; top: 0; flex-wrap: wrap;  z-index: 10000;">
      <ClientOnly>
        <v-app-bar :class="[isDark ? 'navbar-bg' : 'navbar-bg-light', { hidden: !showNavbar }]">

          <div style="display: flex; align-items: center; justify-content: space-between; width: fit-content;">

            <v-toolbar-title class="header-title"
              :class="isDark ? 'header-title' : 'header-title-light'">Betacrypto</v-toolbar-title>
            <Harmbuger @click.prevent="ToggleMenu()" :is-open="drawer"
              style="position: absolute; right: 9px; width: 32px" />

          </div>
        </v-app-bar>

        <nav :class="navbarClass">
          <v-navigation-drawer v-model="drawer" location="top"
            :class="isDark ? 'v-navigation-drawer' : 'v-navigation-drawer-light'" style="padding: 15px;">
            <div class="country-div" style="margin-top: 90px;">


              <v-menu style="position: relative !important; height: auto; z-index: 10000;">
                <template v-slot:activator="{ props }">
                  <v-btn @click.prevent="handleButtonClick(country)" class="me-4 mt-2"
                    :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" v-bind="props"
                    style="display: flex; align-self: flex-start;  margin-top: 90px; border-radius: 100px; box-shadow: none; height: 48px; width: 100%; display: flex; align-items: center; justify-content: normal;">
                    <img :src="flag" class="me-2"
                      style="object-fit: cover; border-radius: 4px; height: 25px; width: 40px;" />
                    <span class="me-2" :class="isDark ? 'country-text' : 'country-text-light'">{{ Countryname }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      style="position: absolute; right: 14px;">
                      <path d="M17 14L12 9L7 14" stroke="#8E9BAE" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </v-btn>
                </template>

                <v-list class="country-list" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'"
                  style="border-radius: 15px; margin-top: 40px;">
                  <v-list-item style="display: contents">
                    <div @click.stop="" class="px-3 mb-4 mt-2">
                      <v-text-field @click.stop="" clearable variant="none" v-model="input"
                        :class="isDark ? 'search-bar' : 'search-bar-light'" style="height: 50px;"> </v-text-field>
                    </div>
                    <v-row dense style="max-width: 250px;">
                      <v-col v-for="(item, index) in filteredItems?.length ? filteredItems : pinia.state.allcountries"
                        sm="12" :key="index">
                        <v-list-item
                          @click="Countryname = item.country_code; country = item.country_name; flag = item.flag_url;"
                          style="display: flex;">
                          <div style="display: flex; align-items: center; ">
                            <img class="me-3" :src="item.flag_url"
                              style="object-fit: cover; border-radius: 4px; height: 28px; width: 45px;" />
                            <span class="country-name" :class="isDark ? 'country-name' : 'country-name-light'">{{
                              item.country_name
                              }}</span>
                          </div>
                        </v-list-item>
                      </v-col>
                    </v-row>
                  </v-list-item>
                </v-list>
              </v-menu>

            </div>

            <div v-if="!pinia.state?.user?.token" style="margin-top: 25px;">
              <v-btn @click.prevent="navigateToOffers()" :class="isDark ? 'mobile-btn' : 'mobile-btn-light'">Create an
                offer</v-btn>
            </div>

            <nuxt-link :to="pinia.state?.user?.token ? '/account/trade/wallet' : '/authentication/login'"
              v-if="!pinia.state?.user?.token"> <v-btn :class="isDark ? 'mobile-btn' : 'mobile-btn-light'"
                class="mt-5">Wallet</v-btn>
            </nuxt-link>


            <nuxt-link to="/account/dashboard" v-if="pinia.state?.user?.token"> <v-btn
                :class="isDark ? 'mobile-btn' : 'mobile-btn-light'" class="mt-5">Dashboard</v-btn> </nuxt-link>


            <v-menu v-if="!pinia.state?.user?.token" style="position: relative; z-index: 10000;">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" :class="isDark ? 'mobile-btn' : 'mobile-btn-light'">Features
                  <v-icon color="primary" class="mt-1" icon="mdi-chevron-down"></v-icon>
                </v-btn>
              </template>
              <div style="display: flex; align-items: center;  justify-content: end; position: relative; z-index: 100;">
                <v-list style="width: 100%;" :class="isDark ? 'card-hub' : 'card-hub-light'">
                  <div>

                    <div>
                      <v-list-item v-for="(item, index) in items" :key="index"
                        :style="index === 1 ? 'margin-bottom: 30px; margin-top: 30px' : ''">
                        <div class="d-flex">
                          <img :src="item.icon1" class="me-4" v-if="theme.global.current.value.dark" />
                          <img :src="item.icon2" class="me-4" v-else />
                          <div style="display: flex;">
                            <div class="d-flex" style="flex-direction: column;">
                              <v-list-item-title :class="isDark ? 'icon-text1' : 'icon-text1-light'">{{ item.title
                                }}</v-list-item-title>
                              <span class="icon-subtitle1 mt-1">{{ item.subtitle }}</span>
                            </div>
                            <div style="display: flex; align-items: center;">
                              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"
                                fill="none" style="position: absolute; right: 1px;"
                                v-if="theme.global.current.value.dark">
                                <path d="M10.7988 7.5L15.7988 12.5L10.7988 17.5" stroke="white" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round" />
                              </svg>

                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                fill="none" style="position: absolute; right: 1px;" v-else>
                                <path d="M10 7.5L15 12.5L10 17.5" stroke="#10192D" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </v-list-item>
                    </div>
                  </div>

                </v-list>
              </div>
            </v-menu>

            <div v-if="!pinia.state?.user?.token" :class="isDark ? 'mobile-btn' : 'mobile-btn-light'"
              style="margin-top: 25px;">
              <v-btn :class="isDark ? 'mobile-btn' : 'mobile-btn-light'">Spot trading</v-btn>
            </div>

            <div
              style="display: flex; justify-content: flex-start; margin-top: 25px; align-items: center; margin-left: 10px;">
              <ToggleBtn class="me-3" />
              <span :class="isDark ? 'Switch-text' : 'Switch-text-light'">Switch to <span class="switch-hint">light</span>
                theme</span>
            </div>

            <NuxtLink to="/authentication/login" v-if="pinia.state?.user?.token"><v-btn
                :class="isDark ? 'mobile-btn' : 'mobile-btn-light'" class="mt-3 mb-3"
                style="width: 100%; justify-content: center; border-radius: 10px !important;">Log Out</v-btn></NuxtLink>

            <NuxtLink to="/authentication/login" v-if="!pinia.state?.user?.token"><v-btn
                :class="isDark ? 'mobile-btn' : 'mobile-btn-light'" class="mt-3 mb-3"
                style="width: 100%; justify-content: center; border-radius: 10px !important;">Log In</v-btn></NuxtLink>

            <NuxtLink to="/authentication/register" v-if="!pinia.state?.user?.token"><v-btn class="mobile-btn"
                style="background: #2873FF !important; color: white; width: 100%; justify-content: center; border-radius: 10px !important;">Register</v-btn>
            </NuxtLink>

          </v-navigation-drawer>
        </nav>
      </ClientOnly>
    </div>


  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useTheme } from 'vuetify';
import { getcountries } from "@/composables/requests/admin";

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark);
const drawer = ref(false)
const navbarClass = ref('closed');
const ToggleMenu = () => {
  drawer.value = !drawer.value
  navbarClass.value = drawer.value ? 'open' : 'closed';
};
const pinia = useStore()
const emit = defineEmits(['country'])
const pageNumber = ref(1);
const country = ref('');
const Countryname = ref('');
const flag = ref('');
let showNavbar = ref(true);
let lastScrollPosition = 0;

const navigateToOffers = () => {
  // Perform the check for user login
  if (pinia.state.user?.token) {
    navigateTo('/account/marketplace/createOffer');
  } else {
    navigateTo('/authentication/login');
  }
}

onMounted(async () => {
  // Only fetch if the countries list in the store is empty
  if (pinia.state.allcountries.length === 0) {
    try {
      const data = await getcountries(pageNumber.value);

      if (data.success) {
        const fetchedcountries = data.data.result;
        const storedcountriesids = pinia.state.allcountries.map(item => item.id);

        // Check if there are any new items in the fetched data
        const newItems = fetchedcountries.filter(item => !storedcountriesids.includes(item.id));

        if (newItems.length > 0) {
          pinia.setallcountries([...pinia.state.allcountries, ...newItems]);
        }
      } else {
        console.error('Unavailable');
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Handle the country and flag logic
  country.value = pinia.state.geo.country;

  const geoCountry = computed(() => pinia.state.allcountries.find((c) => country.value === c.country_name));

  flag.value = geoCountry?.value?.flag_url || "https://storage.yeerlo.com/flags/ng.svg";
  Countryname.value = geoCountry?.value?.country_code
});


const handleButtonClick = (country) => {
  toggleChevron();
  emit('country', country);
};

const isChevronToggled = ref(false);
const toggleChevron = () => {
  isChevronToggled.value = !isChevronToggled.value;
};




let input = ref("");
const locations = ref("");

const filteredItems = computed(() => {
  const searchTerm = input.value.toLowerCase();
  return locations.value.filter((loc) => {
    const lowercountryName = loc.countryName.toLowerCase();
    return (
      lowercountryName.includes(searchTerm)
    );
  });
});

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
  border-bottom: 1px solid #10192D;
  background: rgba(6, 10, 29, 0.60) !important;
  backdrop-filter: blur(50px);
  display: flex !important;
  height: 80px;
  width: 100% !important;
  justify-content: center !important;
  position: fixed !important;
  top: 0 !important;
  z-index: 1000;
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
  z-index: 1000;
}

.hidden {
  opacity: 0;
  transform: translateY(-100%);
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
  pointer-events: none; /* Prevent interactions while hidden */
}

.v-toolbar {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  transition: inherit;
  width: 100%;
  padding: 15px !important;
}

.v-toolbar__content,
.v-toolbar__extension {
  align-items: flex-start !important;
  display: flex !important;
  position: relative;
  width: 100% !important;
}

.v-navigation-drawer {
  /* transform: translateY(0%); */
  position: relative !important;
  display: flex;
  width: 100vw !important;
  height: 100% !important;
  top: 9% !important;
  border-radius: 15px;
  background: #060A1D !important;
  box-sizing: border-box;
}

.v-navigation-drawer-light {
  transform: translateY(0%);
  left: 0px;
  width: calc(100% + 0px);
  top: 0 !important;
  border-radius: 15px;
  background: #fff !important;
}

.header-title {
  font-family: "SF Pro Display";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: contents;
  width: fit-content !important;
}

.header-title-light {
  font-family: "SF Pro Display";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #060A1D !important;
}

.dropdown-mobile {
  border-radius: 100px;
  background: #10192D;
  display: flex;
  height: 48px !important;
  padding: 10px 8px !important;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  letter-spacing: 0px !important;
  width: 100% !important;
  margin-top: 90px;
  text-transform: capitalize;
}

.dropdown-mobile-light {
  border-radius: 100px;
  background: #F8FAFC;
  display: flex;
  height: 48px !important;
  padding: 10px 8px !important;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  letter-spacing: 0px !important;
  width: 100% !important;
  margin-top: 90px;
  text-transform: capitalize;
  box-shadow: none;
}

.mobile-bg {
  border-radius: 100px;
  background: #10192D !important;
  cursor: pointer;
}

.mobile-bg-light {
  border-radius: 100px;
  background: #fff !important;
  cursor: pointer;
  text-transform: unset;
}

.country-name {
  font-family: "SF Pro Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;

}

.mobile-btn {
  background: #060A1D !important;
  color: #fff;
  box-shadow: none;
  letter-spacing: 0px;
  text-transform: unset;
  font-family: "SF Pro Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: left;
  border-radius: 10px
}

.mobile-btn-light {
  background: #fff !important;
  color: #060A1D;
  box-shadow: none;
  letter-spacing: 0px;
  text-transform: unset;
  font-family: "SF Pro Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: left;
  border-radius: 10px
}

.icon-text1 {
  font-family: "SF Pro Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
}

.icon-text1-light {
  color: #10192D;
  font-family: "SF Pro Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.icon-subtitle1 {
  color: #8E9BAE;
  font-family: "SF Pro Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.card-hub {
  background: #060A1D !important;
}

.card-hub-light {
  background: #fff !important;
}

nav.closed {
  /* display: none; */
  height: 0px !important;
  z-index: 10 !important;
}

nav.open {
  /* position: fixed; */
  height: 100% !important;
}

.country-list :deep(.v-text-field .v-field--no-label input, .v-text-field .v-field--active input) {
  opacity: 1;
  margin-top: -9px;
}

.search-bar {
  border-radius: 100px;
  border: 1px solid #64748B;
  background: #1B2537;
}

.search-bar-light {
  border-radius: 100px;
  border: 1px solid #E2E8F0;
  background: #F7F9FA;
}
</style>