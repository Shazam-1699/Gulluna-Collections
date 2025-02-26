import React, { useState } from "react";
import "../../assets/styles/cart.css";
import Navbar from "./navbar";
import Footer from "./footer";
import MKR from "../../assets/images/Mahira khan red.png";
import close from "../../assets/icons/close.svg";

function ShoppingCart() {
  const [ShoppingCart, setShoppingCart] = useState(false);

  const toggleShoppingCart = () => {
    setShoppingCart(!ShoppingCart);
  };

  if(ShoppingCart) {
    document.body.classList.add("active-ShoppingCart")
  } else {
    document.body.classList.remove("active-ShoppingCart")
  }

  return (
    <>
        <Navbar />
      <button onClick={toggleShoppingCart} className="btn-ShoppingCart">
        Open
      </button>

      {ShoppingCart && (
        <div className="ShoppingCart">
          <div onClick={toggleShoppingCart} className="overlay"></div>
          <div className="ShoppingCart-content">
            <h1 className="cart-h1">
                Your Cart
            </h1>
            <div className="cart-content">
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
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
}
export default ShoppingCart;