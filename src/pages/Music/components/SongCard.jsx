import { MdMoreVert, MdMusicNote } from "react-icons/md";
import formatDuration from "../../../utils/formatDuration";

export default function SongCard({ song, onClick }) {
  return (
    <button
      onClick={() => onClick?.(song)}
      className="w-full flex items-center rounded-3xl border border-white/5 bg-[#1A2333] p-4 active:scale-[0.98] transition"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600">
        <MdMusicNote size={32} className="text-white" />
      </div>

      <div className="ml-4 flex-1 text-left overflow-hidden">
        <h3 className="font-semibold truncate">
          {song.title}
        </h3>

        <p className="text-sm text-slate-400 truncate">
          {song.artist || "Unknown Artist"}
        </p>

        <p className="text-xs text-slate-500 truncate">
          {song.album || "Unknown Album"}
        </p>
      </div>

      <div className="ml-3 text-right">
        <p className="text-sm text-slate-400">
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
