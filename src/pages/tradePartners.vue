<template>
  <div>
       <v-table style="display: grid! important; margin-bottom: 32px">
        <thead>
          <tr style="border-radius: 24px !important; height:  74px; background: var(--secondary-background, #12181F); display: flex;">
          

            <th style="display: flex; align-items: center; align-self: center;">
              <div class="d-flex">
                  <span>S.N.</span>
                  <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
              </div>
            </th>

            <th style="display: flex; align-items: center; align-self: center; position: relative;  margin-left: 8px;">
              <div class="d-flex">
                <span>User name</span>
                <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
              </div>
            </th>

             <th style="display: flex; align-items: center; align-self: center; position: relative;">
              <span >Outcome</span>
              <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer; margin-left: 12px"></v-icon>
            </th>

             <th style="display: flex; align-items: center; align-self: center; position: relative;">
              <span>Date</span>
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
        <td><span class="browser-txt" style="margin-left: 4px ">{{item.Username}}</span></td>
        <td><span class="browser-txt">{{item.Outcome}}</span></td>
        <td><span class="browser-txt">{{item.Date}}</span></td>
        <td><span class="browser-txt">{{item.trust}}</span></td>
        <td> <div><img src="/svg/close-circle.svg" style="margin-right: 3px !important"/> {{item.Delete}}</div> </td>
        <td> <img src="/svg/close-circle.svg" style="margin-right: 3px !important"/> {{item.Delete}} </td>
        
      
              </tr>
            </tbody>
        </v-table>

  </div>
</template>

<script setup>
const  Tradepartners = [
          {
            serialNumber: '1',
            Username: "Username",
            Outcome: "X Expired",
            Date: "Feb, 5 2024, 11:56 AM",
            trust:'trust',
            Status: "Active",
            Delete: "Delete",
          },
          {
            serialNumber: '2',
            Username: "Username",
            Outcome: "X Expired",
            Date: "Feb, 5 2024, 11:56 AM",
            trust:'trust',
            Status: "Active",
            Delete: "Delete",
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
</style>