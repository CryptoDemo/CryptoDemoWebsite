<template>
  <div>

    <img
      :src="isDark ? 'https://res.cloudinary.com/dfejrmsq5/image/upload/v1711619522/Background_pattern_cr8ghg.svg' : 'https://res.cloudinary.com/dfejrmsq5/image/upload/v1711619522/Background_pattern_cr8ghg.svg'"
      class="position-absolute bg-vector" style="opacity: 0.4; left: 0;  right: 0; display: flex; margin: auto"
      alt="betacrypto-img1" v-if="isDark" />

    <div>

      <Index-header title="Log in" link="https://cryptodemo-inhouse.netlify.app/login" class="desktop-header" />
      <Mobile-header class="mobile-header" />
      <div style="position: relative;">
        <section class="position-relative">
          <v-container class="position-relative">
            <div class="position-absolute">
              <img src="/svg/Frame.svg" ref="img1" class="pink-coin position-absolute flex-lg-and-up hidden-sm-and-down"
                alt="betacrypto-img-3" />
            </div>
            <div>
              <div :class="isDark ? 'frame-1' : 'frame-1-light'">
                <v-btn @click="showPushInfo" :disabled="isPushActive" color="#2873FF" class="writing-btn">
                  Betacrypto
                </v-btn>

                <span class="writing-text" :class="isDark ? 'writing-text-dark' : 'writing-text-light'">The number one
                  trading platform in Europe</span>
                <img src="/svg/blue-arrow.svg" alt="betacrypto-img-4" />
              </div>

              <div style="justify-content: center; display: flex; margin-top: 40px; position: relative; z-index: 1000;">
                <span class="headertext1 header-text1"
                  :class="isDark ? 'header-text1-dark' : 'header-text1-light'">Trade
                  Bitcoin on</span>
                <img src="/img/Frame.png" ref="fade1"
                  class="orange-coin position-absolute flex-lg-and-up hidden-sm-and-down" alt="betacrypto-img-5" />
              </div>

              <div class="d-flex text-img position-relative" v-if="isDark">
                <span class="web webi" style="margin-right: 78px; z-index: 1000;">Betacrypto</span>
                <img src="/svg/Frame 1305.svg" class="demo-star"
                  style="position: absolute; margin-left: 375px ;top: -27px;  max-width: 100%; height: auto;"
                  alt="betacrypto-img-6" />
              </div>
              <div class="d-flex text-img" v-else>
                <span class="web">Betacrypto✨️</span>
              </div>
              <div class="position-relative">
                <img src="/svg/Group 1318.svg" class="position-absolute flex-lg-and-up hidden-sm-and-down"
                  style="top: -76px; left: -4%;" alt="betacrypto-img-7" ref="fade2">
                <img src="/svg/Group 1320.svg" ref="img2"
                  class="green-coin position-absolute flex-lg-and-up hidden-sm-and-down" alt="betacrypto-img-8" />
              </div>
              <div>
                <span class="subtitle-text">Join over 12 million people just like you on everyone's favorite
                  peer-to-peer platform to buy and sell Bitcoin.</span>
              </div>
              <div class="form-wrap position-relative">

                <img src="/svg/Ellipse.svg" class="blue-ellipse position-absolute" alt="betacrypto-img-9" />

                <div class="landing-page-form" :class="isDark ? 'landing-page-form' : 'light-landing-page-form'">
                  <span class="top-grad border-span"></span>
                  <span class="right-grad"></span>
                  <span class="bottom-grad border-span"></span>
                  <span class="left-grad"></span>
                  <img src="https://res.cloudinary.com/dfejrmsq5/image/upload/v1711619519/bitcoin-star_h5jhpu.svg"
                    ref="img3" class="yellow-coin position-absolute" alt="betacrypto-img-10" />
                  <img src="/svg/Frame (2).svg" class="light-green-coin position-absolute" alt="betacrypto-img-11"
                    ref="img4" />

                  <div class="btn-segment" :class="isDark ? 'btn-segment' : 'btn-segment-light'">
                    <v-btn :class="`${transaction ? 'buy-btn' : 'sell-btn'} ${isDark ? 'buy-btn' : 'buy-btn-light'}`"
                      @click.prevent="transaction = true"> Buy </v-btn>
                    <v-btn :class="`${!transaction ? 'buy-btn' : 'sell-btn'} ${isDark ? 'buy-btn' : 'buy-btn-light'}`"
                      @click.prevent="transaction = false">Sell</v-btn>
                  </div>


                  <div style="margin-top: 24px;">
                    <BlockChain />
                    <div style=" margin-top: 9px ;">
                      <span class="hint-text mt-8">Select Blockchain network</span>
                    </div>

                  </div>

                  <div style="margin-top: 24px;">
                    <v-menu>
                      <template v-slot:activator="{ props }">
                        <v-btn @click="toggleChevron" :class="isDark ? 'coin-dropdown' : 'coin-dropdown-light'"
                          style="letter-spacing: 0px; box-shadow: none" v-bind="props">
                          <img width="25" class="me-3 select" :src="icon" alt="betacrypto-img-12" />
                          <div class="py-3" style="display: grid; cursor: pointer;">
                            <span class="me-2">{{ select }}</span>
                            <span class="me-2 small-text">{{ coin }}</span>
                          </div>
                          <v-icon icon="mdi-chevron-down" id="filter-toggle" color="#8E9BAE" class="chevron-icon"
                            :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']"></v-icon>
                        </v-btn>
                      </template>

                      <div class="coin-overlay" style="height: 200px">
                        <v-list :class="isDark ? 'coin-bg1' : 'coin-bg1-light'"
                          style="border-radius: 10px; margin-top: 10px;">

                          <v-list-item style="width: -webkit-fill-available;">
                            <div @click.stop style="margin-top: 8px; margin-bottom: 15px;">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                fill="none" style="position: absolute; top: 33px; margin-left: 45px;">
                                <path
                                  d="M17 17L12.9497 12.9497M12.9497 12.9497C14.2165 11.683 15 9.933 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C9.933 15 11.683 14.2165 12.9497 12.9497Z"
                                  stroke="#8E9BAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                              <v-textarea clearable variant="plain" rows="1" no-resize placeholder="Search for Coins..."
                                v-model="input"
                                style=" border: 1px solid #64748B; height: 55px; margin: auto;  border-radius: 30px; padding-left: 45px; align-items: center; width: 90%;"></v-textarea>
                            </div>
                            <div style="height: auto; max-height: 250px; overflow: scroll">
                              <div
                                v-for="(item, index) in filteredItems?.length ? filteredItems : pinia.state.tokenLists"
                                :key="index" class="d-flex py-2">
                                <v-list-item @click="select = item.name; coin = item.symbol; icon = item.icon"
                                  class="d-flex" style="align-items: center">
                                  <div class="ml-7" style="display: flex">
                                    <img width="35" class="rounded-5 me-3" :src="item.icon" alt="betacrypto-img-14" />
                                    <img :src="chainIcon?.icon" width="15"
                                      style="position: relative; right: 25px; margin-top: 16px;"
                                      alt="betacrypto-img-15" />
                                    <div>
                                      <span> {{ item.name }} </span>
                                      <span class="small-text">{{ item.symbol }}</span>
                                    </div>
                                  </div>
                                </v-list-item>
                              </div>
                            </div>
                          </v-list-item>
                        </v-list>
                      </div>
                    </v-menu>

                    <div style="margin-top:9px">
                      <span class="btc-ammt">1 {{ coin }} = USD <span class="btc-ammt1"
                          style="color: #2873FF; font-family: Manrope;">{{
                            conversionResult.find(c => c.from == coin)?.value || 0 }}</span></span>
                    </div>


                    <div style="margin-top: 30px;">
                      <span :class="isDark ? 'pay-with' : 'pay-with-light'"
                        style="display: flex; justify-content: flex-start;">{{
                          transaction ? "I want to buy" : "I want to sell" }}</span>
                      <div class="d-flex" style="margin-top:9px; position: relative;">

                        <input type="number" v-model="ammount_of_coin"
                          style="outline: none; position:relative; width: 100%;"
                          :class="isDark ? 'coin-dropdown' : 'coin-dropdown-light'" placeholder="Enter Amount" />

                        <v-menu transition="scale-transition">
                          <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" class="position-absolute show-all"
                              :class="isDark ? 'show-all-dark' : 'show-all-light'"
                              style="right: 10px;margin-top: 8px;font-weight: 700;">
                              {{ Selectedcurrency }}
                              <v-icon icon="mdi-chevron-down notranslate" color="#8E9BAE"
                                style="margin-left: 6px "></v-icon>

                            </v-btn>
                          </template>

                          <v-list :class="isDark ? 'country-dropdown' : 'country-dropdown-light'"
                            style="height: 120px !important; width: auto !important; border-radius: 10px !important; margin-top: 10px;">
                            <v-list-item v-for="(currency, i) in pinia.state.allcountries" :key="i">
                              <div>
                                <v-list-item @click="Selectedcurrency = currency.currency_name">
                                  <span class="ml-4">{{ currency.currency_name }} </span>
                                </v-list-item>
                              </div>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </div>

                      <div style=" margin-top: 9px ;">
                        <span class="hint-text">Enter the amount and preferred currency.</span>
                      </div>

                    </div>
                    <v-btn @click="collectVals()" class="exchange-btn" color="" style="letter-spacing: 0px !important;">
                      <span class="exchange-text">Trade Now </span></v-btn>
                  </div>
                </div>
              </div>
            </div>
          </v-container>
        </section>
      </div>

      <v-container class=" position-relative">
        <LazyPaymentOptions />
      </v-container>

      <v-container class=" position-relative section2ii">
        <img v-lazy="'/svg/Ellipse 2813.svg'" class="position-absolute blue-ellipse2"
          style="right:0; margin-top: 144px ;" alt="betacrypto-img-16" />
        <div class="section2ii2 section2" :class="isDark ? 'section2' : 'section2-light'">
          <span class="section2-subtitle sub-text2" style="margin-top: 201.5px; margin-bottom: 40px;">Awesome features
            of
            Betacrypto</span>
          <span class="section2-titleii" :class="isDark ? 'section2-title' : 'section2-title-light'"
            style="margin-bottom: 88px;">Welcome to a financial system for the 100%.</span>
        </div>

        <LazyFrame />

        <div style="margin-top: -5px;">
          <LazyReviews />
        </div>

        <v-row no-gutters class="mt-7">
          <v-col cols="12" sm="6" md="6">
            <div class="demo-div1" style="margin-inline-end: 28px; overflow: hidden">
              <div class="barcode-section" :class="isDark ? 'barcode-section' : 'barcode-section-light'"
                style="padding: 0px 0px 35px 0px">
                <div :class="isDark ? 'rectangle' : 'addedbg rectangle'"
                  style="display: flex; justify-self: center; padding: 10px">
                  <div class="d-flex justify-center adjustHeight"
                    style="width: 100%; overflow: hidden; justify-self: space-between; align-items: center; margin: 20px 10px 2px 10px;">
                    <div style="width: 60%; display: flex; flex-direction: column; align-items: center">
                      <img ref="zoomImg" src="/img/priceAct.png" style="width: 90%;" alt="" class="rounded-t-md" />
                      <div class="d-flex justify-center ga-2 boxContainer"
                        style="padding: 0px; width: 100%; margin-top: 6px">
                        <img v-for="(image, index) in btnImages" :key="index" :src="image.src" :alt="image.alt"
                          style="width: 20%; object-fit: contain; border-radius: 18px" class="box" />
                      </div>
                    </div>
                    <div class="marquee-container">
                      <div class="marquee">
                        <img v-for="(image, index) in imagesToRender" :key="index"
                          :src="isDark ? image.darkSrc : image.lightSrc" :alt="image.alt" class="rounded-t-md"
                          style="margin-top: 10px" />
                      </div>
                    </div>
                  </div>
                </div>
                <v-spacer></v-spacer>
                <div class="wallet-div" style="display:grid;  margin-left: 36px; position: relative; top: 6px;">

                  <v-btn @click="WalletNav()" class="wallet-frame" style="width: 88px;">
                    <img src="/svg/Wallet.svg" class="me-2" alt="betacrypto-img-19">
                    <span :class="isDark ? 'sell-btc-text' : 'sell-btc-text-light'"
                      style="font-size: 14px !important;  font-weight: 600;">wallet</span>
                  </v-btn>

                  <div style="display: grid; position: relative;">
                    <span class="buy" :class="isDark ? 'free-demo' : 'free-demo-light'">Free Betacrypto Wallet</span>
                    <span style="margin-top: 8px;  color: #8E9BAE;line-height: 140%; font-family: SF Pro Display ;">Get
                      a free
                      <span class="text-demoi"
                        style="font-size: 16px; color: #8E9BAE; font-family: SF Pro Display; font-weight: 600; letter-spacing: 0.32px; text-decoration-line: underline; cursor: pointer">Betacrypto
                        wallet</span>
                      when you sign up to receive, send, and store your Bitcoin.</span>
                  </div>

                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <div class="">
              <div class="barcode-section" :class="isDark ? 'barcode-section' : 'barcode-section-light'">
                <div class="rectangle">
                  <div
                    style="padding-top: 28px; margin-bottom: 28px; height: 210px; position:relative; overflow:hidden">
                    <img :src="isDark ? '/img/barcode-dark.png' : '/img/barcode-light.png'"
                      style="display: flex; justify-self: center; margin: auto; width: 93%;" alt="betacrypto-img-20" />
                    <img :src="isDark ? '/img/imgspin2.png' : '/img/imgspin1.png'" class="spinner-img">
                  </div>
                </div>
                <div class="wallet-div" style="margin-left: 36px;">
                  <nuxt-link>
                    <v-btn class="wallet-frame" style="width: 95px;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"
                        class="me-2">
                        <path
                          d="M12.8492 15.7835C12.9107 15.8778 12.9456 15.987 12.9502 16.0995C12.9548 16.212 12.9289 16.3236 12.8753 16.4226C12.8217 16.5216 12.7423 16.6043 12.6456 16.6619C12.5489 16.7195 12.4384 16.7499 12.3258 16.7499H0.79924C0.686659 16.7499 0.576171 16.7195 0.479451 16.6619C0.382731 16.6043 0.303369 16.5216 0.249751 16.4226C0.196133 16.3236 0.17025 16.212 0.174835 16.0995C0.179421 15.987 0.214305 15.8778 0.275803 15.7835C1.15557 14.4293 2.44962 13.3959 3.96487 12.8374C3.12721 12.2798 2.49125 11.4674 2.15104 10.5203C1.81082 9.57325 1.78441 8.54185 2.07572 7.57862C2.36702 6.6154 2.96057 5.77149 3.76859 5.17169C4.57662 4.57189 5.55621 4.24805 6.56252 4.24805C7.56883 4.24805 8.54843 4.57189 9.35645 5.17169C10.1645 5.77149 10.758 6.6154 11.0493 7.57862C11.3406 8.54185 11.3142 9.57325 10.974 10.5203C10.6338 11.4674 9.99784 12.2798 9.16018 12.8374C10.6754 13.3959 11.9695 14.4293 12.8492 15.7835ZM19.7172 15.7718C18.8372 14.4233 17.546 13.3943 16.0352 12.8374C17.0241 12.1713 17.722 11.1534 17.9868 9.99084C18.2516 8.8283 18.0635 7.60853 17.4607 6.57981C16.8578 5.5511 15.8857 4.79076 14.742 4.45357C13.5984 4.11637 12.3692 4.22766 11.3047 4.76479C11.264 4.78581 11.2284 4.81552 11.2005 4.85182C11.1725 4.88811 11.1529 4.93011 11.143 4.97483C11.1331 5.01956 11.1331 5.06592 11.1431 5.11062C11.1531 5.15533 11.1728 5.19729 11.2008 5.23354C11.9923 6.22089 12.4469 7.43576 12.498 8.70019C12.549 9.96463 12.1938 11.2122 11.4844 12.2601C11.4385 12.3286 11.4216 12.4124 11.4373 12.4933C11.4529 12.5742 11.4999 12.6457 11.568 12.6921C12.4929 13.3377 13.2847 14.1554 13.9 15.1007C14.1482 15.4808 14.2495 15.9381 14.1852 16.3874C14.1779 16.4321 14.1805 16.4779 14.1927 16.5215C14.2048 16.5651 14.2263 16.6055 14.2557 16.64C14.285 16.6745 14.3215 16.7022 14.3626 16.7212C14.4038 16.7401 14.4485 16.75 14.4938 16.7499H19.2047C19.3423 16.75 19.4761 16.7046 19.5853 16.6208C19.6945 16.5371 19.773 16.4196 19.8086 16.2867C19.8303 16.1992 19.8334 16.1082 19.8177 16.0195C19.8019 15.9308 19.7677 15.8464 19.7172 15.7718Z"
                          fill="#2873FF" />
                      </svg>
                      <span :class="isDark ? 'sell-btc-text' : 'sell-btc-text-light'"
                        style="font-size: 14px !important; font-weight: 600;">Friends</span>
                    </v-btn>
                  </nuxt-link>
                  <div style="display:grid;">
                    <span class="buy" :class="isDark ? 'free-demo' : 'free-demo-light'"
                      style="margin-top : 16px ">Invite
                      friends</span>
                    <span style="margin-top: 14px; color: #8E9BAE;line-height: 140%; font-family: SF Pro Display;">Get
                      your
                      friends and family to
                      <NuxtLink to="/authentication/register">
                        <span class="text-demoi"
                          style="font-size: 16px; color: #8E9BAE; font-family: SF Pro Display; font-weight: 600; letter-spacing: 0.32px; text-decoration-line: underline;">sign
                          up</span>
                      </NuxtLink>
                      for Betacrypto
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </v-col>
        </v-row>
      </v-container>

      <div class="section3" :class="isDark ? 'section3' : 'section3-light'" style="margin-top: 200px;">
        <v-container>
          <v-row no-gutters class="phone-section" style="padding-top: 170px; padding-bottom: 140px">
            <v-col cols="md-7" sm="12">
              <div class="">
                <span class="section2-subtitlei1 sub-text2i"
                  style="justify-content: flex-start; margin-top: 0px !important">THE BETACRYPTO APP IS ALL YOU NEED FOR
                  DAY
                  TO DAY TRADING</span>
                <span class="section2-titlei2 section2-title1"
                  :class="isDark ? 'header-text1-dark' : 'header-text1-light'"
                  style="text-align: start !important; display: flex; justify-content: flex-start !important;  margin-top: 24px; margin-bottom: 32px">Join
                  the Future of <br>Crypto Trading with <br>Betacrypto</span>
                <span class="explore captionii">Experience the power of peer-to-peer Bitcoin trading with Betacrypto.
                  Download
                  now and dive into the world of crypto trading!"</span>
                <div class="d-flex social-icons-div"
                  style="margin-top: 88px; padding-bottom: 60px; width: fit-content; align-items: center">
                  <v-btn class="image-button me-4 desktop-social-icons"
                    :style="{ backgroundImage: `url(${imageSrc})` }"></v-btn>
                  <v-btn class="image-button me-4 desktop-social-icons"
                    :style="{ backgroundImage: `url(${imageSrc1})` }"></v-btn>

                  <v-btn class="image-button1 me-3 mobile-social-icons"
                    :style="{ backgroundImage: `url(${imageSrc2})` }"></v-btn>
                  <v-btn class="image-button1 me-3 mobile-social-icons"
                    :style="{ backgroundImage: `url(${imageSrc3})` }"></v-btn>

                  <span class="icon-text"
                    style="color: #64748B; font-family: SF Pro Display; font-size: 16px; width: 180px;">Betacrypto App
                    now
                    available for download</span>
                </div>
              </div>

            </v-col>
            <v-col cols="md-5" sm="12">
              <div class="phone-rectangle w-100"
                style="position: relative; top: -58px; display: flex; justify-content: center;">
                <div class="d-flex justify-center" :class="isDark ? 'mobileNimationBg' : 'lightmobileNimationBg'"
                  style="width:100%;max-width: 530px; height: 669px; position: relative; overflow: hidden">
                  <div class="animationContainer">
                    <img ref="scrollImage" :src="isDark ? '/img/animatedScreen.png' : '/img/animatedScreenLight.png'"
                      alt="" style="width: 100%; position: absolute">
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <v-container style="margin-top: 70px">
        <LazyFaq />

      </v-container>

      <Coin-Banner style="margin-bottom:253.88px; margin-top: 19.33px" class="banner-wrap" />


      <div class="position-relative">
        <v-container style="position: absolute; top: -197px; left: 0; right: 0;">
          <span class="Betacrypto-header">Betacrypto</span>
        </v-container>
        <Footer class="desktop-footer" />
        <Mobile-footer class="mobile-footer" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useTheme } from 'vuetify';
