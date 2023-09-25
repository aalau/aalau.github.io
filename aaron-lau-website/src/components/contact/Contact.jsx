import React, { useState } from "react";
import './contact.scss'
//https://w3collective.com/react-contact-form/
const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit} className="contactForm">
      
      <div className="title">
        <h2>Have a question?</h2>
        <p>Reach out to me here and we can setup time to chat!</p>
      </div>
      <div className="textSubmit">
      <div className="nameWrapper">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div className="emailWrapper">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div className="messageWrapper">
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      </div>
      <button type="submit" className="submitButton">{status}</button>
    </form>
  );
};

export default Contact;