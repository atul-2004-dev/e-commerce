import React from "react";
import Img1 from "../../assets/shirt.png";
import Img2 from "../../assets/shirt2.png";
import Img3 from "../../assets/shirt3.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    image: Img1,
    title: "casual wear",
    description:
      " lorem loremlorem loremlorem lorem  lorem lorem lorem lorem lorem lorem",
  },
  {
    id: 2,
    image: Img2,
    title: "Printed Shirt",
    description:
      " lorem loremlorem loremlorem lorem  lorem lorem lorem lorem lorem lorem",
  },
  {
    id: 3,
    image: Img3,
    title: "Women shirt",
    description:
      " lorem loremlorem loremlorem lorem  lorem lorem lorem lorem lorem lorem",
  },
];

const TopProduct = ({ handleorderPopup }) => {
  return (
    <div className="container">
      <div className="text-left mb-24">
        <p data-aos="fade-up" className="text-primary text-sm ">
          Top Rated Products for you{" "}
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Best Product
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400   mb-10">
         These are the best selling and trending items in our store.
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center   text-center">
            {ProductsData.map((data)=>(
                <div key={data.id}  data-aos="zoom-in" className="rounded-2xl bg-white dark:gray-800 hover:bg-black/80  text-center dark:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]" >
                    <div  className="max-w-[140px]  block mx-auto transform-translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md  "> <img src={data.image} alt="" /> </div>
                      <div className="w-full flex items-center justify-center gap-1">
                        
                         <FaStar  className="text-yellow-500"/>
                         <FaStar  className="text-yellow-500"/>
                         <FaStar  className="text-yellow-500"/>
                         <FaStar  className="text-yellow-500"/>

                        </div> 
                        <h1  className="text-xl font-bold ">{data.title}</h1>
                        <p  className="text-gray-500  group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>
                        <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4  rounded-full mt-4 group-hover:bg-white group-hover:text-primary "   onClick={handleorderPopup}>Order Now</button>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
