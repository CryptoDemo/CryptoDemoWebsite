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

            <tr>
            <div v-for="(v,k) in notifSettings" :key="k" style="display: flex; align-items: center; justify-content: space-between;">
              <td class="notification-text capitalize" :class="isDark ? 'text-dark':'text-light'">{{ k?.split("_")?.join(" ")?.replace("notify me on ","") }}</td>
              <td><v-switch v-model="notifSettings[k]" @input="toggleNotification(k,v)" inset color="#2873FF" style="display: flex; justify-content: center; padding-right: 50px;"></v-switch></td>
            </div>
            
            
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span :class="isDark ? 'text-dark':'text-light'" style="margin-top: -5px;">Camouflage</span>
              
              <v-switch v-model="dialog" inset color="#2873FF" style="padding-right: 50px;"></v-switch>
              
              <v-dialog v-model="dialog" width="auto">
                
                <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="padding: 20px; border-radius: 15px; width: 100%;">
                  <span class="mb-4">Protect Your Privacy with Balance Camouflage</span>
                  <input type="number" placeholder="Enter camouflage Balance" v-model="camouflagBalance" style="outline: none; border: 1px solid rgba(142, 155, 174, 0.5); padding: 20px; height: 55px; border-radius: 15px;"/>
                
                  <v-menu>
                    <template v-slot:activator="{ props }">
                      <v-btn class="input-styling1 mt-4" :class="isDark ? 'txn-cards-dark':'txn-cards-light'" v-bind="props"  style="box-shadow: none; height: 55px;">
                        <div  class="py-3" style="display: flex; cursor: pointer; position: absolute; left: 37px; align-items: center;">
                          <span :class="isDark ? 'text-dark':'text-light'" class="me-2" style="font-weight: 700; font-size: 16px;">{{ pinia.state.camoCurrencyCode }}</span>
                          <span :class="isDark ? 'text-dark':'text-light'" class="mt-" style="font-weight: 700;">{{ pinia.state.camouflageCurrency }}</span> 
                        </div>
                      </v-btn>
                    </template>

                    <v-list class="" :class="isDark ? 'country-dropdown1':'country-dropdown1-light'" >
                      <v-list-item style="width: 100%;">
                        <div v-for="(currency, index) in pinia.state.allcountries" class="d-flex py-1" :key="index">
                          <v-list-item @click="pinia.state.camouflageCurrency=currency.currency_name; camoCurrencyCode = currency.currency_code">
                              <div class="d-flex ml-4">
                                <span :class="isDark ? 'country-name' : 'country-name-light'">{{ currency.currency_name }}</span>
                              </div>
                          </v-list-item>
                        </div>
                      </v-list-item>
                    </v-list>
                  </v-menu> 
                  <span style="font-size: 14px;" :class="isDark ? 'text-dark':'text-light'">Enter preferred currency for camouflage</span>

                  <template v-slot:actions>
                    <v-btn class="ms-auto" text="Ok" @click="setCamo()"></v-btn>
                  </template>
                </v-card>
              </v-dialog>
            </div>
          </tr>

         
          </tbody>
        </v-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import { updateUser } from "@/composables/requests/users";
const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();
const notificationSettings = computed(()=> pinia.state.user?.settings?.notifications);
const notifSettings = ref({});
const camoCurrencyCode = ref();
const dialog = ref(false);
const camouflagBalance = ref();

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

const CountryID = ref()
CountryID.value = pinia.state.allcountries.find(c => c.currency_name === pinia.state.camouflageCurrency);
console.log('Selected country ID:', CountryID.value.id);


const setCamo = async () => {

  const UpdateUserDetails = {
    ...pinia.state.user,

    country_id: CountryID.value.id,
    max_spend_balance: camouflagBalance.value,
  }
  delete UpdateUserDetails.token;

  try {
  const data = await updateUser(UpdateUserDetails);
  if (data.success) {

    pinia.setUser({
        ...pinia.state.user,
        camouflage: {
          ...pinia.state.user.camouflage,
          country_id: CountryID.value.id,
          max_spend_balance: camouflagBalance.value,
        }
      });
    dialog.value = false
    push.success('Update Succesful');
    // loading.value = false 
  } else{
    push.error(data.message)
  }
}catch(e){
  // loading.value = false 
  console.log(e)
  push.error(`${e}`)
}
};



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

.txn-cards-dark {
  background: #162138;
  padding: 10px;
  border-radius: 15px;
}
.txn-cards-light {
  background: #edf3ff;
  padding: 10px;
  border-radius: 15px;
}

@media screen and (max-width: 600px) {
  .notification-table{
    padding: 0px !important;
  }
}
</style>