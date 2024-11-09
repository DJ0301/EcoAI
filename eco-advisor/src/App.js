import React from 'react';
import { EcoAdvisor } from './components/EcoAdvisor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import the Home component
import Chatpage from './pages/Chatpage'; // Import the Chatpage component
import './App.css';  // Changed from './styles/index.css'
import { About } from './components/about/About';

function App() {
  console.log('Rendering App component');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Landing page route */}
      <Route path="/eco-advisor" element={<EcoAdvisor />} /> 
        <Route path="/chatpage" element={<Chatpage />} /> {/* Chatbot page route */}
        <Route path="/about" element={<About />} /> {/* Chatbot page route */}

      </Routes>
    </Router>
  );
}

export default App;
