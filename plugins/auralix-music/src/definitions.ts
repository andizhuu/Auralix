export interface Song {
  title: string;
  artist: string;
  album: string;
  duration: number;
  uri: string;
}

export interface PermissionResult {
  granted: boolean;
}

export interface SongsResult {
  songs: Song[];
}

export interface AuralixMusicPlugin {
  requestPermission(): Promise<PermissionResult>;

  getSongs(): Promise<SongsResult>;
}
