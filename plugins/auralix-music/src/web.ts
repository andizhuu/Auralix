import { WebPlugin } from "@capacitor/core";

import type {
  AuralixMusicPlugin,
  PermissionResult,
  SongsResult,
  PlayOptions,
  SeekOptions,
  PlayingResult,
  PositionResult,
  DurationResult,
} from "./definitions";

export class AuralixMusicWeb
  extends WebPlugin
  implements AuralixMusicPlugin {

  async requestPermission(): Promise<PermissionResult> {
    return {
      granted: true,
    };
  }

  async getSongs(): Promise<SongsResult> {
    return {
      songs: [],
    };
  }

  async play(_options: PlayOptions): Promise<void> {
    console.warn("play() hanya tersedia di Android.");
  }

 async seekTo(_options: SeekOptions): Promise<void> {
  console.warn("seekTo() hanya tersedia di Android.");
 }

  async pause(): Promise<void> {
    console.warn("pause() hanya tersedia di Android.");
  }

  async resume(): Promise<void> {
    console.warn("resume() hanya tersedia di Android.");
  }

  async stop(): Promise<void> {
    console.warn("stop() hanya tersedia di Android.");
  }

  async isPlaying(): Promise<PlayingResult> {
    return {
      playing: false,
    };
  }

  async getCurrentPosition(): Promise<PositionResult> {
  return {
    position: 0,
  };
}

async getDuration(): Promise<DurationResult> {
  return {
    duration: 0,
  };
}

}
