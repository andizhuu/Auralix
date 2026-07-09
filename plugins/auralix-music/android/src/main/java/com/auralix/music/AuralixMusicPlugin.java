package com.auralix.music;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Build;

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

   @Override
public void load() {

    super.load();

    MusicPlayer.setCompletionListener(() -> {

        JSObject data = new JSObject();

        notifyListeners("songCompleted", data);

    });

}

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

        JSObject ret = new JSObject();

        ret.put(
                "granted",
                hasMusicPermission()
        );

        call.resolve(ret);
    }

    @PluginMethod
    public void getSongs(PluginCall call) {

        if (!hasMusicPermission()) {
            call.reject("Permission not granted");
            return;
        }

        try {

            List<Song> songs =
                    MusicScanner.getSongs(getContext());

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

            call.resolve(ret);

        } catch (Exception e) {

            call.reject(e.getMessage());
        }
    }

    @PluginMethod
    public void play(PluginCall call) {

        String uri = call.getString("uri");

        if (uri == null) {

            call.reject("URI is required");
            return;
        }

        try {

            MusicPlayer.play(
                    getContext(),
                    uri
            );

            call.resolve();

        } catch (Exception e) {

            call.reject(e.getMessage());
        }
    }

    @PluginMethod
public void getCurrentPosition(PluginCall call) {

    JSObject ret = new JSObject();
    ret.put("position", MusicPlayer.getCurrentPosition());

    call.resolve(ret);
}

@PluginMethod
public void getDuration(PluginCall call) {

    JSObject ret = new JSObject();
    ret.put("duration", MusicPlayer.getDuration());

    call.resolve(ret);
}

    @PluginMethod
    public void pause(PluginCall call) {

        MusicPlayer.pause();

        call.resolve();
    }

    @PluginMethod
    public void resume(PluginCall call) {

        MusicPlayer.resume();

        call.resolve();
    }

    @PluginMethod
public void seekTo(PluginCall call) {

    Integer position = call.getInt("position");

    if (position == null) {
        call.reject("Position is required");
        return;
    }

    MusicPlayer.seekTo(position);

    call.resolve();
}

    @PluginMethod
    public void stop(PluginCall call) {

        MusicPlayer.stop();

        call.resolve();
    }

    @PluginMethod
    public void isPlaying(PluginCall call) {

        JSObject ret = new JSObject();

        ret.put(
                "playing",
                MusicPlayer.isPlaying()
        );

        call.resolve(ret);
    }
}
