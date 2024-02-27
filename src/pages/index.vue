<template>
            <img src="/svg/Background pattern.svg" class="position-absolute" style=" opacity: 0.4; left: 0; right: 0;" v-if="theme.global.current.value.dark" />
            <img src="/svg/Background pattern.svg" class="position-absolute" style=" opacity: 0.2; left: 0; right: 0;" v-else />
    <div>
      <Index-header title="Log in" link="/authentication/login"/>
      <div>
          <section class="position-relative">
            <div>
              <div class="position-absolute">    
                <img src="/svg/Frame.svg" class="pink-coin position-absolute"/>
              
                <!-- <img src="/svg/Group 1320.svg" class="position-relative"/> -->
                </div>
                <div>
                  <div class="frame-1"  :class="isDark ? 'frame-1':'frame-1-light'">
                    <v-btn color="#2873FF" class="writing-btn" style="letter-spacing: opx">Writing</v-btn>
                    <span  :class="isDark ? 'writing-text':'writing-text-light'">The number one trading platform in Europe</span>
                    <img src="/svg/blue-arrow.svg"/>
                  </div>
                  

                   <div style="justify-content: center; display: flex; margin-top: 40px">
                         <span :class="isDark ? 'header-text1':'header-text1-light'">Trade Bitcoin on</span>
                           <img src="/img/Frame.png" class="orange-coin position-absolute"/> 
                    </div>



                <div class="d-flex text-img" v-if="theme.global.current.value.dark">
                  <span class="web" style="margin-right: 78px;">Demo Web</span>
                  <img src="/svg/Frame 1305.svg" style="position: absolute; margin-left: 375px ;top: 144px;" /> 
                </div>
                <div class="d-flex text-img" v-else>
                  <span class="web">Demo Web✨️</span>
                </div>
                    <img src="/svg/Group 1318.svg" class="position-absolute"/>
                    <img src="/svg/Group 1320.svg" class="green-coin position-absolute"/>
                  <div>
                    <span class="subtitle-text">Join over 12 million people just like you on everyone's favorite peer-to-peer platform to buy and sell Bitcoin.</span>
                  </div> 
                <div class="form-wrap position-relative">
                  <img src="/img/Group 1302.png" class="top-ellipse"/>
                  <img src="/img/Group 1301.png" class="side-ellipse"/>
                  <img src="/svg/Ellipse.svg" class="blue-ellipse position-absolute" style="width: ;"/>
                  <!-- <img src="/img/Group 1300.png" class="right-ellipse"/> -->
                  <img src="/img/Group 1299.png" class="bottom-ellipse"/>


                  <div :class="isDark ? 'landing-page-form':'light-landing-page-form'" >
                      <img src="/svg/bitcoin-star.svg" class="yellow-coin position-absolute"/>

                      <img src="/svg/Frame (2).svg" class="light-green-coin position-absolute"/>

                    <div :class="isDark ? 'btn-segment':'btn-segment-light'">
                      <v-btn  :class="`${transaction ? 'buy-btn': 'sell-btn'} ${isDark ? 'buy-btn':'buy-btn-light'}`" @click.prevent="transaction=true" > Buy

                      </v-btn>
                      <v-btn :class="`${!transaction ? 'buy-btn': 'sell-btn'} ${isDark ? 'buy-btn':'buy-btn-light'}` " @click.prevent="transaction=false" >Sell

                      </v-btn>
                    </div>

                    <div style="margin-top: 24px;">
                      <v-menu :location="location">
                        <template v-slot:activator="{ props }">
                          <v-btn :class="isDark ? 'coin-dropdown':'coin-dropdown-light'" style="letter-spacing: 0px"
                            dark
                            v-bind="props">
                            <v-img  width="25" class="me-3 select" :src="flag"/> 
                            <div  class="py-3" style="display: grid; cursor: pointer;">
                            <span class="me-2">{{select}}</span> 
                            <span class="me-2 small-text">{{coin}}</span> 
                            </div>
                            <v-icon icon="mdi-chevron-down"  color="#8E9BAE" class="chevron-icon"></v-icon>
                          </v-btn>
                        </template>

                        <v-list>
                          <v-list-item>
                            <div v-for="(item, index) in locations" class="d-flex py-3" style="cursor: pointer"
                              :key="index" >
                          
                              <v-list-item-title @click="select=item.title; coin=item.coinText; flag= item.image" class="d-flex">
                              <v-img width="20" class="rounded-5 me-3" :src="item.image"/>    
                              <span> {{ item.title }} </span>
                            </v-list-item-title>
                            </div>
                          </v-list-item>
                        </v-list>
                      </v-menu> 
                      <div style="margin-top:9px">  
                        <span class="btc-ammt">40 BTC = <span class="btc-ammt1">40,144.86 USD</span></span>
                      </div>
                      <div style="margin-top: 30px;">
                          <span :class="isDark ? 'pay-with':'pay-with-light'" >Pay with</span>
                          <div  :class="isDark ? 'coin-dropdown':'coin-dropdown-light'"  style="margin-top:9px;">
                            <span class="text2">Select payment method (20+)</span>
                                  <v-dialog width="600">
                                    <template v-slot:activator="{ props }">
                                      <v-btn v-bind="props" :class="isDark ? 'show-all':'show-all-light'" text="Show all"> </v-btn>
                                    </template>

                                    <template v-slot:default="{ isActive }">
                                      <v-card title="More payment options...." class="dialog">
                                        <v-card-text class="mt-5">
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </v-card-text>

                                        <v-card-actions>
                                          <v-spacer></v-spacer>

                                          <v-btn
                                            text="Close Dialog"
                                            @click="isActive.value = false"
                                          ></v-btn>
                                        </v-card-actions>
                                      </v-card>
                                    </template>
                                  </v-dialog>

                          </div>
                          <div class="payment-wrap">
                             <Transaction-btn buttonText="Bank Transfers" class="mt-4"/>
                             <Transaction-btn buttonText="Paypal" class="mt-4"/>
                             <Transaction-btn buttonText="Paystack" class="mt-4"/>
                             <Transaction-btn buttonText="Flutterwave" class="mt-4"/>
                             <Transaction-btn buttonText="Other bank transfer" class="mt-4"/>
                          </div>
                      </div>
                      <div style="margin-top: 30px;">
                        <span  :class="isDark ? 'pay-with':'pay-with-light'">I want to  spend</span>
                        <div class="d-flex" style="margin-top:9px;">
                        <input type="text" style="outline: none; position:relative;" :class="isDark ? 'coin-dropdown':'coin-dropdown-light'"
                                  
                        placeholder="Enter Amount"/>
                        <v-menu transition="scale-transition">
                            <template v-slot:activator="{ props }">
                              <v-btn v-bind="props" class="position-absolute" :class="isDark ? 'show-all':'show-all-light'" style="right: 72px;margin-top: 8px;">
                                USDT
                                  <v-icon icon="mdi-chevron-down"  color="#8E9BAE" style="margin-left: 6px "></v-icon>
                            </v-btn>
                            </template>

                            <v-list>
                              <v-list-item v-for="(item, i) in coinType" :key="i">
                                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                        </v-menu>
                        </div>
                        <div style=" margin-top: 9px ;">
                          <span class="hint-text">Mininum: 10 USD</span>
                        </div>
                      </div>
                      <v-btn class="exchange-btn" color=""> <span class="exchange-text">Exchange Now </span></v-btn>
                    </div>
                  </div>
              </div>
                </div>
      </div>

          </section>
      </div>
          <v-container class=" position-relative" style="">
            <div class=""> 
                      <img src="/svg/Ellipse 2813.svg" class="position-absolute" style="right:0; bottom: 65%;"/>
                <div :class="isDark ? 'section2':'section2-light'">
                      <span class="section2-subtitle ">TRADE YOUR COIN LIKE A FOREX EXPERT</span>
                      <span :class="isDark ? 'section2-title':'section2-title-light'" style="margin-top: 48px; margin-bottom: 48px">Over 350 ways to buy and sell Bitcoin.</span>
                      <span class="caption">Explore our Marketplace and start trading with your favorite payment methods or discover something new.</span>
                        <div class="mx-auto" :class="isDark ? 'btn-segment':'btn-segment-light'" style="width:365px; border-radius:100px; padding: 5px; margin-top:72px; margin-bottom: 72px;">

                            <v-btn :class="`${transaction ? 'buy-btn': 'sell-btn'} ${isDark ? 'buy-btn':'buy-btn-light'}`" @click.prevent="transaction=true" style="border-radius: 41px !important">Sell✨</v-btn>
                            <v-btn :class="`${!transaction ? 'buy-btn': 'sell-btn'} ${isDark ? 'buy-btn':'buy-btn-light'}` " @click.prevent="transaction=false" style="border-radius: 41px !important" >Buy</v-btn>
                        </div>
                </div>
            
                <div>
                    <v-row align="center" justify="center">
                      <v-col
                        v-for="(variant, i) in variants"   sm="4"
                        :key="i"
                       cols="12">
                        <v-card
                            :class="isDark ? 'card-layout':'card-layout-light'"
                            bg-color="#10192D"
                            color="white"
                            :variant="variant">
                            <v-card-item style="padding: 0px !important">
                                <div>
                                    <div class="">
                                      <img :src="variant.cardImages"/>
                                    </div>
                                    <div :class="isDark ? 'card-header':'card-header-light'">
                                      {{ variant.title }}
                                    </div>
                                    <div  :class="isDark ? 'text-caption':'text-caption-light'">{{variant.textCaption}}</div>
                                    <div style="margin-top: 18px; display: inline-flex;">
                                      <NuxtLink to="#"><span class="sell-btc-text me-2" style="color: #2873FF !important">Sell your bitcoin</span></NuxtLink>   
                                      <img src="/svg/blue-arrow.svg" class=""/>
                                    </div>
                                </div>
                            </v-card-item>
                        </v-card>
                      </v-col>
                    </v-row>
                </div>
            </div>
          </v-container>

        <v-container class=" position-relative" >
              <img src="/svg/Ellipse 2813.svg" class="position-absolute" style="right:0; margin-top: 144px ;"/>
            <div  :class="isDark ? 'section2':'section2-light'">
              <span class="section2-subtitle" style="margin-top: 201.5px; margin-bottom: 40px;">Awesome features of The demo web</span>
              <span :class="isDark ? 'section2-title':'section2-title-light'" style="margin-bottom: 88px !important;">Welcome to a financial system for the 100%.</span>
            </div>
            <v-row no-gutters>
              <v-col>
                <div class="ma-2 pa-2">
                  <v-img src="/svg/Frame-2.svg" v-if="theme.global.current.value.dark" ></v-img>
                  <v-img src="/svg/Frame02.svg" v-else></v-img>
                </div>
              </v-col>

              <v-col >
                  <v-col cols="" class="mt-2 ma-1">
                    <v-img src="/svg/Frame-1.svg" v-if="theme.global.current.value.dark"></v-img>
                    <v-img src="/svg/Frame03.svg" v-else></v-img>
                  </v-col>
                  <v-col cols="" class="ma-1">
                     <v-img src="/svg/Frame-3.svg" v-if="theme.global.current.value.dark"></v-img>
                     <v-img src="/svg/Frame01.svg" v-else></v-img>
                  </v-col>
              </v-col>
            </v-row>
            <v-container>
              <Reviews/>
            </v-container>
            
            <v-row no-gutters>
              <v-col cols="md-6">
                <div class="ma-2 pa-2">
                  <div  :class="isDark ? 'barcode-section':'barcode-section-light'">
                      <div class="rectangle" style="display: flex; justify-self: center;" >
                          <img src="/svg/grouped-gradient.svg" style="display: flex; justify-self: center; width: 100%; margin: auto" class=""  v-if="theme.global.current.value.dark"/>
                          
                          <div style=" background: linear-gradient(180deg, #DBE8FF 0%, rgba(219, 232, 255, 0.00) 101.34%);border-radius: 15px; width: 100%;"  v-else>
                          <img src="/svg/demo-light.svg"  style="display: flex; justify-self: center; width: 90%; margin: auto;margin-top:27px; " class=""/>
                          </div>
                      </div> 
                          <div class="" style="display:grid;  margin-left: 36px">
                    
                                <div class="wallet-frame">
                                  <img src="/svg/Wallet.svg">
                                  <span  :class="isDark ? 'sell-btc-text':'sell-btc-text-light'" style="font-size: 14px !important;  font-weight: 400;">wallet</span>
                                </div>
                                <div style="display: grid">
                                  <span :class="isDark ? 'free-demo':'free-demo-light'">Free Demo Web Wallet</span>
                                  <span style="margin-top: 8px; color: #8E9BAE;line-height: 140%;">Get a free <NuxtLink to="#"><span style="font-size: 16px;color: #2873FF;font-weight: 600; letter-spacing: 0.32px;">Demo Web</span></NuxtLink> 
                                  when you sign up to receive, send, and store your Bitcoin.</span>
                                </div>
                        
                          </div>
                  </div>
                </div>

              </v-col>
              <v-col cols="md-6">
                <div class="ma-2 pa-2">
                   <div :class="isDark ? 'barcode-section':'barcode-section-light'">
                      <div class="rectangle ">
                        <div style="padding-top: 28px;" v-if="theme.global.current.value.dark">
                          <img src="/img/Group(1).png"  style="display: flex; justify-self: center; margin: auto; width: 93%;" />
                        </div> 
                          <div class="mb-7" style="background: linear-gradient(180deg, #DBE8FF 0%, rgba(219, 232, 255, 0.00) 101.34%); padding-top: 28px; border-radius: 15px; width: 100%;"  v-else>
                            <img src="/svg/barcode-light.svg"  style="display: flex; justify-self: center; margin: auto; width: 90%;"/>
                          </div>
                      </div>
                      <div style=" margin-left: 36px"> 
                            <div class="wallet-frame" >
                              <img src="/svg/Users.svg">
                              <span :class="isDark ? 'sell-btc-text':'sell-btc-text-light'" style="font-size: 14px !important; font-weight: 400;">Friends</span>
                            </div>
                            <div style="display:grid;">
                              <span  :class="isDark ? 'free-demo':'free-demo-light'" style="margin-top: 16px ">Invite friends</span>
                              <span style="margin-top: 14px; color: #8E9BAE;line-height: 140%;">Get your friends and family  to
                                <NuxtLink to="/authentication/register"><span style="font-size: 16px; color: #8E9BAE; font-weight: 600; letter-spacing: 0.32px; text-decoration-line: underline;">sign up</span></NuxtLink> 
                              for Demo Web
                              </span>
                            </div>
                      </div>
                   </div>
                  <!-- <v-img src="/svg/Frame-6.svg"></v-img> -->
                </div>
              </v-col>
            </v-row>
            </v-container>

          <div :class="isDark ? 'section3':'section3-light'" style="margin-top: 200px;">
            <v-container>
                <v-row no-gutters style="padding-top: 170px; padding-bottom: 140px">
              <v-col cols="md-6">
                <div class="ma-2 pa-2">
                  <span class="section2-subtitle d-flex px-3" style="justify-content: start; margin-top: 0px !important">THE DEMO WEB IS ALL YOU NEED FOR DAY TO DAY TRADING</span>
                  <span :class="isDark ? 'section2-title':'section2-title-light'" style="text-align: left; width: 625.645px; margin-top: 40px; margin-bottom: 48px">Join the Future of Crypto Trading with Demo Web</span>
                  <span class="explore">Experience the power of peer-to-peer Bitcoin trading with Demo Web. Download now and dive into the world of crypto trading!"</span>
                   <div class="d-flex" style="margin-top: 140px; ">
                      <img src="/svg/BTN 1.svg" class="social-icons me-4"/>
                      <img src="/svg/BTN 2.svg" class="social-icons me-2"/>
                      <div class="border-line"></div>
                      <span class="icon-text">Demo Web App now available for download</span>
                    </div>
                </div>

              </v-col>
              <v-col cols="md-6">
                <div class="ma-2 pa-2">
                  <div class="phone-rectangle" style="position: relative; top: -58px">
                    <img src="/svg/phoneHand.svg" v-if="theme.global.current.value.dark"/>
                    <img src="/img/light-phone.png" v-else/>
                    
                </div>
                </div>
              </v-col>
            </v-row>
            </v-container>
          </div>

          <v-container style="margin-top: 70px">
            <Expansion/>
              
          </v-container>

          <Coin-Banner style="margin-bottom:253.88px; margin-top: 19.33px"/>
          
      
        <div class="position-relative">
          <v-container style="position: absolute; top: -197px; left: 0; right: 0;">
            <span class="Demo-header">Demo Web</span>
          </v-container>
            <Footer class=""/>
          </div>
     
      
      
    </div>   
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';

