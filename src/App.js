import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import { ApiService } from './api/ApiService';

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchQuery) => {
    setIsLoading(true);
    setError(null);

    try {
      const allBooks = await ApiService.books.getAll();
      const filteredBooks = allBooks.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setBooks(filteredBooks);
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
      </header>
      <main className="App-content">
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        <BookList books={books} />
      </main>
    </div>
  );
}

export default App;
