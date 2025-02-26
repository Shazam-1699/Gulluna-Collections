import React from "react";
import Navbar from "../components/partials/navbar";
import "../assets/styles/productpage.css";
import MKR from "../assets/images/Mahira khan red.png";
import Footer from "../components/partials/footer";


function productPage(){
    return (
        <div>
            <Navbar />
            

            <div id="product-container">

                <div id="product-left">
                    <img src={MKR} alt="mahira khan" id="product-img"  />
                </div>
                <div id="product-right"> Red & Black Silk
                    
                  
                   <p className="product-para">A Dress That Embodies Success. Our Best-Selling Dress Designed To Be Fitted Through The Body.</p>
                  
                   PKR  20,000
                   <p className="product-para">Colors <br />  🔴⚫</p>

<div id="product-material"> 
   
     <div className="product-material-div">Premium Silk</div>
    <div className="product-material-div">Soft Texture</div>
    <div className="product-material-div">Traditioinal Weaving</div>
</div>

  <button id="product-button"> Add to cart</button>
                </div>
            </div>

            <Footer />
        </div>
        
    );
}

export default productPage;