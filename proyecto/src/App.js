import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CryptoRates from './components/CryptoRates';
import FinanceNews from './components/FinanceNews';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/cryptorates" element={<CryptoRates />} />
          <Route path="/financeNews" element={<FinanceNews />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
    
  );
}

export default App;
