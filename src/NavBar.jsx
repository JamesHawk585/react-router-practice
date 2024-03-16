import React from "react";
import "./styles.css";
import {Link} from 'react-router-dom'


const NavBar = () => {
  const path = window.location.pathname;

  return (
    <nav className="nav">
      <Link to="/" className="site-title">Business Site</Link>
      <Link to="/about" className="about-link">About</Link>
      <Link to="/" className="pricing-link">Pricing</Link>
    </nav>
  );
};

export default NavBar;
