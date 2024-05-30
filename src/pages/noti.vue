<template>
<div v-for="token in pinia.state.tokenLists" :key="token.id">
    <p>{{ token.name }}</p>
    <v-progress-circular
      :size="100"
      :width="15"
      model-value="100"
      :color=token.icon_dominant_color
    >
    </v-progress-circular>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const pinia = useStore()

</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>