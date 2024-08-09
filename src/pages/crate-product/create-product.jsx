import React from "react";
import { ProductForm } from "../../components/product-form";
import { userCategoryList } from "../../service/query/useCategorylist";
import { useCreateProduct } from "../../service/mutation/useCreateProduct";
import { useNavigate } from "react-router-dom";

export const CreateProduct = () => {
  const { data, isLoading } = userCategoryList();
  const { mutate } = useCreateProduct();
  const navigate = useNavigate();

  const submit = (formData) => {
    mutate(formData, {
      onSuccess: () => {
        navigate(-1);
      },
      onError: (error) => {
        console.error("Error creating product:", error);
      },
    });
  };

  return (
    <div>
      {!isLoading && <ProductForm categoryData={data} submit={submit} />}{" "}
    </div>
  );
};
