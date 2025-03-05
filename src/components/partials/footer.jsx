import React from "react";
import "../../assets/styles/footer.css";
import logo from "../../assets/images/Footer Logo.png";

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-logo">
                <img src={logo} alt="Gulluna Creations" />
            </div>

            <div className="Contact-us">
                <a href="/contactus"><h1>Contact Us</h1></a>
                <a href="">Email:info@firnas.tech</a>
                <a href="">Phone:+92 316 068 3400</a>
                <a href="">About Us</a>
            </div>

            <div className="Customer-Support">
                <a href="/contactus"><h1>Customer Support</h1></a>
                <a href="">Returns & Refunds</a>
                <a href="">Privacy & Policy</a>
                <a href="">Privacy & Policy</a>
            </div>

            <div className="footer-socials">
                <h1>Socials</h1>
                <a href="">Instagram</a>
                <a href="">Facebook</a>
                <a href="">Twitter</a>
            </div>
        </footer>
    );
}

export default Footer;