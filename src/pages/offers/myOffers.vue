<template>
  <div>
          <v-row no-gutters style="overflow:;">
            <v-col cols="3">
              <div class="pa-2 ma-2">
                          <!-- //side nav here../ -->
              </div>
            </v-col>

            <v-col cols="9">
              <div class="pa-2 ma-2" style="width: 930px">
                  
                  <div class="acct-settings" style="display: flex; justify-content: space-between; margin-bottom: 29px">    
                      <span class="partners-text"> Complete verification to access Demo products and services.</span>
                      <div> <v-btn class="primary-btn" style="height: 37px; width: 120px; border-radius: 8px; background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);text-transform: capitalize; letter-spacing: 0px">Verify</v-btn> </div>
                  </div>

                  <div class="d-flex" style="justify-content: space-between">

                        <div>
                            <span class="me-15" :class="PurchaseCrypto ? 'sell-offers': 'buy-offers'"  @click.prevent="PurchaseCrypto=true">Sell Offers <span style="color: #D8D8D8; margin-left: 17px ;font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 700; line-height: normal;">0</span></span>
                            <span :class="PurchaseCrypto ? 'buy-offers': 'sell-offers'"  @click.prevent="PurchaseCrypto=false">Buy Offers <span style="color: #D8D8D8; margin-left: 17px; font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 700; line-height: normal;">0</span></span>
                        </div>

                        <div class="d-flex">
                            <v-switch  inset color="#2873FF" class="me-3" style="margin-top: -16px"></v-switch>
                            <span class="noti-text">Turn off all offers</span>
                        </div>
                  </div>
                        <div style="background: #303A46; height: 1px; border 1px solid;"></div>

                         <v-table style="display: grid! important; margin-bottom: 32px; margin-top: 13px; border-radius: 0px 0px 24px 24px; border-right: 1px solid var(--border, #303A46); border-bottom: 1px solid var(--border, #303A46); border-left: 1px solid var(--border, #303A46);">
                            <thead>
                                <tr style=" display: flex;">
                                

                                
                                <th style="display: flex; align-items: center; align-self: center; position: relative;  margin-left: 26px;">
                                    <div class="d-flex">
                                    <span class="table-header-text1">Rate</span>
                                    
                                    </div>
                                </th>

                                <th style="display: flex; align-items: center; align-self: center; position: relative;">
                                    <span class="table-header-text1" style="margin-left: 65px ">Min-Max amount</span>
                                </th>

                                <th style="display: flex; align-items: center; align-self: center; position: relative;">
                                    <span class="table-header-text1" style="margin-left: 5px ">Payment method</span>
                                </th>

                                <th style="display: flex; align-items: center; align-self: center; position: relative;">
                                    <span class="table-header-text1" style="margin-left: 5px">Offer views</span> 
                                </th>

                                <th style="display: flex; align-items: center; align-self: center; position: relative;right: 72px">
                                    <span></span>
                                </th>
                                <th class=""> 
                                    
                                </th>
                                </tr>
                            </thead>
                    
                            <tbody>
                        <tr v-for="item in Tradepartners" :key="item.name" style="display: flex; justify-content: space-between; align-items: baseline; ">
                    
                        <td><span class="smaller-txt" style="margin-left: 7px ">{{item.Rate}}</span></td>
                        <td><span class="smaller-txt">{{item.MinMaxamount}}</span></td>
                        <td><div class="d-flex"><span class="smaller-txt me-3">{{item.Paymentmethod}}</span> <img src="/flags/cr.svg" width="30px" style="position: relative; top: -5px; border-radius: 10px "/></div></td>
                        <td><span class="smaller-txt" style="position: relative; right:  ">{{item.offerviews}}</span></td>
                        <td><div class="d-flex"> <v-btn  class="edit-btn  position-relative" style="width: 96px; height: 40px; top: 6px"><img src="/svg/magicpen.svg" style="margin-right: 3px !important"/>
                                    Edit
                                    </v-btn></div></td>
                        <td> <div class="d-flex" style="color:#2873FF; font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 600; line-height: 160%;">{{item.Status}}</div> </td>
                        <td> <div class="d-flex" style="position: relative; top: 22px "> <v-switch  inset color="#2873FF" ></v-switch></div> </td>
                        
                                </tr>
                            </tbody>
                         </v-table>
                         <v-table style="display: grid! important; margin-bottom: 32px; margin-top: 13px; border-radius: 0px 0px 24px 24px; border-right: 1px solid var(--border, #303A46); border-bottom: 1px solid var(--border, #303A46); border-left: 1px solid var(--border, #303A46);">
                            <thead>
                                <tr style=" display: flex;">
                                

                                
                                <th style="display: flex; align-items: center; align-self: center; position: relative;  margin-left: 26px;">
                                    <div class="d-flex">
                                    <span class="table-header-text1">Rate</span>
                                    
                                    </div>
                                </th>

                                <th style="display: flex; align-items: center; align-self: center; position: relative;">
                                    <span class="table-header-text1" style="margin-left: 65px ">Min-Max amount</span>
                                </th>

                                <th style="display: flex; align-items: center; align-self: center; position: relative;">
                                    <span class="table-header-text1" style="margin-left: 5px ">Payment method</span>
                                </th>

                                <th style="display: flex; align-items: center; align-self: center; position: relative;">
                                    <span class="table-header-text1" style="margin-left: 5px">Offer views</span> 
                                </th>

                                <th style="display: flex; align-items: center; align-self: center; position: relative;right: 72px">
                                    <span></span>
                                </th>
                                <th class=""> 
                                    
                                </th>
                                </tr>
                            </thead>
                    
                            <tbody>
                        <tr v-for="item in Tradepartners" :key="item.name" style="display: flex; justify-content: space-between; align-items: baseline;">
                    
                        <td><span class="smaller-txt" style="margin-left: 7px ">{{item.Rate}}</span></td>
                        <td><span class="smaller-txt">{{item.MinMaxamount}}</span></td>
                        <td><div class="d-flex"><span class="smaller-txt me-3">{{item.Paymentmethod}}</span> <img src="/flags/ar.svg" width="30px" style="position: relative; top: -5px; border-radius: 10px "/></div></td>
                        <td><span class="smaller-txt" style="position: relative; right:  ">{{item.offerviews}}</span></td>
                        <td><div class="d-flex"> <v-btn  class="edit-btn  position-relative" style="width: 96px; height: 40px; top: 6px"><img src="/svg/magicpen.svg" style="margin-right: 3px !important"/>
                                    Edit
                                    </v-btn></div></td>
                        <td> <div class="d-flex" style="color:#2873FF; font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 600; line-height: 160%;">{{item.Status}}</div> </td>
                        <td> <div class="d-flex" style="position: relative; top: 22px "> <v-switch  inset color="#2873FF" ></v-switch></div> </td>
                        
                                </tr>
                            </tbody>
                         </v-table>

                <div>
                    <v-btn style="display: flex; margin-left: auto; text-transform: unset; letter-spacing: 0px padding: 8px 40px; justify-content: center; align-items: center; gap: 10px; border-radius: 8px;background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);">Create Offer</v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const PurchaseCrypto = ref(true);

