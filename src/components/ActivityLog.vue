<template>
  <div class="ml-2">
    <div style="margin-bottom: 13px!important; margin-top:48px">
        <span style="font-weight: 700; font-size: 18px;">Activity Log</span>
      </div>
        <v-table  class="mt-5" style="display: grid! important; margin-bottom: 32px; height: 440px;" >
          <thead>
            <tr :class="isDark ? 'profile-cards-dark':'profile-cards-light'" class="tr-div" style="border-radius: 24px !important; height: 70px;  display: flex; justify-content: space-between ">
            

              <th style="display: flex; align-items: center; align-self: center;">
                <div class="d-inline-flex">
                    <span class="activity-header" :class="isDark ? 'text-dark':'text-light'">S.N.</span>
                </div>
              </th>

            <th class="actions" style="display: flex; align-items: center; align-self: center; width: 11%;">
                <div class="d-flex">
                  <span class="activity-header" :class="isDark ? 'text-dark':'text-light'">Action</span>
                </div>
              </th>

                <th class="browser" style="display: flex; align-items: center; align-self: center; width: 59%; justify-content: center;">
                <span class="activity-header" :class="isDark ? 'text-dark':'text-light'">Description</span>
              </th>

              <th class="signedIn" style="display: flex; align-items: center; align-self: center; position: relative;right: 20px">
                <span class="activity-header" :class="isDark ? 'text-dark':'text-light'">Date</span>
              </th>
              
            </tr>
          </thead>
        
            <tbody>
              <tr v-for="(item, i) in activityLogs" :key="item.name" style="display: flex; border-bottom:.5px solid rgba(142,155,174,.5);justify-content: space-between; align-items: baseline; margin-top: 5px">
                <td ><span class="browser-txt" :class="isDark ? 'text-dark':'text-light'" style="margin-left: 10px">{{i+1}}</span></td>
                <td class="logCaptions" style="width: 23%;display: flex; justify-content: center; align-items: center;"><span class="browser-txt" :class="isDark ? 'text-dark':'text-light'">{{item.title}}</span></td>
                <td class="logCaptions1" style="width: 60%;"><span class="browser-txt" :class="isDark ? 'text-dark':'text-light'">{{item.description}}</span></td>
                <td><span class="browser-txt" :class="isDark ? 'text-dark':'text-light'">{{formatDate(item.timestamp)}}</span></td>
              </tr>

              <tr v-if="isLoading">
                <td class="d-flex justify-content-center align-items-center">
                  <v-progress-circular
                    :width="3"
                    indeterminate
                  ></v-progress-circular>
                </td>
              </tr>

              <tr v-if="!isLoading && !activityLogs?.length">
                <td><span class="d-flex justify-content-center align-items-center">No records found</span></td>
              </tr>
            </tbody>
        </v-table>

        <v-btn :disabled="isLoading" :loading="isLoading" v-if="(!isLoading && activityLogs?.length) && (currentPageNumber!=totalPages)" class="primary-btn1" width="152px" @click.prevent="fetchMore()" style="margin-bottom: 130px;"> Fetch More</v-btn>
  </div>
</template>

<script setup>
import { useTheme } from 'vuetify';
import {getActivityLogs} from "@/composables/requests/users";
import {filterByKey,formatDate} from "@/composables/mixin";

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const currentPageNumber = ref(1);
const totalPages = ref(2);
const isLoading = ref(false);
const pinia = useStore();

const activityLogs = ref(pinia.state.activityLogs || []);

const fetchMore = async()=>{
  // increment the pageNumber
  currentPageNumber.value += 1;

  // fetch the new page record
  fetchActivityLogs();
}

