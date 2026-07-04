import { AuralixMusic } from "@auralix/music";

class PlayerService {

  async play(song) {
    await AuralixMusic.play({
      uri: song.uri,
    });
  }

  async pause() {
    await AuralixMusic.pause();
  }

  async resume() {
    await AuralixMusic.resume();
  }

  async stop() {
    await AuralixMusic.stop();
  }

  async isPlaying() {
    return await AuralixMusic.isPlaying();
  }
}

export default new PlayerService();
