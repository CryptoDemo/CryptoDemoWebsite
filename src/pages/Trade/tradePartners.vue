<template>
  <div>
          <v-row no-gutters style="overflow:;">
            <v-col cols="3">
              <div class="pa-2 ma-2">
                          <!-- //side nav here../ -->
              </div>
            </v-col>

            <v-col cols="9">
              <div class="pa-2 ma-2">
                  
                  <div class="acct-settings" style="display: flex; justify-content: space-between; margin-bottom: 29px">    
                      <span class="partners-text"> Complete verification to access Demo products and services.</span>
                      <div> <v-btn class="primary-btn" style="height: 37px; width: 120px; border-radius: 8px; background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);text-transform: capitalize; letter-spacing: 0px">Verify</v-btn> </div>
                  </div>
                  <span style="color: white; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 700; line-height: normal;">Trade Partners</span>
                <div>
                    <v-table style="display: grid! important; margin-bottom: 32px; margin-top: 13px">
                      <thead>
                        <tr style="border-radius: 24px !important; height:  74px; background: var(--secondary-background, #12181F); display: flex;">
                        

                          <th style="display: flex; align-items: center; align-self: center;">
                            <div class="d-flex">
                                <span class="table-header-text">S.N.</span>
                                <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
                            </div>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative;  margin-left: 8px;">
                            <div class="d-flex">
                              <span class="table-header-text">User name</span>
                              <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
                            </div>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative;">
                            <span class="table-header-text" style="margin-left: 10px ">Outcome</span>
                            <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer; margin-left: 12px"></v-icon>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative;">
                            <span class="table-header-text" style="margin-left: 5px ">Date</span>
                            <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative;">
                            <span></span> 
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative;right: 72px">
                            <span></span>
                          </th>
                          <th class=""> 
                            
                          </th>
                        </tr>
                      </thead>
                    
                  <tbody>
                    <tr v-for="item in Tradepartners" :key="item.name" style="display: flex; border-bottom: 1px solid #242D39 !important; justify-content: space-between; align-items: baseline; margin-top: 10px">
                
                      <td><span class="browser-txt" style="margin-left: 10px" >{{item.serialNumber}}</span></td>
                      <td><span class="browser-txt" style="margin-left: 7px "><img src="/svg/Image (1).svg" alt="avatar" style="width: 54px; position: relative; top: 15px "/></span></td>
                      <td><span class="browser-txt"  style="color:#2873FF; font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 500; line-height: 160%;">{{item.Outcome}}</span></td>
                      <td><span class="browser-txt">{{item.Date}}</span></td>
                      <td><div class="d-flex" style="position: relative; top: 9px "><img src="/svg/shield.svg" style="margin-right: 3px !important"/> <span class="browser-txt" >{{item.trust}}</span> </div></td>
                      <td> <div class="d-flex" style="position: relative; top: 9px "><img src="/svg/forbidden.svg" style="margin-right: 3px !important"/> {{item.Status}}</div> </td>
                      <td> <div class="d-flex" style="color:#2873FF; font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 600; line-height: 160%;"> {{item.View}}</div> </td>
                    
                            </tr>
                          </tbody>
                      </v-table>

                </div>
              </div>
            </v-col>
          </v-row>
  </div>
</template>

<script setup>
const  Tradepartners = [
          {
            serialNumber: '1',
            Username: "Username",
            Outcome: "X Expired",
            Date: "Feb, 5 2024, 11:56 AM",
            trust:'Trust',
            Status: "Block",
            View: "View",
          },
          {
            serialNumber: '2',
            Username: "Username",
            Outcome: "X Expired",
            Date: "Feb, 5 2024, 11:56 AM",
            trust:'Trust',
            Status: "Block",
            View: "View",
          },
       
        
        ];
</script>

<style scoped>


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
.partners-text{
color: var(--Gray-Medium-dark, #646464);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
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
.table-header-text{
color: var(--White, var(--Colors-Base-white, #FFF));
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 160%; /* 25.6px */
}
</style>