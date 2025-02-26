import axios from 'axios';

const API_BASE_URL = "http://localhost:8080";

export const getTickets = () => axios.get(`${API_BASE_URL}/tickets`);
export const buyTicket = () => axios.post(`${API_BASE_URL}/customer/buyTicket`);
export const addTickets = (count) => axios.post(`${API_BASE_URL}/vendor/addTickets?count=${count}`);
export const saveConfiguration = (config) =>
    axios.post(`${API_BASE_URL}/api/configuration`, config);
export const getConfiguration = () => axios.get(`${API_BASE_URL}/api/configuration`);
export const notifyClients = (message) =>
    axios.post(`${API_BASE_URL}/notify`, message);
