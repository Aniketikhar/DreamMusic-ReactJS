import React, { useContext, useState } from "react";
import "./SongCard.css";
import banner from "../../assets/banner.png";
import songplayer from "../../assets/songplayer.png";
import { TfiLoop } from "react-icons/tfi";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { GlobalContext } from "../../Context/Context";
import { IoCloseSharp } from "react-icons/io5";

const SongCard = () => {

    const [isPlaying , setIsPlaying] = useState(false);
    const { IsMusicPlayer, setIsMusicPlayer } = useContext(GlobalContext);

    
  return (
    <>
      <div className="flex justify-center absolute  md:bottom-3 w-[100%]">
        <div className="flex flex-col justify-center rounded-none md:rounded-2xl  text-white bg-[#6b0000] w-[100%] md:w-[90%] lg:w-[80%] h-screen md:h-[350px]">
          <button className={ IsMusicPlayer ? "absolute right-10 top-10 text-3xl" : "hidden"} onClick={() => setIsMusicPlayer(false)}>
          <IoCloseSharp />
          </button>
          <p className="text-lg font-bold text-center my-4">Now Playing</p>
          <div className="flex justify-center mt-5 ">
            <img src={songplayer} className="h-20 rounded-md" alt="song img" />
          </div>
          <p className="text-2xl font-semibold mt-4 text-center">Beat It</p>
          <p className="text-sm text-gray-300 text-center">Michael Jackson</p>
          <div className="progress-bar mt-6 text-sm px-5 flex justify-center items-center">
            <span>2:16 </span> &nbsp;&nbsp;&nbsp;
            <input
              className="slider"
              type="range"
              min="0"
              max={100}
              value={40}
              //   onChange={handleSeek}
            />
            &nbsp;&nbsp;&nbsp; <span> 4:18</span>
          </div>
          <div className="flex justify-around items-center mt-3 text-lg">
            <div>
              <button >
                <TfiLoop />
              </button>
            </div>
            <div className="flex justify-center items-center ">
              <button className="text-2xl">
                <MdSkipPrevious />
              </button>

              {isPlaying ? (
                <button  className="px-3">
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
            <div>
              <button >
                <FaShuffle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongCard;
