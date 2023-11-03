import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import './contact.scss';

export const Contact = () => {
  const form = useRef();

  const YOUR_SERVICE_ID = 'service_rk4ffie';
  const YOUR_TEMPLATE_ID = 'template_8iut0dn';
  const YOUR_PUBLIC_KEY = '0sSTcMEhc1RsHVlwH';

  const [status, setStatus] = useState("Submit");

  function clearform ()  {
    document.getElementById("Contact").reset();
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    alert(status);
    try{
    await emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        setStatus("Submit");
      }, function(error) {
        console.log('FAILED...', error);
        setStatus("Error. Please try again later.");
      });
    }
    catch(error){
      console.log(error);
      alert("error submitting. Please reach out by email!")
    }
    alert(status);
    clearform();
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
      <button type="submit" value="Send" className="submitButton">{status}</button>
    </form>
  );
};

export default Contact;