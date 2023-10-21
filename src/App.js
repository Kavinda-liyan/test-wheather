import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Home/login"; 
import Home from "./Home/home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/"  element={<Login />} /> 
          <Route path="/home" element={<Home />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
