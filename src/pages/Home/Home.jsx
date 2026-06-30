import { FaBell, FaCog } from "react-icons/fa";
import { motion } from "framer-motion";

import BottomNav from "../../components/BottomNav/BottomNav";
import MiniPlayer from "../../components/MiniPlayer/MiniPlayer";
import NowPlaying from "../../components/NowPlaying/NowPlaying";
import QuickProfile from "../../components/QuickProfile/QuickProfile";
import QuickEQ from "../../components/QuickEQ/QuickEQ";

export default function Home() {
  const hour = new Date().getHours();

  let greeting = "🌙 Selamat Malam";

  if (hour >= 5 && hour < 11) {
    greeting = "🌅 Selamat Pagi";
  } else if (hour >= 11 && hour < 15) {
    greeting = "☀️ Selamat Siang";
  } else if (hour >= 15 && hour < 18) {
    greeting = "🌇 Selamat Sore";
  }

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{
        background:
          "linear-gradient(180deg,#07111F 0%,#0B1220 55%,#111827 100%)",
      }}
    >
      <main className="mx-auto w-full max-w-md px-5 pt-8 pb-56">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="mb-8 flex items-center justify-between"
        >

          <div>

            <p className="text-base text-slate-400">
              {greeting}
            </p>

            <h1 className="mt-1 text-5xl font-black tracking-tight">
              Auralix
            </h1>

            <p className="mt-1 text-cyan-400 text-lg">
              Power Your Music
            </p>

          </div>

          <div className="flex items-center gap-4">

            <button className="text-2xl text-white hover:text-cyan-400 transition">
              <FaBell />
            </button>

            <button className="text-2xl text-white hover:text-cyan-400 transition">
              <FaCog />
            </button>

          </div>

        </motion.div>

        {/* Now Playing */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .15 }}
          className="mb-8"
        >

          <h2 className="mb-4 text-2xl font-bold">
            🎵 Sedang Diputar
          </h2>

          <NowPlaying />

        </motion.section>

        {/* Audio Profile */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="mb-8"
        >

          <h2 className="mb-4 text-2xl font-bold">
            🎧 Profil Audio
          </h2>

          <QuickProfile />

        </motion.section>

        {/* Quick EQ */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .45 }}
          className="mb-8"
        >

          <h2 className="mb-4 text-2xl font-bold">
            🎚 Penyeimbang Cepat
          </h2>

          <QuickEQ />

        </motion.section>

        {/* Playlist */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
        >

          <h2 className="mb-4 text-2xl font-bold">
            ❤️ Daftar Putar Favorit
          </h2>

          <div className="rounded-3xl border border-white/10 bg-[#1B2333]/80 p-6 backdrop-blur-xl shadow-xl">

            <p className="text-slate-300">
              Belum ada playlist.
            </p>

          </div>

        </motion.section>

      </main>

      {/* Mini Player */}
      <MiniPlayer />

      {/* Bottom Navigation */}
      <BottomNav />

    </div>
  );
}
