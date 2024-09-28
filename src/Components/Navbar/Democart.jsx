import React from "react";
import { useCart } from "./Cartcontext";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

const Democart = () => {
  const cart = useCart();
  const total = cart.item.reduce((a, b) => a + b.price * b.quantity, 0);

  const clear = () => {
    cart.setitem([]);
  };

  const checkout = () => {
    alert("Successfully purchased!");
    clear(); 
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center">
        <TiShoppingCart className="mr-2 text-4xl" />
        Shopping Cart
      </h1>
      {cart.item.length > 0 ? (
        <ul className="space-y-4">
          {cart.item.map((item, index) => (
            <li key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                <p className="text-green-600 font-bold">Price: ₹{item.price * 83}</p>
                <p className="text-gray-800">Quantity: {item.quantity}</p>
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => cart.increaseQuantity(item)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded transition duration-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => cart.decreaseQuantity(item)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded transition duration-300"
                  >
                    -
                  </button>
                  <button
                    onClick={() => cart.removeItemFromCart(item)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-center mt-6">Your cart is empty.</p>
      )}
      <div className="mt-6 text-center">
        <h5 className="text-2xl font-bold text-gray-800">Total bill: ₹{total * 83}</h5>
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={clear}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Clear cart
          </button>
          <Link to="/check">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Democart;
