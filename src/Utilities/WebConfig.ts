import axios from 'axios';
import { getCookie } from '.';
import API_ENDPOINTS from './Endpoints';


export const getHeaderConfig = ()  => {

    const jwtToken = getCookie('jwtToken');

        return {
        headers: {
        Authorization:  `Bearer ${jwtToken}`,
        }
    }
} 
    
export const userAxios = axios.create({
    baseURL : API_ENDPOINTS.USERS,
    withCredentials: true,
});

export const groupsAxios = axios.create({
    baseURL : API_ENDPOINTS.GROUPS,
    withCredentials: true,
});
