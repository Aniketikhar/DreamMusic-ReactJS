import React, { useState } from 'react';
import {CSS} from "@dnd-kit/utilities";
import { useSortable } from '@dnd-kit/sortable';
import banner from "../../assets/banner.png";

const Song = ({song, id}) => {
    const [currentSong, setCurrentSong] = useState(null);

  const handleCurrentSong = (e) => {
      console.log(e.target.parentNode.id);
      setCurrentSong(e.target.parentNode.id);
  }


    const { attributes, listeners , setNodeRef,transform, transition} = useSortable({id})
    const style = {
      transition,
      transform: CSS.Transform.toString(transform)
    }
    return (
      <div ref={setNodeRef} {...attributes} style={style} {...listeners} className={ currentSong == song.id ? "border-l-4 border-[#ca0000] bg-[#6b0000] song flex text-center items-center my-1 px-5 lg:px-10" : " song flex text-center items-center my-1 px-5 lg:px-10 "}  key={song.id} id={song.id} onClick={handleCurrentSong}>
        <p className="w-[5%]">{song.id}</p>
        <p className="w-[60%] md:w-[50%] flex items-center">
          <img
            src={banner}
            height="80px"
            width="80px"
            className="mx-3"
            alt=""
          />
          {song.title}
        </p>
        <p className="hidden md:block w-[20%] lg:w-[15%]">{song.popular}</p>
        <p className="w-[10%]">{song.time}</p>
        <p className="w-[30%] md:w-[20%] text-right pr-3">{song.album}</p>
      </div>
    );
}

export default Song
