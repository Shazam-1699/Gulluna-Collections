import React,{useState}  from "react";
import "../../assets/styles/navbar.css";
import cartIcon from "../../assets/icons/cart.svg";
import accountIcon from "../../assets/icons/account.svg";

function Navbar(){
    const [search,setSearch]=useState("");

    return (
            <nav>
                <div className="navbar">
                <div className="logo">
                <h1>Gulluna</h1>
                <p>Collections</p>
                </div>
                <a href="/home">Home</a>
                <a href="">Categories</a>
                <a href="">Services</a>
                <a href="">More</a>
                <form>
                    <input type="text" name="Search" id="search" placeholder=" Search" onChange={(e) => setSearch(e.target.value)} />
                </form>
                <div className="icons">
                    <img src={cartIcon} alt="cart" />
                    <img src={accountIcon} alt="account" />
                </div>
                </div>
            </nav>
    );
}

export default Navbar;