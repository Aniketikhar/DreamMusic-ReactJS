import React from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar";
import banner from "../../assets/banner.png"
import SongList from "../Songlist/SongList";

const Main = () => {
  return (
    <div className="main w-[100%] h-screen md:w-[70%] lg:w-[55%]">
      <Navbar />
      {/* Your main content goes here */}
      <div className="main-container overflow-y-scroll pt-3  h-[80vh] sm:h-[90vh]">
        <div className="banner px-5 lg:px-10">
          <img src={banner} alt="banner" />
        </div>
        {/* if wants to add loading then this div  */}
        <div className="songlist text-white text-sm  ">
          <div className="popular flex justify-between text-[15px] my-3 px-5 lg:px-10 ">
            <p className="font-semibold ">Popular</p>
            <p className="text-sm">See All</p>
          </div>
          <div className="flex text-center py-3 px-5 lg:px-10">
            <p className="w-[5%]">#</p>
            <p className="w-[60%] md:w-[50%]">TITLE</p>
            <p className="hidden md:block w-[20%] lg:w-[15%]">POPULAR</p>
            <p className="w-[10%]">TIME</p>
            <p className="w-[30%] md:w-[20%] text-right pr-3">ALBUM</p>
          </div>
          <SongList />
          
        </div>
        
      </div>
    </div>
  );
};

export default Main;
