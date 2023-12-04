
import React from 'react';
import './BookList.css'
const BookList = ({ books }) => {
  return (
    <div className="book-list-container">
      <h2 className="search-results-title">Search Results</h2>
      {books.length > 0 ? (
        <ul className="book-list">
          {books.map((book, index) => (
            <li key={index} className="book-item">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-isbn">ISBN: {book.isbn}</p>
              <p className="book-author">Author: {book.authorName}</p>
              {book.availability && book.availability.map((avail, idx) => (
                <p key={idx} className="book-availability">Available at: {avail.libraryName} (Quantity: {avail.quantity})</p>
              ))}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-books-message">No books found. Try a different search.</p>
      )}
    </div>
  );
};

export default BookList;