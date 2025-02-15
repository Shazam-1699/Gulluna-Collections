import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./components/pages/login";
import Homepage from "./components/pages/homepage"

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
