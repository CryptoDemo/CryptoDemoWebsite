<template>
  <div :class="isDark ? 'reviews' : 'reviews-light'">
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="6" class="order-last order-sm-first">
        <div class="fdb-div"
          style="display: flex; flex-direction: column; align-items: flex-start; margin: auto; margin-top: 120px; padding-left: 42px;">
          <v-btn
            style="background: rgba(40, 115, 255, 0.10); width: 115px; height: 36px; margin-bottom: 25px; box-shadow: none; border-radius: 18px; text-transform: unset;">
            <img src="/svg/comment-2-text.svg" class="me-2" />
            <span :class="isDark ? 'feedback' : 'feedback-light'">Feedback</span>
          </v-btn>
          <span class="mb-2 valuable-feedback" :class="isDark ? 'valuable-feedback' : 'valuable-feedback-light'">Valuable
            feedback</span>
          <span class="feedback-subtitle">Our feedback system highlights reliable, experienced users,<span> helping you to trade smoothly.</span></span>
        </div>
      </v-col>


      <v-col cols="12" sm="6" style="display: flex">
        <div class="testimonial-container">
          <div v-for="(testimonial, index) in testimonials" :key="index"
            :class="['testimonial-card review-cards', index === activeIndex ? 'card-active' : 'card-inactive', isDark ? 'review-cards' : 'review-cards-light','activeCard'+index]">
            <div class="d-flex" style="align-items: center; width: 100%; justify-content: space-between;">
              <div class="d-flex">
                <img :src="testimonial.image" alt="profile" width="50" />
                <div class="ml-2 mt-3" style=" display: flex; flex-direction: column; align-items: flex-start;">
                  <span class="review-name" :class="isDark ? 'review-name' : 'review-name-light'">{{ testimonial.name
                    }}</span>
                  <span class="timeZone">{{ testimonial.time }}</span>
                </div>
              </div>

              <div :class="index % 2 != activeIndex ? 'zoom':''"
                style="border-radius: 100px; background: #2873FF; width: 82px; padding: 10px; display: flex; justify-content: center;">
                <div style="border-radius: 100px; background: #5892FF; width: 40px; height: 6.169px;">

                </div>
              </div> 

            </div>
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <small>{{ testimonial.location }}</small>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { gsap, Back, CSSPlugin } from "gsap";
import { useTheme } from 'vuetify';
gsap.registerPlugin(CSSPlugin);

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark);

const selected = ref(0);
const testimonials = reactive([
  {
    name: 'Bonaventure Okoli',
    time: '14th October, 2024',
    text: 'I have used several crypto apps, but this one stands out for its simplicity and reliability. Trading is straightforward, and the app provides real-time data, so Im always updated on market trends. Plus, I love the built-in wallet—it feels secure and is easy to manage.',
    location: 'Portland, PDX',
    image: '/img/Frame 20.png'
  },
  {
    name: 'Samuel Emenike',
    time: '12th June, 2024',
    text: 'What I like most about this app is the smooth user experience. Whether I am buying, selling, or transferring crypto, it’s fast and intuitive. The low transaction fees are a huge bonus, and the app’s customer support has been top-notch whenever I needed help.',
    location: 'Philadelphia, PHI',
    image: '/img/Frame 19.png'
  },
  {
    name: 'Oscar Nwam',
    time: '4th November, 2024',
    text: 'I love how this app lets me keep track of all my cryptocurrencies in one place. The portfolio tracker is incredibly detailed, showing me performance over time, and the security features, like two-factor authentication, give me peace of mind.',
    location: 'Houston, HOU',
    image: '/img/Frame 23.png'
  },
  {
    name: 'Stephen Steph',
    time: '7th September, 2024',
    text: 'This app has really transformed how I interact with the crypto world. From real-time price alerts to detailed analytics, I feel much more in control of my investments.',
    location: 'Washington, D.C., DC',
    image: '/img/Frame 23.png'
  },
  {
    name: 'InHouse Codes',
    time: '17th September, 2024',
    text: 'I love how easy it is to swap between different cryptocurrencies. The exchange rates are competitive, and the transactions are processed quickly. Plus, the customer service is responsive and helped me when I had an issue with my wallet.',
    location: 'San Francisco, SF',
    image: '/img/Frame 23.png'
  }
]);

const interval = ref(null);
let moveInvar = null;
let moveOutvar = null;
let transcendvar = null;

// Computed properties
const selected1 = computed(() => selected.value);
const selected2 = computed(() => (selected.value + 1) % testimonials.length);
const selected3 = computed(() => (selected2.value + 1) % testimonials.length);

// Methods
const clearIntervalAndKillGSAP = () => {
    clearInterval(interval.value);
    killGSAP(moveInvar);
    killGSAP(moveOutvar);
    killGSAP(transcendvar);
};

const killGSAP = (instance) => {
    if (instance) {
        instance.kill();
    }
};

const animateImgs = async () => {
    await animatedvalue();
    interval.value = setInterval(() => {
        animatedvalue();
    }, 4000);
};

const animatedvalue = async () => {
    const card1 = document.querySelector(`.activeCard${selected1.value}`);
    const card2 = document.querySelector(`.activeCard${selected2.value}`);
    const card3 = document.querySelector(`.activeCard${selected3.value}`);

    await moveOut(card1);
    await transcendCard(card2);
    await moveIn(card3);
};

