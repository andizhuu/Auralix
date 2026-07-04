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

export interface PositionResult {
  position: number;
}

export interface DurationResult {
  duration: number;
}

export interface SongsResult {
  songs: Song[];
}

export interface PlayOptions {
  uri: string;
}

export interface PlayingResult {
  playing: boolean;
}

export interface AuralixMusicPlugin {
  requestPermission(): Promise<PermissionResult>;
  getSongs(): Promise<SongsResult>;
  play(options: PlayOptions): Promise<void>;
  pause(): Promise<void>;
  resume(): Promise<void>;
  stop(): Promise<void>;
  isPlaying(): Promise<PlayingResult>;
  getCurrentPosition(): Promise<PositionResult>;
  getDuration(): Promise<DurationResult>;
}
