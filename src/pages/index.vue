<template>
  
    <img src="/svg/Background pattern.svg" class="position-absolute bg-vector" style="opacity: 0.4; left: 0;  right: 0; display: flex; margin: auto" v-if="theme.global.current.value.dark"/>
    <img src="/svg/Background pattern.svg" class="position-absolute bg-vector" style="opacity: 0.2; left: 0;  right: 0; display: flex; margin: auto" v-else/>
       
    <div>
      <div>
        
        <Index-header title="Log in" link="/authentication/login" class="desktop-header"/>
        <Mobile-header class="mobile-header"/>
        <section class="position-relative">
            <v-container class="position-relative">
              <div class="position-absolute">    
                <img src="/svg/Frame.svg" class="pink-coin position-absolute flex-lg-and-up hidden-sm-and-down"/>  
              </div>
                <div>
                  <div class="frame-1" :class="isDark ? 'frame-1':'frame-1-light'">
                    <v-btn color="#2873FF" class="writing-btn">Writing</v-btn>
                    <span class="writing-text" :class="isDark ? 'writing-text':'writing-text-light'">The number one trading platform in Europe</span>
                    <img src="/svg/blue-arrow.svg"/>
                  </div>
                  

                   <div style="justify-content: center; display: flex; margin-top: 40px; position: relative; z-index: 1000;">
                         <span class="headertext1" :class="isDark ? 'header-text1':'header-text1-light'">Trade Bitcoin on</span>
                           <img src="/img/Frame.png" class="orange-coin position-absolute flex-lg-and-up hidden-sm-and-down"/> 
                    </div>



                <div class="d-flex text-img position-relative" v-if="theme.global.current.value.dark">
                  <span class="web webi" style="margin-right: 78px; z-index: 1000;">Demo Web</span>
                  <img src="/svg/Frame 1305.svg" class="demo-star" style="position: absolute; margin-left: 375px ;top: -27px;  max-width: 100%; height: auto;" /> 
                </div>
                <div class="d-flex text-img" v-else>
                  <span class="web">Demo Web✨️</span>
                </div>
                  <div class="position-relative">
                    <img src="/svg/Group 1318.svg" class="position-absolute flex-lg-and-up hidden-sm-and-down" style="top: -76px; left: -4%;"/>
                    <img src="/svg/Group 1320.svg" class="green-coin position-absolute flex-lg-and-up hidden-sm-and-down"/>
                  </div>
                  <div>
                    <span class="subtitle-text">Join over 12 million people just like you on everyone's favorite peer-to-peer platform to buy and sell Bitcoin.</span>
                  </div> 
                <div class="form-wrap position-relative">
                  <img src="/img/Group 1302.png" class="top-ellipse"/>
                  <img src="/img/Group 1301.png" class="side-ellipse"/>
                  <img src="/svg/Ellipse.svg" class="blue-ellipse position-absolute"/>
                  <img src="/img/Group 1299.png" class="bottom-ellipse"/>


                  <div class="landing-page-form" :class="isDark ? 'landing-page-form':'light-landing-page-form'" >
                      <img src="/svg/bitcoin-star.svg" class="yellow-coin position-absolute"/>

                      <img src="/svg/Frame (2).svg" class="light-green-coin position-absolute"/>

                    <div class="btn-segment" :class="isDark ? 'btn-segment':'btn-segment-light'">
                      <v-btn  :class="`${transaction ? 'buy-btn': 'sell-btn'} ${isDark ? 'buy-btn':'buy-btn-light'}`" @click.prevent="transaction=true" > Buy </v-btn>
                      <v-btn :class="`${!transaction ? 'buy-btn': 'sell-btn'} ${isDark ? 'buy-btn':'buy-btn-light'}` " @click.prevent="transaction=false" >Sell</v-btn>
                    </div>

                    <div style="margin-top: 24px;">
                      <v-menu>
                        <template v-slot:activator="{ props }">
                          <v-btn :class="isDark ? 'coin-dropdown':'coin-dropdown-light'" style="letter-spacing: 0px"
                            v-bind="props">
                            <v-img  width="25" class="me-3 select" :src="flag"/> 
                            <div  class="py-3" style="display: grid; cursor: pointer;">
                            <span class="me-2">{{select}}</span> 
                            <span class="me-2 small-text">{{coin}}</span> 
                            </div>
                            <v-icon icon="mdi-chevron-down" id="filter-toggle" color="#8E9BAE" class="chevron-icon"></v-icon>
                          </v-btn>
                        </template>

                        <v-list>
                          <v-list-item class="coin-bg1">
                            <div  @click.stop style="margin-top: 15px; margin-bottom: 15px;">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" style="position: absolute; top: 35px; margin-left: 19px;">
                                    <path d="M17 17L12.9497 12.9497M12.9497 12.9497C14.2165 11.683 15 9.933 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C9.933 15 11.683 14.2165 12.9497 12.9497Z" stroke="#8E9BAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                               <input type="text"  placeholder="Search for Coins..." v-model="input" style="outline: none; border:  1px solid #64748B; height: 48px; width: 100%; border-radius: 25px; padding-left: 60px;"/>
                            </div>


                            <div  v-for="(item, index) in filteredItems?.length ? filteredItems : location" :key="index" class="d-flex py-3" style="cursor: pointer">
                              <v-list-item-title @click="select=item.title; coin=item.coinText; flag= item.image" class="d-flex">
                              <v-img width="20" class="rounded-5 me-3" :src="item.image"/>    
                              <span v-if="item.coinText"> {{ item.title }} </span>
                              <p v-else>Coin Not Found</p>
                            </v-list-item-title>
                            </div>
                          </v-list-item>
                        </v-list>
                      </v-menu> 
                      <div style="margin-top:9px">  
                        <span class="btc-ammt">40 BTC = <span class="btc-ammt1">40,144.86 USD</span></span>
                      </div>
                      <div style="margin-top: 30px;">
                      <span :class="isDark ? 'pay-with':'pay-with-light'" > {{transaction? "Pay with" : "Get paid via" }}</span>
                          <div  :class="isDark ? 'coin-dropdown':'coin-dropdown-light'"  style="margin-top:9px; width: 100%;">
                            <span class="text2" style="font-weight: 700; display: contents; font-family: Manrope;">Select payment method (20+)</span>
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
                          <div class="payment-wrap" style="overflow: scroll;">
                             <Transaction-btn buttonText="Bank Transfers" class="mt-4"/>
                             <Transaction-btn buttonText="Paypal" class="mt-4"/>
                             <Transaction-btn buttonText="Paystack" class="mt-4"/>
                             <Transaction-btn buttonText="Flutterwave" class="mt-4"/>
                             <Transaction-btn buttonText="Other bank transfer" class="mt-4"/>
                          </div>
                      </div>
                      <div style="margin-top: 30px;">
                        <span  :class="isDark ? 'pay-with':'pay-with-light'">{{ transaction? "I want to  spend" : "I want to  receive" }}</span>
                        <div class="d-flex" style="margin-top:9px; position: relative;">
                        <input type="text" style="outline: none; position:relative; width: 100%;" :class="isDark ? 'coin-dropdown':'coin-dropdown-light'"
                                  
                        placeholder="Enter Amount"/>
                        <v-menu transition="scale-transition">
                            <template v-slot:activator="{ props }">
                              <v-btn v-bind="props" class="position-absolute" :class="isDark ? 'show-all':'show-all-light'" style="right: 10px;margin-top: 8px;font-weight: 700;">
                                {{ selected }}
                                <v-icon  icon="mdi-chevron-down notranslate"  color="#8E9BAE" style="margin-left: 6px "></v-icon>
                                <!-- <v-icon v-else icon="mdi-chevron-up"  color="#8E9BAE" style="margin-left: 6px "></v-icon> -->
                            </v-btn>
                            </template>

                            <v-list>
                              <v-list-item v-for="(item, i) in coinType" :key="i" style="cursor: pointer;">
                                  <v-list-item-title @click="selected=item.title">{{ item.title }}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                        </v-menu>
                        </div>
                        <div style=" margin-top: 9px ;">
                          <span class="hint-text">Mininum: 10 {{ selected }}</span>
                        </div>
                      </div>
                      <v-btn class="exchange-btn" color=""> <span class="exchange-text">Exchange Now </span></v-btn>
                    </div>
                  </div>
              </div>
                </div>
            </v-container>

          </section>



      </div>
          <v-container class=" position-relative">
            <div class=""> 
                      <img src="/svg/Ellipse 2813.svg"  class="position-absolute blue-ellipse1" style="right:0; bottom: 65%;"/>
                <div class="section2i" :class="isDark ? 'section2':'section2-light'">
                      <span class="section2-subtitle card-sub1">TRADE YOUR COIN LIKE A FOREX EXPERT</span>
                      <span class="section2-title" :class="isDark ? 'section2-title':'section2-title-light'" style="margin-top: 48px; margin-bottom: 48px">Over 350 ways to buy and sell Bitcoin.</span>
                      <span class="explore-trade">Explore our Marketplace and start trading with your favorite payment methods or discover something new.</span>
                        <div class="mx-auto btn-segment2" :class="isDark ? 'btn-segment':'btn-segment-light'" style="width:365px; border-radius:100px; padding: 5px; margin-top:72px; margin-bottom: 72px;">

                            <v-btn :class="`${transaction1 ? 'buy-btn btn-seg1': 'sell-btn'} ${isDark ? 'buy-btn':'buy-btn-light'}`" @click.prevent="transaction1=true" style="border-radius: 41px !important; height: 40px !important;">Sell✨</v-btn>
                            <v-btn :class="`${!transaction1 ? 'buy-btn': 'sell-btn'} ${isDark ? 'buy-btn':'buy-btn-light'}` " @click.prevent="transaction1=false" style="border-radius: 41px !important; height: 40px !important;" >Buy</v-btn>
                        </div>
                </div>
            
                <div class="card-layout1">
                    <v-row align="center" justify="center">
                      <v-col v-for="(variant, i) in variants"   sm="4" :key="i" cols="12">
                        <v-card  :class="isDark ? 'card-layout':'card-layout-light'" bg-color="#10192D"  color="white" :variant="variant">
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

        <v-container class=" position-relative section2ii" >
              <img src="/svg/Ellipse 2813.svg" class="position-absolute blue-ellipse2" style="right:0; margin-top: 144px ;"/>
            <div  :class="isDark ? 'section2':'section2-light'">
              <span class="section2-subtitle sub-text2" style="margin-top: 201.5px; margin-bottom: 40px;">Awesome features of The demo web</span>
              <span class="section2-titleii" :class="isDark ? 'section2-title':'section2-title-light'" style="margin-bottom: 88px;">Welcome to a financial system for the 100%.</span>
            </div>

            <Frame/>
            
            <div style="margin-top: -5px;">
              <Reviews/>
            </div>
            
            <v-row no-gutters class="mt-7">
              <v-col cols="12" sm="6" md="6">
                <div class="demo-div1" style="margin-inline-end: 28px;">
                  <div class="barcode-section"  :class="isDark ? 'barcode-section':'barcode-section-light'">
                      <div class="rectangle" style="display: flex; justify-self: center;" >
                          <img src="/svg/grouped-gradient.svg" style="display: flex; justify-self: center; width: 100%; margin: auto" class=""  v-if="theme.global.current.value.dark"/>
                          
                          <div style=" background: linear-gradient(180deg, #DBE8FF 0%, rgba(219, 232, 255, 0.00) 101.34%);border-radius: 15px; width: 100%;"  v-else>
                          <img src="/svg/demo-light.svg"  style="display: flex; justify-self: center; width: 90%; margin: auto;margin-top:27px; " class=""/>
                          </div>
                      </div> 
                          <div class="wallet-div" style="display:grid;  margin-left: 36px">
                    
                                <v-btn class="wallet-frame" style="width: 88px;">
                                  <img src="/svg/Wallet.svg" class="me-2">
                                  <span  :class="isDark ? 'sell-btc-text':'sell-btc-text-light'" style="font-size: 14px !important;  font-weight: 600;">wallet</span>
                                </v-btn>
                                <div style="display: grid">
                                  <span class="buy" :class="isDark ? 'free-demo':'free-demo-light'">Free Demo Web Wallet</span>
                                  <span style="margin-top: 8px; color: #8E9BAE;line-height: 140%; font-family: SF Pro Display ;">Get a free <NuxtLink to="#"><span class="text-demoi"  style="font-size: 16px;color: #2873FF;font-weight: 600; font-family: SF Pro Display; letter-spacing: 0.32px;">Demo Web</span></NuxtLink> 
                                  when you sign up to receive, send, and store your Bitcoin.</span>
                                </div>
                        
                          </div>
                  </div>
                </div>

              </v-col>
              <v-col cols="12" sm="6" md="6">
                <div class="">
                   <div class="barcode-section"   :class="isDark ? 'barcode-section':'barcode-section-light'">
                      <div class="rectangle">
                        <div style="padding-top: 28px;" v-if="theme.global.current.value.dark">
                          <img src="/svg/Group-barcode.svg"  style="display: flex; justify-self: center; margin: auto; width: 93%;" />
                        </div> 
                          <div class="mb-7" style="background: linear-gradient(180deg, #DBE8FF 0%, rgba(219, 232, 255, 0.00) 101.34%); padding-top: 28px; border-radius: 15px; width: 100%;"  v-else>
                            <img src="/svg/barcode-light.svg"  style="display: flex; justify-self: center; margin: auto; width: 90%;"/>
                          </div>
                      </div>
                      <div class="wallet-div" style="margin-left: 36px"> 
                            <v-btn class="wallet-frame" style="width: 95px; height: 36px;">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" class="me-2">
                                  <path d="M12.8492 15.7835C12.9107 15.8778 12.9456 15.987 12.9502 16.0995C12.9548 16.212 12.9289 16.3236 12.8753 16.4226C12.8217 16.5216 12.7423 16.6043 12.6456 16.6619C12.5489 16.7195 12.4384 16.7499 12.3258 16.7499H0.79924C0.686659 16.7499 0.576171 16.7195 0.479451 16.6619C0.382731 16.6043 0.303369 16.5216 0.249751 16.4226C0.196133 16.3236 0.17025 16.212 0.174835 16.0995C0.179421 15.987 0.214305 15.8778 0.275803 15.7835C1.15557 14.4293 2.44962 13.3959 3.96487 12.8374C3.12721 12.2798 2.49125 11.4674 2.15104 10.5203C1.81082 9.57325 1.78441 8.54185 2.07572 7.57862C2.36702 6.6154 2.96057 5.77149 3.76859 5.17169C4.57662 4.57189 5.55621 4.24805 6.56252 4.24805C7.56883 4.24805 8.54843 4.57189 9.35645 5.17169C10.1645 5.77149 10.758 6.6154 11.0493 7.57862C11.3406 8.54185 11.3142 9.57325 10.974 10.5203C10.6338 11.4674 9.99784 12.2798 9.16018 12.8374C10.6754 13.3959 11.9695 14.4293 12.8492 15.7835ZM19.7172 15.7718C18.8372 14.4233 17.546 13.3943 16.0352 12.8374C17.0241 12.1713 17.722 11.1534 17.9868 9.99084C18.2516 8.8283 18.0635 7.60853 17.4607 6.57981C16.8578 5.5511 15.8857 4.79076 14.742 4.45357C13.5984 4.11637 12.3692 4.22766 11.3047 4.76479C11.264 4.78581 11.2284 4.81552 11.2005 4.85182C11.1725 4.88811 11.1529 4.93011 11.143 4.97483C11.1331 5.01956 11.1331 5.06592 11.1431 5.11062C11.1531 5.15533 11.1728 5.19729 11.2008 5.23354C11.9923 6.22089 12.4469 7.43576 12.498 8.70019C12.549 9.96463 12.1938 11.2122 11.4844 12.2601C11.4385 12.3286 11.4216 12.4124 11.4373 12.4933C11.4529 12.5742 11.4999 12.6457 11.568 12.6921C12.4929 13.3377 13.2847 14.1554 13.9 15.1007C14.1482 15.4808 14.2495 15.9381 14.1852 16.3874C14.1779 16.4321 14.1805 16.4779 14.1927 16.5215C14.2048 16.5651 14.2263 16.6055 14.2557 16.64C14.285 16.6745 14.3215 16.7022 14.3626 16.7212C14.4038 16.7401 14.4485 16.75 14.4938 16.7499H19.2047C19.3423 16.75 19.4761 16.7046 19.5853 16.6208C19.6945 16.5371 19.773 16.4196 19.8086 16.2867C19.8303 16.1992 19.8334 16.1082 19.8177 16.0195C19.8019 15.9308 19.7677 15.8464 19.7172 15.7718Z" fill="#2873FF"/>
                              </svg>
                              <span :class="isDark ? 'sell-btc-text':'sell-btc-text-light'" style="font-size: 14px !important; font-weight: 600;">Friends</span>
                            </v-btn>
                            <div style="display:grid;">
                              <span class="buy"  :class="isDark ? 'free-demo':'free-demo-light'" style="margin-top : 16px ">Invite friends</span>
                              <span style="margin-top: 14px; color: #8E9BAE;line-height: 140%; font-family: SF Pro Display;">Get your friends and family  to
                                <NuxtLink to="/authentication/register"><span class="text-demoi"  style="font-size: 16px; color: #8E9BAE; font-family: SF Pro Display; font-weight: 600; letter-spacing: 0.32px; text-decoration-line: underline;">sign up</span></NuxtLink> 
                              for Demo Web
                              </span>
                            </div>
                      </div>
                   </div>
                 
                </div>
              </v-col>
            </v-row>
            </v-container>

          <div class="section3" :class="isDark ? 'section3':'section3-light'" style="margin-top: 200px;">
            <v-container>
                <v-row no-gutters  class="phone-section" style="padding-top: 170px; padding-bottom: 140px">
              <v-col cols="md-7" sm="12">
                <div class="">
                  <span class="section2-subtitlei1 sub-text2i" style="justify-content: flex-start; margin-top: 0px !important">THE DEMO WEB IS ALL YOU NEED FOR DAY TO DAY TRADING</span>
                  <span class="section2-titlei2" :class="isDark ? 'section2-title1':'section2-title1-light'" style="text-align: start !important; display: flex; justify-content: flex-start !important;  margin-top: 24px; margin-bottom: 32px">Join the Future of <br>Crypto Trading with <br>Demo Web</span>
                  <span class="explore captionii">Experience the power of peer-to-peer Bitcoin trading with Demo Web. Download now and dive into the world of crypto trading!"</span>
                   <div class="d-flex social-icons-div" style="margin-top: 88px; width: fit-content;">
                      <img src="/svg/applestore.svg" style="max-width: 100%;" class="social-icons me-4"/>
                      <img src="/svg/playstore.svg" style="max-width: 100%;" class="social-icons me-2"/>
                      <div class="border-line flex-lg-and-up hidden-sm-and-down"></div>
                      <span class="icon-text" style="color: #8E9BAE;font-family: SF Pro Display; font-weight: 500; font-size: 16px;width: 155px;">Demo Web App now  available for download</span>
                    </div>
                </div>

              </v-col>
              <v-col cols="md-5">
                <div class="">
                  <div class="phone-rectangle" style="position: relative; top: -58px; display: flex; justify-content: center;">
                    <div v-if="theme.global.current.value.dark">
                      <img src="/svg/mobile-dark.svg" class="mobile-screen"/>
                      <img src="/svg/phoneHand.svg" class="desktop-screen flex-lg-and-up hidden-sm-and-down"/>
                   </div>
                   <div v-else>
                    <img src="/svg/mobile-light.svg" class="mobile-screen"/>
                    <img src="/img/light-phone.png" style="max-width: 100%; z-index: 1000;" class="desktop-screen flex-lg-and-up hidden-sm-and-down"/>
                  </div>
                  </div>
                </div>
              </v-col>
            </v-row>
            </v-container>
          </div>

          <v-container style="margin-top: 70px">
            <Expansion/>
              
          </v-container>

          <Coin-Banner style="margin-bottom:253.88px; margin-top: 19.33px" class="banner-wrap"/>
          
      
        <div class="position-relative">
          <v-container style="position: absolute; top: -197px; left: 0; right: 0;">
            <span class="Demo-header">Demo Web</span>
          </v-container>
            <Footer class="desktop-footer"/>
            <Mobile-footer class="mobile-footer"/>
          </div>
     
      
      
    </div>   
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';

