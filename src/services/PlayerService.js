import { AuralixMusic } from "@auralix/music";

class PlayerService {
  async play(song) {
    if (!song?.uri) {
      throw new Error("Song URI is empty");
    }

    return AuralixMusic.play({
      uri: song.uri,
    });
  }

  async seekTo(position) {
    return AuralixMusic.seekTo({
    position,
    });
  }

  async pause() {
    return AuralixMusic.pause();
  }

  async resume() {
    return AuralixMusic.resume();
  }

  async stop() {
    return AuralixMusic.stop();
  }

  async isPlaying() {
    const result = await AuralixMusic.isPlaying();
    return result.playing;
  }

  async getCurrentPosition() {
  const result = await AuralixMusic.getCurrentPosition();
  return result.position;
  }

  async getDuration() {
  const result = await AuralixMusic.getDuration();
  return result.duration;
}

}

export default new PlayerService();
