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


export const getActivityLogs = async(pageNumber)=>{
    const pinia = useStore();
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
    const data = await fetch(`${baseURL}user/check-username-availability/${username}`,{ 
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
    const data = await fetch(`${baseURL}notification/${pageNumber}`,{ 
    headers: {
        'Content-Type': 'application/json',
        'x-access-token' : `${pinia.state.user?.token}`
    },

    }).then(res => res.json());
    return data;
};