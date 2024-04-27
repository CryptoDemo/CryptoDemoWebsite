<template>
  <div>
    <Header/>
    <v-container>
          <div style="margin-top:90px; display: flex; width: 100%;">
            <div>
              <div class="pa-2 ma-2">
                <Sd-nav1/>
              </div>
            </div>
            <div>
              <div class="mt-3 pa-2">
                <div class="acct-settings" style="display: flex; width: 802px; justify-content: space-between; margin-bottom: 29px">    
                      <span class="partners-text"> Complete verification to access Demo products and services.</span>
                      <div> <v-btn class="primary-btn" style="height: 37px; width: 120px; border-radius: 8px; background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);text-transform: capitalize; letter-spacing: 0px">Verify</v-btn> </div>
                  </div>
                <div class="d-flex">
                  <div style="width: 570px;">
                    <div class="d-flex">
                      <img src="/img/btc.png" class="me-2"/>
                      <span class="selected-coin">Bitcoin Price Chart (BTC)</span>
                    </div>
                  <Chart class="me-5"/>
                </div>
                <div>
                  <span class="buy">Buy / Sell</span>
                  <div style="border-radius: 20px; border: 1px solid #212A36; backdrop-filter: blur(21px); height: 55px; width: 230px; margin-top: 20px; margin-bottom: 20px;">
                    <v-btn :class="`${transaction ? 'buy-btn': 'sell-btn'} ${isDark ? 'buy-btn':'buy-btn-light'}`" @click.prevent="transaction=true" style="border-radius: 15px !important;"> Buy</v-btn>
                    <v-btn :class="`${!transaction ? 'buy-btn': 'sell-btn'} ${isDark ? 'buy-btn':'buy-btn-light'}` " @click.prevent="transaction=false">Sell</v-btn>
                  </div>
                  <v-textarea variant="plain" no-resize class="text-bg pl-3" placeholder="Price (USDT)"></v-textarea>
                  <v-textarea variant="plain" no-resize class="text-bg pl-3 mt-3" placeholder="ammount"></v-textarea>
                  <Button buttonText="Continue" style="width: 230px; margin-top: 18px;"/>
                  <!-- <Button :class="transaction ? 'Buy' : 'Sell'">{{ buttonText }}</Button> -->
                </div> 
              </div>

                <div style="border-radius: 24px; border: 1px solid #303A46; height: auto; margin-top: 30px;">

                </div>
              </div>
            </div>
          </div>
        </v-container>
    <Footer customClass="bg-color" socialSection="band-color"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const transaction = ref(true);

</script>

<style scoped>
.partners-text{
color: var(--Gray-Medium-dark, #646464);
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
margin-left: 5px !important;
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
background:  #12181F !important;
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