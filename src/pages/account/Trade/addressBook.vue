<template>
    <div>
      <Header :hide="true" :icon1="true" :icon3="true" :icon2="true" :wallet="true"/>
      <v-container class="d-flex" style="margin-top: 110px">
        <div class="flex-lg-and-up hidden-sm-and-down">
            <Side-nav/>
        </div>
  
        <div class="trades-div" style="width: 100%; margin-left: 24px;">
          <div class="acct-settings" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="display: flex; justify-content: space-between; margin-bottom: 40px; border: none;">
            <span style=" font-size: 24px; font-style: 28px; font-weight: 600;color: #5892ff;">Address Book</span>
            <span class="mail-text" :class="isDark ? 'text-dark' : 'text-light'"> {{ pinia.state.user?.email }} </span>
          </div>

          <div style="height: auto; display: flex; flex-direction: column;">
            <v-expansion-panels class="my-2" variant="popout">
                <v-expansion-panel
                    v-for="(address, i) in All_address"
                    :key="i"
                    :title="address.contact_name">

                    <v-expansion-panel-text>
                        <div style="display: flex; flex-direction: column;">
                            <span class="answer-text">Wallet address: {{ address.contact_wallet_address }}</span>
                            <span class="answer-text">{{ address.contact_wallet_address }}</span>
                            <span class="answer-text">{{ address.contact_wallet_address }}</span>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                </v-expansion-panels>




            <div v-if="!All_address" style="display: flex; margin: auto; flex-direction: column; align-items: center;">     
                <img src="/svg/tag-user.svg" width="100"/>
                <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 14px;">You have not saved any address</span>
                    <span @click="navigateTo('/account/trade/saveAddress')" class="text-decoration-underline text-subtitle-2 text-center cursor-pointer" :class="isDark ? 'text-dark' : 'text-light'">save address to see them here</span>
                </div>
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
  import { getAddress_Book } from "@/composables/requests/users";
  import { useTheme } from "vuetify";

  definePageMeta({
    middleware: 'scroll-to-top'
  });

  const theme = useTheme()
  const isDark = computed(() =>  theme.global.current.value.dark);
  const pinia = useStore();
  const pageNumber = ref(1)
  const All_address = ref(pinia.state.addressBook)

  const getAllWalletAddress = async () => {
    if (pinia.state.isAuthenticated) {
      try {
        const data = await getAddress_Book(pageNumber.value)
        console.log(data)
        if (data.success) {
            pinia.setAddressBook(data.data.result);
          }else {
            console.error("Error:", data.message);
        }
 
      } catch (error) {
        console.log(error)
      }
    }
};

onMounted(() => {
    getAllWalletAddress();
});
</script>




<style scoped>

@media screen and (max-width: 600px) {
.trades-div{
    margin-left: 0px !important;
}

}
</style>