import { getTokens, currencyConverter } from "@/composables/requests/tokens";
import { gsap } from 'gsap';
import { rotateOrbitAnimation, fadeAnimation, zoomAnimation, horizontalSlideInAnimation, scrollImageUpDown, staggerImg } from '~/animations/gsapAnimation';
const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark);

const transaction = ref(true);
const pinia = useStore()
const pageNumber = ref(1)
const conversionResult = ref([]);
const select = ref("");
const coin = ref("");
const piniastoredicon = ref(null);
const ammount_of_coin = ref();
const Selectedcurrency = ref("USD");
const dialog = ref(false)


const LazyPaymentOptions = defineAsyncComponent(() => import('@/components/payment-options.vue'));

//Gsap implementation starts
const img1 = ref(null)
const img2 = ref(null)
const img3 = ref(null)
const img4 = ref(null)
const fade1 = ref(null)
const fade2 = ref(null)
const zoomImg = ref(null)
const cardRightImageLight = ref(null)
const cardRightImageLight2 = ref(null)
const scrollImage = ref(null)
const scrollImageMobile = ref(null)

const btnImages = [
  { src: '/img/sml1.png', alt: 'Image 1' },
  { src: '/img/sml2.png', alt: 'Image 2' },
  { src: '/img/sml3.png', alt: 'Image 3' },
  { src: '/img/sml4.png', alt: 'Image 4' },
];

