import { useMutation } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: (newProduct) =>
      request.post("/products", newProduct).then((res) => res.data),
  });
};
