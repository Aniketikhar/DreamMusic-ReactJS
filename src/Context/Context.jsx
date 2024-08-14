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
      setIsMusicPlayer(prev => prev); // Or set it based on other logic
    } else {
      // Always set it to false
      setIsMusicPlayer(false);
    }
  };


  useEffect(() => {
    updateIsMusicPlayer();
    window.addEventListener('resize', updateIsMusicPlayer);
  
    return () => {
      window.removeEventListener('resize', updateIsMusicPlayer);
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        IsMusicPlayer,
        setIsMusicPlayer
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
