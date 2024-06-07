<template>
  <div class="dashboard-nav">
    <div :class="isDark ? 'Dashboard-navbar':'Dashboard-navbar-light'">
      <v-container style="display: flex; align-items: center;">   
        <img src="/svg/Logo.svg" class="me-3"/>
        <v-app-bar-title class="flex-lg-and-up hidden-sm-and-down" :class="isDark ? 'nav-title':'nav-title-light'">Demo 
          <v-text-field clearable  hide-details placeholder="Search in dashboard..." variant="plain" v-if="hide" :class="isDark ? 'nav-btn-dark':'nav-btn-light'" style="height: 55px; flex-shrink: 0; border-radius: 18px; margin-left: 20px; align-content: flex-end;"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" style="margin-left: 16px; margin-top: 16px; margin-right: 10px; bottom: 10px; position: relative;">
              <path d="M10.3033 18.2301C14.6756 18.2301 18.22 14.6148 18.22 10.1551C18.22 5.69538 14.6756 2.08008 10.3033 2.08008C5.93105 2.08008 2.38664 5.69538 2.38664 10.1551C2.38664 14.6148 5.93105 18.2301 10.3033 18.2301Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M19.0533 19.0809L17.3866 17.3809" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </v-text-field>
  
        </v-app-bar-title>


        <div  style="position: relative"> <NuxtLink to="#"> <img :src="props.Menuicon" /> </NuxtLink> </div>
        
        <div class="header-nav-div align-lg-center" style="display: flex;margin-inline-start: auto;">
          <span class="flex-lg-and-up hidden-sm-and-down" :class="isDark ? 'text1':'text1-light'" style="align-items: center; display: flex;">{{props.text2}}</span>
          <NuxtLink :to="props.link" class="d-flex text2" style="align-self: center"> <span :class="isDark ? 'text2':'text2-light'">{{props.title}}</span></NuxtLink>

          <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn @click.prevent="handleButtonClick(country)" class="me-4 mt-8 mb-9 dropdown-btn1i" :class="isDark ? 'dropdown-btn1i':'dropdown-btn1i-light'" v-bind="props" style="display: flex; align-self: flex-start; border-radius: 18px; box-shadow: none; height: 52px; margin-top: px;">
                <img :src="flag" class="me-2" width="32" height="32" style="object-fit: cover;border-radius: 30px"/>
                <span class="me-2 flex-lg-and-up hidden-sm-and-down" :class="isDark ? 'country-text':'country-text-light'">{{Countryname}}</span>
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
              </v-btn>
            </template>

            <v-list :class="isDark ? 'country-dropdown':'country-dropdown-light'">
              <v-list-item style="display: contents">
                <v-row dense style="max-width: 250px;">
                  <v-col v-for="(item, index) in pinia.state.allcountries" sm="12" :key="index">
                  <v-list-item @click="Countryname=item.country_code; country=item.country_name; flag= item.flag_url;" style="display: flex;">
                    <div style="display: flex; align-items: center; ">
                      <img width="35" height="35" class="me-3" :src="item.flag_url" style="object-fit: cover;border-radius: 30px"/> 
                      <span class="country-name" :class="isDark ? 'country-name' : 'country-name-light'">{{ item.country_name }}</span>
                  </div>
                  </v-list-item>
                </v-col>
                </v-row>
              </v-list-item>
            </v-list>
          
          </v-menu> 
        
          <div v-if="icon1" style="display: grid; margin-top: 25px; margin-inline-end: -4px;">
            <nuxt-link to="/account/trade/wallet">
              <v-btn class="nav-btn flex-lg-and-up hidden-sm-and-down" :class="isDark ? 'nav-btn':'nav-btn-light'"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" :class="isDark ? 'close-btn':'sear-btn-light'">
                  <path d="M22.7805 12.6201V14.6801C22.7805 15.2401 22.3205 15.7001 21.7505 15.7001H19.8205C18.7405 15.7001 17.7505 14.9101 17.6605 13.8301C17.6005 13.2001 17.8405 12.6101 18.2605 12.2001C18.6305 11.8201 19.1405 11.6001 19.7005 11.6001H21.7505C22.3205 11.6001 22.7805 12.0601 22.7805 12.6201Z" />
                  <path d="M16.1603 13.9599C16.0703 12.9099 16.4503 11.8799 17.2103 11.1299C17.8503 10.4799 18.7403 10.0999 19.7003 10.0999H20.2703C20.5503 10.0999 20.7803 9.8699 20.7403 9.5899C20.4703 7.6499 18.7903 6.1499 16.7803 6.1499H6.78027C4.57027 6.1499 2.78027 7.9399 2.78027 10.1499V17.1499C2.78027 19.3599 4.57027 21.1499 6.78027 21.1499H16.7803C18.8003 21.1499 20.4703 19.6499 20.7403 17.7099C20.7803 17.4299 20.5503 17.1999 20.2703 17.1999H19.8203C17.9203 17.1999 16.3203 15.7799 16.1603 13.9599ZM13.7803 11.8999H7.78027C7.37027 11.8999 7.03027 11.5699 7.03027 11.1499C7.03027 10.7299 7.37027 10.3999 7.78027 10.3999H13.7803C14.1903 10.3999 14.5303 10.7399 14.5303 11.1499C14.5303 11.5599 14.1903 11.8999 13.7803 11.8999Z"/>
                  <path d="M14.9899 3.9801C15.2499 4.2501 15.0199 4.6501 14.6399 4.6501H6.80994C5.71994 4.6501 4.69994 4.9701 3.84994 5.5201C3.45994 5.7701 2.92994 5.5001 3.11994 5.0701C3.67994 3.7601 4.98994 2.8501 6.49994 2.8501H12.1199C13.2799 2.8501 14.3099 3.2601 14.9899 3.9801Z"/>
                </svg>
              </v-btn>
          </nuxt-link>
            <span  class="nav-icon-text mb-3 flex-lg-and-up hidden-sm-and-down"  :class="isDark ? 'text-dark':'text-light'" style="margin-left: 3px;">Wallet</span>     
          </div>

          <div class="profile-div" v-if="icon2" style="display: flex; flex-direction: column; margin-top: 27px;">
            <Profile-nav  class="profile-nav me-8"/>
            <span class="nav-icon-text mb-3 flex-lg-and-up hidden-sm-and-down" :class="isDark ? 'text-dark':'text-light'" style="margin-left: 6px;">Profile</span>    
          </div>

          <div v-if="icon3"  style="display: grid; position: relative; margin-top: 27px;">
            <Notifications/>
            <span class="nav-icon-text mb-3 flex-lg-and-up hidden-sm-and-down" :class="isDark ? 'text-dark':'text-light'" style="margin-right: 13px;">Notification</span>     
          </div>
    </div>   
    </v-container>
 
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import { getcountries } from "@/composables/requests/admin";

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore()
const emit = defineEmits(['country'])
const pageNumber = ref(1);
const country = ref('Brazil');
const Countryname = ref('');
const selectedCountry  = ref(Countryname);


