import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "../src/pages/login";
import Homepage from "../src/pages/homepage";
import Productpage from "./pages/productpage";
import Categories from "./pages/categories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />}/>
        <Route path="/product" element={<Productpage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
