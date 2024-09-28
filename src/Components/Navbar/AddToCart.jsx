import React from "react";
import { useCart } from "./Cartcontext";
import { FaStar } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddToCart = ({ title, price, image, brand }) => {
  const cart = useCart();

  const handleAddToCart = () => {
    cart.addItemToCart({ title, price, image, brand });
    // Trigger a toast notification upon adding to cart
    toast.success(`${title} successfully added to the cart!`, {
      position: "bottom-right",
      autoClose:1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      
      
    });
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover rounded-md mb-4"
      />
      <p className="text-sm text-gray-800 mb-1">{brand}</p>
      <h4 className="font-bold text-lg mb-2 text-center">{title}</h4>
      <div className="flex items-center gap-1">
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
      </div>
      <p className="text-lg text-primary mb-4 text-center">
        Price: ₹{price * 83}
      </p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 mt-auto"
      >
        Add to cart
      </button>

      {/* Add the ToastContainer to display toasts */}
      <ToastContainer/>
      
      
    
    
  
     
    </div>
  );
};

export default AddToCart;
