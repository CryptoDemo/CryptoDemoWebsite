export const fundFiatWallet = async(payload)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}fiat/fund-wallet`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        },
    body: JSON.stringify(payload)
    }).then(res => res.json());
    return data
};

export const sendFiat = async(payload)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}fiat/send`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        },
    body: JSON.stringify(payload)
    }).then(res => res.json());
    return data
};

export const WithdrawFund = async(payload)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}fiat/add-withdrawal-account`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        },
    body: JSON.stringify(payload)
    }).then(res => res.json());
    return data
};

export const swapFund = async(payload)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}fiat/swap`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        },
    body: JSON.stringify(payload)
    }).then(res => res.json());
    return data
};

export const getbals = async()=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}fiat/balances`, {
        method: 'GET',
        headers: {
            'x-access-token': `${pinia.state.user?.token}`
        },
    }).then(res => res.json());

    if(data?.success && data?.data?.length){
        pinia.setTotal_fiat_bal(data.data);
    }
};

export const allFiatTxn = async()=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}transaction/fiat/${pageNumber}`, {
        method: 'GET',
        headers: {
            'x-access-token': `${pinia.state.user?.token}`
        },
    }).then(res => res.json());

    if(data?.success && data?.data?.length){
        setFiat_transactions(data.data);
    }
};

export const setupStripe = async()=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}fiat/connect-stripe-account`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        }
    }).then(res => res.json());
    return data

}