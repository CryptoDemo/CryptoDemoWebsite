<template>
  <div style=" border: 1px solid rgba(142,155,174,.5);  border-radius: 24px !important;">
    <h3 class="notify-me text-center my-7">Notification Settings</h3>
       <v-table class="notification-table" style=" padding-left: 50px;  margin-top: -25px; padding-bottom: 20px;">
          <thead>
            <tr>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(v,k) in notificationSettings" :key="k">
              <td class="notification-text capitalize" :class="isDark ? 'text-dark':'text-light'">{{ k?.split("_")?.join(" ")?.replace("notify me on ","") }}</td>
              <td><v-switch v-model="notificationSettings[k]" @input="toggleNotification(k,v)" inset color="#2873FF" style="display: flex; justify-content: center;"></v-switch></td>
            </tr>
          </tbody>
        </v-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();


const notificationSettings = ref({...pinia.state.user?.settings.notifications})

const toggleNotification = async (key, value) => {
  pinia.updateNotificationSettings({key,value});

    // const userToken = `${pinia.state.user.token}`;
    // const info = { ...pinia.state.user};
    // delete info.token;
    
    // console.log(info)

    // try {

    //     const data = await fetch(`${baseURL}user`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'x-access-token': `${pinia.state.user?.token}`
    //         },
    //         body: JSON.stringify(info)

    //     }).then(res => res.json());

    //     if (data.success) {
    //         const user = { ...info, token: userToken };

    //         console.log(user)
    //         pinia.setUser(user);

    //         // Update the notification status in the local state
    //         // const  apiFetchedNofyVal = data.settings.notifications
    //         // const index = apiFetchedNofyVal.findIndex(item => item === value);

    //         // console.log(index)
    //         // // if (index !== -1) {
    //         //     notification_settings[index].status = status;
    //         // // }


    //     } else {
    //         // Handle error response
    //         console.error('Failed to update notification settings:', data.message);
          
    //     }
    // } catch (error) {
    //     console.error('Error updating notification settings:', error);
      
    // }
}
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
.v-switch--inset .v-switch__track {
border-radius: 9999px;
font-size: 0.75rem;
height: 32px;
min-width: 52px;
background: #10192D;
opacity: 1;
}
.notification-text{
font-feature-settings: 'clig' off, 'liga' off;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 22.4px */
}
.notify-me{
font-family: Manrope;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 28px; 
color: #5892FF;
}

@media screen and (max-width: 600px) {
  .notification-table{
    padding: 0px !important;
  }
}
</style>