<template>
  <div class="head" >
    <v-app-bar :elevation="2" class="px-10 pt-3 pb-3  d-flex" :class="isDark ? 'navbar-bg':'navbar-bg-light'" >
  
        <template v-slot:prepend>
          <v-app-bar-nav-icon>
               <img src="/img/Logo.png"/>
          </v-app-bar-nav-icon>
        </template>
      
        <v-app-bar-title  :class="isDark ? 'nav-title':'nav-title-light'" >Demo</v-app-bar-title>
 
        <div style="position: absolute;left: 16%; display: flex; align-items: center; ">
             <v-btn class="header-link"> <NuxtLink to="#"> <span :class="isDark ? 'nav-subtitle':'nav-subtitle-light'" >Create an offer</span> </NuxtLink></v-btn>
             <v-btn class="header-link"><NuxtLink to="#"> <span :class="isDark ? 'nav-subtitle':'nav-subtitle-light'" >Wallet</span> </NuxtLink></v-btn>
             <div class="text-center">
              <v-menu open-on-hover>
                  <template v-slot:activator="{ props }">
                      <v-btn color="" class="header-link" :class="isDark ? 'nav-subtitle':'nav-subtitle-light'" v-bind="props">Gift Card Hub
                        <v-icon color="primary" class="mt-1"  icon="mdi-chevron-down"></v-icon>
                      </v-btn>
                  </template>

                  <v-list class="hub-dropdown">
                    <v-row>
                      <v-col>
                        <div style="border-radius: 10px; background: #10192D; height: 249px; display: flex;">
                          <img src="/svg/hub.svg" style="display: flex; margin: auto;"/>
                        </div>
                      </v-col>
                      <v-col cols="7">
                        <v-list-item v-for="(item, index) in items" :key="index" :style="index === 1? 'margin-bottom: 30px; margin-top: 30px' : ''">
                          <div class="d-flex">
                            <img :src="item.icon" class="me-4"/>
                            <div style="display: flex;">
                              <div class="d-flex" style="flex-direction: column;">
                                <v-list-item-title class="icon-text1">{{ item.title }}</v-list-item-title>
                                <span class="icon-subtitle1 mt-1">{{ item.subtitle }}</span>
                              </div>
                                <div style="display: flex; align-items: center;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                      <path d="M10.4004 7.5L15.4004 12.5L10.4004 17.5" stroke="#2973FE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
            <v-btn class="header-link"> <NuxtLink to="#"> <span :class="isDark ? 'nav-subtitle':'nav-subtitle-light'" >Become a Vendor</span></NuxtLink> </v-btn>
        </div>
       
      
        <template v-slot:append >

          <v-btn class="header-link me-3">  <NuxtLink :to="props.link">  <span class="text2 d-flex" style="align-self: center; margin: auto;" :class="isDark ? 'nav-subtitle':'nav-subtitle-light'">{{props.title}}</span></NuxtLink> </v-btn>

          <NuxtLink to="/authentication/register">  
            <v-btn class="register me-3" style="border-radius: 10px !important;"> <span class="register-text" >Register </span></v-btn>
          </NuxtLink>

    
      
        <v-menu :location="location">
          <template v-slot:activator="{ props }">
            <v-btn  class="me-4" :class="isDark ? 'dropdown-btn':'dropdown-btn-light'"
              dark
              v-bind="props">
              <v-img  width="20" class="me-3" :src="flag"/> 
              <span class="me-2" :class="isDark ? 'nav-subtitle':'nav-subtitle-light'">{{select}}</span>
              <v-icon icon="mdi-chevron-down" style="color: #8E9BAE;"></v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-row dense style="max-width: 290px;">
              <v-col v-for="(item, index) in locations" class="" sm="4" 
                :key="index" >
            
                
                <v-list-item-title @click="select=item.title; flag= item.image" style="text-align: -webkit-center;">
                 <v-img width="50" class="rounded-5" :src="item.image"></v-img>    
                <span> {{ item.title }} </span>
              </v-list-item-title>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
         
        </v-menu>

        <ToggleBtn  class="me-3"/>
        </template>
      </v-app-bar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';



const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);

const select =ref("NGN")

const flag = ref("/svg/nigeria-flag.svg")

const locations = [
        { title: 'USA', image:"/img/china.png" },
        { title: 'ARM',  image:"/img/china.png" },
        { title: 'ALG',  image:"/img/china.png" },
        { title: 'NGN',  image:"/img/china.png" },
        { title: 'NGN',  image:"/img/china.png" },
        { title: 'Igbo', image:"/img/china.png" },
      ];
const props = defineProps(
  {
    title:String,
    text2:String,
    link:""
  }
)

const items = [
        {icon:'/svg/bitcoin-hub.svg', title: 'Buy with bitcoin', subtitle:'Search for offers to buy gift cards with Bitcoin.'},
        {icon:'/svg/bitcoin-hub.svg', title: 'Buy with Tether', subtitle:'Search for offers to buy gift cards with Tether.'},
        {icon:'/svg/bitcoin-hub.svg', title: 'Buy with Binance Coin', subtitle:'Search for offers to buy gift cards with Binance Coin.'},
        
      ];
  
</script>

<style scoped>
.navbar-bg{
border-bottom: 1px solid #10192D;
background: rgba(6, 10, 29, 0.60)!important;
backdrop-filter: blur(50px);
display: flex;
height: 80px;
padding: 0px 120px;
justify-content: space-between;
justify-content: center;
align-items: center;
flex-shrink: 0;
}
.navbar-bg-light{
border-bottom: 1px solid #E2E8F0;
background: rgba(255, 255, 255, 0.60) !important;
backdrop-filter: blur(50px);
box-shadow: none;
display: flex;
height: 80px;
padding: 0px 120px;
justify-content: space-between;
justify-content: center;
align-items: center;
flex-shrink: 0;
}
.nav-title{
color: var(--Colors-Base-white, #FFF);
font-family: "SF Pro Display";
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.nav-title-light{
color: #10192D;
font-family: "SF Pro Display";
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.text2{
color: var(--Colors-Base-white, #FFF);
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor: pointer;
}
.dropdown-btn{
display: flex;
width: 111px;
height: 40px !important;
padding: 10px 8px;
justify-content: space-between;
align-items: center;
border-radius: 100px !important;
background: #10192D !important;
text-transform: unset !important;
color: white !important;
}
.dropdown-btn-light{
display: flex;
width: 111px;
height: 40px !important;
padding: 10px 8px;
justify-content: space-between;
align-items: center;
border-radius: 100px !important;
background: #F8FAFC !important;
text-transform: unset !important;
color: white !important;
}
.v-list {
background: rgba(6, 10, 29, 0.70)!important;
border-radius: 20px !important;
color: white;
margin-top: 15px;
cursor: pointer;
}
.nav-subtitle{
display: flex;
color: var(--Colors-Base-white, #FFF);
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
justify-content: center;
align-items: center;
letter-spacing: 0px!important;
}
.nav-subtitle-light{
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
.register{
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
.register-text{
color: var(--Colors-Base-white, #FFF);
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.header-link{
display: flex;
height: 50px;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
text-indent: unset !important;
text-transform: unset !important;
letter-spacing: 0px!important;
}

.hub-dropdown{
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

.icon-text1{
color: var(--Colors-Base-white, #FFF);
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
display: flex;
align-items: center;
}

.icon-subtitle1{
color: #64748B;
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
</style>