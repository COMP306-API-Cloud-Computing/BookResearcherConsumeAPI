import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import { booksApi, authorsApi, librariesApi, bookAuthorsApi, bookAvailabilityApi } from './api/ApiService';

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to add a new book
  const handleBookAddition = async (bookData) => {
    setIsLoading(true);
    try {
      const addedBook = await booksApi.createBook(bookData); // Assuming createBook is a named export from booksApi
      setBooks([...books, addedBook]); // Add the new book to the local state
      // Optionally, clear the search field or handle the UI response here
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (searchQuery) => {
    setIsLoading(true);
    setError(null);

    try {
      const allBooks = await booksApi.getAllBooks();
      const filteredBooks = searchQuery
        ? allBooks.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()))
        : allBooks;
      const authors = await authorsApi.getAllAuthors();
      const bookAuthors = await bookAuthorsApi.getAllBookAuthors();
      const libraries = await librariesApi.getAllLibraries();
      const bookAvailability = await bookAvailabilityApi.getAllBookAvailability();

      const combinedBooks = filteredBooks.map(book => {
        const bookAuthorRelation = bookAuthors.find(ba => ba.bookID === book.bookID);
        const author = authors.find(a => a.authorID === bookAuthorRelation?.authorID);

        const availability = bookAvailability.filter(ba => ba.bookID === book.bookID);
        const availabilityInfo = availability.map(avail => {
          const library = libraries.find(lib => lib.libraryID === avail.libraryID);
          return {
            libraryName: library ? library.name : 'Unknown',
            quantity: avail.quantity
          };
        });

        return {
          ...book,
          authorName: author ? author.name : 'Unknown',
          availability: availabilityInfo
        };
      });

      setBooks(combinedBooks);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Book Researcher</h1>
        <SearchBar onSearch={handleSearch} />
        {!books.length && <p>Are you looking for books?</p>}
      </header>
      <main className="App-content">
      <div className="book-list">
        <BookList books={books} />
        </div>
      
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        <div className="add-book-form">
        <AddBookForm onAddBook={handleBookAddition} />
        </div>
      </main>
    </div>
  );
}

export default App;
