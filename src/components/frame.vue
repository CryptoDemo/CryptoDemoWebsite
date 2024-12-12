<template>
  <div>
    <v-row no-gutters style="display: flex; align-items: center;">
      <v-col cols="12" md="6" sm="6">
        <div class="first-col" style="margin-inline-end: 16px;">
          <div class="position-relative" :class="isDark ? 'frame1' : 'frame1-light'">
            <div class="first-col-wrap"
              style="display: flex; align-self: center; position: relative; margin-bottom: 30px;">
              <img :src="isDark ? '/img/mobile-frame.png' : '/svg/Framelight.svg'" ref="img"
                :class="isDark ? 'mobile-frame' : 'mobile-frame'"
                style="max-width: 100%; width: 85%; display: flex; margin: auto; z-index: 2" />
              <img src="/svg/greencoin1.svg" ref="img3" :class="isDark ? 'green-coin1' : 'green-coin2'" />
              <img src="/svg/yellowCoin1.svg" ref="img2" :class="isDark ? 'yellow-coin1' : 'yellow-coin2'" />
            </div>

            <div class="svg-frame" :class="isDark ? 'svg-frame' : 'svg-frame-light'" style="position: absolute"></div>

            <v-btn @click="navigateToSell()"
              style="border-radius: 100px; letter-spacing: 0px; text-transform: capitalize; box-shadow: none; display: flex; margin-top: 30px; margin-bottom: 16px; background: rgba(40, 115, 255, 0.10); padding: 8px 10px; align-items: center; width: 73px; height: 36px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"
                class="me-2">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0.833496 10.4999C0.833496 5.43731 4.93755 1.33325 10.0002 1.33325C15.0628 1.33325 19.1668 5.43731 19.1668 10.4999C19.1668 15.5625 15.0628 19.6666 10.0002 19.6666C4.93755 19.6666 0.833496 15.5625 0.833496 10.4999ZM9.3335 5.49992C9.3335 4.94763 8.88578 4.49992 8.3335 4.49992C7.78121 4.49992 7.3335 4.94763 7.3335 5.49992V6.16658H6.66683C6.11454 6.16658 5.66683 6.6143 5.66683 7.16658C5.66683 7.71887 6.11454 8.16658 6.66683 8.16658H7.3335V10.4999V12.8333H6.66683C6.11454 12.8333 5.66683 13.281 5.66683 13.8333C5.66683 14.3855 6.11454 14.8333 6.66683 14.8333H7.3335V15.4999C7.3335 16.0522 7.78121 16.4999 8.3335 16.4999C8.88578 16.4999 9.3335 16.0522 9.3335 15.4999V14.8333H9.8335V15.4999C9.8335 16.0522 10.2812 16.4999 10.8335 16.4999C11.3858 16.4999 11.8335 16.0522 11.8335 15.4999V14.8276C12.2566 14.7995 12.8059 14.662 13.2928 14.3115C13.8975 13.8761 14.3335 13.1592 14.3335 12.1666C14.3335 11.4775 14.1234 10.9213 13.7926 10.4999C14.1234 10.0785 14.3335 9.52233 14.3335 8.83325C14.3335 7.84067 13.8975 7.12378 13.2928 6.68838C12.8059 6.33783 12.2566 6.20033 11.8335 6.17224V5.49992C11.8335 4.94763 11.3858 4.49992 10.8335 4.49992C10.2812 4.49992 9.8335 4.94763 9.8335 5.49992V6.16658H9.3335V5.49992ZM9.3335 9.49992V8.16658H10.8335H11.6668C11.7846 8.16658 11.9835 8.21014 12.1242 8.31145C12.1845 8.35486 12.2297 8.40518 12.2625 8.4688C12.2949 8.53162 12.3335 8.64268 12.3335 8.83325C12.3335 9.02382 12.2949 9.13488 12.2625 9.1977C12.2297 9.26133 12.1845 9.31165 12.1242 9.35505C11.9835 9.45637 11.7846 9.49992 11.6668 9.49992H9.3335ZM9.3335 11.4999H11.6668C11.7846 11.4999 11.9835 11.5435 12.1242 11.6448C12.1845 11.6882 12.2297 11.7385 12.2625 11.8021C12.2949 11.865 12.3335 11.976 12.3335 12.1666C12.3335 12.3572 12.2949 12.4682 12.2625 12.531C12.2297 12.5947 12.1845 12.645 12.1242 12.6884C11.9835 12.7897 11.7846 12.8333 11.6668 12.8333H10.8335H9.3335V11.4999Z"
                  fill="#2873FF" />
              </svg>
              <span :class="isDark ? 'buy1' : 'buy1-light'">Buy</span>
            </v-btn>

            <div class="mb-3">
              <span class="buy" :class="isDark ? 'buy' : 'buy-light'">Buy Bitcoin</span>
            </div>
            <span class="caption1">Buy Bitcoin from real people in our peer-to-peer Marketplace.</span>

          </div>
        </div>
      </v-col>

      <v-col>
        <v-col class="second-col mt-2" style="padding: 8px; margin-bottom: 8px; overflow: hidden;">
          <div class="frame2" :class="isDark ? 'frame2' : 'frame2-light'" style="padding: 0 40px; width: 100%;">
            <div>
              <div class="position-relative">
                <div class="coin-wrap1" :class="isDark ? 'coin-wrap1' : 'coin-wrap1-light'"></div>
                <img :src="isDark ? '/img/frame2-dark.png' : '/img/light-mode-img.png'" ref="image1" class="btc-box1"
                  style="max-width: 100%; width: 75%;" />
                <img src="/img/pointer-vector.png" ref="image2"
                  style="max-width: 100%; width: 60%; left: 7px; z-index: 1000;" class="cursor" />
              </div>
              <div class="sell-col sel-coli">
                <v-btn @click="navigateToCreateOffer()"
                  style="border-radius: 100px; box-shadow: none; text-transform: capitalize; letter-spacing: 0px; display: flex; margin-top: 5px; margin-bottom: 16px; background: rgba(40, 115, 255, 0.10); padding: 8px 10px; width: 72px; height: 36px; align-items: center;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"
                    class="me-2">
                    <path
                      d="M13.125 10.5C13.125 11.1181 12.9417 11.7223 12.5983 12.2362C12.255 12.7501 11.7669 13.1506 11.1959 13.3871C10.6249 13.6236 9.99653 13.6855 9.39034 13.565C8.78415 13.4444 8.22733 13.1467 7.79029 12.7097C7.35325 12.2727 7.05562 11.7158 6.93505 11.1097C6.81447 10.5035 6.87635 9.87513 7.11288 9.30411C7.3494 8.7331 7.74994 8.24504 8.26384 7.90166C8.77775 7.55828 9.38193 7.375 10 7.375C10.8288 7.375 11.6237 7.70424 12.2097 8.29029C12.7958 8.87634 13.125 9.6712 13.125 10.5ZM19.375 5.5V15.5C19.375 15.6658 19.3092 15.8247 19.1919 15.9419C19.0747 16.0592 18.9158 16.125 18.75 16.125H1.25C1.08424 16.125 0.925268 16.0592 0.808058 15.9419C0.690848 15.8247 0.625 15.6658 0.625 15.5V5.5C0.625 5.33424 0.690848 5.17527 0.808058 5.05806C0.925268 4.94085 1.08424 4.875 1.25 4.875H18.75C18.9158 4.875 19.0747 4.94085 19.1919 5.05806C19.3092 5.17527 19.375 5.33424 19.375 5.5ZM18.125 9.12109C17.4153 8.91125 16.7694 8.52719 16.2461 8.00389C15.7228 7.48059 15.3387 6.83468 15.1289 6.125H4.87109C4.66125 6.83468 4.27719 7.48059 3.75389 8.00389C3.23059 8.52719 2.58468 8.91125 1.875 9.12109V11.8789C2.58468 12.0887 3.23059 12.4728 3.75389 12.9961C4.27719 13.5194 4.66125 14.1653 4.87109 14.875H15.1289C15.3387 14.1653 15.7228 13.5194 16.2461 12.9961C16.7694 12.4728 17.4153 12.0887 18.125 11.8789V9.12109Z"
                      fill="#2873FF" />
                  </svg>
                  <span :class="isDark ? 'buy1' : 'buy1-light'">Sell</span>
                </v-btn>
                <div class="mb-3">
                  <span class="buy" :class="isDark ? 'buy' : 'buy-light'">Sell Bitcoin</span>
                </div>
                <span class="caption1">Set your own rates and choose how you want to be paid.</span>
              </div>
            </div>
          </div>
        </v-col>


        <v-col class="second-coli" style="padding: 8px; margin-bottom: 8px; ">
          <div class="frame2" :class="isDark ? 'frame2' : 'frame2-light'"
            style="padding: 10px 30px 0 30px; position: relative; overflow: hidden">
            <div class="img-wrap1 stack-container"
              style="overflow: hidden; height: 200px;">
              <drag-in-animation/>             
            </div>
            <div class="position-relative sell-col  security-btn mb-5">

              <v-btn @click.prevent="navigateToSecurity()"
                style="border-radius: 100px; box-shadow: none; width: 101px; height: 36px; text-transform: capitalize; letter-spacing: 0px; display: flex;  margin-top: 5px; margin-bottom: 16px; background: rgba(40, 115, 255, 0.10); padding: 8px 10px; width: 100px; align-items: center;">
                <img src="/svg/shield1.svg" class="me-1" />
                <span :class="isDark ? 'buy1' : 'buy1-light'">Security</span>
              </v-btn>
              <div class="mb-3">
                <span class="buy" :class="isDark ? 'buy' : 'buy-light'">Secure trading</span>
              </div>
              <span class="caption1">Bitcoin is held in secure escrow until a trade is successfully completed.</span>
            </div>
          </div>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { rotateOrbitAnimation, horizontalSlideInAnimation, verticalSlideInAnimation } from '~/animations/gsapAnimation';
