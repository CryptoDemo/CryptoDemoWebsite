<template>
<div>
    <span class="section2-subtitlei">Frequently asked questions</span>
         <span  :class="isDark ? 'section2-titlei':'section2-titlei-light'" >We know you have some questions for us.</span>
         <v-expansion-panels variant="popout" style="display: contents !important">
             <div v-for=" (FAQs, i ) in FAQ" :key="i" >
                <v-expansion-panel  :class="isDark ? 'expansion-panel':'expansion-panel-light'"  >
                    <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-close">
                        <img src="/img/paper-fold-text.png" class="me-4"/>
                       <span :class="isDark ? 'title-text':'title-text-light'"> {{FAQs.question}} </span>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <span class="answer-text">{{FAQs.answer}}</span>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                </div>
         </v-expansion-panels>
  

</div>
</template>
<script setup>

import { ref } from 'vue';
import { useTheme } from 'vuetify';

const transaction = ref(true);

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);


const FAQ = [
    {question: 'What is Demo Web and how does it work?', answer:'To start trading on Demo Web, simply sign up for an account on our platform. Once your account is verified, you can browse listings of Bitcoin offers from other users and initiate a trade by selecting an offer that suits your requirements.'},
    {question:'How can I start trading on Demo Web?', answer:'To start trading on Demo Web, simply sign up for an account on our platform. Once your account is verified, you can browse listings of Bitcoin offers from other users and initiate a trade by selecting an offer that suits your requirements.'},
    {question:'Which cryptocurrencies are available for trading on Demo Web?', answer:'Currently, Demo Web primarily focuses on facilitating trades in Bitcoin (BTC). However, we may introduce support for additional cryptocurrencies in the future based on user demand and market trends.'},
    {question:'How secure is Demo Web for trading?', answer:' At Demo Web, we prioritize the security of our users funds and personal information. We employ robust encryption protocols, two-factor authentication, and cold storage solutions to ensure the safety of transactions and user data on our platform. '},
    {question:'What are the trading fees on Demo Web?', answer:' Demo Web charges a nominal fee for facilitating trades on our platform. This fee is typically calculated as a percentage of the transaction amount and is transparently displayed to users before they finalize their trades.'},
    {question:'How quickly are deposits and withdrawals processed?', answer:' Deposits and withdrawals on Demo Web are processed promptly, with most transactions being completed within minutes to hours, depending on blockchain confirmation times and other factors. We strive to ensure swift and efficient processing to minimize any inconvenience to our users. '},
    {question:'Does Demo Web offer customer support?', answer:'Yes, Demo Web provides comprehensive customer support to assist users with any inquiries or issues they may encounter while using our platform. Our dedicated support team is available via live chat, email, and our help center during specified hours to address user concerns promptly and efficiently.'},

]

</script>
<style>
.expansion-panel{
border-radius: 15px !important;
background: #10192D !important;
padding: 20px !important;
flex-direction: column;
align-items: flex-start;
gap: 24px;
align-self: stretch;
margin-bottom: 16px;
}
.expansion-panel-light{
border-radius: 15px !important;
background: #F8FAFC !important;
display: flex;
padding: 20px !important;
justify-content: center;
flex-direction: column;
align-items: flex-start;
gap: 24px;
align-self: stretch;
margin-bottom: 16px;
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
display: flex;
justify-content: center;
align-items: center;
margin-top: 173.66px;
letter-spacing: 0.8px;
text-transform: uppercase;
}
.section2-titlei{
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
margin-top: 40px !important;
margin-bottom: 88px !important;
margin: auto;
}
.section2-titlei-light{
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
margin-top: 40px !important;
margin-bottom: 88px !important;
margin: auto;
}

.answer-text{
color: #64748B;
font-family: "SF Pro Display";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 28px */
/* padding-bottom: 70px !important; */
}
.title-text{
color: #8E9BAE;
font-family: "SF Pro Display";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 140%; /* 28px */ 
}
.title-text-light{
color: #10192D;
font-family: "SF Pro Display";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 140%; /* 28px */ 
}
.v-expansion-panel-title--active > .v-expansion-panel-title__overlay, .v-expansion-panel-title[aria-haspopup=menu][aria-expanded=true] > .v-expansion-panel-title__overlay {
opacity: calc(var(--v-activated-opacity)* var(--v-theme-overlay-multiplier));
background: rgb(135, 138, 147) !important;
/* height: 35% !important; */
padding: 85px !important;
opacity: 0.4;
border-radius: 15px;
/* backdrop-filter: blur(25px); */
}

</style>