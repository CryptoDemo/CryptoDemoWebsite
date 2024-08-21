<template>
  <div>
    <Header :hide="true" :icon1="true" :icon3="true" :icon2="true" :wallet="true" />

    <v-container class="d-flex">
      <!-- <v-btn @click="dialog = true">
      Open Dialog
    </v-btn> -->

    <!-- <v-dialog v-model="dialog"> -->

      <div :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'"  class="flex-lg-and-up hidden-sm-and-down" style="width: 400px; margin-top: 100px; padding: 20px; margin-right: 24px; border-radius: 10px !important;">
        
        <div style="display: flex; align-items: center" v-if="selectedCoin?.status !== 'expired'">
          <img src="/svg/Ellipse-active.svg"/>
          <span class="ml-2" style="font-weight: 600; color: #35B233;"> This trade is Active</span>
        </div>
  
        <div style="display: flex; align-items: center" v-else>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orangered" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>
          <span style="color: orangered; font-weight: 600; margin-left: 4px;">This trade is Expired</span>
        </div>
  
        <div :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'" class="d-flex mt-4">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#64748B" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
              <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"/>
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
            </svg>
          </div>
          <span class="warning-text ml-3" :class="isDark ? 'text-dark' : 'text-light'"> 
            Keep trades within Demo. Some users may ask you to trade outside the Demo platform. This is against our Terms of Services and likely a scam attempt. You must insist on keeping all trade conversations within Demo, note that we cannot help or support you if you are scammed during such trades. 
          </span>
        </div>
  
      <v-alert type="info" variant="tonal" class="d-flex mt-4" style="border-radius: 10px; padding: 8px; font-size: 14px;">
          <span class="warning-text">Please, make a payment of {{ formatBalance(selectedCoin?.bid?.fiat_amount_paid) }} <span>{{ pinia.state.allcountries.find((c) => c.id === selectedCoin.offer?.trading_pair?.fiat.country_id)?.currency_name}}</span>
           using Bank Transfer. {{ selectedCoin.bid.expected_token_quantity }} {{ selectedCoin?.offer?.trading_pair?.crypto?.token?.name }} will be added to your Crypto wallet</span>
      </v-alert>
  
        <div :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'" class="d-flex mt-4">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#64748B" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
              <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"/>
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
            </svg>
          </div>
          <span class="warning-text ml-3" :class="isDark ? 'text-dark' : 'text-light'"> Make your payment, We recommend the buyer uploads a screenshot of the transaction, featuring the transaction reference number, as proof of payment.</span>
        </div>
  
        <div :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'" class="d-flex mt-4 mb-4">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#64748B" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
              <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"/>
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
            </svg>
          </div>
          <span class="warning-text ml-3" :class="isDark ? 'text-dark' : 'text-light'"> 
          In case of any form of dispute, click on the dispute  
          <v-btn @click="toggleDispute()" class="primary-btn1 mt-2" style="width: 100%; height: 40px; border-radius: 10px !important; font-weight: 600; font-size: 16px; color: white;">Register Dispute</v-btn>
          </span>
        </div>
  
  
      </div>
    <!-- </v-dialog> -->



      <div class="chat-headings messages-container" ref="scrollContainer" > 
    
      
        <div class="name-div" :class="isDark ? 'Dashboard-navbar':'Dashboard-navbar-light'"> 

          

          <div style="position: relative; display: flex; justify-content: space-between; width: 800px;">
            <div class="d-flex">
              <img :src="selectedCoin?.offer?.user?.profile_image || '/img/Bitcoin.png'" class="mr-2" style="width: 40px; height: 40px; border-radius: 40px;"/>
              <div class="d-flex" style="flex-direction: column;">
                <div v-if="pinia.state?.user?.kyc_verified" style="display: flex; align-items: center">
                    <span style="font-size: 16px; font-style: normal; font-weight: 600;">{{ selectedCoin?.offer?.user?.username }}</span>
                    <img src="/svg/verified.svg" />
                </div>
                <span :style="{ color: pinia.state.OnlineCheck.is_online ? 'green' : 'grey', fontSize: '12px', fontStyle: 'normal', fontWeight: '400' }">
                  {{ pinia.state.OnlineCheck.is_online ? 'Online' : 'Offline' }}
                </span>

              </div>
            </div>

            <div class="d-flex" style="align-items: center;">          

                  <v-menu v-model="menu" :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                      <v-btn v-bind="props" class="primary-btn1" style="border-radius: 10px !important; font-weight: 600; color: white;">View Payment details</v-btn>
                    </template>

                    <v-card width="330" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 16px; padding: 20px; border: 1px solid  #303A46; margin-top: 20px;">

                      <span class="text-center" style="font-family: Manrope; display: block; font-size: 16px; font-style: normal; font-weight: 600; line-height: 150%;">Payment Details</span>
                        
                      <div style="display: flex; align-items: center; justify-content: space-between;">
                        <div style="display: grid; line-height: 30px;">
                          <span class="trade-text">Ammount to Pay</span>
                          <span class="trade-text">Limit</span>
                          <span class="trade-text">Name</span>
                          <span class="trade-text">Bank account Number</span>
                          <span class="trade-text">Bank Name</span>
                          <span class="trade-text">Payment Method</span>
                        </div>
                        <div style="display: grid; line-height: 30px;">
                          <span style="font-size: 14px; display: flex;justify-content: flex-end;" :class="isDark ? 'text-dark' : 'text-light'">{{ formatBalance(selectedCoin?.bid?.fiat_amount_paid) }}</span>
                          <span style="font-size: 14px; display: flex;justify-content: flex-end;" :class="isDark ? 'text-dark' : 'text-light'">{{ formatBalance(selectedCoin?.offer.trading_pair?.fiat?.minimum_buy_limit) }} - {{ formatBalance(selectedCoin?.offer.trading_pair?.fiat?.maximum_buy_limit) }}</span>
                          <span style="font-size: 14px; display: flex;justify-content: flex-end;" :class="isDark ? 'text-dark' : 'text-light'"> {{ selectedCoin?.offer.user.name }}</span>
                          <span style="font-size: 14px; display: flex;justify-content: flex-end;" :class="isDark ? 'text-dark' : 'text-light'">Live Chat</span>
                          <span style="font-size: 14px; display: flex;justify-content: flex-end;" :class="isDark ? 'text-dark' : 'text-light'"> Live Chat </span>
                          <span style="font-size: 14px; display: flex;justify-content: flex-end;" :class="isDark ? 'text-dark' : 'text-light'"> Bank Transfer </span>
                        </div>
                      </div>

                      <v-alert type="info" variant="tonal" style="font-size: 14px; border-radius: 10px; margin-top: 10px; padding: 10px">
                        Never release Cryptocurrency before actually receiving the payment! Do Not trust anyone who ask you to release coin before payment
                      </v-alert>

                      <v-btn @click="release_order()" class="primary-btn1 mt-4" style="width: 100%; height: 45px; border-radius: 10px !important; font-weight: 600">Release Coin</v-btn>
                    </v-card>


                </v-menu>

            </div>
          </div> 
        </div>



        <div  style="height: 580px; max-height: 700px; overflow-y: auto; position: relative;">

          <div v-if="!showTextarea">

            <div :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 12px; width: 90px; height: 46px; margin: auto; margin-top: 80px; margin-bottom: 25px">
              <span  style="font-size: 10px;  font-weight: 400; line-height: 26px;  display: flex; justify-content: center; padding-top: 12px ">{{chatDate}}</span>
            </div>
  
            <div class="ma-2 custom-msg" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 0px 24px 24px 24px; padding: 30px; width: 60%;">
              
                <span style="font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 400; line-height: 24px;letter-spacing: 0.1px;">
                    <span style="font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 600; line-height: 24px; letter-spacing: 0.1px;"> You're buying {{ selectedCoin.bid.expected_token_quantity }} {{ selectedCoin?.offer?.trading_pair?.crypto?.token?.name }}  for {{ formatBalance(selectedCoin?.bid?.fiat_amount_paid) }} 
                    <span>{{ pinia.state.allcountries.find((c) => c.id === selectedCoin.offer?.trading_pair?.fiat.country_id)?.currency_name}}</span>
                      via Bank Transfer.  </span>
                    <div style="display: grid" :class="isDark ? 'text-dark' : 'text-light'">
                    <span class="mb-1 mt-2">Before paying, carefully read the terms of the trade of the advertiser. make sure to use the specified payment method stated in the Ad.</span>
                    </div>
                </span>
            </div>
          
          
            <div v-for="i in pinia.state.chat_messages" :key="i.id">
  
              <div style="display: flex; margin-top: 15px; flex-direction: column;" v-if="i.sender_id !== pinia.state.user.id">
                  <div class="sender-msg" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 0px 24px 24px 24px; display: flex; width: 30%; padding: 20px; color: #fff;">
                    <span style="font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 400; line-height: 24px;  letter-spacing: 0.1px;">{{ i.message }}</span>
                  </div>
                  <img v-if="i.file_url" @click="open_Image(i.id)" :src="i.file_url" height="250" width="250" class="mt-5"/>
                  <span style="font-family: Manrope; font-size: 12px; font-style: normal;font-weight: 400; color: #A4A8AB">{{ formatTime(i.created_at)  }}</span>
              </div>
  
          
              <div class="receiver-msg" style="display: flex; flex-direction: column; align-items: flex-end; margin-top: 15px;"  v-if="i.sender_id == pinia.state.user.id">
                  <div class="receiver-msg" style="border-radius: 24px 24px 0px 24px; border: 1px solid #2873FF; background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF); display: flex; width: 400px; padding: 20px; color: #fff;">
                    <span style="font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 400; line-height: 24px;  letter-spacing: 0.1px;">{{ i.message }}</span>
                  </div>
                  <img v-if="i.file_url" @click="open_Image(i.id)" :src="i.file_url" height="250" width="250" class="mt-5 msg-img"/>
                  <div style="display: flex; align-items: center;">
                    <span style="font-family: Manrope; font-size: 12px; font-style: normal;font-weight: 400; color: #A4A8AB;margin-right: 4px;">{{ formatTime (i.created_at) }}</span>
                    <svg v-if="i.isSendng" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#888888" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"/><rect width="2" height="7" x="11" y="6" fill="#888888" rx="1"><animateTransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect><rect width="2" height="9" x="11" y="11" fill="#888888" rx="1"><animateTransform attributeName="transform" dur="20s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect></svg>
                  <div v-else>
                    <svg class="relative" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12L10 17L20 7" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="48" stroke-dashoffset="48" id="checkmark" />
                      <path d="M5 12L10 17L20 7" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="48" stroke-dashoffset="48" id="checkmark" />
                    </svg>
                  </div>
                  </div>
              </div>
            </div>
  
            
            <div class="dialog-div" style="position: relative; margin-top: 0px;">
              <!-- <div class="chat-border" style="margin-top: 15px;"></div> -->
              <div class="msg-div"  :class="isDark ? 'footer' : 'footer-light'" style="display: flex; justify-content: space-between; align-items: center; position: fixed; bottom: 35px; left: 35%; right: 9%; width: 55%; height: 70px; padding: 0 15px; box-sizing: border-box;">
                  
               <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
  
                  <template v-slot:activator="{ props: activatorProps }">
                    
                      <v-btn class="me-5" v-bind="activatorProps" :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'" style="border-radius: 10px; backdrop-filter: blur(10.5px); min-width: 50px; height: 48px">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                          <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
                        </svg>
                      </v-btn>
                  </template>
  
                  <v-card class="img-dialog-card" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="padding: 30px;">
                    
                    <v-btn icon="mdi-close" @click="dialog = false" :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'" style="display: flex;margin-left: auto; justify-content: right;"></v-btn>
                    <span class="upload-txt" style="font-size: 32px; font-weight: 600; display: flex; justify-content: center;">Upload File</span>
                    
                    <div @click="trigerInput()" style="display: flex; flex-direction: column; margin: auto;"  >
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 16 16" style="display: flex; align-self: center;">
                        <defs>
                          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#2873FF; stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#0B6B96; stop-opacity:1" />
                          </linearGradient>
                        </defs>
                        <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" fill="url(#gradient1)"/>
                      </svg>

                      <img v-if="preview" style="width: 400px;height: 400px;" :src="preview"/>
                      
                      <input ref="fileInput"  @change="onFileChange" type="file" style="display: none;" >
                      <span :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 18px;">Drag and drop files here or 
                        <a href="#" style="text-decoration: none; cursor: pointer;">select</a>
                        from your computer
                      </span>

                    </div>
  
                    <v-btn @click="send_message()" class="primary-btn1 mt-3" style="width: 100; height: 60px; position: relative; width: 100%;">Upload file</v-btn>
                    
                  </v-card>
                </v-dialog>
  
                
                <v-btn @click="autoMsgs = true" :disabled="selectedCoin?.status == 'expired'" :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'" class="me-5" style="border-radius: 10px; backdrop-filter: blur(10.5px); min-width: 50px; height: 48px">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="currentColor">
                          <path d="M9.09302 9.19922V5.19922H11.093V9.19922H15.093V11.1992H11.093V15.1992H9.09302V11.1992H5.09302V9.19922H9.09302ZM10.093 20.1992C4.57002 20.1992 0.0930176 15.7222 0.0930176 10.1992C0.0930176 4.67622 4.57002 0.199219 10.093 0.199219C15.616 0.199219 20.093 4.67622 20.093 10.1992C20.093 15.7222 15.616 20.1992 10.093 20.1992ZM10.093 18.1992C12.2147 18.1992 14.2496 17.3564 15.7499 15.8561C17.2502 14.3558 18.093 12.321 18.093 10.1992C18.093 8.07749 17.2502 6.04266 15.7499 4.54236C14.2496 3.04207 12.2147 2.19922 10.093 2.19922C7.97129 2.19922 5.93645 3.04207 4.43616 4.54236C2.93587 6.04266 2.09302 8.07749 2.09302 10.1992C2.09302 12.321 2.93587 14.3558 4.43616 15.8561C5.93645 17.3564 7.97129 18.1992 10.093 18.1992Z" fill="white"/>
                  </svg>
                </v-btn>
  
                <v-dialog v-model="autoMsgs" width="auto">
                  <v-card max-width="500" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 15px;">
                       <v-list :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'">
                        <v-list-item
                          v-for="(msg, index) in autoMessages"
                          :key="index" @click="selectAutoMsg(msg)" style="padding: 15px;">
                          <v-list-item-title>{{ msg }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                  </v-card>
                </v-dialog>
  
  
  
                <textarea type="text" class="px-3" v-model="message" style="background: inherit !important; width: 100%; height: 50px; border: 1px solid rgba(142, 155, 174, 0.50); outline: none; border-radius: 10px; font-size: 14px;"/>
  
                <button @click.prevent="send_message()" class="ml-5" style="border-radius: 10px; background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF); backdrop-filter: blur(10.5px); width: fit-content; padding: 10px; display: flex; align-items: center;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M16.2896 3.68937C20.1059 2.41937 22.1794 4.49937 20.9173 8.30937L18.0826 16.7994C16.1794 22.5094 13.0542 22.5094 11.1511 16.7994L10.3097 14.2794L7.78547 13.4394C2.06598 11.5394 2.06598 8.42937 7.78547 6.51937L12.3931 4.98937" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.4998 13.8478L14.0857 10.2578" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
  
              </div>
  
            </div>
          </div>



          <div v-else style="margin-top: 120px; width: 805px;" class="dispute-div">
            <span :class="isDark ? 'text-dark' : 'text-light'"><span style="font-weight: 600; font-size: 16px; color: white;">Use this form to report any trade disputes.</span> Provide details of the issue and we will be in touch soon.</span>
            <div class="mt-4">
              <span :class="isDark ? 'text-dark' : 'text-light'" style="font-size: 14px;">Describe the trade dispute</span>
                <textarea style="outline: none; width: 100%; height: 200px;" placeholder="" :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'"></textarea>
            </div>

            <div style="border-radius: 16px; display: flex; justify-content: space-between; align-items: center; margin-top: 20px;" :class="isDark ? 'txn-cards-dark' : 'txn-cards-light'">
              <span style="font-size: 14px; font-weight: 700">Upload supporting evidence </span>
              <v-btn @click="onFileChange()" class="primary-btn1" style="border-radius: 10px !important;">Upload File</v-btn>
            </div>
          </div>


        </div>
      </div>
  </v-container>
</div>

</template>

<script setup>
import { ref, computed, onMounted} from "vue";
import { useTheme } from "vuetify";
import { getMessages, sendMessages, releaseOder } from "@/composables/requests/chats";
import { compressImage } from "@/composables/mixin";
import {uploadUserFile} from "@/composables/requests/file";

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore();
const pageNumber = ref(1);
const loading = ref();
const message = ref('');
const uploadUser_File = ref();
const file_url = ref(null);
const preview = ref();
const chatDate = ref('Today, 8:26 AM')
const myfile = ref(null);
const menu = ref (false);
const fileInputRef = ref(null);
const dialog = ref();
const autoMsgs = ref();
const isMessageSent = ref(null);
const showTextarea = ref(false);
const onlineStatusInvterval = ref();
const refreshingMessagesInterval = ref();

const isSendng = ref(false)

const fileInput = ref(null)

const toggleDispute = () => {
    showTextarea.value = !showTextarea.value;
  }


  const trigerInput = ()=>{
    fileInput.value.click()
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
  console.log(preview)
};

const autoMessages = [
  "Hello! kindly send your account details?",
  "Please provide more details.",
  "I will get back to you shortly.",
  "How fast and reliable is this trade?.",
  "It was nice doing business with you"
];

// Function to handle selecting an auto message
const selectAutoMsg = (msg) => {
  message.value = msg;
  autoMsgs.value = false; // Close the dialog after selection
};

 // Get the selected coin ID from the Pinia store
const selectedCoinId = pinia.state.selected_trade_ID;

const selectedCoin = computed(() =>  pinia.state.allMyOders.find(item => item.id === selectedCoinId));
console.log(selectedCoin)

const get_allchat = async () => {
  try {
    const data = await getMessages(pageNumber.value);
    if (data.success) {
     const  messages = data.data.result
      let arr = [...messages];
        let alldata =  arr;
        alldata.sort((a, b) => a.ordering_number - b.ordering_number);
      pinia.setChat_messages(alldata)

    } else {
      push.error(`${data.message}`);
    }
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};


console.log(selectedCoin.value)


const send_message = async () => {

if(!message.value.trim().length && myfile.value == null) return isSendng.value = false

isSendng.value = true
dialog.value = false

if(myfile.value){
  const compressedImg = await compressImage(myfile.value)
  var formdata = new FormData();
  formdata.append("file",compressedImg);
  const fileUrls = await uploadUserFile(formdata)
  file_url.value = fileUrls.uploaded_file_urls[0];
}

const main_payload = {
  id_: new Date(),
  receiver_id: selectedCoin.value.buyer_id === pinia.state.user.id ? selectedCoin.value.seller_id : selectedCoin.value.buyer_id,
  message: message.value + " ",
  file_url: preview.value,
  reply_message_id: null,
  sender_id: pinia.state.user.id,
  created_at: new Date().toISOString(),
  isSendng: true,
  view:true,
};
 
pinia.state.chat_messages.push(main_payload);


const payload = {
  receiver_id: selectedCoin.value.buyer_id === pinia.state.user.id ? selectedCoin.value.seller_id : selectedCoin.value.buyer_id,
  message: message.value,
  file_url: file_url.value,
  reply_message_id: null,
  p2p_order_id:pinia.state.selected_trade_ID,
};

message.value = '';

delete payload.sender_id
delete payload.created_at

// if (!payload.message) delete payload.message;
if (!payload.file_url) delete payload.file_url;
if (!payload.reply_message_id) delete payload.reply_message_id;

isSendng.value = false



try{
  const sendMsg = async()=>{
    const data = await sendMessages(payload);

    if (data.success) {
      const message = {...data.data,file_url: main_payload.file_url};
      pinia.state.chat_messages.map((msg,index)=>{
        if(msg.id_){
          pinia.state.chat_messages[index] = message;
        }
      });

    }else{
      setTimeout(()=>{
        sendMsg();
      },200)
    }
  }

  sendMsg();

  isSendng.value = false
  file_url.value = null
  preview.value = null


} catch (e) {
  console.log(e);
  isSendng.value = false
}

window.scrollTo(10000, 10000);

// isOpen.value = false

// pinia.state.custom_chat_message = ''

};

const checkUserOnlineStatus = ()=>{
  const checkOnlineStatus = ()=>{
    const nuxtApp = useNuxtApp();
    const $socketClient = nuxtApp.vueApp.config.globalProperties?.$socketClient;
    if($socketClient?.instance?.readyState!=1) return;
    const id = selectedCoin.value.buyer_id === pinia.state.user.id ? selectedCoin.value.seller_id : selectedCoin.value.buyer_id
    let message = {
      check_online_status:{
        user_id: id,
      },
    };
    $socketClient.send(JSON.stringify(message));

    if(typeof $socketClient.onClose == "function") return;

    $socketClient.onClose = () => {
      get_allchat();

      refreshingMessagesInterval.value = setInterval(()=>{
        get_allchat();
      },5_000);
    };

    $socketClient.onOpen = ()=>{
      clearInterval(refreshingMessagesInterval.value);
    }
  }

  if(selectedCoin.value){
    checkOnlineStatus();
    onlineStatusInvterval.value = setInterval(()=>{
      checkOnlineStatus();
    },5_000);
  }
}

const release_order = async () => {

const payload = {
  offer_id: selectedCoinId,
  expected_token_quantity: selectedCoin.value.bid.expected_token_quantity,
  fiat_amount_paid: selectedCoin.value.bid.fiat_amount_paid,
  buyer_id: selectedCoin.value.buyer_id
};

console.log(payload)
    
  try {
    const data = await releaseOder(payload);
    if (data.success) {
      loading.value = false;
      push.success('Transaction succesful')

    } else {
      push.error(`${data.message}`);
      loading.value = false;
      push.error("transaction failed")
    }
  } catch (e) {
    console.log(e);
    loading.value = false;
  }
};


const imageZoom = ref();
const show_image = ref();

const open_Image = (id)=>{
  const item = pinia.state.chat_messages.find(e => e.id === id)
  imageZoom.value = item.file_url
  show_image.value = true
  }


  const triggerFileUpload = () => {
      document.getElementById('file-upload').click();
    };

 

onMounted(() => {
  get_allchat();
  checkUserOnlineStatus();
  window.scrollTo(1000, 1000);
});



const scrollContainer = ref(null);

onMounted(() => {
    scrollToBottom();
});

const scrollToBottom = () => {
  window.scrollTo({
  top: document.querySelector(".messages-container").scrollHeight,
  behavior: 'smooth'
});
};

</script>

<style>


#checkmark {
    animation: drawCheckmark 1s ease-in-out forwards;
  }
  .has-mask {
    clip: rect(10px, 150px, 130px, 10px);
  }
  
  @keyframes drawCheckmark {
    to {
      stroke-dashoffset: 0;
    }
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

.footer{
background: rgba(6, 10, 29, 0.60)!important;
backdrop-filter: blur(50px) !important;
}

.footer-light {
background: rgba(255, 255, 255, 0.60) !important;
backdrop-filter: blur(50px);
}

.trade-text{
font-size: 14px;
font-weight: 600;
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

.warning-text{
  font-size: 14px;
}

.v-alert__prepend {
  margin-inline-end: 8px;
}
.v-dialog--fullscreen > .v-overlay__content {
  border-radius: 0;
  margin: 0;
  padding: 0;
  width: 65% !important;
  height: 100%;
  max-width: 65% !important;
  max-height: 100%;
  overflow-y: auto;
  position: relative !important;
  display: flex !important;
  margin-inline-start: auto !important;

}



@media screen and (max-width: 600px) {
.custom-msg{
  width: 81% !important;
  padding: 15px !important;
}
.msg-div{
  width: 100% !important;
  right: 0 !important;
  left: 0 !important;
  bottom: 0 !important;
}
.receiver-msg{
  width: 220px !important;
  margin-inline-start: auto !important;
  border-radius: 16px 16px 0px !important;
  padding: 15px !important;
  margin-top: 0px !important;
}
.sender-msg{
  width: 60% !important;
  padding: 15px !important;
  flex-wrap: nowrap !important;
}
.img-dialog-card{
  padding: 20px !important;
}
.upload-txt{
  font-size: 20px !important;
}
.v-dialog--fullscreen > .v-overlay__content {
  border-radius: 0;
  margin: 0;
  padding: 0;
  width: 100% !important;
  height: 100%;
  max-width: 100% !important;
  max-height: 100%;
  overflow-y: auto;
  position: relative !important;
  display: flex !important;
  margin-inline-start: auto !important;

}
.msg-img{
  width: 150px !important;
  height: 150px !important;
}
.name-div{
  left: 0 !important;
  right: 0 !important;
  padding: 18px !important;
}
.dispute-div{
  width: 100% !important;
}

}

</style>