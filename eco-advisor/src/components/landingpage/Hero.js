import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css'; // Import the CSS file for styling
import SplineEnv from './SplineEnv'; // Import the SplineEnv component

const LandingPage = () => {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const goToChatbot = () => {
    if (inputValue.trim() === '') return; // Prevent navigation if input is empty
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/chatpage', { state: { prefillMessage: inputValue } });
    }, 2000);
  };

  return (
    <>
      <div className="hero-container">
        <SplineEnv />
        <div className="content-container">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              CHOOSE BETTER FOR THE PLANET.
            </h1>
          </div>

          {/* Search bar and button section */}
          <div className="flex justify-center items-center space-x-4">
            <div className="w-full md">
              <form className="flex items-center w-full" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                  <input 
                    type="text" 
                    id="simple-search" 
                    className="w-full p-0 pl-0 text-sm text-gray-900 rounded-full bg-gray-50 focus:ring-primary-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                    placeholder="What are some tips to reduce my carbon footprint?" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required 
                  />
                </div>
              </form>
            </div>

            <div>
              <button
                onClick={goToChatbot}
                className="bg-green-600 text-white hover:bg-green-700 font-medium py-2 px-8 rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                GO
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;