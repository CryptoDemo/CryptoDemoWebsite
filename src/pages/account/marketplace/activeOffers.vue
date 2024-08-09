<template>
  <div>
    <Header :hide="true" :icon1="true" :icon3="true" :icon2="true" :wallet="true" />
    <v-container style="display: flex; margin-top: 110px;">
     
        <div class="pa-2 flex-lg-and-up hidden-sm-and-down">
          <Sd-nav1 style="border: none;" />
        </div>
     


        <div class="offer-body" style="width: 100%; margin-left: 16px;">
            <div class="acct-settings" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="display: flex; justify-content: space-between; margin-bottom: 40px; margin-top: 12px; border: none">
              <span class="marketPlace" style="font-size: 24px; font-style: 28px; font-weight: 600; color: #5892FF;">Marketplace</span>
              <span class="mail-text" :class="isDark ? 'text-dark' : 'text-light'"> {{ pinia.state.user?.email }}</span>
            </div>
      

            <div class="d-flex">
         
                <div class="offer-container" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="height: 480px; margin-bottom: 300px;  padding-top: 2px; width: 70%; overflow: scroll; padding-left: 16px; padding-right: 16px">

                    <div class="button-container py-3" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="display: flex; border-radius: 10px; align-items: center;">
                      <v-btn class="me-3" :class="[selectedScreen ? 'personalBtn' : isDark ? 'marketBtn' : 'marketBtn-light']" @click.prevent="selectedScreen=true" >Market Offers</v-btn>
                      <v-btn :class="[!selectedScreen ? 'personalBtn' : isDark ? 'marketBtn' : 'marketBtn-light']" @click.prevent="selectedScreen=false">Personal Offers</v-btn>

                      <v-menu>
                        <template v-slot:activator="{ props }">
                          <button v-bind="props">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-filter-circle-fill hidden-lg-and-up flex-sm-and-down ml-6" viewBox="0 0 16 16">
                                <defs>
                                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#2873FF; stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#0B6B96; stop-opacity:1" />
                                  </linearGradient>
                                </defs>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M3.5 5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1M5 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" fill="url(#gradient1)"/>
                            </svg>
                          </button>
                        </template>

                        <v-list @click.stop="" style="border-radius: 10px; width: 250px; padding: 10px" :class="isDark ? 'profile-cards-dark':'profile-cards-light'"  >
                        
                            <span class="resend-code ml-1">Filter By:</span>
                        
                            <v-menu>
                              <template v-slot:activator="{ props }">
                                <v-btn @click.prevent="toggleChevron()" v-bind="props" :class="isDark ? 'offers-cards-dark' : 'offers-cards-light'"  style="width: fit-content; height: 50px; margin-top: 8px; border-radius: 10px;  box-shadow: none; letter-spacing: 0px;width: 100%; display: flex; justify-content: space-between; text-transform: capitalize;"> 
                                  <span class="currency-list">{{ preferredTokenCurrency }}</span>
                                  <span v-if="!preferredTokenCurrency" class="currency-list">All currencies</span>
                                  <div style="display: flex; position: absolute; right: 1%">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z" />
                                    </svg>
                                  </div>
                                </v-btn>
                              </template>

                              <v-list style="border-radius: 10px;" :class="isDark ? 'profile-cards-dark':'profile-cards-light'"  >
                                <v-list-item>
                                  <v-row dense style="max-width: 210px;">
                                      <v-col v-for="(currency, index) in pinia.state.allcountries" class="" :key="index" >
                                        <v-list-item-title  @click="preferredTokenCurrency=currency.currency_name"> 
                                          <div style="display: flex; justify-content: flex-start;">
                                            <span class="currency-list my-2">{{ currency.currency_name }}</span>
                                          </div>

                                        </v-list-item-title>
                                      </v-col>
                                  </v-row>
                                </v-list-item>
                              </v-list>
                            </v-menu>  

                            <v-menu>
                              <template v-slot:activator="{ props }">
                                <v-btn @click.prevent="toggleChevron()" v-bind="props" :class="isDark ? 'offers-cards-dark' : 'offers-cards-light'"  style="width: fit-content; height: 50px; margin-top: 3px; border-radius: 10px; margin-top: 10px;  box-shadow: none; letter-spacing: 0px;width: 100%; display: flex; justify-content: space-between; text-transform: capitalize;"> 
                                  <span class="currency-list">{{ selectedPaymentMethod }}</span>
                                  <div style="display: flex; position: absolute; right: 1%">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z" />
                                    </svg>
                                  </div>
                                </v-btn>
                              </template>
                              
                              <v-list style="border-radius: 10px;" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'">
                                <v-list-item>
                                  <v-row dense style="max-width: 210px;">
                                    <v-col v-for="(method, index) in paymentMethods" :key="index" sm="12">
                                      <v-list-item @click="selectedPaymentMethod = method">
                                        <v-list-item-content>
                                          <v-list-item-title>
                                            <div style="display: flex; justify-content: flex-start;">
                                              <span class="currency-list my-2">{{ method }}</span>
                                            </div>
                                          </v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>
                                    </v-col>
                                  </v-row>
                                </v-list-item>
                              </v-list>

                            </v-menu>  

                            <v-menu>
                              <template v-slot:activator="{ props }">
                                <v-btn  v-bind="props" :class="isDark ? 'offers-cards-dark' : 'offers-cards-light'"  style="width: fit-content; height: 50px; margin-top: 3px; border-radius: 10px; margin-top: 10px;  box-shadow: none; letter-spacing: 0px;width: 100%; display: flex; justify-content: space-between; text-transform: capitalize;"> 
                                  <div class="d-flex" style="align-items: center; justify-content: space-between;">
                                    <img width="25" class="me-2" :src="tokenIcon" style="" />
                                    <span class="slt">{{ tokenSymbol }}</span>
                                    <span v-if="!tokenSelected" style="position: absolute;">All Coins</span>
                                  </div>
                                  
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']" style="position: absolute; display: flex; right: 5px">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z" />
                                    </svg>
                                </v-btn>
                              </template>

                              <v-list :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 15px; margin-top: 10px;">
                                <v-list-item style="display: contents">
                                  <v-row dense style="max-width: 240px; height: 250px; overflow: scroll;">
                                    <div v-for="tokens in pinia.state.tokenLists" :key="tokens.id" style="width: 100%;">
                                      <v-list-item @click="selectToken(tokens)" style="display: flex;">
                                        <div style="display: flex; align-items: center;">
                                          <img :src="tokens.icon" width="30" class="me-2" />
                                          <span class="currency-list">{{ tokens.name }}</span>
                                        </div>
                                      </v-list-item>
                                    </div>
                                  </v-row>
                                </v-list-item>
                              </v-list>
                            </v-menu>
                    
                            <v-radio-group v-model="selectedPriceRange" class="mt-2" style="margin-bottom: -20px;">
                              <div style="display: flex; align-items: center;">
                                <v-radio color="info"  value="one"></v-radio>
                                <span :class="{ 'resend-code': selectedPriceRange === 'one' }" style="font-size: 14px; font-weight: 500;">1,000 & below</span>
                              </div>

                              <div style="display: flex; align-items: center;">
                                <v-radio color="info"  value="two"></v-radio>
                                <span :class="{ 'resend-code': selectedPriceRange === 'two' }" style="font-size: 14px; font-weight: 500;">1,000 - 10,000</span>
                              </div>

                              <div style="display: flex; align-items: center;">
                                <v-radio color="info"  value="three"></v-radio>
                                <span :class="{ 'resend-code': selectedPriceRange === 'three' }" style="font-size: 14px; font-weight: 500;">10,000 - 100, 000</span>
                              </div>

                              <div style="display: flex; align-items: center;">
                                <v-radio color="info" value="four"></v-radio>
                                <span  :class="{ 'resend-code': selectedPriceRange === 'four' }" style="font-size: 14px; font-weight: 500;">100, 000 - 500, 000</span>
                              </div>

                              <div style="display: flex; align-items: center;">
                                <v-radio color="info"  value="five"></v-radio>
                                <span :class="{ 'resend-code': selectedPriceRange === 'five' }" style="font-size: 14px; font-weight: 500;">500, 000 & above</span>
                              </div>
                            </v-radio-group>

                            <v-btn @click="resetFilters()" class="primary-btn1" style="width: 100%; color: white; border-radius: 8px !important;">Clear filters</v-btn>
                    
                        </v-list>
                      </v-menu>

                    </div>

              

                  <div v-if="selectedScreen" class="offers-div d-flex" style="overflow: scroll; flex-direction: column; justify-content: space-between;">



                      <div class="mb-3 px-4" v-for="offer in filteredOffers" :key="offer.id" :class="isDark ? 'offers-cards-dark' : 'offers-cards-light'">
  
                        <div style="align-items: center; border: none; align-items: baseline; display: flex; justify-content: space-between;">
                          <div>
                            <div style="display: flex; align-items: center; line-height: 30px;">
                              <span class="me-3" style="font-size: 14px; font-weight: 600;">{{ offer?.user?.username}}</span>
                              <!-- <img :src="offer.sellerCountry" style=" border-radius: 4px; height: 28px; width: 45px;"/> -->
                            </div>
  
                            <div class="d-flex" style="line-height: 30px;">
                              <img :src="offer.trading_pair?.crypto?.token?.icon" class="me-2" width="20px" />
                              <span class="me-1" style="color: #8e9bae; font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 600;">{{offer.trading_pair?.crypto?.token?.name }}</span>
                            </div>
  
                            <div style="display: flex; flex-direction: column; line-height: 30px;">
                              <span class="flex-lg-and-up hidden-sm-and-down" :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal;font-weight: 500;">Minimum-Maximum buy limit</span>
                              <span class="hidden-lg-and-up flex-sm-and-down" :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal;font-weight: 500;">buy limit</span>
                              <span :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal;  font-weight: 500;  ">Unit value</span>
                              <span  :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal;  font-weight: 500;  ">Price model</span>
  
                                <div class="d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16" v-if="!pinia.state.user.kyc_verified">
                                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                  </svg>
                                  <span v-if="!pinia.state.user.kyc_verified" style="font-family: Manrope; font-size: 14px; font-style: normal; margin-left: 4px; font-weight: 500;  color: orangered ">Get Verified to purchase coin</span>
                                </div>
                            </div>
  
                          </div>
  
  
                          <div style="display: flex; flex-direction: column; justify-content: flex-end; line-height: 30px;">
                            <span v-if="offer.user?.is_verified" class="resend-code" style="font-weight: 500;  text-align-last: right; font-size: 14px;">Verified</span>
                            <span style="font-size: 14px; color: orangered" v-else>Unverified User</span>
                            <span style="display: flex; justify-content: end; font-size: 14px; font-weight: 600;"> {{ offer?.trading_pair?.crypto?.unit_value }} {{ offer?.trading_pair?.crypto?.token.symbol }}</span>
                            <span :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 400; align-self: self-end;">{{
                                formatBalance(offer?.trading_pair?.fiat?.minimum_buy_limit) }} - {{formatBalance(offer?.trading_pair?.fiat?.maximum_buy_limit) }} {{ offer?.countryCurrencyName}}
                            </span>
  
                            <span :class="isDark ? 'text-dark' : 'text-light'" style=" font-family: Manrope; font-size: 14px; font-style: normal;  font-weight: 600; text-align-last: right;">{{
                                offer?.trading_pair?.fiat?.unit_value }} {{ offer.countryCurrencyName }} </span>
                            <span :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px;font-style: normal; font-weight: 400;  align-self: self-end;"
                              v-if="offer?.trading_pair?.fiat?.use_fixed_price">Fixed Price</span>
                            <span :class="isDark ? 'text-dark' : 'text-light'" style="font-family: Manrope; font-size: 14px; font-style: normal; font-weight: 400;  align-self: self-end;" 
                            v-else>Market Price</span>
                          </div>
                        </div>
                     

                       <div class="mb-3">                            
                          <v-dialog max-width="500">
                            <template v-slot:activator="{ props: activatorProps }">
                              <v-btn @click.prevent="pinia.state.selected_coin_to_buy_from_marketplace = offer?.id; pinia.state.selected_coin_to_buy_from_marketplace_userID = offer?.user?.id" :disabled="!pinia.state.user.kyc_verified" v-bind="activatorProps" class="smaller-btn mt-2">Buy Offer</v-btn>
                            </template>            
      
                            <template v-slot:default="{  }">
                              <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 15px; box-shadow: none;">
                                <v-card-text>
                                  <h3 class="text-center py-3">View Offer</h3>
                                  <span style="font-size: 14px;">By continuing, you will be buying <span style="font-weight: 600;">{{ offer.trading_pair?.crypto?.token?.name }}</span> from {{ offer?.user?.username }}</span>
                                  <input type="number" placeholder="Enter Ammount to pay" v-model="amount_to_pay" :class="isDark ? 'txn-cards-dark':'txn-cards-light'" style="outline: none; height: 60px; padding-right: 25px!important; position: relative; border-radius: 15px; width: 100%; margin-top: 10px; padding-left: 15px;"/>
                        
                                  <v-btn style="min-width: 70px; height: 56px; position: absolute; margin-top: 12px; border-radius: 15px; background: rgba(19, 29, 53, 1); box-shadow: none; right: 26px; letter-spacing: 0px;  text-transform: capitalize;"> 
                                    <span class="currency-list"> {{ offer?.countryCurrencyName }} </span>
                                  </v-btn>

                                  <span style="font-size: 14px;" :class="isDark ? 'text-dark':'text-light'" >Range Unit Value 
                                    <span style="font-weight: 600; font-size: 14px;" :class="isDark ? 'card-title':'card-title--light'">{{offer?.trading_pair?.fiat?.minimum_buy_limit }} - {{ offer?.trading_pair?.fiat?.maximum_buy_limit }} {{ offer?.countryCurrencyName }} </span>
                                  </span>

                                <div class="mt-5">
                                  <span style="font-weight: 600; font-size: 14px;">Expected ammount you will receive</span>
                                  <input type="number" disabled placeholder="Ammount to receive" v-model="ammount_to_receive" :class="isDark ? 'txn-cards-dark':'txn-cards-light'" style="outline: none; height: 60px; padding-right: 25px!important; position: relative; border-radius: 15px; width: 100%; margin-top: 10px; padding-left: 15px;"/>
                          
                                  <v-btn style="min-width: 70px; height: 56px; position: absolute; margin-top: 12px; border-radius: 15px; background: rgba(19, 29, 53, 1); box-shadow: none; right: 26px; letter-spacing: 0px;  text-transform: capitalize;"> 
                                    <img :src="offer.trading_pair?.crypto?.token?.icon" width="30px" />
                                  </v-btn>

                                  <span style="font-size: 14px;" :class="isDark ? 'text-dark':'text-light'">You will receive this ammount in 
                                    <span style="font-weight: 600; font-size: 14px;" :class="isDark ? 'card-title':'card-title--light'">{{ offer.trading_pair?.crypto?.token?.symbol }}</span>
                                  </span>
                                </div>

                                </v-card-text>
      
                                <div class="px-5 mb-3" style="justify-content: space-between;">
                                  <v-btn @click="Buy_OfferDirectly()" style="width: 100%; height: 50px; margin-bottom: 10px; font-weight: 600; border: 1px solid var(--Primary-80, #5892FF); background: inherit; border-radius: 16px; color: #2873FF; letter-spacing: 0px; text-transform: unset;">Buy directly using fiat wallet</v-btn>
                                  <v-btn class="primary-btn1" @click="sellerDialog = true" style="width: 100%; height: 50px; margin-bottom: 10px; font-weight: 600;">Chat with seller</v-btn>

                                  <v-dialog v-model="sellerDialog" max-width="500">
                                    <v-card :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="padding: 20px; border-radius: 10px;">
                                      <span class="text-center mb-4" :class="isDark ? 'text-dark':'text-light'" style="font-size: 14px;">By continuing you will be buying {{ offer.trading_pair?.crypto?.token?.name }} at this rate </span>

                                      <div :class="isDark ? 'txn-cards-dark':'txn-cards-light'" style="font-size: 14px; display: flex; justify-content: space-between; padding: 10px;">

                                        <div :class="isDark ? 'text-dark':'text-light'" style="display: flex; flex-direction: column; line-height: 30px">
                                          <span> Ammount to pay </span>
                                          <span> Ammount to receive </span>
                                          <span> Payment time limit </span>
                                        </div>

                                        <div style="display: flex; flex-direction: column; line-height: 30px; align-items: self-end; font-weight: 600">
                                          <span> {{ formatBalance(amount_to_pay) }} {{ offer?.countryCurrencyName }}  </span>
                                          <span> {{ formatBalance(ammount_to_receive) }} {{ offer.trading_pair?.crypto?.token?.symbol }}</span>
                                          <span> 15 minutes </span>
                                        </div>
                                      </div>

                                      
                                      <span style="font-size: 14px; margin-top: 15px; margin-top: 10px">Select Payment method</span>
                                      <v-menu>
                                        <template v-slot:activator="{ props }">
                                          <v-btn @click.prevent="toggleChevron()" v-bind="props" :class="isDark ? 'txn-cards-dark':'txn-cards-light'"  style="width: fit-content; height: 50px; margin-top: 2px; border-radius: 10px; margin-top: 10px;  box-shadow: none; letter-spacing: 0px;width: 100%; display: flex; justify-content: space-between; text-transform: capitalize;"> 
                                            <span class="currency-list">{{ selectedPaymentMethod }}</span>
                                            <div style="display: flex; position: absolute; right: 1%">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z" />
                                              </svg>
                                            </div>
                                          </v-btn>
                                        </template>
                                        
                                        <v-list style="border-radius: 10px;" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'">
                                          <v-list-item>
                                            <v-row dense style="max-width: 210px;">
                                              <v-col v-for="(method, index) in paymentMethods" :key="index" sm="12">
                                                <v-list-item @click="selectedPaymentMethod = method">
                                                  <v-list-item-content>
                                                    <v-list-item-title>
                                                      <div style="display: flex; justify-content: flex-start;">
                                                        <span class="currency-list my-2">{{ method }}</span>
                                                      </div>
                                                    </v-list-item-title>
                                                  </v-list-item-content>
                                                </v-list-item>
                                              </v-col>
                                            </v-row>
                                          </v-list-item>
                                        </v-list>

                                      </v-menu> 

                                      <span style="font-size: 14px; margin-top: 6px; font-weight: 600">Please read the advisers terms before placing order.</span>
                                      <ul class="list-bullets-styled my-3" :class="isDark ? 'text-dark':'text-light'">
                                          <li>Keep all communications and transactions within the platform. Avoid sharing personal information or conducting transactions outside the platform, as this increases the risk of scams.</li>
                                          <li>Some banks take up to 30 - 40 minutes for the transfer to be clear.</li>
                                          <li>send a screenshot proof of the payment as soon as the payment is done.</li>
                                      </ul> 

                                      <v-btn @click="Buy_OfferP2P()" class="primary-btn1" style="height: 50px; font-size: 16px; font-weight: 600; margin-top: 10px;">Place order</v-btn>

                                      
                                    </v-card>
                                  </v-dialog>


                                </div>
                              </v-card>
                            </template>

                          </v-dialog> 
                        </div> 
                     
                      </div> 

                    <div v-if="!filteredOffers.length"
                      style="text-align: center; margin-top: 80px; display: flex; flex-direction: column;align-items: center;">
                      <img src="/svg/blue-market.svg" width="150" />
                      <span class="mt-6" :class="isDark ? 'text-dark' : 'text-light'">No records found</span>
                    </div>

                  </div> 

                  <div v-else style="height: 550px; margin-bottom: 300px; overflow: scroll;">
                    <MyOffers />
                  </div>

                </div>

                <div class="ml-5 flex-lg-and-up hidden-sm-and-down" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="padding: 10px; border-radius: 10px; width: 30%;">
                  <span class="resend-code ml-1">Filter By:</span>
              
                  <v-menu>
                    <template v-slot:activator="{ props }">
                      <v-btn @click.prevent="toggleChevron()" v-bind="props" :class="isDark ? 'offers-cards-dark' : 'offers-cards-light'"  style="width: fit-content; height: 50px; margin-top: 8px; border-radius: 10px;  box-shadow: none; letter-spacing: 0px;width: 100%; display: flex; justify-content: space-between; text-transform: capitalize;"> 
                        <span class="currency-list">{{ preferredTokenCurrency }}</span>
                        <span v-if="!preferredTokenCurrency" class="currency-list">All currencies</span>
                        <div style="display: flex; position: absolute; right: 1%">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z" />
                          </svg>
                        </div>
                      </v-btn>
                    </template>

                    <v-list style="border-radius: 10px;" :class="isDark ? 'profile-cards-dark':'profile-cards-light'"  >
                      <v-list-item>
                        <v-row dense style="max-width: 210px;">
                            <v-col v-for="(currency, index) in pinia.state.allcountries" class="" sm="12" :key="index" >
                              <v-list-item-title  @click="preferredTokenCurrency=currency.currency_name"> 
                                <div style="display: flex; justify-content: flex-start;">
                                  <span class="currency-list my-2">{{ currency.currency_name }}</span>
                                </div>

                              </v-list-item-title>
                            </v-col>
                        </v-row>
                      </v-list-item>
                    </v-list>
                  </v-menu>  

                  <v-menu>
                    <template v-slot:activator="{ props }">
                      <v-btn @click.prevent="toggleChevron()" v-bind="props" :class="isDark ? 'offers-cards-dark' : 'offers-cards-light'"  style="width: fit-content; height: 50px; margin-top: 3px; border-radius: 10px; margin-top: 10px;  box-shadow: none; letter-spacing: 0px;width: 100%; display: flex; justify-content: space-between; text-transform: capitalize;"> 
                        <span class="currency-list">{{ selectedPaymentMethod }}</span>
                        <div style="display: flex; position: absolute; right: 1%">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z" />
                          </svg>
                        </div>
                      </v-btn>
                    </template>
                    
                    <v-list style="border-radius: 10px;" :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'">
                      <v-list-item>
                        <v-row dense style="max-width: 210px;">
                          <v-col v-for="(method, index) in paymentMethods" :key="index" sm="12">
                            <v-list-item @click="selectedPaymentMethod = method">
                              <v-list-item-content>
                                <v-list-item-title>
                                  <div style="display: flex; justify-content: flex-start;">
                                    <span class="currency-list my-2">{{ method }}</span>
                                  </div>
                                </v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-col>
                        </v-row>
                      </v-list-item>
                    </v-list>

                  </v-menu>  

                  <v-menu>
                    <template v-slot:activator="{ props }">
                      <v-btn  v-bind="props" :class="isDark ? 'offers-cards-dark' : 'offers-cards-light'"  style="width: fit-content; height: 50px; margin-top: 3px; border-radius: 10px; margin-top: 10px;  box-shadow: none; letter-spacing: 0px;width: 100%; display: flex; justify-content: space-between; text-transform: capitalize;"> 
                        <div class="d-flex" style="align-items: center; justify-content: space-between;">
                          <img width="25" class="me-2" :src="tokenIcon" style="" />
                          <span class="slt">{{ tokenSymbol }}</span>
                          <span v-if="!tokenSelected" style="position: absolute;">All Coins</span>
                        </div>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']" style="position: absolute; display: flex; right: 5px">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z" />
                          </svg>
                      </v-btn>
                    </template>

                    <v-list :class="isDark ? 'profile-cards-dark' : 'profile-cards-light'" style="border-radius: 15px; margin-top: 10px;">
                      <v-list-item style="display: contents">
                        <v-row dense style="max-width: 240px; height: 250px; overflow: scroll;">
                          <div v-for="tokens in pinia.state.tokenLists" :key="tokens.id" style="width: 100%;">
                            <v-list-item @click="selectToken(tokens)" style="display: flex;">
                              <div style="display: flex; align-items: center;">
                                <img :src="tokens.icon" width="30" class="me-2" />
                                <span class="currency-list">{{ tokens.name }}</span>
                              </div>
                            </v-list-item>
                          </div>
                        </v-row>
                      </v-list-item>
                    </v-list>
                  </v-menu>
          
                  <v-radio-group v-model="selectedPriceRange" class="mt-2" style="margin-bottom: -20px;">
                    <div style="display: flex; align-items: center;">
                      <v-radio color="info"  value="one"></v-radio>
                      <span :class="{ 'resend-code': selectedPriceRange === 'one' }" style="font-size: 14px; font-weight: 500;">1,000 & below</span>
                    </div>

                    <div style="display: flex; align-items: center;">
                      <v-radio color="info"  value="two"></v-radio>
                      <span :class="{ 'resend-code': selectedPriceRange === 'two' }" style="font-size: 14px; font-weight: 500;">1,000 - 10,000</span>
                    </div>

                    <div style="display: flex; align-items: center;">
                      <v-radio color="info"  value="three"></v-radio>
                      <span :class="{ 'resend-code': selectedPriceRange === 'three' }" style="font-size: 14px; font-weight: 500;">10,000 - 100, 000</span>
                    </div>

                    <div style="display: flex; align-items: center;">
                      <v-radio color="info" value="four"></v-radio>
                      <span  :class="{ 'resend-code': selectedPriceRange === 'four' }" style="font-size: 14px; font-weight: 500;">100, 000 - 500, 000</span>
                    </div>

                    <div style="display: flex; align-items: center;">
                      <v-radio color="info"  value="five"></v-radio>
                      <span :class="{ 'resend-code': selectedPriceRange === 'five' }" style="font-size: 14px; font-weight: 500;">500, 000 & above</span>
                    </div>
                  </v-radio-group>

                  <v-btn @click="resetFilters()" class="primary-btn1" style="width: 100%; color: white; border-radius: 8px !important;">Clear filters</v-btn>
                
                </div>

            </div>

        </div>

    </v-container>
    <Footer class="flex-lg-and-up hidden-sm-and-down" />
    <Mobile-footer class="mobile-footer" />
  </div>
