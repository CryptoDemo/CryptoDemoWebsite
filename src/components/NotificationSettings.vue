<template>
  <div class="pb-3" :class="isDark ? 'wallet-border' : 'wallet-border-light'" style="border-radius: 24px !important;">
    <h3 class="notify-me text-center my-7">Notification Settings</h3>
    <v-table class="notification-table" style=" padding-left: 50px;  margin-top: -25px; padding-bottom: 20px;">
          <thead>
            <tr>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(v,k) in notifSettings" :key="k">
              <td class="notification-text capitalize" :class="isDark ? 'text-dark':'text-light'">{{ k?.split("_")?.join(" ")?.replace("notify me on ","") }}</td>
              <td><v-switch v-model="notifSettings[k]" @input="toggleNotification(k,v)" inset color="#2873FF" style="display: flex; justify-content: center;"></v-switch></td>
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
const notificationSettings = computed(()=> pinia.state.user?.settings?.notifications);
const notifSettings = ref({});


// if(notificationSettings.length && new Date()<expiration){
//   // fetch from local storage/pinia
//   faqs.value = notificationSettings;
// }else{
//   // fetch from api
// }

const setupNotificationSettings = ()=>{
  for(const key in notificationSettings.value){
    const value = notificationSettings.value[key];
    if(Object.keys(value).length){
      notifSettings.value[key] = value.is_enabled;
    }else{
      notifSettings.value[key] = value;
    }
  }
}

const toggleNotification = async (key, value) => {
  pinia.updateNotificationSettings({key,value});

  }

  onBeforeMount(()=>{
    setupNotificationSettings();
  });
</script>

<style>
.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td, .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
  border: none !important;
  color: var(--Gray-Medium-light, #969696);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Manrope;
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
font-family: Manrope;
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
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 22.4px */
}
.notify-me{
color: var(--Primary-80, #5892FF);
font-family: Manrope;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 28px; /* 116.667% */
}

.wallet-border{
  border: 1px solid  #1B2537;
}
.wallet-border-light{
border: 1px solid #E2E8F0;
}

@media screen and (max-width: 600px) {
  .notification-table{
    padding: 0px !important;
  }
}
</style>