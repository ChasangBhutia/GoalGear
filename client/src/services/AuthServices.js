import api from './api'

export const register = (userData)=>{
    return api.post('api/auth/register', userData);
}

export const login = (userData)=>{
    return api.post('api/auth/login', userData);
}

export const logout = ()=>{
    return api.post('api/auth/logout');
}