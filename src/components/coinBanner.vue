<template>
<section class="coin-wrap">
<v-container>
    <div class="border-div">
        <div :class="isDark ? 'coin-banner':'coin-banner-light'">
            <img src="/svg/Vector 1186.svg" style="max-width: 100%;" class="position-absolute right-vector1"/>
            <img src="/svg/Vector 1187.svg" class="position-absolute left-vector1" style="right: 0; max-width: 100%;"/>
            <span class="caption1i ">The fastest and trusted platform to trade</span>
            <span class="headline">Ready to get started?</span>
            <span class="explore2i"  :class="isDark ? 'subtitle':'subtitle-light'" style="margin-bottom: 48px;display: flex; text-align: center;">Explore thousands of offers to buy and sell Bitcoin to kickstart your trading journey.</span>
                <div>
                 
                    <v-btn @click.prevent="navigateTo('/authentication/register')" class="create-acct-btn">Create your account
                        <img src="/svg/ArrowUpRight.svg" style="margin-left: 5px"/>
                    </v-btn>
                 
                </div>
            <div class="marquee-container" style="overflow: hidden; margin-top: 362px;">
                <div class="coin-container coin-box1 marquee" style="padding-left: 52px; opacity: 0.5!important;">
                    <img v-for="(imagePath, index) in firstCoin" :key="index" :src="imagePath" alt="Coins" class="d-flex coin-ani1" style="max-width: 100%;"/>
                </div>
                
                <div class="coin-container coin-box1 marquee marquee2" style="padding-left: 52px; opacity: 0.5!important;">
                    <img v-for="(imagePath, index) in firstCoin" :key="index" :src="imagePath" alt="Coins" class="d-flex coin-ani1"/>
                </div>
 

                <div class="coin-container coin-box2 marquee-A row1" style="padding-right: 52px; opacity: 0.5!important; margin-top: 24.01px; margin-bottom: 24.01px;">
                    <img v-for="(imagePath, index) in secondCoin" :key="index" :src="imagePath" alt="Coins" class="d-flex coin-ani"/>
                </div>

                <div class="coin-container coin-box2  marquee-A marquee2a" style="padding-right: 52px; opacity: 0.5!important; margin-top: 24.01px; margin-bottom: 24.01px;">
                    <img v-for="(imagePath, index) in secondCoin" :key="index" :src="imagePath" alt="Coins" class="d-flex coin-ani"/>
                </div>
             

             
                <div class="coin-container coin-box3  marquee2b" style="padding-left: 58px; height: 50px; opacity: 0.3!important;">
                    <img v-for="(imagePath, index) in thirdCoin" :key="index" :src="imagePath" alt="Coins" style="max-width: 100%" class="coin-ani3  d-flex animated-coins" />
                </div>
                <div class="coin-container coin-box3 marquee2b marquee2" style="padding-left: 58px; height: 50px; opacity: 0.3!important;">
                    <img v-for="(imagePath, index) in thirdCoin" :key="index" :src="imagePath" alt="Coins" style="max-width: 100%" class="coin-ani3 d-flex animated-coins" />
                </div>
          
            </div>
        </div>
    </div>
</v-container>
</section>
</template>
<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';



const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);

const firstCoin = ref([
    '/svg/testball1.svg', '/img/Frame 19.png', '/img/Frame 2.png', '/img/Frame 3.png', '/img/Frame 6.png','/img/Frame 12.png','/img/Frame 8.png','/img/Frame 19.png',
]);
const secondCoin = ref([
    '/img/Frame 20.png', '/img/Frame 4.png', '/img/Frame 9.png', '/img/Frame 10.png', '/img/Frame 18.png','/img/Frame 20.png','/img/Frame 22.png','/img/Frame 23.png',
]);
const thirdCoin = ref([
    '/img/Frame 7.png', '/img/Frame 11.png', '/img/Frame 14 (1).png', '/img/Frame 15.png', '/img/Frame 16.png','/img/Frame 17.png','/img/Frame 18 (1).png','/img/Frame 14 (1).png',
])
</script>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');

.coin-banner{
position: relative;
background: linear-gradient(90deg, #10192D 0%, rgba(16, 25, 45, 0.00) 100%)  !important;
width: auto;
border-radius: 15px!important;
height: 100%;
max-width: 100%;
z-index: 1000;
}

.border-div{
background: linear-gradient(120deg,#060A1D, #060A1D) padding-box,
              linear-gradient(120deg, #fff, #10192D, #10192D, #fff ) border-box; 
width:auto;
border-radius: 15px!important;
border: 0.2px solid transparent;
content: "";
overflow: hidden;
}

.coin-banner-light{
border-radius: 15px;
position: relative;
background: #165CDD;
width: 100%;
max-width: 100%;
height: 100%;
z-index: 1000;
}
.caption1i{
color: #38BDF8;
text-align: center;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 140%; /* 22.4px */
letter-spacing: 0.8px;
text-transform: uppercase;
padding-top: 109px;
display: flex;
justify-content: center;
align-items: center;
}
.headline{
text-align: center;
font-family: "SF Pro Display";
font-size: 64px;
font-style: normal;
font-weight: 700;
line-height: 120%; /* 76.8px */
letter-spacing: -1.92px;
background: linear-gradient(90deg, #FFF 8%, rgba(247, 242, 242, 0.68) 86.51%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
display: flex;
justify-content: center;
margin-top: 40px;
margin-bottom: 48px;
}
.subtitle{
color: #8E9BAE;
display: flex;
margin: auto;
margin-top: 48px;
font-family: "SF Pro Display";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 33.6px */
letter-spacing: 0.72px;
width: 547.609px;
}
.subtitle-light{
color: #DBE8FF;
display: flex;
margin: auto;
margin-top: 48px;
font-family: "SF Pro Display";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 33.6px */
letter-spacing: 0.72px;
width: 547.609px;
}
.create-acct-btn{
/* width: 223px !important; */
height: 50px !important;
border-radius: 10px;
background: #FFF;
color: #060A1D;
letter-spacing: unset !important;
text-transform: unset;
display: flex;
margin: auto;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.coin-container{
display: flex;
justify-content: space-between;
width: 100%;
}
.animated-coins{
opacity: 0.3!important;
}
.coin-wrap{
display: flex;
height: 1103px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
}

.marquee-container {
  /* overflow: hidden; */
  width: 100vw !important;
}

.marquee {
bottom: 23%;
left: 100%;
width: 100%;
overflow: hidden;
position: absolute;
z-index: -1;
white-space: nowrap;
animation: marquee 30s linear infinite;
  }
.marquee2b{
bottom: 0%;
left: 100%;
width: 100%;
overflow: hidden;
position: absolute;
z-index: -1;
white-space: nowrap;
animation: marquee 30s linear infinite;
  }

  .marquee2 {
    animation-delay: 15s;
  }
  b {
    padding-left: 10px;
  }


@keyframes marquee {
  0% {
    left: -100%;
  }
  100% {
    left: 100%
  }
}

.marquee-A{
bottom: 6%;
right: 100%;
width: 100%;
overflow: hidden;
position: absolute;
z-index: -1;
white-space: nowrap;
animation-direction: reverse !important;
animation: marquee 30s linear infinite;
  }

  .marquee2a {
    animation-delay: 15s;
  }
  b {
    padding-left: 10px;
  }

</style>