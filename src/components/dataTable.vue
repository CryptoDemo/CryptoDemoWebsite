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
             
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in infos"
              :key="item.name"
            >
              <td>{{ item.name }}</td>
                <td><v-switch  inset color="#2873FF"></v-switch></td>
                <td><v-switch inset color="#2873FF"></v-switch></td>

            </tr>
          </tbody>
        </v-table>
        <Timezone class="ml-11"/>
     

  </div>
</template>

<script setup>

const  infos = [
          {
            name: 'Transactions',
            Web: "",
            App: "",
          
          },
          {
            name: 'Confirm deposit',
            Web: "",
            App: "",
          
          },
          {
            name: 'Deposit pending',
            Web: "",
            App: "",
          
          },
          {
            name: 'Crypto purchased',
            Web: "",
            App: "",
          
          },
          {
            name: 'Crypto sold',
            Web: "",
            App: "",
          
          },
          {
            name: 'Incoming trade',
            Web: "",
            App: "",
          
          },
          {
            name: 'Someone viewed my profile',
            Web: "",
            App: "",
          
          },
          {
            name: 'Trade cancelled/expired',
            Web: "",
            App: "",
          
          },
          {
            name: 'New chat message',
            Web: "",
            App: "",
          
          },
          {
            name: 'Partner paid for trade',
            Web: "",
            App: "",
          
          },
          {
            name: 'Moderator messgae',
            Web: "",
            App: "",
          
          },
          {
            name: 'Notify me on new login',
            Web: "",
            App: "",
          
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