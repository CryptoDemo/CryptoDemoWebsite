<template>
  <div>
      <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn                       
             :class="isDark ? 'dropdown-btn2':'dropdown-btn2-light'"
            
              v-bind="props">
               <v-img  width="30" class="me-3" :src="flag"/> 
              <span class="me-2" :class="isDark ? 'selected-language':'selected-language-light'">{{select}}</span>
              <v-icon icon="mdi-chevron-down" style="position: absolute;right: 10px "></v-icon>
            </v-btn>
          </template>

          <v-list :class="isDark ? 'country-dropdown':'country-dropdown-light'">
            <v-list-item style="padding: 5px !important;">
              <v-row dense style="display: contents;">
              <v-col v-for="(item, index) in locations" md="12" sm="12" :key="index" >
            
                 <v-list-item-title @click="select=item.title; flag= item.image" style="display: flex; align-items: center;"> 
                    <img width="30" class="me-3" :src="item.image"/>   
                    <span class="country-name" :class="isDark ? 'country-name':'country-name-light'"> {{ item.title }} </span>
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
        { title: 'French',  image:"/svg/ball.svg" },
        { title: 'Yoruba',  image:"/svg/ball.svg" },
        { title: 'Igbo', image:"/svg/ball.svg" },
      ];
</script>

<style scoped>
.dropdown-btn2{
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
.dropdown-btn2-light{
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
color: #10192D !important;
font-weight: 500 !important;
position: relative;
box-shadow: none;
}
.v-list {
background: rgba(6, 10, 29, 0.70)!important;
backdrop-filter: blur(25px) !important;
border-radius: 20px !important;
color: white;
margin-top: 10px;
cursor: pointer;
}

.country-dropdown{
border-radius: 15px;
border: 0.5px solid #2f3946;
background: #1B2537 !important;
backdrop-filter: blur(50px) !important;
padding: 0px;
}
.country-dropdown-light{
border-radius: 15px;
background: #fff !important;
}

.country-name{
color: var(--Colors-Base-white, #FFF);
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.14px;
}
.country-name-light{
color: #10192D;
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.14px;
}
.selected-language{
color: var(--Colors-Base-white, #FFF);
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.14px;
}
.selected-language-light{
color: #10192D ;
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.14px;
}
</style>