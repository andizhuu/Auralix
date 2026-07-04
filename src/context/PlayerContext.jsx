import {
  createContext,
  useContext,
  useState,
} from "react";

import PlayerService from "../services/PlayerService";

const PlayerContext = createContext(null);

export function PlayerProvider({ children }) {

  const [currentSong, setCurrentSong] = useState(null);

  const [isPlaying, setIsPlaying] = useState(false);

  async function play(song) {

    try {

      await PlayerService.play(song);

      setCurrentSong(song);

      setIsPlaying(true);

    } catch (err) {

      console.error(err);
    }
  }

  async function pause() {

    try {

      await PlayerService.pause();

      setIsPlaying(false);

    } catch (err) {

      console.error(err);
    }
  }

  async function resume() {

    try {

      await PlayerService.resume();

      setIsPlaying(true);

    } catch (err) {

      console.error(err);
    }
  }

  async function stop() {

    try {

      await PlayerService.stop();

      setIsPlaying(false);

    } catch (err) {

      console.error(err);
    }
  }

  async function toggle() {

    if (isPlaying) {

      await pause();

    } else {

      await resume();
    }
  }

  return (

    <PlayerContext.Provider
      value={{

        currentSong,

        isPlaying,

        play,

        pause,

        resume,

        stop,

        toggle,

      }}
    >

      {children}

    </PlayerContext.Provider>

  );
}

export function usePlayer() {

  return useContext(PlayerContext);

}
