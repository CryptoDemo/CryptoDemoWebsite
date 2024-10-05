
import { defineStore } from 'pinia'

export const useStore = defineStore('app',()=> {
 

    const state = reactive({
      selectedOfferType:"buy",
      user: null,
      isAuthenticated: false,
      code: "",
      codeInput:'',
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
      selected_offer_from_trades: "",
      selected_coin_to_buy_from_marketplace_userID: "",
      selected_trade_ID: "",
      coin_to_transfer: "",
      Selected_coin_Balance: "",
      TransactionDetails: [],
      MarketPlace: [],
      MyOffers: [],
      allMyOders: [],
      Fiat_transactions: [],
      Total_fiat_bal:[],
      ConvertedPriceValue:[],
      selectedOfferType_from_landing: [],
      fiat_currency_i_want: "",
      Fiat_swap_details: {},
      geo:{},
      camouflageCurrency:"",
      getSingleTxnID:"",
      offersCount:"",
      OnlineCheck:"",
      SelectedScreen_for_Trades: true,
      chat_messages: [],
      new_chat_messages: [],
      storeBanners: [],
      PaymentMethod: [],
      selectedPaymentMethod_from_indexPage: "",
      usernameChanged: false,
      preferredLanguage:"English",
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

  const CheckusernameChange = (payload) => {
      state.usernameChanged = payload;    
  };

  const setPaymentMethod = (payload) => {
      state.PaymentMethod = payload;    
  };

  const setpreferredLanguage = (payload) => {
      state.preferredLanguage = payload;    
  };

  const setselectedLandingCoin = (payload) => {
      state.selectedLandingCoin = payload;    
  };

  const setStoredBanners = (payload) => {
      state.storeBanners = payload;    
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

  const setNewChatMessages = (payload) => {
    state.new_chat_messages = payload;   
  };

  const setFiat_currency_i_want = (payload) => {
    state.fiat_currency_i_want = payload;   
  };
  
  const setGeo = (payload) => {
    state.geo = payload;   
  };

  const setSelectedScreen_for_Trades = (payload) => {
    state.SelectedScreen_for_Trades = payload;   
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

  const setCamouflageCurrency = (payload) => {
      state.camouflageCurrency = payload;  
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

  const setConvertedPriceValue = (payload) => {
    state.ConvertedPriceValue = payload;   
  };

  const setTransactionDetails = (payload) => {
    state.TransactionDetails = payload;    
  };

  const setgetSingleTxnID = (payload) => {
    state.getSingleTxnID = payload;    
  };

  const setSelected_trade_ID = (payload) => {
    state.selected_trade_ID = payload;    
  };

  const setFiat_swap_details = (payload) => {
    state.Fiat_swap_details = payload;    
  };


  const setMarketPlace = (payload) => {
    state.MarketPlace = payload;    
  };

  const setMyOffers = (payload) => {
      state.MyOffers = payload; 
      state.offersCount = payload.length;   
  };

  const setallMyOders = (payload) => {
      state.allMyOders = payload;    
  };

  const setOnlineCheck = (payload) => {
      state.OnlineCheck = payload;    
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

  const setChat_messages = (payload) => {
      state.chat_messages = payload;    
  };

  const setCode = (payload) => {
      state.codeInput = payload;
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
    state.ConvertedPriceValue = [],
    state.MyOffers = [],
    state.selected_coin_to_buy_from_marketplace = "",
    state.selected_offer_from_trades = "",
    state.selected_coin_to_buy_from_marketplace_userID = "",
    state.TransactionDetails = [],
    state.selectedLandingCoin = "",
    state.fiat_currency_i_want = "",
    state.allMyOders = [],
    state.Fiat_swap_details = "",
    state.getSingleTxnID = "",
    state.selected_coin_to_buy_from_marketplace = "",
    state.selected_coin_to_buy_from_marketplace_userID = "",
    state.geo = {},
    state.selected_offer_from_trades = "",
    state.selected_trade_ID = "",
    state.OnlineCheck = "",
    state.SelectedScreen_for_Trades = "true",
    state.selectedPaymentMethod_from_indexPage = "",
    state.chat_messages = [],
    state.new_chat_messages = [],
   
    navigateTo('/authentication/login')
  }

    return {
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
      setallMyOders,
      setgetNewCoinInfo,
      saveTradingData,
      setFiat_currency_i_want,
      setFiat_swap_details,
      setGeo,
      setCamouflageCurrency,
      setChat_messages,
      setNewChatMessages,
      setOnlineCheck,
      setConvertedPriceValue,
      setSelected_trade_ID,
      setStoredBanners,
      CheckusernameChange,
      setpreferredLanguage,
      setPaymentMethod,
      setSelectedScreen_for_Trades,
    }
},
  {persist: {
    storage: persistedState.localStorage,
  }},)


  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
  
  }
