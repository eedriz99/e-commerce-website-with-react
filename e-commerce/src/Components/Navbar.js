import React from "react";
// import "../style.css"
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

const Navbar = () => {
  const el = document.querySelector("#navList");
  const toggleClass = () => {
    if (el.classList.contains("hidden")) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
    // el.classList.toggle('hidden');
  };

  return (
    <nav className="flex p-5 bg-gray-300 justify-between border-b-2 border-gray-500">
      <div>
        <Link to="/">
          <h3 className="uppercase text-xl font-bold inline-block">
            E-Commerce
          </h3>
        </Link>
      </div>

      <div className="">
        <AiOutlineMenu
          className="mt-2 ml-auto lg:hidden"
          onClick={() => toggleClass()}
        />

        <ul id="navList" className="hidden justify-between lg:flex ">
          <li className="flex  items-center px-2">
            <AiOutlineHome />
            <Link
              to="/"
              className="inline-block px-2 hover:border-b-2 hover:border-gray-600"
            >
              Home
            </Link>
          </li>
          <li className="flex  items-center px-2">
            <AiOutlineShoppingCart />
            <Link
              to="/cart"
              className="inline-block px-2 hover:border-b-2 hover:border-gray-600"
            >
              Cart
            </Link>
          </li>
          <li className="flex  items-center px-2">
            <AiOutlineUser />
            <Link
              to="/profile"
              className="inline-block px-2 hover:border-b-2 hover:border-gray-600"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
