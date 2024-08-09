import React from "react";
import { useNavigate } from "react-router-dom";

export const CategoryCard = ({ id, name, img }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between p-6 shadow-md duration-300 hover:shadow-xl">
      <div className="">
        <img src={img} alt="CategoryImg" />
        <h2>{name}</h2>
      </div>
      <div className="flex items-center gap-5">
        <button
          onClick={() => navigate(`/category-product/${id}`)}
          className="rounded-2xl border-[2px] border-transparent bg-slate-500 p-4 text-lg font-semibold text-white transition-all duration-300 hover:border-slate-500 hover:bg-white hover:text-slate-500"
        >
          Show products
        </button>
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
