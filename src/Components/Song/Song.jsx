import React, { useContext, useState } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import banner from "../../assets/banner.png";
import { GlobalContext } from "../../Context/Context";

const Song = ({ song, index }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const { playTrack } = useContext(GlobalContext); 

  const handleCurrentSong = (e) => {
    console.log(e.target.parentNode.id);
    setCurrentSong(e.target.parentNode.id);
    playTrack(index);
  };
  const truncateText = (text, maxLength) => {
    
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  };
  console.log(currentSong)

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ index });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={style}
      {...listeners}
      className={
        currentSong === index
          ? "border-l-4 border-[#ca0000] bg-[#6b0000] song flex text-center items-center my-1 px-5 lg:px-10"
          : " song flex text-center items-center my-1 px-5 lg:px-10 "
      }
      key={song.id}
      id={index + 1}
      onClick={handleCurrentSong}
    >
      <p className="w-[5%]">{index + 1}</p>
      <p className="w-[60%] md:w-[50%] flex items-center md:ms-4">
        <img src={song.album.images[0].url} height="60px" width="50px"  title={song.name} className="mx-3" alt="" />
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
