<template>
  <div>
    <div style="margin-bottom: 13px!important">
      <span>Active sessions</span>
    </div>
       <v-table style="display: grid! important; margin-bottom: 32px">
        <thead>
          <tr style="border-radius: 24px !important;  background: var(--secondary-background, #12181F); display: flex; justify-content: space-between  ">
          

            <th style="display: flex; align-items: center;">
              <div class="d-flex">
                  <span>S.N.</span>
                  <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
              </div>
            </th>

            <th style="display: flex; align-items: center; position: relative;right: 47px">
              <div class="d-flex">
                <span>Signed in</span>
                <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
              </div>
            </th>

             <th style="display: flex; align-items: center; position: relative;right: 51px">
              <span >Browser</span>
              <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
            </th>

             <th style="display: flex; align-items: center; position: relative;right: 35px">
              <span>IP Address</span>
              <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
            </th>

            <th style="display: flex; align-items: center; position: relative;right: 61px">
              <span> Location</span>
                <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon> 
            </th>

            <th style="display: flex; align-items: center; position: relative;right: 72px">
              <span>Status</span>
              <v-icon size="large"  color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
            </th>
            <th class=""> 
              
            </th>
          </tr>
        </thead>
      
    <tbody>
      <tr v-for="item in UserActivity" :key="item.name" style="display: flex; border-bottom: 1px solid #242D39 !important; justify-content: space-between; align-items: baseline; margin-top: 10px">
  
        <td><span class="browser-txt" style="margin-left: 10px" >{{item.serialNumber}}</span></td>
        <td><span class="browser-txt" style="margin-left: 4px ">{{item.SignedIn}}</span></td>
        <td><span class="browser-txt">{{item.Browser}}</span></td>
        <td><span class="browser-txt">{{item.IPAddress}}</span></td>
        <td><span class="browser-txt">{{item.Location}}</span></td>
        <td><v-btn class="actv-btn"  style="width: 70px; height: 40px ">{{item.Status}}</v-btn></td>
        <td><v-btn v-bind="props"  class="delete-btn position-relative" style="width: 96px; height: 40px;">
          <img src="/svg/close-circle.svg" style="margin-right: 3px !important"/>
          {{item.Delete}} 
          </v-btn>
         </td>
        
      
              </tr>
            </tbody>
        </v-table>


              <div class="mt-5">
                  <v-btn class="primary-btn1" width="152px">End all sessions</v-btn>
              </div>

            <div style="margin-bottom: 13px!important; margin-top:48px">
                <span>Activity</span>
             </div>
              <v-table  class="mt-5" style="display: grid! important; margin-bottom: 32px" >
                <thead>
                  <tr style="border-radius: 24px !important;  background: var(--secondary-background, #12181F); display: flex; justify-content: space-between ">
                  

                    <th style="display: flex; align-items: center;">
                      <div class="d-inline-flex">
                          <span>S.N.</span>
                          <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
                      </div>
                    </th>

                  <th style="display: flex; align-items: center; position: relative;right: 36px">
                      <div class="d-flex">
                        <span>Actions</span>
                        <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
                      </div>
                    </th>

                      <th style="display: flex; align-items: center; position: relative;right: 13px">
                      <span style="">Browser</span>
                      <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
                    </th>

                    <th style="display: flex; align-items: center; position: relative;right: -10px">
                      <span>IP Address</span>
                      <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
                    </th>

                    <th style="display: flex; align-items: center; position: relative;right: 0px"> 
                      <span> Location</span>
                        <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon> 
                    </th>

                    <th style="display: flex; align-items: center; position: relative;right: 0px">
                      <span>Signed In</span>
                      <v-icon size="large"  color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
                    </th>
                    
                  </tr>
                </thead>
              
                  <tbody>
                    <tr v-for="item in secondTable" :key="item.name" style="display: flex; border-bottom: 1px solid #242D39 !important; justify-content: space-between; align-items: baseline; margin-top: 10px">
                
                      <td><span class="browser-txt"  style="margin-left: 10px">{{item.serialNumber}}</span></td>
                      <td><span class="browser-txt">{{item.Actions}}</span></td>
                      <td><span class="browser-txt">{{item.Browser}}</span></td>
                      <td><span class="browser-txt">{{item.IPAddress}}</span></td>
                      <td><span class="browser-txt">{{item.Location}}</span></td>
                      <td><v-btn class="" style="width: 91px; height: 40px; border-radius: 12px; background: var(--Primary-60, #89B2FF);color: #165CDD; fomt-weight: 700; font-family: manrope;font-size: 12px; text-transform: unset" >{{item.SignedIn}}</v-btn></td>
                    <!-- <td></td> -->
                      
                    
                    </tr>
                  </tbody>
              </v-table>
              <v-btn class="primary-btn1" width="152px"> Clear sessions</v-btn>



        <div style="margin-top: 188px; margin-bottom: 115px">

            <v-dialog width="647px">
                <template v-slot:activator="{ props }"><v-btn v-bind="props" width="152px" class="primary-btn1" style="border-radius: 16px; background: var(--Warm-Red, #E33E38) !important;"> Delete Account</v-btn></template>

                    <template v-slot:default="{ isActive }">
                          <v-card style="background: var(--secondary-background, #12181F);border-radius: 32px; border: 1px solid var(--border, #303A46)!important;  padding: 40px ">
                            <v-card-text>
                              <div>
                               <img src="/svg/delete-icon.svg"/>
                              </div>
                            <span style="font-size: 20px;color: #D8D8D8; font-family: Manrope; font-weight: 600;line-height: normal;">Are you sure you want to delete your account permanently?</span>
                            <div style="margin-top: 20px">
                                <span style="color:#969696; font-family: Manrope; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">Press “Delete account” to remove it permanently, you’ll receive a confirmation link via email and a moderator will process your request or “Cancel” if you want to keep your benefits. </span>
                            </div>
                            </v-card-text>

                            <v-card-actions style="justify-content: space-around;">
                              <!-- <v-spacer></v-spacer> -->
                                <v-btn style="border-radius: 16px; border: 1px solid var(--border, #303A46); background: var(--Black-20, #E2E8F0); display: flex;width: 230px; height: 63px; color: var(--Gray-Dark, #323232);text-align: center; font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal; text-transform: unset; letter-spacing: 0px">
                                      Delete account
                                </v-btn>
                              <v-btn class="primary-btn" style="display: flex; width: 230px; height: 64px"
                                text="Cancel"
                                @click="isActive.value = false"
                              ></v-btn>
                            </v-card-actions>
                          </v-card>
                    </template>
            </v-dialog>
        
        </div>
  </div>
</template>

<script setup>

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
    color: var(--Gray-Medium-light, #969696);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
}

.v-table {
    background: inherit !important;
    width: 940px;
  
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
}
.delete-btn{
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
line-height: 24px !important; /* 200% */
}

.browser-txt{
color: var(--Colors-Base-white, #FFF);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 22.4px */
}
.primary-btn1{
display: flex !important;
min-height: 64px;
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
</style>