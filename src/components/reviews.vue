<template>
  <div>
      <div class="reverse" :class="isDark ? 'reviews':'reviews-light'" >
        <v-row no-gutters>
            <v-col cols="12" sm="6" md="6" class="order-last order-sm-first">
                <div class="layouti">
                    <v-btn class="wrapper" style="width: 106px; height: 36px;">
                        <img src="/svg/comment-2-text.svg" class="me-2"/>
                        <span :class="isDark ? 'feedback':'feedback-light'">Feedback</span>
                    </v-btn>
                    <span class="buy1i" :class="isDark ? 'valuable-feedback':'valuable-feedback-light'">Valuable feedback</span>
                    <span class="feedback-subtitle">Our feedback system highlights reliable, experienced users, helping you to trade smoothly.</span>
                </div>
            </v-col>
            <v-col cols="12" sm="6" style="display: flex; justify-content: flex-end;">
                <div class="position-relative">
              
                <div class="img-reviews position-relative">
                     <div  :class="isDark ? 'gradient1i':'gradient1i-light'"></div>

                    <div v-for="(review, i) in reviews" :key="i" class="position-relative review-cards" :class="isDark ? 'review-cards':'review-cards-light'" :style=" i === 0? 'right: 40px; margin-bottom: 20px; height: 100px; margin-top: 40px' : ''">
                        <div>
                            <div style="display: flex; justify-content: space-between;">
                            <div style="display: flex;">    
                                <img :src="review.img" :alt="review.alt" class="me-4" :class="isDark ? 'img-avt':'img-avt-light'"/>
                                <div style="display: flex; flex-direction: column; align-self: center;">
                                    <span class="review-name" :class="isDark ? 'review-name':'review-name-light'">{{ review.name }}</span>
                                    <div class="d-flex">
                                        <span class="location-txt me-3">{{ review.location }}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5" fill="none" class="me-3 mt-2" style="display: flex; align-self: center;">
                                            <circle cx="2" cy="2.37598" r="2" fill="#64748B"/>
                                        </svg>
                                        <span class="location-txt">{{ review.date }}</span>
                                    </div>
                                </div>
                            </div>
                                <div class="blue-box" style="border-radius: 100px; background: #2873FF; padding: 10px; height: 27px !important; width: 81px; display: flex; align-self: center; position: absolute; right: 18px"></div>
                            </div>
                            <div>
                                <img :src="review.textlines" class="mt-4" style="max-width: 100%;" v-if="theme.global.current.value.dark"/>
                                <img :src="review.textlines1" class="mt-5" style="max-width: 100%;"  v-else/>
                            </div>
                            </div>
                           
                     </div>


                
                    </div>
                
                </div>
            </v-col>   
        </v-row>
    </div>
  </div>
</template>

<script setup>

import { useTheme } from 'vuetify';


const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);

const reviews = [
   {
     img:'/svg/user-avatar.svg', name:'Frank Tom', alt:'avatar', location: 'In Netherland', date:'4th, August', 
   } ,

   {
     img:'/svg/user-avatar.svg', name:'Okoli Bona', alt:'avatar', location: 'In Germany', date:'25th, December', textlines:'/svg/textLines.svg', textlines1:'/svg/linetext-light.svg',
   } 
];
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
/* padding: 0 10px; */
width: 100%;
height: 374px;
overflow: hidden;
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
height: 374px;
overflow: hidden;
}
.gradient1i{
border-radius: 15px; 
background: linear-gradient(180deg, rgba(16, 25, 45, 0.00) 0%, #10192D 100%); 
height: 55.662px;
position: absolute; 
bottom: 0; 
z-index: 1; 
width: -webkit-fill-available;
}
.gradient1i-light{
border-radius: 15px;
background: linear-gradient(180deg, rgba(248, 250, 252, 0.00) 0%, #F8FAFC 100%);
height: 55.662px;
position: absolute; 
bottom: 0; 
z-index: 1; 
opacity: 0.8;
width: 100%;
}
.img-avt{
border-radius: 100px;
background: #10192D;
display: flex;
width: 50px;
height: 50px;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
}
.img-avt-light{
border-radius: 100px;
background: #DBE8FF;
display: flex;
width: 50px;
height: 50px;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
}
.wrapper{
border-radius: 100px;
background: rgba(40, 115, 255, 0.10);
display: flex;
padding: 8px;
align-items: center;
gap: 8px;
box-shadow: none;
letter-spacing: 0px;
text-transform: capitalize;
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
.layouti{
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
.review-name{
color: var(--Colors-Base-white, #FFF);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 22.4px */
display: flex;
align-items: center;
}
.review-name-light{
color: #1B2537;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 22.4px */
display: flex;
align-items: center;
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


.review-cards{
border-radius: 15px;
border: 0.5px solid #2f3946;
background: #1B2537;
box-shadow: 0px 10px 25px 0px rgba(27, 37, 55, 0.05);
display: flex;
width: 458px;
padding: var(--spacing-3xl, 24px);
flex-direction: column;
align-items: flex-start;
gap: var(--spacing-4xl, 32px);
position: relative;
margin-right: 45px;
}

.review-cards-light{
border-radius: 15px;
background: #FFF;
box-shadow: 0px 10px 25px 0px rgba(27, 37, 55, 0.05);
display: flex;
width: 458px;
padding: var(--spacing-3xl, 24px);
flex-direction: column;
align-items: flex-start;
gap: var(--spacing-4xl, 32px);
position: relative;
border: none !important;
}
.location-txt{
color: #8E9BAE;
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 140%; /* 16.8px */
margin-top: 5px;
}
</style>