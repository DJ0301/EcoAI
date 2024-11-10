import React from 'react';
import './ContentOne.css'; // Import the CSS file for styling

export const ContentOne = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-0">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none contentone-text-gradient md:text-5xl lg:text-6xl">
              Sustainability with EcoAura
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-900 lg:text-xl dark:text-gray-400">
              EcoAura’s AI platform recommends eco-friendly products, helping you make sustainable, planet-friendly choices.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVjbyUyMGZyaWVuZGx5JTIwcHJvZHVjdHxlbnwwfHwwfHx8Mg%3D%3D"
              alt="eco-friendly product 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://images.unsplash.com/photo-1564419320408-38e24e038739?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVjbyUyMGZyaWVuZGx5JTIwcHJvZHVjdHxlbnwwfHwwfHx8Mg%3D%3D"
              alt="eco-friendly product 2"
            />
          </div>
        </div>
      </section>
    </>
  );
};