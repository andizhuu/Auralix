import { registerPlugin } from '@capacitor/core';

import type { AuralixMusicPlugin } from './definitions';

const AuralixMusic = registerPlugin<AuralixMusicPlugin>('AuralixMusic', {
  web: () => import('./web').then((m) => new m.AuralixMusicWeb()),
});

export * from './definitions';
export { AuralixMusic };