const scrollImages = [
  {
    darkSrc: '/img/vertcard1.png',
    lightSrc: '/img/verticallight1.png',
    alt: 'Card 1',
  },
  {
    darkSrc: '/img/vertcard2.png',
    lightSrc: '/img/verticallight2.png',
    alt: 'Card 2',
  },
  {
    darkSrc: '/img/vertcard3.png',
    lightSrc: '/img/verticallight3.png',
    alt: 'Card 3',
  },
  {
    darkSrc: '/img/vertcard4.png',
    lightSrc: '/img/verticallight4.png',
    alt: 'Card 4',
  },
];

const imagesToRender = [...scrollImages, ...scrollImages];

onMounted(() => {

  staggerImg('.box');

  if (img1.value || img2.value || img3.value || img3.value || scrollImage.value || scrollImageMobile.value) {
    rotateOrbitAnimation(img1.value, [
      { x: 0, y: 0 },
      { x: 50, y: -35 },
      { x: 100, y: -70 },
    ], 180, 10);

    rotateOrbitAnimation(img2.value, [
      { x: 10, y: -20 },
      { x: -25, y: 0 },
      { x: -40, y: 40 },
    ], 200, 13);

    rotateOrbitAnimation(img3.value, [
      { x: 0, y: 0 },
      { x: -40, y: -50 },
      { x: -80, y: -100 },
    ], 360, 9);

    rotateOrbitAnimation(img4.value, [
      { x: 20, y: -20 },
      { x: -5, y: 0 },
      { x: -10, y: 20 },
    ], 150, 6);

    fadeAnimation(fade1.value, fade2.value);
    zoomAnimation(zoomImg.value, 1, 1.05, 4);

    horizontalSlideInAnimation(cardRightImageLight.value, "100", 0, "100", 1.08, 4, 1.1, 1.01);
    horizontalSlideInAnimation(cardRightImageLight2.value, "100", 0, "100", 1.04, 7, 2.7, 1.05)
    scrollImageUpDown(scrollImage.value)
  }
});

