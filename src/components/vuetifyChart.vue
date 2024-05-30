<template>
    <v-container fluid style="height: 100%;">
      <v-sparkline style="height: 100%;"
        
        :fill="fill"
        :gradient="selectedGradient"
        :height="chartHeight"
        :line-width="lineWidth"
        :model-value="value"
        :padding="padding"
        :smooth="smooth"
        auto-draw
      ></v-sparkline>
  
      <v-row>
        <v-col cols="12" md="6">
          <v-row align="center" class="fill-height">
            <v-item-group v-model="selectedGradient">
              <v-row class="pt-6 pl-6">
                <v-item
                  v-for="(gradient, i) in gradients"
                  :key="i"
                  v-slot="{ active, toggle }"
                  :value="gradient"
                  :labels="labels"
                >
                </v-item>
              </v-row>
            </v-item-group>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const gradients = [
    ['#FF3E46', '#060A1D'],
    ['#0C57AF', '#060A1D'],
  ];

const chartHeight = ref(100);  
  
  const labels = ref([ '12am', '3am', '6am', '9am', '12pm', '3pm', '6pm','9pm',]);
  const fill = ref(true);
  // Set the second gradient as the default
  const selectedGradient = ref(gradients[1]);
  const padding = ref(8);
  const smooth = ref(true);
  const value = ref([0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]);
  const lineWidth = ref(1);
  </script>
  
  <style scoped>
  .switch {
    position: relative;
    top: -12px;
  }
  </style>
  