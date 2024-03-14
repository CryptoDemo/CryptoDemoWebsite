<template>
  <div style=" border: 1px solid var(--border, #303A46);  border-radius: 24px !important;">
       <v-table style=" padding-left: 50px !important;  padding-top: 50px; padding-bottom: 20px;">
          <thead>
            <tr style="padding-top: 68px">
              <th class="text-left"></th>
              <th class="text-left">
                <div style="display: grid; margin-left: 8px;">
                    <img src="/svg/global.svg" style="position: relative; left: 5px "/>
                    <span>Web</span>
                </div>
              </th>
              <th class="text-left">
                <div style="display: grid; margin-left: 10px;">
                  <img src="/svg/mobile.svg"/>
                  <span>APP</span>
                </div>
              </th>
              <th class="text-left">
                <div style="display: grid;  margin-left: 6px;">
                  <img src="/svg/sms (1).svg" style="position: relative; left: 8px "/>
                  <span>Email</span>
                </div>
              </th>
              <th class="">
                <div style="display: grid; margin-left: -12px;">
                  <img src="/svg/Telegram.svg" style="position: relative; left: 20px "/>
                <span>Telegram</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in infos"
              :key="item.name"
            >
              <td>{{ item.name }}</td>
              <!-- <div> -->
                <td><v-switch  inset color="#2873FF"></v-switch></td>
                <td><v-switch inset color="#2873FF"></v-switch></td>
                <td><v-switch inset color="#2873FF"></v-switch></td>
                <td><v-switch inset color="#2873FF"></v-switch></td>
              <!-- </div> -->
            </tr>
          </tbody>
      </v-table>
     
     <div class="d-flex ma-5 px-3 position-relative" style="justify-content: space-around">
        <div class="">
            <div class="d-flex pa-2 ma-2">
             
              <input type="text" placeholder="0" class="time-box me-4" style="outline: none"/>
                <img src="/img/Line 354.png" class="me-4"/>
                <span style="align-self:center; color: white; font-size: 16px">How often do you want to be notified?</span>
            </div>
            <Timezone/>
        </div>

        <img src="/img/Line 355.png" style="height: 102px; margin-top: 19px; position: absolute; right: 374px" />

        <div>
          <div class="d-flex mt-2" style="align-items: center; position: relative;">
            <v-checkbox color="primary"></v-checkbox>
            <span style="align-self: flex-start; margin-top: 16px">Play notification sound for trades</span>
          </div>
          <div class="d-flex" style=" align-items: center; position: relative; bottom: 12px ">
            <v-checkbox color="primary"></v-checkbox>
            <span style="align-self: flex-start; margin-top: 16px">Receive important emails from us </span>
          </div>
      </div>
    </div> 
     
 
  

  </div>
</template>

<script setup>

const  infos = [
          {
            name: 'Sellect All',
            Web: "",
            App: "",
            Email: "",
            Telegram: "",
          },
          {
            name: 'Cryptocurrency deposit confirmed',
            Web: "",
            App: "",
            Email: "",
            Telegram: "",
          },
          {
            name: 'Cryptocurrency purchased',
            Web: "",
            App: "",
            Email: "",
            Telegram: "",
          },
          {
            name: 'Cryptocurrency sent',
            Web: "",
            App: "",
            Email: "",
            Telegram: "",
          },
          {
            name: 'Imcoming Trade',
            Web: "",
            App: "",
            Email: "",
            Telegram: "",
          },
          {
            name: 'Incoming trade',
            Web: "",
            App: "",
            Email: "",
            Telegram: "",
          },
          {
            name: 'New chat message',
            Web: "",
            App: "",
            Email: "",
            Telegram: "",
          },
          {
            name: 'Partner paid for trade',
            Web: "",
            App: "",
            Email: "",
            Telegram: "",
          },
          {
            name: 'Someone viewed my profile',
            Web: "",
            App: "",
            Email: "",
            Telegram: "",
          },
          {
            name: 'Tether price change',
            Web: "",
            App: "",
            Email: "",
            Telegram: "",
          },
          {
            name: 'Trade cancelled/expired',
            Web: "",
            App: "",
            Email: "",
            Telegram: "",
          },
        ];
      
// const notification = ref (true)
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


.time-box{
width: 48px !important;
height: 40px !important;
border-radius: 12px;
background: var(--secondary-background, #12181F);
display: flex;
justify-content: center;
text-align: center;
}

.v-switch--inset .v-switch__track {
    border-radius: 9999px;
    font-size: 0.75rem;
    height: 32px;
    min-width: 52px;
    background: #12181F;
}
.mdi-checkbox-blank-outline::before {
    content: "\F0131";
    background: white !important;
    border-radius: 8px;
}
</style>