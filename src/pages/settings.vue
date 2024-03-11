<template>
  <div>
    <Header icon="/svg/white-wallet.svg" Menuicon="/svg/Main Menu Icons.svg" icon1="/svg/profile-icon.svg"  icon2="/svg/Notification.svg"/>
          <v-row no-gutters style="margin-bottom: 113px; margin-top: 65px">
            <v-col cols="3">
              <div class="pa-2 ma-2">
                      
              </div>
            </v-col>

            <v-col>
              <div class="pa-2 ma-2">
                  <div class="settings-header">
                    <span class="header-text1">Setting answers to your security questions is a requirement in the event that you need to reset or update your phone number. <span style="color: var(--Primary-100, #2873FF);">Set Answers!</span></span>
                  </div>

                  <div class="acct-settings" style="display: flex; justify-content: space-between; margin-top: 32px">
                     
                        <span class="acct-text"> Account Settings</span>
                        <span class="mail-text">vaststudiosng@gmail.com</span>
                     
                  </div>
              </div>

               <v-row no-gutters >
                    <v-col class="d-md-flex me-5" style=" flex-grow: 0 !important;">
                      <div class="d-flex">
                          <div class="pa-2 ma-2">
                          
                            <div style="display: grid;">
                              <input type=" text" class="input-styling1 position-relative" placeholder="002-002-003" style="outline: none; padding-left: 140px "/>
                                <v-menu>
                                    <template v-slot:activator="{ props }">
                                      <v-btn class="area-num" v-bind="props">
                                        <v-img  width="20" class="me-3" :src="flag"/> 
                                        <span class="me-2">{{select}}</span>
                                        <v-icon icon="mdi-chevron-down"></v-icon>
                                      </v-btn>
                                    </template>

                                    <v-list style="background: #161D26; border-radius: 15px;">
                                      <v-list-item>
                                        <v-row dense>
                                        <v-col v-for="(item, index) in locations" class="" sm="6"  :key="index">
                                      
                                          <v-list-item-title @click="select=item.title; flag= item.image" style="text-align: -webkit-center;">
                                          <v-img width="30" class="rounded-5" :src="item.image"></v-img>    
                                          <span> {{ item.title }} </span>
                                        </v-list-item-title>
                                          </v-col>
                                        </v-row>
                                      </v-list-item>
                                    </v-list>
                    
                                </v-menu>
                              <div>
                                  <span class="number-caption">Please set your phone number with country code. <br><span style="font-weight: 700;">Must be a mobile number!</span></span>
                              </div>
                            </div> 
                          
                          </div>
                          <v-btn  class="mt-4 update-btn" style="border-radius: 16px; height: 63px !important; width: 94px; letter-spacing: 0px ">Confirm</v-btn>
                      </div>
                    </v-col>

                    <v-col>
                      <div class="pa-2 ma-2 d-flex">
                        <div :rules="rules"
    accept="image/png, image/jpeg, image/bmp"
    label="Avatar">
                        <img src="/svg/Camera.svg" style="position: absolute; margin-left: 17px; margin-top: 17px;"/>
                        <img src="/svg/Image (1).svg" class="me-4" style="align-self: start;"/>
                        </div>
                        <div>
                         <v-text-field placeholder="Email Address" class="input-styling1" variant="">
                            <v-icon class="prepend-inner-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 25 24" fill="none">
                                  <path d="M20.2258 11.9998C20.2257 10.2167 19.6413 8.48476 18.5655 7.07901C17.4898 5.67327 15.9843 4.6743 14.2882 4.24076C12.592 3.80721 10.8025 3.96393 9.20367 4.68603C7.60486 5.40813 6.28846 6.65421 5.46349 8.22641C4.63853 9.79861 4.3523 11.6068 4.65025 13.3638C4.9482 15.1209 5.81326 16.7261 7.10805 17.9245C8.40285 19.1229 10.0532 19.8458 11.7969 19.9785C13.5407 20.1112 15.2779 19.646 16.7328 18.6568L17.8213 20.3208C16.0028 21.5574 13.8312 22.139 11.6515 21.9733C9.47177 21.8076 7.40882 20.904 5.79024 19.406C4.17166 17.9081 3.09024 15.9016 2.71771 13.7053C2.34518 11.509 2.70289 9.24875 3.73404 7.28344C4.76519 5.31814 6.41066 3.76046 8.40917 2.85777C10.4077 1.95508 12.6446 1.75913 14.7648 2.30102C16.885 2.84292 18.7669 4.0916 20.1117 5.84878C21.4564 7.60596 22.1869 9.7709 22.1871 11.9998V13.4998C22.1885 14.2497 21.9536 14.9802 21.5172 15.5837C21.0807 16.1872 20.4657 16.6317 19.7627 16.8519C19.0598 17.0721 18.3061 17.0563 17.6127 16.8067C16.9192 16.5572 16.3227 16.0871 15.911 15.4658C15.2562 16.1595 14.4188 16.6456 13.4996 16.8658C12.5803 17.0859 11.6183 17.0307 10.7291 16.7068C9.83992 16.3829 9.06134 15.804 8.48693 15.0398C7.91253 14.2756 7.56673 13.3585 7.49109 12.3987C7.41545 11.4389 7.61319 10.4773 8.06054 9.62935C8.50789 8.7814 9.18583 8.08319 10.0129 7.61864C10.84 7.15408 11.781 6.94292 12.7229 7.01054C13.6648 7.07816 14.5675 7.42168 15.3226 7.99982H17.2839V13.4998C17.2839 13.8976 17.4389 14.2792 17.7147 14.5605C17.9906 14.8418 18.3648 14.9998 18.7549 14.9998C19.145 14.9998 19.5191 14.8418 19.795 14.5605C20.0709 14.2792 20.2258 13.8976 20.2258 13.4998V11.9998ZM12.3807 8.99982C11.7988 8.99982 11.23 9.17577 10.7462 9.50541C10.2624 9.83506 9.88536 10.3036 9.66269 10.8518C9.44002 11.3999 9.38176 12.0031 9.49528 12.5851C9.60879 13.167 9.88898 13.7016 10.3004 14.1211C10.7119 14.5407 11.2361 14.8264 11.8067 14.9422C12.3774 15.0579 12.9689 14.9985 13.5065 14.7715C14.0441 14.5444 14.5036 14.1599 14.8268 13.6665C15.1501 13.1732 15.3226 12.5932 15.3226 11.9998C15.3226 11.2042 15.0127 10.4411 14.4609 9.8785C13.9092 9.31589 13.1609 8.99982 12.3807 8.99982Z" fill="#C4C4C4"/>
                                </svg>
                            </v-icon>

                          <v-icon class="prepend-inner-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="15" viewBox="0 0 2 15" fill="none">
                                <path opacity="0.4" d="M1.06026 1.31102V14.311" stroke="#C3CDDB" stroke-linecap="round"/>
                            </svg>
                            </v-icon>

                          </v-text-field>
                          <span class="number-caption">This username is auto-generated and can be changed <br> only once.</span>
                        </div>


                      </div>
                    </v-col>

                    <v-responsive width="100%"></v-responsive>

                    <v-col style="flex-grow: 0 !important;">
                      <div class="pa-2 ma-2" style="display: grid;">
                        <span class="number-caption" style="line-height: 28px; font-family: manrope; font-weight: 600;">Preferred currency</span>
                         <v-menu :currency="currency">
                            <template v-slot:activator="{ props }">
                              <v-btn
                                class="input-styling1" width="456px"
                                dark
                                v-bind="props">
                                <div  class="py-3" style="display: flex; cursor: pointer; position: absolute; left: 37px; align-items: center;">
                                    <span class="me-4" style="font-weight: 700; font-size: 16px;">{{currencyIcon}}</span>
                                    <span class="mt-" style="font-weight: 700; color: var(--Gray-Medium-light, #969696);">{{selected}}</span> 
                                </div>
                                <v-icon icon="mdi-chevron-down"  color="#E0E4F5" class="chevron-icon" style="position: absolute; right: 45px; bottom: 25px; "></v-icon>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-item>
                                <div v-for="(currency, index) in currencies" class="d-flex py-3" style="cursor: pointer"
                                  :key="index" >
                              
                                  <v-list-item-title @click="selected=currency.title;" class="d-flex">
                                    <span>{{currency.icon}}</span> 
                                    <span> {{ currency.title }} </span>
                                  </v-list-item-title>
                                </div>
                              </v-list-item>
                            </v-list>
                          </v-menu> 
                          <span class="number-caption" >Choose the currency for your wallet.</span>
                      </div>
                    </v-col>

                    <v-col>
                      <div class="pa-2 ma-2" style="display: grid;">
                        <span class="number-caption" style="line-height: 28px; font-family: manrope; font-weight: 600;">Preferred coin</span>
                         <v-menu :coin="coin">
                            <template v-slot:activator="{ props }">
                              <v-btn
                                class="input-styling1" width="456px"
                                dark
                                v-bind="props">
                                <div  class="py-3" style="display: flex; cursor: pointer; position: absolute; left: 37px; align-items: center;">
                  
                                    <img :src="coinIcon" class="me-4"/>
                                    <span class="mt-" style="font-weight: 700; color: var(--Gray-Medium-light, #969696);">{{selectedCoin}}</span> 
                                </div>
                                <v-icon icon="mdi-chevron-down"  color="#E0E4F5" class="chevron-icon" style="position: absolute; right: 45px; bottom: 25px; "></v-icon>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-item>
                                <div v-for="(coin, index) in coin" class="d-flex py-3" style="cursor: pointer" :key="index" >
                              
                                  <v-list-item-title @click="selectedCoin=coin.title; coinIcon= coin.icon"  class="d-flex">
                                     <v-img  :src="coin.icon"></v-img>  
                                    <span> {{ coin.title }} </span>
                                  </v-list-item-title>
                                </div>
                              </v-list-item>
                            </v-list>
                          </v-menu> 
                          <span class="number-caption"> Choose the coin for your wallet.</span>
                      </div>
                    </v-col>

               </v-row>

                <div class="pa-2 ma-2">
                  <span class="number-caption" style="line-height: 28px; font-family: manrope; font-weight: 600;  ">Biography</span>
                    <v-textarea style="border-radius:32px !important; width: 940px;"
                      counter
                      autocomplete="text"
                      placeholder="Your biography is visible on your public profile..."
                      :rules="rules"
                      bg-color="#12181F"
                      variant=""
                      clearable
                      clear-icon="mdi-close-circle" color="gray"
                      no-resize
                     
                    ></v-textarea>
                      <v-btn class="update-btn mt-4" style="letter-spacing: 0px">Update bio</v-btn>
                </div>
              <div class="pa-2 ma-2" style="width: 940px; flex-shrink: 0;">
                <DataTable/>
              
              </div>
            </v-col>     
          </v-row>
          
          <Footer/>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