</template>
<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useTheme } from "vuetify";
import { getMarketOffers } from "@/composables/requests/marketplace";
import { createOrder, createOrderforP2P } from "@/composables/requests/marketplace";


const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore();
const selectedScreen = ref(true);
const pageNumber = ref(1);
const loading = ref(false);
const tokenIcon = ref();
const tokenSymbol = ref();
const amount_to_pay = ref();
const ammount_to_receive = ref();
const offers = ref([]);
const isCreating = ref(false);
const tokenSelected = ref(false);
const preferredTokenCurrency = ref();
const selectedPaymentMethod = ref("Bank Transfer");
const method = ref();
const selectedPriceRange = ref();
const paymentMethods = ['Online Wallet', 'Cash Deposit', 'Bank Transfer'];
const sellerDialog = ref(false);
const marketplace  = pinia.state.MarketPlace;
const selectToken = (tokens) => {
  tokenIcon.value = tokens.icon;
  tokenSymbol.value = tokens.symbol;
  tokenSelected.value = true;
};

const get_allMarket_Offers = async () => {
  loading.value = true;
  try {
    const data = await getMarketOffers(pageNumber.value);
    if (data.success) {
      const updatedOffers = data.data.result.map(offer => {
        const countryId = offer.trading_pair?.fiat.country_id;
        const countryCurrencyName = countryId 
          ? pinia.state.allcountries.find(country => country.id === countryId)?.currency_name || 'Unknown'
          : 'Unknown';

        return { ...offer, countryCurrencyName };
      });

      offers.value = updatedOffers;
      pinia.setMarketPlace(updatedOffers);
    } else {
      push.error(`${data.message}`);
    }
  } catch (e) {
    console.error('Failed to fetch market offers:', e);
  } finally {
    loading.value = false;
  }
};

