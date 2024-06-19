export const getMarketOffers = async(pageNumber)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}p2p-marketplace/offers/${pinia.state.selectedNetwork.toLowerCase()}/${pageNumber}`,{ 
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${pinia.state.user?.token}`
    },

    }).then(res => res.json());
    return data;
};

export const createOffer = async(payload)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}p2p-marketplace/create-offer/${pinia.state.selectedNetwork.toLowerCase()}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        },
        body:JSON.stringify(payload)
    }).then(res => res.json());
    return data
};