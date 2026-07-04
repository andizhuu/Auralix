import {
  MdMusicNote,
  MdPause,
  MdPlayArrow,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

import { usePlayer } from "../../context/PlayerContext";

export default function NowPlaying() {

  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    toggle,
  } = usePlayer();

  return (
    <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#1A2333] to-[#111827] p-5 shadow-2xl">

      <div className="flex gap-5">

        {/* Album */}
        <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_30px_rgba(34,211,238,.35)]">

          <MdMusicNote className="text-6xl text-white" />

        </div>

        {/* Info */}
        <div className="flex flex-1 flex-col justify-between">

          <div>

            <p className="text-xs uppercase tracking-widest text-cyan-400">
              NOW PLAYING
            </p>

            <h3 className="mt-2 text-xl font-bold truncate">

              {currentSong
                ? currentSong.title
                : "Tidak ada musik"}

            </h3>

            <p className="mt-1 text-sm text-slate-400 truncate">

              {currentSong
                ? currentSong.artist
                : "Pilih lagu dari Library"}

            </p>

          </div>

          <div className="mt-4 flex items-center gap-4">

            <button className="rounded-full bg-white/10 p-2">

              <MdSkipPrevious size={22} />

            </button>

            <button
              onClick={toggle}
              className="rounded-full bg-cyan-500 p-3 text-black shadow-lg"
            >

              {isPlaying
                ? <MdPause size={28} />
                : <MdPlayArrow size={28} />}

            </button>

            <button className="rounded-full bg-white/10 p-2">

              <MdSkipNext size={22} />

            </button>

          </div>

        </div>

      </div>

      <div className="mt-6">

        <div className="mb-2 flex justify-between text-xs text-slate-400">

          <span>
  {Math.floor(currentTime / 60)
    .toString()
    .padStart(2, "0")}
  :
  {(Math.floor(currentTime) % 60)
    .toString()
    .padStart(2, "0")}
</span>

          <span>

            {currentSong
              ? Math.floor(currentSong.duration / 60000)
                  .toString()
                  .padStart(2, "0")
                +
                ":" +
                Math.floor((currentSong.duration % 60000) / 1000)
                  .toString()
                  .padStart(2, "0")
              : "00:00"}

          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-700">

          <div
  className="h-full rounded-full bg-cyan-400 transition-all duration-300"
  style={{
    width:
      duration > 0
        ? `${Math.min((currentTime / duration) * 100, 100)}%`
        : "0%",
  }}
></div>

      </div>

    </div>

</div>

  );
}
