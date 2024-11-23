<template>
  <div>
    <Carousel ref="carousel" :autoplay="2000"  :transition="1300"  :wrap-around="true" v-model="currentSlide" :items-to-show="1" style="max-height:570px; padding-top: 4rem;">
     <Slide  class="">
       <div class="position-relative" >
            <img src="/svg/QR-Code-Scan.svg" alt="QR-code" class=" qr-code"/>
            <img src="/svg/Bitcoin.svg" class=" mx-auto mb-2 position-relative bitcoin-img"/>
              <div class="d-grid">
                <img src="/svg/Balance.svg" class="balance-img"/>
                <img src="/svg/Frame 41545.svg" class="mx-auto position-relative exchange-img" style="height:12rem"/>
              </div>
             <div class="carousel-group-text" style="display: grid; margin-top:28px;">
              <span class="text-center" :class="isDark ? 'header-text':'header-text-light'">P2P Crypto exchange</span>
              <span class="text-center carousel-text">Experience peer-to-peer cryptocurrency <br> transactions at vendor's price, With diverse <br>  payment options.</span>
            </div>
       </div>
    </Slide>

    <Slide class="">
      <div class="position-relative" >
        <img src="/svg/Group1325.svg" style="position: relative; top: 34px;"/>
        <img src="/svg/Group1323.svg" style="position: relative; top: -4px;"/>
        <img src="/svg/Group1324.svg" style="position: relative; top: -39px;"/>
          <div class="carousel-group-text" style="display: grid; position: relative;top: -50px ">
              <span class="text-center" :class="isDark ? 'header-text':'header-text-light'">Free and Secure Wallet</span>
              <span class="text-center carousel-text">Save or spend using our secure and free wallet.</span>
            </div>
      </div>
    </Slide>

    <Slide class="">
        <div class="position-relative">
            <div>
            <img src="/svg/character.svg" class=""/>
            </div>
            <div class="carousel-group-text" style="display: grid; margin-top:28px;">
              <span class="text-center" :class="isDark ? 'header-text':'header-text-light'">Buy and Sell Crypto</span>
              <span class="text-center carousel-text">Buy and sell digital assets from anywhere,<br/> using diverse payment methods.</span>
            </div>
        </div>
    </Slide>
    <Slide class="">
        <div class="position-relative" >
          <div>
             <img src="/svg/Rectangle 909.svg" class="img-fluid" style="position:absolute; left:23%; top: 16%;">
              <img src="/svg/Rectangle 910.svg" class="img-fluid position absolute" style="position:absolute; right:14%">
               <img src="/svg/Image.svg" class="img-fluid d-flex mx-auto justify-content-center" style="height:320px"/>
               <img src="/svg/Ellipse 129.svg" class="img-fluid position-absolute right-elipse">
               <img src="/svg/Ellipse 127.svg" class="img-fluid position-absolute left-elipse">
              <img src="/svg/Rectangle 912.svg" class="img-fluid position absolute" style="position:absolute; left: 8%; bottom: 43%;">
              <img src="/svg/Rectangle 911.svg" class="img-fluid position absolute star-btm">
          </div>
              <div class="carousel-group-text" style="display: grid; position: relative; top: -28px;">
              <span class="text-center d-grid" :class="isDark ? 'header-text':'header-text-light'">Secure Payment Providers</span>
              <span class="text-center carousel-text">Secure transactions – your funds are held safely <br> until your deal is done</span>
            </div>
        </div>
    </Slide>   
  </Carousel>
        <div>
          <div>
          <div  class="text-center d-flex slide-transition">
            <div @click="currentSlide = 0" :class="currentSlide === 0 ? 'bg-primary' : 'bg'" class="slider-btn" ></div>
            <div @click="currentSlide = 1" :class="currentSlide === 1 ? 'bg-primary' : 'bg'" class="slider-btn" style="margin-left: 4px;" ></div>
            <div @click="currentSlide = 2" :class="currentSlide === 2 ? 'bg-primary' : 'bg'" class="slider-btn"  style="margin-right: 4px; margin-left: 4px" ></div>
            <div @click="currentSlide = 3" :class="currentSlide === 3 ? 'bg-primary' : 'bg'" class="slider-btn" ></div>
            </div>
        </div>
        </div>
  </div>      
</template>

<script setup>
import { ref } from "vue";
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { useTheme } from 'vuetify';



const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
defineComponent({
  Carousel,
  Slide,
  Pagination,
  Navigation,
})

const currentSlide = ref(0)
</script>

<style>
.exchange-img {
left: 0;
right: 0;
margin: auto;
display: block;
}
.balance-img {
right: 0;
position: absolute;
left: 57%;
z-index: 9;
top: 21%;;
}
.bitcoin-img {
position: absolute;
left: -2%;
right: 0;
display: block;
top: 60%;
}
 .qr-code{
z-index: 10;
position: absolute;
top: 22%;
right: 63%;
padding: 5px;
margin: auto;
display: flex;
background: #1A232D;
border-radius: 1rem;
}
.bg-crypto{
border-radius: 0.625rem;
background: #FFF;
box-shadow: 0px 27px 20px 0px rgba(0, 0, 0, 0.02);
width: 20.91569rem;
height: 4.31069rem;
flex-shrink: 0;
display: flex;
margin: auto;
color: #1A2B41;
}
.coin-styling{
  height: 3rem;
  margin-top: 9px;
}
.carousel-text{
color: #8E9BAE;
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 1.6rem */
margin-bottom: 44px;
}
.header-text{
color: #F8FAFC;
text-align: center;
font-family: Manrope;
font-size: 1.5rem;
font-style: normal;
font-weight: 800 !important;
line-height: 120%; /* 1.8rem */
/* margin-top: 51px; */
margin-bottom: 16px;
}
.header-text-light{
background-image: linear-gradient(180deg, #2873FF, #0B6B96); 
background-clip: text;  
-webkit-text-fill-color: transparent ; 
text-align: center;
font-family: Manrope;
font-size: 1.5rem;
font-style: normal;
font-weight: 800;
line-height: 120%; /* 1.8rem */
/* margin-top: 51px; */
margin-bottom: 16px;
}

.right-elipse{
  width: 354px;
  height: 199px;
  top: 15.2%;
  right: 1%;
}
.left-elipse{
  height: 81.9px;
  top: 22.4%;
  right: 13.1%;
}
 .slide-transition{
   display: flex;
   justify-content: center;
   transition: all;
   transition-duration: 300;
   position: relative;
   /* top: 26px ; */
 }
.slider-btn{
  height: 10px;
  width: 10px;
  background: gray;
  border-radius: 1rem;
  cursor: pointer;
}
.star-btm{
  position: absolute;
  right: 14%;
  bottom: 47%;
}
</style>