import {
  MdMusicNote,
  MdPause,
  MdPlayArrow,
} from "react-icons/md";

import { usePlayer } from "../../context/PlayerContext";

export default function MiniPlayer() {

  const {
    currentSong,
    isPlaying,
    toggle,
  } = usePlayer();

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-20 left-1/2 z-40 w-[95%] max-w-md -translate-x-1/2">

      <div className="flex items-center rounded-3xl border border-white/10 bg-[#182233]/95 p-4 shadow-2xl backdrop-blur-xl">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600">

          <MdMusicNote
            size={30}
            className="text-white"
          />

        </div>

        <div className="ml-4 flex-1 overflow-hidden">

          <h3 className="truncate font-semibold">

            {currentSong.title}

          </h3>

          <p className="truncate text-sm text-slate-400">

            {currentSong.artist}

          </p>

        </div>

        <button
          onClick={toggle}
          className="ml-3 rounded-full bg-cyan-500 p-3 text-black shadow-lg"
        >

          {isPlaying
            ? <MdPause size={24} />
            : <MdPlayArrow size={24} />}

        </button>

      </div>

    </div>
  );
}
