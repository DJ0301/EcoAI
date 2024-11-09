import React, { useState } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  // const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate(); // Initialize useNavigate hook

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

  // Function to navigate to the chatbot page
  const goToChatbot = () => {
    navigate('/chatpage'); // This will redirect to the chatbot page
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Eco-Friendly Logo with Product Name */}
          <a href="/" className="flex items-center mx-auto">
            <img src="logo1.png" alt="EcoAura Logo" className="h-8 w-auto" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-2">ECOAURA</span>
          </a>
          
          <div className="flex items-center space-x-4 lg:order-2">
            {/* Dark Mode Toggle Button */}
            {/* <button
              onClick={toggleDarkMode}
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button> */}

            {/* Auth0 Get Started Button */}
            {/* {!isAuthenticated ? (
              <button
                onClick={() => loginWithRedirect({ appState: { returnTo: '/chatpage' } })}
                className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-700 dark:hover:bg-green-800 focus:outline-none dark:focus:ring-green-600"
              >
                Get Started
              </button>
            ) : (
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-700 dark:hover:bg-red-800 focus:outline-none dark:focus:ring-red-600"
              >
                Log out
              </button>
            )} */}

            {/* Chatbot Page Redirect Button */}
            <button
              onClick={goToChatbot}
              className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-700 dark:hover:bg-green-800 focus:outline-none dark:focus:ring-green-600"
            >
              Go to Chatbot
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;