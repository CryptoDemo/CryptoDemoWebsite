<template>
    <div v-for="token in coinbal" :key="token.id">
        <div v-if="!isLoading">
            <div v-if="token.symbol === symbol">{{ formatBalance(token.balance) }}</div>
        </div>
      <div v-else>
          <!-- <LoaderLight v-if="token.symbol === symbol"/> -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { getTokenBalance } from '@/composables/requests/tokens'
  
  const pinia = useStore()

  const coinbal = ref(null)
  
  const tokens = pinia.state.tokenLists;
  const isLoading = ref(false);

  const { symbol } = defineProps({ symbol: String })
  
  const formatBalance = balance => (balance === 0 ? '0.00' : balance?.toFixed(7))
  
  const getTokenBals = async () => {
    if (pinia.state.isAuthenticated) {

      try {
        console.log(pinia.state.selectedNetwork.toLowerCase())
        const data = await getTokenBalance(pinia.state.selectedNetwork.toLowerCase(), symbol)

        
        const updatedTokens = tokens.map(token => {
          if (token.symbol === symbol) {
            return { ...token, balance: data.data?.balance || 0 }
          }
          return token
        })

        coinbal.value = updatedTokens
        // console.log('b',updatedTokens)
        pinia.setTokenLists(updatedTokens)

      } catch (error) {
        console.log(error)
        // Handle error
      }

    }
  }
  
//   const checkedbal = pinia.state.tokenLists.some(item => item.balance == undefined || item.balance == null );
  onBeforeMount(async () => {
    if(pinia.state.tokenLists.length){
        coinbal.value = pinia.state.tokenLists
    }
    // if(!pinia.state.tokenLists.length){
    //     isLoading.value = true
    // }
    await getTokenBals()
          
  })
  </script>