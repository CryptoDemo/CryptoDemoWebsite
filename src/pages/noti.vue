   <template>
      <div>
        <v-sparkline
          :gradient="gradients"
          :line-width="lineWidth"
          :model-value="value"
          :padding="padding"
          :smooth="smooth"
          auto-draw
        ></v-sparkline>

        <v-row>
          <v-col cols="12" md="6">
            <v-row align="center" class="fill-height">
              <v-item-group v-model="gradients">
                <v-row class="pt-6 pl-6">
                  <v-item v-for="(gradient, i) in gradients" :key="i"
                    v-slot="{ active, toggle }"
                    :value="gradient">
                  </v-item>
                </v-row>
              </v-item-group>
            </v-row>
          </v-col>
        </v-row>
  
      </div>
   </template>

<script setup>
  const gradients = ref([
    ['#f72047'],

  ])


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



