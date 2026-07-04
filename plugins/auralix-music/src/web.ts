import { WebPlugin } from "@capacitor/core";

import type {
  AuralixMusicPlugin,
  PermissionResult,
  SongsResult,
  PlayOptions,
  PlayingResult,
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
}
