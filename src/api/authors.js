import {apiClient} from './ApiService'; // Assuming ApiService.js exports the configured axios instance

const AUTHORS_API_PATH = '/api/Authors';

const authorsApi = {
  // Fetch all authors
  getAllAuthors: async () => {
    try {
      const response = await apiClient.get(AUTHORS_API_PATH);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Fetch a single author by ID
  getAuthorById: async (id) => {
    try {
      const response = await apiClient.get(`${AUTHORS_API_PATH}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Add other author-related API calls if needed
};

export default authorsApi;
