<template>
<div style="display: flex;">

  <div class="me-7" style="display: flex; justify-content: space-between; overflow: scroll;">
    <div v-for="(item, i) in pinia.state.tokenLists" :key="i">
      <div class="coinbox me-4" :class="isDark ? 'profile-cards-dark':'profile-cards-light'"> 
        <span class="balance" :class="isDark ? 'coin-name':'coin-name-light'">{{ item.balance }} {{ pinia.state.preferredCurrency }}</span>
        <div style="display: flex; align-items: center;">
          <img class="me-2" :src="item.icon" alt="coin" width="30"/>
          <span class="coinName" :class="isDark ? 'text-dark':'text-light'">{{ item.name }}</span>
        </div>
        </div>
      </div>
    </div>

    <Acct-level style="margin-top: 10px;"/>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import {getTokenBalance} from "@/composables/requests/tokens";
const pinia = useStore()
const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);


const getTokenBals = async () => {

// Check if user is authenticated

if (pinia.state.isAuthenticated) {
  try {
    console.log(network);

    // Fetch token balance
    const data = await getTokenBalance(symbols);

    // Update tokens with the new balance
    if (data.success) {
        for (const token_ of data.data) {
          console.log(data);
          // Update tokenLists with the new balance
          const token = tokensForSelectedNetwork.find(t => t.symbol === token_);
          // const token = pinia.state.tokenLists.find(t => t.symbol === token_.token);
          if (token) {
          // Update token balance
          token.balance = (token_.balance);
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

onMounted(async () => {
await convertCurrencies();
getTokens_()
getTokenBals();

});

</script>

<style scoped>
.coinbox{
width: 226.73px;
height: 130px;
flex-shrink: 0;
padding: 24px;
display: flex;
flex-direction: column;
margin-top: 10px;
}

.balance{
color: var(--White, var(--Colors-Base-white, #FFF));
font-family: Poppins;
font-size: 26px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.coinName{
font-family: Poppins;
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