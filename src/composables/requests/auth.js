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

export const Verify_account = async(acct_verification)=>{
    const data = await fetch(`${baseURL}auth/verify-account`,{ 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(acct_verification)

    }).then(res => res.json());
    return data;
};

export const Resend_Code = async(codeMsg)=>{
    const data = await fetch(`${baseURL}auth/resend-email-code`,{ 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(codeMsg)

    }).then(res => res.json());
    return data;
};

export const Change_password = async(changePasskey)=>{
    const data = await fetch(`${baseURL}auth/change-password`,{ 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(changePasskey)

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

export const signIn = async(userLogin)=>{
    const data = await fetch(`${baseURL}auth/sign-in`,{ 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(userLogin)

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