const offerID = computed(() => pinia.state.MarketPlace.map(item => item.id));

const selectedCoinId = computed(() => pinia.state.selected_coin_to_buy_from_marketplace);
const productID = computed(() => offerID.value.find(id => id === selectedCoinId.value));

watch(productID, (newVal) => {
  // Handle changes to productID here
});

const Buy_OfferDirectly = async () => {
  const payload = {
    purchase_amount: amount_to_pay.value
  };
  
  isCreating.value = true;
  
  try {
    const data = await createOrder(payload, productID.value);

    if (data.success) {
      // Reset amount_to_pay to 0 or a default value appropriate for your use case
      amount_to_pay.value = 0;
      navigateTo('/account/trade/wallet')

      push.success('transaction successful')
    } else {
      // Display the error message to the user
      push.error(data.message || 'An error occurred while creating the order');
    }
  } catch (e) {
    // Log the error with context and show a user-friendly message
    console.error('Error during order creation:', e);
    push.error('Failed to create the order. Please try again.');
  } finally {
    isCreating.value = false;
  }
};

const Buy_OfferP2P = async () => {
  // Construct the payload with the necessary data
  const payload = {
    seller_id: pinia.state.selected_coin_to_buy_from_marketplace_userID,
    offer_id: pinia.state.selected_coin_to_buy_from_marketplace,
    bid: {
      expected_token_quantity: ammount_to_receive.value, // Amount of token expected
      fiat_amount_paid: amount_to_pay.value, // Amount of fiat paid
    }
  };

  // Indicate that the order creation process has started
  isCreating.value = true;

  try {
    // Attempt to create the P2P order
    const data = await createOrderforP2P(payload);

    if (data.success) {
      // Reset the amount to pay and amount to receive after successful order creation
      amount_to_pay.value = 0; // or any default value if needed
      ammount_to_receive.value = 0; // or any default value if needed

      // Notify the user of the successful order creation
      push.success('Order created successfully!');

      navigateTo('/account/marketplace/trades')
    } else {
      // Display the error message to the user
      push.error(data.message || 'An error occurred while creating the order');
    }
  } catch (error) {
    // Log the error with context and show a user-friendly message
    console.error('Error during order creation:', error);
    push.error('Failed to create the order. Please try again.');
  } finally {
    // Indicate that the order creation process has ended
    isCreating.value = false;
  }
};



