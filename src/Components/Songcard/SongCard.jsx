import React, { useContext, useEffect, useState } from "react";
import "./SongCard.css";
import banner from "../../assets/banner.png";
import songplayer from "../../assets/songplayer.png";
import { TfiLoop } from "react-icons/tfi";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaPause, FaPlay } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { GlobalContext } from "../../Context/Context";
import { IoCloseSharp } from "react-icons/io5";

const SongCard = () => {
  const {
    IsMusicPlayer,
    setIsMusicPlayer,
    songs,
    currentTrackIndex,
    howlerInstance,
    isPlaying,
    playTrack,
    pauseTrack,
    nextTrack,
    prevTrack,
    loopTrack,
    shuffleTracks,
    currentTime,
    duration,
    setCurrentTime,
    setDuration,
    updateProgressBar,
    handleSliderChange,
    sliderValue,
  } = useContext(GlobalContext);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  };

  console.log(howlerInstance);

  return (
    <>
      <div className="flex justify-center absolute  md:bottom-3 w-[100%]">
        <div className="flex flex-col justify-center rounded-none md:rounded-2xl  text-white bg-[#6b0000] w-[100%] md:w-[90%] lg:w-[80%] h-screen md:h-[350px]">
          <button
            className={
              IsMusicPlayer ? "absolute right-10 top-10 text-3xl" : "hidden"
            }
            onClick={() => setIsMusicPlayer(false)}
          >
            <IoCloseSharp />
          </button>
          <p className="text-lg font-bold text-center my-4">Now Playing</p>
          <div className="flex justify-center mt-5 ">
            <img
              src={songs[currentTrackIndex]?.album.images[0].url}
              className="h-20 rounded-md"
              alt="song img"
            />
          </div>
          <p
            className="text-2xl font-semibold mt-4 text-center"
            title={songs[currentTrackIndex]?.name}
          >
            {songs[currentTrackIndex] &&
              truncateText(songs[currentTrackIndex]?.name, 20)}
          </p>
          <p className="text-sm text-gray-300 text-center">
            {songs[currentTrackIndex]?.artists[0].name}
          </p>
          <div className="progress-bar mt-6 text-sm px-5 flex justify-center items-center">
            <span>
              {Math.floor(currentTime / 60)
                .toString()
                .padStart(2, "0")}
              :{(currentTime % 60).toFixed(0).padStart(2, "0")}{" "}
            </span>
            &nbsp;&nbsp;&nbsp;
            <input
              className="slider"
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={handleSliderChange}
            />
            &nbsp;&nbsp;&nbsp;
            <span>
              {Math.floor(duration / 60)
                .toString()
                .padStart(2, "0")}
              :{(duration % 60).toFixed(0).padStart(2, "0")}
            </span>
          </div>

          <div className="flex justify-around items-center mt-3 text-lg">
            <div>
              <button onClick={loopTrack}>
                <TfiLoop />
              </button>
            </div>
            <div className="flex justify-center items-center ">
              <button className="text-2xl" onClick={prevTrack}>
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
            <div>
              <button onClick={shuffleTracks}>
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
