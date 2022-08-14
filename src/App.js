import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/navabar/Navbar";
import { Home } from "./pages/Home";
import { Favorite } from "./pages/Favorite";
import { Cart } from "./pages/Cart";
import { SinglePage } from "./pages/SinglePage";


function App() {
  return (
    <div className="wrapper">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorite" element={<Favorite/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/single" element={<SinglePage/>} />
        </Routes>
    </div>
  );
}

export default App;