import { useTheme } from 'vuetify';

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore();

const navigateToSell = () => {
  // Perform the check for user login
  if (pinia.state.user?.token) {
    navigateTo('/account/marketplace/activeOffers');
  } else {
    navigateTo('/authentication/login');
  }
}

const navigateToCreateOffer = () => {
  // Perform the check for user login
  if (pinia.state.user.token) {
    navigateTo('/account/marketplace/createOffer');
  } else {
    navigateTo('/authentication/login');
  }
}

const navigateToSecurity = () => {
  // Perform the check for user login
  if (pinia.state.user.token) {
    navigateTo('/account/Security');
  } else {
    navigateTo('/authentication/login');
  }
}

//Gsap implementation starts
const img2 = ref(null)
const img3 = ref(null)
const image1 = ref(null);
const image2 = ref(null);

onMounted(() => {
  if (img2.value || img3.value) {
    rotateOrbitAnimation(img2.value, [
      { x: 0, y: -10 },
      { x: -10, y: 0 },
      { x: -20, y: 20 },
    ], 360, 13);

    rotateOrbitAnimation(img3.value, [
      { x: 5, y: 3 },
      { x: -10, y: -30 },
      { x: -20, y: -60 },
    ], 360, 13);

    verticalSlideInAnimation(image1.value, '-50', 0, '50', 1.04, 5, 1, 1);
    horizontalSlideInAnimation(image2.value, '50', 0, '50', 1.04, 4.9, 1, 1);

  }

});

