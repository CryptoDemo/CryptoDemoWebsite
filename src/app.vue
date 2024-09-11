<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    
        <Notivue v-slot="item">
          <Notification :item="item"
            :icons="outlinedIcons"
            :theme="pastelTheme"
          />
          <NotificationProgress :item="item" />
        </Notivue>

        <div style="display: flex; align-items: center; flex-direction: column; cursor: pointer; position: fixed; bottom: 50px; right: 10px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-wechat" viewBox="0 0 16 16" id="my_custom_link" @click.prevent="activate_chat();">
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#00C6FF;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#0072FF;stop-opacity:1" />
                </linearGradient>
              </defs>
              <path fill="url(#gradient1)" d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356"/>
              <path fill="url(#gradient1)" d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0"/>
            </svg>
            <span class="footer-links" style="font-size: 14px;display: flex; ">Help Centre</span>
          </div>

  </NuxtLayout>
  </v-app>
</template>
<script setup>
import { useStore } from '@/stores/index';
import { getSummedBalance, getTokenBalance } from "@/composables/requests/tokens";
import { allFiatTxn } from "@/composables/requests/fiat";
import intercom from '@intercom/messenger-js-sdk';

const pageNumber = ref(1);
const pinia = useStore();

const activate_chat = ()=>{
  const activate = intercom({
      app_id:'lwqnsoko',
      user_id:pinia.state.user.id,
      email:pinia.state.user.email,
      name:pinia.state.user.name,
      created_at:pinia.state.user.created_at,
      hide_default_launcher: true,
      custom_launcher_selector:'#my_custom_link'
  })
  return activate
}

const network = pinia.state.selectedNetwork.toLowerCase();
const selectedNetworkId = pinia.state.BlockchainNetworks.find(b=>b.name==network)?.id;


const tokensForSelectedNetwork = pinia.state.tokenLists?.filter(token => token?.token_networks?.find(tkn=>tkn.blockchain_id === selectedNetworkId));

const symbols = tokensForSelectedNetwork.map(token => token.symbol);

const getTokenBals = async () => {
 
 // Check if user is authenticated
 if (pinia.state.isAuthenticated)  {
   try {
     // Fetch token balance
     const data = await getTokenBalance(symbols);

     // Update tokens with the new balance
     if (data.success) {
       // Create a copy of the token list to update locally
       const updatedTokens = pinia.state.tokenLists.map(token => {
         const tokenData = data.data.find(t => t.token === token.symbol);
         if (tokenData) {
           return { ...token, balance: tokenData.balance };
         }
         return token;
       });

       pinia.setTokenLists(updatedTokens, addMinutes(5))

       console.log('Updated Tokens:', updatedTokens);
       // Optionally, you can return or use `updatedTokens` as needed

     } else {
       console.log('Error:', data.message);
     }
   } catch (error) {
     console.log('Fetch error:', error);
   }
 }
};

const chain = computed(()=>pinia.state.selectedNetwork);
const selectedCountryId = pinia.state.allcountries.find(country=>country.currency_name==pinia.state.preferredCurrency);

const getSummedBal = async () => {
  if (pinia.state.isAuthenticated) {
    try {
      const data = await getSummedBalance(chain.value.toLowerCase(), selectedCountryId?.id)
      if (data.success) {
        balanceData.value = data.data;
        pinia.setSummedBalance(data.data)
        }else {
          console.error("Error:", data.message);
      }

    } catch (error) {
      console.log(error)
    }
  }
};

const FiatTxnInfo = computed(() => pinia.state.Fiat_transactions);
const getFiatTxn = async () => {

  try {
    const data = await allFiatTxn(pageNumber.value);

    if (data.success) {
      // Ensure both existing and new transactions are arrays
      const existingTransactions = Array.isArray(FiatTxnInfo.value) ? FiatTxnInfo.value : [];
      const newTransactions = Array.isArray(data.data.result) ? data.data.result : [];

      // Merge and filter transactions by unique ID
      const updatedTransactions = filterByKey("id", [
        ...existingTransactions,
        ...newTransactions,
      ]);

   
      pinia.setFiat_transactions(updatedTransactions);

      console.log('Updated Transactions:', FiatTxnInfo.value);
    } else {
      push.error(`${data.message}`);
    }
  } catch (e) {
    console.error("An error occurred while fetching transactions:", e);
    push.error("An error occurred while fetching transactions. Please try again.");
  }
};


