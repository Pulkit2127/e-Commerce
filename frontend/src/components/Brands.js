import React, { useState } from "react";
import nike from "../assets/brands/nike.jpg";

const Brands = () => {
  const [brandsArr, setBrandsArr] = useState([
    {
      name: "Nike",
      desc: "Leading in sports apparel",
    },
    {
      name: "Adidas",
      desc: "Innovative sportswear and shoes",
    },
    {
      name: "Apple",
      desc: "Iconic technology products",
    },
    {
      name: "Samsung",
      desc: "Cutting-edge electronics",
    },
    {
      name: "Dell",
      desc: "Quality laptops and PCs",
    },
    {
      name: "Moleskine",
      desc: "Premium notebooks and stationery",
    },
    {
      name: "Casio",
      desc: "Trusted for calculators and watches",
    },
    {
      name: "Levi's",
      desc: "Classic denim fashion",
    },
  ]);

  return (
    <div className="m-4 flex flex-col gap-8">
      <h2 className="text-3xl font-bold text-gray-700">Choose By Brand</h2>
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
        {brandsArr.map((item) => {
          return (
            <div className="p-4 sm:bg-slate-100  rounded-lg border-2 border-white hover:border-slate-400 flex gap-4 duration-200 cursor-pointer items-center justify-center sm:justify-normal">
              <img src={nike} className="w-16 h-16 rounded-full"></img>
              <div className="grow sm:flex flex-col gap-1 hidden">
                <div className="text-lg font-semibold">{item.name}</div>
                <div className="text-xs ">{item.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
