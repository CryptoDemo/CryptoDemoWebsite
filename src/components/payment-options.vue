<template>
  <div class="position-relative"> 
      <svg width="667" height="336" viewBox="0 0 667 336" fill="none" xmlns="http://www.w3.org/2000/svg" class="position-absolute blue-ellipse1" style="right:0; bottom: 65%;">
        <g filter="url(#filter0_f_4140_73519)">
        <ellipse cx="333.313" cy="168.21" rx="283.279" ry="117.635" fill="#2873FF" fill-opacity="0.25"/>
        </g>
        <defs>
        <filter id="filter0_f_4140_73519" x="0.0341797" y="0.575439" width="666.558" height="335.269" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_4140_73519"/>
        </filter>
        </defs>
      </svg>


      <div class="section2i section2" :class="isDark ? 'section2':'section2-light'">
        <span class="section2-subtitle card-sub1">TRADE YOUR COIN LIKE A FOREX EXPERT</span>
        <span class="section2-title" :class="isDark ? 'section2-title':'section2-title-light'" style="margin-top: 48px; margin-bottom: 48px">Over 20 ways to buy and sell Bitcoin.</span>
        <span class="explore-trade">Explore our Marketplace and start trading with your favorite payment methods or discover something new.</span>
        <div class="mx-auto btn-segment2" :class="isDark ? 'btn-segment':'btn-segment-light'" style="width:365px; border-radius:100px; padding: 5px; margin-top:72px; margin-bottom: 72px;">

          <v-btn :class="`${transaction1 ? 'buy-btn btn-seg1': 'sell-btn'} ${isDark ? 'buy-btn':'buy-btn-light'}`" @click.prevent="transaction1=true" style="border-radius: 41px !important; height: 40px !important;">
            <span>{{transaction1 ?  'Sell✨' : 'Sell' }}</span>
          </v-btn>
          <v-btn :class="`${!transaction1 ? 'buy-btn': 'sell-btn'} ${isDark ? 'buy-btn':'buy-btn-light'}` " @click.prevent="transaction1=false" style="border-radius: 41px !important; height: 40px !important;" >
          <span>{{transaction1 ?  'Buy' : 'Buy✨' }}</span>
          </v-btn>
        </div>
      </div>

      <div class="card-layout1">
            <v-row align="center" justify="center">
              <v-col v-for="(method, index) in paymentMethods.slice(0, 6)" :key="index" sm="4" cols="12">
                <v-card  :class="isDark ? 'card-layout':'card-layout-light'" bg-color="#10192D"  color="white" variant="text" @click="Nav_marketPlace(); pinia.state.selectedPaymentMethod_from_indexPage = method.name" style="cursor: pointer">
                    <v-card-item style="padding: 0px !important;">
                        <div>
                            <div class="">
                              <img src="/svg/Featured icon (4).svg"/>
                            </div>
                            <div :class="isDark ? 'card-header':'card-header-light'">
                              {{ method.name  }}
                            </div>
                            <!-- <div  :class="isDark ? 'text-caption':'text-caption-light'">{{transaction1? variant.textCaption : variant.textCaption1}}</div> -->
                            <button style="margin-top: 18px; display: inline-flex;">
                              <span class="sell-btc-text me-2" style="color: #2873FF !important">{{ transaction1? "Sell Crypto" : "Buy Crypto" }}</span>  
                              <img src="/svg/blue-arrow.svg" class=""/>
                            </button>
                        </div>
                    </v-card-item>
                </v-card>
              </v-col>
            </v-row>
      </div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import { getPaymentMethod } from "@/composables/requests/paymentMethods";


const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();
const transaction1 = ref(true);
const paymentMethods = computed(() => pinia.state.PaymentMethod);
const pageNumber = ref(1);

const Nav_marketPlace = () => {
  // Perform the check for user login
  if (pinia.state.user.token) {
    navigateTo('/account/marketplace/activeOffers');
  } else {
    navigateTo('/authentication/login');
  }
}

const getPayment_meths = async () => {
  try {
    // Fetch active offers
    const data = await getPaymentMethod(pageNumber.value);

    console.log(data)

    // Check if the data retrieval was successful
    if (data.success) {
      pinia.setPaymentMethod(data.data.result);
      console.log(data.data.result);
    } else {
      push.error(`Error: ${data.message || 'Failed to fetch payment methods'}`); // Custom error message
    }
  } catch (e) {
    console.error("Unexpected error:", e);
    push.error(`Unexpected error: ${e.message || e}`); // Detailed error message
  }
};

const variants = [
{ cardImages: '/svg/Featured icon.svg', title:'Bank transfer', textCaption:'Our guided bank transfer trades make it even easier to sell Bitcoin and receive payment.', textCaption1:'Our guided bank transfer trades makes it even easier to Buy Bitcoin.'}, 
{ cardImages: '/svg/Featured icon (1).svg', title:'Cash payment' , textCaption:'Happy to accept cash? Then you can do just that.', textCaption1:'Happy to accept cash? Then you can do just that.'}, 
{ cardImages: '/svg/Featured icon (2).svg', title:'Online Wallets' , textCaption:'Receive payment through popular online wallets including MTN Mobile Money.', textCaption1:'Buy Bitcoin using a huge range of popular online wallets, including MTN Mobile Money.'}, 
{ cardImages: '/svg/Featured icon (3).svg', title:'Discounted gift cards' , textCaption:'Use your Bitcoin to get big discounts on popular gift cards.', textCaption1:'Have a gift card you dont need? You can trade it for Bitcoin.'}, 
{ cardImages: '/svg/Featured icon (4).svg', title:'Digital currencies' , textCaption:'Use Tether, Ethereum, Litecoin, and more to sell Bitcoin.', textCaption1:'Use Tether, Ethereum, Litecoin, and more to buy Bitcoin.'}, 
{ cardImages: '/svg/Featured icon (5).svg', title:'Goods and services' , textCaption:'Use Bitcoin to pay for goods and services from around the world.', textCaption1:'Use Bitcoin to Buy  goods and services from around the world.'}, 
];

onMounted(() => {
  getPayment_meths()
});

</script>

<style scoped>
.section2{
border-radius: 50px;
border-top: 1px solid #2873FF;
background: rgba(6, 10, 29, 0.50);
backdrop-filter: blur(44.04999923706055px);
margin-top: 170px;
height: fit-content !important;
}

.section2-light{
border-radius: 50px;
border-top: 1px solid #2873FF;
background: rgba(255, 255, 255, 0.50);
backdrop-filter: blur(44.04999923706055px);
margin-top: 170px;
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

.text-caption{
color: #8E9BAE;
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

.section2-title1{
text-align: center;
font-family: "SF Pro Display";
font-size: 64px;
font-style: normal;
font-weight: 700;
line-height: 120%; /* 76.8px */
letter-spacing: -1.92px;
width: 688.35px;
display: flex;
justify-content: center;
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

/* Light Mode Styles */
.google-translate-select-dropdown__menu.light-mode {
  background-color: #10192d;
  border: 1px solid var(--google-translate-select-border-color-light);
  box-shadow: var(--google-translate-select-box-shadow-light);
}

/* Dark Mode Styles */
.google-translate-select-dropdown__menu.dark-mode {
  background-color: #10192d; /* Dark background color */
  border: 1px solid #333; /* Dark border color */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Dark shadow */
}

</style>