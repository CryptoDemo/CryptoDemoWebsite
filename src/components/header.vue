<template>
  <div class="head">

    <v-app-bar :elevation="2" class="px-10 pt-3 pb-3  d-flex">
        <template v-slot:prepend>
          <v-app-bar-nav-icon>
               <img src="/img/Logo.png"/>
          </v-app-bar-nav-icon>
        </template>
      
        <v-app-bar-title class="nav-title">Demo</v-app-bar-title>
      
        <template v-slot:append >
          <span class="text1">{{props.text2}}</span>
        <NuxtLink :to="props.link">  <span class="text2">{{props.title}}</span></NuxtLink>


          <!-- <v-btn icon="mdi-heart"></v-btn> -->
      
        <v-menu :location="location">
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              
              class="dropdown-btn"
              dark
              v-bind="props">
              <v-img  width="20" class="me-3" :src="flag"/> 
              <span class="me-2">{{select}}</span>
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
    link:""
  }
  
)   
</script>

<style scoped>
.v-toolbar{
align-items: center;
display: flex;
flex: 0 0 auto;
position: relative;
transition: inherit;
width: 100%;
background: rgba(22, 29, 38, 0.60)!important;
backdrop-filter: blur(20px)!important;
height: 70px!important;
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
width: 142px;
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
</style>