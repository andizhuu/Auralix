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
    public void requestPermission(PluginCall call) {

        if (getPermissionState("music") == PermissionState.GRANTED) {
            JSObject ret = new JSObject();
            ret.put("granted", true);
            call.resolve(ret);
            return;
        }

        requestPermissionForAlias(
                "music",
                call,
                "permissionCallback"
        );
    }

    @PermissionCallback
    private void permissionCallback(PluginCall call) {

        JSObject ret = new JSObject();

        ret.put(
                "granted",
                getPermissionState("music") == PermissionState.GRANTED
        );

        call.resolve(ret);
    }

    @PluginMethod
    public void getSongs(PluginCall call) {

        if (getPermissionState("music") != PermissionState.GRANTED) {
            call.reject("Permission not granted");
            return;
        }

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
