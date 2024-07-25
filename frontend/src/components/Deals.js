import React, { useEffect, useState } from "react";
import axios from "axios";
import filledStar from "../assets/filledStar.svg";

const Deals = () => {
  const [dealsArray, setDealsArray] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/product/deals")
      .then((response) => {
        setDealsArray(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <div className="m-4 flex flex-col gap-8 relative">
      <h2 className="text-3xl font-bold text-gray-700">
        Todays best Deals For You!
      </h2>
      <div className="flex gap-5 overflow-y-scroll">
        {dealsArray
          ? dealsArray.map((item) => {
              return (
                <div>
                  <div className="bg-slate-100 rounded-xl min-w-72 h-72 flex justify-center items-center relative">
                    <button className="absolute top-2 right-2 p-1 px-2.5 rounded-full bg-slate-300">
                      &times;
                    </button>
                    <img
                      className="w-52 h-52 bg-contain hover:scale-110 duration-300 rounded-lg "
                      src={item.productImage}
                    ></img>
                  </div>
                  <div className="mt-2 flex flex-col">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold ">{item.name}</h3>
                      <div className="font-bold">
                        {"$"}
                        {parseFloat(item.price).toFixed(2)}
                      </div>
                    </div>
                    <div className="text-xs text-bold text-gray-600">
                      {item.description.length <= 40
                        ? item.description
                        : item.description.substring(0, 40) + "..."}
                    </div>
                    <div className="flex gap-0.5 mt-2">
                      {[...Array(5)].map((it) => {
                        return <img src={filledStar} className="w-4 h-4"></img>;
                      })}
                    </div>
                    <button className="border border-black rounded-full px-3 py-1 hover:bg-gray-100 text-xs mt-2 duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <div
        className="absolute bottom-5 left-0 bg-transparent"
        id="brands-section"
      ></div>
    </div>
  );
};

export default Deals;
