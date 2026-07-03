import { WebPlugin } from "@capacitor/core";

import type {
  AuralixMusicPlugin,
  PermissionResult,
  SongsResult,
} from "./definitions";

export class AuralixMusicWeb
  extends WebPlugin
  implements AuralixMusicPlugin
{
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
}
