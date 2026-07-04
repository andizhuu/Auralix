import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

import BottomNav from "../../components/BottomNav/BottomNav";
import Loading from "../../components/Loading/Loading";

import useMusicLibrary from "../../hooks/useMusicLibrary";
import { usePlayer } from "../../context/PlayerContext";

import SearchBar from "./components/SearchBar";
import SongCard from "./components/SongCard";
import EmptyState from "./components/EmptyState";
import ErrorState from "./components/ErrorState";

export default function Music() {
  const {
    songs,
    totalSongs,
    query,
    setQuery,
    loading,
    error,
    refresh,
  } = useMusicLibrary();

  const { play } = usePlayer();

  function handleSongClick(song) {
    console.log("Selected:", song);

    play(song);

    // Tahap berikutnya:
    // NativePlayer.play(song.uri);
  }

  return (
    <div
      className="min-h-screen pb-28 text-white"
      style={{
        background:
          "linear-gradient(180deg,#07111F 0%,#0B1220 50%,#111827 100%)",
      }}
    >
      <main className="mx-auto w-full max-w-md px-5 pt-8">
        <div className="flex items-center gap-4">
          <Link
            to="/home"
            className="rounded-xl bg-white/10 p-2"
          >
            <MdArrowBack size={24} />
          </Link>

          <div className="flex-1">
            <h1 className="text-3xl font-bold">
              Music Library
            </h1>

            <p className="text-cyan-400">
              {totalSongs} Lagu ditemukan
            </p>
          </div>
        </div>

        <SearchBar
          value={query}
          onChange={setQuery}
        />

        {loading && (
          <div className="flex justify-center">
            <Loading />
          </div>
        )}

        {!loading && error && (
          <ErrorState
            message={error}
            onRetry={refresh}
          />
        )}

        {!loading && !error && songs.length === 0 && (
          <EmptyState />
        )}

        {!loading && !error && songs.length > 0 && (
          <div className="mt-8 space-y-4">
            {songs.map((song, index) => (
              <SongCard
                key={song.uri || index}
                song={song}
                onClick={handleSongClick}
              />
            ))}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
