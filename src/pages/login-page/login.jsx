import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../../service/mutation/useLogin";
import * as z from "zod";
import { saveState } from "../../config/storage";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().min(3, "Please enter a valid value"),
  password: z
    .string(2)
    .min(3, "eng kam qiymat 3ta")
    .max(4, "eng ko'p qiymat 4ta"),
});

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(schema) });
  const { mutate } = useLogin();
  const navigate = useNavigate();
  const submit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        saveState("user", { ...res.user, token: res.accessToken });
        navigate("/");
      },
    });
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[500px] rounded-sm bg-cyan-200 p-[35px]">
        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-5">
            <input
              placeholder="Email"
              className="w-full p-5"
              type="email"
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p className="mt-[-20px] p-2 text-red-500">
              {errors.email.message}
            </p>
          )}
          <div className="mb-5">
            <input
              placeholder="Password"
              className="w-full p-5"
              type="password"
              {...register("password")}
            />
          </div>
          {errors.password && (
            <p className="mt-[-20px] p-2 text-red-500">
              {errors.password.message}
            </p>
          )}
          <button
            type="submit"
            className="block w-full text-wrap bg-cyan-700 p-5 text-center text-white"
          >
            {" "}
            send
          </button>
        </form>
      </div>{" "}
    </div>
  );
};
