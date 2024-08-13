import React from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  return (
    <div className="main w-[100%] h-screen md:w-[70%] lg:w-[55%]">
      <Navbar />
    </div>
  );
};

export default Main;
