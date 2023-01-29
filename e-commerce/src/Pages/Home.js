import React from "react";
import data from "../db.json";
import Hero from "../Components/Hero";
import TopPicks from "../Components/TopPicks";

const Home = () => {
  const categoryList = [
    "Sneakers",
    "Sandals",
    "Mules",
    "Slippers",
    "Birken stocks",
    "Oxfords",
    "Drivers",
    "Sports",
    "Others",
  ];
  return (
    <div>
      <Hero />
      <section>
        <div className="grid grid-cols-12 border-y-2 border-gray-300 padding-5">
          <h3 className="text-left p-2.5 bg-gray-400 col-span-12">Categories:</h3>
          {categoryList.map((category) => (
            <div className="m-2 border-2 p-5 col-span-6 md:col-span-4 lg:col-span-2">{category}</div>
          ))}
        </div>
      </section>
      <TopPicks />
    </div>
  );
};

export default Home;
