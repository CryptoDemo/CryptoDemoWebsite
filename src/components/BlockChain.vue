<template>
    <div>
        <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <button v-bind="props" variant="text" :class="isDark ? 'coin-dropdown':'coin-dropdown-light'" style="display: flex; align-self: flex-start; width: 100%; box-shadow: none; margin-top: 15px; letter-spacing: 0px;" @click="toggleChevron">
                <span class="me-2" :class="isDark ? 'country-text':'country-text-light'" style="text-transform: uppercase;; font-family: Manrope; font-size: 16px;">{{pinia.state.selectedNetwork}}</span>
                <v-icon icon="mdi-chevron-down" id="filter-toggle" color="#8E9BAE" class="chevron-icon" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']"></v-icon>
              </button>
            </template>


            <v-list :class="isDark ? 'country-dropdown':'country-dropdown-light'" style="border-radius: 10px; height: 120px !important; background: white;">
              <v-list-item style="display: contents">
                <v-row dense style="max-width: 250px; display: block;">
                  <v-col v-for="(item, index) in pinia.state.BlockchainNetworks" :key="index">
                  <v-list-item @click="pinia.state.selectedNetwork = item.name;" style="display: flex;">
                      <span style="text-transform: capitalize;">{{ item.name }}</span>
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


const fetch_allChainNetworks = async()=>{
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
};
};


const isChevronToggled = ref(false);
const toggleChevron = () => {
      isChevronToggled.value = !isChevronToggled.value;
};
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

.close-btn{
fill: white;
transition: transform 0.3s ease;
}
.close-btn-dark{
fill: #10192D;
}
.chevron-icon {
  transition: transform 0.3s;
}
.chevron-icon-rotated {
  transform: rotate(180deg);
}


.coin-dropdown{
display: flex;
height: 50px !important;
padding: 10px;
justify-content: space-between;
align-items: center;
border-radius: 15px !important;
border: 1px solid #1B2537 !important;
background: inherit;
color: white;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 150%;
text-transform: unset;
}
.coin-dropdown-light{
display: flex;
height: 50px !important;
padding: 10px;
justify-content: space-between;
align-items: center;
border-radius: 15px !important;
border: 1px solid #E2E8F0 !important;
background: inherit;
box-shadow: none;
color: var(--Main-Greyscale-90, #10192D);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 150%;
text-transform: unset;
}
</style>