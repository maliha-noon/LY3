//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from "./Home";
export default function App() {
  return(
    <Router>
  

  
 <div className="center-container">
  <div className="sidebar">
  <h1>
    <span >smile </span>
    <span >studio</span>
  </h1>
  <nav>
    <ul>
    <li><Link to="/">Home</Link></li>
    </ul>
    </nav>
</div>
<div className="content">
  <Routes>
  <Route path="/"  element={<Home />} />
  </Routes>
</div>
</div>
</Router>
  );
}


