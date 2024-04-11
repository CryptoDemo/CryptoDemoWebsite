export const getTokens = async(pageNumber)=>{
    const data = await fetch(`${baseURL}token/all/${pageNumber}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => res.json());
    return data;
}