import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qdszzei', 'template_7cxjbij', form.current, '4PGCka87R1EClPpRx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
  <div className="container mt-5 mb-5 pb-5 text-dark">
      <h2>Feedback Form</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
           <input
            type="text"
            className="form-control"
            name="user_name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            name="user_email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="query">Query:</label>
          <textarea
            className="form-control"
            name="message"
            rows="4"
            placeholder="Enter your query"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-outline-primary mt-3">
          Submit
        </button>
      </form>
    </div>
    </>
  )
  
};
export default Contact