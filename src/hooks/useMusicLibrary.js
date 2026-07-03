import { useCallback, useEffect, useMemo, useState } from "react";
import { AuralixMusic } from "@auralix/music";

export default function useMusicLibrary() {
  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadSongs = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      console.log("=== REQUEST PERMISSION ===");

      const permission = await AuralixMusic.requestPermission();

      console.log("Permission Result:", permission);

      if (permission?.granted !== true) {
        setError("Izin membaca musik ditolak.");
        setSongs([]);
        return;
      }

      console.log("=== LOAD SONGS ===");

      const result = await AuralixMusic.getSongs();

      console.log("Songs Result:", result);

      setSongs(result?.songs || []);
    } catch (err) {
      console.error("Music Error:", err);

      setError(
        err?.message ||
        JSON.stringify(err) ||
        "Gagal membaca musik."
      );

      setSongs([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSongs();
  }, [loadSongs]);

  const filteredSongs = useMemo(() => {
    if (!query.trim()) return songs;

    const keyword = query.toLowerCase();

    return songs.filter((song) =>
      [song.title, song.artist, song.album]
        .join(" ")
        .toLowerCase()
        .includes(keyword)
    );
  }, [songs, query]);

  return {
    songs: filteredSongs,
    totalSongs: songs.length,
    query,
    setQuery,
    loading,
    error,
    refresh: loadSongs,
  };
}
