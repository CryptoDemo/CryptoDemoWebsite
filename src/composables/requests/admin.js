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

