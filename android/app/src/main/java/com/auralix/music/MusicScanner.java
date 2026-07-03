package com.auralix.music;

import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import android.provider.MediaStore;

import java.util.ArrayList;
import java.util.List;

public class MusicScanner {

    public static List<Song> getSongs(Context context) {

        List<Song> songs = new ArrayList<>();

        Uri collection = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;

        String[] projection = {
                MediaStore.Audio.Media._ID,
                MediaStore.Audio.Media.TITLE,
                MediaStore.Audio.Media.ARTIST,
                MediaStore.Audio.Media.ALBUM,
                MediaStore.Audio.Media.DURATION
        };

        String selection =
                MediaStore.Audio.Media.IS_MUSIC + " != 0";

        Cursor cursor = context.getContentResolver().query(
                collection,
                projection,
                selection,
                null,
                MediaStore.Audio.Media.TITLE + " ASC"
        );

        if (cursor != null) {

            int idCol =
                    cursor.getColumnIndexOrThrow(MediaStore.Audio.Media._ID);

            int titleCol =
                    cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.TITLE);

            int artistCol =
                    cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.ARTIST);

            int albumCol =
                    cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.ALBUM);

            int durationCol =
                    cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.DURATION);

            while (cursor.moveToNext()) {

                long id = cursor.getLong(idCol);

                String uri = Uri.withAppendedPath(
                        MediaStore.Audio.Media.EXTERNAL_CONTENT_URI,
                        String.valueOf(id)
                ).toString();

                songs.add(new Song(
                        cursor.getString(titleCol),
                        cursor.getString(artistCol),
                        cursor.getString(albumCol),
                        cursor.getLong(durationCol),
                        uri
                ));
            }

            cursor.close();
        }

        return songs;
    }
}
