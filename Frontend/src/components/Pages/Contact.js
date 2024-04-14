import React from "react";
import CustomNavbar from "../Main/CustomNavbar";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <CustomNavbar />
      <div className="contact-container">
        <h1> Contact Us</h1>
        <div className="contact-title">
          <p>Have a question? Get in touch with us!</p>
        </div>
        <div className="contact-info">
          <div className="contact-name">
            <label htmlfor="my-name">Your Name</label>
            <br />
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="contact-email">
            <label htmlfor="my-email">Your Email</label> <br />
            <input type="text" placeholder="Enter Email" />
          </div>

          <div className="contact-message">
            <br />
            <label htmlfor="messages">Messages</label>
            <input type="text" placeholder="Enter Message" />
          </div>

          <div className="contact-button">
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