const transaction = ref(true);

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);


const select =ref("Bitcoin")
const coin = ref ("BTC")
const flag = ref("/svg/bitcoin-btc-logo 1.svg")

const locations = [
        { title: 'Bitcoin', coinText:"Dai",  image:"/svg/bitcoin-btc-logo 1.svg" },
        { title: 'Bitcoin', coinText:"BTC",  image:"/svg/bitcoin-btc-logo 1.svg" },
        { title: 'Bitcoin',  coinText:"BTC",  image:"/svg/bitcoin-btc-logo 1.svg" },
        { title: 'Ethereum',  coinText:"ETH",  image:"/svg/bitcoin-btc-logo 1.svg" },
        { title: 'Dodge',  coinText:"DOD",  image:"/svg/bitcoin-btc-logo 1.svg" },
        { title: 'Bitcoin',  coinText:"BTC", image:"/svg/bitcoin-btc-logo 1.svg" },
      ];

const variants = [
        { cardImages: '/svg/Featured icon.svg', title:'Bank transfer', textCaption:'Our guided bank transfer trades make it even easier to sell Bitcoin and receive payment.'}, 
        { cardImages: '/svg/Featured icon (1).svg', title:'Cash payment' , textCaption:'Happy to accept cash? Then you can do just that.'}, 
        { cardImages: '/svg/Featured icon (2).svg', title:'Online Wallets' , textCaption:'Receive payment through popular online wallets including MTN Mobile Money.'}, 
        { cardImages: '/svg/Featured icon (3).svg', title:'Discounted gift cards' , textCaption:'Use your Bitcoin to get big discounts on popular gift cards.'}, 
        { cardImages: '/svg/Featured icon (4).svg', title:'Digital currencies' , textCaption:'Use Tether, Ethereum, Litecoin, and more to sell Bitcoin.'}, 
        { cardImages: '/svg/Featured icon (5).svg', title:'Goods and services' , textCaption:'Use Bitcoin to pay for goods and services from around the world.'}, 
       
  ];
