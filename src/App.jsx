import NavBar from "./NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import { Component } from 'react'

import "./App.css";

function App() {
  console.log(window.location.pathname)
  
  switch(window.location.pathname) {
    case "/":
    Component = Home 
    break;
    case "/about":
    Component = About
    break;
    case "/pricing":
    Component = Pricing
    break;

  }


  return (
    <>
      <NavBar />
      <Component/>
    </>
  );
}

export default App;