//Gsap implementation ends

const isPushActive = ref(false); // Tracks whether the notification is active

const showPushInfo = () => {
  if (isPushActive.value) return; // Prevent multiple clicks
  isPushActive.value = true; // Set the state to active

  push.info(
    "Our site is currently under development and will be live soon. We welcome any feedback to help us improve.",
    { duration: 5000 }
  );
  setTimeout(() => {
    isPushActive.value = false;
  }, 5000);
};

const getTokens_ = async () => {
  try {
    const data = await getTokens(pageNumber.value);
    if (data.success) {
      console.log("tokena", data.data)
      const fetchedTokens = data.data.result;

      const storedTokenIds = pinia.state.tokenLists.map(item => item.id);

      // Check if there are any new items in the fetched data
      const newItems = fetchedTokens.filter(item => !storedTokenIds.includes(item.id));

      if (newItems.length > 0) {
        pinia.setTokenLists(fetchedTokens);
      }
    } else {
      console.log('Unavailable')
    }
  } catch (error) {
    console.log(error);
  };
}

watch(() => conversionResult.value, (newVal) => {
  pinia.state.tokenLists.map(t => {
    const tokenConversion = newVal.find(tc => tc.from == t.symbol);
    if (tokenConversion) {
      t.converted_value = tokenConversion.value;
    }
  });
});


