import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "../src/pages/login";
import Homepage from "../src/pages/homepage";
import Productpage from "./pages/productpage";
import Categories from "./pages/categories";
import CartPopup from "./components/cart";
import Thankyou from "./pages/thank";
import Tops from "./pages/Category-Pages/tops";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />}/>
        <Route path="/product" element={<Productpage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPopup />} />
        <Route path="/thanks" element={<Thankyou />} />
        <Route path="/tops" element={<Tops />} />
      </Routes>
    </Router>
  );
}

export default App;
