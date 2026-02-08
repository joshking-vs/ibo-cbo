import axios from 'axios';

// Replace the old Railway URL with your new Koyeb URL from the screenshot
const API_BASE_URL = 'https://deafening-franky-ibo-cbo-b1eebb57.koyeb.app/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchOrganization = () => api.get('/organization/');
export const fetchServices = () => api.get('/services/');
export const fetchTeam = () => api.get('/team/');

// Fix for the 'response is assigned a value but never used' warning
export const sendContactMessage = async (data) => {
    const response = await api.post('/contact/send_message/', data);
    return response.data; // Now 'response' is used!
};

export default api;