<template>
    <div>
        <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <button class="dropdown-btn1i" :class="isDark ? 'dropdown-btn1i':'dropdown-btn1i-light'" v-bind="props" variant="text" style="display: flex; align-self: flex-start; border-radius: 16px; box-shadow: none;">
                <span class="me-2" :class="isDark ? 'country-text':'country-text-light'">{{pinia.state.selectedNetwork}}</span>
                <img src="/svg/chevron-light.svg" v-if="theme.global.current.value.dark"/>
                <img src="/svg/chevron-dark.svg" v-else/>
              </button>
            </template>

            <v-list :class="isDark ? 'country-dropdown':'country-dropdown-light'" style="border-radius: 15px; height: 120px !important;">
              <v-list-item style="display: contents">
                <v-row dense style="max-width: 250px; display: block;">
                  <v-col v-for="(item, index) in pinia.state.BlockchainNetworks" :key="index">
                  <v-list-item @click="pinia.state.selectedNetwork = item.name;" style="display: flex;">
                      <span>{{ item.name }}</span>
                  </v-list-item>
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
import { getBlockchain } from "@/composables/requests/tokens";

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore()
const blockchainNetwork = ref("Bep20")


// const selectedNetwork = ref(pinia.state.selectedNetwork);

 try {
  const data = await getBlockchain();
  if (data.success) {
    const fetchedBlockchains = data.data;

    // Extract IDs of stored blockchains
    const storedBlockchainsIds = pinia.state.BlockchainNetworks.map(item => item.id);

    // Filter out already stored blockchains from fetched data
    const newItems = fetchedBlockchains.filter(item => !storedBlockchainsIds.includes(item.id));

    if (newItems.length > 0) {
    
      // Update blockchainNetworks with new items
      pinia.state.BlockchainNetworks = [...pinia.state.BlockchainNetworks, ...newItems];
    }
  } else {
    console.error("API request failed:", data.message);
  }
} catch (error) {
  console.error('Fetch error:', error);
}


</script>

<style scoped>
.country-dropdown{
flex-shrink: 0;
background: #1B2537 !important;
text-transform: unset !important;
color: white;
letter-spacing: 0px;
margin-top: 10px !important;
border: 0.5px solid #2f3946;
}
.country-dropdown-light{
flex-shrink: 0;
border-radius: 20px;
text-transform: unset !important;
background: #F8FAFC !important;
color: #060A1D;
letter-spacing: 0px;
box-shadow: none;
margin-top: 10px !important;
border: 1px solid #DBE8FF;
}

.dropdown-btn1i{
flex-shrink: 0;
border-radius: 20px !important;
background: inherit;
text-transform: unset !important;
color: white;
letter-spacing: 0px;
margin-top: 28px !important;
text-transform: capitalize;
}
.dropdown-btn1i-light{
flex-shrink: 0;
border-radius: 20px !important;
background-color: inherit;
text-transform: unset !important;
color: #161D26 !important;
letter-spacing: 0px;
box-shadow: none;
margin-top: 28px !important;
}

.dropdown-btn1i:hover,
.dropdown-btn1i:focus,
.dropdown-btn1i:active {
  /* Ensure no background color change */
  background-color: inherit !important;

  /* Remove any other hover effects like box-shadow, transform, etc. */
  box-shadow: none !important;
  transform: none !important;

  /* Remove text color change on hover */
  color: inherit !important;
}
</style>