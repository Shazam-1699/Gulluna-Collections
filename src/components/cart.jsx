import React, { useEffect } from "react";
import { X } from "lucide-react";
import MKR from "../assets/images/Mahira khan red.png";
import "../assets/styles/cart.css"; // Ensure you have the correct CSS file

const CartPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Close popup when clicking outside the cart
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="popup">
        <button className="close-button" onClick={onClose}>
          <X size={20} />
        </button>
        <h2 className="title">Your Cart</h2>
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
                    <button className="quantity-button">-</button>
                    <span>1</span>
                    <button className="quantity-button">+</button>
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
          <button className="checkout-button">Check Out</button>
          <button className="back-button" onClick={onClose}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