const select =ref("+90")

const flag = ref("/svg/nigeria-flag.svg")

const locations = [
        { title: '+09', image:"/img/china.png" },
        { title: '+54',  image:"/img/china.png" },
        { title: '+21',  image:"/img/china.png" },
        { title: '+07',  image:"/img/china.png" },
        { title: '+23',  image:"/img/china.png" },
        { title: '+01', image:"/img/china.png" },
      ];

const selected  = ref ('US Dollar USD') 
const currencyIcon = ref ('$')

const currencies = [
                  {
                    icon:'$', title:"US Dollar USD"
                  },
                  {
                    icon:'$', title:"US Dollar USD"
                  },
                  {
                    icon:'$', title:"Canadian Dollar"
                  },
                  {
                    icon:'$', title:"US Dollar USD"
                  }
];

const selectedCoin  = ref ('Bitcoin (BTC)')
 
const coinIcon = ref ('/svg/btc.svg')

const coin = [
                  {
                    icon:'/svg/btc.svg', title:"US Dollar USD"
                  },
                  {
                    icon:'$', title:"US Dollar USD"
                  },
                  {
                    icon:'$', title:"Canadian Dollar"
                  },
                  {
                    icon:'$', title:"US Dollar USD"
                  }
];
const validateInput = (value) => {
      if (value.length > 180) {
        return 'Max 180 characters:'; // Or customize the message
      }
      return; 
    };
