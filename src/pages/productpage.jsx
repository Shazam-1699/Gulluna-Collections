import React from "react";
import Navbar from "../components/partials/navbar";
import Productcard from "../components/partials/productcard";
import "../assets/styles/productpage.css";
import MKR from "../assets/images/Mahira Khan red.png";
import Footer from "../components/partials/footer";


function productPage(){
    return (
        <div>
            <Navbar />
            <div className="product-container">
                {/* Product Details Section */}
                <section className="product-page-details">
                    <div className="details">
                    <div className="product-name">
                        <h1 className="name">Red & Black Silk</h1>
                        <h1 className="price"><span id="PKR">PKR</span>    20,000</h1>
                    </div>
                    
                    <div className="product-page-description">
                        <h1 className="description">Description</h1>
                        <form className="description-form">
                            <p className="heading-text"><span className="heading">Fabric:</span>Premium Silk</p>
                            <label className="heading">Color:</label>
                            <input type="radio" className="radio" name="Color" id="red" value="Red" />
                            <input type="radio" className="radio" name="Color" id="black" value="Black" />
                            <p className="heading-text"><span className="heading">Occasion:</span>Festive, Wedding, Party</p>
                            <p className="heading-text"><span className="heading">Features:</span>Soft Texture, Traditional Weaving</p>
                            <input type="button" className="product-button" value="Add to Cart" />
                            <input type="button" className="product-button" value="Buy Now" />
                        </form>
                    </div>
                    </div>
                </section>
                {/* Picture Section */}
                <section className="product-page-image">
                    <div className="Full-back"> <div className="black-lines-div"> <div className="picture"> <img src={MKR} alt="Mahira Khan" /> </div> </div> </div>
                         
                        
                    <div className="lines">
                                <div className="large-line"> </div>
                                <div className="small-line"> </div>
                                <div className="large-line"> </div>
                                <div className="small-line"> </div>
                                <div className="large-line"> </div>
                                <div className="small-line"> </div>
                                <div className="large-line"> </div>
                                <div className="small-line"> </div>
                                <div className="large-line"> </div>
                                <div className="small-line"> </div>
                                <div className="large-line"> </div>
                                <div className="small-line"> </div>
                            </div>      
                </section>
            </div>
            <div className="divider">
                <h1>You May Also Like This</h1>
                <span><a href=""> See All  </a></span>
            </div>
            <br />
            <Productcard />

            <Footer />
        </div>
        
    );
}

export default productPage;