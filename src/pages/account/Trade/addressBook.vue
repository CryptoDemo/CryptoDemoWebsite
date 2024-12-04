<template>
    <div>
      <Header :hide="true" :icon1="true" :icon3="true" :icon2="true" :wallet="true"/>
      <v-container class="d-flex" style="margin-top: 110px">
        <div class="flex-lg-and-up hidden-sm-and-down">
            <Side-nav/>
        </div>
  
        <div class="trades-div" style="width: 100%; margin-left: 24px;">
          <div class="acct-settings" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="display: flex; justify-content: space-between; margin-bottom: 20px; border: none;">
            <span class="acct-text" style="font-size: 24px; font-style: 28px; font-weight: 600;color: #5892ff;">Address Book</span>
            <span class="mail-text" :class="isDark ? 'text-dark' : 'text-light'"> {{ pinia.state.user?.email }} </span>
        </div>

          <div v-if="All_address.length">

            <v-expansion-panels class="address-book" style="border-radius: 10px;">
              <div v-for="(address, id) in All_address" :key="id"  style="width: 100%;">
              <v-expansion-panel  
                :title="address.contact_name" class="my-2" style="border-radius: 10px;"
                :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'"
                @click="collectAdressVals(address)">
                <v-expansion-panel-text> 
                  <div style="display: flex; flex-direction: column;">
                    <span class="answer-text">Chain Network: <span style="text-transform: uppercase;">{{ getNetworkName(address.chain_id) }}</span></span>
                    <span class="answer-text">Wallet Address: {{ address.contact_wallet_address }}</span>
                    <v-btn variant="tonal" @click="navigateTo('/account/trade/sendCoin')"  class="mt-3" style="font-size: 14px; color: #2873FF; font-weight: 700; text-transform: unset; border-radius: 10px; height: 45px;">Select wallet address</v-btn>
                    <v-btn variant="tonal" @click="deleteAddress()" class="mt-3" style="font-size: 14px; color: orangered; font-weight: 700; text-transform: unset; border-radius: 10px; height: 45px;">Delete wallet address</v-btn>
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </div>
            </v-expansion-panels>

            <v-btn variant="tonal" class="mt-3" @click="navigateTo('/account/trade/saveAddress')" style="font-size: 14px; color: #2873FF; font-weight: 700; text-transform: unset; border-radius: 10px; height: 50px;">Add another address</v-btn>
            
          </div>
      

          <div v-else style="display: flex; margin: auto; flex-direction: column; align-items: center;">     
                <img src="/svg/tag-user.svg" class="emptystate" width="100"/>
                <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 14px;">You have not saved any address</span>
                    <span @click="navigateTo('/account/trade/saveAddress')" class="text-decoration-underline text-subtitle-2 text-center cursor-pointer" :class="isDark ? 'text-dark' : 'text-light'">save address to see them here</span>
                </div>
          </div>

          </div>

      </v-container>
      <Footer class="flex-lg-and-up hidden-sm-and-down" />
      <Mobile-footer class="mobile-footer" />
    </div>
  </template>
<script setup>
import { ref, computed, onMounted } from "vue";
import { getAddress_Book, deleteAddress_Book } from "@/composables/requests/users";
import { useTheme } from "vuetify";

definePageMeta({ middleware: 'scroll-to-top'});

const theme = useTheme()
const isDark = computed(() =>  theme.global.current.value.dark);
const pinia = useStore();
const pageNumber = ref(1)
const All_address = computed(() => pinia.state.addressBook);
const loading = ref(false)

const selectedNetwork = ref(pinia.state.selectedNetwork.toLowerCase());

const networkId = computed(() => {
  const network = pinia.state.BlockchainNetworks.find(
    (n) => n.name.toLowerCase() === selectedNetwork.value
  );
  return network ? network.id : null; // Return the ID or null if not found
});

  
const collectAdressVals = (address) => {
  const payload = {
    id: address?.id,
    contact_id: address?.user_id,
    walletAdress: address.contact_wallet_address
  };
  pinia.setContactId(payload); // Assuming you have the pinia store setup
};


const getAllWalletAddress = async () => {
  try {
        const data = await getAddress_Book(pageNumber.value)
        if (data.success) {
            pinia.setAddressBook(data.data.result);
          }else {
            console.error("Error:", data.message);
        }
 
      } catch (error) {
        console.log(error)
  } 
};


const getNetworkName = (chainId) => {
  const network = pinia.state.BlockchainNetworks.find((n) => n.id === chainId);
  const networkName = network ? network.name : 'Unknown Network';
  return networkName;
};


const deleteAddress = async (addressId) => {
  loading.value = true;

  try {
    // Call the delete function, passing the address ID to be deleted
    const data = await deleteAddress_Book(pinia.state.selectedAdressBook_UserId.id);

    if (data?.success) {
      push.success("Wallet address deleted successfully.");
      
      // Filter out the deleted address from All_address
      pinia.state.addressBook = pinia.state.addressBook.filter(address => address.id !== pinia.state.selectedAdressBook_UserId.id);
    } else {
      push.error(data.message || 'Failed to delete wallet address.');
    }
  } catch (error) {
    push.error(`An error occurred: ${error.message}`);
  } finally {
    loading.value = false; // Always reset loading
  }
};



onMounted(() => {
    getAllWalletAddress();
});
</script>




<style scoped>
.address-book :deep(.v-expansion-panel__shadow){
box-shadow: none !important;
border: none !important;
border-radius: 10px;
}
.answer-text{
  font-size: 14px;
}

@media screen and (max-width: 600px) {
.trades-div{
  margin-left: 0px !important;
}
.emptystate{
  width: 40px !important;
}

}
</style>
