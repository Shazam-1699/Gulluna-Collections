import React from "react";
import Navbar from "../../components/partials/navbar";
import Footer from "../../components/partials/footer";
import "../../assets/styles/tops.css";
import Productcard from "../../components/partials/productcard";


function Top() {
    return (
        <div className="tops-container">
            <Navbar />
           
           <h3 id="Header1" > <a href="/home"> <span id="spanHeader1">Home  </span> </a>  / <a href="/categories">Categories </a> / <a href="/tops"> Tops </a> </h3>

           <div id="display">
            <h1 id="display-heading">Trendy Tops For All Ocassion _ Gulluna</h1>
            <p id="display-para">Guluna Clothing offers elegant traditional wear, featuring intricately embroidered shawls and culturally authentic dresses for women <br />
            Blending heritage with modern elegance, our collection ensurestimeless style for every occasion.</p>
           </div>
        
           <h3 id="seasonHeading">Summer Collection</h3>
           
           <div id="productBoxes">
        
        <Productcard />

        <Productcard />

        <Productcard />

        <Productcard />

        <Productcard />

        <Productcard />

        <Productcard />

        <Productcard />

           </div>
     
        <Footer />
        </div>
    );
}

export default Top;