import axios from "axios";

//https://goalgear-l3iw.onrender.com

const api = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:true
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;