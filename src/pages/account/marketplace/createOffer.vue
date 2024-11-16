<template>
  <div>
    <Header :hide="true" :icon1="true" :icon3="true" :icon2="true" :wallet="true"/>
    <v-container style="margin-top: 110px; display: flex;">

      <div class="flex-lg-and-up hidden-sm-and-down">
          <Side-nav style="border: none;" />
      </div>

      <div class="ctn-div" style="margin: auto; margin-bottom: 280px; margin-left: 30px;">      
        <div class="offer-txt1" :class="isDark ? 'card-text-dark':'card-text-light'">Create an Offer to Sell your Crypto</div>

        <div class="trd-prc" style="display: flex; flex-direction: column; margin-top: 25px;">
            <span class="prc1">Select trade price</span>
            
        </div>

        <div>
        

          <div class="d-md-flex price-div" style="justify-content: space-between; margin-top: 24px; margin-bottom: 66px;">
            <div :class="{'box1': !priceType, 'box2': priceType}" @click="setPriceType(false)">
              <span :class="{'mkt-place': !priceType, 'mkt-place1': priceType}">Market Price</span>
              <span :class="{'mkt-place-caption': !priceType, 'mkt-place-caption1': priceType}">
                Selling price will change according to the market price of Bitcoin. This price is determined by supply and demand dynamics in the marketplace.
              </span>
            </div>
            <div :class="{'box2': !priceType, 'box1': priceType}" @click="setPriceType(true)">
              <span :class="{'mkt-place1': !priceType, 'mkt-place': priceType}">Fixed Price</span>
              <span :class="{'mkt-place-caption1': !priceType, 'mkt-place-caption': priceType}">
                Selling price is locked when you create it, and won't change with the market price. This price does not change based on market conditions.
              </span>
            </div>
          </div>


          <div>
            <div class="position-relative">

              <div style="margin-top: 45px;">
                <span class="select1i">Enter Unit Price and preferred Cryptocurrency to use for this transaction</span>
                <div style="margin-top: 8px; margin-bottom: 16px; position: relative;">
                  <input type="number" placeholder="Enter an amount" v-model="unitPrice" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="outline: none; height: 60px; border-radius: 15px; padding-right: 25px!important; position: relative; width: 100%;  padding-left: 15px;"/>
                  
                  <v-menu>
                      <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" style="min-width: 70px; height: 53px; position: absolute; top: 4px; border-radius: 15px; background: rgba(19, 29, 53, 1); box-shadow: none; right: 0; letter-spacing: 0px;  text-transform: capitalize;"> 
                          <span class="currency-list">{{ token_from_index || tokenSymbol }}</span>
                        </v-btn>
                      </template>

                      <v-list :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 15px; margin-top: 10px; max-height: 300px; overflow-y: auto; width: 250px;">
                        <v-list-item style="display: contents;">
                          <v-row dense style="display: flex; flex-direction: column;">
                            <v-col v-for="tokens in pinia.state.tokenLists" class="" :key="tokens.id">
                            <v-list-item  @click="tokenName=tokens.name; tokenIcon=tokens.icon; tokenSymbol=tokens.symbol; selectedCoinID = tokens.id" style="display: flex;">
                              <div style="display: flex; align-items: center; ">
                                <img :src="tokens.icon" width="30" class="me-2"/>
                                <span class="currency-list my-2">{{ tokens.name }}</span>
                            </div>
                            </v-list-item>
                          </v-col>
                          </v-row>
                        </v-list-item>
                      </v-list>

                  </v-menu> 
                </div>

                <span class="select1i">What Currency would you like to pay In?</span>
                <div style="margin-top: 8px; margin-bottom: 16px;">
      
                  <v-menu>
                      <template v-slot:activator="{ props }">
                        <v-btn @click.prevent="toggleChevron()" v-bind="props" :class="isDark ? 'profile-cards-dark':'profile-cards-light'"  style="min-width: 70px; height: 60px; margin-top: 3px; border-radius: 15px;  box-shadow: none; letter-spacing: 0px;width: 100%; display: flex; justify-content: space-between; text-transform: capitalize;"> 
                          <span class="currency-list">{{ pinia.state.selectedOfferType_from_landing.currency || pinia.state.preferredCurrency }}</span>
                          <div style="display: flex; position: absolute; right: 1%">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z" />
                            </svg>
                          </div>
                        </v-btn>
                      </template>

                      <v-list :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="border-radius: 15px; margin-top: 10px;">
                        <v-list-item style="display: contents">
                          <v-row dense style="overflow: scroll; display: flex; flex-direction: column;">
                            <v-col v-for="(currency, index) in pinia.state.allcountries" :key="index">
                            <v-list-item @click="pinia.state.preferredCurrency=currency.currency_name; pinia.state.Selectedcurrency_code = currency.currency_code">
                              <div style="display: flex; align-items: center; ">
                                <span class="currency-list my-2">{{ currency.currency_name }}</span>
                            </div>
                            </v-list-item>
                          </v-col>
                          </v-row>
                        </v-list-item>
                      </v-list>
                  </v-menu> 
                </div>

                <span v-if="priceType" class="select1i">Enter Equivalent Unit Price of {{ tokenSymbol }} in {{ pinia.state.selectedOfferType_from_landing.currency || pinia.state.preferredCurrency }}</span>
                
                <div v-if="priceType" style="margin-top: 8px; margin-bottom: 16px;">
                  <input type="number" placeholder="0" v-model="EquivPrice" :disabled="!priceType" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="outline: none; height: 60px; padding-right: 25px!important; position: relative; border-radius: 15px; width: 100%;  padding-left: 15px;"/>
                    <v-btn style="min-width: 70px; height: 53px; position: absolute; margin-top: 3px; border-radius: 15px; background: rgba(19, 29, 53, 1); box-shadow: none; right: 4px; letter-spacing: 0px;  text-transform: capitalize;"> 
                      <span class="currency-list">{{ pinia.state.selectedOfferType_from_landing.currency|| pinia.state.preferredCurrency }}</span>
                    </v-btn>
                </div>

                <span class="select1i">Enter minimum amount</span>
                <div style="margin-top: 8px; margin-bottom: 16px;">
                  <input type="number" placeholder="0" v-model="minAmmount" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="outline: none; height: 60px; padding-right: 25px!important; position: relative; border-radius: 15px; width: 100%;  padding-left: 15px;"/>
                
                    <v-btn style="min-width: 70px; height: 53px; position: absolute; margin-top: 3px; border-radius: 15px; background: rgba(19, 29, 53, 1); box-shadow: none; right: 4px; letter-spacing: 0px;  text-transform: capitalize;"> 
                      <span class="currency-list">{{pinia.state.selectedOfferType_from_landing.currency || pinia.state.preferredCurrency }}</span>
                    </v-btn>
                </div>

                <span class="select1i">Enter maximum amount</span>
                <div style="margin-top: 8px; margin-bottom: 16px;">
                  <input type="number" placeholder="0" v-model="maxAmmount" :class="isDark ? 'profile-cards-dark':'profile-cards-light'" style="outline: none; height: 60px; padding-right: 25px!important; position: relative; border-radius: 15px; width: 100%;  padding-left: 15px;"/>
                
                  <v-btn style="min-width: 70px; height: 53px; position: absolute; margin-top: 3px; border-radius: 15px; background: rgba(19, 29, 53, 1); box-shadow: none; right: 4px; letter-spacing: 0px;  text-transform: capitalize;"> 
                    <span class="currency-list">{{pinia.state.selectedOfferType_from_landing.currency || pinia.state.preferredCurrency }}</span>
                  </v-btn>
                </div>

