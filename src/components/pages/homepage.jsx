import React from "react";
import Header from "../partials/header";
import Footer from "../partials/footer";
import "../../assets/styles/homepage.css";
import Model from "../../assets/images/Mahira Khan.png"

function Homepage(){
    return(
        <div>
            <Header />
            <div className="container">
            <section className="section-text">
                <h1>Elevate Your Shopping Experience Today!</h1>
                <p>
                    Guluna Clothing offers elegant traditional wear, featuring intricately 
                    embroidered shawls and culturally authentic dresses for women. 
                    Blending heritage with modern elegance, our collection ensures 
                    timeless style for every occasion.
                </p>
                <button >Explore Now</button>
            </section>
            <div className="image-container">
                <img src={Model} alt="Styled Woman" />
            </div>
            </div>
            <section className="collections">
                <h1>New Collections</h1>
                <p> Discover Guluna Clothing's latest collection, where timeless tradition meets contemporary elegance in beautifully crafted shawls and dresses.</p>
            </section>
            
            <Footer /> 
        </div>
    );
}

export default Homepage;