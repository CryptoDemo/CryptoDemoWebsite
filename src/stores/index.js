// myStore.js


// import types from '@pinia/nuxt'
import { defineStore } from 'pinia'

export const useStore = defineStore('app',()=> {
    const currentNavMenu = ref("home")
    const  currentAccMenu = ref("spot")
    const BankName = ref("")
    const accountName = ref("")
    const accountNumber = ref("")

    const state = reactive({
      selectedOfferType:"buy",
      user: null,
      isAuthenticated: false,
      code: "",
      codeInput:'',
      isPinSet: false,
      isTwoFactorSet: false,
      email:null,
      country:null,
      twoFactor:null,
      activityLogs:[],
      notificationLogs:[],
      tokenNetworks:[],
      BlockchainNetworks: [],
      selectedNetwork: "TRC20" ,
      preferredCurrency: "USD",
      Selectedcurrency_code:"$",
      tokenLists:[],
      tokenBalance:null,
      allcountries: [],
      selectedToken: 'USDT',
      UserFaqs:[],
      getNewCoinInfo: "",
      calculatedTaxFee: "",
      offer_from_landing: "Buy",
      calculatedTaxFee_for_swap: "",
      token_to_transfer: "",
      TransferWallet: "",
      SummedBalance: "",
      selected_coin_to_buy_from_marketplace: "",
      coin_to_transfer: "",
      Selected_coin_Balance: "",
      TransactionDetails: [],
      MarketPlace: [],
      MyOffers: [],
      Fiat_transactions: [],
      Total_fiat_bal:[],

      selectedOfferType_from_landing: [],


    });
  
  
  const setUser = (payload) => {
      state.user = payload;
      state.isAuthenticated = true;

    };
    const updateNotificationSettings = (payload) => {
      const {key, value} = payload;
      // if not an object
      if(!Object.keys(state.user.settings.notifications[key]).length){
          state.user.settings.notifications[key] = value;
      }else{ // if an object
          state.user.settings.notifications[key].is_enabled = value;
      }
    };

  const setSelectedNetwork = (payload) => {
      state.selectedNetwork = payload;
      
  };

  const setEmail = (payload) => {
      state.email = payload;    
  };

  const setselectedLandingCoin = (payload) => {
      state.selectedLandingCoin = payload;    
  };

  const setFAQs = (payload) => {
      state.UserFaqs = payload;   
  };

  const setCalculatedTaxFee = (payload) => {
      state.calculatedTaxFee = payload;   
  };

  const setTotal_fiat_bal = (payload) => {
      state.Total_fiat_bal = payload;   
  };

  const setgetNewCoinInfo = (payload) => {
      state.getNewCoinInfo = payload;   
  };

  const saveTradingData = (payload) => {
    state.selectedOfferType_from_landing = payload
  };

  const setFiat_transactions = (payload) => {
      state.Fiat_transactions = payload;   
  };

  const setCalculatedTaxFee_for_swap = (payload) => {
      state.calculatedTaxFee_for_swap = payload;   
  };

  const setToken_to_transfer = (payload) => {
      state.token_to_transfer = payload;   
  };

  const setCoin_to_transfer = (payload) => {
      state.coin_to_transfer = payload;   
  };

  const setTransferWallet = (payload) => {
      state.TransferWallet = payload;   
  };

  const setpreferredCurrency = (payload) => {
      state.preferredCurrency = payload;  
  };

  const setTokenBalance = (payload) => {
      state.tokenBalance = payload;  
  };

  const setSummedBalance = (payload) => {
      state.SummedBalance = payload;  
  };
 

  const setSelected_coin_Balance = (payload) => {
      state.Selected_coin_Balance = payload;  
  };

  const  setSelectedcurrency_code= (payload) => {
      state.Selectedcurrency_code = payload;  
  };

  const setTwoFactor = (payload) => {
      state.twoFactor = payload;
  };
  
  const setTokenNetworks = (payload) => {
      state.tokenNetworks = payload;  
  };

  const setTokenLists = (payload) => {
      state.tokenLists = payload;   
  };


  const setTransactionDetails = (payload) => {
      state.TransactionDetails = payload;    
  };


  const setMarketPlace = (payload) => {
      state.MarketPlace = payload;    
  };

  const setMyOffers = (payload) => {
      state.MyOffers = payload;    
  };


  const setallcountries = (payload) => {
    state.allcountries = payload;    
};
  const setActivityLogs = (payload) => {
      state.activityLogs = payload;
    //   state.activityLogs.reverse(state.activityLogs);
      
  };
  const setNotificationLogs = (payload) => {
      state.notificationLogs = payload;
      // state.notificationLogs.reverse(state.notificationLogs)
      
  };

  const setCountry = (payload) => {
      state.country = payload;
      
  };

  const setCode = (payload) => {
      state.codeInput = payload;
      // state.isPinSet = true;
  };


  const verifyPin =(pin) => {
    return pin === this.pin;
  };

  
  const logout = () => {
    state.user = null;
    state.isAuthenticated = false;
    state.email = null,
    state.phone = null,
    state.activityLogs = [],
    state.notificationLogs = [],
    state.Fiat_transactions = [],
    state.tokenNetworks = [],
    state.tokenLists = [],
    state.Total_fiat_bal = [],
    state.selectedLandingCoin = "",
    state.Web3_transactions = {
      data:[],
      time:null
    };
   
    navigateTo('/login')
  }

    return {
      currentNavMenu,
      currentAccMenu,
      BankName,
      accountName,
      accountNumber,
      state,
      setEmail,
      setUser,
      logout,
      setCountry,
      setCode,
      setTwoFactor,
      setActivityLogs,
      setNotificationLogs,
      setTokenNetworks,
      setTokenLists,
      setTokenBalance,
      setallcountries,
      updateNotificationSettings,
      setFAQs,
      setpreferredCurrency,
      setSelectedcurrency_code,
      setTransactionDetails,
      setCalculatedTaxFee,
      setCalculatedTaxFee_for_swap,
      setselectedLandingCoin,
      setFiat_transactions,
      setTotal_fiat_bal,
      setToken_to_transfer,
      setTransferWallet,
      setCoin_to_transfer,
      setSummedBalance,
      setSelectedNetwork,
      setSelected_coin_Balance,
      setMarketPlace,
      setMyOffers,
      setgetNewCoinInfo,
      saveTradingData
    }
},
  {persist: {
    storage: persistedState.localStorage,
  }},)


  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
  
  }
