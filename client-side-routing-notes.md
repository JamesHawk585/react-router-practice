React Router Setup:

\*\* Look into using Next.js for simpler react router setup.

1. First, run `npm install react-router-dom` in the terminal.
2. Navigate to index.js and import: - `import {BrowserRouter} from 'react-router-dom'`
3. Next, in index.js, wrap the entire App component as a child of the <BrowserRouter><BrowserRouter/>component like so:

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>
);

4. Navigate to App.jsx. Import Route and Routes as such:

- `import { Route, Routes } from "react-router-dom";`

5. Return a <Route> jsx element refrencing the client side route and associated component for each component you want to route to:

import NavBar from "./NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
        <Route path="/" element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
    </>
  );
}

export default App;

6. Navigate to NavBar.jsx. Import Link from react-router-dom:
  - `import {Link} from 'react-router-dom'`
7. Replace all <a> tags with React-Router <Link> component. All href jsx attributes should be changed to read `to`. 

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

## Using an <a> jsx element in NavBar.jsx will cause the dom to re-render when navigating to a new route. Use a react-router <Link></Link> component instead. 
