import React from 'react';

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Search Results</h2>
      {books.length > 0 ? (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <h3>{book.title}</h3>
              {/* Assuming you have author's name in the book object, adjust as necessary */}
              <p>Author: {book.AuthorName}</p>
              <p>ISBN: {book.isbn}</p>
              {/* Add more details as needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found. Try a different search.</p>
      )}
    </div>
  );
};

export default BookList;
