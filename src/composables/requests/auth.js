export const register_ = async(registerInfo)=>{
    const data = await fetch(`${baseURL}auth/sign-up`,{ 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(registerInfo)

    }).then(res => res.json());
    return data;
};

export const verifyOtp = async(Otpmsg)=>{
    const data = await fetch(`${baseURL}auth/resend-email-code`,{ 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(Otpmsg)

    }).then(res => res.json());
    return data;
};

export const accountRecovery = async(accountrec)=>{
    const data = await fetch(`${baseURL}auth/init-account-recovery`,{ 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(accountrec)

    }).then(res => res.json());
    return data;
};

export const signUp = async(userLogin)=>{
    const data = await fetch(`${baseURL}auth/sign-in`,{ 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(userLogin)

    }).then(res => res.json());
    return data;
};

export const newpassword = async(changePassword)=>{
    const data = await fetch(`${baseURL}auth/change-password`,{ 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(changePassword)

    }).then(res => res.json());
    return data;
};