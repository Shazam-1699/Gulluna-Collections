import React from "react";
import Navbar from "../components/partials/navbar";
import Footer from "../components/partials/footer";
import "../assets/styles/categoryStyle.css";
import Bottom from "../assets/images/Categories/Bottoms.png";
import Dress from "../assets/images/Categories/Dresses.png";
import Scarf from "../assets/images/Categories/Scarfs.png";
import Shawl from "../assets/images/Categories/Shawls.png";
import Top from "../assets/images/Categories/Top.png";

function Categories() {
    return (
        <div className="category-container">
            <Navbar />
            <div id="categories">
      <h2 className="categories-h2">Categories</h2>
      <div id="parts">
        <div className="part">
          <div id="large">
            <div className="octagon-container">
              <img src={Top} className="octagon" height="150px" alt="Tops" />
            </div>
          </div>
          <div id="small">Tops</div>
        </div>
        <div className="part">
          <div id="large">
            <div className="octagon-container">
              <img src={Dress} className="octagon" height="150px" alt="Dresses" />
            </div>
          </div>
          <div id="small">Dresses</div>
        </div>
        <div className="part">
          <div id="large">
            <div className="octagon-container">
              <img src={Shawl} className="octagon" height="150px" alt="Shawls" />
            </div>
          </div>
          <div id="small">Shawls</div>
        </div>
        <div className="part">
          <div id="large">
            <div className="octagon-container">
              <img src={Scarf} className="octagon" height="150px" alt="Scarfs" />
            </div>
          </div>
          <div id="small">Scarfs</div>
        </div>
        <div className="part">
          <div id="large">
            <div className="octagon-container">
              <img src={Bottom} className="octagon" height="150px" alt="Bottoms" />
            </div>
          </div>
          <div id="small">Bottoms</div>
        </div>
      </div>
    </div>
        <Footer />
        </div>
    );
}

export default Categories;