import React, { useState } from 'react';
import axios from 'axios';

function AddBook() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [availabilityStatus, setAvailabilityStatus] = useState(false);

  const handleAddBook = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Assume token is stored in local storage after login
    const bookData = { name, author, availabilityStatus };

    try {
      await axios.post('http://localhost:5000/api/books', bookData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      alert('Book added successfully');
    } catch (error) {
      alert('Failed to add book');
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Add a New Book</h2>
      <form onSubmit={handleAddBook}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="availabilityStatus"
            checked={availabilityStatus}
            onChange={(e) => setAvailabilityStatus(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="availabilityStatus">
            Availability Status
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
