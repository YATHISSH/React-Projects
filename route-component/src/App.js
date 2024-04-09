
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <nav>
          <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
            <li style={{ margin: '0 10px' }}><a href="/">Home</a></li>
            <li style={{ margin: '0 10px' }}><a href="/about">About</a></li>
            <li style={{ margin: '0 10px' }}><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
