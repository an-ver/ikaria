import React from 'react';
import './App.css';
import BackgroundVideo from './components/BackgroundVideo';
import Navbar from './components/Navbar';
import Panigiria from './components/Panigiria';
import Restaurants from './components/Restaurants';
import Villages from './components/Villages';
import Beach from './components/Beaches';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InternalCard from './components/InternalCardList';
import details from './components/Details'; 

function createCard(details) {
  return (
    <InternalCard
      key={details.id}
      image={details.image}
      name={details.name}
      description={details.description}
      path={details.path}
    />
  );
}

function Home() {
  return (
    <div>
      <BackgroundVideo />
      <div className="home-content">
        <h1 className='home-heading'>Η Ικαρία</h1>
        <dl className='home-dl-card'>{details.map(createCard)}</dl>
      </div>
    </div>
  );
}

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
