import React from 'react';
import './Navbar.css'; // create this for navbar styles

function Navbar() {
  return (
    <>
   
    <nav className="navbar">
     
      <div className="navbar-logo">
        <span className="logo-icon">AI</span>
        <span>AI Workforce OS</span>
      </div>

  
      <ul className="navbar-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#employees">AI Employees</a></li>
        <li><a href="#how">How It Works</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>

      
      <div className="navbar-actions">
        <button className="btn-outline">Log in</button>
        <button className="btn-primary">Start Free</button>
      </div>
    </nav>
  </>);
}
export default Navbar;