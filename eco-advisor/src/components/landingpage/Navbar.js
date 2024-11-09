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
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <header>
          <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              {/* Eco-Friendly Logo with Product Name */}
              <a href="/" className="flex items-center mx-auto">
                <img src="logo1.png" alt="EcoAura Logo" className="h-8 w-auto" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-2">ECOAURA</span>
              </a>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Navbar;