<!-- 
                <span class="select1i">Select preferred payment method for this transaction</span>
                <div style="margin-top: 8px; margin-bottom: 16px; position: relative;">
                  <v-menu>
                      <template v-slot:activator="{ props }">
                        <v-btn @click.prevent="toggleChevron()" v-bind="props" :class="isDark ? 'profile-cards-dark':'profile-cards-light'"  style="min-width: 70px; height: 60px; margin-top: 3px; border-radius: 15px;  box-shadow: none; letter-spacing: 0px;width: 100%; display: flex; justify-content: space-between; text-transform: capitalize;"> 
                          <span class="currency-list">{{ pinia.state.preferredCurrency }}</span>
                          <div style="display: flex; position: absolute; right: 1%">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="['chevron-icon', { 'chevron-icon-rotated': isChevronToggled }, isDark ? 'close-btn' : 'close-btn-dark']">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z" />
                            </svg>
                          </div>
                        </v-btn>
                      </template>

                      <v-list style="width: 100%; border-radius: 24px;" :class="isDark ? 'profile-cards-dark':'profile-cards-light'"  >
                        <v-list-item>
                          <v-row dense >
                              <v-col v-for="(currency, index) in pinia.state.allcountries" class="" sm="12" :key="index" >
                            
                                <v-list-item-title  @click="pinia.state.preferredCurrency=currency.currency_name; pinia.state.Selectedcurrency_code = currency.currency_code"> 
                                  <div style="display: flex; justify-content: flex-start;">
                                    <span class="currency-list my-2">{{ currency.currency_name }}</span>

                                  </div>

                                </v-list-item-title>
                              </v-col>
                          </v-row>
                        </v-list-item>
                      </v-list>
                  </v-menu>  
                </div> -->

              <div style="display: flex; justify-content: end; margin-top: 30px;">
                <v-btn  :disabled="!offerRequirements" @click="create_offer()" class="primary-btn1" :loading="loading" style="height: 60px; width: 180px; font-weight: 600; color: white; box-shadow: none;">Create Offer</v-btn>                  
              </div>

                
                  
              </div>

            </div>
          </div>

        <div>
          
        </div>
        </div>
      </div>

        
    
    </v-container>
    <Footer class="desktop-footer flex-lg-and-up hidden-md-and-down"/>
    <Mobile-footer class="mobile-footer"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
import { createOffer } from "@/composables/requests/marketplace";
import { getPaymentMethod } from "@/composables/requests/paymentMethods";

