import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, title, image, description, price } = props;
  return (
    <div className="text-sm border-2 rounded-xl border-gray-500 p-2 m-2 h-60 w-52">
      <img src={image} alt={description} className="w-full h-3/5 rounded-t-xl" />
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="">{description}</p>

        <div className="flex justify-between items-center">
          <span>Price: {price}</span>
          <Link
            to=""
            className="inline-block border border-gray-400 text-gray-300 bg-gray-500 p-2 rounded-xl hover:bg-transparent hover:text-gray-500"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