const collectVals = () => {
  // Always save trading data
  const payload = {
    name: select.value,
    type: transaction.value ? 'buy' : 'sell',
    amount: ammount_of_coin.value,
    currency: Selectedcurrency.value,
  };
  pinia.saveTradingData(payload);

  // Check if user is authenticated
  if (!pinia.state.isAuthenticated) {
    // Redirect to login if not authenticated
    navigateTo('authentication/login'); // Adjust navigation method and URL as per your router setup
    return;
  }

  // User is authenticated
  if (pinia.state.selectedOfferType_from_landing.type === "sell") {
    // Navigate to create sell offer page
    navigateTo('/account/marketplace/createOffer'); // Adjust navigation method and URL as per your router setup

  } else {
    // Redirect to active offers page for buys or any other case
    navigateTo('/account/marketplace/activeOffers'); // Adjust navigation method and URL as per your router setup

  }
};

const convertCurrencies = async () => {


  // Get the list of coins from pinia state

  const coins = pinia.state.tokenLists;

  try {
    console.log("Starting currency conversion...");

    const convertCurrency = [];

    // Loop through each coin and convert to USD
    for (const coin of coins) {
      convertCurrency.push({ from: coin.symbol, to: "USD" });
    }

    try {
      const data = await currencyConverter(convertCurrency);
      console.log(`Data received: `, data);

      if (data.success) {
        // Store the conversion result in the array
        conversionResult.value = data.data;
      } else {
        console.log(`Conversion failed:`, data.message);
      }
    } catch (error) {
      console.log(`Error converting:`, error);
    }

    // Optionally, store all conversion results in pinia
    // pinia.setTokenPrices(conversionResults, addMinutes(10));

  } catch (error) {
    console.log(error);
  }

  // Log the array to see the stored conversion results
  console.log("Conversion Results:", conversionResult.value);
};

