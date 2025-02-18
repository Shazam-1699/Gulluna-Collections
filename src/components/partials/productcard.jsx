import React from "react";
import "../../assets/styles/productcard.css";

export default function ProductCard(props) {
  return (
    <div className="product-card">
        <div className="card-image">
      <img src={props.image} alt="Pashmina Shawl" className="product-image" />
      </div>
      <div className="product-details">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <h2 className="product-title">{props.name}</h2>
        <p className="product-description">
          {props.description}
        </p>
        <p className="product-price">PKR {props.price}</p>
      </div>
    </div>
  );
}
