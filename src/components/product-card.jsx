import React from "react";

export const ProductCard = ({ id, name, img, price, categoryId }) => {
  return (
    <div className="flex items-center justify-between p-6 shadow-md duration-300 hover:shadow-xl">
      <div className="">
        <img className="w-60" src={img} alt="CategoryImg" />
        <h2>{name}</h2>
        <strong>{price}</strong>
      </div>
      <div className="flex items-center gap-5">
        <button className="rounded-2xl border-[2px] border-transparent bg-red-500 p-4 text-lg font-semibold text-white transition-all duration-300 hover:border-red-500 hover:bg-white hover:text-red-500">
          Delete
        </button>
        <button className="rounded-2xl border-[2px] border-transparent bg-green-500 p-4 text-lg font-semibold text-white transition-all duration-300 hover:border-green-500 hover:bg-white hover:text-green-500">
          Edit
        </button>
      </div>
    </div>
  );
};
