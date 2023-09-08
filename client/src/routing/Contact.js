import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
    rating: 'good',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div className="container mt-5 mb-5 pb-5 text-dark">
      <h2>Feedback Form</h2>
      <form action='/onformsubmit' method='post'>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="query">Query:</label>
          <textarea
            className="form-control"
            id="query"
            name="query"
            rows="4"
            placeholder="Enter your query"
            value={formData.query}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group mt-2">
          <label>Ratings:</label>
          <br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="rating"
              id="good"
              value="good"
              checked={formData.rating === 'good'}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="good">
              Very Good
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="rating"
              id="poor"
              value="poor"
              checked={formData.rating === 'poor'}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="poor">
              Good
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="rating"
              id="verygood"
              value="verygood"
              checked={formData.rating === 'verygood'}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="verygood">
              Poor
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-outline-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
