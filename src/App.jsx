import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "../src/pages/login";
import Homepage from "../src/pages/homepage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />}/>
      </Routes>
    </Router>
  );
}

export default App;
