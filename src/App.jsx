import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import TopProduct from "./Components/TopProduct/TopProduct";
import Subsribe from "./Components/Subscribe/Subsribe";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleorderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">


      <Navbar handleorderPopup={handleorderPopup}></Navbar>
      <Outlet></Outlet>
     
      <Hero handleorderPopup={handleorderPopup}></Hero>
      <Products></Products>
      <TopProduct handleorderPopup={handleorderPopup}></TopProduct>
      <Banner></Banner>
      <Subsribe></Subsribe>
      <Testimonials></Testimonials>
      <Footer></Footer>

   
      <Analytics />
      
    </div>
  );
}

export default App;
