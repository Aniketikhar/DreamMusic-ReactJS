import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Howl } from "howler";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [IsMusicPlayer, setIsMusicPlayer] = useState(false);
  const updateIsMusicPlayer = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      // Allow it to be true or false
      setIsMusicPlayer((prev) => prev); // Or set it based on other logic
    } else {
      // Always set it to false
      setIsMusicPlayer(false);
    }
  };

  useEffect(() => {
    updateIsMusicPlayer();
    window.addEventListener("resize", updateIsMusicPlayer);

    return () => {
      window.removeEventListener("resize", updateIsMusicPlayer);
    };
  }, []);

  // Fetch Spotify Access Token

  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getSpotifyToken = async () => {
    try {
      const clientId = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
      const clientSecret = import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET;

      // Encode clientId and clientSecret in base64
      const token = btoa(`${clientId}:${clientSecret}`);

      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        new URLSearchParams({ grant_type: "client_credentials" }),
        {
          headers: {
            Authorization: `Basic ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      return response.data.access_token;
    } catch (err) {
      console.error("Error fetching Spotify token", err);
      throw err;
    }
  };

  const fetchTracks = async () => {
    try {
      const token = await getSpotifyToken();
      const artistId = "3fMbdgg4jU18AjLCKBhRSm"; // Michael Jackson's Spotify Artist ID

      const response = await axios.get(
        `https://api.spotify.com/v1/artists/${artistId}/top-tracks`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            market: "US", // You can change this to your preferred market
          },
        }
      );

      if (response) {
        const tracks = response.data.tracks.map((track, index) => ({
          ...track,
          index,
        }));
        setSongs(tracks);
        setLoading(false);
      }
    } catch (err) {
      console.error("Error fetching tracks", err);
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [howlerInstance, setHowlerInstance] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  let sound;

  const playTrack = (index) => {
    if (howlerInstance) {
      howlerInstance.stop();
    }
    sound = new Howl({
      src: [songs[index].preview_url], // Using preview URL from Spotify API
      html5: true,
      onplay: () => {
        setIsPlaying(true);
        setDuration(sound.duration());
        requestAnimationFrame(updateProgressBar);
      },
      onend: () => {
        setIsPlaying(false);
        setCurrentTime(0);
        setSliderValue(0);
        nextTrack();
      },
    });
    sound.play();
    setHowlerInstance(sound);
    setCurrentTrackIndex(index);
  };

  const updateProgressBar = () => {
    if (sound && isPlaying) {
      setCurrentTime(sound.seek());
      setSliderValue((sound.seek() / duration) * 100);
      requestAnimationFrame(updateProgressBar);
    }
  };

  const handleSliderChange = (e) => {
    const value = e.target.value;
    setSliderValue(value);
    const seekTo = (value / 100) * duration;
    sound.onseek(seekTo);
    setCurrentTime(seekTo);
  };

  const pauseTrack = () => {
    if (!isPlaying && howlerInstance) {
      howlerInstance.play();
      setIsPlaying(true);
      requestAnimationFrame(updateProgressBar);
    } else if (isPlaying && howlerInstance) {
      howlerInstance.pause();
      setIsPlaying(false);
    } else if (!howlerInstance) {
      // No instance, start playing the current track from the beginning
      playTrack(currentTrackIndex);
    }
  };

  const nextTrack = () => {
    let nextIndex = (currentTrackIndex + 1) % songs.length;
    playTrack(nextIndex);
  };

  const prevTrack = () => {
    let prevIndex = (currentTrackIndex - 1 + songs.length) % songs.length;
    playTrack(prevIndex);
  };

  const loopTrack = () => {
    if (howlerInstance) {
      howlerInstance.loop(!howlerInstance.loop());
    }
  };

  const shuffleTracks = () => {
    let shuffledTracks = songs
      .map((track) => ({ ...track, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((track) => track);
    setSongs(shuffledTracks);
    playTrack(0);
  };

  return (
    <GlobalContext.Provider
      value={{
        IsMusicPlayer,
        setIsMusicPlayer,

        songs,
        setSongs,
        sliderValue,
        currentTime,
        duration,
        setCurrentTime,
        setDuration,
        updateProgressBar,
        handleSliderChange,
        currentTrackIndex,
        setCurrentTrackIndex,
        howlerInstance,
        isPlaying,
        playTrack,
        pauseTrack,
        nextTrack,
        prevTrack,
        loopTrack,
        shuffleTracks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
