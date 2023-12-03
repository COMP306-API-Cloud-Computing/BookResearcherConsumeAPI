import {apiClient} from './ApiService';

const BOOK_AVAILABILITY_API_PATH = '/api/BookAvailability';

const bookAvailabilityApi = {
  // Fetch all book availability records
  getAllBookAvailability: async () => {
    try {
      const response = await apiClient.get(BOOK_AVAILABILITY_API_PATH);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Fetch a specific book availability by book and library IDs
  getBookAvailabilityByIds: async (bookId, libraryId) => {
    try {
      const response = await apiClient.get(`${BOOK_AVAILABILITY_API_PATH}/${bookId}/${libraryId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Add additional methods as needed for your application
};

export default bookAvailabilityApi;
