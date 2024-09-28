import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    alert('Successfully Subscribed');
    setEmail(''); 
  };

  return (
    <div data-aos="zoom-in" className="bg-gray-800 dark:bg-gray-900 py-10">
      <div className="container mx-auto p-6 md:p-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="max-w-xl mx-auto text-center dark:text-gray-200">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
            Get Notified About New Products
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Subscribe to our newsletter and be the first to know about our latest products and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSubscribe}
              className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
