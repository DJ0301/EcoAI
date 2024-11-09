import React from 'react';
import Model from './model';
import './Herotwo.css'; // Import a CSS file for styling

export const Herotwo = () => {
  return (
    <div className="herotwo-container">
      <div className="herotwo-half">
        <Model />
      </div>
      <div className="herotwo-half plant">
        <div className="mx-auto max-w-screen-xl text-center lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Your partner in sustainable living 
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Embrace the power of Generative AI & transform your environmental impact with Aura
          </p>
        </div>
      </div>
    </div>
  );
};