const coinType = [
        { title: 'BTC' },
        { title: 'Ethereum' },
        { title: 'USDT' },
        { title: 'Dodge' },
      ];
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');
@import url('https://fonts.googleapis.com/css2?family=Manrope&family=Poppins&display=swap');


.header-text1{
text-align: center;
font-family: "SF Pro Display" !important;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: 100%; 
letter-spacing: -2.4px;
background: linear-gradient(90deg, #FFF 8.61%, #8E9BAE 91.11%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
/* margin-top: 40px ;
display: flex; */
justify-content: center

}
.header-text1-light{
text-align: center;
font-family: "SF Pro Display" !important;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: 100%; 
letter-spacing: -2.4px;
background: linear-gradient(90deg, #060A1D 7.92%, rgba(6, 10, 29, 0.50) 91.5%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
/* margin-top: 40px ;
display: flex; */
justify-content: center

}

.web{
color: var(--Colors-Base-white, #2873FF);
font-family: "SF Pro Display" ;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: 100% !important;
letter-spacing: -2.4px;
display: flex;

}
.text-img{
  display: flex !important;
  margin: auto;
  justify-content: center;
}
.subtitle-text{
color: #8E9BAE;
text-align: center;
font-family: "SF Pro Display";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 33.6px */
letter-spacing: 0.72px;
width: 713.873px;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
margin-top: 16px;
}
.landing-page-form{
padding: 60px;
border-radius: 15px;
border: 0.5px solid #64748B;
background: rgba(7, 11, 31, 0.80);
backdrop-filter: blur(25px);
align-items: center;
gap: 32px;
width: 652px;

}
.light-landing-page-form{
border-radius: 15px;
background: rgba(255, 255, 255, 0.90);
padding: 60px;
backdrop-filter: blur(25px);
align-items: center;
gap: 32px;
}
.form-wrap{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 68px;
}
.top-ellipse{
  position: absolute;
  top: 0;
  z-index: 10;
  left: 33%;
}
.side-ellipse{
 margin-top: 316px
}
.right-ellipse{
  position: absolute;
  right: 258px;
  z-index: 100;
}
.bottom-ellipse{
  z-index: 10;
  position: absolute;
  bottom: 0;
}
.btn-segment{
display: flex;
height: 48px;
padding: 8px 4px;
justify-content: center;
align-items: center;
align-self: stretch;
border-radius: 16px;
background: var(--Main-Greyscale-90, #10192D);
}
.btn-segment-light{
display: flex;
width: 511px;
height: 48px;
padding: 6.43px 3.215px;
justify-content: center;
align-items: center;
align-self: stretch;
border-radius: 12.86px;
background: var(--Main-Greyscale-5, #F8FAFC);
}
.buy-btn{
display: flex;
height: 40px;
padding: 8px;
border-radius: 12px;
justify-content: center;
align-items: center;
gap: 10px;
flex: 1 0 0;
border: 1px solid rgba(40, 115, 255, 0.33);
background: #060A1D;
color: var(--Main-Primary-100, #2873FF);
text-transform: unset!important;
letter-spacing: 0px!important;
}
.buy-btn-light{
border-radius: 12px;
background: var(--Others-White, #FFF);
box-shadow: 0px 9.645px 9.645px 0px rgba(51, 65, 85, 0.02) !important;
display: flex;
height: 40px;
padding: 8px;
justify-content: center;
align-items: center;
gap: 8.037px;
flex: 1 0 0;
border: unset;
text-transform: unset!important;
letter-spacing: 0px!important;
}
.sell-btn{
display: flex;
border-radius: 12px;
background: var(--Others-White, #FFF);
border: unset;
box-shadow: 0px 9.645px 9.645px 0px rgba(51, 65, 85, 0.02) !important;
justify-content: center;
align-items: center;
gap: 15px;
flex: 1 0 0;
color: var(--Main-Greyscale-40, #8E9BAE);
background: inherit;
box-shadow: none !important;
text-transform: unset!important;
}

.coin-dropdown{
display: flex;
width: 532px;
height: 50px !important;
padding: 10px;
justify-content: space-between;
align-items: center;
border-radius: 15px;
border: 1px solid #1B2537;
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
width: 532px;
height: 50px !important;
padding: 10px;
justify-content: space-between;
align-items: center;
border-radius: 15px;
border: 1px solid #E2E8F0;
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
.frame-1{
display: flex;
width: 380px;
padding: 4px;
align-items: center;
gap: 8px;
border-radius: 100px;
border: 0.5px solid #64748B;
background: rgba(27, 37, 55, 0.50);
backdrop-filter: blur(18.950000762939453px);
margin: auto;
margin-top: 169px ;

}
.frame-1-light{
display: flex;
width: 380px;
padding: 4px;
align-items: center;
gap: 8px;
border-radius: 100px;
border: none;
background: #E9F1FF;
backdrop-filter: blur(18.950000762939453px);
margin: auto;
margin-top: 169px ;

}
.writing-text{
color: var(--Colors-Base-white, #FFF);
text-align: center;
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 14px */
letter-spacing: 0.14px;
}
.writing-text-light{
color: #1B2537;
text-align: center;
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 14px */
letter-spacing: 0.14px;
}
.writing-btn {
display: flex;
width: 74px;
padding: 8px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
align-self: stretch;
text-transform: unset !important;
border-radius: 100px;
background: #2873FF;
font-weight: 500!important;
font-size: 14px;
line-height: 100%; /* 14px */
letter-spacing: -0.14px !important;

}
.chevron-icon{
  display: flex;
  position: absolute;
  right: 15px 
}
.select{
display: flex;
width: 32px;
height: 32px;
justify-content: center;
align-items: center;
/* gap: 10px; */
flex-shrink: 0;
border-radius: 10px;
/* background: #F8FAFC; */
}
.small-text{
color: var(--Main-Greyscale-40, #8E9BAE);
text-align: center;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 18px */
display: flex;
}

.btc-ammt{
color: #8E9BAE;
text-align: center;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 21px */
}
.btc-ammt1{
color: #2873FF;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 150%;
}
.v-list{
  background: #070B1F!important;
  color: white;
}
.pay-with{
color: var(--Colors-Base-white, #FFF);
text-align: center;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 21px */
margin-bottom: 9px !important;
}
.pay-with-light{
color: #10192D;
text-align: center;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 21px */
margin-bottom: 9px !important;
}
.text2{
color: #8E9BAE;
text-align: center;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 21px */
}
.show-all{
color: var(--Main-Primary-100, #2873FF);
text-align: center;
font-family: Manrope;
font-size: 12.86px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 19.289px */
display: flex;
height: 32.149px;
padding: 6.43px;
justify-content: center;
align-items: center;
gap: 8.037px;
border-radius: 9.645px;
background: #10192D;
box-shadow: 0px 9.645px 9.645px 0px rgba(51, 65, 85, 0.02);
text-transform: unset !important;
letter-spacing: 0px;

}
.show-all-light{
color: var(--Main-Primary-100, #2873FF);
text-align: center;
font-family: Manrope;
font-size: 12.86px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 19.289px */
display: flex;
height: 32.149px;
padding: 6.43px;
justify-content: center;
align-items: center;
gap: 8.037px;
border-radius: 9.645px;
background: #F8FAFC;
box-shadow: 0px 9.645px 9.645px 0px rgba(51, 65, 85, 0.02);
text-transform: unset !important;

}

.payment-wrap{
  display: flex;
  gap: 10px;
  margin-top: 9px 
}
.hint-text{
color: #8E9BAE;
text-align: center;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 21px */
margin-top: 9px;
}
.exchange-btn{
width: 532px;
height: 50px!important;
flex-shrink: 0;
margin-top: 32px;
border-radius: 10px;
background: var(--Main-Primary-100, #2873FF);
text-align: center;
/* letter-spacing: unset!important; */
text-transform: unset !important;
/* filter: blur(1px); */
}
.exchange-text{
width: 91px;
height: 21.111px;
flex-shrink: 0;
color: var(--Others-White, var(--Colors-Base-white, #FFF));
text-align: center;
font-family: Manrope;
font-size: 12.86px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 19.289px */
}
.section2{
border-radius: 50px;
border-top: 1px solid #2873FF;
background: rgba(6, 10, 29, 0.50);
backdrop-filter: blur(44.04999923706055px);
margin-top: 170px;
}
.section2-light{
border-radius: 50px;
border-top: 1px solid #2873FF;
background: rgba(255, 255, 255, 0.50);
backdrop-filter: blur(44.04999923706055px);
margin-top: 170px;
}

.section2-title-light{
text-align: center;
font-family: "SF Pro Display";
font-size: 64px;
font-style: normal;
font-weight: 700;
line-height: 120%; /* 76.8px */
letter-spacing: -1.92px;
background: linear-gradient(90deg, #060A1D 6.17%, rgba(6, 10, 29, 0.5) 97.69%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
width: 688.35px;
display: flex;
justify-content: center;
/* margin-top: 40px !important; */
/* margin-bottom: 40px !important; */
margin: auto;
}
.section2-subtitle{
color: #38BDF8;
text-align: center;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 140%; /* 22.4px */
letter-spacing: 0.8px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 173.66px;
letter-spacing: 0.8px;
text-transform: uppercase;
}
.section2-title{
text-align: center;
font-family: "SF Pro Display";
font-size: 64px;
font-style: normal;
font-weight: 700;
line-height: 120%; /* 76.8px */
letter-spacing: -1.92px;
background: linear-gradient(90deg, #FFF 5.29%, #64748B 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
width: 688.35px;
display: flex;
justify-content: center;
margin: auto;
}
.section2-title-light{
text-align: center;
font-family: "SF Pro Display";
font-size: 64px;
font-style: normal;
font-weight: 700;
line-height: 120%; /* 76.8px */
letter-spacing: -1.92px;
background: linear-gradient(90deg, #060A1D 6.17%, rgba(6, 10, 29, 0.50) 97.69%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
width: 688.35px;
display: flex;
justify-content: center;
margin: auto;
}
.caption{
color: #64748B;
text-align: center;
font-family: "SF Pro Display";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 33.6px */
letter-spacing: 0.72px;
width: 690px;
display: flex;
margin: auto;
}
.card-layout{
display: flex;
height: 263px;
padding: var(--spacing-2xl, 20px);
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
flex: 1 0 0;
border-radius: 15px;
border: 0.5px solid #2f3946 !important;
background: #10192D;
}
.card-layout-light{
display: flex;
height: 263px;
padding: var(--spacing-2xl, 20px);
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
flex: 1 0 0;
border-radius: 15px;
border: 0.5px solid #F8FAFC !important;
background: #F8FAFC;
}
.text-caption{
color: var(--Colors-Base-white, #FFF);
font-family: "SF Pro Display";
font-size: 16px !important;
font-style: normal;
font-weight: 400!important;
line-height: 140%; /* 22.4px */
letter-spacing: 0.32px!important;
margin-top: 8px;
cursor: pointer;
}
.text-caption-light{
color: #64748B;
font-family: "SF Pro Display";
font-size: 16px !important;
font-style: normal;
font-weight: 400!important;
line-height: 140%; /* 22.4px */
letter-spacing: 0.32px!important;
margin-top: 8px;
cursor: pointer;
}
.green-coin{
display: flex;
right: 145px;
max-width: 100%;
height: auto;
}
.orange-coin{
right: 164px;
top: 24px;
max-width: 100%;
height: auto;
}
.yellow-coin{
z-index: 100;
left: -13%;
top: 199px;
max-width: 100%;
height: auto;
}
.light-green-coin{
right: -75px;
top: 148px;
max-width: 100%;
height: auto;
}
.pink-coin{
  left: 183px;
  top: 27px;
}
.sell-btc-text{
color: white !important;
text-align: center;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 16px */
letter-spacing: 0.16px;

}
.sell-btc-text-light{
color: #1B2537 !important;
text-align: center;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 16px */
letter-spacing: 0.16px;

}
.card-header{
color: var(--Colors-Base-white, #FFF);
font-family: "SF Pro Display";
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 36px;
}
.card-header-light{
color: var(--Colors-Base-black, #000);
font-family: "SF Pro Display";
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 36px;
}

.Demo-header{
-webkit-text-stroke-width: 1;
-webkit-text-stroke-color: #000;
font-family: "SF Pro Display";
font-size: 240.955px;
font-style: normal;
font-weight: 700;
line-height: normal;
background: linear-gradient(90deg, rgba(40, 115, 255, 0.39) 0%, rgba(40, 115, 255, 0.00) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
width: 1194px;
height: 313.157px;
display: block;

}
.dialog{
background: rgba(6, 10, 29, 0.70)!important;
backdrop-filter: blur(50px) !important;
border-radius: 20px !important;
color: white;
}
.barcode-section {
display: flex;
height: 455px;
flex-direction: column;
border-radius: 15px;
border: 0.5px solid #2f3946 !important;
background: #10192D;
display: flex;
/* padding: 30px ; */
}
.barcode-section-light {
display: flex;
height: 455px;
flex-direction: column;
border: 1px solid #DBE8FF;
border-radius: 25px;
background: linear-gradient(180deg, rgba(248, 250, 252, 0.00) 65.19%, #F8FAFC 100%);
display: flex;
/* padding: 30px ; */
}

.wallet-frame{
display: flex;
padding: 8px 10px;
align-items: center;
gap: 8px;
border-radius: 100px;
background: rgba(40, 115, 255, 0.10);
color: white;
margin-top: 15px;
width: 88px;
height: 36px;
}
.free-demo{
font-family: "SF Pro Display";
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: 120%; /* 38.4px */
background: linear-gradient(90deg, #FFF 5.29%, #64748B 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin-top: 16px;
}
.free-demo-light{
font-family: "SF Pro Display";
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: 120%; /* 38.4px */
background: linear-gradient(90deg, #060A1D 6.17%, rgba(6, 10, 29, 0.50) 97.69%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin-top: 16px;
}
.section3{
background: #10192D;
display: flex;
/* height: 897px; */
padding: 0px 120px;
align-items: center;
gap: 44px;
flex-shrink: 0;
}
.section3-light{
 background: linear-gradient(270deg, #DBE8FF 0%, rgba(219, 232, 255, 0.00) 101.34%);
display: flex;
/* height: 897px; */
padding: 0px 120px;
align-items: center;
gap: 44px;
flex-shrink: 0;
}
.explore{
color: #64748B;
font-family: "SF Pro Display";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 33.6px */
letter-spacing: 0.72px;
margin-top: 48px;
}

.border-line{
border-left: 1px solid #8E9BAE;
gap: 10px;
margin-left: 13px;
margin-right: 28.5px;
}

.social-icons{
  cursor: pointer;
}
</style>
