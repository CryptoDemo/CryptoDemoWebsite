<template>
  <div class="ml-2">
    <div style="margin-bottom: 13px!important; margin-top:48px">
        <span class="pswrd-mgt" :class="isDark ? 'card-text-dark':'card-text-light'" style="font-weight: 700;">Activity</span>
      </div>
        <v-table  class="mt-5" style="display: grid! important; margin-bottom: 32px" >
          <thead>
            <tr :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 24px !important; height: 74px;  display: flex; justify-content: space-between ">
            

              <th style="display: flex; align-items: center; align-self: center;">
                <div class="d-inline-flex">
                    <span class="activity-header" :class="isDark ? 'text-dark':'text-light'">S.N.</span>
                    <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
                </div>
              </th>

            <th class="actions" style="display: flex; align-items: center; align-self: center; position: relative; right: 36px ">
                <div class="d-flex">
                  <span class="activity-header" :class="isDark ? 'text-dark':'text-light'">Actions</span>
                  <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
                </div>
              </th>

                <th class="browser" style="display: flex; align-items: center; align-self: center; position: relative; right: 15px;">
                <span class="activity-header" :class="isDark ? 'text-dark':'text-light'">Browser</span>
                <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
              </th>

              <th class="ipAddress" style="display: flex; align-items: center; align-self: center; position: relative;right: -10px">
                <span class="activity-header" :class="isDark ? 'text-dark':'text-light'">IP Address</span>
                <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
              </th>

              <th class="location1" style="display: flex; align-items: center; align-self: center; position: relative;right: 0px"> 
                <span class="activity-header" :class="isDark ? 'text-dark':'text-light'"> Location</span>
                  <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon> 
              </th>

              <th class="signedIn" style="display: flex; align-items: center; align-self: center; position: relative;right: 0px">
                <span class="activity-header" :class="isDark ? 'text-dark':'text-light'">Signed In</span>
                <v-icon size="large"  color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
              </th>
              
            </tr>
          </thead>
        
            <tbody>
              <tr v-for="item in secondTable" :key="item.name" style="display: flex; border-bottom:.5px solid rgba(142,155,174,.5);justify-content: space-between; align-items: baseline; margin-top: 10px">
              <td ><span class="browser-txt" :class="isDark ? 'text-dark':'text-light'"  style="margin-left: 10px">{{item.serialNumber}}</span></td>
              <td class="logCaptions"><span class="browser-txt" :class="isDark ? 'text-dark':'text-light'">{{item.Actions}}</span></td>
              <td class="logCaptions1"><span class="browser-txt" :class="isDark ? 'text-dark':'text-light'">{{item.Browser}}</span></td>
              <td class="logCaptions2"><span class="browser-txt" :class="isDark ? 'text-dark':'text-light'">{{item.IPAddress}}</span></td>
              <td class="logCaptions3"><span class="browser-txt" :class="isDark ? 'text-dark':'text-light'">{{item.Location}}</span></td>
              <td><v-btn class="" style="width: 91px; height: 40px; border-radius: 12px; background: var(--Primary-60, #89B2FF);color: #165CDD; font-weight: 700; font-family: manrope;font-size: 12px; text-transform: unset; box-shadow: none !important;" >{{item.SignedIn}}</v-btn></td>
              
              </tr>
            </tbody>
        </v-table>
        <v-btn class="primary-btn1" width="152px"> Clear sessions</v-btn>

        <div style="margin-top: 188px; margin-bottom: 115px">
          <!-- <v-dialog width="647px">
            <template v-slot:activator="{ props }"><v-btn v-bind="props" width="152px" class="primary-btn1" style="border-radius: 16px; box-shadow: none; background: var(--Warm-Red, #E33E38) !important;"> Delete Account</v-btn></template>
              <template v-slot:default="{ isActive }">
                <v-card style="background: #12181F; border-radius: 32px; border: 1px solid var(--border, #303A46)!important;  padding: 40px ">
                  <v-card-text>
                    <div style="margin-bottom: 20px;">
                      <img src="/svg/delete-icon.svg"/>
                    </div>
                    <span style="font-size: 20px;color: #D8D8D8; font-family: Manrope; font-weight: 600;line-height: normal;">Are you sure you want to delete your <br> account permanently?</span>
                    <div style="margin-top: 20px">
                        <span style="color:#969696; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">Press “Delete account” to remove it permanently, you’ll receive a confirmation link via email and a moderator will process your request or “Cancel” if you want to keep your benefits. </span>
                    </div>
                  </v-card-text>

                  <v-card-actions style="justify-content: space-around; margin-top: 35px;">
                      <v-btn style="border-radius: 16px; border: 1px solid var(--border, #303A46); background: #E2E8F0; display: flex;width: 230px; height: 63px; color: var(--Gray-Dark, #323232);text-align: center; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal; text-transform: unset; letter-spacing: 0px">
                            Delete account
                      </v-btn>
                    <v-btn class="primarybtn" style="display: flex; width: 230px; height: 64px; font-weight: 600;"
                      text="Cancel"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog> -->
        
        </div>
  </div>
</template>

<script setup>
import { useTheme } from 'vuetify';

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const secondTable = [
      {
        serialNumber: '1',
        Actions: "User Login",
        Browser: "Chrome (Windows 10)",
        IPAddress: "102.215.57.47",
        Location: "Nigeria, Lagos",
        SignedIn: "8 hours ago",
        
      },
      {
        serialNumber: '2',
        Actions: "User Login",
        Browser: "Chrome (Windows 10)",
        IPAddress: "102.215.57.47",
        Location: "Nigeria, Lagos",
        SignedIn: "8 hours ago",
        
      },
          
    
    ];
const  UserActivity = [
      {
        serialNumber: '1',
        SignedIn: "4 hours ago",
        Browser: "Chrome (Windows 11)",
        IPAddress: "102.215.57.47",
        Location: "Nigeria, Lagos",
        Status: "Active",
        Delete: "Delete",
      },
    ];
      
// const notification = ref (true)
</script>

<style  scoped>
.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td, .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
  border: none !important;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
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
font-family: Poppins;
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
font-family: Poppins;
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
.browser-txt{
font-size: 12px;
display: -webkit-box !important; 
-webkit-box-orient: vertical !important;
-webkit-line-clamp: 1 !important;
text-overflow: ellipsis;
overflow: hidden;
}
.logCaptions{
width: 90px !important;
position: relative !important;
right: -9px !important;
}
.logCaptions1{
width: 90px !important;
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
.actions{
  margin-left: 28px !important;
}
.browser{
right: 28px  !important;
}
.ipAddress{
  right: 29px !important;
  width: 129px !important;
}
.location1{
  right: 34px !important;
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