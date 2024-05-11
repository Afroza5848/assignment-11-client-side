import axios from 'axios';

const axiosSequire = axios.create({
    baseURL: import.meta.env.VITE_URL,
    withCredentials: true,
}) 
const useAxiosSequre = () => {
    return axiosSequire;
};

export default useAxiosSequre;