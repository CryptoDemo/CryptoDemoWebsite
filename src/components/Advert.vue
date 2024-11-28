<template>
    <div v-if="isRendered" class="mainContainer" style="width: 286px; cursor: pointer; color: #fff; display: flex; flex-direction: column; align-items: center; gap: 6px; padding-top: 10px;">
      <div style="padding: 0px 30px; align-items: center; display: flex; gap: 3px">
        <img src="/svg/Logo.svg" alt="company logo" style="width: 48px" />
        <span style="font-size: 24px; line-height: 27px; font-weight: 600;">Betacrypto✨️</span>
      </div>
  
      <div style="padding: 0px 70px; margin: 20px 0px 10px 0px">
        <p style="font-size: 30px; line-height: 40px; font-weight: 800; text-align: center">
          {{ currentAd.title }}
        </p>
      </div>
  
      <div style="padding: 0px 30px; cursor: pointer;">
        <v-btn
          style="background: linear-gradient(360deg, #2873FF, #0B6B96); border-radius: 30px; margin-top: 10px; font-weight: 800; cursor: pointer"
        >
          Download App
        </v-btn>
      </div>
  
      <p style="font-size: 9px; line-height: 12px; font-weight: 500; padding: 0px 25px; text-align: center">
        {{ currentAd.subTitle }}
      </p>
  
      <div style="width: 100%; height: 170px; padding-top: 15px; margin-top: 20px; position: relative;">
        <img src="/img/rbo.png" style="position: absolute; bottom: 0; right: 0; width: 100%; opacity: .04;">
        <img
          v-if="currentAd.bottomImg"
          :src="currentAd.bottomImg"
          style="position: absolute; bottom: 0; right: 0; width: 90%"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  
  const adsData = [
    {
      id: 1,
      title: "Trade Smarter, Earn More Today",
      subTitle: "Download the Betacrypto✨️ mobile app and dive into the world of crypto trading!",
      bottomImg: "/img/rb.png",
    },
    {
      id: 2,
      title: "Trade Big Movers with BetaCrypto",
      subTitle: "Always trade with caution and strategy.",
      bottomImg: "/img/rbto.png",
    },
  ];
  
  const currentAdIndex = ref(0); // Track the current ad index
  const currentAd = ref(adsData[currentAdIndex.value]); // Current ad
  const isRendered = ref(false); // Controls when the component is rendered
  
  // Function to cycle ads
  const cycleAds = () => {
    currentAdIndex.value = (currentAdIndex.value + 1) % adsData.length;
    currentAd.value = adsData[currentAdIndex.value];
  };
  
  // Set up interval to change ads every 15 seconds
  let adInterval;
  onMounted(() => {
    // Delay rendering the component for 2 seconds
    setTimeout(() => {
      isRendered.value = true;
  
      // Start the ad cycling interval
      adInterval = setInterval(cycleAds, 15000); // Change every 15 seconds
    }, 1000); // 2-second delay
  });
  
  // Clean up interval when component is unmounted
  onUnmounted(() => {
    clearInterval(adInterval);
  });
  </script>
  
  <style scoped>
  .mainContainer {
    background: #10192d; /*linear-gradient(360deg, #2873FF, #0B6B96)*/
    border-radius: 2px;
  }
  </style>
  