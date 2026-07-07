import {
  MdMoreVert,
  MdMusicNote,
  MdGraphicEq,
} from "react-icons/md";

import { usePlayer } from "../../../context/PlayerContext";
import formatDuration from "../../../utils/formatDuration";

export default function SongCard({ song, onClick }) {

  const { currentSong, isPlaying } = usePlayer();

  const active =
    currentSong?.uri === song.uri;

  return (
    <button
      onClick={() => onClick?.(song)}
      className={`w-full flex items-center rounded-3xl p-4 active:scale-[0.98] transition-all duration-300 ${
        active
          ? "border border-cyan-400 bg-[#14253A] shadow-[0_0_18px_rgba(34,211,238,.25)]"
          : "border border-white/5 bg-[#1A2333]"
      }`}
    >

      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
          active
            ? "bg-cyan-500"
            : "bg-gradient-to-br from-cyan-400 to-blue-600"
        }`}
      >

        {active && isPlaying ? (
          <MdGraphicEq
            size={32}
            className="text-white"
          />
        ) : (
          <MdMusicNote
            size={32}
            className="text-white"
          />
        )}

      </div>

      <div className="ml-4 flex-1 text-left overflow-hidden">

        <h3
          className={`truncate font-semibold ${
            active
              ? "text-cyan-400"
              : "text-white"
          }`}
        >
          {song.title}
        </h3>

        <p
          className={`text-sm truncate ${
            active
              ? "text-cyan-300"
              : "text-slate-400"
          }`}
        >

          {active
            ? "🎵 Sedang diputar"
            : (song.artist || "Unknown Artist")}

        </p>

        <p className="text-xs text-slate-500 truncate">
          {song.album || "Unknown Album"}
        </p>

      </div>

      <div className="ml-3 text-right">

        <p
          className={`text-sm ${
            active
              ? "text-cyan-300"
              : "text-slate-400"
          }`}
        >
          {formatDuration(song.duration)}
        </p>

        <MdMoreVert
          size={22}
          className="ml-auto mt-2"
        />

      </div>

    </button>
  );
}
