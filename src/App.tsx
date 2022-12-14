import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import './App.css';
import Home from './pages/Home';
import Private from './pages/Private';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Logado</Link>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/private" element={ <Private /> } />
      </Routes>
    </div>
  );
}

export default App;
