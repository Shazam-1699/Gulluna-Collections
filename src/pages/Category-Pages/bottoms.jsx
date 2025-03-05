import React from "react";
import "../../assets/styles/categorysubpage.css";
import Navbar from "../../components/partials/navbar";
import Footer from "../../components/partials/footer";
import ProductCard from "../../components/partials/productcard";

const Bottoms = () => {
    return (
        <div>
            <Navbar />
            
            <div className="cat-container">
            <div className="cat-links">
               <a href="/home"> Home </a> / <a href="/categories"> Categories </a> / <a href="/bottoms"> Bottoms </a>
            </div>
                <div className="cat-container-img">
                    <div className="container-img-des">
                    <h1 className="container-img-h1">
                    Trendy Tops for Every Occasion Gulluna
                    </h1>
                    <p className="container-img-p">
                    Guluna Clothing offers elegant traditional wear, featuring intricately embroidered shawls and culturally authentic Bottoms for women
                    Blending heritage with modern elegance, our collection ensurestimeless style for every occasion.
                    </p>
                    </div>
                </div>
                <div className="cat-container-products">
                    <div className="cat-container-products-h1">
                    <h1 className="summer-collection">Summer Collection</h1>
                    </div>
                    <div className="products">
                    <ProductCard className="product-card" />
                    <ProductCard className="product-card" />
                    <ProductCard className="product-card" />
                    <ProductCard className="product-card" />
                    <ProductCard className="product-card" />
                    <ProductCard className="product-card" />
                    <ProductCard className="product-card" />
                    <ProductCard className="product-card" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Bottoms;