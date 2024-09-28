import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

const Footer = () => {
  return (
    <div className="text-white bg-[#212529]">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1">
              <FiShoppingBag size="30" />
              Shopzify
            </h1>
            <p>
              At Shopzify, we are committed to providing the best shopping experience. Our extensive collection of high-quality products is curated to meet your needs. Enjoy seamless shopping with fast delivery and exceptional customer service. Thank you for choosing us!
            </p>
          </div>

          <div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                  >
                    <Link to={link.link} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Follow Us
              </h1>
              <div className="flex items-center gap-3 mt-6">
              
                <a href="https://x.com/atul_st007" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter className="text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/atul-choudhary007/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-3xl" />
                </a>
                <a href="https://github.com/atul-2004-dev" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-3xl" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-3xl" />
                </a>

              </div>

              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaMapLocationDot />
                  <p>Chandigarh, India</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <IoCall />
                  <p>+91 98165 22989</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-gray-400 text-center py-4">
        <p>&copy; {new Date().getFullYear()} Shopzify. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
