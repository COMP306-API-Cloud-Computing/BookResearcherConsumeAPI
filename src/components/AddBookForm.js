// AddBookForm.js

import React, { useState } from 'react';
import './AddBookForm.css';
const AddBookForm = ({ onAddBook }) => {
  const [bookData, setBookData] = useState({
    title: '',
    isbn: '', // Add other book data fields as necessary
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook(bookData);
    setBookData({ title: '', isbn: '' }); // Reset the form
  };

  return (
    <div className="add-book-form-container">
    <form onSubmit={handleSubmit} className="add-book-form">
    <div className="form-group">
      <input
        className="form-control"
        name="title"
        value={bookData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      </div>
      <div className="form-group">
      <input
        className="form-control"
        name="isbn"
        value={bookData.isbn}
        onChange={handleChange}
        placeholder="ISBN"
        required
      />
        </div>
      {/* Add inputs for other book data fields */}
      <div className="form-group">
          <button className="btn btn-primary" type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
