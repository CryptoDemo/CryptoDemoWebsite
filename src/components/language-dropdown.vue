<template>
  <div>
      <v-menu :Country="Country">
          <template v-slot:activator="{ props }">
            <v-btn                       
             :class="isDark ? 'dropdown-btn':'dropdown-btn-light'"
              dark
              v-bind="props">
               <v-img  width="30" class="me-3" :src="flag"/> 
              <span class="me-2">{{select}}</span>
              <v-icon icon="mdi-chevron-down" style="position: absolute;right: 10px "></v-icon>
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
      
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);

const select =ref("English")
const flag = ref("/svg/ball.svg")

const locations = [
        { title: 'Algeria', image:"/svg/ball.svg" },
        { title: 'English',  image:"/svg/ball.svg" },
        { title: 'Spanish',  image:"/svg/ball.svg" },
        { title: 'NGN',  image:"/svg/ball.svg" },
        { title: 'NGN',  image:"/svg/ball.svg" },
        { title: 'Igbo', image:"/img/china.png" },
      ];
</script>

<style scoped>
.dropdown-btn{
display: flex;
width: 172px;
height: 48px !important;
padding: 10px 4px;
justify-content: space-between;
align-items: center;
flex-shrink: 0;
border-radius: 100px;
border: 1px solid #64748B;
background: #10192D;
text-transform: unset !important;
color: white !important;
position: relative;
}
.dropdown-btn-light{
display: flex;
width: 172px;
height: 48px !important;
padding: 10px 4px;
justify-content: space-between;
align-items: center;
flex-shrink: 0;
border-radius: 100px;
border: 1px solid #E2E8F0;
background: #F8FAFC;
text-transform: unset !important;
color: #10192D;
font-weight: 500 !important;
position: relative;
}
.v-list {
background: rgba(6, 10, 29, 0.70)!important;
backdrop-filter: blur(25px) !important;
border-radius: 20px !important;
color: white;
margin-top: 10px;
cursor: pointer;
}

</style>