<template>
  <div>
    <Header/>
          <v-row no-gutters style="margin-top:90px;">
            <v-col cols="3">
              <div class="pa-2 ma-2">
                          <!-- //side nav here../ -->
              </div>
            </v-col>

            <v-col cols="9">
              <div class="pa-2 ma-2">
                  
                  <div class="acct-settings" style="display: flex; justify-content: space-between; margin-bottom: 29px">    
                      <span class="partners-text"> Complete verification to access Demo products and services.</span>
                      <div> <v-btn class="primary-btn" style="height: 37px!important; width: 120px; border-radius: 8px; background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);text-transform: capitalize; letter-spacing: 0px">Verify</v-btn> </div>
                  </div>
                  <span style="color: white; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 700; line-height: normal;">Trade Partners</span>
                <div>
                    <v-table style="display: grid! important; margin-bottom: 32px; margin-top: 13px">
                      <thead>
                        <tr style="border-radius: 24px !important; height:  74px; background: var(--secondary-background, #12181F); display: flex;">
                        

                          <th class="me-2" style="display: flex; align-items: center; align-self: center;">
                            <div class="d-flex">
                                <span class="table-header-text me-14" style="margin-left: 5px"></span>
                            </div>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative;  margin-left: 25px;">
                            <div class="d-flex">
                              <span class="table-header-text">User name</span>
                              <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
                            </div>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative;">
                            <span class="table-header-text me-1" style="margin-left: 32px ">Outcome</span>
                            <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer; margin-left: 12px"></v-icon>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative;">
                            <span class="table-header-text" style="margin-left: 30px ">Date</span>
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
                    <tr v-for="item in Tradepartners" :key="item.name" style="display: flex; border-bottom: 1px solid #242D39 !important; justify-content: space-between; align-items: baseline;">
                
                      <td><span class="browser-txt"> <v-badge color="success" dot class="success-dot"><img src="/svg/Image (1).svg" class="me-5" alt="avatar" style="width: 40px; position: relative; top: 15px "/> </v-badge> </span></td>
                      <td ><span class="browser-txt" style="margin-left: -26px; font-family: Manrope; color: #2873FF; font-size: 14px; font-style: normal; font-weight: 500; line-height: 160%; position: relative; top: 6px">{{item.Username}}</span></td>
                      <td style="display: flex; align-self: self-end;"><span class="browser-txt">
                        <svg xmlns="http://www.w3.org/2000/svg" class="me-2 mt-2" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M6 4.58489L9.53553 1.04936C9.92606 0.658833 10.5592 0.658832 10.9497 1.04936C11.3403 1.43988 11.3403 2.07305 10.9497 2.46357L7.41421 5.9991L10.9497 9.53464C11.3403 9.92516 11.3403 10.5583 10.9497 10.9489C10.5592 11.3394 9.92606 11.3394 9.53553 10.9489L6 7.41332L2.46447 10.9489C2.07394 11.3394 1.44078 11.3394 1.05025 10.9489C0.659728 10.5583 0.659729 9.92516 1.05025 9.53464L4.58579 5.9991L1.05025 2.46357C0.659728 2.07305 0.659728 1.43988 1.05025 1.04936C1.44078 0.658832 2.07394 0.658832 2.46447 1.04936L6 4.58489Z" fill="#969696"/>
                        </svg>
                        {{item.Outcome}}</span>
                      </td>
                      <td><span class="browser-txt" style="position: relative; top: 6px">{{item.Date}}</span></td>
                      <div>
                      <td><v-btn class="d-flex" style="position: relative; top: 9px; background: inherit; letter-spacing: 0px; text-transform: capitalize; "><img src="/svg/shield.svg" style="margin-right: 3px !important"/> <span class="browser-txt" >{{item.trust}}</span> </v-btn></td>
                      <td> <v-btn class="d-flex" style="position: relative; background: inherit; letter-spacing: 0px; text-transform: capitalize;  top: 9px;"><img src="/svg/forbidden.svg" style="margin-right: 3px !important"/> {{item.Status}}</v-btn> </td>
                      <td> <v-btn class="d-flex" style="color:#2873FF; font-family: Manrope; position: relative; top: 7px; background: inherit; letter-spacing: 0px; text-transform: capitalize; font-size: 14px; font-style: normal; font-weight: 600; line-height: 160%;"> {{item.View}}</v-btn> </td>
                    </div>
                            </tr>
                          </tbody>
                    </v-table>

                </div>
              </div>
            </v-col>
          </v-row>
    <Footer/>
  </div>
</template>

<script setup>
const  Tradepartners = [
          {
            serialNumber: '',
            Username: "CryptoMP1",
            Outcome: "Expired",
            Date: "Feb, 5 2024, 11:56 AM",
            trust:'Trust',
            Status: "Block",
            View: "View",
          },
          {
            serialNumber: '',
            Username: "CryptoMP1",
            Outcome: "Expired",
            Date: "Feb, 5 2024, 11:56 AM",
            trust:'Trust',
            Status: "Block",
            View: "View",
          },
       
        
        ];
</script>

<style>


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

.v-badge--dot .v-badge__badge {
position: absolute;
bottom: -14px !important;
left: 32px !important;
}
</style>