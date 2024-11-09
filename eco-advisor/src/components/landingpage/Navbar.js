import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  // Function to navigate to the chatbot page with a loading effect
  const goToChatbot = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/chatpage');
    }, 2000);
  };

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <header className={`navbar ${isCollapsed ? 'collapsed' : 'floating'}`}>
          <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className={`flex ${isCollapsed ? 'justify-center' : 'justify-between'} items-center mx-auto max-w-screen-xl`}>
              {/* Center - Logo and Product Name */}
              <div className="flex items-center">
                <a href="/" className="flex items-center">
                  <img src="logo1.png" alt="EcoAura Logo" className="h-10 w-auto" />
                  <span className={`self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-2 ${isCollapsed ? 'hidden' : ''}`}>
                    <span className="econav">Eco</span>
                    <span className="auranav">Aura</span>
                  </span>
                </a>
              </div>

              {/* Right side - Try Demo Button */}
              {!isCollapsed && (
                <div className="flex items-center ml-auto">
                  <button
                    onClick={goToChatbot}
                    className="bg-green-600 text-white hover:bg-green-700 font-medium py-2 px-4 rounded"
                  >
                    Try Demo
                  </button>
                </div>
              )}
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Navbar;