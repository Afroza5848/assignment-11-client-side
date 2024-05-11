import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const axiosSequire = axios.create({
    baseURL: import.meta.env.VITE_URL,
    withCredentials: true,
}) 
const useAxiosSequre = () => {
    const {logOut} = useContext(AuthContext)
    // const navigate = useNavigate()
    // axiosSequire.interceptors.response.use(
    //     res => {
    //         return res;
    //     },
    //     error => {
    //         if(error.response.status === 401 || error.response.status === 403){
    //             logOut();
    //             // navigate('/login')
    //         }
    //         return Promise.reject(error);
    //     }
    // )
    return axiosSequire;
};

export default useAxiosSequre;