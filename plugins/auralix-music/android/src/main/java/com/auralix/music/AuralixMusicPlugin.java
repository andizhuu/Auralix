package com.auralix.music;

import android.Manifest;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;

import java.util.List;

@CapacitorPlugin(
    name = "AuralixMusic",
    permissions = {
        @Permission(
            alias = "music",
            strings = {
                Manifest.permission.READ_MEDIA_AUDIO,
                Manifest.permission.READ_EXTERNAL_STORAGE
            }
        )
    }
)
public class AuralixMusicPlugin extends Plugin {

    @PluginMethod
    public void getSongs(PluginCall call) {

        if (getPermissionState("music") != PermissionState.GRANTED) {
            requestPermissionForAlias("music", call, "musicPermissionCallback");
            return;
        }

        loadSongs(call);
    }

    @PermissionCallback
    private void musicPermissionCallback(PluginCall call) {

        if (getPermissionState("music") == PermissionState.GRANTED) {
            loadSongs(call);
        } else {
            call.reject("Permission denied");
        }
    }

    private void loadSongs(PluginCall call) {

        List<Song> songs = MusicScanner.getSongs(getContext());

        JSArray result = new JSArray();

        for (Song song : songs) {

            JSObject obj = new JSObject();

            obj.put("title", song.title);
            obj.put("artist", song.artist);
            obj.put("album", song.album);
            obj.put("duration", song.duration);
            obj.put("uri", song.uri);

            result.put(obj);
        }

        JSObject ret = new JSObject();
        ret.put("songs", result);

        call.resolve(ret);
    }
}
