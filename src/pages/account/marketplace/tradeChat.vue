<template>
  <div>
    <Header :hide="true" :icon1="true" :icon3="true" :icon2="true" :wallet="true" />

    <v-container>

        <div class="chat-headings"> 

      
        
        <div :class="isDark ? 'Dashboard-navbar':'Dashboard-navbar-light'"> 

          <div style="position: relative; display: flex; width: 77%; justify-content: space-between;">
            <div class="d-flex">
              <img :src="selectedCoin?.offer?.user?.profile_image || '/img/Bitcoin.png'" class="mr-2" style="width: 40px; height: 40px; border-radius: 40px;"/>
              <div class="d-flex" style="flex-direction: column;">
                <div v-if="pinia.state?.user?.kyc_verified" style="display: flex; align-items: center">
                    <span style="font-size: 16px; font-style: normal; font-weight: 600;">{{ selectedCoin?.offer?.user?.username }}</span>
                    <img src="/svg/verified.svg" />
                </div>
                    <span style="color: var(--Second-Text, #A4A8AB); font-size: 12px; font-style: normal; font-weight: 400; line-height: normal; letter-spacing: 0.1px;">Online</span>
              </div>
            </div>

            <div class="d-flex" style="align-items: center;">          
  
                  <v-menu v-model="menu" :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                      <v-btn v-bind="props" class="primary-btn1" style="border-radius: 10px !important; font-weight: 600; color: white;">View Payment details</v-btn>
                    </template>
  
                    <v-card width="330" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 16px; padding: 20px; border: 1px solid  #303A46; margin-top: 20px;">
  
                      <span class="text-center" style="font-family: Manrope; display: block; font-size: 16px; font-style: normal; font-weight: 600; line-height: 150%;">Payment Details</span>
                        
                      <div style="display: flex; justify-content: center; align-items: center;">
                        <div style="display: grid; margin-top: 12px">
                          <span class="trade-text">Ammount to Pay</span>
                          <span class="trade-text">Minimum-Maximum buy limit</span>
                        </div>
                        <div style="display: grid; margin-top: 12px">
                          <span style="font-size: 14px; display: flex;justify-content: flex-end;" :class="isDark ? 'text-dark' : 'text-light'">{{ formatBalance(selectedCoin?.bid?.fiat_amount_paid) }}</span>
                          <span style="font-size: 14px; display: flex;justify-content: flex-end;" :class="isDark ? 'text-dark' : 'text-light'">{{ selectedCoin?.offer.trading_pair?.fiat?.minimum_buy_limit }} - {{ selectedCoin?.offer.trading_pair?.fiat?.maximum_buy_limit }}</span>
                        </div>
                      </div>
                    </v-card>
                </v-menu>
  
            </div>
          </div> 
        </div>

        <div :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 12px; width: 90px; height: 46px; margin: auto; margin-top: 180px; margin-bottom: 25px">
          <span  style="font-size: 10px;  font-weight: 400; line-height: 26px;  display: flex; justify-content: center; padding-top: 12px ">{{chatDate}}</span>
        </div>


          <div class="ma-2" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 0px 24px 24px 24px; padding: 30px; width: 60%;">
            
              <span style="font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 400; line-height: 24px;letter-spacing: 0.1px;">
                  <span style="font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 600; line-height: 24px; letter-spacing: 0.1px;"> You're buying {{ selectedCoin.bid.expected_token_quantity }} {{ selectedCoin?.offer?.trading_pair?.crypto?.token?.name }}  for {{ formatBalance(selectedCoin?.bid?.fiat_amount_paid) }} 
                  <span>{{ pinia.state.allcountries.find((c) => c.id === selectedCoin.offer?.trading_pair?.fiat.country_id)?.currency_name}}</span>
                    via Bank Transfer.  </span>
                  <div style="display: grid" :class="isDark ? 'text-dark' : 'text-light'">
                  <span class="mb-1 mt-2">1. Before paying, carefully read the terms of the trade of the advertiser. make sure to use the specified payment method stated in the Ad.</span>
                  <span class="mb-1">2. Make your payment, Upload proof of payment and Wait for your trade partner to confirm your payment.</span>
                  <span class="mb-1">3. As the seller, ensure to receive and confirm payment before releasing coin to the buyer </span>
                  <span class="mb-1">4.Third-party payments are not accepted for this trade. The selected bank accounts must belong to the buyer and seller respectively..</span>
                  <span class="mb-1">5. Your trade partner will release the coin to you.</span>
                  </div>
              </span>
          </div>

          

          <div v-for="i in pinia.state.chat_messages" :key="i.id">

            <div style="display: flex; margin-top: 15px; flex-direction: column;" v-if="i.sender_id !== pinia.state.user.id">
                <div :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 0px 24px 24px 24px; display: flex; width: 30%; padding: 20px; color: #fff;">
                  <span style="font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 400; line-height: 24px;  letter-spacing: 0.1px;">{{ i.message }}</span>
                </div>
                <span style="font-family: Manrope; font-size: 12px; font-style: normal;font-weight: 400; color: #A4A8AB">{{ formattedDate(i.created_at) }}</span>
            </div>
  
        
            <div style="display: flex; flex-direction: column; align-items: flex-end; margin-top: 15px;"  v-if="i.sender_id == pinia.state.user.id">
                <div style="border-radius: 24px 24px 0px 24px; border: 1px solid #2873FF; background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF); display: flex; width: 30%; padding: 20px; color: #fff;">
                  <span style="font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 400; line-height: 24px;  letter-spacing: 0.1px;">{{ i.message }}</span>
                </div>
                <span style="font-family: Manrope; font-size: 12px; font-style: normal;font-weight: 400; color: #A4A8AB">{{ formatTime (i.created_at) }}</span>
            </div>
          </div>


          <div class="chat-border" style="margin-top: 15px;"></div>

          <div>
            <div style="display: flex; justify-content: space-between; margin-top: 25.3px">

                
                <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
  
                  <template v-slot:activator="{ props: activatorProps }">
                   
                      <v-btn @change="onFileChange()" class="me-5" v-bind="activatorProps" :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'" style="border-radius: 10px; backdrop-filter: blur(10.5px); min-width: 50px; height: 48px">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                          <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
                        </svg>
                      </v-btn>
                  </template>
  
                  <v-card :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'">
                    
                    <v-btn icon="mdi-close" @click="dialog = false" :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'" style="display: flex;margin-left: auto;"></v-btn>
                    <span style="font-size: 32px; font-weight: 600; display: flex; justify-content: center;">Upload File</span>
                  
                    <span :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 14px; margin-bottom: 10px;">Attach Document</span>

                    <div class="dotted-box">

                      <span :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 14px;">Drag and drop files here or select from your computer</span>
                    </div>

                    <v-btn class="primary-btn1 mt-3" style="width: 100; height: 60px;">Upload file</v-btn>
                    
                  </v-card>
                </v-dialog>

              <!-- <input type="file"  sty le="display: none" @change="onFileChange()" accept="image/*,application/pdf"/> -->

              <v-btn class="mr-5" :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'" style="border-radius: 10px; min-width: 50px; height: 48px">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <g clip-path="url(#clip0_4035_64745)">
                    <path d="M11.093 11.1992V7.19922H13.093V11.1992H17.093V13.1992H13.093V17.1992H11.093V13.1992H7.09302V11.1992H11.093ZM12.093 22.1992C6.57002 22.1992 2.09302 17.7222 2.09302 12.1992C2.09302 6.67622 6.57002 2.19922 12.093 2.19922C17.616 2.19922 22.093 6.67622 22.093 12.1992C22.093 17.7222 17.616 22.1992 12.093 22.1992ZM12.093 20.1992C14.2147 20.1992 16.2496 19.3564 17.7499 17.8561C19.2502 16.3558 20.093 14.321 20.093 12.1992C20.093 10.0775 19.2502 8.04266 17.7499 6.54236C16.2496 5.04207 14.2147 4.19922 12.093 4.19922C9.97129 4.19922 7.93645 5.04207 6.43616 6.54236C4.93587 8.04266 4.09302 10.0775 4.09302 12.1992C4.09302 14.321 4.93587 16.3558 6.43616 17.8561C7.93645 19.3564 9.97129 20.1992 12.093 20.1992Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_4035_64745">
                      <rect width="24" height="24" fill="white" transform="translate(0.0930176 0.199219)"/>
                    </clipPath>
                  </defs>
                </svg>
              </v-btn>

              
              <v-text-field  v-model="textMessages" clearable variant="plain" placeholder="Your text here..." style="background: inherit !important; width: 50%; height: 60px; border-radius: 10px;"></v-text-field>

              <v-btn @click.prevent="send_Msg()" class="ml-5" style="border-radius: 17px; background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF); backdrop-filter: blur(10.5px); width: 48.08px; height: 48px">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M16.2896 3.68937C20.1059 2.41937 22.1794 4.49937 20.9173 8.30937L18.0826 16.7994C16.1794 22.5094 13.0542 22.5094 11.1511 16.7994L10.3097 14.2794L7.78547 13.4394C2.06598 11.5394 2.06598 8.42937 7.78547 6.51937L12.3931 4.98937" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.4998 13.8478L14.0857 10.2578" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </v-btn>

            </div>
          </div>
        </div>
  </v-container>
  <Footer class="flex-lg-and-up hidden-sm-and-down" />
  <Mobile-footer class="mobile-footer" />  
