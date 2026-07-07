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

        Log.d(TAG, "URI = " + uri);

        player = new MediaPlayer();

        player.setAudioAttributes(
                new AudioAttributes.Builder()
                        .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
                        .setUsage(AudioAttributes.USAGE_MEDIA)
                        .build()
        );

        try {

            Log.d(TAG, "setDataSource()");
            player.setDataSource(context, Uri.parse(uri));

            Log.d(TAG, "prepare()");
            player.prepare();

            Log.d(TAG, "start()");
            player.start();

            currentUri = uri;

            Log.d(TAG, "isPlaying = " + player.isPlaying());

        } catch (Exception e) {

            Log.e(TAG, "Play failed", e);

            if (player != null) {
                player.release();
                player = null;
            }

            throw e;
        }
    }

    public static void pause() {
        if (player != null && player.isPlaying()) {
            player.pause();
        }
    }

    public static int getCurrentPosition() {

    if (player == null) {
        Log.d(TAG, "getCurrentPosition(): player = null");
        return 0;
    }

    try {
        int pos = player.getCurrentPosition();
        Log.d(TAG, "Current Position = " + pos);
        return pos;
    } catch (Exception e) {
        Log.e(TAG, "getCurrentPosition failed", e);
        return 0;
    }
}

   public static int getDuration() {

    if (player == null) {
        return 0;
    }

    try {
        return player.getDuration();
    } catch (Exception e) {
        return 0;
    }
}

    public static void resume() {
        if (player != null && !player.isPlaying()) {
            player.start();
        }
    }

    public static void stop() {
        if (player != null) {
            try {
                player.stop();
            } catch (Exception ignored) {
            }

            player.release();
            player = null;
            currentUri = null;
        }
    }

    public static boolean isPlaying() {
        return player != null && player.isPlaying();
    }

   public static void seekTo(int position) {

    if (player == null) {
        return;
    }

    try {
        player.seekTo(position);
    } catch (Exception e) {
        Log.e(TAG, "seekTo failed", e);
    }
}

    public static String getCurrentUri() {
        return currentUri;
    }
}
