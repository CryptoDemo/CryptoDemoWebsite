<template>
  <div>
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

                    <v-list style="border-radius: 10px;" :class="isDark ? 'profile-cards-dark':'profile-cards-light'"  >
                      <v-list-item>
                        
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
                      </v-list-item>
                    </v-list>
                  </v-menu> 
  </div>
</template>