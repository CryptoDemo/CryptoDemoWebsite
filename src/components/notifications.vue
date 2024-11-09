<template>
    <div>
        <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
                <button class="me-5 nav-btn" :class="isDark ? 'nav-btn':'nav-btn-light'" style="border-radius: 20px;"  v-bind="props">         
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" :class="isDark ? 'close-btn':'close-btn-light'">
                    <path d="M20.12 14.49L19.12 12.83C18.91 12.46 18.72 11.76 18.72 11.35V8.82C18.72 6.47 17.34 4.44 15.35 3.49C14.83 2.57 13.87 2 12.77 2C11.68 2 10.7 2.59 10.18 3.52C8.23003 4.49 6.88003 6.5 6.88003 8.82V11.35C6.88003 11.76 6.69003 12.46 6.48003 12.82L5.47003 14.49C5.07003 15.16 4.98003 15.9 5.23003 16.58C5.47003 17.25 6.04003 17.77 6.78003 18.02C8.72003 18.68 10.76 19 12.8 19C14.84 19 16.88 18.68 18.82 18.03C19.52 17.8 20.06 17.27 20.32 16.58C20.58 15.89 20.51 15.13 20.12 14.49Z"/>
                    <path d="M15.61 20.01C15.19 21.17 14.08 22 12.78 22C11.99 22 11.21 21.68 10.66 21.11C10.34 20.81 10.1 20.41 9.96002 20C10.09 20.02 10.22 20.03 10.36 20.05C10.59 20.08 10.83 20.11 11.07 20.13C11.64 20.18 12.22 20.21 12.8 20.21C13.37 20.21 13.94 20.18 14.5 20.13C14.71 20.11 14.92 20.1 15.12 20.07C15.28 20.05 15.44 20.03 15.61 20.01Z"/>
                    </svg>  
                    <!-- <span style="position: absolute; background: #FF3E46; width: 18px; height: 18px;  border-radius: 6px; right: 9px; top: 8px; font-family: manrope;">8</span> -->
                  </button>
            </template>

            
            <div style="margin-top: 15px;">

              <v-list :class="isDark ? 'country-dropdown':'country-dropdown-light'" style="border-radius: 15px;">
                <v-list-item style="display: contents;">
                  <v-row dense style="width: 330px;">
                  <v-col v-for="(msgs, i) in notificationLogs" :key="i" sm="12">
                    <v-list-item style="display: flex;">
                      <div style="display: flex; align-items: center; ">
                        <img :src="msgs.image_url" style="width: 40px; height: 40px; border-radius: 40px;"/>
                        <div class="ml-2" style="display: flex; flex-direction: column;">
                          <span style="font-size: 14px;">{{ msgs.message }}</span>
                          <span class="mt-1" style="font-size: 12px;">{{ formattedDate(msgs.c_at )}}</span>
                        </div>
                    </div>
                    </v-list-item>
                  </v-col>
                  </v-row>
                </v-list-item>
              </v-list>

            </div>
        </v-menu>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';
import { getNotifications } from "@/composables/requests/users";
const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore()
const currentPageNumber = ref(1);
const totalPages = ref(2);
const isLoading = ref(false);


const notificationLogs = ref( pinia.state.notificationLogs || []);

const fetchMore = async()=>{
  // increment the pageNumber
  currentPageNumber.value += 1;

  // fetch the new page record
  fetchActivityLogs();
}

const fetchNotificationLogs = async () => {
  isLoading.value = true;
  try {
    const data = await getNotifications(currentPageNumber.value);

    totalPages.value = data?.data?.total_pages || totalPages.value;

    if (data.success) {

      // Append and filter by unique IDs if necessary
      notificationLogs.value = filterByKey("id", [
        ...notificationLogs.value,
        ...data.data.result,
      ]);

      pinia.setNotificationLogs(notificationLogs.value);
    }
  } catch (e) {
    push.error(`Error: ${e.message}`);
  } finally {
    isLoading.value = false;
  }
};

onBeforeMount(() => {
  fetchNotificationLogs();
});

</script>

<style scoped>
.nav-btn {
border-radius: 20px; 
background: #10192D !important; 
min-width: 52px!important;
height: 53.2px !important;
flex-shrink: 0;
box-shadow: none;
display: flex;
align-items: center;
justify-content: center;
}
.nav-btn-dark{
background: #10192D !important; 
}
.nav-btn-light {
background: #F8FAFC !important; 
}

.country-dropdown{
flex-shrink: 0;
background: #1B2537 !important;
text-transform: unset !important;
color: white;
letter-spacing: 0px;
margin-top: 10px !important;
border: 0.5px solid #2f3946;
}
.country-dropdown-light{
flex-shrink: 0;
border-radius: 20px;
text-transform: unset !important;
background: #F8FAFC !important;
color: #060A1D;
letter-spacing: 0px;
box-shadow: none;
margin-top: 10px !important;
border: 1px solid #DBE8FF;
}
.close-btn{
  fill: white;
}
.close-btn-dark{
fill: #10192D;
}
.v-btn--size-default {
    --v-btn-size: 0.875rem;
    --v-btn-height: 36px;
    font-size: var(--v-btn-size);
    min-width: 64px;
    padding: 0px !important;
}

@media screen and (max-width: 600px) {
.nav-btn{
  background: inherit !important;
  position: relative;
  bottom: 33%;
  min-width: 0px!important;
  height: 40px !important;
  right: -4px;
}
.nav-btn :deep(.v-btn__overlay, .v-btn__underlay) {
  width: 0% !important;
}

}
</style>