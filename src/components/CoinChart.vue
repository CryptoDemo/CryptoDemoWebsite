<template>
  <div style="width: 120px">
    <v-sparkline
      :gradient="gradients"
      :line-width="lineWidth"
      :model-value="value"
      :padding="padding"
      :smooth="smooth"
      auto-draw
    ></v-sparkline>

    <div>
      <v-col >
        <v-row align="center" class="fill-height">
          <v-item-group v-model="gradients">
            <div class="">
              <v-item v-for="(gradient, i) in gradients" :key="i"
                v-slot="{ active, toggle }"
                :value="gradient">
              </v-item>
            </div>
          </v-item-group>
        </v-row>
      </v-col>
    </div>

  </div>
</template>

<script setup>
const gradients = ref([
['#f72047'],

])

const selectedGradient = ref(gradients[1]);
const padding = ref(8);
const smooth = ref(true);
const value = ref([0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0,9,6,3,2,1,5]);
const lineWidth = ref(2);

</script>

<style scoped>

</style>



