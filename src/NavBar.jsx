import React from "react";
import "./styles.css"

function customLink(e) {
  e.preventDefault()
  console.log("Start the lecture at 37:21. We are going to create a custom component. https://vimeo.com/866475274/19288d9c6d?share=copy")
}

const NavBar = () => {
  const path = window.location.pathname;


  return (
    <nav className="nav">
      <a href="/" className="site-title" onClick={(e) => customLink(e)}>
        Business Site
      </a>
      <ul>
        <li className="active">
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
