import axios from "axios";
import { toast } from "react-toastify";

const axiosGuest = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

axiosGuest.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axiosGuest.interceptors.response.use(function (response) {
    return response;
  }, function (error) {

    if(error?.status === 500){
      toast.error('axiosGuest Error')
    }

    return Promise.reject(error);
  });

export default axiosGuest