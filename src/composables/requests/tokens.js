import { asyncRequest } from '@/composables/configs';

export const getTokens = async(pageNumber)=>{
    const pinia = useStore();
    const data = await asyncRequest(`${baseURL}token/by-chain/${pinia.state.selectedNetwork.toLowerCase()}/all/${pageNumber}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return data;
}; 

export const getBlockchain = async(blockchain)=>{
    const data = await asyncRequest(`${baseURL}blockchain/all`,{ 
    headers: {
        'Content-Type': 'application/json',
    },

    });
    return data;
};

export const getTokenBalance = async(chain)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await asyncRequest(`${baseURL}web3/bulk-token-balance/${pinia.state.selectedNetwork.toLowerCase()}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        },
    body: JSON.stringify(chain)
    });
    return data
};

export const getSummedBalance = async(chain, countryId)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await asyncRequest(`${baseURL}web3/summed-balances/${chain}/${countryId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        }
    });
    return data
};

export const getWalletAddress = async(chain)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await asyncRequest(`${baseURL}web3/wallet-address/${chain}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        }
    });
    return data
};

export const verifyWalletAddress = async(chain, address)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await asyncRequest(`${baseURL}web3/verify-wallet-address/${chain}/${address}`, {
        method: 'GET',
        headers: {
            // 'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        }
    });
    return data
};

export const getSingleTokenBal = async(chain)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await asyncRequest(`${baseURL}web3/token-balance/${pinia.state.selectedNetwork.toLowerCase()}/${pinia.state.getNewCoinInfo}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        }
    });
    return data
};

export const currencyConverter = async(convertCurrency)=>{
    const data = await asyncRequest(`${baseURL}web3/currency-converter`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(convertCurrency),
    });
    return data
};


export const swapCoin = async(payload)=>{
    const pinia = useStore();
    const data = await asyncRequest(`${baseURL}fiat/swap`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        },
        body:JSON.stringify(payload)
    });
    return data
};



//set expiration date 
export function addMinutes(minutesToAdd) {
 
    return new Date(new Date().getTime() + minutesToAdd * 60000);
  }