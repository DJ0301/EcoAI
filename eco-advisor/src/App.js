import React, { useState, useEffect } from 'react';
import { EcoAdvisor } from './components/EcoAdvisor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MarketPlace from './pages/MarketPlace';
import Chatpage from './pages/Chatpage';
import './App.css';
import { About } from './components/about/About';
import LoadingScreen from './components/LoadingScreen'; // Import the LoadingScreen component
import Contact from './components/landingpage/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration to match your animation

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Landing page route */}
      <Route path="/eco-advisor" element={<EcoAdvisor />} /> 
        <Route path="/chatpage" element={<Chatpage />} /> Chatbot page route
        <Route path="/about" element={<About />} /> {/* Chatbot page route */}
        <Route path="/market" element={<MarketPlace />} /> {/* Chatbot page route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
