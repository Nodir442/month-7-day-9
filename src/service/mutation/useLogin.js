import { useMutation } from "@tanstack/react-query";
import { request } from "../../config/request";
import { data } from "autoprefixer";

export const useLogin = () => {
  return useMutation({
    mutationFn: (data) => request.post("login", data).then((res) => res.data),
  });
};
