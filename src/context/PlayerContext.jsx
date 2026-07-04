import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const PlayerContext = createContext(null);

export function PlayerProvider({ children }) {
  const audioRef = useRef(new Audio());

  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const [currentSong, setCurrentSong] = useState(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);

  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime || 0);
    };

    const updateDuration = () => {
      setDuration(audio.duration || 0);
    };

    const ended = () => {
      next();
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", ended);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", ended);
    };
  }, []);

  function play(song, list = []) {
    if (!song) return;

    if (list.length) {
      setPlaylist(list);

      const idx = list.findIndex(
        (s) => s.uri === song.uri
      );

      setCurrentIndex(idx);
    }

    setCurrentSong(song);

    audioRef.current.src = song.uri;

    audioRef.current.play();

    setIsPlaying(true);
  }

  function pause() {
    audioRef.current.pause();
    setIsPlaying(false);
  }

  function resume() {
    audioRef.current.play();
    setIsPlaying(true);
  }

  function seek(value) {
    audioRef.current.currentTime = value;
    setCurrentTime(value);
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
