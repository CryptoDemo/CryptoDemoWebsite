<template>

    <div style="display: flex; max-width: 100%;">
        
        <div class="me-7" style="display: flex; justify-content: space-between; overflow: scroll;">
            <div v-for="(item, i) in pinia.state.tokenLists" :key="i">
                <div class="coinbox me-4" :class="isDark ? 'profile-cards-dark':'profile-cards-light'"> 
                    <span class="balance" :class="isDark ? 'coin-name':'coin-name-light'">{{ formatBalance(item.balance) }} {{ pinia.state.preferredCurrency }}</span>
                    <div class="mt-3 mb-3" style="display: flex; align-items: center;">
                        <img class="me-2" :src="item.icon" alt="coin" width="30"/>
                        <span class="coinName" :class="isDark ? 'text-dark':'text-light'">{{ item.name }}</span>
                    </div>
                    <v-progress-linear
                      :color=item.icon_dominant_color
                      height="8"
                      :width="15"
                      model-value="100"
                      rounded
                    ></v-progress-linear>
                </div>
            </div>
        </div> 
            <!-- <AcctLevel1 style="margin-top: 10px;"/> -->
    </div>

</template>
    
<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import {getTokenBalance} from "@/composables/requests/tokens";
const pinia = useStore()
const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);


// const network = pinia.state.selectedNetwork.toLowerCase();
// const selectedNetworkId = pinia.state.BlockchainNetworks.find(b=>b.name==network)?.id;


// const tokensForSelectedNetwork = pinia.state.tokenLists?.filter(token => token?.token_networks?.find(tkn=>tkn.blockchain_id === selectedNetworkId));

// const symbols = tokensForSelectedNetwork.map(token => token.symbol);

// const getTokenBals = async () => {

// // Check if user is authenticated

// if (pinia.state.isAuthenticated) {
//   try {
 

//     // Fetch token balance
//     const data = await getTokenBalance(symbols);

//     // Update tokens with the new balance
//     if (data.success) {
//         for (const token_ of data.data) {
//           console.log(data);
//           // Update tokenLists with the new balance
//           const token = tokensForSelectedNetwork.find(t => t.symbol === token_);
//           // const token = pinia.state.tokenLists.find(t => t.symbol === token_.token);
//           if (token) {
//           // Update token balance
//           token.balance = (token_.balance);
//         }
//         }
//     } else {
//       console.log('Error:', data.message);
//     }
//   } catch (error) {
//     console.log('Fetch error:', error);
//   }
// }
// };

// onMounted(async () => {
// await getTokenBals();
// });

</script>

<style scoped>
.coinbox{
width: 226.73px;
flex-shrink: 0;
padding: 24px;
display: flex;
flex-direction: column;
margin-top: 10px;
}
.balance{
color: var(--White, var(--Colors-Base-white, #FFF));
font-family: Manrope;
font-size: 26px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.coinName{
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.coin-name{
color: white !important;
}
.coin-name-light{
color: #10192D;
}
</style>