const priceRanges = {
  one: [0, 10000], // Assuming 'below' is meant to be 0 or a similar value
  two: [1000, 10000],
  three: [10000, 100000],
  four: [100000, 500000],
  five: [500000, Infinity]
};

const filteredOffers = computed(() => {
  return offers.value
    .filter(offer => {
      const matchesTokenSymbol = !tokenSymbol.value || offer.trading_pair?.crypto?.token?.symbol === tokenSymbol.value;
      return matchesTokenSymbol;
    })
    .filter(offer => {
      const matchesPreferredTokenCurrency = !preferredTokenCurrency.value || offer?.countryCurrencyName === preferredTokenCurrency.value;
      return matchesPreferredTokenCurrency;
    })
    .filter(offer => {
      if (!selectedPriceRange.value) return true;
      const [minPrice, maxPrice] = priceRanges[selectedPriceRange.value] || [0, Infinity];
      const minLimit = offer.trading_pair?.fiat?.minimum_buy_limit || 0;
      const maxLimit = offer.trading_pair?.fiat?.maximum_buy_limit || Infinity;
      const matchesPriceRange = minLimit >= minPrice && maxLimit <= maxPrice;
      return matchesPriceRange;
    });
});

const matchingCountries = pinia.state.MarketPlace.map(marketplaceEntry => {
  const country = pinia.state.allcountries.find(c => c.country_name === marketplaceEntry.user.country);
  return country ? country.flag_url : null;
});

