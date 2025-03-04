import React from "react";
import Navbar from "../components/partials/navbar";
import Footer from "../components/partials/footer";
import "../assets/styles/categoryStyle.css";
import Bottom from "../assets/images/Categories/Bottoms2.jpg";
import Dress from "../assets/images/Categories/dress2.jpg";
import Scarf from "../assets/images/Categories/scarf4.jpg";
import Shawl from "../assets/images/Categories/Shawl2.jpg";
import Top from "../assets/images/Categories/Top2.jpg";

function Categories() {
    return (
        <div className="category-container">
            <Navbar />
           

      
      <div id="categories-main">
        <a href="/tops">
        <div className="categories-part">
          <div id="large">
            
              <img src={Top} className="octagon" height="150px" alt="Tops" />
           
          </div>
          <h1 id="small">Tops</h1>
       </div>
       </a>
        <div className="categories-part">
          <div id="large">
            
              <img src={Dress} className="octagon" height="80px" alt="Dresses" />
           
          </div>
          <h1 id="small">Dresses</h1>
        </div>
        <div className="categories-part">
          <div id="large">
            
              <img src={Shawl} className="octagon" height="150px" alt="Shawls" />
            
          </div>
          <h1 id="small">Shawls</h1>
        </div>
        <div className="categories-part">
          <div id="large">
           
              <img src={Scarf} className="octagon" height="100px" alt="Scarfs" />
            
          </div>
          <h1 id="small">Scarfs</h1>
        </div>
        <div className="categories-part">
          <div id="large">
            
              <img src={Bottom} className="octagon" height="150px" alt="Bottoms" />
            
          </div>
          <h1 id="small">Bottoms</h1>
        </div>
        </div>
     
        <Footer />
        </div>
    );
}

export default Categories;