<template>
  <div class="head">

    <v-app-bar :elevation="2" class="px-5 pt-3 pb-3 d-flex">
        <template v-slot:prepend>
          <v-app-bar-nav-icon>
               <img src="/img/Logo.png"/>
          </v-app-bar-nav-icon>
        </template>
      
        <v-app-bar-title class="nav-title flex-lg-and-up hidden-sm-and-down">Demo </v-app-bar-title>

        <div style="position: relative;"> <NuxtLink to="#"> <img :src="props.Menuicon" /> </NuxtLink> </div>
       
        <template v-slot:append >
          <span class="text1 flex-lg-and-up hidden-sm-and-down">{{props.text2}}</span>
        <NuxtLink :to="props.link">  <span class="text2">{{props.title}}</span></NuxtLink>
 

       <div  v-if="hide"   style="width: 400px; height: 62px ; flex-shrink: 0; border-radius: 20px; background: #161D26; display: flex;position: absolute; right: 54%">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" style="margin-left: 16px; margin-top: 20px ">
                <path d="M10.3033 18.2301C14.6756 18.2301 18.22 14.6148 18.22 10.1551C18.22 5.69538 14.6756 2.08008 10.3033 2.08008C5.93105 2.08008 2.38664 5.69538 2.38664 10.1551C2.38664 14.6148 5.93105 18.2301 10.3033 18.2301Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path opacity="0.4" d="M19.0533 19.0809L17.3866 17.3809" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <v-text-field  hide-details placeholder="Search in dashboard..." variant="none" style="width: fit-content;"> </v-text-field>
        </div>

     
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn class="dropdown-btn me-5"
             
              v-bind="props">
              <v-img  width="20" class="me-3" :src="flag"/> 
              <span class="me-2 flex-lg-and-up hidden-sm-and-down">{{select}}</span>
              <v-icon icon="mdi-chevron-down"></v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-row dense style="max-width: 290px;">
              <v-col v-for="(item, index) in locations" class="" sm="4" 
                :key="index" >
            
                <!-- <v-col  v-for="item in locations" :key="item.title" sm="3"> -->
                <v-list-item-title @click="select=item.title; flag= item.image" style="text-align: -webkit-center;">
                 <v-img width="60" class="rounded-5" :src="item.image"></v-img>    
                <span> {{ item.title }} </span>
              </v-list-item-title>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
         
        </v-menu> 
      
      <div v-if="icon1" style="display: grid">
            <v-btn  @click.prevent="navigateTo('/trade/wallet')" class="me-" style="border-radius: 20px; background: #161D26; max-width: 60px; height: 61.2px; flex-shrink: 0;">         
                <img src="/svg/white-wallet.svg"/> 
            </v-btn>
            <span  class="nav-icon-text" style="margin-left: 3px;">Wallet</span>     
      </div>

      <div v-if="icon2" style="display: flex; flex-direction: column;">
        <Profile-nav  class="me-11"/>
        <span class="nav-icon-text" style="margin-left: 2px;">Profile</span>    
      </div>

       <div v-if="icon3"  style="display: grid">
          <v-btn @click.prevent="navigateTo('/profile')" class="me-5" style="border-radius: 20px; background: #161D26; max-width: 60px; height: 61.2px; flex-shrink: 0;">         
              <img src="/svg/Notification.svg"/>   
          </v-btn>
          <span class="nav-icon-text" style="margin-right: 13px ">Notification</span>     
      </div>
           

        </template>
      </v-app-bar>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const select =ref("Spanish")

const flag = ref("/img/china.png")

const locations = [
        { title: 'English', image:"/img/china.png" },
        { title: 'Spanish',  image:"/img/china.png" },
        { title: 'French',  image:"/img/china.png" },
        { title: 'French',  image:"/img/china.png" },
        { title: 'French',  image:"/img/china.png" },
        { title: 'Igbo', image:"/img/china.png" },
      ];
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

<style>
.v-toolbar{
align-items: center;
display: flex;
flex: 0 0 auto;
position: relative;
transition: inherit;
width: 100%;
padding: 32px;
/* max-height: 83px !important; */
background: rgba(22, 29, 38, 0.60)!important;
backdrop-filter: blur(20px)!important;
color: white!important;
box-shadow: none!important;
}
.nav-title{
color: #FFF;
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
.text2{
color: var(--Basic-White, #FFF);
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 800;
line-height: normal;
margin-right: 15px ;
cursor: pointer;
}
.dropdown-btn{
width: fit-content;
height: 50px !important;
flex-shrink: 0;
border-radius: 16px;
border: 1px solid var(--border, #303A46);
background: #161D26;
text-transform: unset !important;
color: white !important;
}
.v-list {
background: #12181F!important;
border-radius: 20px !important;
color: white;
margin-top: 15px;
}
.nav-icon-text{
color: var(--Gray-Medium-light, #969696);
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
::-webkit-input-placeholder {
color: #92929D;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
display: flex;
width: 156px !important;
height: 21.42px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
}
</style>