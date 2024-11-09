import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Function to navigate to the chatbot page with a loading effect
  const goToChatbot = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/chatpage');
    }, 2000);
  };

  // State to toggle dark mode
 


  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <header>
          <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex justify-between items-center mx-auto max-w-screen-xl">
              {/* Left side - Logo and Product Name */}
              <div className="flex items-center">
                <a href="/" className="flex items-center">
                  <img src="logo2.png" alt="EcoAura Logo" className="h-10 w-auto" />
                  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-2">ECOAURA</span>
                </a>
              </div>

              {/* Center - About Button */}
              <div className="flex">
                <button
                  onClick={() => navigate('/about')}
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium mx-4"
                >
                  About
                </button>
              </div>

              {/* Right side - Try Demo Button */}
              <div className="flex items-center">
                <button
                  onClick={goToChatbot}
                  className="bg-green-600 text-white hover:bg-green-700 font-medium py-2 px-4 rounded"
                >
                  Try Demo
                </button>
              </div>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Navbar;