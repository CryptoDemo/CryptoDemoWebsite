export const getcountries = async(pageNumber)=>{
    const data = await fetch(`${baseURL}country/all/${pageNumber}`,{ 
    headers: {
        'Content-Type': 'application/json',
    },

    }).then(res => res.json());
    return data;
};