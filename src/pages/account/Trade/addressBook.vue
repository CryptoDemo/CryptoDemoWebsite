<template>
    <div>
      <Header :hide="true" :icon1="true" :icon3="true" :icon2="true" :wallet="true"/>
      <v-container class="d-flex" style="margin-top: 110px">
        <div class="flex-lg-and-up hidden-sm-and-down">
            <Side-nav/>
        </div>
  
        <div class="trades-div" style="width: 100%; margin-left: 24px;">
          <div class="acct-settings" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="display: flex; justify-content: space-between; margin-bottom: 40px; border: none;">
            <span style=" font-size: 24px; font-style: 28px; font-weight: 600;color: #5892ff;">Address Book</span>
            <span class="mail-text" :class="isDark ? 'text-dark' : 'text-light'"> {{ pinia?.state?.user?.email }}</span>
          </div>

          <div style="height: 400px; display: flex; flex-direction: column;">
            <div style="display: flex; margin: auto; flex-direction: column; align-items: center;">     
                <img src="/svg/tag-user.svg" width="100"/>
                <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 14px;">You have not saved any address</span>
                    <span @click="navigateTo('/account/trade/saveAddress')" class="text-decoration-underline text-subtitle-2 text-center cursor-pointer" :class="isDark ? 'text-dark' : 'text-light'">save address to see them here</span>
                </div>
            </div>
          </div>
        </div>

      </v-container>
      <Footer class="flex-lg-and-up hidden-sm-and-down" />
      <Mobile-footer class="mobile-footer" />
    </div>
  </template>
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from "vue";
  import { useTheme } from "vuetify";

  definePageMeta({
    middleware: 'scroll-to-top'
  });

  const theme = useTheme()
  const isDark = computed(() =>  theme.global.current.value.dark);
  const pinia = useStore();
  </script>

    

  
  <style>
  
  </style>
 