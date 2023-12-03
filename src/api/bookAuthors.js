import {apiClient} from './ApiService';

const BOOK_AUTHORS_API_PATH = '/api/BookAuthors';

const bookAuthorsApi = {
  // Fetch all book-author relationships
  getAllBookAuthors: async () => {
    try {
      const response = await apiClient.get(BOOK_AUTHORS_API_PATH);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Fetch a specific book-author relationship by book and author IDs
  getBookAuthorByIds: async (bookId, authorId) => {
    try {
      const response = await apiClient.get(`${BOOK_AUTHORS_API_PATH}/${bookId}/${authorId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Add other methods as necessary for your application
};

export default bookAuthorsApi;
