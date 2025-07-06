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

export const uploadImage = (userImage)=>{
    return api.put('api/user/upload-profile-image', userImage);
}

export const addAddress = (addressDetail)=>{
    return api.post('api/user/add-address', addressDetail);
}

export const removeAddress = (addressId)=>{
    return api.delete(`api/user/remove-address/${addressId}`)
}

export const getUser = ()=>{
    return api.get('api/user/get-user');
}