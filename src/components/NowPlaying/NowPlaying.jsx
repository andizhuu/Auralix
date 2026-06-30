import {
  MdMusicNote,
  MdPlayArrow,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

export default function NowPlaying() {
  return (
    <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#1A2333] to-[#111827] p-5 shadow-2xl">

      <div className="flex gap-5">

        {/* Album Art */}
        <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_30px_rgba(34,211,238,.35)]">

          <MdMusicNote className="text-6xl text-white" />

        </div>

        {/* Song Info */}
        <div className="flex flex-1 flex-col justify-between">

          <div>

            <p className="text-xs uppercase tracking-widest text-cyan-400">
              NOW PLAYING
            </p>

            <h3 className="mt-2 text-xl font-bold">
              Tidak ada musik
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Pilih lagu dari Library
            </p>

          </div>

          {/* Buttons */}
          <div className="mt-4 flex items-center gap-4">

            <button className="rounded-full bg-white/10 p-2">
              <MdSkipPrevious size={22} />
            </button>

            <button className="rounded-full bg-cyan-500 p-3 text-black shadow-lg">
              <MdPlayArrow size={28} />
            </button>

            <button className="rounded-full bg-white/10 p-2">
              <MdSkipNext size={22} />
            </button>

          </div>

        </div>

      </div>

      {/* Progress */}
      <div className="mt-6">

        <div className="mb-2 flex justify-between text-xs text-slate-400">
          <span>00:00</span>
          <span>00:00</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-700">

          <div className="h-full w-0 rounded-full bg-cyan-400"></div>

        </div>

      </div>

    </div>
  );
}
