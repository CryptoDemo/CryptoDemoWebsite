<template>

    <div style="display: flex; max-width: 100%;">
        
        <div  style="display: flex; justify-content: space-between; overflow: scroll;">
            <div v-for="(item, i) in  multipliedValues" :key="i">
                <v-card link @click="pinia.state.getNewCoinInfo = item.symbol; navigateTo('/account/trade/coinId')" class="coinbox me-4" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 16px;"> 
                    <span class="balance" :class="isDark ? 'coin-name':'coin-name-light'">{{ formatBalance(item.product) }} {{ pinia.state.preferredCurrency }}</span>
                    <span  :class="isDark ? 'text-dark':'text-light'">{{ formatBalance(item.balance) }} {{ item.symbol}}</span>
                    <div class="mt-3 mb-4" style="display: flex; align-items: center;">
                      <img class="me-2" :src="item.icon" alt="coin" width="30"/>
                      <img :src="chainIcon?.icon" width="15" style="position: relative; right: 17px; margin-top: 16px;"/>
                      <span class="coinName" :class="isDark ? 'text-dark':'text-light'">{{ item.name }}</span>
                    </div>

                    <VProgressLinear :color=item.icon_dominant_color height="8" :width="15" model-value="100" rounded ></VProgressLinear>
                </v-card>
            </div>
        </div> 

    </div>

</template>
    
<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';

const pinia = useStore()
const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);


const multipliedValues = computed(() => {
      return pinia.state.tokenLists.map(token => {
        const balance = token.balance ?? 0;
        const convertedValue = token.conversionValue ?? 0;
        return {
          ...token,
          product: balance * convertedValue
        };
      });
    });

    const chainIcon = computed(() => {
  return pinia.state.tokenLists.find(c => c?.symbol === "BNB" || c?.symbol === "TRX");
});

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

@media screen and (max-width: 600px) {
.coinbox[data-v-b31ee669] {
    width: 200.73px;
    flex-shrink: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}
}
</style>