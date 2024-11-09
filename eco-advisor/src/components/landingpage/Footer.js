import React from 'react';

export const Footer = () => {
  return (
    <>
      <footer
        className="bg-gray-800 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-4 mt-0" // Reduced padding and margin
        style={{ backgroundColor: '#2D3748' }}
      >
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-4 text-white">
            Start Your Sustainable Journey Today!
          </p>
          <p className="text-base mb-6 text-gray-200">
            ECOAURA is your gateway to living in harmony with the planet. Embrace the power of Generative AI and transform your environmental impact, one conscious choice at a time. Together, we can make sustainability not just a goal, but a way of life.
          </p>
          <div>
            <a
              href="/about"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Learn more about ECOAURA
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};