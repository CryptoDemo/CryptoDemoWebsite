// myStore.js


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
      token:null,
      code: false,
      codeInput:'',
      isPinSet: false,
      isTwoFactorSet: false,
      email:null,
      phone:null,
      country:null,
      twoFactor:null,
      activityLogs:[],
      notificationLogs:null,
      tokenNetworks:[],
      tokenLists:[],
      tokenPrices:[],
      tokenBalance:null,
      allcountries: [],
      selectedToken: 'USDT',

    });
  
  
  const setUser = (payload) => {
      state.user = payload;
      state.isAuthenticated = true;
  };
    const updateNotificationSettings = (payload) => {
        const {key, value} = payload;
        // if not an object
        console.log(key,value)
        if(!Object.keys(state.user.settings.notifications[key]).length){
            state.user.settings.notifications[key] = value;
        }else{ // if an object
            state.user.settings.notifications[key].is_enabled = value;
        }
    };

  const setToken = (payload) => {
      state.token = payload;
      
  };
  const setEmail = (payload) => {
      state.email = payload;
      
  };
  
  const setPhone = (payload) => {
      state.phone = payload;
      
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
  const setTokenPrices = (payload) => {
      state.tokenPrices = payload;
      
  };
  const setTokenBalance = (payload) => {
      state.tokenBalance = payload;
      
  };

  const setallcountries = (payload) => {
    state.allcountries = payload;
    
};
  const setActivityLogs = (payload) => {
      state.activityLogs = payload;
      state.activityLogs.reverse(state.activityLogs);
      
  };
  const setNotificationLogs = (payload) => {
      state.notificationLogs = payload;
      state.notificationLogs.reverse(state.notificationLogs)
      
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

  
  const clearUser = () => {
      state.user = null;
      state.isAuthenticated = false;
      state.email = null,
      state.phone = null,
      state.activityLogs = [],
      state.notificationLogs = [],
      state.tokenNetworks = [],
      state.tokenLists = [],
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
      setToken,
      clearUser,
      setCountry,
      setCode,
      setTwoFactor,
      setPhone,
      setActivityLogs,
      setNotificationLogs,
      setTokenNetworks,
      setTokenLists,
      setTokenPrices,
      setTokenBalance,
      setallcountries,
      updateNotificationSettings
    }
},
  {persist: {
    storage: persistedState.localStorage,
  }},)


  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
  
  }