</div>

</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useTheme } from "vuetify";
import { getMessages, sendMessages } from "@/composables/requests/chats";
import { compressImage } from "@/composables/mixin";
import {uploadUserFile} from "@/composables/requests/file";

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore();
const pageNumber = ref(1);
const loading = ref();
const isSending = ref();
const textMessages = ref();
const uploadUser_File = ref();
const file_url = ref();
const preview = ref();
const chatDate = ref('Today, 8:26 AM')
const myfile = ref();
const menu = ref (false);
const fileInputRef = ref(null);
const dialog = ref();
// Trigger the file input dialog
const triggerFileInput = () => {
  if (fileInputRef.value) {
    fileInputRef.value.click();
  }
};

 // Get the selected coin ID from the Pinia store
const selectedCoinId = pinia.state.selected_trade_ID;

const selectedCoin = computed(() =>  pinia.state.allMyOders.find(item => item.id === selectedCoinId));

const get_allchat = async () => {
  try {
    const data = await getMessages(pageNumber.value);
    if (data.success) {
      pinia.setChat_messages(data.data.result)

    } else {
      push.error(`${data.message}`);
    }
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};


const send_Msg = async () => {
  try {
    // Handle file compression and upload
    if (myfile.value) {
      const compressedImg = await compressImage(myfile.value);
      const formdata = new FormData();
      formdata.append("file", compressedImg);
      const fileUrls = await uploadUserFile(formdata);
      file_url.value = fileUrls.uploaded_file_urls[0];
    }

    // Create the main payload
    const main_payload = {
      id_: new Date().toISOString(), // Use ISO string for consistency
      receiver_id: selectedCoin.value.seller_id,
      message: textMessages.value + " ",
      file_url: file_url.value, // Use the updated file_url
      reply_message_id: null,
      sender_id: pinia.state.user.id,
      created_at: new Date().toISOString(),
      isSendng: true,
      view: true,
    };

    // Update the chat messages state
    if (!pinia.state.chat_messages.data) {
      pinia.state.chat_messages.data = []; // Initialize if undefined
    }
    pinia.state.chat_messages.data.push(main_payload);

    // Create the payload for sending
    const payload = {
      p2p_order_id: selectedCoinId,
      receiver_id: selectedCoin.value.seller_id,
      message: textMessages.value,
      file_url: file_url.value, // Use the updated file_url
      reply_message_id: null,
    };

    // Remove properties if they are not set
    if (!payload.message) delete payload.message;
    if (!payload.file_url) delete payload.file_url;
    if (!payload.reply_message_id) delete payload.reply_message_id;

    // Set sending state
    isSending.value = true;

    // Send the message
    const data = await sendMessages(payload);

    // Handle response
    if (data.success) {
      console.log('Message sent successfully:', data.data);
      push.success('Message sent successfully');
      textMessages.value = "";
    } else {
      push.error(data.message || 'An error occurred while sending the message');
    }
  } catch (e) {
    // Log and display error
    console.error('Error during message sending:', e);
    push.error('Failed to send the message. Please try again.');
  } finally {
    isSending.value = false; // Ensure sending state is updated
  }
};

const open_Image = (id)=>{
  const item = pinia.state.chat_messages.data.find(e => e.id === id)
  imageZoom.value = item.file_url
  show_image.value = true
  }




  const onFileChange = async (event) => {
  const file = event.target.files[0];
  myfile.value = file;
  
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64String = e.target.result; // This is your Base64 string
      preview.value = base64String; // Set the preview to the Base64 string
    };
    reader.readAsDataURL(file);
  }
};


