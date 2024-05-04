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
    const data = await fetch(`${baseURL}web3/token-balance/${chain}/${token}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        }
    }).then(res => res.json());
    return data
}