const moveIn = (element) => {
  moveInvar = gsap.fromTo(element,
        {
            opacity: 0,
            y: "200px",
        },
        {
            opacity: 0.05,
            y: "100px",
            ease: Back.easeOut.config(1.7),
            duration: 1,
        }
    );
}

const transcendCard = (element) => {
  transcendvar = gsap.fromTo(element,
        {
            opacity: 0.05,
            y: "100px",
        },
        {
            opacity: 1,
            y: "0px",
            ease: Back.easeOut.config(1.7),
            duration: 1,
        }
    );
}

const moveOut = (element) => {
  moveOutvar = gsap.fromTo(element,
        {
            opacity: 1,
            y: "0px",
        },
        {
            opacity: 0,
            y: "-10000px",
            ease: Back.easeOut.config(1.7),
            duration: 1,
            onComplete: () => {
                selected.value = selected.value === testimonials.length - 1 ? 0 : selected.value + 1;
            },
        }
    );
}

onMounted(() => {
    animateImgs();
});

onBeforeUnmount(() => {
    clearIntervalAndKillGSAP();
});

// const activeIndex = ref(0);

// onMounted(() => {
//   setInterval(() => {
//     activeIndex.value = (activeIndex.value + 1) % testimonials.value.length;
//   }, 5000); // Change testimonial every 3 seconds
// });
</script>


<style scoped>
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');

.testimonial-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 374px;
  overflow: hidden;
}

.zoom {
  animation: zoomAnime 4s linear infinite;
}

@keyframes zoomAnime {
  0% {
    transform: scale(1); /* Initial size */
  }
  50% {
    transform: scale(1.1); /* Slightly larger */
  }
  100% {
    transform: scale(1); /* Back to initial size */
  }
}

.testimonial-card {
  position: absolute;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.7s ease-in-out, opacity 0.7s ease-in-out;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
}

.card-active {
  z-index: 2;
}

.card-inactive {
  z-index: 1;
}

.testimonial-card img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 15px;
}

.testimonial-card p {
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: #8E9BAE;
}

.testimonial-text {
  text-align: left;
  width: 100%;
}

.testimonial-card small {
  font-size: 0.9rem;
  color: #8E9BAE;
  font-weight: 700;
}

.reviews {
  border-radius: 15px;
  border: 0.5px solid #2f3946 !important;
  background: #10192D;
  margin-top: 24px;
  overflow: hidden;
}

.reviews-light {
  border-radius: 15px;
  background: linear-gradient(270deg, #DBE8FF 0%, rgba(219, 232, 255, 0.00) 101.34%);
  overflow: hidden;
  margin-top: 24px;
}

.review-cards {
  border-radius: 15px;
  border: 0.5px solid #2f3946;
  background: #1B2537;
  box-shadow: 0px 10px 25px 0px rgba(27, 37, 55, 0.05);
}

.review-cards-light {
  border-radius: 15px;
  background: #FFF;
  box-shadow: 0px 10px 25px 0px rgba(27, 37, 55, 0.05);
  border: 1px #DBE8FF !important;
}

.review-name {
  color: var(--Colors-Base-white, #FFF);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  /* 22.4px */
  display: flex;
  align-items: center;
}

.review-name-light {
  color: #1B2537;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  /* 22.4px */
  display: flex;
  align-items: center;
}

.timeZone {
  color: #8E9BAE;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  /* 16.8px */
}

.valuable-feedback {
  background: linear-gradient(90deg, #FFF 5.29%, #64748B 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: "SF Pro Display" !important;
  font-size: 32px;
  font-style: normal;
  font-weight: 600 !important;
  line-height: 120%;
  /* 38.4px */
  display: flex;
  height: 38px;
  flex-direction: column;
  justify-content: center;
}

.valuable-feedback-light {
  background: linear-gradient(90deg, #060A1D 6.17%, rgba(6, 10, 29, 0.50) 97.69%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: "SF Pro Display" !important;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 38.4px */
  display: flex;
  height: 38px;
  flex-direction: column;
  justify-content: center;
}

.review-name {
  color: var(--Colors-Base-white, #FFF);
  font-family: "SF Pro Display" !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  /* 22.4px */
  display: flex;
  align-items: center;
}

.review-name-light {
  color: #1B2537;
  font-family: "SF Pro Display" !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  /* 22.4px */
  display: flex;
  align-items: center;
}

.feedback-subtitle {
  color: #64748B;
  font-family: "SF Pro Display" !important;
  font-size: 16px !important;
  font-style: normal;
  font-weight: 400 !important;
  line-height: 140% !important;
  /* 22.4px */
  letter-spacing: 0.32px !important;
}

.feedback {
  color: var(--Colors-Base-white, #FFF);
  text-align: center;
  font-family: "SF Pro Display" !important;
  font-size: 14px !important;
  font-style: normal;
  font-weight: 600;
  line-height: 100% !important;
  /* 14px */
  letter-spacing: 0.14px;

}

.feedback-light {
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

@media screen and (max-width: 600px) {
  .review-cards {
    width: 90% !important;
    display: flex !important;
    margin-bottom: 20px !important;
    margin-top: 10px !important;
  }

  .testimonial-card img[data-v-49a2254d] {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 15px;
  }

  .fdb-div {
    padding-left: 22px !important;
    margin-top: 50px !important;
    margin-bottom: 30px !important;
  }

  .valuable-feedback {
    font-size: 24px !important;
  }

  .feedback-subtitle {
    width: 100% !important;
  }

}
</style>