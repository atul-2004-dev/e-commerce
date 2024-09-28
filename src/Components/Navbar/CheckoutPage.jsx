import React from 'react';
import { MdOutlineCelebration } from "react-icons/md";

const CheckoutPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-12 rounded-lg shadow-2xl text-center max-w-lg">
        <MdOutlineCelebration className="text-6xl text-green-500 mb-4 mx-auto" />
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Successful Purchase</h1>
        <p className="text-lg text-gray-600 mb-8">Thank you for your purchase! We hope you enjoy your new items.</p>
        <div className="mt-8">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
