import React, { useState } from "react";
import sportsCat from "../assets/sportsCat.jpg";
import shoesCat from "../assets/shoesCat.jpg";

const Categories = () => {
  const [categoryArray, setcategoryArray] = useState([
    {
      name: "Sports",
      image: sportsCat,
    },
    {
      name: "Shoes",
      image: shoesCat,
    },
    {
      name: "Sports",
      image: sportsCat,
    },
    {
      name: "Shoes",
      image: shoesCat,
    },
    {
      name: "Sports",
      image: sportsCat,
    },
    {
      name: "Shoes",
      image: shoesCat,
    },
    {
      name: "Sports",
      image: sportsCat,
    },
    {
      name: "Shoes",
      image: shoesCat,
    },
    {
      name: "Sports",
      image: sportsCat,
    },
    {
      name: "Shoes",
      image: shoesCat,
    },
  ]);
  return (
    <div className="m-4 flex flex-col gap-8 pt-5 relative">
      <h2 className="text-3xl font-bold text-gray-700">
        Shop our top Categories
      </h2>
      <div className="flex gap-5 overflow-y-scroll">
        {categoryArray.map((item) => {
          return (
            <div className="min-w-40 h-52 rounded-xl relative bg-red-300 overflow-hidden flex justify-center items-center cursor-pointer">
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 text-white font-semibold px-3 py-1 bg-black bg-opacity-35 rounded-full z-10">
                {item.name}
              </div>
              <img
                className="w-full hover:scale-110 duration-300"
                src={item.image}
              ></img>
            </div>
          );
        })}
      </div>
      <div
        className="absolute bottom-5 left-0 bg-transparent"
        id="deals-section"
      ></div>
    </div>
  );
};

export default Categories;
