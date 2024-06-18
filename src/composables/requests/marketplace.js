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