const resetFilters = () => {
  tokenSymbol.value = ''; // or default value
  preferredTokenCurrency.value = ''; // or default value
  selectedPriceRange.value = ''; // or default value
};



const debouncedUpdate = () => {
  ammount_to_receive.value = null;
  
  marketplace.forEach(item => {
    
    const maxLimit = item?.trading_pair?.fiat?.maximum_buy_limit;
    const minLimit = item?.trading_pair?.fiat?.minimum_buy_limit;
    
    if (amount_to_pay.value >= minLimit && amount_to_pay.value <= maxLimit) {
      const unitValue = item?.trading_pair?.crypto?.unit_value;
      const fiatUnitValue = item?.trading_pair?.fiat?.unit_value;
      
      ammount_to_receive.value = parseFloat(
        (unitValue * amount_to_pay.value) / fiatUnitValue
      );
    } 
  });
};
 // Adjust delay as needed


 const isChevronToggled = ref(false);
 const toggleChevron = () => {
   isChevronToggled.value = !isChevronToggled.value;
 };
 


watch(()=>amount_to_pay.value, (newValue) => {
  if(newValue){
    debounce(debouncedUpdate)
  }
});

onMounted(() => {
  get_allMarket_Offers();
});
</script>

<style scoped>

.smaller-btn {
border-radius: 8px;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);
display: flex;
padding: 6px 16px;
justify-content: center;
align-items: center;
color: #fff;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
text-transform: unset;
letter-spacing: 0px;
box-shadow: none;
width: 100%;
height: 40px;
}

