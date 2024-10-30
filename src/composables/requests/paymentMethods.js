export const getPaymentMethod = async(pageNumber)=>{
    // const pinia = useStore();

    const data = await fetch(`${baseURL}payment-methods/get/${pageNumber}`,{ 
    headers: {
        // 'Content-Type': 'application/json',
        // 'x-access-token': `${pinia.state.user?.token}`
    },

    }).then(res => res.json());
    return data;
};