import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/07Oct24_Anis_Free_Upload_-removebg-preview.png";
import facebookLogo from "../../assets/icons/icon-park--facebook.svg";
import instagramLogo from "../../assets/icons/skill-icons--instagram.svg";
import googleLogo from "../../assets/icons/flat-color-icons--google.svg"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `${isSignup ? "Signing Up" : "Logging In"} with:`,
      username,
      password
    );
    navigate("/home");
  };

  return (
    
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-full md:w-2/5 flex items-center justify-center bg-gradient-to-b from-gray-400 to-black text-white p-10">
          <img src={logo} alt="Guluna Collections" className="w-4/5 max-w-[250px]" />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-3/5 p-10 flex flex-col justify-center text-center">
          <p className="text-xs text-gray-600 text-left cursor-pointer">Back to website</p>
          <h2 className="text-3xl font-bold font-[\'Comic Sans MS\', cursive]">Welcome</h2>
          <p className="text-sm text-gray-600 mb-5">
            Create a <b>Free Account</b> or <b>Login</b> to get started with <b>Guluna Collections</b>.
          </p>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-5">
            <button
              className={`w-28 p-2 font-bold rounded-full transition-all ${!isSignup ? "bg-black text-white" : "bg-transparent"}`}
              onClick={() => setIsSignup(false)}
            >
              Login
            </button>
            <button
              className={`w-28 p-2 font-bold rounded-full transition-all ${isSignup ? "bg-black text-white" : "bg-transparent"}`}
              onClick={() => setIsSignup(true)}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter email or username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border-b border-gray-400 bg-transparent outline-none text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border-b border-gray-400 bg-transparent outline-none text-sm"
            />
            {isSignup && (
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border-b border-gray-400 bg-transparent outline-none text-sm"
              />
            )}
            <button type="submit" className="bg-black text-white font-bold py-3 rounded-full transition hover:bg-gray-800">
              {isSignup ? "Sign Up" : "Login"}
            </button>
          </form>

          <div className="text-sm text-gray-500 mt-5 mb-5">OR</div>
<div className="flex justify-center gap-4">
  <a href="https://facebook.com" target="_blank" className="text-[20px] cursor-pointer transition duration-300 hover:text-blue-500">
    <img src={facebookLogo} alt="facebook" />
  </a>
  <a href="https://instagram.com" target="_blank" className="text-[20px] cursor-pointer transition duration-300 hover:text-blue-500">
    <img src={instagramLogo} alt="instagram" />
  </a>
  <a href="https://google.com" target="_blank" className="text-[20px] cursor-pointer transition duration-300 hover:text-blue-500">
    <img src={googleLogo} alt="google" />
  </a>
</div>

        </div>
      </div>
    </div>
  );
}

export default Login;
