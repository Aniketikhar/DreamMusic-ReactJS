import React, { useContext, useState } from "react";
import "./BottomSong.css";
import songplayer from "../../assets/songplayer.png";
import { TfiLoop } from "react-icons/tfi";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaPause, FaPlay } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { GlobalContext } from "../../Context/Context";

const BoottomSong = () => {
  const {
    setIsMusicPlayer,
    songs,
    currentTrackIndex,
    playTrack,
    isPlaying,
    pauseTrack,
    nextTrack,
    prevTrack,
  } = useContext(GlobalContext);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  };

  return (
    <div className="bg-[#6b0000] md:hidden">
      <div className="flex py-1  mx-auto ">
        <div className="flex justify-around  items-center w-[80%] h-[50px] ">
          <img
            src={songs[currentTrackIndex]?.album.images[0].url}
            alt=""
            className=" h-[40px] ms-7"
          />

          <div
            className="flex flex-col mx-auto ms-5 text-white"
            onClick={() => setIsMusicPlayer(true)}
          >
            <p
              className="text-sm font-semibold"
              title={songs[currentTrackIndex]?.name}
            >
              {songs[currentTrackIndex] &&
                truncateText(songs[currentTrackIndex]?.name, 15)}
            </p>
            <p className="text-xs">
              {songs[currentTrackIndex] &&
                truncateText(songs[currentTrackIndex]?.artists[0]?.name, 15)}
            </p>
          </div>

          <div className=" ">
            <div className="flex justify-center items-center text-white ">
              <button className="text-lg" onClick={prevTrack}>
                <MdSkipPrevious />
              </button>

              {isPlaying ? (
                <button className="px-3" onClick={pauseTrack}>
                  <FaPause />
                </button>
              ) : (
                <button
                  className="mx-3"
                  onClick={() => playTrack(currentTrackIndex)}
                >
                  <FaPlay />
                </button>
              )}

              <button className="text-2xl" onClick={nextTrack}>
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
