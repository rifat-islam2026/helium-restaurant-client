import axios from 'axios';
import { useNavigate } from "react-router-dom";
import useAuth from '../Hooks/useAuth';

const axiosSecure = axios.create(
    {
        baseURL: import.meta.env.VITE_API_URL,
        withCredentials:true
    }
)

function useAxiosSecure() {
    const { logout } = useAuth();
    const navigate = useNavigate();
   
    axiosSecure.interceptors.response.use(
        res => {
            return res;
        },
       async err => {
            console.log('error from axios interceptor->', err.response)
            if (err.response.status === 401 || err.response.status === 403) {
                await logout();
                navigate('/login')
           }
           return Promise.reject(err)
        }
  )

    return axiosSecure;
}

export default useAxiosSecure
