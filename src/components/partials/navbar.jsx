import React, { useState } from "react";
import "../../assets/styles/navbar.css";
import cartIcon from "../../assets/icons/cart.svg";
import accountIcon from "../../assets/icons/account.svg";
import CartPopup from "../cart";

function Navbar() {
    const [search, setSearch] = useState("");
    const [isCartOpen, setIsCartOpen] = useState(false);

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
                            value={search}
                            onChange={(e) => setSearch(e.target.value)} 
                        />
                    </form>
                    <div className="icons">
                        <a href="#" onClick={(e) => { 
                            e.preventDefault(); 
                            setIsCartOpen(true);
                        }}>
                            <img src={cartIcon} alt="cart" />
                        </a>
                        <img src={accountIcon} alt="account" />
                    </div>
                </div>
            </nav>

            <CartPopup isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
    );
}

export default Navbar;
