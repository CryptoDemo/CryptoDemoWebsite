<template>
  <div>
     <Header hide="true" icon1="/svg/profile-icon.svg" icon3="/svg/profile-icon.svg"  icon2="/svg/Notification.svg"/>
     <v-container>
          <div style="margin-top: -10px; display: flex; gap: 16px; width: 100% !important;">
             
            <div style="width: -webkit-fill-available">
              <div>
                 
                 <div style="border-radius: 24px; border: 1px solid  #303A46; width: 100%; padding: 30px; margin-top: 28px;">
                  <v-table style="display: grid! important; background: inherit; width: 100%;">
                    <thead>
                      <tr style="display: flex; margin-bottom: 8px;">
                      

                        <th class="me-2" style="display: flex; align-items: center; align-self: center;">
                          <div class="d-flex">
                              <span class="table-header-text me-9" style="margin-left: 5px"></span>
                          </div>
                        </th>

                        <th style="display: flex; align-items: center; align-self: center; margin-right: 20px">
                          <div class="d-flex" >
                            <span class="table-header-text">Coin</span>
                          </div>
                        </th>

                        <th style="display: flex; align-items: center; align-self: center; position: relative; margin-right: 24px">
                          <span class="table-header-text me-1" style="margin-left: ">Price</span>
                        </th>

                        <th style="display: flex; align-items: center; align-self: center; position: relative; margin-right: 21px">
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

              </div>
              
              
            </div>
          </div>
      </v-container>   
     
  </div>
</template>
<script setup>

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