const isChevronToggled = ref(false);
const toggleChevron = () => {
  isChevronToggled.value = !isChevronToggled.value;
};

const WalletNav = () => {
  // Perform the check for user login
  if (pinia.state.user.token) {
    navigateTo('/account/Trade/wallet');
  } else {
    navigateTo('/authentication/login');
  }
}

const icon = ref(piniastoredicon)

onMounted(async () => {
  await convertCurrencies();
  getTokens_()
  piniastoredicon.value = pinia.state?.tokenLists[1]?.icon
  select.value = pinia.state?.tokenLists[1]?.name
  coin.value = pinia.state?.tokenLists[1]?.symbol
});

let input = ref("");

const filteredItems = computed(() => {
  const searchTerm = input.value.toLowerCase();
  return pinia.state.tokenLists.filter((loc) => {
    const lowername = loc.name.toLowerCase();
    const symbol = loc.symbol.toLowerCase();
    return (
      lowername.includes(searchTerm) || symbol.includes(searchTerm)
    );
  });
});

const selectedNetwork = ref(pinia.state.selectedNetwork.toLowerCase());

watch(() => pinia.state.selectedNetwork, async (newNetwork) => {
  if (newNetwork.toLowerCase() !== selectedNetwork.value) {
    selectedNetwork.value = newNetwork.toLowerCase();
    await getTokens_();
    await convertCurrencies();
  }
});

const chainIcon = computed(() => {
  return pinia.state.tokenLists.find(c => c?.symbol === "BNB" || c?.symbol === "TRX");
});

const imageSrc = ('/svg/applestore.svg'); // Replace with your image path
const imageSrc1 = ('/svg/playstore.svg');
const imageSrc2 = ('/svg/BTN-one.svg');
const imageSrc3 = ('/svg/BTN-two.svg');

</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');
@import url('https://fonts.googleapis.com/css2?family=Manrope&family=Poppins&display=swap');