const initSocketListeners = ($socketClient)=>{
    $socketClient.onOpen = () => {
  
      console.log('WebSocket connection established');
      
      // $socketClient.sendObj({name: "oscar"});
      // setTimeout(()=>{
      // // Send a message to the server
      // // Optionally, send a JSON object as a string
      //   let message = {
      //       type: "greeting",
      //       content: "Hello, Server!",
      //       userId: "your_user_id"
      //   };
        
      //   $socketClient.send(JSON.stringify(message));
      // },500);
  
    };
  
  
    if(pinia.state.isAuthenticated || pinia.state.user){
      $socketClient.onMessage = (event) => {
        const message = JSON.parse(event.data);
        // console.log('Message from server:', message);
    
        // Handle different types of actions
        switch (message.action) {
          case 'new_web3_txn':
            console.log('New Web3 Transaction:', message.data);
            const selectedNetworkById = pinia.state.BlockchainNetworks.find(e => e.name === pinia.state.selectedNetwork.toLowerCase())
            console.log(selectedNetworkById)
            if(pinia.state.user?.token){
              if (selectedNetworkById && message.data.chain_id === selectedNetworkById.id) {

                const payloadArray = Array.isArray(message.data.payload) ? message.data.payload : [];

                const data_payload = [...pinia.state.TransactionDetails, ...payloadArray];
                // const data_payload = ([...pinia.state.TransactionDetails, ...message.data.payload]);
                console.log(pinia.state.TransactionDetails)
                pinia.setTransactionDetails(data_payload)

                // getSummedBal()
                console.log('done')
    
  
              } else {
                console.error('Selected network or chain ID does not match:', message.data.chain_id, selectedNetworkById);
              }
            }
          
            break;
    
          case "new_web3_balance":
            const payload = message.data?.payload;
            const tokenLists = pinia.state.tokenLists;
            tokenLists.map(token=>{
              if(token.id==payload.token_id){
                token.balance = payload.balance;
              }
            });
            pinia.setTokenLists(tokenLists);
            break;
            

          case 'new_fiat_txn':
            console.log('Transfer:', message.data);


            const fiat_trans_payload = Array.isArray(message.data) ? message.data : [message.data];

            // Combine existing transactions with the new payload
            const existingTransactions = Array.isArray(pinia.state.Fiat_transactions) ? pinia.state.Fiat_transactions : [];
            const data_payload = [...existingTransactions, ...fiat_trans_payload];
    
            getFiatTxn();
            break;
  
          case 'fiat_balances_updated':
            console.log('Fiat Balance:', message.data);
            pinia.setTotal_fiat_bal(message.data);

            
            break;

            case 'new_chat_message':

            console.log('P2P_new_chat_message:', message.data);
            const arr = Array.isArray(message.data) ? message.data : [message.data];

            const messageIndex = pinia.state.chat_messages.findIndex(msg => msg.created_at === arr.created_at);

            // console.log('web',messageIndex)
            if (messageIndex != -1) {
              pinia.state.chat_messages[messageIndex] = [...arr];
              console.log(pinia.state.chat_messages[messageIndex])
            }

            console.log(pinia.state.chat_messages)

            
            pinia.state.chat_messages.push(...arr)
            // const new_chat_messages =  pinia.state.new_chat_messages.filter(message => !message.seen);
            // pinia.setNewChatMessages(new_chat_messages)

            break;

          case 'user_online_status':
            pinia.setOnlineCheck(message.data)
            // console.log('P2P:', message.data);
            break;

          case 'new_p2p_dispute':
            // pinia.setOnlineCheck(message.data)
            // console.log('P2P:', message.data);
            break;
            
          case 'chatting':
            // console.log('Chatting:', message.data);
            break;
          case 'agent_online_availability':
            // console.log('Agent Online Availability:', message.data);
            break;
          default:
            // console.warn('Unknown action:', message.action);
        }
      };
    }
  
    $socketClient.onClose = () => {
      console.log('WebSocket connection closed');
    };
  
    $socketClient.onError = (error) => {
      console.error('WebSocket error:', error);
    };
  }

const { $initSocket } = useNuxtApp();
 


  const initWS = (newVal)=>{
    //init websocket only when a user is logged in
    if(newVal?.id){
      const $socketClient = $initSocket();
      
      setTimeout(() => {
        initSocketListeners($socketClient);
      }, 1000);
    }
  }

  watch(()=>pinia.state.user,(newVal)=>{
    initWS(newVal);
  });
  initWS(pinia.state.user);



const onlineStatusMessage = ref('');
const isOnline = ref(navigator.onLine);

const updateOnlineStatus = () => {
  isOnline.value = navigator.onLine;
  const message = isOnline.value 
    ? 'You are back online.' 
    : 'You are offline. Check your internet connection.';
  notifyUser(message);
};

const clearMessage = () => {
  onlineStatusMessage.value = '';
};

const notifyUser = (message) => {

    onlineStatusMessage.value = message;
    if (isOnline.value) {
      push.success(message); // Display success notification
    } else {
      push.error(message); // Display error notification
    }
    setTimeout(clearMessage, 3000); // Clear message after 3 seconds
  };

onMounted(() => {
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});

onMounted(() => {
  // Check if geo information exists in Pinia store
  if (!pinia.state.geo || Object.keys(pinia.state.geo).length === 0) {
    getVisitorsLocation(); // Fetch location only if geo is empty
  }
});

onUnmounted(() => {
  window.removeEventListener('online', updateOnlineStatus);
  window.removeEventListener('offline', updateOnlineStatus);
});






</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Manrope&family=Poppins&display=swap');
  @import url('https://fonts.cdnfonts.com/css/sf-pro-display');

.VIpgJd-ZVi9od-ORHb-OEVmcd {
display: none !important;
}

.footer-links{
margin-bottom: 16px;
color: #8E9BAE;
font-family: "SF Pro Display";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 14px */
letter-spacing: 0.14px;
margin-bottom: 16px!important;
}
</style>