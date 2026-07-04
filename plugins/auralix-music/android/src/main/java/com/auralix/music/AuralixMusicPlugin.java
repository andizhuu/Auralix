package com.auralix.music;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Build;
import android.util.Log;

import androidx.core.content.ContextCompat;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
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

    private static final String TAG = "AuralixMusic";

    /**
     * Cek permission langsung dari Android,
     * tidak memakai getPermissionState().
     */
    private boolean hasMusicPermission() {

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {

            return ContextCompat.checkSelfPermission(
                    getContext(),
                    Manifest.permission.READ_MEDIA_AUDIO
            ) == PackageManager.PERMISSION_GRANTED;

        }

        return ContextCompat.checkSelfPermission(
                getContext(),
                Manifest.permission.READ_EXTERNAL_STORAGE
        ) == PackageManager.PERMISSION_GRANTED;
    }

    @PluginMethod
    public void requestPermission(PluginCall call) {

        if (hasMusicPermission()) {

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

        boolean granted = hasMusicPermission();

        Log.d(TAG, "Permission = " + granted);

        JSObject ret = new JSObject();
        ret.put("granted", granted);

        call.resolve(ret);
    }

    @PluginMethod
    public void getSongs(PluginCall call) {

        if (!hasMusicPermission()) {
            call.reject("Permission not granted");
            return;
        }

        try {

            List<Song> songs = MusicScanner.getSongs(getContext());

            JSArray array = new JSArray();

            for (Song song : songs) {

                JSObject obj = new JSObject();

                obj.put("title", song.title);
                obj.put("artist", song.artist);
                obj.put("album", song.album);
                obj.put("duration", song.duration);
                obj.put("uri", song.uri);

                array.put(obj);
            }

            JSObject ret = new JSObject();
            ret.put("songs", array);

            Log.d(TAG, "Songs Found = " + songs.size());

            call.resolve(ret);

        } catch (Exception e) {

            Log.e(TAG, "Scanner Error", e);

            call.reject(e.getMessage());
        }
    }
}
