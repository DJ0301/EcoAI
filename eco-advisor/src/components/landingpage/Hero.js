import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css'; // Import the CSS file for styling

const LandingPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const goToChatbot = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/chatpage');
    }, 2000);
  };

  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center justify-center">
        <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">
          {/* Main content container */}
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Choose Better for the Planet
            </h1>
          </div>

          {/* Search bar and button section */}
          <div className="flex justify-center items-center space-x-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center w-full">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                  <input 
                    type="text" 
                    id="simple-search" 
                    className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                    placeholder="What are some tips to reduce my carbon footprint?" 
                    required 
                  />
                </div>
              </form>
            </div>

            {/* Try it button */}
            <div>
              <button
                onClick={goToChatbot}
                className="bg-green-600 text-white hover:bg-green-700 font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Try Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;