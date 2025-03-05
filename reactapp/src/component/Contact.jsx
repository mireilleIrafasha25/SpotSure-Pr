import React from "react";
import "../styles/contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src="ContactImage2.jpg" alt="Contact" />
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
          
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          
          <label>Phone Number</label>
          <input type="text" placeholder="Enter your phone number" />
          
          <label>Message</label>
          <textarea placeholder="Enter your message"></textarea>
          
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
