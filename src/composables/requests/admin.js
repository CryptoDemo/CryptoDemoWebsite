export const getcountries = async(pageNumber)=>{
    const data = await fetch(`${baseURL}country/all/${pageNumber}`,{ 
    headers: {
        'Content-Type': 'application/json',
    },

    }).then(res => res.json());
    return data;
};

export const getFAQs = async(pageNumber)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}faq/${pageNumber}`,{ 
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${pinia.state.user?.token}`
    },

    }).then(res => res.json());
    return data;
};

export const getBanners = async(pageNumber)=>{
    const pinia = useStore();
    if(!pinia.state.user?.token) return
    const data = await fetch(`${baseURL}app-banner/${pageNumber}`,{ 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        }

    }).then(res => res.json());
    return data;
};

