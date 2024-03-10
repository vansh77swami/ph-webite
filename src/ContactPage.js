import React, { useState, useRef } from 'react';
import './css/ContactPage.css';

function ContactPage() {
  // Define refs for the inputs
  const nameInput = useRef(null);
  const subjectInput = useRef(null); // Use subjectInput instead of emailInput
  const messageInput = useRef(null);

  const [formState, setFormState] = useState({
    subject: '', // Use subject instead of email
    name: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!nameInput.current.checkValidity()) {
      nameInput.current.reportValidity();
      return;
    }
    
    if (!subjectInput.current.checkValidity()) { // Use subjectInput instead of emailInput
      subjectInput.current.reportValidity();
      return;
    }
    
    if (!messageInput.current.checkValidity()) {
      messageInput.current.reportValidity();
      return;
    }
  
    // If all inputs are valid, proceed with email creation
    const { subject, name, message } = formState; // Use subject instead of email
    const body = `Name: ${name}\nSubject: ${subject}\n\nMessage:\n${message}`; // Include subject in the body
    const encodedBody = encodeURIComponent(body);
    const mailto = `mailto:contact@projecthit.tech?subject=${encodeURIComponent(subject)}&body=${encodedBody}`;
    
    window.location.href = mailto;
  };

  return (
    <div className="contact-page-container">
      <div className="contact-page">
        <h1>Contact</h1>
        <p className="contact-page-subheading">Connect with us for support and inquiries</p>

        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="input-group">
            <input
              ref={nameInput}
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              ref={subjectInput} // Using subjectInput ref
              type="text"
              name="subject" // Change name property to "subject"
              value={formState.subject} // Use formState.subject
              onChange={handleChange}
              placeholder="Subject" // Change placeholder to "Subject"
              required
            />
          </div>
          <textarea
            ref={messageInput}
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Type your message here"
            required
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
