// src/api/endpoints.js
const API_ENDPOINTS = {
    LOGIN: import.meta.env.VITE_ENDPOINT_LOGIN,
    USERS: import.meta.env.VITE_ENDPOINT_USERS,
    GROUPS: import.meta.env.VITE_ENDPOINT_GROUPS,
    MEMBERS: import.meta.env.VITE_ENDPOINT_MEMBERS,
    PERIODS: import.meta.env.VITE_ENDPOINT_PERIODS,
    BUDGETS: import.meta.env.VITE_ENDPOINT_BUDGETS,
    EXPENSES: import.meta.env.VITE_ENDPOINT_EXPENSES,
    PAYMENTS: import.meta.env.VITE_ENDPOINT_PAYMENTS,
  };
  
  export default API_ENDPOINTS;
  