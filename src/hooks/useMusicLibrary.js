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
      console.log("========== AURALIX ==========");
      console.log("Request Permission...");

      const permission = await AuralixMusic.requestPermission();

      console.log("Permission Result:", permission);

      // Tampilkan hasil permission langsung di layar
      if (permission?.granted !== true) {
        setError(
          "Permission Result:\n\n" +
          JSON.stringify(permission, null, 2)
        );
        setSongs([]);
        return;
      }

      console.log("Permission Granted");

      const result = await AuralixMusic.getSongs();

      console.log("Songs Result:", result);

      if (!result?.songs) {
        setError(
          "Songs Result:\n\n" +
          JSON.stringify(result, null, 2)
        );
        setSongs([]);
        return;
      }

      setSongs(result.songs);

      if (result.songs.length === 0) {
        setError("Tidak ditemukan lagu di perangkat.");
      }

    } catch (err) {
      console.error(err);

      setError(
        "Exception:\n\n" +
        JSON.stringify(err, null, 2)
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

    return songs.filter(song =>
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
