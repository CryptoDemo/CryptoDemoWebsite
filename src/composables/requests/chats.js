export const getMessages = async(pageNumber)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}chat/messages/${pinia.state.selected_trade_ID}/${pageNumber}`,{ 
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${pinia.state.user?.token}`
    },

    }).then(res => res.json());
    return data;
};

export const sendMessages = async(payload)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}chat/send`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        },
        body:JSON.stringify(payload)

    }).then(res => res.json());
    return data
}

export const releaseOder = async(payload)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}p2p-marketplace/release-offer-order`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        },
        body:JSON.stringify(payload)

      }).then(res => res.json());
    return data
 };

export const createDispute = async(payload)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}p2p-disputes/create-dispute`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        },
        body:JSON.stringify(payload)

      }).then(res => res.json());
    return data
 };

