// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.214:1337/admin/plugins/content-type-builder/content-types/api::place.place', 
});

export const getDetails = async () => {
  try {
    const response = await api.get('/details'); 
    return response.data;
  } catch (error) {
    console.error('Error fetching details:', error);
    throw error;
  }
};
