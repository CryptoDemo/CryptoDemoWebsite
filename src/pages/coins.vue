<template>
    <div>
        <v-table style="display: grid! important; margin-bottom: 32px; margin-top: 13px">
                      <thead>
                        <tr style="border-radius: 24px !important; height:  74px; background: var(--secondary-background, #12181F); display: flex;">
                        

                        <th style="display: flex; align-items: center; align-self: center; position: relative;  margin-left: px;">
                            <div class="d-flex ml-3 me-8">
                              <span class="table-header-text">#</span>
                            </div>
                        </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative;  margin-left: px;">
                            <div class="d-flex">
                              <span class="table-header-text">Coin</span>
                              <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
                            </div>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative;">
                            <span class="table-header-text me-1" style="margin-left: 32px ">Price</span>
                            <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer; margin-left: 12px"></v-icon>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative;">
                            <span class="table-header-text" style="margin-left: 30px ">24%</span>
                            <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative;">
                            <span class="table-header-text" style="margin-left: 30px ">7d%</span>
                            <v-icon size="large" color="#969696" icon="mdi-unfold-more-horizontal" style="opacity: 0.4; cursor: pointer"></v-icon>
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
                    <td><span class="browser-txt ml-3" style="position: relative; top: 6px">{{item.serialNumber}}</span></td>
                      <td>
                        <span class="browser-txt"> <img src="/img/btc.png" class="me-5" alt="avatar" style="width: 32px; position: relative; top: 15px "/> </span>
                     </td>
                      <td ><span class="browser-txt" style="margin-left: -26px; position: relative; top: 6px">{{item.price}}</span></td>
                      <td style="display: flex; align-self: self-end;"><span class="browser-txt">
                        <svg xmlns="http://www.w3.org/2000/svg" class="me-2 mt-2" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M6 4.58489L9.53553 1.04936C9.92606 0.658833 10.5592 0.658832 10.9497 1.04936C11.3403 1.43988 11.3403 2.07305 10.9497 2.46357L7.41421 5.9991L10.9497 9.53464C11.3403 9.92516 11.3403 10.5583 10.9497 10.9489C10.5592 11.3394 9.92606 11.3394 9.53553 10.9489L6 7.41332L2.46447 10.9489C2.07394 11.3394 1.44078 11.3394 1.05025 10.9489C0.659728 10.5583 0.659729 9.92516 1.05025 9.53464L4.58579 5.9991L1.05025 2.46357C0.659728 2.07305 0.659728 1.43988 1.05025 1.04936C1.44078 0.658832 2.07394 0.658832 2.46447 1.04936L6 4.58489Z" fill="#969696"/>
                        </svg>
                        {{item.Outcome}}</span>
                      </td>
                      <td><span class="browser-txt" style="position: relative; top: 6px">{{item.Date}}</span></td>
                    
                      <td><v-btn class="d-flex" style="position: relative; top: 9px; background: inherit; letter-spacing: 0px; text-transform: capitalize; "><img src="/svg/shield.svg" style="margin-right: 3px !important"/> <span class="browser-txt" >{{item.trust}}</span> </v-btn></td>
                      <td> <v-btn class="d-flex" style="position: relative; background: inherit; letter-spacing: 0px; text-transform: capitalize;  top: 9px;"><img src="/svg/forbidden.svg" style="margin-right: 3px !important"/> {{item.Status}}</v-btn> </td>
                      <td> <v-btn class="d-flex" style="color:#2873FF; font-family: Manrope; position: relative; top: 7px; background: inherit; letter-spacing: 0px; text-transform: capitalize; font-size: 14px; font-style: normal; font-weight: 600; line-height: 160%;"> {{item.View}}</v-btn> </td>
                    
                            </tr>
                          </tbody>

                          <div>
                            <td>
                              
                            </td>
                          </div>
                    </v-table>
    <v-rating
      v-model="rating" clearable length="1">       
    </v-rating>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const rating = ref(1);
const  Tradepartners = [
          {
            serialNumber: '1',
            coin: "CryptoMP1",
            price: "Expired",
            hour: "Feb, 5 2024, 11:56 AM",
            days:'Trust',
            Status: "Block",
            View: "View",
          },
        ]
</script>