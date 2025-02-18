import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/login.css"
import logo from "../assets/images/07Oct24_Anis_Free_Upload_-removebg-preview.png";
import facebookLogo from "../assets/icons/icon-park--facebook.svg";
import instagramLogo from "../assets/icons/skill-icons--instagram.svg";
import googleLogo from "../assets/icons/flat-color-icons--google.svg"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const toggleMode = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSignup) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log(`Signing Up with: ${username}, ${password}`);
    } else {
      console.log(`Logging In with: ${username}, ${password}`);
    }

    // Simulating login success and navigating to home page
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <img src={logo} alt="Guluna Collections" />
      </div>

      <div className="right-section">
        <p className="back-link">Back to website</p>
        <h2 className="welcome-text">Welcome</h2>
        <p className="sub-text">
          Create a <b>Free Account</b> or <b>Login</b> to get started with{" "}
          <b>Guluna Collections</b>.
        </p>

        <div className="toggle-buttons">
          <button
            className={!isSignup ? "active" : ""}
            onClick={() => setIsSignup(false)}
          >
            Login
          </button>
          <button
            className={isSignup ? "active" : ""}
            onClick={() => setIsSignup(true)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input className="input-box"
            type="text"
            placeholder="Enter email or username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="input-box"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {isSignup && (
            <input
              className="input-box"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          <button type="submit" className="login-btn">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="or-text">OR</p>
      </div>
    </div>
  );
}

export default Login;
