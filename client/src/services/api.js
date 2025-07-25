import axios from "axios";

const api = axios.create({
    baseURL:'https://goalgear-l3iw.onrender.com/',
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