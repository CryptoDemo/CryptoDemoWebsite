<template>
    <div>
        <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <button class="network-btn" v-bind="props" variant="text" style="display: flex; align-self: flex-start; border-radius: 16px; box-shadow: none; width: fit-content;" @click="toggleChevron">
                <span style="text-transform: capitalize; font-family: Manrope; color: white; text-transform: uppercase;">{{pinia.state.selectedNetwork}}</span>

                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled },]">
                  <g clip-path="url(#clip0_10476_6360)">
                    <path d="M12.7207 13.7951L17.6707 8.74609L19.0847 10.1884L12.7207 16.6797L6.35669 10.1884L7.77069 8.74609L12.7207 13.7951Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_10476_6360">
                      <rect width="24" height="24.48" fill="white" transform="translate(0.719971 0.359375)"/>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </template>

            <v-list  style="border-radius: 10px; height: 120px !important; background: white; color: black;">
              <v-list-item style="display: contents">
                <v-row dense style="max-width: 250px; display: block;">
                  <v-col v-for="(item, index) in pinia.state.BlockchainNetworks" :key="index">
                  <v-list-item @click="pinia.state.selectedNetwork = item.name;" style="display: flex;">
                      <span style="text-transform: uppercase;">{{ item.name }}</span>
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

const fetch_chainNetworks = async () => {
  if (pinia.state.BlockchainNetworks.length) {
    return; // No need to fetch if details already exist
  }

  try {
    const results = await Promise.allSettled([
    fetch_allChainNetworks(),
    ]);

  } catch (error) {
    // Handle unexpected errors
    console.error('An unexpected error occurred:', error);
  }
};




onMounted(() => {
  fetch_chainNetworks();
});

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
color: white !important;
letter-spacing: 0px;
margin-top: 10px !important;
border: 0.5px solid #2f3946;
}
.country-dropdown-light{
flex-shrink: 0;
border-radius: 20px;
text-transform: unset !important;
background: #F8FAFC !important;
color: #060A1D !important;
letter-spacing: 0px;
box-shadow: none;
margin-top: 10px !important;
border: 1px solid #DBE8FF;
}

.dropdown-btn1i-dark{
flex-shrink: 0;
border-radius: 20px !important;
background: inherit;
text-transform: unset !important;
color: white !important;
letter-spacing: 0px;
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

@media only screen and (max-width: 600px) {
.network-btn{
width: 100% !important;
}
}
</style>