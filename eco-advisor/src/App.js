import React from 'react';
import { EcoAdvisor } from './components/EcoAdvisor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import the Home component
import './App.css';  // Changed from './styles/index.css'

function App() {
  console.log('Rendering App component');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Landing page route */}
        <Route path="/chatpage" element={<EcoAdvisor />} /> {/* Chatbot page route */}
      </Routes>
    </Router>
  );
}

export default App;
