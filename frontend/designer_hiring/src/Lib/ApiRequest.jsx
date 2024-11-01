import axios from "axios";


const token = localStorage.getItem('token');
// console.log(token);

const ApiRequest = axios.create({
    baseURL:"https://dh-16u9.onrender.com",
    headers:{
        'Content-Type': 'application/json',
    }
});

ApiRequest.interceptors.request.use(config =>{
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default ApiRequest
