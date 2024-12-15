<template>
    <div :class="[isDark ? 'Dashboard-navbar' : 'Dashboard-navbar-light', { hidden: !showNavbar }]"
        class="dashboard-nav">
        <v-container style="display: flex; align-items: center;">
            <span @click.prevent="navigateTo('/')" class="logoName" :class="isDark ? 'nav-title' : 'nav-title-light'"
                :style="{ fontFamily: 'SF Pro Display !important', fontSize: $vuetify.display.mobile ? '21px !important' : '24px !important', fontStyle: 'normal', fontWeight: '700 !important', lineHeight: 'normal', cursor: 'pointer', color: isDark ? '#fff' : '#1B2537', marginBottom: $vuetify.display.mobile ? '2px' : '0' }"><span :style="{display: $vuetify.display.mobile ? 'none':'block'}">Betacrypto</span><logo/></span>

            <div style="display: flex; margin-inline-start: auto; align-items: center">
                <span
                    :style="{ fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', color: isDark ? '#fff' : '#1B2537', display: 'flex', gap: '5px', alignItems: 'center' }">
                    <span :style="{ display: $vuetify.display.mobile ? 'none' : 'block' }">{{
                        props.desc }}</span>
                    <span
                        :style="{ fontSize: '16px', fontStyle: 'normal', fontWeight: '700', lineHeight: 'normal', color: isDark ? '#fff' : '#1B2537', cursor: 'pointer' }"
                        @click="navigateTo(props.link)"> {{ props.linkTitle }}</span>
                </span>

                <div class="language-select" :style="{ marginLeft: $vuetify.display.mobile ? '0' : '20px' }">
                    <LanguageDropdown v-if="newUserLanguage" />
                </div>

                <v-menu transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn class="me-4 flex-lg-and-up hidden-sm-and-down"
                            :class="isDark ? 'dropdown-btn' : 'dropdown-btn-light'"
                            style="letter-spacing: 0px; display: flex; width: 125px; height: 52px; border-radius: 20px; justify-content: center;"
                            v-bind="props">
                            <img :src="flag" class="me-2"
                                style="object-fit: cover; border-radius: 4px; height: 28px; width: 40px;" />
                            <span class="me-2">{{ Countryname
                                }}</span>
                            <v-icon icon="mdi-chevron-down" style="color: #8E9BAE;"></v-icon>
                        </v-btn>
                    </template>

                    <v-list class="country-list" :class="isDark ? 'country-dropdown' : 'country-dropdown-light'">
                        <v-list-item style="display: contents">
                            <v-row dense style="max-width: 250px;">
                                <v-col v-for="(item, index) in pinia.state.allcountries" sm="12" :key="index">
                                    <v-list-item
                                        @click="Countryname = item.country_code; country = item.country_name; flag = item.flag_url;"
                                        style="display: flex;">
                                        <div style="display: flex; align-items: center; ">
                                            <img class="me-3" :src="item.flag_url"
                                                style="object-fit: cover; border-radius: 4px; height: 28px; width: 45px;" />
                                            <span class="country-name"
                                                :class="isDark ? 'country-name' : 'country-name-light'">{{
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
        </v-container>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import { getcountries } from "@/composables/requests/admin";

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore()
const emit = defineEmits(['country'])
const pageNumber = ref(1);
const country = ref('');
const Countryname = ref('');
let showNavbar = ref(true);
let lastScrollPosition = 0;

const props = defineProps(
    {
        desc: String,
        linkTitle: String,
        link: String,
        icon: String,
        Menuicon: String,
        wallet: Boolean,
        icon2: Boolean,
        icon3: Boolean,
        hide: Boolean,
        flagDropdown: Boolean,
        newUserLanguage: Boolean,
    }
);


const flag = ref('');
const getallCountries = async () => {
    try {
        const data = await getcountries(pageNumber.value);
        if (data.success) {
            const fetchedcountries = data.data.result;

            const storedcountriesids = pinia.state.allcountries.map(item => item.id);
            // Check if there are any new items in the fetched data
            const newItems = fetchedcountries.filter(item => !storedcountriesids.includes(item.id));

            if (newItems.length > 0) {

                pinia.setallcountries([...pinia.state.allcountries, ...newItems]);
                // flag.value = pinia.state?.allcountries[0].flag_url;
            }
        } else {

        }
    } catch (error) {
    };
}

const fetch_allCountries = async () => {
    if (pinia.state.allcountries.length) {
        return
    } else {
        await Promise.allSettled([
            getallCountries(),
        ])

    }
}


onMounted(() => {
    {
        country.value = pinia.state.geo.country;

        const geoCountry = computed(() => pinia.state.allcountries.find((c) => country.value === c.country_name));

        flag.value = geoCountry?.value?.flag_url || "https://storage.yeerlo.com/flags/ng.svg";
        Countryname.value = geoCountry?.value?.country_code;
        fetch_allCountries()
    }
})

const handleButtonClick = (country) => {
    toggleChevron();
    emit('country', country);
};

const isChevronToggled = ref(false);
const toggleChevron = () => {
    isChevronToggled.value = !isChevronToggled.value;
};


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
.Dashboard-navbar {
    border-bottom: 1px solid #10192D;
    background: rgba(6, 10, 29, 0.60) !important;
    backdrop-filter: blur(50px) !important;
    display: flex !important;
    align-items: center !important;
    flex: 0 0 auto;
    position: fixed;
    top: 0;
    width: 100%;
    height: 90px;
    z-index: 100;
    color: white !important;
    box-shadow: none !important;
}

.Dashboard-navbar-light {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 90px;
    border-bottom: 1px solid #E2E8F0;
    background: rgba(255, 255, 255, 0.60) !important;
    backdrop-filter: blur(50px);
    color: black !important;
    box-shadow: none !important;
}

.Dashboard-navbar :deep(.v-list) {
    display: flex;
    flex-direction: column;
    border-radius: 20px !important;
    color: white;
    margin-top: 15px;
}

.hidden {
    opacity: 0;
    transform: translateY(-100%);
    transition: transform 1s ease-in-out, opacity 1s ease-in-out;
    pointer-events: none;
}

.dashboard-nav :deep(.v-toolbar-title__placeholder) {
    display: flex;
    align-items: center;
    width: 400px !important;
}

.dropdown-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #10192D;
    text-transform: unset !important;
    color: white;
}

.dropdown-btn-light {
    display: flex;
    justify-content: space-between;
    background-color: #F8FAFC;
    text-transform: unset !important;
    color: #161D26 !important;

}
</style>