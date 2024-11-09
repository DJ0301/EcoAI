import React from 'react';

export const Footer = () => {
  return (
    <>
 <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-6 mt-12">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <p className="text-lg font-semibold mb-4 dark:text-white">
          Start Your Sustainable Journey Today!
        </p>
        <p className="text-base mb-6 dark:text-gray-400">
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
  ); }
