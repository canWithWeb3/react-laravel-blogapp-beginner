import axios from "axios";
import { toast } from "react-toastify";

const axiosAdmin = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/admin`,
    headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth_token'))}`
    }
})

axiosAdmin.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axiosAdmin.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    console.log('error', error)
    if(error?.status === 401){
      console.log('401 hatası')
      // window.location.href = '/giris-yap'
    }

    if(error?.status === 500){
      toast.error('axiosAdmin Error')
    }

    return Promise.reject(error);
  });

export default axiosAdmin