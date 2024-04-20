<template>
    <div>
      <div style="flex-grow: 0 !important;">
        <div class="pa-2 ma-2" style="display: grid;">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  class="input-styling"
                  dark
                  v-bind="props">
                  <div  class="py-3" style="display: flex; cursor: pointer; position: absolute; left: 15px; align-items: center;">
                      <span class="dropdown-text">{{selected}}</span> 
                  </div>
                  <v-icon icon="mdi-chevron-down"  color="#E0E4F5" class="chevron-icon" style="position: absolute; right: 15px; bottom: 9px; "></v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item>
                  <div v-for="(currency, index) in currencies" class="d-flex py-3" style="cursor: pointer"
                    :key="index" >
                
                    <v-list-item-title @click="selected=currency.title;" class="d-flex"> 
                      <span class="dropdown-text"> {{ currency.title }} </span>
                    </v-list-item-title>
                  </div>
                </v-list-item>
              </v-list>
            </v-menu> 
            <span class="time-text">Set your time zone</span>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const selected  = ref ('(GMT +01:00) Africa, Lagos - 8:02AM') 


const currencies = [
                  {
                     title:"(GMT +01:00) Africa, Niger - 8:02AM"
                  },
                  {
                     title:"(GMT +01:00) Africa, Ghana - 10:02AM"
                  },
                  {
                    title:"(GMT +01:00) Africa, Sierra leone - 8:02AM"
                  },
                  {
                    title:"(GMT +01:00) Africa, Lagos - 8:02AM"
                  }
];
</script>

<style scoped>
.input-styling{
width:412px;
height: 38px !important;
background: var(--secondary-background, #12181F) !important;
padding: 6px 13px;
border-radius: 8px;
gap: 95px;
text-transform: unset;
letter-spacing: 0px;
box-shadow: none !important;
}
.dropdown-text{
color: var(--Colors-Base-white, #FFF);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 25.6px */
}
.time-text{
color: var(--Gray-Medium-dark, #646464);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 16px;
}
</style>