.header-text1 {
  text-align: center;
  font-family: "SF Pro Display" !important;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -2.4px;
  background: linear-gradient(90deg, #FFF 8.61%, #8E9BAE 91.11%);
  justify-content: center
}

.header-text1-dark {
  background: linear-gradient(90deg, #FFF 8.61%, #8E9BAE 91.11%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header-text1-light {
  background: linear-gradient(90deg, #060A1D 7.92%, rgba(6, 10, 29, 0.50) 91.5%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.web {
  color: var(--Colors-Base-white, #2873FF);
  font-family: "SF Pro Display";
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 100% !important;
  letter-spacing: -2.4px;
  display: flex;

}

.text-img {
  display: flex !important;
  margin: auto;
  justify-content: center;
}

.subtitle-text {
  color: #8E9BAE;
  text-align: center;
  font-family: "SF Pro Display";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 33.6px */
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

.landing-page-form {
  padding: 60px;
  border-radius: 15px;
  border: 0.5px solid #64748B;
  background: rgba(7, 11, 31, 0.80);
  backdrop-filter: blur(25px);
  align-items: center;
  gap: 32px;
  width: 652px;
  /* overflow: hidden; */
}

.chevron-icon {
  transition: transform 0.3s;
}

.chevron-icon-rotated {
  transform: rotate(180deg);
}

.light-landing-page-form {
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.90);
  padding: 60px;
  backdrop-filter: blur(25px);
  border: 1px solid #DBE8FF !important;
  align-items: center;
  gap: 32px;
}

.form-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 68px;
}

.top-ellipse {
  position: absolute;
  top: 0;
  z-index: 10;
  left: 33%;
}

.side-ellipse {
  margin-top: 316px
}

.right-ellipse {
  position: absolute;
  right: 258px;
  z-index: 100;
}

.bottom-ellipse {
  z-index: 10;
  position: absolute;
  bottom: 0;
}

.coin-dropdown {
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

.coin-dropdown-light {
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

.frame-1 {
  display: flex;
  width: fit-content;
  padding: 4px;
  align-items: center;
  justify-content: center !important;
  gap: 8px;
  border-radius: 100px;
  border: 0.5px solid #64748B;
  background: rgba(27, 37, 55, 0.50);
  backdrop-filter: blur(18.950000762939453px);
  margin: auto;
  margin-top: 169px;

}

.frame-1-light {
  background: #E9F1FF;
  backdrop-filter: blur(18.950000762939453px);
}

.writing-text {
  text-align: center;
  font-family: "SF Pro Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  /* 14px */
  letter-spacing: 0.14px;
}

.writing-text-dark {
  color: var(--Colors-Base-white, #FFF);
}

.writing-text-light {
  color: #1B2537;
}

.writing-btn {
  display: flex;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
  text-transform: unset !important;
  border-radius: 100px;
  background: #2873FF;
  font-weight: 500 !important;
  font-size: 14px;
  line-height: 100%;
  /* 14px */
  letter-spacing: -0.14px !important;
}

@media screen and (max-width: 580px) {
  .writing-btn {
  font-size: 10px !important;
  font-weight: 800 !important;
}
}

.chevron-icon {
  display: flex;
  position: absolute;
  right: 15px
}

.select {
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
}

.small-text {
  color: var(--Main-Greyscale-40, #8E9BAE);
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 18px */
  display: flex;
}

.btc-ammt {
  color: #8E9BAE;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  /* 21px */
}

.v-list {
  background: #070B1F !important;
  color: white;
}

.pay-with {
  color: var(--Colors-Base-white, #FFF);
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  /* 21px */
  margin-bottom: 9px !important;
}

.pay-with-light {
  color: #10192D;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  /* 21px */
  margin-bottom: 9px !important;
}

.text2 {
  color: #8E9BAE;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  /* 21px */
}

.show-all {
  color: var(--Main-Primary-100, #2873FF);
  text-align: center;
  font-family: Manrope;
  font-size: 12.86px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  /* 19.289px */
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

.payment-wrap {
  display: flex;
  gap: 10px;
  margin-top: 9px
}

.hint-text {
  color: #8E9BAE;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  /* 21px */
  margin-top: 9px;
}

.exchange-btn {
  width: 532px;
  height: 50px !important;
  flex-shrink: 0;
  margin-top: 32px;
  border-radius: 10px;
  background: var(--Main-Primary-100, #2873FF);
  text-align: center;
  letter-spacing: unset !important;
  text-transform: unset !important;
}

.exchange-btn::after {
  left: 120%;
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
}

.exchange-text {
  width: 91px;
  height: 21.111px;
  flex-shrink: 0;
  color: var(--Others-White, var(--Colors-Base-white, #FFF));
  text-align: center;
  font-family: Manrope;
  font-size: 12.86px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  /* 19.289px */
  letter-spacing: 0px !important;
}

.section2 {
  border-radius: 50px;
  border-top: 1px solid #2873FF;
  background: rgba(6, 10, 29, 0.50);
  backdrop-filter: blur(44.04999923706055px);
  margin-top: 170px;
  height: fit-content !important;
}

.section2-light {
  border-radius: 50px;
  border-top: 1px solid #2873FF;
  background: rgba(255, 255, 255, 0.50);
  backdrop-filter: blur(44.04999923706055px);
  margin-top: 170px;
}

.section2-subtitle {
  color: #38BDF8;
  text-align: center;
  font-family: "SF Pro Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  /* 22.4px */
  letter-spacing: 0.8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 173.66px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.section2-subtitlei {
  color: #38BDF8;
  text-align: center;
  font-family: "SF Pro Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  /* 22.4px */
  letter-spacing: 0.8px;
  margin-top: 173.66px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.section2-subtitlei1 {
  color: #38BDF8;
  font-family: "SF Pro Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  /* 22.4px */
  letter-spacing: 0.8px;
  margin-top: 173.66px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.section2-title1 {
  text-align: center;
  font-family: "SF Pro Display";
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* 76.8px */
  letter-spacing: -1.92px;
  width: 688.35px;
  display: flex;
  justify-content: center;
}

.section2-title-light {
  text-align: center;
  font-family: "SF Pro Display";
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* 76.8px */
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

.caption {
  color: #64748B;
  text-align: center;
  font-family: "SF Pro Display";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 33.6px */
  letter-spacing: 0.72px;
  width: 690px;
  display: flex;
  margin: auto;
}


.green-coin {
  display: flex;
  right: 2%;
  max-width: 100%;
  height: auto;
}

.orange-coin {
  right: 10%;
  max-width: 13%;
  height: auto;
  top: -64px;
}

.yellow-coin {
  z-index: 100;
  left: -13%;
  top: 199px;
  max-width: 100%;
  height: auto;
}

.light-green-coin {
  right: -75px;
  top: 148px;
  max-width: 100%;
  height: auto;
}

.pink-coin {
  margin-left: 120px;
  top: 190px;
}




.Betacrypto-header {
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

.dialog {
  background: rgba(6, 10, 29, 0.70) !important;
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

.wallet-frame {
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

.free-demo {
  font-family: "SF Pro Display";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 38.4px */
  background: linear-gradient(90deg, #FFF 5.29%, #64748B 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 16px;
}

.free-demo-light {
  font-family: "SF Pro Display";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 38.4px */
  background: linear-gradient(90deg, #060A1D 6.17%, rgba(6, 10, 29, 0.50) 97.69%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 16px;
}

.section3 {
  background: #10192D;
  display: flex;
  /* height: 897px; */
  padding: 0px 80px;
  align-items: center;
  gap: 44px;
  flex-shrink: 0;
}

.section3-light {
  background: #E9F1FF;
  display: flex;
  padding: 0px 80px;
  align-items: center;
  gap: 44px;
  flex-shrink: 0;
}

.explore {
  color: #8E9BAE;
  font-family: "SF Pro Display";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 33.6px */
  letter-spacing: 0.72px;
  width: 612px;
  display: flex;
  justify-content: flex-start;
}

.country-dropdown {
  border-radius: 15px;
  border: 0.5px solid #2f3946;
  background: #1B2537 !important;
  backdrop-filter: blur(50px) !important;
}

.country-dropdown-light {
  border-radius: 15px;
  background: #fff !important;
  color: #060A1D;
}

::-webkit-input-placeholder {
  color: #8E9BAE !important;
  font-family: Manrope !important;
  font-size: 14px !important;
  font-style: normal;
  font-weight: 700 !important;
  line-height: 150% !important;
  /* 21px */
}

.icon-text {
  border-left: 0.875px solid #8E9BAE !important;
  padding-left: 8px !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
}

.coin-bg1 {
  border-radius: 15px;
  background: #1B2537 !important;
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: center;
  border: 0.5px solid #2f3946;
}

.coin-bg1-light {
  border-radius: 15px;
  background: #fff !important;
  color: #060A1D;
  width: 100%;
}

.image-button {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 115px;
}

.image-button1 {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 102px;
  position: relative;
  z-index: 100;
}

.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line {
  padding-inline: 0px;
  width: 100%;
}

.top-grad {
  position: absolute;
  top: 0;
  left: 2%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg,
      transparent 50%,
      rgba(40, 115, 255, 1),
      rgba(40, 115, 255, 0));
}

.bottom-grad {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 2px;
  background: linear-gradient(90deg,
      rgba(40, 115, 255, 1),
      rgba(40, 115, 255, 0),
      transparent 90%);
}

.right-grad {
  position: absolute;
  right: 0;
  top: 2%;
  width: 2px;
  height: 0;
  background: linear-gradient(180deg,
      transparent 10%,
      rgba(40, 115, 255, 1),
      rgba(40, 115, 255, 0));
}

.left-grad {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 2px;
  height: 0;
  background: linear-gradient(180deg,
      rgba(40, 115, 255, 1),
      rgba(40, 115, 255, 0),
      transparent 50%);
}

.top-grad {
  animation: animateTop 6s ease-in-out infinite;
}

.bottom-grad {
  animation: animateBottom 6s ease-in-out infinite;
}

.right-grad {
  animation: animateRight 6s ease-in-out infinite;
}

.left-grad {
  animation: animateLeft 6s ease-in-out infinite;
}

@keyframes animateTop {
  25% {
    width: 98%;
    opacity: 1;
  }

  30%,
  100% {
    opacity: 0;
  }
}

@keyframes animateBottom {

  0%,
  50% {
    opacity: 1;
    width: 0;
  }

  75% {
    opacity: 0.6;
    width: 97%;
  }

  76%,
  100% {
    opacity: 0;
  }
}

@keyframes animateRight {

  0%,
  25% {
    opacity: 0.7;
    height: 0;
  }

  50% {
    opacity: 1;
    height: 100%;
  }

  55%,
  100% {
    height: 100%;
    opacity: 0;
  }
}

@keyframes animateLeft {

  0%,
  75% {
    opacity: 1;
    bottom: 0;
    height: 0;
  }

  100% {
    opacity: 0.8;
    height: 98%;
  }
}

::-webkit-scrollbar {
  display: none;
}

.mobileNimationBg {
  background: url('../public/img/phonehands.png');
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
  background-attachment: scroll
}

.lightmobileNimationBg {
  background: url('../public/img/lightthemhand.png');
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
  background-attachment: scroll
}

.animationContainer {
  width: 41.5%;
  height: 51%;
  position: relative;
  overflow: hidden;
  left: -7.35%;
  top: 18.5%;
}

@media screen and (max-width: 1279px) {
  .animationContainer {
    width: 54%;
    left: -10%;
  }
}

@media screen and (max-width: 1024px) {
  .animationContainer {
    width: 59%;
    left: -10.5%;
  }
}

@media screen and (max-width: 960px) {
  .animationContainer {
    width: 38.6%;
    left: -6.8%;
  }
}

@media screen and (max-width: 707px) {
  .animationContainer {
    width: 42.5%;
    left: -7.7%;
  }
}

@media screen and (max-width: 595px) {
  .animationContainer {
    width: 38.6%;
    left: -6.8%;
  }
}

@media screen and (max-width: 465px) {
  .animationContainer {
    width: 47.5%;
    left: -8.3%;
  }
}

@media screen and (max-width: 430px) {
  .animationContainer {
    width: 51%;
    left: -9%;
  }
}

@media screen and (max-width: 414px) {
  .animationContainer {
    width: 52%;
    left: -9.4%;
  }
}

@media screen and (max-width: 390px) {
  .animationContainer {
    width: 57%;
    left: -10%;
  }
}


@media screen and (max-width: 360px) {
  .animationContainer {
    width: 60%;
    left: -10.8%;
  }
}

@media screen and (max-width: 344px) {
  .animationContainer {
    width: 64.5%;
    left: -11.3%;
  }
}

.adjustHeight {
  height: 200px
}

@media screen and (max-width: 960px) {
  .adjustHeight {
    height: 160px
  }
}

@media screen and (max-width: 620px) {
  .adjustHeight {
    height: 140px
  }
}

@media screen and (max-width: 574px) {
  .adjustHeight {
    height: 200px
  }
}

@media screen and (max-width: 400px) {
  .adjustHeight {
    height: 110px
  }
}

.marquee-container {
  width: 32%;
  overflow: hidden;
  position: relative;
}

.marquee {
  display: flex;
  flex-direction: column;
  animation: verticalAnime 15s linear infinite;
  /* Adjust duration for speed */
}

.marquee img {
  width: 100%;
  flex-shrink: 0;
  /* Prevent images from shrinking */
}

.addedbg {
  background: linear-gradient(rgb(219, 232, 255) 0%, rgba(219, 232, 255, 0) 101.34%);
  border-radius: 25px;
}

@keyframes verticalAnime {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-50%);
    /* Moves half of the marquee's total height */
  }
}

.box {
  transform-origin: center;
}

.spinner-img {
  position: absolute;
  top: 21%;
  left: 47.5%;
  animation: spinImg 3s linear infinite
}

@media screen and (max-width: 1270px) {
  .spinner-img {
    top: 17%
  }
}

@media screen and (max-width: 670px) {
  .spinner-img {
    top: 14.5%
  }
}

@keyframes spinImg {
  100% {
    transform: rotate(360deg)
  }
}
</style>