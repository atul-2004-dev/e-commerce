import React from "react";
import Img1 from "../../assets/women.png";
import Img2 from "../../assets/women2.jpg";
import Img3 from "../../assets/women3.jpg";
import Img4 from "../../assets/women4.jpg";
import Img5 from "../../assets/women-1.png";
import { FaStar } from "react-icons/fa6";

const ProductData = [
  {
    id: 1,
    image: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    image: Img2,
    title: "Women western",
    rating: 4.0,
    color: "red",
    aosDelay: "200",
  },
  {
    id: 3,
    image: Img3,
    title: "Goggles",
    rating: 4.5,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    image: Img4,
    title: "Women Ethnic",
    rating: 3.0,
    color: "yellow",
    aosDelay: "600",
  },

  {
    id: 5,
    image: Img5,
    title: "Women Ethnic",
    rating: 4.6,
    color: "black",
    aosDelay: "800",
  },
];
const Products = () => {
  return (
    <div className="mt-14  mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px]  mx-auto  ">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you{" "}
          </p>
          <h1 data-aos=" fade-up " className="text-3xl font-bold  ">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs  text-grey-400 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
            animi porro ut l illo unde!
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1     sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5           ">
            {ProductData.map((data) => (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3"
              >
                <img
                  src={data.image}
                  alt=""
                  className="h-[220px] w-[200px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold ">{data.title}</h3>
                  <p className="text-sm text-gray-600    ">{data.color}</p>
                  <div className="flex items-center  gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>{" "}
                  </div>
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

export default Products;
