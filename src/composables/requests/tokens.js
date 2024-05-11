export const getTokens = async(pageNumber)=>{
    const data = await fetch(`${baseURL}token/all/${pageNumber}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => res.json());
    return data;
}

export const getTokenBalance = async(chain,token = 'USDT')=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return;
    const data = await fetch(`${baseURL}web3/token-balance/${chain}/${token}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        }
    }).then(res => res.json());
    return data
};

export const getWalletAddress = async(chain)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return;
    const data = await fetch(`${baseURL}web3/wallet-address/${chain}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        }
    }).then(res => res.json());
    return data
};

export const calculateTax = async(payload)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}web3/calculate-txn-fees/${pinia.state.selectedNetwork}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        },
        body:JSON.stringify(payload)
    }).then(res => res.json());
    return data
};


export const swapCoin = async(payload)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}fiat/swap`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        },
        body:JSON.stringify(payload)
    }).then(res => res.json());
    return data
}
//set expiration date 
export function addMinutes(minutesToAdd) {
 
    return new Date(new Date().getTime() + minutesToAdd * 60000);
  }