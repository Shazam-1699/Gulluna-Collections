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
import Dresses from "./pages/Category-Pages/dresses";
import Scarfs from "./pages/Category-Pages/scarfs";
import Shawls from "./pages/Category-Pages/shawls";
import Bottoms from "./pages/Category-Pages/bottoms"; 



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
        <Route path="/dresses" element={<Dresses />} />
        <Route path="/scarfs" element={<Scarfs />} />
        <Route path="/shawls" element={<Shawls />} />
        <Route path="/bottoms" element={<Bottoms />} />
      </Routes>
    </Router>
  );
}

export default App;
