<template>
<div>
    <span class="section2-subtitlei sub-text2i">Frequently asked questions</span>
    <div class="faq-div" style="margin-bottom: 88px; margin-top: 40px;">
        <h2  class="section2-titlei2" :class="isDark ? 'section2-titlei':'section2-titlei-light'" >We know you have some questions for us.</h2>
     </div>    
     <v-expansion-panels variant="popout" style="display: contents !important;">
    <div v-for="(item, index) in (isLoading ? skeletonArray : UserFaqs)" :key="index"> 
      <v-expansion-panel class="expansion-panel" :class="isDark ? 'expansion-panel' : 'expansion-panel-light'">
        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-close">
          <img v-if="!isLoading" src="/svg/paper-fold.svg" class="me-4" />
          <v-skeleton-loader v-if="isLoading" type="image" class="me-4"></v-skeleton-loader>
          <span :class="isDark ? 'title-text' : 'title-text-light'">
            <template v-if="!isLoading">{{ item.question }}</template>
            <v-skeleton-loader v-else type="text" class="w-75"></v-skeleton-loader>
          </span>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <template v-if="!isLoading">
            <span class="answer-text">{{ item.answer }}</span>
          </template>
          <v-skeleton-loader v-else type="text" class="w-100"></v-skeleton-loader>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </div>
  </v-expansion-panels>
  

</div>
</template>
<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import { getFAQs } from "@/composables/requests/admin";
import {filterByKey} from "@/composables/mixin";

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore()
const pageNumber = ref(1)
const currentPageNumber = ref(1);
const totalPages = ref(2);
const isLoading = ref();

const UserFaqs = ref(pinia.state.UserFaqs || []);

const skeletonArray = Array(5).fill({}); // Temporary skeleton items


const fetchFaqs = async () => {
  isLoading.value = true;

  try {
    const { data } = await getFAQs(currentPageNumber.value);
    totalPages.value = data?.total_pages || totalPages.value;

    if (data?.result?.length) {
      const updatedFaqs = filterByKey('id', [...UserFaqs.value, ...data.result]);
      UserFaqs.value = updatedFaqs;
      pinia.setFAQs(updatedFaqs);
    }
  } catch (e) {
    push.error(`Error: ${e.message}`);
  } finally {
    isLoading.value = false;
  }
};



onMounted(() => {
  // Check if UserFaqs is empty in Pinia store
  if (pinia.state.UserFaqs && pinia.state.UserFaqs.length > 0) {
    UserFaqs.value = pinia.state.UserFaqs;
    isLoading.value = false; // Skip loading as data is already present
  } else {
    fetchFaqs(); // Call the API if no data is present in the Pinia store
  }
});

</script>
<style>
.expansion-panel{
border-radius: 15px !important;
background: #10192D !important;
padding: 20px ;
flex-direction: column;
align-items: flex-start;
gap: 24px;
align-self: stretch;
margin-bottom: 16px;
}
.expansion-panel-light{
border-radius: 15px !important;
background: #F8FAFC !important;
padding: 20px;
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
margin: auto;
}

.answer-text{
color: #64748B;
font-family: "SF Pro Display";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 28px */
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
background: rgb(182, 190, 213) !important;
height: auto ;
position: absolute;
/* padding: 85px !important; */
opacity: 0.4;
border-radius: 15px;
}

</style>