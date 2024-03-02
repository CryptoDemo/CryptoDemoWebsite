<template>
  <div> 
    <v-menu :location="location">
            <template v-slot:activator="{ props }">
            <v-btn class="mx-auto active-offers" style="letter-spacing: 0px"
                v-bind="props">
                <img  width="25" class="me-2" :src="flag" style="margin-left: -60px "/> 
                <div style="display: grid; cursor: pointer;">
                <span >{{select}}</span> 
                <span class="me- small-text">{{coin}}</span> 
                </div>
                <v-icon icon="mdi-chevron-down"  color="#E0E4F5" style="position: absolute; display: flex; right: 15px;"></v-icon>
            </v-btn>
            </template>

        <v-list>
            <v-list-item>
            <div v-for="(item, index) in allCoins" class="d-flex py-3" style="cursor: pointer"
                :key="index" >
            
                <v-list-item-title @click="select=item.title" class="d-flex" >    
                <span> {{ item.title }} </span>
            </v-list-item-title>
            </div>
            </v-list-item>
        </v-list>
    </v-menu> 
  </div>
</template>

<script setup>
import { ref } from 'vue'

const select =ref("Email or Phone")
const allCoins = [
        { title: 'Email'},
        { title: 'Phone Number'},
       
      ];
</script>

<style scoped>
.active-offers{
border-radius: 16px;
background: var(--secondary-background, #12181F);
display: flex;
width: 758px;
padding: 12px 40px;
justify-content: space-between;
align-items: center;
text-transform: unset;
}
</style>