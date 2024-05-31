export const getWebTransaction = async(chain, pageNumber)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}transaction/web3/${chain}/${pageNumber}`,{ 
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${pinia.state.user?.token}`
    },

    }).then(res => res.json());
    return data;
};