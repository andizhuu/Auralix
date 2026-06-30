import { MdSkipPrevious, MdPlayArrow, MdSkipNext } from "react-icons/md";

export default function MiniPlayer() {
  return (
    <div className="fixed bottom-24 left-1/2 z-40 w-[92%] max-w-md -translate-x-1/2">

      <div className="rounded-3xl border border-cyan-500/20 bg-[#1B2333]/95 p-3 backdrop-blur-xl shadow-2xl">

        <div className="flex items-center gap-3">

          <img
            src="https://picsum.photos/100"
            alt=""
            className="h-14 w-14 rounded-2xl object-cover"
          />

          <div className="flex-1 overflow-hidden">

            <h3 className="truncate text-white font-semibold">
              Tidak ada lagu
            </h3>

            <p className="truncate text-slate-400 text-sm">
              Pilih musik dari Library
            </p>

          </div>

          <button className="text-slate-300">
            <MdSkipPrevious size={26} />
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-black">
            <MdPlayArrow size={30} />
          </button>

          <button className="text-slate-300">
            <MdSkipNext size={26} />
          </button>

        </div>

      </div>

    </div>
  );
}
