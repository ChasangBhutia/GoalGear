import api from './api'

export const verifyOtp = (email, otp)=>{
    return api.post('api/auth/verify-otp' , {email:email, otp:otp});
}

export const getOtp = (email)=>{
    return api.post('api/auth/send-otp' , {email: email});
}

export const register = (userData)=>{
    return api.post('api/auth/register', userData);
}

export const login = (userData)=>{
    return api.post('api/auth/login', userData);
}

export const logout = ()=>{
    return api.get('api/auth/logout');
}
