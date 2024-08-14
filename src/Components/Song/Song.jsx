import React, { useContext, useState } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { GlobalContext } from "../../Context/Context";
import { BiSolidMusic } from "react-icons/bi";

const Song = ({ song, index }) => {
  const { playTrack , currentTrackIndex, setCurrentTrackIndex } = useContext(GlobalContext);

  const handleCurrentSong = () => {
    setCurrentTrackIndex(index);
    playTrack(index);
  };
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  };

  return (
    <div
      className={
        currentTrackIndex == index
          ? "border-l-4 border-[#ca0000] bg-[#5c0000] song flex text-center items-center my-1 px-5 lg:px-10"
          : " song flex text-center items-center my-1 px-5 lg:px-10 "
      }
      onClick={handleCurrentSong}
    >
      <p className="w-[5%]">
        { currentTrackIndex == index ? (
          <span className=" text-xl text-red-500">
            <BiSolidMusic />
          </span>
        ) : (
          index + 1
        )}
      </p>
      <p className="w-[60%] md:w-[50%] flex items-center md:ms-4">
        <img
          src={song.album.images[0].url}
          height="60px"
          width="50px"
          title={song.name}
          className="mx-3"
          alt=""
        />
        <span title={song.name}>{song && truncateText(song.name, 21)}</span>
      </p>
      <p className="hidden md:block w-[20%] lg:w-[15%]">{song.popularity}</p>
      <p className="w-[10%]">
        {Math.floor(song.duration_ms / 60000)}:
        {((song.duration_ms % 60000) / 1000).toFixed(0).padStart(2, "0")}
      </p>
      <p className="w-[30%] md:w-[20%] text-right pr-3">{song.album.name}</p>
    </div>
  );
};

export default Song;
