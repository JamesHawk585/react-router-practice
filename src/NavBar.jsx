import React from "react";
import "./styles.css"

const NavBar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Business Site
      </a>
      <ul>
        <li>
          <a href='/pricing'>Pricing</a>
        </li>
        <li>
        <a href='/about'>About</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