const fetchActivityLogs = async()=>{
  try{
    if(pinia.state.user?.token)
    isLoading.value = true;
    const result = await getActivityLogs(currentPageNumber.value);
    isLoading.value = false;
  
    totalPages.value = result?.data?.total_pages || totalPages.value;
  
    if(result?.data?.result?.length){
      activityLogs.value = filterByKey("id",[...activityLogs.value,...result?.data?.result]);
      pinia.setActivityLogs(activityLogs.value);
    }
  }catch(e){
    isLoading.value = false;
    push.error(`Error: ${e.message}`);
  };
}

onMounted(()=>{
  fetchActivityLogs();
});
</script>

<style  scoped>
.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td, .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
  border: none !important;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}

.v-table {
  background: inherit !important;
}
.v-table--density-default > .v-table__wrapper > table > thead > tr > th, .v-table--density-default > .v-table__wrapper > table > tfoot > tr > th {
  border: none !important;
}
.v-table__wrapper > table > tfoot > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > th {
 color: var(--Gray-Medium-light, #969696) !important;
}
.v-table {
--v-table-header-height: 56px;
border-radius: inherit;
line-height: 1.5;
max-width: 100%;
display: flex;
flex-direction: column;
color: var(--Gray-Medium-light, #969696) !important;
}
.header{
color: var(--Gray-Medium-light, #969696);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 22.4px */
}
.v-table--density-default > .v-table__wrapper > table > tbody > tr > td, .v-table--density-default > .v-table__wrapper > table > thead > tr > td, .v-table--density-default > .v-table__wrapper > table > tfoot > tr > td {
    height: calc(var(--v-table-row-height, 52px) + 0px);
}
.v-table__wrapper {
    border-radius: inherit;
    overflow: auto;
    flex: 1 1 auto;
}
.actv-btn{
border-radius: 12px !important;
background: #1F2F2F !important;
display: flex;
width: 71px !important;
align-items: center !important;
text-transform: unset !important;
color: var(--main, #0CAF60) !important;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 12px !important;
font-style: normal;
font-weight: 400 !important;
line-height: 24px !important; /* 200% */
box-shadow: none;
}
/* .delete-btn{
border-radius: 12px !important;
background: rgba(246, 85, 86, 0.12) !important;
align-items: center !important;
gap: 5px !important;
text-transform: unset !important;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 12px !important;
font-style: normal;
font-weight: 400 !important;
line-height: 24px !important; 
} */
.browser-txt{
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 22.4px */
}
.primary-btn1{
display: flex !important;
height: 64px;
align-items: center !important;
border-radius: 16px !important;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF) !important;
text-transform: unset !important;
color: var(--Colors-Base-white, #FFF);
text-align: center !important;
font-family: Manrope;
font-size: 14px;
font-style: normal !important;
font-weight: 400;
line-height: normal !important;
}
.v-table > .v-table__wrapper > table {
    width: 100%;
    border-spacing: 0;
    display: grid;
}
.profile-cards-dark{
background:  #10192D!important;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px !important;
height: fit-content;
}
.profile-cards-light{
background: #F8FAFC!important;
height: fit-content;
}
.activity-header{
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 160%; 
}

@media screen and (max-width: 600px) {
.activity-header {
font-size: 12px;
font-style: normal;
font-weight: 700;
}
/* .browser-txt{
font-size: 12px;
display: -webkit-box !important; 
-webkit-box-orient: vertical !important;
-webkit-line-clamp: 1 !important;
text-overflow: ellipsis;
overflow: hidden;
} */
.logCaptions{
width: 132px !important;
position: relative !important;
/* right: -9px !important; */
}
.logCaptions1{
width: 235px !important;
margin-left: -15px;
}
.logCaptions2{
  width: 90px !important;
  right: 13px;
  position: relative;
}
.logCaptions3{
  width: 90px !important;
  position: relative;
  right: 2px;
}

.browser{
right: 28px  !important;
}
.tr-div{
height: 60px !important;
}
.signedIn{
  display: flex;
  width: max-content;
}
.primary-btn1{
  height: 50px !important;
  margin-top: 28px !important;
 }
}
</style>