<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
      <Notivue v-slot="item">
        <Notification :item="item"
          :icons="outlinedIcons"
          :theme="pastelTheme"
        />
  </Notivue>
  </NuxtLayout>
  </v-app>
</template>
<script setup>
import { useStore } from '@/stores/index'
import { Notification, pastelTheme } from 'notivue';
import { getSummedBalance, getTokenBalance } from "@/composables/requests/tokens";

const pinia = useStore()

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



const getSummedBal = async () => {
  if (pinia.state.isAuthenticated) {
    try {
      const data = await getSummedBalance(chain.value.toLowerCase(), selectedCountryId.id)
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
        console.log('Message from server:', message);
    
        // Handle different types of actions
        switch (message.action) {
          case 'new_web3_txn':
            console.log('New Web3 Transaction:', message.data);
            const selectedNetworkById = pinia.state.BlockchainNetworks.find(e => e.name === pinia.state.selectedNetwork.toLowerCase())
            console.log(selectedNetworkById)
            if(pinia.state.isAuthenticated || pinia.state.user){
              if (selectedNetworkById && message.data.chain_id === selectedNetworkById.id) {
                 const data_payload = ([...pinia.state.TransactionDetails, ...message.data.payload]);
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
    
          case 'new_fiat_txn':
            console.log('Transfer:', message.data);
           
            // const fiat_trans_payload = [message.data]
            // const data_payload = [...pinia.state.TransactionDetails,...fiat_trans_payload]
             
            // const grouped_fiat_trans = [...storedpiniavalue, ...group_trans(fiat_trans_payload)]
            // console.log(grouped_fiat_trans)
    
            break;
  
          case 'fiat_balances_updated':
            console.log('Fiat Balance:', message.data);
            pinia.setTotal_fiat_bal(message.data,addMinutes(5));
            break;
          case 'P2P':
            console.log('P2P:', message.data);
            break;
          case 'chatting':
            console.log('Chatting:', message.data);
            break;
          case 'agent_online_availability':
            console.log('Agent Online Availability:', message.data);
            break;
          default:
            console.warn('Unknown action:', message.action);
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




// onBeforeMount(() => {
// convertCurrencies();
// getTokenBals();
// getSummedBal();
// });






</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Manrope&family=Poppins&display=swap');
  @import url('https://fonts.cdnfonts.com/css/sf-pro-display');
</style>