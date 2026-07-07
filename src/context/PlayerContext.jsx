import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import PlayerService from "../services/PlayerService";

const PlayerContext = createContext(null);

export function PlayerProvider({ children }) {

  const audioRef = useRef(new Audio());
  const pollRef = useRef(null);

  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const [currentSong, setCurrentSong] = useState(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);

  const [duration, setDuration] = useState(0);

  useEffect(() => {

  if (pollRef.current) {
    clearInterval(pollRef.current);
  }

  pollRef.current = setInterval(async () => {

    if (!isPlaying) return;

    try {

      const position = await PlayerService.getCurrentPosition();
      const total = await PlayerService.getDuration();

      setCurrentTime(position / 1000);
      setDuration(total / 1000);

    } catch (e) {
      // abaikan
    }

  }, 500);

  return () => {

    if (pollRef.current) {
      clearInterval(pollRef.current);
    }

  };

}, [isPlaying]);

    const updateDuration = () => {
      setDuration(audio.duration || 0);
    };

    const ended = () => {
      next();
    };


  async function play(song, list = []) {

    if (!song) return;

    if (list.length) {

      setPlaylist(list);

      const idx = list.findIndex(
        (s) => s.uri === song.uri
      );

      setCurrentIndex(idx);

    }

    setCurrentSong(song);

    try {

      await PlayerService.play(song);

      setIsPlaying(true);

    } catch (e) {

      console.error(e);

      setIsPlaying(false);

    }

  }

  async function pause() {

    await PlayerService.pause();

    setIsPlaying(false);

  }

  async function resume() {

    await PlayerService.resume();

    setIsPlaying(true);

  }

  async function toggle() {

    if (isPlaying) {

      await pause();

    } else if (currentSong) {

      await resume();

    }

  }

  async function seek(value) {

  try {

    await PlayerService.seekTo(
      Math.floor(value * 1000)
    );

    setCurrentTime(value);

  } catch (e) {
    console.error(e);
  }

}

  function next() {

    if (!playlist.length) return;

    const index =
      (currentIndex + 1) % playlist.length;

    play(playlist[index], playlist);

  }

  function previous() {

    if (!playlist.length) return;

    const index =
      currentIndex <= 0
        ? playlist.length - 1
        : currentIndex - 1;

    play(playlist[index], playlist);

  }

  return (

    <PlayerContext.Provider
      value={{

        currentSong,

        isPlaying,

        currentTime,

        duration,

        play,

        pause,

        resume,

        toggle,

        seek,

        next,

        previous,

      }}
    >

      {children}

    </PlayerContext.Provider>

  );

}

export function usePlayer() {

  return useContext(PlayerContext);

}
