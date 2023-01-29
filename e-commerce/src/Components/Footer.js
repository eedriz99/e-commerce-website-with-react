import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid grid-cols-12 p-5 bg-gray-300 border-t-2 border-gray-500">
      <ul className="col-span-12 md:col-span-6 lg:col-span-4 m-2">
        <li>
          <Link to="#" className="inline-block">
            Home
          </Link>
        </li>
        <li>
          <Link to="#" className="inline-block">
            Profile
          </Link>
        </li>
        <li>
          <Link to="#" className="inline-block">
            Cart
          </Link>
        </li>
        <li>
          <Link to="#" className="inline-block">
            Settings
          </Link>
        </li>
      </ul>
      <ul className="col-span-12 md:col-span-6 lg:col-span-4 m-2">
        <li>
          <Link to="#" className="inline-block">
            Home
          </Link>
        </li>
        <li>
          <Link to="#" className="inline-block">
            Profile
          </Link>
        </li>
        <li>
          <Link to="#" className="inline-block">
            Cart
          </Link>
        </li>
        <li>
          <Link to="#" className="inline-block">
            Settings
          </Link>
        </li>
      </ul>
      <ul className="col-span-12 md:col-span-6 lg:col-span-4 m-2">
        <li>
          <Link to="#" className="inline-block">
            Home
          </Link>
        </li>
        <li>
          <Link to="#" className="inline-block">
            Profile
          </Link>
        </li>
        <li>
          <Link to="#" className="inline-block">
            Cart
          </Link>
        </li>
        <li>
          <Link to="#" className="inline-block">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
