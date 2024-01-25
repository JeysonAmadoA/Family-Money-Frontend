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

export const memberAxios = axios.create({
    baseURL : API_ENDPOINTS.MEMBERS,
    withCredentials: true,
});

export const periodAxios = axios.create({
    baseURL : API_ENDPOINTS.PERIODS,
    withCredentials: true,
});

export const budgetAxios = axios.create({
    baseURL : API_ENDPOINTS.BUDGETS,
    withCredentials: true,
});

export const expenseAxios = axios.create({
    baseURL : API_ENDPOINTS.EXPENSES,
    withCredentials: true,
});

export const paymentAxios = axios.create({
    baseURL : API_ENDPOINTS.PAYMENTS,
    withCredentials: true,
});



