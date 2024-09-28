import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { IoCall, IoLocationSharp } from "react-icons/io5";

const About = () => {
  return (
    <div id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 text-gray-700 dark:text-gray-300 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="Startup"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
              Passionate FrontEnd React Developer
            </h2>
            <p className="mt-6 text-lg leading-relaxed dark:text-gray-300">
              Hello! I am Atul. I am a third-year Computer Science undergraduate with a strong passion for frontend development, specializing in React. My academic journey has provided me with a solid foundation in computer science principles, while my hands-on experience with React has honed my skills in creating dynamic and responsive web applications. I am adept at translating design concepts into user-friendly interfaces and thrive on tackling complex challenges in web development. I am eager to leverage my skills and knowledge to contribute to innovative projects and continue growing as a developer.
            </p>
            <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">
              My projects include [MERN Stack], showcasing my ability to deliver impactful solutions.
            </p>
          </div>
        </div>

        <div className="py-8 px-4 mt-12 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Follow Us
          </h1>
          <div className="flex items-center gap-6 mb-6">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="https://x.com/atul_st007" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">
              <FaXTwitter className="text-3xl" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">
              <FaLinkedin className="text-3xl" />
            </a>
            <a href="https://github.com/atul-2004-dev" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">
              <FaGithub className="text-3xl" />
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <IoLocationSharp className="text-2xl" />
              <p>Chandigarh, India</p>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <IoCall className="text-2xl" />
              <p>+91 98165 22989</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
