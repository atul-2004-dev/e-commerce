import { useState, useEffect } from "react";
import AddToCart from "./AddToCart";

const Tv = () => {
  const [ca, setCa] = useState([]);

  const Display = async () => {
    const url = "https://fakestoreapi.in/api/products/category?type=tv";   
    const data = await fetch(url);
    const reply = await data.json();
    console.log(reply);
    setCa(reply.products); 
  };

  useEffect(() => {
    Display();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">TV Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ca.map((data, index) => (
          <AddToCart
            key={index}
            title={data.title.slice(0,20)}
            image={data.image}
            price={data.price}
            brand={data.brand}
            category={data.category}
            className="w-full sm:w-72 md:w-80 lg:w-96" 
          />
        ))}
      </div>
    </div>
  );
};

export default Tv;
