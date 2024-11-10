import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen flex flex-col justify-between items-center text-center text-white">
      <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1663106423058-c5242333348c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Nob29sJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center h-full z-0"></div>

      <div className="relative z-10 w-full flex flex-col justify-center items-center text-white px-4 mt-32">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-yellow-400 mb-4 text-center w-full hover:text-gray-500 mt-10">
          Welcome to Our Site
        </h1>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-500 mb-6 font-mono hover:text-gray-500">
          Secondary School
        </h2>

        <p className="text-lg sm:text-xl max-w-3xl mx-auto px-4 text-gray-200 mb-6 font-sans font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          pretium augue a eros facilisis, nec malesuada magna euismod. Sed
          suscipit lectus vitae metus aliquam, eu congue tortor convallis.
        </p>

        <div className="mb-8">
          <button className="bg-red-500 text-white py-3 px-8 rounded-lg font-semibold text-xl hover:bg-red-700 transition duration-300 font-mono">
            Learn More
          </button>
        </div>

        <div className="flex flex-wrap justify-center space-x-6 mt-auto mb-6 px-24">
          <button className="bg-red-600 text-white py-4 px-16  font-semibold text-xl hover:bg-red-700 transition duration-300 font-mono">
            Teachers
          </button>

          <button className="bg-yellow-400 text-white py-4 px-16  font-semibold text-xl hover:bg-yellow-600 transition duration-300 font-mono">
            All Classes
          </button>

          <button className="bg-white text-black py-4 px-16  font-semibold text-xl hover:bg-yellow-200 transition duration-300 font-mono">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