const transaction = ref(true);
const transaction1 = ref(true);

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);


const select =ref("Bitcoin")
const coin = ref ("BTC")
const flag = ref("/svg/bitcoin-btc-logo 1.svg")

const variants = [
        { cardImages: '/svg/Featured icon.svg', title:'Bank transfer', textCaption:'Our guided bank transfer trades make it even easier to sell Bitcoin and receive payment.'}, 
        { cardImages: '/svg/Featured icon (1).svg', title:'Cash payment' , textCaption:'Happy to accept cash? Then you can do just that.'}, 
        { cardImages: '/svg/Featured icon (2).svg', title:'Online Wallets' , textCaption:'Receive payment through popular online wallets including MTN Mobile Money.'}, 
        { cardImages: '/svg/Featured icon (3).svg', title:'Discounted gift cards' , textCaption:'Use your Bitcoin to get big discounts on popular gift cards.'}, 
        { cardImages: '/svg/Featured icon (4).svg', title:'Digital currencies' , textCaption:'Use Tether, Ethereum, Litecoin, and more to sell Bitcoin.'}, 
        { cardImages: '/svg/Featured icon (5).svg', title:'Goods and services' , textCaption:'Use Bitcoin to pay for goods and services from around the world.'}, 
       
  ];

const selected =ref("USD")
const coinType = [
        { title: 'EUR' },
        { title: 'AFN' },
        { title: 'GBP' },
        { title: 'AUD' },
      ];

