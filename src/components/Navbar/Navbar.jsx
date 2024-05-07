import React from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import "./Navbar.css";
import DarkMode from "./DarkMode";
import { FaUser } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              <FiTarget className="text-xl group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 -translate-x-6 right duration-200"/>
              TARGET
            </Link>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                <li>
                  <Link
                    to="/"
                    className="inline-block px-4 font-semibold text-gray-500 hover:text-black
                dark:hover:text-white duration-200 "
                  >
                    {" "}
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product"
                    className="inline-block px-4 font-semibold text-gray-500 hover:text-black
                dark:hover:text-white duration-200"
                  >
                    {" "}
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="inline-block px-4 font-semibold text-gray-500 hover:text-black
                dark:hover:text-white duration-200"
                  >
                    {" "}
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="inline-block px-4 font-semibold text-gray-500 hover:text-black
                dark:hover:text-white duration-200"
                  >
                    {" "}
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block ">
            <IoMdSearch className="text-xl  text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right duration-200" />

              <input
                type="text"
                placeholder="Search..."
                className="w-0 group-hover:w-[300px] transition-all duration-300 rounded-full group-hover:border group-hover:border-gray-500 px-3 py-1 focus:outline-none dark:border-gray-800 dark:bg-gray-900 group-hover:dark:bg-gray-800"
              />

              <button className="relative p-3 ">
                <Link to="/cart">
                <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />

                </Link>
                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs"></div>
              </button>
              <button className="relative p-3 ">
              <Link to="/login">
                <FaUser className="text-xl text-gray-600 dark:text-gray-400" />
                </Link>
              </button>
              
              <div>
                <DarkMode className=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