//Gsap implementation ends
</script>

<style scoped>
.yellow-coin1 {
  position: absolute;
  margin-top: 121px;
  right: 5%
}

.yellow-coin2 {
  position: absolute;
  margin-top: 121px;
  right: -8%;
}

.green-coin1 {
  position: absolute;
  max-width: 100%;
  top: 0;
  bottom: -273px;
  display: flex;
  margin: auto;
  z-index: 4
}

.green-coin1 {
  position: absolute;
  max-width: 100%;
  top: 0;
  bottom: -273px;
  display: flex;
  margin: auto;
  z-index: 4
}

.green-coin2 {
  position: absolute;
  top: 0;
  bottom: -310px;
  display: flex;
  margin: auto;
  left: -17%;
  z-index: 4
}

.mobile-frame {
  max-width: 100%;
  width: 85%;
  display: flex;
  margin: auto;
  z-index: 2
}

.desktop-frame {
  max-width: 100%;
  z-index: 2;
  height: 94%
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
}

.frame1 {
  border-radius: 25px;
  border: 0.5px solid #2f3946;
  background: #10192D;
  display: flex;
  /* height: 773px; */
  flex-direction: column;
  padding: 40px;
  position: relative;
  width: 100%;
}

.frame1-light {
  border-radius: 25px;
  border: 1px solid #DBE8FF;
  background: linear-gradient(180deg, #DBE8FF 0%, rgba(219, 232, 255, 0.00) 101.34%);
  display: flex;
  /* height: 773px; */
  flex-direction: column;
  padding: 40px;
  position: relative;
  width: 100%;
}

.svg-frame {
  border-radius: 15px;
  background: linear-gradient(180deg, rgba(16, 25, 45, 0.00) 65.19%, #10192D 100%);
  width: 95%;
  height: 490px;
  position: absolute;
  left: 0;
}

.svg-frame-light {
  /* border-radius: 15px; */
  background: linear-gradient(180deg, rgba(248, 250, 252, 0.00) 65.19%, #F8FAFC 100%);
  width: 100%;
  height: 490px;
  position: absolute;
  left: 0;
  opacity: 0.4;
}

.buy {
  text-align: center;
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
}

.buy-light {
  text-align: center;
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
}

.caption1 {
  color: #8E9BAE;
  font-family: "SF Pro Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 22.4px */
  letter-spacing: 0.32px;
}

.buy1 {
  color: var(--Colors-Base-white, #FFF);
  text-align: center;
  font-family: "SF Pro Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  /* 14px */
  letter-spacing: 0.14px;
  align-items: center;
}

.buy1-light {
  color: #1B2537;
  text-align: center;
  font-family: "SF Pro Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  /* 14px */
  letter-spacing: 0.14px;
}

.frame2 {
  border-radius: 15px;
  background: linear-gradient(180deg, rgba(16, 25, 45, 0.00) 65.19%, #10192D 100%);
  padding: 40px;
  height: 372px;
  border-radius: 15px;
  border: 0.5px solid #2f3946;
  background: #10192D;
  width: 100%;
}

.frame2-light {
  border: 1px solid #DBE8FF !important;
  background: linear-gradient(180deg, #DBE8FF 0%, rgba(219, 232, 255, 0.00) 101.34%) !important;
  padding: 40px;
  height: 372px;
  border-radius: 15px;
  border: 0.5px solid #64748B;
  background: #10192D;
  width: 100%;
}

.cursor {
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  margin-left: 237px;
  top: 36%;
}

.coin-wrap1 {
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background: linear-gradient(rgba(16, 25, 45, 0) 65.19%, rgb(16, 25, 45) 100%);
  height: 209.961px;
  width: 100%;
  position: absolute;
  z-index: 1000;
}

.coin-wrap1-light {
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background: linear-gradient(180deg, rgba(248, 250, 252, 0.00) 95.19%, #F8FAFC 100%) !important;
  height: 208.961px;
  width: 100%;
  position: absolute;
  z-index: 1000;
  opacity: 0.4;
  top: -25px;
}
</style>
