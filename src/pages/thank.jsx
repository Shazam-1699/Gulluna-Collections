import React from "react";
import Navbar from "../components/partials/navbar";
import Footer from "../components/partials/footer";
import "../assets/styles/thank.css";
import bag from "../assets/images/shopping-bag.png";
import party from "../assets/images/Wormies Confetti.png";


function thankyou() {
    return (
        <div className="thankyou-container">
            <Navbar />
           
         <div id="thank-main">
             <img id="party" src={party} alt="party confetti" />
             <img id="bag" src={bag} alt="shopping bag icon" />

             <h1 id="thank-heading">Your Satisfaction Matters! Thank You For Your Trust <br />
             We're Committed To Excellence</h1>

             <p id="thank-para"> Your Satisfaction Matters! Thank You For Your Trust <br />
             We're Committed To Excellence</p>

             <button id="thank-btn"> Continue Shopping</button>
         </div>
       
      
     
        <Footer />
        </div>
    );
}

export default thankyou;