const rules = [
      (v) => (v || '').length <= 180 || 'Max 180 characters:',
    ];


</script>
<style>
.settings-header {
border-radius: 16px;
background: rgba(245, 249, 253, 0.54);
padding: 27px 16px;
width: 940px;
margin-top: 30px;
}
.header-text1{
color: var(--Gray-Dark, #323232);
font-feature-settings: 'clig' off, 'liga' off;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
display: flex;
justify-content: center;
}
.acct-settings{
border-radius: 16px;
background: var(--secondary-background, #12181F);
display: flex;
width: 940px;
padding: 21px var(--spacing-3xl, 24px);
justify-content: space-between;
align-items: center;
}
.acct-text{
color: var(--Primary-80, #5892FF);
font-family: Manrope;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 28px; 
}

.area-num{
border-radius: 17px;
background: #161D26;
width: 109px;
height: 44px!important;
box-shadow: none !important;
position: absolute;
margin-top: 10px;
margin-left: 9px;
}

.mail-text{
  color: var(--Gray-Medium-light, #969696);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 28px; 
}
.input-styling1{
  width: 350px;
  height: 64px !important;
  background: var(--secondary-background, #12181F) !important;
  border-radius: 15px ;
  letter-spacing: 0px;
}
.number-caption{
color: var(--Gray-Medium-light, #969696);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
/* margin-top: 5px; */
}

.update-btn{
color: var(--Gray-Light, #D8D8D8);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
display: flex;
width: 224px;
height: 64px!important;
padding: 21px 16px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 16px;
background: var(--Primary-100, linear-gradient(180deg, #2873FF 0%, #0B6B96 100%), #2873FF);
text-transform: unset!important;
}

.v-switch__track ::before {
    display: inline-flex;
    align-items: center;
    font-size: 0.5rem;
    padding: 0 5px;
    background-color: #12181F !important;
    border-radius: 9999px;
    height: 14px;
    opacity: 0.6;
    min-width: 36px;
    cursor: pointer;
    transition: 0.2s background-color cubic-bezier(0.4, 0, 0.2, 1);
}

.v-textarea .v-field {
    --v-textarea-control-height: var(--v-input-control-height);
    border-radius: 32px;
    height: 356px!important
}
</style>