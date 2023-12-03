import axios from 'axios';

const API_BASE_URL = 'https://34.117.74.222.nip.io/bookresearcherproxy';
const API_KEY = process.env.REACT_APP_API_KEY; // Ensure this is set in your .env file

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  params: { apikey: API_KEY },
});

// Books
const books = {
  getAll: async () => {
    const response = await apiClient.get('/api/Books');
    return response.data;
  },
  getById: async (id) => {
    const response = await apiClient.get(`/api/Books/${id}`);
    return response.data;
  },
  // ... other methods like create, update, delete
};

// Other entities like authors, libraryBranches, etc., as per your existing ApiService.js

export const ApiService = {
  books,
  // ... other entities
};
