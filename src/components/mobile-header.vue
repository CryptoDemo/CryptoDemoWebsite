<template>
  <div style="position:  relative;">
    
    <div  style="position: fixed; top: 0; flex-wrap: wrap;  z-index: 10000;">
    <ClientOnly>
      <v-app-bar :class="isDark ? 'navbar-bg':'navbar-bg-light'">
        
        <div style="display: flex; align-items: center; width: fit-content;">
          
          <v-toolbar-title class="header-title" :class="isDark ? 'header-title':'header-title-light'">Demo Web</v-toolbar-title>
          
          <v-spacer></v-spacer>
         
        
          <Harmbuger @click.prevent="ToggleMenu()" :is-open="drawer"  style="position: absolute; right: -10%;"/>
        
        </div>
      </v-app-bar>
      
      <nav :class="navbarClass">
          <v-navigation-drawer v-model="drawer" location="top" :class="isDark ? 'v-navigation-drawer':'v-navigation-drawer-light'" style="padding: 15px;">
             <v-menu style="position: relative !important; height: auto; z-index: 10000;">
            <template v-slot:activator="{ props }">
              <v-btn  class="me-" :class="isDark ? 'dropdown-mobile':'dropdown-mobile-light'" v-bind="props">
                <img  width="32" class="me-3" :src="flag" style="border-radius: 10px;"/> 
                <span class="me-2" :class="isDark ? 'nav-subtitle':'nav-subtitle-light'">{{select}}</span>
                <v-icon icon="mdi-chevron-down" style="color: #8E9BAE; position: absolute; right: 3%;"></v-icon>
              </v-btn>
            </template>
  
            <v-list  :class="isDark ? 'mobile-bg':'mobile-bg-light'" style="border-radius: 15px; max-height: 552px; border: 0.5px solid #2f3946; margin-top: 10px;">
              <v-list-item>
                <div @click.stop style="margin-top: 7px; margin-bottom: 15px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" style="position: absolute; top: 29px; margin-left: 19px;">
                      <path d="M17 17L12.9497 12.9497M12.9497 12.9497C14.2165 11.683 15 9.933 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C9.933 15 11.683 14.2165 12.9497 12.9497Z" stroke="#8E9BAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <v-textarea clearable variant="text" rows="1" no-resize  placeholder="Search for Country" v-model="input" style=" border: 1px solid #64748B; height: 55px;  border-radius: 30px; padding-left: 30px; align-items: center; width: 100%;"></v-textarea>
                   
                </div>
                <v-row dense style="max-width: auto; flex-direction: column;">
                <v-col v-for="(item, index) in filteredItems?.length ? filteredItems : locations" :key="index" class="">
                
                  <v-list-item-title class="py-3" @click="select=item.countryName; flag= item.image" style="display:flex;">
                    
                   <img width="32" class="rounded-5 me-2" :src="item.image" style="border-radius: 10px;"/>    
                   <span class="country-name" style="display: flex; align-items: center;"> {{ item.countryName }} </span>
                </v-list-item-title>
                  </v-col>
                </v-row>
              </v-list-item>
            </v-list>
           
             </v-menu> 
        
          <div style="margin-top: 25px;">
            <v-btn :class="isDark ? 'mobile-btn':'mobile-btn-light'">Create an offer</v-btn>
          </div>
          <div :class="isDark ? 'mobile-btn':'mobile-btn-light'" style="margin-bottom: 17px; margin-top: 17px;">
            <v-btn :class="isDark ? 'mobile-btn':'mobile-btn-light'" >Wallet</v-btn>
          </div>
        
  
              <v-menu style="position: relative; z-index: 10000;">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" :class="isDark ? 'mobile-btn':'mobile-btn-light'">Gift Card Hub
                          <v-icon color="primary" class="mt-1"  icon="mdi-chevron-down"></v-icon>
                        </v-btn>
                    </template>
                    <div style="display: flex; align-items: center;  justify-content: end; position: relative; z-index: 1000000;">
                    <v-list style="width: 100%;" :class="isDark ? 'card-hub':'card-hub-light'">
                      <div>
                      
                        <div>
                          <v-list-item v-for="(item, index) in items" :key="index" :style="index === 1? 'margin-bottom: 30px; margin-top: 30px' : ''">
                            <div class="d-flex">
                              <img :src="item.icon1" class="me-4" v-if="theme.global.current.value.dark"/>
                              <img :src="item.icon2" class="me-4" v-else/>
                              <div style="display: flex;">
                                <div class="d-flex" style="flex-direction: column;">
                                  <v-list-item-title :class="isDark ? 'icon-text1':'icon-text1-light'">{{ item.title }}</v-list-item-title>
                                  <span class="icon-subtitle1 mt-1">{{ item.subtitle }}</span>
                                </div>
                                  <div style="display: flex; align-items: center;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" style="position: absolute; right: 1px;" v-if="theme.global.current.value.dark">
                                        <path d="M10.7988 7.5L15.7988 12.5L10.7988 17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
  
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"  style="position: absolute; right: 1px;" v-else>
                                      <path d="M10 7.5L15 12.5L10 17.5" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
              <div :class="isDark ? 'mobile-btn':'mobile-btn-light'" style="margin-top: 25px;">
                 <v-btn :class="isDark ? 'mobile-btn':'mobile-btn-light'">Become a Vendor</v-btn>
              </div>
  
          <div style="display: flex; justify-content: flex-start; margin-top: 25px; align-items: center; margin-left: 10px;">
             <ToggleBtn class="me-3"/>
             <span :class="isDark ? 'Switch-text':'Switch-text-light'">Switch to <span class="switch-hint">light</span> Mode</span>
          </div>
          <div :class="isDark ? 'mobile-btn':'mobile-btn-light'" style="margin-top: 5px; margin-bottom: 20px; padding: 10px;">
            <v-btn :class="isDark ? 'mobile-btn':'mobile-btn-light'" style="width: 100%; justify-content: center; border-radius: 10px !important;">Log In</v-btn>
          </div>
  
          <div :class="isDark ? 'mobile-btn':'mobile-btn-light'" style="margin-bottom: 30px; border-radius: 10px !important; background: #2873FF; padding: 11px;">
            <v-btn class="mobile-btn" style="background: #2873FF !important; color: white; width: 100%; justify-content: center; border-radius: 10px !important;">Register</v-btn>
          </div>
        </v-navigation-drawer>
      </nav>
      </ClientOnly>
    </div>
  <!-- </nav> -->

   </div>
  </template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';


