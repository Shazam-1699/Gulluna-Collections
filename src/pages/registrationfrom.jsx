import React from 'react';
import '../assets/styles/registrationform.css';
import Navbar from '../components/partials/navbar';
import Footer from '../components/partials/footer';

function RegistrationForm() {
  return (
    <div>
        <Navbar />
    <div className="registration-container">
      <h1 className="registration-h1">Registration Form</h1>
      <p className="registration-p">Any Questions Or Remarks? Just Write Us A Message!</p>
      <form>
        <div className="input-row">
          <input type="text" placeholder="Name" className="registration-input" />
          <input type="email" placeholder="Email" className="registration-input" />
        </div>
        <div className="input-row">
          <input type="text" placeholder="Phone Number" className="registration-input" />
          <input type="text" placeholder="Phone Number" className="registration-input" />
        </div>
        <textarea placeholder="Postal Address" className="registration-textarea"></textarea>
        <textarea placeholder="Permanent Address" className="registration-textarea"></textarea>
        <button className="submit-btn">Submit</button>
      </form>
    </div>
    <Footer />
    </div>
  );
}

export default RegistrationForm;
