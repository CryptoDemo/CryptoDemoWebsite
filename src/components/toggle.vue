<template>
  <div>

  <v-switch
    v-model="model"
    hide-details
   :label="model ? 'Switch to Light theme' : 'Switch to Dark theme'"
    inset
  ></v-switch>

  </div>
</template>

<script setup>
 import { ref } from 'vue'

const  model= ref (true)

</script>

<style scoped>

</style>