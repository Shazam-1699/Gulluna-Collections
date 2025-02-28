import React, { useEffect } from "react";
import MKR from "../assets/images/Mahira khan red.png";
import "../assets/styles/cart.css";

const CartPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      onClose();
    }
  };
  
  const quantity = 1;

  return (
    <div className="overlay" onClick={handleOverlayClick}>
  <div className="popup" onClick={(e) => e.stopPropagation()}>
    <button className="close-button" onClick={onClose}>×</button>
    <h2 className="cart-h1">Your Cart</h2>
        <div className="cart-items">
          {[1, 2].map((item, index) => (
            <div key={index} className="cart-item">
              <div className="item-details">
                <img src={MKR} alt="Red & Black Silk" className="item-image" />
                <div>
                  <p className="item-name">Red & Black Silk</p>
                  <p className="item-info">Size: S</p>
                  <p className="item-info">Color: Red</p>
                  <div className="quantity-controls">
                    <button className="quantity-button" onClick={() => {quantity - 1}}>-</button>
                    <span>{quantity}</span>
                    <button className="quantity-button" onClick={() => {quantity + 1}}>+</button>
                  </div>
                </div>
              </div>
              <p className="item-price">PKR 20000</p>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="summary-row">
            <span>Subtotal (3)</span>
            <span>$485.00</span>
          </div>
          <div className="summary-row">
            <span>Tax</span>
            <span>$38.80</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-total">
            <span>Total Orders:</span>
            <span>$523.80</span>
          </div>
        </div>
        <p className="cart-note">
          The total amount you pay includes all applicable customs duties & taxes.
          We guarantee no additional charges on delivery.
        </p>
        <div className="cart-actions">
          <button className="cart-btns checkout-button">Check Out</button>
          <button className="cart-btns back-button" onClick={onClose}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
