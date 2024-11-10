import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToChatbot = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/chatpage');
    }, 2000);
  };

  const goToMarketplace = () => {
    navigate('/market');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 || location.pathname === '/chatpage') {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    if (location.pathname === '/chatpage') {
      setIsCollapsed(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <header className={`navbar ${isCollapsed ? 'collapsed' : 'floating'}`}>
          <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex items-center justify-between mx-auto max-w-screen-xl">
              {/* Left - Logo */}
              <div className="flex items-center">
                <a href="/" className="flex items-center">
                  <img src="logo1.png" alt="EcoAura Logo" className="h-10 w-auto" />
                  <span className={`self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-2 ${isCollapsed ? 'hidden' : ''}`}>
                    <span className="econav">Eco</span>
                    <span className="auranav">Aura</span>
                  </span>
                </a>
              </div>

              {/* Right - Both Buttons */}
              {!isCollapsed && (
                <div className="flex items-center space-x-8">
                  <button 
                    onClick={goToMarketplace}
                    className="text-gray-700 hover:text-gray-900 px-4"
                  >
                    Marketplace
                  </button>
                  {location.pathname !== '/chatpage' && (
                    <button
                      onClick={goToChatbot}
                      className="bg-green-600 text-white hover:bg-green-700 font-medium py-2 px-4 rounded"
                    >
                      Get Started
                    </button>
                  )}
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