// Handle the file selection
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Process the file (image or PDF) here
    console.log('Selected file:', file);
  }
};

onMounted(() => {
  get_allchat();
});

</script>

<style scoped>


.header{
color: var(--Gray-Medium-light, #969696);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 22.4px */
}

.chat-headings{
margin-top: 100px;
margin-bottom: 16px;
}

.chat-border{
background: var(--border, #303A46);
height: 2px;
flex-shrink: 0;
width: 100%;
}

.Dashboard-navbar{
background: rgba(6, 10, 29, 0.60)!important;
backdrop-filter: blur(50px) !important;
display: flex !important;
align-items: center !important;
flex: 0 0 auto;
position: fixed;
top: 90px;
width: 100%;
height: 90px;
z-index: 100;
color: white!important;
box-shadow: none!important;
justify-content: space-between;
}
.Dashboard-navbar-light {
align-items: center;
display: flex;
position: fixed;
top: 90px;
/* width: 77%; */
height: 90px;
z-index: 100;
background: rgba(255, 255, 255, 0.60) !important;
backdrop-filter: blur(50px);
color: black!important;
box-shadow: none!important;
}

.trade-text{
font-size: 14px;
font-weight: 600;
}

.v-dialog--fullscreen > .v-overlay__content > .v-card, .v-dialog--fullscreen > .v-overlay__content > .v-sheet, .v-dialog--fullscreen > .v-overlay__content > form > .v-card, .v-dialog--fullscreen > .v-overlay__content > form > .v-sheet {
min-height: 70%;
width: 50% !important;
border-radius: 0;
display: flex;
margin-block-start: auto;
padding: 40px;
}

.v-dialog--fullscreen > .v-overlay__content > .v-card, .v-dialog--fullscreen > .v-overlay__content > .v-sheet, .v-dialog--fullscreen > .v-overlay__content > form > .v-card, .v-dialog--fullscreen > .v-overlay__content > form > .v-sheet {
min-width: 80%;
border-radius: 0;
border-top-right-radius: 40px;
border-top-left-radius: 40px;
display: flex;
align-self: center;
}

.txn-cards-dark {
  background: #162138;
  padding: 10px;
}
.txn-cards-light {
  background: #edf3ff;
  padding: 10px;
}

.dotted-box {
  width: 100%;
  height: 70%;
  border: 2px dotted #fff;
  padding: 10px;
}

@media screen and (max-width: 600px) {
  .v-dialog--fullscreen > .v-overlay__content > .v-card, .v-dialog--fullscreen > .v-overlay__content > .v-sheet, .v-dialog--fullscreen > .v-overlay__content > form > .v-card, .v-dialog--fullscreen > .v-overlay__content > form > .v-sheet {
min-width: 100%;
border-radius: 0;
border-top-right-radius: 40px;
border-top-left-radius: 40px;
display: flex;
align-self: center;
}
}
</style>