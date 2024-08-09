import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/storage";

export const MainLoyaut = () => {
  const user = loadState("user");
  if (!user) {
    return <Navigate replace to={"/login"} />;
  }
  return (
    <div className="flex">
      <div className="h-screen w-[300px] bg-lime-400 p-5">
        <div>
          {" "}
          <Link to={"/"}>Home</Link>
        </div>{" "}
        <div>
          {" "}
          <Link to={"/category-list"}>Category</Link>
        </div>{" "}
      </div>
      <div className="p-5 flex-grow-1 w-full">
        <Outlet />
      </div>
    </div>
  );
};
