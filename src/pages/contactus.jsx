import React, { useState } from 'react';
import "../assets/styles/contactus.css";
import Navbar from '../components/partials/navbar';
import chat from "../assets/icons/chat.png";
import callus from "../assets/icons/callus.png";
import email from "../assets/icons/emailus.png";

function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    remarks: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <Navbar />
      <div className="contactus-container">
        <h1 className="contactus-h1">Contact Us</h1>
        <p className="contactus-p">Any Questions Or Remarks? Just Write Us A Message!</p>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contactus-input"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            className="contactus-input"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="remarks"
            placeholder="Enter Your Remarks"
            className="contactus-remarks"
            onChange={handleInputChange}
          />
          <button className="continue-shopping">Continue Shopping</button>
        </form>
        <div className="contactus-cards">
          <div className="contactus-cards chat-with-us">
            <p className="chat-p">Chat with Us</p>
            <p className="chat-p">We Are Here and Ready To Chat</p>
            <button className="contactus-card-btn">Start Chat</button>
          </div>
          <div className="contactus-cards call-us">
            <p className="chat-p">Call Us</p>
            <p className="chat-p">We're Here To Talk To You</p>
            <button className="contactus-card-btn">+92 312 068 3400</button>
          </div>
          <div className="contactus-cards email-us">
            <p className="chat-p">Email Us</p>
            <p className="chat-p">You Are Welcome To Send Us An Email</p>
            <button className="contactus-card-btn">Send Email</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
