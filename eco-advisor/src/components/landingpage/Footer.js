import React from 'react';

export const Footer = () => {
  return (
    <>
      <footer
        className="bg-gray-800 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-4 mt-0"
        style={{ backgroundColor: '#2D3748' }}
      >
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-4 text-white">
            EcoAura - Your Partner in Sustainability
          </p>
          <p className="text-base mb-6 text-gray-200">
            © {new Date().getFullYear()} EcoAura. All rights reserved.
          </p>
          <div>
            <a
              href="/contact"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};