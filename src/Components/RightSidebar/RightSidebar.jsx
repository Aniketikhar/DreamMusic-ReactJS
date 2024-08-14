import React from "react";
import "./RightSidebar.css";
import SongCard from "../Songcard/SongCard";

const RightSidebar = () => {
  return (
    <div className="rightside relative hidden md:block md:w-[30%] lg:w-[25%]">
       <SongCard />
    </div>
  );
};

export default RightSidebar;
