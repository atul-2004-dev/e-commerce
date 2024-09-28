import React from "react";
import BannerImage from "../../assets/4547829.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const Banner = () => {
  return (
    <div className="min-h-[650px] flex justify-center items-center py-12 sm:py-0  ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center ">
          <div data-aos="zoom-in">
            <img
              className="max-w-[400px] h-[350px] w-full mx-auto object-cover"
              src={BannerImage}
              alt=""
            />
          </div>
          <div className="flex flex-col  justify-center gap-6  sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl  sm:text-4xl font-bold">
              Winter sale upto 50% off
            </h1>
          </div>
          <p
            data-aos="fade-up"
            className="text-sm text-gray-500 tracking-wide leading-5"
          >
            Discover amazing deals this winter with up to 50% off on selected
            items! Explore our wide range of high-quality products, enjoy fast
            and reliable delivery, and benefit from easy payment options. Shop
            now and take advantage of exclusive offers designed just for you.
          </p>
          <div className="flex flex-col  gap-6">
            <div data-aos="fade-up" className="flex items-center gap-4">
              <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4  rounded-full bg-violet-100  dark:bg-violet-500" />
              <p>Quality Products</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
              <p>Fast delivery</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-100 dark:bg-blue-400" />
              <p>Easy Payment Method</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-red-100 dark:bg-red-400" />
              <p>Get Offers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
