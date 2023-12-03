import {apiClient} from './ApiService';

const LIBRARIES_API_PATH = '/api/LibraryBranches';

const librariesApi = {
  // Fetch all library branches
  getAllLibraries: async () => {
    try {
      const response = await apiClient.get(LIBRARIES_API_PATH);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Fetch a single library branch by ID
  getLibraryById: async (id) => {
    try {
      const response = await apiClient.get(`${LIBRARIES_API_PATH}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create a new library branch
  createLibrary: async (libraryData) => {
    try {
      const response = await apiClient.post(LIBRARIES_API_PATH, libraryData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update a library branch
  updateLibrary: async (id, libraryData) => {
    try {
      const response = await apiClient.put(`${LIBRARIES_API_PATH}/${id}`, libraryData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete a library branch
  deleteLibrary: async (id) => {
    try {
      const response = await apiClient.delete(`${LIBRARIES_API_PATH}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default librariesApi;
