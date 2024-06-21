import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import ButtonList from "./ButtonList";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
