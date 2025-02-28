import React, { useState } from "react";
import "../../assets/styles/navbar.css";
import cartIcon from "../../assets/icons/cart.svg";
import accountIcon from "../../assets/icons/account.svg";
import CartPopup from "../cart"; // Import the CartPopup component

function Navbar() {
    const [search, setSearch] = useState("");
    const [isCartOpen, setIsCartOpen] = useState(false); // State to manage popup visibility

    return (
        <div className="wrapper">
            <nav>
                <div className="navbar">
                    <div id="logo">
                        GULLUNA <span id="collections">COLLECTIONS</span>
                    </div>
                    <a href="/home">Home</a>
                    <a href="/categories">Categories</a>
                    <a href="">Wishlist</a>
                    <form>
                        <input 
                            type="text" 
                            name="Search" 
                            id="search" 
                            placeholder="🔍 Search" 
                            onChange={(e) => setSearch(e.target.value)} 
                        />
                    </form>
                    <div className="icons">
                        <a href="#" onClick={(e) => { 
                            e.preventDefault(); 
                            setIsCartOpen(true); // Open cart popup when clicked
                        }}>
                            <img src={cartIcon} alt="cart" />
                        </a>
                        <img src={accountIcon} alt="account" />
                    </div>
                </div>
            </nav>

            {/* Render the CartPopup component when isCartOpen is true */}
            <CartPopup isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
    );
}

export default Navbar;
