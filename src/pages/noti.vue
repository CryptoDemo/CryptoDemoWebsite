<template>
    <div>
        <v-container class="d-flex">
            <div class="pa-2 flex-lg-and-up hidden-sm-and-down">
                 <Sd-nav1 style="border: none;" />
            </div>
     


            <div class="ml-4" style="width: 100%;">
                <div class="acct-settings" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="display: flex; justify-content: space-between; margin-bottom: 40px; margin-top: 12px; border: none">
                    <span style=" font-size: 24px; font-style: 28px; font-weight: 600; color: #5892FF;">Trade</span>
                    <span class="mail-text" :class="isDark ? 'text-dark' : 'text-light'"> {{ pinia.state.user?.email }}</span>
                </div>
                
                <div :class="isDark ? 'profile-cards-dark':'profile-cards-light'" class="button-container" style="display: flex; border-radius: 10px; width: fit-content; height: 65px; align-items: center; padding: 10px;">
                    <v-btn class="me-3" :class="[selectedScreen ? 'wallet-btn' : isDark ? 'fiat-btn' : 'fiat-btn-light']" @click.prevent="selectedScreen=true" >Active trade </v-btn>
                    <v-btn :class="[!selectedScreen ? 'wallet-btn' : isDark ? 'fiat-btn' : 'fiat-btn-light']" @click.prevent="selectedScreen=false">Closed trade</v-btn>
                </div>

                <v-alert v-if="showAlert" type="info" class="mb-4">
                  {{ alertMessage }}
                </v-alert>

                <div class="mt-5">

                    <v-card v-for="(order, index) in filteredOrders" :key="index" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="padding: 20px; border-radius: 15px; margin-bottom: 10px;">
                        <span v-if="!isFinished" style="font-size: 14px">Trade ends in <span class="resend-code">{{ minutesLeft }}:{{ secondsLeft }}</span> minutes</span>
                        <span v-else style="color: orangered; font-size: 14px;">Times Up</span>

                        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 14px; line-height: 30px;">

                        <div style="display: flex; flex-direction: column;" :class="isDark ? 'text-dark':'text-light'" >
                            <span>{{ order?.offer?.user?.username }}</span>
                            <span>Trade status</span>
                            <span>My role</span>
                            <span>Trade ammount</span>
                            <span>Expected ammount</span>
                            <span>Payment method</span>
                        </div>

                        <div style="display: flex; flex-direction: column; align-items: end;" :class="isDark ? 'text-dark':'text-light'">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16" style="cursor: pointer;">
                                <defs>
                                    <linearGradient id="chatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#2873FF"/>
                                    <stop offset="100%" stop-color="#0B6B96"/>
                                    </linearGradient>
                                </defs>
                                <path fill="url(#chatGradient)" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
                            </svg>


                            <span class="resend-code">{{ order.status }}</span>   
                            <span>Buyer</span>
                            <span>{{ order?.bid?.fiat_amount_paid }}</span>
                            <span>{{ order?.bid?.expected_token_quantity }}</span>
                            <span>Bank Transfer</span>
                        </div>
                    </div>
                    </v-card>

                </div>
            </div>
        </v-container>
    </div>
  
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
import { getmyOrders } from "@/composables/requests/marketplace";


const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore();
const selectedScreen = ref(true)
const minutesLeft = ref(15);
const secondsLeft = ref(0);
const isFinished = ref(false);
const pageNumber = ref(1);

let interval;
let fiveMinuteAlertShown = false;

const alertMessage = ref('');
const showAlert = ref(false);


const getActiveOffers = async () => {
  try {
    // Fetch active offers
    const data = await getmyOrders(pageNumber.value);
    
    // Check if the data retrieval was successful
    if (data.success) {
      // Log the fetched data for debugging
      console.log('Active offers:', data.data.result);
      pinia.setallMyOders(data.data.result)

      // Process the data if needed
      // Example: Update state or trigger further actions
      
    } else {
      // Display an error message if the API response indicates a failure
      push.error(`Error: ${data.message}`); // Custom error message
    }
  } catch (e) {
    // Log the error details and show a user-friendly message
    console.error('Unexpected error:', e);
    push.error(`Unexpected error: ${e.message || e}`); // Detailed error message
  }
};

const filteredOrders = computed(() => {
  if (selectedScreen.value) {
    // Display only non-expired (active) trades
    return pinia.state.allMyOders.filter(order => order.status !== 'expired');
  } else {
    // Display only expired trades
    return pinia.state.allMyOders.filter(order => order.status === 'expired');
  }
});


// Function to update the countdown
const updateCountdown = () => {
  const now = new Date().getTime();
  const endTime = new Date(startTime.value).getTime() + 15 * 60000;

  const distance = endTime - now;

  if (distance <= 0) {
    clearInterval(interval);
    isFinished.value = true;
    minutesLeft.value = 0;
    secondsLeft.value = 0;

    // Move the expired trade to closed trades if not already moved
    pinia.state.allMyOders.forEach(order => {
      if (order.status === 'active') {
        order.status = 'expired';
      }
    });

    return;
  }

  minutesLeft.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  secondsLeft.value = Math.floor((distance % (1000 * 60)) / 1000);

  if (minutesLeft.value === 5 && !fiveMinuteAlertShown) {
    alertMessage.value = 'Only 5 minutes remaining!';
    showAlert.value = true; // Show the alert
    fiveMinuteAlertShown = true; // Ensure the alert is only shown once
  }
};

// Start time
const startTime = ref(new Date().getTime());

onMounted(() => {
  interval = setInterval(updateCountdown, 1000); // Update countdown every second
  getActiveOffers()
});

onUnmounted(() => {
  clearInterval(interval); // Clean up interval when component is unmounted
});
</script>

<style scoped>
.wallet-btn{
border-radius: 10px;
background: var(--linear-card, linear-gradient(270deg, #1DA1DB -11.75%, #2873FF 119.96%));
display: flex;
width: 228px;
height: 48px;
padding: 12px 98px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
box-shadow: none;
color: white;
text-transform: capitalize;
letter-spacing: 0px;
}
.fiat-btn{
border-radius: 10px;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
width: 228px;
height: 48px;
padding: 12px 98px;
background: inherit;
box-shadow: none;
color: #969696;
background: #060A1D;
text-transform: capitalize;
letter-spacing: 0px;
}

.fiat-btn-light{
background: white;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
width: 228px;
height: 48px;
box-shadow: none;
text-transform: capitalize;
letter-spacing: 0px;
}
</style>