let input = ref("");

const location = ref([
  { title: 'Bitcoin', coinText:"Dai",  image:"/svg/bitcoin-btc-logo 1.svg" },
  { title: 'Ethereum',  coinText:"ETH",  image:"/svg/bitcoin-btc-logo 1.svg" },
  { title: 'Dodge',  coinText:"DOD",  image:"/svg/bitcoin-btc-logo 1.svg" },
  { title: 'Bitcoin',  coinText:"BTC", image:"/svg/bitcoin-btc-logo 1.svg" },
]);

  const filteredItems = computed(() => {
  const searchTerm = input.value.toLowerCase();
  return location.value.filter((loc) => {
  const lowerTitle = loc.title.toLowerCase();
  const lowerCoinText = loc.coinText.toLowerCase();
  return (
    lowerTitle.includes(searchTerm) || lowerCoinText.includes(searchTerm)
  );
  });
});


</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');
@import url('https://fonts.googleapis.com/css2?family=Manrope&family=Poppins&display=swap');


.header-text1{
text-align: center;
font-family: "SF Pro Display" !important;
font-size: 80px ;
font-style: normal;
font-weight: 700;
line-height: 100%; 
letter-spacing: -2.4px;
background: linear-gradient(90deg, #FFF 8.61%, #8E9BAE 91.11%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
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
z-index: 1000;
position: relative;
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
border: 1px solid #DBE8FF !important;
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
font-family: "SF Pro Display";
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
font-family: "SF Pro Display";
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
justify-content: center !important;
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
width: 78px;
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
background: #F8FAFC !important;
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
letter-spacing: unset!important;
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
/* width: 688.35px; */
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
.section2-subtitlei{
color: #38BDF8;
text-align: center;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 140%; /* 22.4px */
letter-spacing: 0.8px;
/* display: flex; */
/* justify-content: center; */
/* align-items: center; */
margin-top: 173.66px;
letter-spacing: 0.8px;
text-transform: uppercase;
}
.section2-subtitlei1{
color: #38BDF8;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 140%; /* 22.4px */
letter-spacing: 0.8px;
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
.section2-title1{
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
/* margin: auto; */
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
.section2-title1-light{
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
/* margin: auto; */
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
right: 2%;
max-width: 100%;
height: auto;
}
.orange-coin{
right: 10%;
/* margin-bottom: 60px; */
max-width: 13%;
height: auto;
top: -64px;
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
  margin-left: 120px;
  top: 190px;
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
-webkit-text-stroke-color: #000 !important;
font-family: "SF Pro Display";
font-size: 240.955px;
font-style: normal;
font-weight: 700;
line-height: normal;
background: linear-gradient(90deg, rgba(40, 115, 255, 0.39) 0%, rgba(40, 115, 255, 0.00) 100%) !important;
background-clip: text !important;
-webkit-background-clip: text !important;
-webkit-text-fill-color: transparent !important;
width: 1194px;
height: 313.157px;
display: block;
-webkit-text-stroke-width: 0.2px;
-webkit-text-stroke-color: #2873FF !important;
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
border: 0.5px solid #2f3946;
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
width: fit-content;
height: 36px;
text-transform: capitalize;
letter-spacing: 0px;
box-shadow: none;
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
padding: 0px 80px;
align-items: center;
gap: 44px;
flex-shrink: 0;
}
.section3-light{
background: #E9F1FF;
display: flex;
padding: 0px 80px;
align-items: center;
gap: 44px;
flex-shrink: 0;
}
.explore{
color: #8E9BAE;
font-family: "SF Pro Display";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 33.6px */
letter-spacing: 0.72px;
width: 612px;
display: flex;
justify-content: flex-start;
}
.explore-trade{
color: #8E9BAE;
font-family: "SF Pro Display";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 33.6px */
letter-spacing: 0.72px;
width: 690px;
display: flex;
justify-content: center;
text-align: center;
margin: auto;
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

::-webkit-input-placeholder {

color: #8E9BAE !important;
font-family: Manrope !important;
font-size: 14px !important;
font-style: normal;
font-weight: 700 !important;
line-height: 150% !important; /* 21px */
}
.coin-bg1 {
border-radius: 15px;
background: #1B2537;
}
::-webkit-scrollbar{
  display: none;
}
</style>
