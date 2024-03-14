React Router Setup: 

1. First, run npm install react-router-dom in the terminal. 
2. Navigate to index.js and import:
    - import {BrowserRouter} from 'react-router-dom'
** Look into using Next.js for simpler react router setup. 
3. Next, wrap the entire App component as a child of the <BrowserRouter><BrowserRouter/>component like so:

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);