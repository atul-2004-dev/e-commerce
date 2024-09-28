import { useState,useEffect } from "react";
import { FaStar } from "react-icons/fa6";
const Shoes = () => {
    const [shoe, setshoe] = useState([]);

    const Display = async () => {
      const url = "https://api.escuelajs.co/api/v1/categories/4/products";   
      const data = await fetch(url);
      const reply = await data.json();
      console.log(reply);
      setshoe(reply); 
    };
  
    useEffect(() => {
      Display();
    }, []);
  




    return (
      <div className="mt-14  mb-12">
        <div className="container">
          <div className="text-center mb-10 max-w-[600px]  mx-auto  ">
            <p data-aos="fade-up" className="text-sm text-primary">
              Top Trending   Shoes for you{" "}
            </p>
            <h1 data-aos=" fade-up " className="text-3xl font-bold  ">
                Shoes
            </h1>
            <p data-aos="fade-up" className="text-xs  text-grey-400 ">
             
            </p>
          </div>
  
          <div>
            <div className="grid grid-cols-1     sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5           ">
              {shoe.map((data) => (
                <div
                  key={data.id}
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="space-y-3"
                >
                  <img
                    src={data.images[0]}
                    alt=""
                    className="h-[220px] w-[200px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold "> {data.title.length > 20
                      ? `${data.title.slice(0, 20)}...`
                      : data.title}</h3>
                    <p className="text-sm text-gray-600    ">{""}</p>
                    <div className="flex items-center  gap-1">
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                     
                    </div>
                    <p>₹{data.price * 83}</p>
                    <span>
  <button    onClick={()=>{alert("Successfully Added to Cart")}}  className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
    Buy now
  </button>
</span>

                  </div>
                </div>
              ))}
            </div>
  
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md ">
                View all button
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Shoes;
  