import api from './api'

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

export const getUser = ()=>{
    return api.get('api/user/get-user');
}