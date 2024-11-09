import React from 'react';
import { EcoAdvisor } from './components/EcoAdvisor';
import './App.css';  // Changed from './styles/index.css'

function App() {
  console.log('Rendering App component');
  return (
    <div className="app">
      <div className="container">
        <h1>Eco Advisor</h1>
        <div className="chat-wrapper">
          <EcoAdvisor />
        </div>
      </div>
    </div>
  );
}

export default App;
