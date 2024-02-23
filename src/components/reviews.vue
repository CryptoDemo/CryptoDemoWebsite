<template>
  <div>
      <div :class="isDark ? 'reviews':'reviews-light'" >
        <v-row no-gutters>
            <v-col cols="12" sm="6">
                <div class="layout">
                    <div class="wrapper">
                        <img src="/svg/comment-2-text.svg"/>
                        <span :class="isDark ? 'feedback':'feedback-light'">Feedback</span>
                    </div>
                    <span :class="isDark ? 'valuable-feedback':'valuable-feedback-light'" >Valuable feedback</span>
                    <span class="feedback-subtitle">Our feedback system highlights reliable, experienced users, helping you to trade smoothly.</span>
                </div>
            </v-col>
            <v-col cols="12" sm="6">
                <div class="ma-2 pa-2 position-relative ">
                <!-- <v-img v-for="(imagePath, index) in reviews" :key="index" :src="imagePath" alt="reviews"  class="d-flex" ></v-img> -->
                <div class="img-reviews position-relative" v-if="theme.global.current.value.dark" >
                     <div style="border-radius: 15px; background: linear-gradient(180deg, rgba(16, 25, 45, 0.00) 0%, #10192D 100%); height: 55.662px; position: absolute; bottom: 17px; z-index: 1; width: -webkit-fill-available;"></div>
                <v-img src="/svg/dark-reviews1.svg" style="position: ; top: 16px" width="100%"  ></v-img>
                <v-img src="/svg/Framedr.svg" class="position-relative" ></v-img>
                <!-- <v-img src="/img/review-frame.png" class="position-relative" ></v-img> -->
                </div>

                <div class="img-reviews position-relative" v-else>
                    <div style="border-radius: 15px; background: linear-gradient(180deg, rgba(248, 250, 252, 0.00) 0%, #F8FAFC 100%); height: 55.662px; position: absolute; bottom: 17px; z-index: 1; width: -webkit-fill-available;"></div>
                    <v-img src="/img/reviews1.png" style="position: relative; top: 16px" width="100%" ></v-img>
                    <v-img src="/svg/reviews1.svg" class="position-relative" style="" ></v-img>
                </div>
                <!-- <v-img src="/img/review-frame.png"></v-img> -->
                </div>
            </v-col>   
        </v-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useTheme } from 'vuetify';

const transaction = ref(true);

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
// const reviews = ref([
//     '/img/review-frame.png', 
// ]);
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');
.reviews{
border-radius: 15px;
border: 0.5px solid #2f3946 !important;
background: #10192D;
display: flex;
align-items: center;
gap: 2px;
margin-top: 24px;
margin-bottom: 24px;
width: 100%;
height: 375px;
}
.reviews-light{
border-radius: 15px;
background: linear-gradient(270deg, #DBE8FF 0%, rgba(219, 232, 255, 0.00) 101.34%);
display: flex;
align-items: center;
gap: 2px;
margin-top: 24px;
margin-bottom: 24px;
width: 100%;
height: 375px;
}
.wrapper{
border-radius: 100px;
background: rgba(40, 115, 255, 0.10);
display: flex;
padding: 8px;
align-items: center;
gap: 8px;
}
.feedback{
color: var(--Colors-Base-white, #FFF);
text-align: center;
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 14px */
letter-spacing: 0.14px;
}
.feedback-light{
color: #1B2537;
text-align: center;
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 14px */
letter-spacing: 0.14px;
}
.layout{
display: flex;
width: 499px;
height: 375px;
padding: 30px 40px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 25px;
flex-shrink: 0;
}
.valuable-feedback{
background: linear-gradient(90deg, #FFF 5.29%, #64748B 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-align: center;
font-family: "SF Pro Display";
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: 120%; /* 38.4px */
display: flex;
height: 38px;
flex-direction: column;
justify-content: center;
}
.valuable-feedback-light{
background: linear-gradient(90deg, #060A1D 6.17%, rgba(6, 10, 29, 0.50) 97.69%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-align: center;
font-family: "SF Pro Display";
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: 120%; /* 38.4px */
display: flex;
height: 38px;
flex-direction: column;
justify-content: center;
}
.feedback-subtitle{
color: #64748B;
font-family: "SF Pro Display";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 22.4px */
letter-spacing: 0.32px;
width: 357px;
}
.img-reviews{
display: flex;
padding: var(--spacing-3xl, 24px);
flex-direction: column;
}
</style>