import React, { useState } from "react";
import "./BottomSong.css";
import songplayer from "../../assets/songplayer.png";
import { TfiLoop } from "react-icons/tfi";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaPause, FaPlay } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";

const BoottomSong = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-slate-900 md:hidden ">
      <div className="flex justify-center py-1 w-[80%] h-[50px] ">
        <img src={songplayer} alt="" className=" h-[40px]" />
        <div className="flex justify-around items-center ">
          <div className="flex flex-col ms-5 text-white">
            <p className="text-sm font-semibold">Song name jkbf kjdfd  djbfd</p>
            <p className="text-xs">Artist name</p>
          </div>

          <div className="ms-6 ">
            <div className="flex justify-center items-center text-white ">
              <button className="text-lg">
                <MdSkipPrevious />
              </button>

              {isPlaying ? (
                <button className="px-3">
                  <FaPause />
                </button>
              ) : (
                <button className="mx-3">
                  <FaPlay />
                </button>
              )}

              <button className="text-2xl">
                <MdSkipNext />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoottomSong;
