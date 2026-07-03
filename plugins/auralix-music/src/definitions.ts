export interface Song {
  title: string;
  artist: string;
  album: string;
  duration: number;
  uri: string;
}

export interface AuralixMusicPlugin {
  getSongs(): Promise<{
    songs: Song[];
  }>;
}
