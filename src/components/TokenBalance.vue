<template>
   <div v-for="token in tokens" :key="token.symbol">
        {{ token.symbol }}: {{ token.balance }}
      </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getTokenBalance } from '@/composables/requests/tokens'

const pinia = useStore()


const formatBalance = balance => (balance === 0 ? '0.00' : balance?.toFixed(7));
const network = pinia.state.selectedNetwork.toLowerCase();
const selectedNetworkId = pinia.state.BlockchainNetworks.find(b=>b.name==network)?.id;
console.log('Selected Network ID:', selectedNetworkId);

const tokensForSelectedNetwork = pinia.state.tokenLists.filter(token => token.token_networks.find(tkn=>tkn.blockchain_id === selectedNetworkId));
console.log('Tokens for Selected Network:', tokensForSelectedNetwork);

const symbols = tokensForSelectedNetwork.map(token => token.symbol);
console.log('Symbols:', symbols);

console.log(symbols)

const getTokenBals = async () => {

  // Check if user is authenticated

  if (pinia.state.isAuthenticated) {
    try {
      console.log(network);

      // Fetch token balance
      const data = await getTokenBalance(symbols);
      console.log('here.....1')
      // Update tokens with the new balance
      if (data.success) {
          for (const token of data.data) {
            console.log(data);
            // Update tokenLists with the new balance
            const index = symbols.findIndex(t => t.token === token.token);
            if (index !== -1) {
              symbols[index].balance =formatBalance (token.balance);
            }
          }
      } else {
        console.log('Error:', data.message);
      }
    } catch (error) {
      console.log('Fetch error:', error);
    }
  }
};

onBeforeMount(async () => {
    await getTokenBals()
          
  })




</script>