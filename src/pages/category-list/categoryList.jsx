import React from "react";
import { CategoryCard } from "../../components/categoryCard";
import { userCategoryList } from "../../service/query/useCategorylist";
export const CategoryList = () => {
  const { data } = userCategoryList();
  return (
    <div>
      <button className="mb-5 rounded-2xl border-[2px] border-transparent bg-yellow-500 p-4 text-lg font-semibold text-white transition-all duration-300 hover:border-yellow-500 hover:bg-white hover:text-yellow-500">
        Create Category{" "}
      </button>
      {data?.map((item) => (
        <CategoryCard key={item.id} {...item} />
      ))}
    </div>
  );
};
