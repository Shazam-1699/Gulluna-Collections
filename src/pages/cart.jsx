import React, { useState } from "react";
import Navbar from "../components/partials/navbar";
import Footer from "../components/partials/footer";

const ShoppingCart = () => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div>
            <Navbar />
            {/* Right portion */}
            <div id="location">
                <h2>Payment</h2>
                
                <div className="payment-option">
                    <label>
                        <input type="radio" name="payment" defaultChecked />
                        Cash On Delivery
                    </label>
                    <label>
                        <input type="radio" name="payment" />
                        Online Payment
                    </label>
                </div>
                
                {/* TOGGLE BUTTON */}
                <div id="method">
                    <button id="Paypal">Paypal</button>
                    <button id="easy">EasyPaisa</button>
                </div>
                
                <div id="ship">Shipping to</div>
                
                <div id="address">
                    <div id="add1">
                        <input type="radio" id="home" name="shipp" defaultChecked />
                        <label htmlFor="home">Home</label>
                        <p>
                            <img src="https://img.icons8.com/?size=100&id=62889&format=png&color=FA5252" alt="red location symbol" height="20px" width="20px" /> 
                            Guluna Clothing <br />
                            123 Fashion Street, Block A, <br />
                            Lahore, Pakistan 54000 <br />
                            <img src="https://img.icons8.com/?size=100&id=78382&format=png&color=1A1A1A" alt="telephone" height="25px" width="25px" /> 
                            +92-XXX-XXXXXX
                        </p>
                    </div>
                    
                    <div id="add2">
                        <input type="radio" id="office" name="shipp" />
                        <label htmlFor="office">Office</label>
                        <p>
                            <img src="https://img.icons8.com/?size=100&id=62889&format=png&color=FA5252" alt="red location symbol" height="20px" width="20px" /> 
                            Guluna Clothing <br />
                            123 Fashion Street, Block A, <br />
                            Lahore, Pakistan 54000 <br />
                            <img src="https://img.icons8.com/?size=100&id=78382&format=png&color=1A1A1A" alt="telephone" height="25px" width="25px" /> 
                            +92-XXX-XXXXXX
                        </p>
                    </div>
                </div>
                
                <div id="break"><hr /></div>
                
                <button id="place">Place Order</button>
            </div>

            {/* Left portion */}
            <div id="left">
                <h3 id="heading2">SHOPPING CART</h3>
                
                <div id="seperator1"><hr /></div>
                
                <div id="middle">
                    <div className="cart-container">
                        <div id="image1">
                            <div id="photo">
                                <img src="images/image1-removebg-preview.png" alt="mahira khan" height="199" />
                            </div>
                            <div id="leave1"></div>
                            <div id="leave2"></div>
                        </div>
                    </div>
                    
                    <div id="detail">
                        Red & Black Silk
                        <p id="detailing">🖤 Fabric: Premium Silk <br /> 🖤 Color: ⚫ 🔴 <br /> 💫 Features: Soft Texture, Traditional Weaving</p>
                        PKR 20,000
                    </div>
                    
                    <div id="quan">
                        <button onClick={() => setQuantity(q => q + 1)}>+</button>
                        <div>{quantity}</div>
                        <button onClick={() => setQuantity(q => (q > 1 ? q - 1 : 1))}>-</button>
                    </div>
                    
                    <div id="bin">
                        <img src="images/trash-outline.svg" alt="trashcan" width="40px" />
                    </div>
                </div>
                
                <div id="seperator2"><hr /></div>
                <div id="seperator3"><hr /></div>
                
                <div id="price">
                    <div>SubTotal</div>
                    <div>PKR {quantity * 20000}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ShoppingCart;
