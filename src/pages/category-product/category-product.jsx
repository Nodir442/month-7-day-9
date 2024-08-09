import React from "react";
import { Link, useParams } from "react-router-dom";
import { useProductList } from "../../service/query/useProductList";
import { ProductCard } from "../../components/product-card";
export const CategoryProduct = () => {
  const { id } = useParams();
  const { data } = useProductList(id);
  return (
    <div>
      <Link
        to={"/create-product"}
        className="mb-5 rounded-2xl border-[2px] border-transparent bg-yellow-500 p-4 text-lg font-semibold text-white transition-all duration-300 hover:border-yellow-500 hover:bg-white hover:text-yellow-500"
      >
        Create Product{" "}
      </Link>
      {data?.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};
