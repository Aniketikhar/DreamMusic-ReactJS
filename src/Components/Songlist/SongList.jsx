import React, { useState } from "react";
import banner from "../../assets/banner.png";
import './SongList.css';


const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: "Song 1", popular: 90, time: "3:45", album: "Album 1" },
    { id: 2, title: "Song 2", popular: 80, time: "4:15", album: "Album 2" },
    { id: 3, title: "Song 3", popular: 70, time: "5:00", album: "Album 3" },
    { id: 4, title: "Song 4", popular: 60, time: "3:20", album: "Album 4" },
    { id: 5, title: "Song 5", popular: 50, time: "4:30", album: "Album 5" },
    //... more songs
  ]);

  const [currentSong, setCurrentSong] = useState(null);

  const handleCurrentSong = (e) => {
      console.log(e.target.parentNode.id);
      setCurrentSong(e.target.parentNode.id);
  }

  return (
    <>
      {songs.map((song) => {
        return (
          <div className={ currentSong == song.id ? "border-l-4 border-[#ca0000] bg-[#6b0000] song flex text-center items-center my-1 px-5 lg:px-10" : " song flex text-center items-center my-1 px-5 lg:px-10 "}  key={song.id} id={song.id} onClick={handleCurrentSong}>
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
      })}
    </>
  );
};

export default SongList;
