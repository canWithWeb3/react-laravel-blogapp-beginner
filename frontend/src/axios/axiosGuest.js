import axios from 'axios';
import { toast } from 'react-toastify';

const axiosGuest = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
});

axiosGuest.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    console.log('error', error)
    const { status } = error
    
    if(status === 401)
        return toast.error('Yetkiniz yok')

    if(status === 500)
        return toast.error('Bilinmeyen Hata')
    
    return Promise.reject(error);
  });

export default axiosGuest