const drawer = ref(false)
const navbarClass = ref('closed');
const ToggleMenu =() =>{
drawer.value = !drawer.value
navbarClass.value = drawer.value ? 'open' : 'closed';
};


const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);

const select =ref("NGN")

const flag = ref("/flags/ng.svg")

const locations = ref([
  { countryName: 'Russia',  image:"/flags/rs.svg" },
  { countryName: 'United States',  image:"/flags/us.svg" },
  { countryName: 'Oman',  image:"/flags/om.svg" },
  { countryName: 'Argentina',  image:"/flags/ag.svg" },
  { countryName: 'France',  image:"/flags/fr.svg" },
  { countryName: 'Nigeria', image:"/flags/ng.svg" },
  ]);


  let input = ref("");   

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
  {icon1:'/svg/bitcoin-hub.svg', icon2:'/svg/btc-logo-light1.svg', title: 'Buy with bitcoin', subtitle:'Search for offers to buy gift cards with Bitcoin.'},
  {icon1:'/svg/btc-logolight.svg', icon2:'/svg/tether-light.svg', title: 'Buy with Tether', subtitle:'Search for offers to buy gift cards with Tether.'},
  {icon1:'/svg/btc-logodark.svg', icon2:'/svg/binance-lightlogo.svg', title: 'Buy with Binance Coin', subtitle:'Search for offers to buy gift cards with Binance Coin.'},
        
  ];

 
</script>

<style scoped>
.navbar-bg{
border-bottom: 1px solid #10192D;
background: rgba(6, 10, 29, 0.60)!important;
backdrop-filter: blur(50px);
display: flex !important;
height: 80px;
/* position: fixed !important; */
/* z-index: 10000; */
top: 0 !important;
justify-content: center !important;
width: 100% !important;
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
.v-toolbar__content, .v-toolbar__extension {
    align-items: flex-start !important;
    display: flex !important;
   
    position: relative;
   
    width: 100% !important;
}

.navbar-bg-light{
border-bottom: 1px solid #E2E8F0;
background: rgba(255, 255, 255, 0.60) !important;
/* backdrop-filter: blur(50px); */
box-shadow: none!important;
display: flex;
height: 80px;
margin: auto;
justify-content: center;
align-items: center;
flex-shrink: 0;
position: fixed;
top: 0 !important;
}
.v-navigation-drawer{
/* transform: translateY(0%); */
position: relative !important;
display: flex;
width: 100vw !important;
/* overflow: scroll !important; */
/* z-index: 10000!important; */
/* left: 0px; */
/* width: calc(100% + 0px); */
height: 100% !important;
top: 9% !important;
border-radius: 15px;
background: #060A1D !important;
box-sizing: border-box;
}
.v-navigation-drawer-light{
/* z-index: 904; */
transform: translateY(0%);
left: 0px;
width: calc(100% + 0px);
top: 0 !important;
border-radius: 15px;
background: #fff !important;
}
.header-title{
font-family: "SF Pro Display";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
display: contents;
width: fit-content !important;
}
.header-title-light{
font-family: "SF Pro Display";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
color: #060A1D !important;
}
.dropdown-mobile{
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
.dropdown-mobile-light{
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
.mobile-bg{
border-radius: 100px;
background: #10192D !important; 
cursor: pointer;
}
.mobile-bg-light{
border-radius: 100px;
background: #fff !important; 
cursor: pointer;
text-transform: unset;
}
.country-name{
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.14px;

}
.mobile-btn{
background: #060A1D !important;
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
.mobile-btn-light{
background: #fff !important;
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

.icon-text1{
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
display: flex;
align-items: center;
}

.icon-text1-light{
color: #10192D;
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.icon-subtitle1{
color: #8E9BAE;
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.card-hub{
background: #060A1D !important;
}

.card-hub-light{
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
</style>