definePageMeta({ middleware: 'scroll-to-top'});

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const pinia = useStore();

const tokenSymbol= ref();

const priceType = ref(false);

const setPriceType = (isFixedPrice) => {
  priceType.value = isFixedPrice;
  if (isFixedPrice) { // Set to 0 only if market
    EquivPrice.value = 0;
  }
};


const loading = ref();

const tokenName = ref();

const tokenIcon = ref();


const selectedCoinID = ref();

const maxAmmount = ref();

const minAmmount = ref();

const EquivPrice = ref();

const unitPrice = ref(pinia.state.selectedOfferType_from_landing.amount || 0);

const pageNumber = ref(1)


const allPaymentMethods = async () => {

try {
  const data = await getPaymentMethod(pageNumber.value);
  if (data.success) {
    const payment_method = data.data;

  } else {
      push.error(`${data.message}`);
      
    }
} catch (error) { 
};
};


const token_from_index = pinia.state.tokenLists.find(e => e.name === pinia.state.selectedOfferType_from_landing.name)?.symbol;
console.log(token_from_index)


const create_offer = async () => {

const mytoken = pinia.state.tokenLists.find(e => e.symbol === tokenSymbol.value)?.id;
const countryId = pinia.state.allcountries.find(e => e.currency_name === pinia.state.preferredCurrency)?.id


const offerInfo = {
    trading_pair: {
        crypto: {
          token_id: mytoken,
          unit_value: unitPrice.value
        },
        fiat: {
          country_id: countryId,
          unit_value: priceType.value  ? EquivPrice.value : 0.00,
          minimum_buy_limit: minAmmount.value,
          maximum_buy_limit: maxAmmount.value,
          use_fixed_price: priceType.value 
        },
      },
      active: true
  };
  console.log('offer:', offerInfo);
  console.log('Price Type Set To:', priceType.value);


  loading.value = true;
  try {
    const data = await createOffer(offerInfo);
    if (data.success) {
     

      navigateTo('/account/marketplace/success/')
      loading.value = false;

    } else {
      push.error(`${data.message}`);
      loading.value = false;
    }
  } catch (e) {
    console.log(e);
    loading.value = false;
  }
  tokenName.value = '';
      tokenIcon.value = '';
      tokenSymbol.value = '';
      unitPrice.value = ""; 
      EquivPrice.value = ""; 
      minAmmount.value = ""; 
      maxAmmount.value = "";
};

watch(priceType, (newValue) => {
  if (newValue) {
    EquivPrice.value = 0;
  }
});

const offerRequirements = computed(() => {
  return tokenSymbol.value && unitPrice.value  && minAmmount.value && maxAmmount.value !== null || !pinia.state.user.kyc_verified;
});

const isChevronToggled = ref(false);
const toggleChevron = () => {
    isChevronToggled.value = !isChevronToggled.value;
};


onMounted( () => {
  tokenSymbol.value = pinia.state?.tokenLists[1]?.symbol  
}
);
</script>



<style scoped>

.mkt-place{
color: var(--Primary-100, #2873FF);
font-family: Manrope;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.mkt-place1{
font-family: Manrope;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

.mkt-place-caption{
font-family: Manrope;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 170%;
margin-top: 11px;
}
.mkt-place-caption1{
color: #C2C2C2;
font-family: Manrope;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 170%;
margin-top: 11px;
}
.box1{
border-radius: 20px;
border: 1px solid  #2873FF;
padding: 20px;
display: flex;
flex-direction: column;
width: 48%;
cursor: pointer;
background: linear-gradient(180deg, rgba(40, 115, 255, 0.05) 0%, rgba(11, 107, 150, 0.05) 100%), rgba(40, 115, 255, 0.05);
}
.box2{
border: 1px solid  #1B2537;
padding: 20px;
display: flex;
flex-direction: column;
width: 48%;
cursor: pointer;
border-radius: 20px;
background: rgba(142, 155, 174, 0.05);
}

.offer-txt1{
  font-size: 32px;
  font-weight: 600;
}

.prc1{
color: var(--Primary-100, #2873FF);
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.prc2{
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: normal;
font-family: Manrope;
}

.chevron-icon {
  transition: transform 0.3s;
  }
  
  .wallet-border{
    border: 1px solid  #1B2537;
  }
  .wallet-border-light{
  border: 1px solid #E2E8F0;
  }
  
  .chevron-icon-rotated {
    transform: rotate(180deg);
  }

  .close-btn{
    fill: white;
  }
  .close-btn-dark{
  fill: #10192D;
  }

  @media screen and (max-width: 600px) {
  .box2, .box1 {
    width: 100% !important;
  }
  .offer-txt1, .prc1 {
    font-size: 21px;
  }

  .trd-prc {
    display: flex;
    flex-direction: column;
    margin-top: 19px !important;
  }

  .price-div{
    margin-top: 20px !important;
    margin-bottom: 25px !important;
  }

  .primary-btn1{
    width: 100% !important;
  }
  .select1i{
    font-size: 14px;
  }
  .ctn-div{
    margin-left: 0px!important;
  }

}
</style>