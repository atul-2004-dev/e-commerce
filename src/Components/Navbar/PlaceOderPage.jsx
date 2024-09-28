import React, { useState } from "react";
import p1 from "../../assets/g-pay.png";
import p2 from "../../assets/phone-pay.png";
import p3 from "../../assets/visa.jpeg";
import p4 from "../../assets/master-card.jpeg";
import { Link } from "react-router-dom";

const PlaceOrderPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear the form fields after submission
    setFormData({
      name: "",
      address: "",
      city: "",
      zip: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvc: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full border border-gray-300">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">
          Place Your Order
        </h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Shipping Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                name="name"
                value={formData.name}
                handleChange={handleChange}
                placeholder="Full Name"
              />
              <InputField
                name="address"
                value={formData.address}
                handleChange={handleChange}
                placeholder="Address"
              />
              <InputField
                name="city"
                value={formData.city}
                handleChange={handleChange}
                placeholder="City"
              />
              <InputField
                name="zip"
                value={formData.zip}
                handleChange={handleChange}
                placeholder="ZIP Code"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Payment Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                name="cardNumber"
                value={formData.cardNumber}
                handleChange={handleChange}
                placeholder="Card Number"
              />
              <InputField
                name="cardExpiry"
                value={formData.cardExpiry}
                handleChange={handleChange}
                placeholder="Expiry Date (MM/YY)"
              />
              <InputField
                name="cardCvc"
                value={formData.cardCvc}
                handleChange={handleChange}
                placeholder="CVC"
              />
            </div>
            <div className="mt-4">
              <p className="text-gray-700 mb-2">Accepted Payment Methods:</p>
              <div className="flex space-x-4">
                <img
                  src={p1}
                  alt="Google Pay"
                  className="w-12 h-12 object-contain"
                />
                <img
                  src={p2}
                  alt="PhonePe"
                  className="w-12 h-12 object-contain"
                />
                <img
                  src={p3}
                  alt="Visa"
                  className="w-12 h-12 object-contain"
                />
                <img
                  src={p4}
                  alt="MasterCard"
                  className="w-12 h-12 object-contain"
                />
               
              </div>
            </div>
          </div>

          <Link to='/placeorderpage'>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Place Order
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ name, value, handleChange, placeholder }) => (
    <div className="relative">
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder=" "
        className="peer p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-transparent"
        required
      />
      <label className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm transition-all duration-300 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-focus:-top-4 peer-focus:text-blue-500 peer-focus:text-sm">
        {placeholder}
      </label>
    </div>
  );
  

export default PlaceOrderPage;
