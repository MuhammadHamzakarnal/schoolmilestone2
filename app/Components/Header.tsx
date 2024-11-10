import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-white text-black p-3">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold font-mono ml-20 text-black">
          <span className="text-black ">ZKU</span>School
        </div>

        <div className="sm:flex justify-center mr-9">
          <ul className="flex flex-col sm:flex-row sm:space-x-4">
            <li className="m-2 sm:m-3 p-2 rounded font-sans text-center hover:text-red-600 transition duration-300  text-red-600 font-bold">
              <Link href="/">Home</Link>
            </li>
            <li className="m-2 sm:m-3 p-2 rounded font-sans text-center hover:text-red-600 transition duration-300 font-bold ">
              <Link href="/About">About Us</Link>
            </li>
            <li className="m-2 sm:m-3 p-2 rounded font-sans text-center hover:text-red-600 transition duration-300 font-bold">
              <Link href="/classes">Classes</Link>
            </li>
            <li className="m-2 sm:m-3 p-2 rounded font-sans text-center hover:text-red-600 transition duration-300 font-bold">
              <Link href="/teachers">Teachers</Link>
            </li>
            <li className="m-2 sm:m-3 p-2 rounded font-sans text-center hover:text-red-600 transition duration-300 font-bold">
              <Link href="/Contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
