
export const uploadUserFile = async(fd)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}file/upload`,{ 
    method: 'POST',
    headers: {
        // 'Content-Type': 'application/json',
        'x-access-token': `${pinia.state.user?.token}`
    },
    body: fd

    }).then(res => res.json());
    return data;
};

