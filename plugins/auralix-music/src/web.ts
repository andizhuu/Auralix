import { WebPlugin } from '@capacitor/core';

import type { AuralixMusicPlugin, Song } from './definitions';

export class AuralixMusicWeb
  extends WebPlugin
  implements AuralixMusicPlugin {

  async getSongs(): Promise<{ songs: Song[] }> {
    return {
      songs: [],
    };
  }
}
