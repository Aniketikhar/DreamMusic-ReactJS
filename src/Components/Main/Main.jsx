import React, { useContext, useEffect, useState } from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar";
import banner from "../../assets/banner.png"
import SongList from "../Songlist/SongList";
import BoottomSong from "../BottomSong/BoottomSong";
import { GlobalContext } from "../../Context/Context";
import SongCard from "../Songcard/SongCard";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { arrayMove } from "react-movable";


const Main = () => {

  const { songs, setSongs} = useContext(GlobalContext);

  if(songs) console.log(songs);


  const getSongPos = id => songs.findIndex(song => song.id == id)

  const { IsMusicPlayer } = useContext(GlobalContext);

  const handleDragEnd = event => {
    const { active , over} = event;

    if( active.id == over.id) return;
    setSongs( songs => {
      const originalPos = getSongPos(active.id);
      const newPos = getSongPos(over.id);

      return arrayMove(songs, originalPos, newPos);
    } )
    
  }

  
  if( IsMusicPlayer ) return <SongCard />;
  return (
    <div className="main w-[100%] flex flex-col h-screen md:w-[70%] lg:w-[55%]">
      <Navbar />
      {/* Your main content goes here h-[74vh] sm:h-[83vh] */}
      <div className="main-container overflow-y-scroll pt-3 h-auto  ">  
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
          <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          <SongList songs={songs} />

          </DndContext>
          
        </div>
        
      </div>
        <BoottomSong />
    </div>
  );
};

export default Main;
