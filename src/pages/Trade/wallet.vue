<template>
    <div>
       <Header icon="/svg/white-wallet.svg" Menuicon="/svg/Main Menu Icons.svg" icon1="/svg/profile-icon.svg"  icon2="/svg/Notification.svg"/>
            <v-row no-gutters style="margin-top: 60px">
               <v-col cols="3">
                  <div class="pa-2 ma-2">
                            <!-- //side nav here../ -->
                   </div>
              </v-col>
  
              <v-col>
                <div class="pa-2 ma-2">
                   <span style="color: #FFF;font-family: Poppins; font-size: 32px; font-style: normal; font-weight: 700; line-height: normal;">Wallet</span>
                    
                   <div style="border-radius: 24px; border: 1px solid  #303A46; padding: 30px; width: 930px">
                    <v-table style="display: grid! important; background: inherit;">
                      <thead>
                        <tr style="display: flex; justify-content: space-between; margin-bottom: 30px;">
                        

                          <th class="me-2" style="display: flex; align-items: center; align-self: center;">
                            <div class="d-flex">
                                <span class="table-header-text me-14" style="margin-left: 5px"></span>
                            </div>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative; right: 13px;">
                            <div class="d-flex">
                              <span class="table-header-text">Coin</span>
                            </div>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative;">
                            <span class="table-header-text me-1" style="margin-left: ">Price</span>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative;">
                            <span class="table-header-text" style="margin-left: ">Binance</span>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative; left: -16px ">
                            <span class="table-header-text" style="margin-left:  ">USD Eqv</span>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative;">
                            <span></span> 
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative;right: 72px">
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
                    <tr v-for="item in Tradepartners" :key="item.name" style="display: flex; justify-content: space-between; margin-bottom: 32px;">
                
                      <td style="display: flex; align-items: center;"><span class="sml-text">{{ item.serialNumber }} </span></td>
                      <td style="display: contents;">
                          <div class="d-flex" style="align-items: center;">
                              <img :src="item.image" class="me-3"/>
                                <div style="flex-direction:row">
                                  <span style="color:#FFF; font-family: poppins; font-weight: 600; font-size: 16px; line-height:normal">{{item.Coin}}</span>
                                  <span class="sml-text d-flex">{{ item.Subtitle }}</span>
                                </div>
                            </div>
                      </td>

                      <td style="display: flex;align-items: center;"><span class="browser-txt" > {{item.Price}}</span></td>

                      <td style="display: flex;align-items: center;"><span class="browser-txt">{{item.Binance}}</span></td>

                      <td style="display: flex;align-items: center;"><span class="browser-txt" >{{item.USDEqv}}</span></td>
                      <td style="display: flex; align-items: center;"> <div> <Send-btc/> </div> </td>
                      <td style="display: flex;align-items: center;"> <div class="d-flex" style="color:#2873FF; font-family: Manrope; font-size: 14px; font-style: normal; cursor: pointer; font-weight: 600; line-height: 160%;"> {{item.View}}</div> </td>
                      <td> <div class="d-flex" style="color:#2873FF; font-family: Manrope; font-size: 14px; font-style: normal; cursor: pointer; font-weight: 600; line-height: 160%;"> {{item.View}}</div> </td>
                    
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
            serialNumber: '1',
            image:'/svg/tether.svg',
            Coin: "Tether",
            Subtitle:'USDT',
            Price: "$38,755",
            Binance: "2.8236",
            USDEqv:'2.83',
            Status: "Block",
            Get: "",
            View: "View",
          },
        
          {
            serialNumber: '2 ',
            image:'/svg/btc.svg',
            Coin: "Bitcoin ",
            Subtitle:'BTC',
            Price: "$1.0964",
            Binance: "9.0549",
            USDEqv:'1.009',
            Status: "Block",
            Get: "",
            View: "View",
          },
        
        
        
          {
            serialNumber: '3',
            image:'/svg/btc.svg',
            Coin: "Bitcoin ",
            Subtitle:'BTC',
            Price: "$1.0964",
            Binance: "9.0549",
            USDEqv:'1.009',
            Status: "Block",
            Get: "View",
            View: "View",
          },
        
          {
            serialNumber: '4',
            image:'/svg/btc.svg',
            Coin: "Bitcoin ",
            Subtitle:'BTC',
            Price: "$1.0964",
            Binance: "9.0549",
            USDEqv:'1.009',
            Status: "Block",
            Get: "View",
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

.v-table--density-default > .v-table__wrapper > table > thead > tr > th, .v-table--density-default > .v-table__wrapper > table > tfoot > tr > th {
    border: none !important;
}

.browser-txt{
  color: var(--White, var(--Colors-Base-white, #FFF));
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.sml-text{
color: var(--Second-Text, #A4A8AB);
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.table-header-text{
color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
</style>
  