.personalBtn{
border-radius: 10px;
background: var(--linear-card, linear-gradient(270deg, #1DA1DB -11.75%, #2873FF 119.96%));
display: flex;
width: 200px;
height: 45px;
justify-content: center;
align-items: center;
flex-shrink: 0;
font-family: Manrope;
font-size: 15px;
font-style: normal;
font-weight: 700;
box-shadow: none;
color: white;
text-transform: capitalize;
letter-spacing: 0px;
}

.marketBtn{
border-radius: 10px;
font-family: Manrope;
font-size: 15px;
font-style: normal;
font-weight: 700;
width: 200px;
height: 45px;
background: inherit;
box-shadow: none;
color: #969696;
background: #060A1D;
text-transform: capitalize;
letter-spacing: 0px;
}

.marketBtn-light{
background: white;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
width: 228px;
height: 45px;
box-shadow: none;
text-transform: capitalize;
letter-spacing: 0px;
}

.btn-segment{
border: 1px solid #1B2537;
}

.notivue-notification {
  position: relative;
  z-index: 1000000 !important; /* Set this value higher than Vuetify modal */
}


.user-location {
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  
}

.close-btn {
  fill: white;
}

.close-btn-dark {
  fill: #10192d;
}

.offers-div::-webkit-scrollbar {
  display: none;
}

.offers-div {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.offers-cards-dark{
background: #0D1526;
height: fit-content;
border-radius: 10px;
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

.list-bullets-styled {
  list-style-type: none; /* Remove default list style */
  position: relative; /* Needed for the pseudo-element positioning */
}

.list-bullets-styled li {
  position: relative; /* Needed for the pseudo-element positioning */
  padding-left: 20px; /* Space for the custom bullet */
  line-height: 20px;
  font-size: 13px;
}

.list-bullets-styled li:before {
  background-color: #2873FF;
  border-radius: 50%;
  content: "";
  display: block;
  height: 8px;
  position: absolute;
  left: 0;
  top: 6px;
  width: 8px;
}

@media only screen and (max-width: 600px) {
.personalBtn, .marketBtn{
  width: 40% !important;
  height: 40px !important;
  font-size: 14px;
}

.offer-body, .offer-container{
  margin-left: 0px !important;
  width: 100% !important;
}

.offer-container{
  background: inherit !important;
  padding-left: 3px !important;
  padding-right: 3px !important;
}
.button-container{
  padding: 8px;
  margin-bottom: 10px;
}

.marketPlace{
  font-size: 20px !important;
}

}
</style>
