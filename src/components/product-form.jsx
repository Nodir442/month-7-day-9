import React from "react";
import { useForm } from "react-hook-form";

export const ProductForm = ({ submit, categoryData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="mb-5">
        <select className="w-full bg-blue-200 p-5" {...register("categoryId")}>
          {categoryData.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-5">
        <input
          placeholder="Product name"
          className="w-full p-5"
          type="text"
          {...register("name", { required: "Product name is required" })}
        />
      </div>
      {errors.name && ( // Изменили errors.email на errors.name
        <p className="mt-[-20px] p-2 text-red-500">{errors.name.message}</p>
      )}
      <div className="mb-5">
        <input
          placeholder="Product price"
          className="w-full p-5"
          type="number"
          {...register("price", { required: "Product price is required" })}
        />
      </div>
      <div className="mb-5">
        <input
          placeholder="Product image"
          className="w-full p-5"
          type="text"
          {...register("img", { required: "Product image is required" })}
        />
      </div>
      {errors.img && (
        <p className="mt-[-20px] p-2 text-red-500">{errors.img.message}</p>
      )}
      <button
        type="submit"
        className="block w-full text-wrap bg-cyan-700 p-5 text-center text-white"
      >
        send
      </button>
    </form>
  );
};
