<template>
  <div>
    <Header :hide="true" :icon1="true" :icon3="true" :icon2="true"/>
    <v-container>
          <div style="margin-top:100px; display: flex; width: 100%;">
            <div>
              <div class="pa-2 ma-2">
                <Sd-nav1/>
              </div>
            </div>
            <div>
              <div class="mt-3 pa-2">
                <div class="acct-settings" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="display: flex; width: 802px; justify-content: space-between; margin-bottom: 29px">    
                  <span class="partners-text"  :class="isDark ? 'text-dark':'text-light'"> Complete verification to access Demo products and services.</span>
                  <div> <v-btn class="primary-btn" style="height: 37px !important; width: 120px; border-radius: 8px; background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);text-transform: capitalize; color: white; letter-spacing: 0px">Verify</v-btn> </div>
                </div>
                <div class="d-flex">
                  <div style="width: 570px;">
                    <div class="d-flex">
                      <img src="/img/btc.png" class="me-2"/>
                      <span class="selected-coin">{{ selectedCoin="Bitcoin" }}</span>
                    </div>
                  <Chart class="me-5"/>
                </div>
                <div>
                  <span class="buy px-2">Buy / Sell</span>
                  <div style="border-radius: 20px; border: 1px solid rgba(142,155,174,.5); backdrop-filter: blur(21px); height: 55px; width: 230px; margin-top: 20px; margin-bottom: 20px; display: flex; justify-content: center;">
                    <v-btn :class="`${transaction ? 'buy-btn': 'sell-btn'} ${isDark ? 'profile-cards-dark':'profile-cards-light'}`" @click.prevent="transaction=true" style="border-radius: 15px !important;"> Buy</v-btn>
                    <v-btn :class="`${!transaction ? 'buy-btn': 'sell-btn'} ${isDark ? 'profile-cards-dark':'profile-cards-light'}` " @click.prevent="transaction=false">Sell</v-btn>
                  </div>
                  <v-textarea variant="plain" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" no-resize class="text-bg pl-3" placeholder="Price (USDT)"></v-textarea>
                  <v-textarea variant="plain" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" no-resize class="text-bg pl-3 mt-3" placeholder="ammount"></v-textarea>
                  <v-btn class="primary-btn1" style="width: 230px; margin-top: 18px; height: 60px; border-radius: 20px; font-size: 16px; font-weight: 700; font-family: Manrope;color: white;">{{ transaction ? 'Buy':'Sell' }}</v-btn>
          
                </div> 
              </div>

              <div style="margin-top: -130px;">
                <Coins/>
              </div>
              <div style="margin-top: -130px;">
                <Invite/>
              </div>
              </div>
            </div>
          </div>
    </v-container>
    <Footer/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore()

const transaction = ref(true);
const buttonText = ref('Buy');
</script>

<style scoped>
.partners-text{
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.buy-btn{
border-radius: 15px;
background: #212A36;
width: 110px;
height: 42px;
text-transform: unset;
box-shadow: none;
letter-spacing: 0px;
margin-top: 5px;
/* margin-left: 5px !important; */
}
.sell-btn{
border-radius: 15px;
background: inherit !important;
width: 110px;
height: 42px;
text-transform: unset;
box-shadow: none;
letter-spacing: 0px;
margin-top: 5px;
}
.bg-color{
background: #12181F;
}
.selected-coin{
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.text-bg{
border-radius: 20px;
height: 64px !important;
}
.buy{
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
</style>