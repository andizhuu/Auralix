import {
  MdArrowBack,
  MdMusicNote,
  MdSearch,
  MdMoreVert,
} from "react-icons/md";
import { Link } from "react-router-dom";

import BottomNav from "../../components/BottomNav/BottomNav";

const songs = [
  {
    title: "Belum ada lagu",
    artist: "Izinkan akses penyimpanan",
    duration: "--:--",
  },
];

export default function Music() {
  return (
    <div
      className="min-h-screen pb-28 text-white"
      style={{
        background:
          "linear-gradient(180deg,#07111F 0%,#0B1220 50%,#111827 100%)",
      }}
    >
      <main className="mx-auto w-full max-w-md px-5 pt-8">

        {/* Header */}

        <div className="flex items-center gap-4">

          <Link
            to="/home"
            className="rounded-xl bg-white/10 p-2"
          >
            <MdArrowBack size={24} />
          </Link>

          <div>

            <h1 className="text-3xl font-bold">

              Music Library

            </h1>

            <p className="text-cyan-400">

              Semua lagu Anda

            </p>

          </div>

        </div>

        {/* Search */}

        <div className="mt-6 flex items-center rounded-2xl border border-white/10 bg-[#1A2333] px-4 py-4">

          <MdSearch
            size={24}
            className="text-slate-400"
          />

          <input
            placeholder="Cari lagu..."
            className="ml-3 flex-1 bg-transparent outline-none"
          />

        </div>

        {/* Song List */}

        <div className="mt-8">

          <h2 className="mb-4 text-lg font-semibold">

            Semua Lagu

          </h2>

          <div className="space-y-4">

            {songs.map((song, index) => (

              <div
                key={index}
                className="flex items-center rounded-3xl border border-white/5 bg-[#1A2333] p-4"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600">

                  <MdMusicNote
                    size={32}
                    className="text-white"
                  />

                </div>

                <div className="ml-4 flex-1">

                  <h3 className="font-semibold">

                    {song.title}

                  </h3>

                  <p className="text-sm text-slate-400">

                    {song.artist}

                  </p>

                </div>

                <div className="text-right">

                  <p className="text-sm text-slate-400">

                    {song.duration}

                  </p>

                  <MdMoreVert
                    className="ml-auto mt-2"
                    size={22}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </main>

      <BottomNav />

    </div>
  );
}
