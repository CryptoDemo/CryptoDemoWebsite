
export const uploadUserFile = async(fd,token)=>{
    const data = await fetch(`${baseURL}file/upload`,{ 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
    },
    body: fd

    }).then(res => res.json());
    return data;
};

