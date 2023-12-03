import axios from 'axios';
import booksApi from './books';
import authorsApi from './authors';
import librariesApi from './libraries';
import bookAuthorsApi from './bookAuthors';
import bookAvailabilityApi from './bookAvailability';

const API_BASE_URL = 'https://34.117.74.222.nip.io/bookresearcherproxy';
const API_KEY = process.env.REACT_APP_API_KEY; // Ensure this is set in your .env file

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  params: { apikey: API_KEY },
});

export {
  apiClient, // Exporting the configured Axios instance
  booksApi,
  authorsApi,
  librariesApi,
  bookAuthorsApi,
  bookAvailabilityApi
};
