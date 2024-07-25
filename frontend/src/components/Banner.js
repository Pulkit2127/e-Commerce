import React from "react";
import banner from "../assets/banner.svg";

const Banner = () => {
  return (
    <div className="w-full relative">
      <div className="flex justify-between w-full pr-20 pl-40 -mt-16">
        <div className="max-w-screen-sm flex flex-col justify-center gap-8">
          <h1 className="text-5xl text-gray-800 font-bold flex flex-col gap-3">
            <span>Shopping and </span>
            <span>Department Store</span>
          </h1>
          <div className="max-w-96 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            deleniti ad eius.
          </div>
        </div>
        <div>
          <img className="" width={"700px"} src={banner}></img>
        </div>
      </div>
      <div
        className="absolute bottom-14 left-0 bg-transparent"
        id="categories-section"
      ></div>
    </div>
  );
};

export default Banner;
