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
                        <tr style="display: flex; margin-bottom: 30px;">
                        

                          <th class="me-2" style="display: flex; align-items: center; align-self: center;">
                            <div class="d-flex">
                                <span class="table-header-text me-14" style="margin-left: 5px"></span>
                            </div>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; margin-right: 42px">
                            <div class="d-flex" >
                              <span class="table-header-text">Coin</span>
                            </div>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative; margin-right: 50px">
                            <span class="table-header-text me-1" style="margin-left: ">Price</span>
                          </th>

                          <th style="display: flex; align-items: center; align-self: center; position: relative; margin-right: 50px">
                            <span class="table-header-text" style="margin-left: ">Balance</span>
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
                    <tr v-for="item in Tradepartners" :key="item.name" style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                
                      <td style="display: flex; align-items: end;"><span class="sml-text">{{ item.serialNumber }} </span></td>
                      <td style="display: contents;">
                          <div class="d-flex" style="align-items: center;">
                              <img :src="item.image" class="me-3"/>
                                <div style="flex-direction:row">
                                  <span style="color:#FFF; font-family: poppins; font-weight: 600; font-size: 16px; line-height:normal">{{item.Coin}}</span>
                                  <span class="sml-text d-flex">{{ item.Subtitle }}</span>
                                </div>
                            </div>
                      </td>

                      <td style="display: flex;align-items: end;"><span class="browser-txt" > {{item.Price}}</span></td>

                      <td style="display: flex;align-items: end;"><span class="browser-txt">{{item.Balance}}</span></td>

                      <td style="display: flex;align-items: end;"><span class="browser-txt" >{{item.USDEqv}}</span></td>

                      <div class="d-flex" > 
                        <td style="display: flex; align-items: center;"> <div> <Send-btc/> </div> </td>
                        <td class="me-4" style="display: flex; align-items: center;"> <div> <Get-btn/> </div> </td>
                        <td style="display: flex; align-items: center;"><div><v-btn class="swap">
                          <img src="/svg/arrow-swap.svg"/>
                          Swap</v-btn></div> 
                        </td>
                    </div>
                            </tr>
                          </tbody>
                    </v-table>
                  </div>

                  <div style="margin-top: 63px; margin-bottom: 94px;">
                      <span style="color: #D8D8D8; font-family: Poppins; font-size: 24px; font-style: normal; font-weight: 400; line-height: normal;">Latest transactions</span>
                  </div>

                  <div style="display: flex; justify-content: space-between; width: 930px;">
                    <span>1</span>
                      <div style="display: flex;">
                        <img src="/svg/btc.svg" class="me-3"/>
                        <div style="display: flex; flex-direction: column;">
                          <span class="browser-txt" style="font-weight: 600;">Bitcoin</span>
                          <span class="sml-text">BTC</span>
                        </div>
                      </div>

                      <div>
                        <span class="browser-txt">Jan 17, 4:33 PM</span>
                      </div>

                      <div>
                        <span class="browser-txt" style="color: #35B233; font-weight: 600; font-family: Poppins;">Completed</span>
                      </div>

                      <div>
                        <span class="browser-txt" style="font-weight: 600;">+2.820436 USDT</span>
                      </div>

                      <div>
                        <span class="browser-txt" style="font-weight: 600;">+2.82 USD</span>
                      </div>
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
            Balance: "2.8236",
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
            Balance: "9.0549",
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
            Balance: "9.0549",
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
            Balance: "9.0549",
            USDEqv:'1.009',
            Status: "Block",
            Get: "View",
            View: "View",
          },
        
       
        
        ];
</script>
<style scoped>
.swap{
border-radius: 16px;
border: 1px solid var(--border, #303A46);
background: var(--dark-bg, #10192D);
box-shadow: 0px 10px 25px 0px rgba(27, 37, 55, 0.05);
display: flex;
width: 86.333px;
height: 48px !important;
padding: 12px 16px;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;
letter-spacing: 0px;
text-transform: unset;
align-content: center;
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
  