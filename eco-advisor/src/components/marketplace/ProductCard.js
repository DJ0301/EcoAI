import React, { useState, useEffect } from 'react';
import itemsData from '../../items.json';
import './ProductCard.css';

export const ProductCard = () => {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const itemsArray = Object.values(itemsData);
    setItems(itemsArray);
  }, []);

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 mt-24">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`shiny-card rounded-lg border border-gray-200 p-6 shadow-sm dark:border-gray-700 ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="h-56 w-full">
                <img className="mx-auto h-full object-cover" src={item.image_path} alt={item.item_name} />
              </div>
              <div className="pt-6">
                <div className="mb-4 flex items-center justify-between">
                  <h5 className="text-xl font-bold leading-none text-gray-900">
                    {item.item_name}
                  </h5>
                </div>
                <div className="mb-4 flex items-center">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium text-gray-500">Green Score:</span>
                    <span className="text-sm font-semibold text-gray-900">{item.green_score}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-extrabold leading-tight text-gray-900">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                {activeIndex === index && (
                  <div className="mt-4 text-center">
                    <a href={item.item_link} target="_blank" rel="noopener noreferrer" className="btn">
                      Go to Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
