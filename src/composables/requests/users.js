export const passwordUpdate = async(updatePassword)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
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

export const Init2fa = async()=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}user/init-2fa`,{ 
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token' : `${pinia.state.user?.token}`
    },
    }).then(res => res.json());
    return data;
};

export const Remove2fa = async()=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return;
    const data = await fetch(`${baseURL}user/remove-2fa`,{ 
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token' : `${pinia.state.user?.token}`
    },
    }).then(res => res.json());
    return data;
};

export const Verify2FA = async(authentication)=>{
    const data = await fetch(`${baseURL}user/verify-2fa`,{ 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(authentication)

    }).then(res => res.json());
    return data;
};

export const getActivityLogs = async(pageNumber)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}activity-log/${pageNumber}`,{ 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token' : `${pinia.state.user?.token}`
        },
    }).then(res => res.json());
    return data;
};

export const checkUsernameAvailability = async(username)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}user/check-username-availability/${username}`,{ 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token' : `${pinia.state.user?.token}`
        },
    }).then(res => res.json());
    return data;
};

export const getUserInfo = async(username)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}user/get-user-by-username/${username}`,{ 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token' : `${pinia.state.user?.token}`
        },
    }).then(res => res.json());
    return data;
};

export const updateUser = async(UpdateUserDetails)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}user`,{ 
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token' : `${pinia.state.user?.token}`
        },
        body: JSON.stringify(UpdateUserDetails)
        
    }).then(res => res.json());
    return data;
};



export const getNotifications = async(pageNumber)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}broadcast/user/${pageNumber}`,{ 
    headers: {
        'Content-Type': 'application/json',
        'x-access-token' : `${pinia.state.user?.token}`
    },

    }).then(res => res.json());
    return data;
};

// the following endPoints are for transfer pin

export const set_Pin = async(payload)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}user/pin/new`,{ 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token' : `${pinia.state.user?.token}`
    },
    body: JSON.stringify(payload)

    }).then(res => res.json());
    return data;
};


export const verify_Pin = async(payload)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}user/pin/verify`,{ 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token' : `${pinia.state.user?.token}`
    },
    body: JSON.stringify(payload)

    }).then(res => res.json());
    return data;
};

export const Init_pin_recovery = async(payload)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}user/pin/init-reset`,{ 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token' : `${pinia.state.user?.token}`
        },
    }).then(res => res.json());
    return data;
};

export const kyc_verification = async(payload)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}kyc/access-token`,{ 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token' : `${pinia.state.user?.token}`
        },
    }).then(res => res.json());
    return data;
};

export const removeCamouflage = async(payload)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}user/remove-camouflage`,{ 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token' : `${pinia.state.user?.token}`
        },
    }).then(res => res.json());
    return data;
};

export const reset_Pin = async(payload)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}user/pin/reset`,{ 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token' : `${pinia.state.user?.token}`
    },
    body: JSON.stringify(payload)

    }).then(res => res.json());
    return data;
};

export const address_Book = async(payload)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}address-book`,{ 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token' : `${pinia.state.user?.token}`
    },
    body: JSON.stringify(payload)

    }).then(res => res.json());
    return data;
};

export const getAddress_Book = async(pageNumber)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}address-book/get/${pageNumber}`,{ 
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token' : `${pinia.state.user?.token}`
    },

    }).then(res => res.json());
    return data;
};