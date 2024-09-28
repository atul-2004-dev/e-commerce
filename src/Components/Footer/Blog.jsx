import React from "react";

const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
        Welcome to Our Blog
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        Our blog is dedicated to sharing the latest updates, trends, and tips
        related to our products and the e-commerce industry. Whether you're
        looking for advice on how to make the most of your purchases, or simply
        want to stay informed about the latest developments, our blog is the
        place to be.
      </p>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Latest Trends in E-commerce
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          E-commerce is constantly evolving, with new trends emerging every
          year. From personalized shopping experiences to the rise of mobile
          commerce, staying on top of these trends is crucial for any
          successful online store.
        </p>
        <a
          href="#"
          className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-semibold transition duration-300"
        >
          Read more
        </a>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          How to Choose the Right Product
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Choosing the right product can be a daunting task with so many options
          available. In this post, we break down the key factors you should
          consider when making your purchase, ensuring that you get the best
          value for your money.
        </p>
        <a
          href="#"
          className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-semibold transition duration-300"
        >
          Read more
        </a>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Sustainability in Online Shopping
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Sustainability is becoming an increasingly important consideration for
          online shoppers. Learn about the steps we're taking to ensure our
          products and practices are environmentally friendly.
        </p>
        <a
          href="#"
          className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-semibold transition duration-300"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Blog;
