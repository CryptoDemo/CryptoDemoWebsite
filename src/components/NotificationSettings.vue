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
              <td><v-switch class="v-switch-mobile" v-model="notifSettings[k]" @input="toggleNotification(k,v)" inset color="#2873FF" style="display: flex; justify-content: center; padding-right: 50px;"></v-switch></td>
            </div>

         
            
            <div style="display: flex; align-items: center; justify-content: space-between;">
            
              <span :class="isDark ? 'text-dark':'text-light'" style="margin-top: -5px;">X-hide</span>
              
              <v-switch v-model="isCamoActive"  inset color="#2873FF" class="v-switch-mobile" style="padding-right: 50px;"></v-switch>
              
              <v-dialog v-model="dialog" persistent class="camo-dialog" style="width: 35%;">
                
                <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="padding: 20px; border-radius: 15px; width: 100%;">
                  <span class="mb-3 text-center">Protect Your Privacy with Balance Camouflage</span>
                  <span class="text-subtitle-2 text-center" :class="isDark ? 'text-dark':'text-light'"> Once camouflage mode is activated, you will operate with the set balance and currency for privacy until deactivated.</span>
                  
                  <input type="number" placeholder="Enter camouflage Balance" v-model="camouflagBalance" style="outline: none; border: 1px solid rgba(142, 155, 174, 0.5); padding: 20px; height: 55px; border-radius: 15px; margin-top: 18px;"/>
                          
                  <template v-slot:actions>
                    <div style="display: flex; flex-direction: column; width: 100%;">
                      <v-btn class="ms-auto mt-4" variant="tonal" @click="setCamo()" style="letter-spacing: 0px; text-transform: unset; border-radius: 10px !important; font-weight: 600; color: #2873FF; width: 100%; height: 50px">Activate X-hide</v-btn>
                      <v-btn class="ms-auto mt-4" variant="tonal" @click="deactivateCamouflage()" style="letter-spacing: 0px; text-transform: unset; border-radius: 10px !important; font-weight: 600; color: orangered; width: 100%; height: 50px;">Close X-hide</v-btn>
                    </div>
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
import { updateUser, removeCamouflage } from "@/composables/requests/users";

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();
const notificationSettings = computed(()=> pinia.state.user?.settings?.notifications);
const notifSettings = ref({});
const dialog = ref(false);
const isCamoActive = ref(false); // Tracks if camouflage mode is active
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
  try {
    if (value) {
      // Notification activated
      pinia.updateNotificationSettings({ key, value });
      push.success(`Notification for "${key}" activated.`);
    } else {
      // Notification deactivated
      pinia.updateNotificationSettings({ key, value });
      push.success(`Notification for "${key}" deactivated.`);
    }
  } catch (error) {
    console.error('Error updating notification:', error);
    push.error('Failed to update notification.');
    // Optionally revert the change locally if the backend call fails
    notifSettings.value[key] = !value; // Revert the toggle
  }
};


// const toggleNotification = async (key, value) => {
//   pinia.updateNotificationSettings({key,value});
// }

const CountryID = ref();
CountryID.value = pinia.state.allcountries.find(c => c.currency_name === pinia.state.preferredCurrency)?.id;


const setCamo = async () => {
  if (!camouflagBalance.value) {
    push.error('Please enter a valid camouflage balance.');
    return;
  }

  dialog.value = true
  const UpdateUserDetails = {
    camouflage: {
      country_id: CountryID.value,
      max_spend_balance: camouflagBalance.value,
    }
  };

  try {
    const data = await updateUser(UpdateUserDetails);
    if (data.success) {

      camouflagBalance.value = "";

      // Get the existing user object from the state
      const currentUser = pinia.state.user;

      // Merge the existing user data with the updated camouflage data
      pinia.setUser({
        ...currentUser,
        camouflage: {
          ...currentUser.camouflage,
          country_id: CountryID.value.id,
          max_spend_balance: camouflagBalance.value,
        }
      });
     
      dialog.value = false;
      push.success('Camouflage mode activated successfully.');
    } else {
      push.error(data.message);
    }
  } catch (e) {
    console.log(e);
    push.error(`${e}`);
  }
};


const deactivateCamouflage = async () => {
  try {
    const data = await removeCamouflage();
    if (data.success) {
      // Get the existing user object from the state
      const currentUser = pinia.state.user;

      // Update the state to reflect the removal of camouflage settings
      pinia.setUser({
        ...currentUser,
        camouflage: null // Set the camouflage property to null
      });
      dialog.value = false
      push.success('Camouflage settings removed successfully.');
    } else {
      push.error(data.message);
    }
  } catch (e) {
    console.error('An error occurred:', e);
    push.error('Failed to remove camouflage settings.');
  }
};


// Watch for changes in the switch state
watch(isCamoActive, async (newVal) => {
  if (!newVal) {
    // Automatically deactivate camouflage when switch is turned off
    await deactivateCamouflage();
  } else {
    // Show dialog when activating camouflage
    dialog.value = true;
  }
});

onBeforeMount(()=>{
  setupNotificationSettings();
});
</script>

<style>
.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td, .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
  border: none !important;
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

.v-table {
  --v-table-header-height: 56px;
  border-radius: inherit;
  line-height: 1.5;
  max-width: 100%;
  display: flex;
  flex-direction: column;
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
    padding-left: 20px !important;
  }
  .v-switch-mobile{
    padding-right: 20px !important;
  }
  .camo-dialog{
    width: 100% !important;
  }
}
</style>