const  Tradepartners = [
    {
  
    Rate: "62,797,850.5 NGN",
    MinMaxamount: "14,950 - 15,950 NGN",
    Paymentmethod: "Bank Transfer",
    offerviews: '0',
    trust:'Trust',
    Status: "View",
    View: "View",
    },
        
];
</script>

<style >
.v-table {
    --v-table-header-height: 25px !important;
}
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

.partners-text{
color: var(--Gray-Medium-dark, #646464);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.sell-offers{
color: var(--Primary-100, #2873FF);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor: pointer;
}

.buy-offers{
color: var(--Gray-Medium-light, #969696);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor: pointer;
}

.noti-text{
color: var(--Gray-Medium-light, #969696);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
}

.v-switch--inset .v-switch__track {
    border-radius: 9999px;
    font-size: 0.75rem;
    height: 32px;
    min-width: 52px;
    background: #12181F;
}

.edit-btn{
border-radius: 12px !important;
background: rgba(85, 159, 246, 0.12) !important;
display: flex !important;
width: 96px;
padding: 8px 12px;
justify-content: space-between !important;
align-items: center !important;
flex-shrink: 0;
color: var(--Basic-White, var(--Colors-Base-white, #FFF));
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px !important;
font-style: normal;
font-weight: 400;
line-height: 140% !important; /* 19.6px */
text-transform: unset !important;
}

.smaller-txt{
color: var(--Gray-Light, #D8D8D8);
text-align: right;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 18px */
}

.table-header-text1{
color: var(--Gray-Medium-light, #969696) !important;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 16px !important;
font-style: normal;
font-weight: 600 !important;
line-height: 160% !important; /* 25.6px */
}

::-webkit-scrollbar{
  display: none;
}
</style>