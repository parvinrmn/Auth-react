import axios from "axios";
import {BASE_URL} from './Constants'
import {getToken} from './Utils'



const request = axios.create({
    baseURL:BASE_URL
})

request.interceptors.request.use(
    function(config){
            const token = getToken();
            if(token){
                config.headers.Authorization= `bearer ${token}`
            }
            return config;
    },
    function(error){
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    function(response){
        return response;
    },
    function(error){
        return Promise.reject(error)
    }
)
export default request;