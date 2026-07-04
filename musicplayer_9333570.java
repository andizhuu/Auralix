package com.auralix.music;

import android.content.Context;
import android.media.AudioAttributes;
import android.media.MediaPlayer;
import android.net.Uri;
import android.util.Log;

public class MusicPlayer {

    private static final String TAG = "MusicPlayer";

    private static MediaPlayer player;

    private static String currentUri;

    public static void play(Context context, String uri) throws Exception {

        stop();

        player = new MediaPlayer();

        player.setAudioAttributes(
                new AudioAttributes.Builder()
                        .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
                        .setUsage(AudioAttributes.USAGE_MEDIA)
                        .build()
        );

        player.setDataSource(
                context,
                Uri.parse(uri)
        );

        player.prepare();

        player.start();

        currentUri = uri;

        Log.d(TAG, "Playing : " + uri);
    }

    public static void pause() {

        if (player == null)
            return;

        if (player.isPlaying()) {

            player.pause();

            Log.d(TAG, "Paused");
        }
    }

    public static void resume() {

        if (player == null)
            return;

        if (!player.isPlaying()) {

            player.start();

            Log.d(TAG, "Resume");
        }
    }

    public static void stop() {

        if (player == null)
            return;

        try {

            player.stop();

        } catch (Exception ignored) {
        }

        player.release();

        player = null;

        currentUri = null;

        Log.d(TAG, "Stopped");
    }

    public static boolean isPlaying() {

        return player != null &&
                player.isPlaying();
    }

    public static String getCurrentUri() {

        return currentUri;
    }
}
