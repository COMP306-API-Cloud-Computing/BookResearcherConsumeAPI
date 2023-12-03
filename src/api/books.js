import {apiClient} from './ApiService';

const BOOKS_API_PATH = '/api/Books';

const booksApi = {
  // Fetch all books
  getAllBooks: async () => {
    try {
      const response = await apiClient.get(BOOKS_API_PATH);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Fetch a single book by ID
  getBookById: async (id) => {
    try {
      const response = await apiClient.get(`${BOOKS_API_PATH}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create a new book
  createBook: async (bookData) => {
    try {
      const response = await apiClient.post(BOOKS_API_PATH, bookData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update a book
  updateBook: async (id, bookData) => {
    try {
      const response = await apiClient.put(`${BOOKS_API_PATH}/${id}`, bookData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete a book
  deleteBook: async (id) => {
    try {
      const response = await apiClient.delete(`${BOOKS_API_PATH}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default booksApi;
