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


export const updateOrder = async(payload,offer_id)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}p2p-marketplace/${pinia.state.selectedNetwork.toLowerCase()}/${offer_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        },
        body:JSON.stringify(payload)

    }).then(res => res.json());
    return data
};

export const createOrder = async(payload,offer_id)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}p2p-marketplace/create-order/${offer_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        },
        body:JSON.stringify(payload)

    }).then(res => res.json());
    return data
};

export const createOrderforP2P = async(payload)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}p2p-order/create-order`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        },
        body:JSON.stringify(payload)

    }).then(res => res.json());
    return data
}

export const getmyOrders = async(pageNumber)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}p2p-order/my-orders/${pageNumber}`,{ 
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${pinia.state.user?.token}`
    },

    }).then(res => res.json());
    return data;
};

export const deleteOffer = async(offer_id)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}p2p-marketplace/${offer_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        },

    }).then(res => res.json());
    return data
}

export const personal_Offer = async(pageNumber)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}p2p-marketplace/my-offers/${pinia.state.selectedNetwork.toLowerCase()}/${pageNumber}`, {
        method: 'Get',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        },
    
        }).then(res => res.json());
        return data;
 };

 export const cancelOrderforP2P = async(payload)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}p2p-order/cancel-order/${pinia.state.selected_trade_ID_from_active_trade}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        },
        body:JSON.stringify(payload)

    }).then(res => res.json());
    return data
}


    