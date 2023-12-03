
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
              <p>ISBN: {book.isbn}</p>
              <p>Author: {book.authorName}</p>
              {book.availability && book.availability.map((avail, idx) => (
                <p key={idx}>Available at: {avail.libraryName} (Quantity: {avail.quantity})</p>
              ))}
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