import React from 'react';
import "../../assets/styles/cart.css";
import MKR from "../../assets/images/Mahira khan red.png";
import close from "../../assets/icons/close.svg";

export default function cartproduct() {
  return (
    <div>
      <div className="cart-content-item-image">
                          <img src={MKR} alt="Mahira Khan Red" />
                      </div>
                      <div className="cart-content-item-description">
                          <div className="cart-content-description-start">
                              <h1 className="cart-content-h1">Red & Black Silk</h1>
                              <img src={close} alt="Close" />
                          </div>
                          <p className="cart-content-p">Size: S</p>
                          <p className="cart-content-p">Color: Red</p>
                          <div className="cart-content-description-end">
                              <input type="number" name="quantity" id="cart-item-quantity" min={1} placeholder="1" />
                              <h1 className="cart-content-h1-price">PKR 20,000</h1>
                          </div>
                      </div>
                      <br />
    </div>
  )
}
