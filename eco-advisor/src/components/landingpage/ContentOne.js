import React from 'react';

export const ContentOne = () => {
  return (
    <section style={{ backgroundColor: '#c7fff3' }}>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Empower Your Eco-Conscious Lifestyle with EcoAura
          </h2>
          <p className="mb-4 font-light text-gray-700 dark:text-gray-300">
            At EcoAura, we believe that every choice matters. Our platform is designed to help you seamlessly integrate eco-friendly practices into your daily life. Discover products that align with your values, reduce your environmental impact, and support ethical sourcing. Whether you're just starting your sustainability journey or are a seasoned eco-warrior, EcoAura is here to guide you every step of the way.
          </p>
          <p className="mb-4 font-medium text-gray-700 dark:text-gray-300">
            Experience the satisfaction of making choices that benefit both you and the planet. Join us in promoting sustainable consumer behavior, educating yourself on eco-friendly options, and supporting brands that prioritize the environment. Together, we can make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};