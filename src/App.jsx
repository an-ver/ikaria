import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Panigiria from "./components/Panigiria";
import Restaurants from "./components/Restaurants";
import Villages from "./components/Villages";
import Beach from "./components/Beaches";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="home-app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panigiria" element={<Panigiria />} />
          <Route path="/paralies" element={<Beach />} />
          <Route path="/estiatoria" element={<Restaurants />} />
          <Route path="/xwria" element={<Villages />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
