import axios from "axios";

const api = axios.create({
    baseURL:'https://goalgear-l3iw.onrender.com',
    withCredentials:true
})

export default api;