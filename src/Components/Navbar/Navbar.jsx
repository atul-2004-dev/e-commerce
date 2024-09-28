import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Smart Tv",
    link: "/tv",
  },
  {
    id: 3,
    name: "Mobile",
    link: "/mobile",
  },
 

  
 

  {
    id: 4,
    name: "Laptop",
    link: "/laptop",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/electronic",
  },
 



  {
    id: 6,
    name: "About",
    link: "/about",
  },
  {
    id: 7,
    name: "Contact Us",
    link: "/contact",
  },


];

const DropDownlist = [
  {
    id: 1,
    name: "Trending Products",
    link: "/appliances",
  },
  {
    id: 2,
    name: "Gaming",
    link: "/gaming",
  },
  {
    id: 3,
    name: "Audio",
    link: "/audio",
  },
 


];

const Navbar = ({ handleorderPopup }) => {
  return (
    <div className="shadow-md bd-white dark:bg-text-white duration-200 relative z-40">
      <div className="bg-primary/40  py-2px ">
        <div className="container flex  justify-between items-center">
          <div>
            <a href="" className="font-bold text-xl items-center flex gap-1 ">
             
              <FiShoppingBag size={30} /> Shopzify
            </a>
          </div>
          <div className="flex justify-between items-center gap-4 ">
            <div className="relative group hidden sm:block ">
              <input
                type="text"
                placeholder="Search "
                className="w-[200px]  sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300  py-1 px-2 text-sm focus:outline-none focus:border-1  focus:border-primary  dark:border-gray-500 dark:bg-slate-800"
              />
              <IoMdSearch  className="text-slate-800 group:hovertext-primary absolute  top-1/2 -translate-y-1/2  right-3"/>
            </div>
            <button   onClick={()=>handleorderPopup()}  
              className="bg-gradient-to-t from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group "
              
            >    <span  className="group-hover:block hidden transition-all duration-200">Order  cart</span>
              <Link to="democart">
        <p className="text-xl font-bold mb-2 text-center text-gray-800 flex items-center justify-center h-5">
          <TiShoppingCart className=" text-xl" />
          Cart
        </p>
      </Link>
             {/*<FaCartShopping  className="text-xl cursor-pointer  drop-shadow-sm" />*/} 
            
            </button>
            <div>
               <DarkMode/>
            </div>
          </div>
        </div>
      </div>
      <div  data-aos="zoom-in"  className="flex justify-center">
           <ul className="sm:flex  hidden items-center gap-4" >
            {Menu.map((data)=>(  
                <li key={data.id}>
                    <Link to={data.link}  className="inline-block  px-4 hover:text-primary duration-200" >{data.name}</Link>
                </li>
            ))}
            <li className="group relative cursor-pointer "> <a href="#" className="flex items-center gap-[2px] py-2" >
                Trending Products
                <span><FaCaretDown   className="transition-all duration-200 group-hover:rotate-180" /></span>
                
                </a>
                 <div  className="absolute z-[9999]   hidden group-hover:block w-[200px] rounded-md  bg-white p-2 text-black shadow-md">
                    <ul>
                        {DropDownlist.map((data)=>(
                        <li   key={data.id}  >
                            <Link to={data.link}  className="inline-block    w-full rounded-md p-2 hover:bg-primary/20 " >
                            {data.name}
                            </Link>
                        </li>
                        
                        ))}
                    </ul>
                 </div>
                
                 </li>
           </ul>
      </div>
    </div>
  );
};

export default Navbar;
