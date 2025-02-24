import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import "../assets/styles/login.css";
import logo from "../assets/images/07Oct24_Anis_Free_Upload_-removebg-preview.png";
import facebookLogo from "../assets/icons/icon-park--facebook.svg";
import googleLogo from "../assets/icons/flat-color-icons--google.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account Created Successfully");
      } catch (error) {
        console.error("Signup Error:", error);
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/home");
      } catch (error) {
        console.error("Login Error:", error);
      }
    }
  };

  const signinwithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="container">
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
            <input
              className="input-box"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="social-icons">
            <img className="icon" src={googleLogo} onClick={signinwithGoogle} alt="Google" />
            <img className="icon" src={facebookLogo} alt="facebook" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
