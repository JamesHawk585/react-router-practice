import React from "react";
import "./styles.css";

function CustomLink({href, children, ...props}) {
  const path = window.location.pathname;
  return(
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>{children}</a>
    </li>
  );
}

const NavBar = () => {
  const path = window.location.pathname;

  return (
    <nav className="nav">
      <a href="/" className="site-title">Business Site</a>
      <ul>
        <CustomLink href="/about">About</CustomLink>
        <CustomLink href="/pricing">Pricing</CustomLink>
      </ul>
    </nav>
  );
};

export default NavBar;
