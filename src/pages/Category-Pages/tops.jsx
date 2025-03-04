import React from "react";
import ProductCard from "../../components/partials/productcard";

const Tops = () => {
    return (
        <div>
            <div className="cat-links">
                Home / Categories / Tops
            </div>
            
            <div className="cat-container">
                <div className="cat-container-img">
                    <h1 className="container-img-h1">
                    Trendy Tops for Every Occasion Gulluna
                    </h1>
                    <p className="container-img-p">
                    Guluna Clothing offers elegant traditional wear, featuring intricately embroidered shawls and culturally authentic dresses for women
                    Blending heritage with modern elegance, our collection ensurestimeless style for every occasion.
                    </p>
                </div>
                <div className="cat-container-products">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};

export default Tops;