import React, { useState } from "react";
import "./SongList.css";
import Song from "../Song/Song";

const SongList = ({ songs }) => {
  let id = 1;
  const count = () => {
    id = id + 1;
    return id;
  };
  return (
    <>
      
        {songs.map((song, index) => {
          return (
            <Song
              song={song}
              index={index}
              
            />
          );
        })}
    </>
  );
};

export default SongList;
