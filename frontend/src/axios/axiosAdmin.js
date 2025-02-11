import axios from 'axios';
import { toast } from 'react-toastify';

const axiosAdmin = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/admin`,
    headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth_token'))}`
    }
});

axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

axiosAdmin.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    const { status, response } = error
    console.log('error', error)

    if(status === 401){
      // localStorage.removeItem('auth_token')
      // toast.error('Yetkiniz yok')
      // window.location.href = '/giris-yap'
    }

    if(status === 500){
      if(response.data?.error == "Global ErrorUnauthenticated."){
        throw new axios.Cancel('Operation canceled by the user.');
      }

      return toast.error('Bilinmeyen Hata')
    }
    
    return Promise.reject(error);
  });

export default axiosAdmin