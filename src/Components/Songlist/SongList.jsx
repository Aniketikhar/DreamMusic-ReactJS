import React, { useState } from "react";

import "./SongList.css";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Song from "../Song/Song";

const SongList = ({ songs }) => {
  const id = 1

  return (
    <>
      <SortableContext items={songs} key={() => id + 1} strategy={verticalListSortingStrategy}>
        {songs.map((song) => {
          return <Song song={song} id={song.id} />;
        })}
      </SortableContext>
    </>
  );
};

export default SongList;
