export const passwordUpdate = async(updatePassword)=>{
    const data = await fetch(`${baseURL}user/update-password`,{ 
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatePassword)

    }).then(res => res.json());
    return data;
};