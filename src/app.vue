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

  </NuxtLayout>
  </v-app>
</template>
<script setup>
import { useStore } from '@/stores/index';
import { getSummedBalance, getTokenBalance } from "@/composables/requests/tokens";
import { allFiatTxn } from "@/composables/requests/fiat";


const pageNumber = ref(1);
const pinia = useStore()

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

                getTokenBals()
                getSummedBal()
          
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


          case 'P2P':
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
    getVisitorsLocation();
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
</style>