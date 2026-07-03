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
      const permission = await AuralixMusic.requestPermission();

      if (!permission.granted) {
        setError("Izin membaca musik ditolak.");
        setSongs([]);
        return;
      }

      const result = await AuralixMusic.getSongs();

      setSongs(result.songs || []);
    } catch (err) {
      console.error(err);
      setError(err?.message || "Gagal membaca musik.");
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
      [
        song.title,
        song.artist,
        song.album,
      ]
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
