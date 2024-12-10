import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Projects from './components/Projects';
import Cursor from './components/Cursor';
import Skills from './components/Skills';
import Carousel from './components/Carousel';
import Profile from './components/Profile';

function App() {
  useEffect(() => {
    const path = window.location.pathname;
    if (path !== '/') {
      window.history.pushState(null, null, '/');
    }
  }, []);

  return (
    <Router basename="/New-Portfolio">
      <div className="app">
        <Cursor />
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/Profile" element={<Profile />} /> 
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
