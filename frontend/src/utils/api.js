import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchOrganization = () => api.get('/organization/');
export const fetchServices = () => api.get('/services/');
export const fetchTeam = () => api.get('/team/');
export const sendContactMessage = (data) => api.post('/contact/send_message/', data);

export default api;