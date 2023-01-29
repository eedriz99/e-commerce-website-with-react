import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import sarahBg from "../images/sarah-dorweiler.jpg";

const Hero = () => {
  return (
    <div className=" p-5 h-4/5 w-full bg-[url('{ sarahBg }']">
      <h2 className="text-lg font-bold">
        Welcome to
        <span className="uppercase text-red-400">footie e-commerce</span>{" "}
        webpage
      </h2>
      <p>
        Lorem ipsum satsnnfdn fmfdmnfd nfbndfklnbf df , dfb dfm bfm f fb bfd
        bkdfb kb bkndfb bfdkndfb fdkbndfb fdknfd kb
      </p>
      <a className="rounded-xl border-2 border-gray-400 p-2 inline-block hover:text-gray-100 hover:bg-gray-500">
        <AiOutlineShoppingCart className="inline-block" /> Shop Now
      </a>
    </div>
  );
};

export default Hero;
