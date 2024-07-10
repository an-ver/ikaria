import React from "react";
import "./App.css";
import BackgroundVideo from "./components/BackgroundVideo";
import Navbar from "./components/Navbar";
import Panigiria from "./components/Panigiria";
import Restaurants from "./components/Restaurants";
import Villages from "./components/Villages";
import Beach from "./components/Beach";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardList from "./components/InternalCard";
import details from "./components/Details";

function createCard(details) {
  return (
    <CardList
      key={details.id}
      image={details.image}
      name={details.name}
      description={details.description}
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App-front">
        <Navbar />
        <BackgroundVideo />
        <div className="App-content">
          <h1 className="App-heading">Η Ικαρία </h1>
          <p className="App-description">Τα πιο μπλέ καλοκαίρια μας..</p>
          <Navbar />
          <Routes>
            <Route path="/panigiria" element={<Panigiria />} />
            <Route path="/paralies" element={<Beach />} />
            <Route path="/estiatoria" element={<Restaurants />} />
            <Route path="/xwria" element={<Villages />} />
            {}
          </Routes>
          <dl className="Card-front">{details.map(createCard)}</dl>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
