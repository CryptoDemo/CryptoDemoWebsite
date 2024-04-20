<template>
  <div>
   
    <template>
  <v-file-input
    :rules="rules"
    accept="image/png, image/jpeg, image/bmp"
    variant="solo">
    
   <img src="/svg/Image-grad.svg"/>
  </v-file-input>
</template>
  <input type="image" src="img_submit.gif" alt="Submit" width="48" height="48"/>
  </div>
</template>

<script setup>
import { ref }  from 'vue';

const rules = [
        value => {
          return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
        },
      ];
</script>



