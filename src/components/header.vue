<template>
  <div>
    <div :class="isDark ? 'Dashboard-navbar':'Dashboard-navbar-light'">
      <v-container style="display: flex; align-items: center;">   
        <img src="/svg/Logo.svg" class="me-3"/>
        <v-app-bar-title class="flex-lg-and-up hidden-sm-and-down" :class="isDark ? 'nav-title':'nav-title-light'">Demo </v-app-bar-title>
        <div style="position: relative"> <NuxtLink to="#"> <img :src="props.Menuicon" /> </NuxtLink> </div>
        
        <div style="display: flex;margin-inline-start: auto;">
          <span class="flex-lg-and-up hidden-sm-and-down" :class="isDark ? 'text1':'text1-light'" style="align-items: center; display: flex;">{{props.text2}}</span>
          <NuxtLink :to="props.link" class="d-flex text2" style="align-self: center"> <span :class="isDark ? 'text2':'text2-light'">{{props.title}}</span></NuxtLink>
 

          <div v-if="hide" :class="isDark ? 'nav-btn-dark':'nav-btn-light'"  style="width: 380px; height: 58px ; flex-shrink: 0; border-radius: 20px; display: flex;position: absolute; right: 54%; margin-top: 25px">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" style="margin-left: 16px; margin-top: 20px; margin-right: 10px;" v-if="theme.global.current.value.dark">
                <path d="M10.3033 18.2301C14.6756 18.2301 18.22 14.6148 18.22 10.1551C18.22 5.69538 14.6756 2.08008 10.3033 2.08008C5.93105 2.08008 2.38664 5.69538 2.38664 10.1551C2.38664 14.6148 5.93105 18.2301 10.3033 18.2301Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path opacity="0.4" d="M19.0533 19.0809L17.3866 17.3809" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <img src="/svg/search-dark.svg" class="ml-3 me-3" width="20" v-else/>
              <v-text-field clearable  hide-details placeholder="Search in dashboard..." variant="plain" style="width: fit-content;"> </v-text-field>
          </div>

     
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn @click.prevent="emit('country',country)" class="me-4 mt-9 mb-9 dropdown-btn1i" :class="isDark ? 'dropdown-btn1i':'dropdown-btn1i-light'" v-bind="props" style="display: flex; align-self: flex-start; border-radius: 16px; box-shadow: none; height: 50px;">
              <img :src="flag" class="me-2" width="32" height="32" style="object-fit: cover;border-radius: 30px"/>
              <span class="me-2 flex-lg-and-up hidden-sm-and-down" :class="isDark ? 'country-text':'country-text-light'">{{country.slice(0, 5)}}</span>
              <img src="/svg/chevron-light.svg" v-if="theme.global.current.value.dark"/>
              <img src="/svg/chevron-dark.svg" v-else/>
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
        <v-btn  @click.prevent="navigateTo('/trade/wallet')" class="nav-btn" :class="isDark ? 'nav-btn':'nav-btn-light'">         
            <img src="/svg/white-wallet.svg" v-if="theme.global.current.value.dark"/> 
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" v-else>
              <path d="M22.7805 12.6201V14.6801C22.7805 15.2401 22.3205 15.7001 21.7505 15.7001H19.8205C18.7405 15.7001 17.7505 14.9101 17.6605 13.8301C17.6005 13.2001 17.8405 12.6101 18.2605 12.2001C18.6305 11.8201 19.1405 11.6001 19.7005 11.6001H21.7505C22.3205 11.6001 22.7805 12.0601 22.7805 12.6201Z" fill="#111111"/>
              <path d="M16.1603 13.9599C16.0703 12.9099 16.4503 11.8799 17.2103 11.1299C17.8503 10.4799 18.7403 10.0999 19.7003 10.0999H20.2703C20.5503 10.0999 20.7803 9.8699 20.7403 9.5899C20.4703 7.6499 18.7903 6.1499 16.7803 6.1499H6.78027C4.57027 6.1499 2.78027 7.9399 2.78027 10.1499V17.1499C2.78027 19.3599 4.57027 21.1499 6.78027 21.1499H16.7803C18.8003 21.1499 20.4703 19.6499 20.7403 17.7099C20.7803 17.4299 20.5503 17.1999 20.2703 17.1999H19.8203C17.9203 17.1999 16.3203 15.7799 16.1603 13.9599ZM13.7803 11.8999H7.78027C7.37027 11.8999 7.03027 11.5699 7.03027 11.1499C7.03027 10.7299 7.37027 10.3999 7.78027 10.3999H13.7803C14.1903 10.3999 14.5303 10.7399 14.5303 11.1499C14.5303 11.5599 14.1903 11.8999 13.7803 11.8999Z" fill="#111111"/>
              <path d="M14.9899 3.9801C15.2499 4.2501 15.0199 4.6501 14.6399 4.6501H6.80994C5.71994 4.6501 4.69994 4.9701 3.84994 5.5201C3.45994 5.7701 2.92994 5.5001 3.11994 5.0701C3.67994 3.7601 4.98994 2.8501 6.49994 2.8501H12.1199C13.2799 2.8501 14.3099 3.2601 14.9899 3.9801Z" fill="#111111"/>
            </svg>
        </v-btn>
        <span  class="nav-icon-text mb-3"  :class="isDark ? 'text-dark':'text-light'" style="margin-left: 3px; margin-top: -6px;">Wallet</span>     
      </div>

      <div v-if="icon2" style="display: flex; flex-direction: column; margin-top: 25px;">
        <Profile-nav  class="me-8"/>
        <span class="nav-icon-text mb-3" style="margin-left: 7px; margin-bottom: 6px;">Profile</span>    
      </div>

       <div v-if="icon3"  style="display: grid; position: relative; margin-top: 25px;">
          <v-btn @click.prevent="navigateTo('/profile')" class="me-5 nav-btn" :class="isDark ? 'nav-btn':'nav-btn-light'" style="border-radius: 20px;">         
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" v-if="theme.global.current.value.dark">
              <path d="M20.12 14.49L19.12 12.83C18.91 12.46 18.72 11.76 18.72 11.35V8.82C18.72 6.47 17.34 4.44 15.35 3.49C14.83 2.57 13.87 2 12.77 2C11.68 2 10.7 2.59 10.18 3.52C8.23003 4.49 6.88003 6.5 6.88003 8.82V11.35C6.88003 11.76 6.69003 12.46 6.48003 12.82L5.47003 14.49C5.07003 15.16 4.98003 15.9 5.23003 16.58C5.47003 17.25 6.04003 17.77 6.78003 18.02C8.72003 18.68 10.76 19 12.8 19C14.84 19 16.88 18.68 18.82 18.03C19.52 17.8 20.06 17.27 20.32 16.58C20.58 15.89 20.51 15.13 20.12 14.49Z" fill="#FAFAFA"/>
              <path d="M15.61 20.01C15.19 21.17 14.08 22 12.78 22C11.99 22 11.21 21.68 10.66 21.11C10.34 20.81 10.1 20.41 9.96002 20C10.09 20.02 10.22 20.03 10.36 20.05C10.59 20.08 10.83 20.11 11.07 20.13C11.64 20.18 12.22 20.21 12.8 20.21C13.37 20.21 13.94 20.18 14.5 20.13C14.71 20.11 14.92 20.1 15.12 20.07C15.28 20.05 15.44 20.03 15.61 20.01Z" fill="#FAFAFA"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" v-else>
              <path d="M20.1202 14.49L19.1202 12.83C18.9102 12.46 18.7202 11.76 18.7202 11.35V8.82C18.7202 6.47 17.3402 4.44 15.3502 3.49C14.8302 2.57 13.8702 2 12.7702 2C11.6802 2 10.7002 2.59 10.1802 3.52C8.23022 4.49 6.88022 6.5 6.88022 8.82V11.35C6.88022 11.76 6.69022 12.46 6.48022 12.82L5.47022 14.49C5.07022 15.16 4.98022 15.9 5.23022 16.58C5.47022 17.25 6.04022 17.77 6.78022 18.02C8.72022 18.68 10.7602 19 12.8002 19C14.8402 19 16.8802 18.68 18.8202 18.03C19.5202 17.8 20.0602 17.27 20.3202 16.58C20.5802 15.89 20.5102 15.13 20.1202 14.49Z" fill="#111111"/>
              <path d="M15.61 20.01C15.19 21.17 14.08 22 12.78 22C11.99 22 11.21 21.68 10.66 21.11C10.34 20.81 10.1 20.41 9.95996 20C10.09 20.02 10.22 20.03 10.36 20.05C10.59 20.08 10.83 20.11 11.07 20.13C11.64 20.18 12.22 20.21 12.8 20.21C13.37 20.21 13.94 20.18 14.5 20.13C14.71 20.11 14.92 20.1 15.12 20.07C15.28 20.05 15.44 20.03 15.61 20.01Z" fill="#111111"/>
            </svg>  
            <span style="position: absolute; background: #FF3E46; width: 18px; height: 18px;  border-radius: 6px; right: 9px; top: 8px; font-family: manrope;">8</span>
          </v-btn>
          <span class="nav-icon-text mb-3" :class="isDark ? 'text-dark':'text-light'" style="margin-right: 13px; margin-top: -8px;">Notification</span>     
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
const pageNumber = ref(1)
const country=ref('Brazil')
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
  flag.value = pinia.state?.allcountries[0].flag_url
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
)   
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
margin-top: 28px !important;
}
.dropdown-btn1i-light{
width: 135px;
height: 50px !important;
flex-shrink: 0;
border-radius: 20px;
background-color: #F8FAFC;
text-transform: unset !important;
color: #161D26 !important;
letter-spacing: 0px;
box-shadow: none;
margin-top: 28px !important;
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
height: 83px !important;
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
</style>