export const passwordUpdate = async(updatePassword)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}user/update-password`,{ 
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token' : `${pinia.state.user?.token}`
    },
    body: JSON.stringify(updatePassword)

    }).then(res => res.json());
    return data;
};

export const Init2fa = async(Initialize2fa)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}user/init-2fa`,{ 
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token' : `${pinia.state.user?.token}`
    },
 

    }).then(res => res.json());
    return data;
};