const flag = ref('');
try {
  const data = await getcountries(pageNumber.value);
  if (data.success) {
    const fetchedcountries = data.data.result;

    const storedcountriesids = pinia.state.allcountries.map(item => item.id);
    // Check if there are any new items in the fetched data
    const newItems = fetchedcountries.filter(item => !storedcountriesids.includes(item.id));

    if (newItems.length > 0) {
      console.log('fetching')
      pinia.setallcountries([...pinia.state.allcountries, ...newItems]);
      // flag.value = pinia.state?.allcountries[0].flag_url;
    }
  } else {
    
  }
} catch (error) { 
};

onMounted(()=>{{
  flag.value = pinia.state?.allcountries[0]?.flag_url;
  Countryname.value = pinia.state?.allcountries[0]?.country_code
}})

const props = defineProps(
  {
  title:String,
  text2:String,
  link:String,
  icon:String,
  Menuicon:String,
  icon1:Boolean,
  icon2:Boolean,
  icon3:Boolean,
  hide: Boolean,
  }  
) ;  


const handleButtonClick = (country) => {
  toggleChevron();
  emit('country', country);
};

const isChevronToggled = ref(false);
const toggleChevron = () => {
      isChevronToggled.value = !isChevronToggled.value;
};
</script>

<style scoped>
.Dashboard-navbar{
border-bottom: 1px solid #10192D;
background: rgba(6, 10, 29, 0.60)!important;
backdrop-filter: blur(50px) !important;
display: flex !important;
align-items: center !important;
flex: 0 0 auto;
position: fixed;
top: 0;
width: 100%;
height: 90px;
z-index: 100;
color: white!important;
box-shadow: none!important;
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
color: black!important;
box-shadow: none!important;
}
.nav-title{
font-family: Manrope;
color: #FFF;
font-size: 20px !important;
font-style: normal;
font-weight: 800 !important;
line-height: 120%; /* 24px */
}
.nav-title-light{
color: var(--Black-80, #1B2537);
font-family: Manrope;
font-size: 20px;
font-style: normal;
font-weight: 800;
line-height: 120%; /* 24px */
}
.text1{
color: var(--Basic-White, #FFF);
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-right: 15px;
}
.text1-light{
color: #000;
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-right: 15px;
}
.text2{
color: #FFF;
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 800;
line-height: normal;
margin-right: 15px ;
cursor: pointer;
}
.text2-light{
color: #000;
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 800;
line-height: normal;
margin-right: 15px ;
cursor: pointer;
}
.dropdown-btn1i{
width: 135px;
flex-shrink: 0;
border-radius: 20px;
background: #10192D;
text-transform: unset !important;
color: white;
letter-spacing: 0px;
}
.dropdown-btn1i-light{
width: 135px;
flex-shrink: 0;
border-radius: 20px;
background-color: #F8FAFC;
text-transform: unset !important;
color: #161D26 !important;
letter-spacing: 0px;
box-shadow: none;
}
.nav-icon-text{
color: #969696;
text-align: center;
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 300;
line-height: normal;
}
.nav-title{
color: var(--Colors-Base-white, #FFF);
font-family: Manrope !important;
font-size: 20px !important;
font-style: normal !important;
font-weight: 800!important;
line-height: 120% !important; /* 24px */
}
.v-toolbar__content, .v-toolbar__extension {
align-items: center;
display: flex;
flex: 0 0 auto;
position: relative;
transition: inherit;
width: 100%;
/* height: 83px !important; */
}
.country-text{
color: var(--Colors-Base-white, #FFF);
text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.country-text-light{
color: var(--Black-100, #060A1D);
text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.country-dropdown{
border-radius: 15px;
border: 0.5px solid #2f3946;
background: #1B2537 !important;
backdrop-filter: blur(50px) !important;
height: 320px !important;
border-radius: 20px !important;
border-radius: 15px;
border: 0.5px solid #354356;
color: white;
margin-top: 15px;
box-shadow: none  !important;
height: 320px !important;
}
.country-dropdown-light{
border-radius: 15px;
background: #fff !important;
border: 1px solid #DBE8FF !important;
border-radius: 20px !important;
color: black;
margin-top: 15px;
box-shadow: none  !important;
height: 320px !important;
}
.Dashboard-navbar :deep(.v-list){
display: flex;
flex-direction: column;
border-radius: 20px !important;
color: white;
margin-top: 15px;
}
.nav-btn {
border-radius: 20px; 
background: #10192D !important; 
max-width: 52px!important;
height: 53.2px !important;
flex-shrink: 0;
box-shadow: none;
}
.nav-btn-dark{
background: #10192D !important; 
}
.nav-btn-light {
background: #F8FAFC !important; 
}
.v-btn--size-default{
  min-width: 0px !important;
}
.search-btn{
color: white;
}
.search-btn-dark{
fill: #10192D;
}
.close-btn{
fill: white;
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
.dashboard-nav :deep(.v-toolbar-title__placeholder){
  display: flex;
  align-items: center;
  width: 400px !important;
}

.dashboard-nav :deep(.v-field__clearable > .v-icon){
opacity: var(--v-medium-emphasis-opacity);
margin-right: 15px;
position: relative;
bottom: -2px;
}
.dashboard-nav :deep(.v-text-field .v-field--no-label input, .v-text-field .v-field--active input) {
  opacity: 1;
  margin-bottom: 8px;
}
.country-name{
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
::-webkit-scrollbar {
  display: none;
}


@media screen and (max-width: 600px) {
.profile-nav{
margin-inline-end: 0px !important;

}
.profile-div{
margin-top: 15px !important;
}
.nav-btn{
  background: inherit !important;
}
.dropdown-btn1i{
  margin-top: 40px !important;
}
.v-btn__content {
  margin-top: 9px !important;
}
.header-nav-div{
  align-items: center !important;
}

}
</style>