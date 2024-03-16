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
