<template>
  <div class="head">

    <v-app-bar :elevation="2" class="px-15 pt-3 py-15 pb-3 d-flex">

      <v-container style="display: flex; align-items: center;">
        <template v-slot:prepend>
          <v-app-bar-nav-icon>
               <img src="/img/Logo.png"/>
          </v-app-bar-nav-icon>
        </template>
      
        <v-app-bar-title class="nav-title flex-lg-and-up hidden-sm-and-down">Demo </v-app-bar-title>

        <div style="position: relative;"> <NuxtLink to="#"> <img :src="props.Menuicon" /> </NuxtLink> </div>
       
        <!-- <template v-slot:append > -->
          <span class="text1 flex-lg-and-up hidden-sm-and-down" style="align-items: center; display: flex;">{{props.text2}}</span>
          <NuxtLink :to="props.link">  <span class="text2">{{props.title}}</span></NuxtLink>
 

       <div  v-if="hide"   style="width: 400px; height: 61px ; flex-shrink: 0; border-radius: 20px; background: #161D26; display: flex;position: absolute; right: 54%">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" style="margin-left: 16px; margin-top: 20px ">
                <path d="M10.3033 18.2301C14.6756 18.2301 18.22 14.6148 18.22 10.1551C18.22 5.69538 14.6756 2.08008 10.3033 2.08008C5.93105 2.08008 2.38664 5.69538 2.38664 10.1551C2.38664 14.6148 5.93105 18.2301 10.3033 18.2301Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path opacity="0.4" d="M19.0533 19.0809L17.3866 17.3809" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <v-text-field  hide-details placeholder="Search in dashboard..." variant="none" style="width: fit-content;"> </v-text-field>
        </div>

     
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn class="dropdown-btn1i me-3" v-bind="props" style="display: flex; align-self: flex-start; margin-top: 10px;">
              <v-img  width="24" class="me-3" :src="flag"/> 
              <span class="me-2 flex-lg-and-up hidden-sm-and-down">{{select}}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <g clip-path="url(#clip0_7328_44812)">
                  <path d="M12.0007 13.7951L16.9507 8.74609L18.3647 10.1884L12.0007 16.6797L5.63672 10.1884L7.05072 8.74609L12.0007 13.7951Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_7328_44812">
                    <rect width="24" height="24.48" fill="white" transform="translate(0 0.359375)"/>
                  </clipPath>
                </defs>
              </svg>
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
      
      <div v-if="icon1" style="display: grid; margin-top: 10px;">
            <v-btn  @click.prevent="navigateTo('/trade/wallet')" class="me-" style="border-radius: 20px; background: #161D26; min-width: 60px!important; height: 61.2px; flex-shrink: 0;">         
                <img src="/svg/white-wallet.svg"/> 
            </v-btn>
            <span  class="nav-icon-text" style="margin-left: 3px;">Wallet</span>     
      </div>

      <div v-if="icon2" style="display: flex; flex-direction: column; margin-top: 10px;">
        <Profile-nav  class="me-11"/>
        <span class="nav-icon-text" style="margin-left: 2px;">Profile</span>    
      </div>

       <div v-if="icon3"  style="display: grid; position: relative; margin-top: 10px;">
          <v-btn @click.prevent="navigateTo('/profile')" class="me-5" style="border-radius: 20px; position: relative; background: #161D26; min-width: 60px !important; height: 61.2px; flex-shrink: 0;">         
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M20.12 14.49L19.12 12.83C18.91 12.46 18.72 11.76 18.72 11.35V8.82C18.72 6.47 17.34 4.44 15.35 3.49C14.83 2.57 13.87 2 12.77 2C11.68 2 10.7 2.59 10.18 3.52C8.23003 4.49 6.88003 6.5 6.88003 8.82V11.35C6.88003 11.76 6.69003 12.46 6.48003 12.82L5.47003 14.49C5.07003 15.16 4.98003 15.9 5.23003 16.58C5.47003 17.25 6.04003 17.77 6.78003 18.02C8.72003 18.68 10.76 19 12.8 19C14.84 19 16.88 18.68 18.82 18.03C19.52 17.8 20.06 17.27 20.32 16.58C20.58 15.89 20.51 15.13 20.12 14.49Z" fill="#FAFAFA"/>
              <path d="M15.61 20.01C15.19 21.17 14.08 22 12.78 22C11.99 22 11.21 21.68 10.66 21.11C10.34 20.81 10.1 20.41 9.96002 20C10.09 20.02 10.22 20.03 10.36 20.05C10.59 20.08 10.83 20.11 11.07 20.13C11.64 20.18 12.22 20.21 12.8 20.21C13.37 20.21 13.94 20.18 14.5 20.13C14.71 20.11 14.92 20.1 15.12 20.07C15.28 20.05 15.44 20.03 15.61 20.01Z" fill="#FAFAFA"/>
            </svg>  
            <span style="position: absolute; background: #FF3E46; width: 20px; height: 21px;  border-radius: 6px; right: 9px; top: 12px; font-family: manrope;">8</span>
          </v-btn>
          <span class="nav-icon-text" style="margin-right: 13px ">Notification</span>     
      </div>
           

        <!-- </template> -->

      </v-container>
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
background: rgba(18, 24, 31, 0.85) !important;
backdrop-filter: blur(18.200000762939453px);
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
.dropdown-btn1i{
width: fit-content !important;
height: 58px !important;
flex-shrink: 0;
border-radius: 20px !important;
/* border: 1px solid var(--border, #303A46) !important; */
background-color: #161D26 !important;
text-transform: unset !important;
color: white !important;
letter-spacing: 0px;
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

::-webkit-input-placeholder {
color: #92929D !important;
font-family: Poppins !important;
font-size: 14px !important;
font-style: normal;
font-weight: 400 !important;
line-height: normal;
  }
</style>