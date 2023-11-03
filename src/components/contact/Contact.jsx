import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import './contact.scss';

export const Contact = () => {
  const form = useRef();

  const YOUR_SERVICE_ID = 'service_rk4ffie';
  const YOUR_TEMPLATE_ID = 'template_8iut0dn';
  const YOUR_PUBLIC_KEY = '0sSTcMEhc1RsHVlwH';

  const [status, setStatus] = useState("Submit");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    await emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        setStatus("Submit");
      }, function(error) {
        console.log('FAILED...', error);
        setStatus("Error. Please try again later.");
      });

    alert(result.status);
  };

  return (
    <form ref={form} onSubmit={sendEmail}  id="Contact" className="contactForm">
      <div className="title">
        <h2>Have a question?</h2>
        <p>Reach out to me here and we can setup time to chat!</p>
      </div>
      <div className="textSubmit">
      <div className="nameWrapper">
        <label htmlFor="name" >Name:</label>
        <input type="text" name="user_name" required />
      </div>
      <div className="emailWrapper">
        <label htmlFor="email">Email:</label>
        <input type="email" name="user_email" required />
      </div>
      <div className="messageWrapper">
        <label htmlFor="message">Message:</label>
        <textarea name="message" required />
      </div>
      </div>
      <button type="submit" className="submitButton">{status}</button>
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;
